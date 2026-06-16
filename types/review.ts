export type Review = {
  authorName: string
  rating: number
  comment: string
  profilePhoto?: string
  date: string
  authorUrl?: string
}

export type ReviewsResponse = {
  reviews: Review[]
  rating?: number
  total?: number
  source: 'google' | 'mock' | 'unavailable'
  placeName?: string
  googleMapsUrl?: string
}

