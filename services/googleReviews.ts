import axios from 'axios'
import type { Review, ReviewsResponse } from '../types/review'
import { MOCK_REVIEWS } from '../data/reviews'

type GoogleReviewNew = {
  authorAttribution?: {
    displayName?: string
    uri?: string
    photoUri?: string
  }
  rating?: number
  text?: {
    text?: string
  }
  relativePublishTimeDescription?: string
  publishTime?: string
}

type GooglePlaceDetailsNewResponse = {
  displayName?: {
    text?: string
  }
  rating?: number
  userRatingCount?: number
  googleMapsUri?: string
  reviews?: GoogleReviewNew[]
}

type GoogleReviewLegacy = {
  author_name?: string
  author_url?: string
  rating?: number
  text?: string
  profile_photo_url?: string
  relative_time_description?: string
  time?: number
}

type GooglePlaceDetailsLegacyResponse = {
  status?: string
  error_message?: string
  result?: {
    name?: string
    reviews?: GoogleReviewLegacy[]
    rating?: number
    user_ratings_total?: number
    url?: string
  }
}

let cache: { ts: number; data: ReviewsResponse } | null = null
const CACHE_TTL = 1000 * 60 * 30

function formatLegacyDate(time?: number){
  return time ? new Date(time * 1000).toLocaleDateString('pt-BR') : ''
}

function mapNewReview(item: GoogleReviewNew): Review {
  return {
    authorName: item.authorAttribution?.displayName || 'Cliente Google',
    rating: item.rating || 5,
    comment: item.text?.text || '',
    profilePhoto: item.authorAttribution?.photoUri,
    authorUrl: item.authorAttribution?.uri,
    date: item.relativePublishTimeDescription || item.publishTime || '',
  }
}

function mapLegacyReview(item: GoogleReviewLegacy): Review {
  return {
    authorName: item.author_name || 'Cliente Google',
    rating: item.rating || 5,
    comment: item.text || '',
    profilePhoto: item.profile_photo_url,
    authorUrl: item.author_url,
    date: item.relative_time_description || formatLegacyDate(item.time),
  }
}

async function fetchFromGoogleNew(apiKey: string, placeId: string): Promise<ReviewsResponse | null>{
  const fieldMask = [
    'displayName',
    'rating',
    'userRatingCount',
    'googleMapsUri',
    'reviews',
  ].join(',')

  const res = await axios.get<GooglePlaceDetailsNewResponse>(
    `https://places.googleapis.com/v1/places/${placeId}`,
    {
      timeout: 7000,
      params: { languageCode: 'pt-BR' },
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': fieldMask,
      },
    }
  )

  const reviews = (res.data.reviews || []).map(mapNewReview).filter((review) => review.comment)

  return {
    reviews,
    rating: res.data.rating,
    total: res.data.userRatingCount,
    source: 'google',
    placeName: res.data.displayName?.text,
    googleMapsUrl: res.data.googleMapsUri,
  }
}

async function fetchFromGoogleLegacy(apiKey: string, placeId: string): Promise<ReviewsResponse | null>{
  const res = await axios.get<GooglePlaceDetailsLegacyResponse>(
    'https://maps.googleapis.com/maps/api/place/details/json',
    {
      timeout: 7000,
      params: {
        place_id: placeId,
        fields: 'name,reviews,user_ratings_total,rating,url',
        language: 'pt-BR',
        key: apiKey,
      },
    }
  )

  if(res.data.status && res.data.status !== 'OK'){
    return null
  }

  const result = res.data.result
  const reviews = (result?.reviews || []).map(mapLegacyReview).filter((review) => review.comment)

  return {
    reviews,
    rating: result?.rating,
    total: result?.user_ratings_total,
    source: 'google',
    placeName: result?.name,
    googleMapsUrl: result?.url,
  }
}

async function fetchFromGoogle(apiKey?: string, placeId?: string): Promise<ReviewsResponse | null>{
  if(!apiKey || !placeId) return null

  try{
    const google = await fetchFromGoogleNew(apiKey, placeId)
    if(google?.reviews.length || google?.rating) return google
  }catch{
    // Keep the legacy request as a compatibility fallback for existing Google projects.
  }

  try{
    const google = await fetchFromGoogleLegacy(apiKey, placeId)
    if(google?.reviews.length || google?.rating) return google
  }catch{
    return null
  }

  return null
}

function fetchMockPlaceDetails(): ReviewsResponse {
  const reviews = MOCK_REVIEWS.slice(0,6)
  const total = MOCK_REVIEWS.length
  const rating = Math.round((MOCK_REVIEWS.reduce((s,r)=>s+r.rating,0)/MOCK_REVIEWS.length)*10)/10

  return { reviews, rating, total, source: 'mock' }
}

export async function getReviews(): Promise<ReviewsResponse>{
  if(cache && (Date.now() - cache.ts) < CACHE_TTL) return cache.data

  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  const placeId = process.env.GOOGLE_PLACE_ID
  const forceMock = process.env.USE_MOCK_PLACES === 'true'

  const result = !forceMock ? await fetchFromGoogle(apiKey, placeId) : null
  const data = result || fetchMockPlaceDetails()

  cache = { ts: Date.now(), data }
  return data
}
