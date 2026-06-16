import axios from 'axios'
import { MANUAL_YOUTUBE_VIDEOS } from '../data/youtubeVideos'
import type { YoutubeVideo, YoutubeVideosResponse } from '../types/youtube'

type YoutubeSearchResponse = {
  items?: Array<{
    id?: {
      videoId?: string
    }
    snippet?: {
      title?: string
      thumbnails?: {
        high?: { url?: string }
        medium?: { url?: string }
      }
    }
  }>
}

type YoutubeVideosDetailsResponse = {
  items?: Array<{
    id?: string
    snippet?: {
      title?: string
      thumbnails?: {
        maxres?: { url?: string }
        high?: { url?: string }
        medium?: { url?: string }
      }
    }
    statistics?: {
      viewCount?: string
    }
  }>
}

let cache: { ts: number; data: YoutubeVideosResponse } | null = null
const CACHE_TTL = 1000 * 60 * 30

function manualResponse(): YoutubeVideosResponse {
  return { videos: MANUAL_YOUTUBE_VIDEOS, source: 'manual' }
}

function formatVideo(item: NonNullable<YoutubeVideosDetailsResponse['items']>[number]): YoutubeVideo | null {
  if(!item.id) return null

  return {
    id: item.id,
    title: item.snippet?.title || 'Vídeo Phoenix',
    tag: 'YouTube',
    url: `https://www.youtube.com/watch?v=${item.id}`,
    thumbnail: item.snippet?.thumbnails?.maxres?.url || item.snippet?.thumbnails?.high?.url || item.snippet?.thumbnails?.medium?.url || `https://img.youtube.com/vi/${item.id}/hqdefault.jpg`,
    viewCount: item.statistics?.viewCount,
  }
}

export async function getYoutubeVideos(): Promise<YoutubeVideosResponse> {
  if(cache && Date.now() - cache.ts < CACHE_TTL) return cache.data

  const apiKey = process.env.YOUTUBE_API_KEY
  const channelId = process.env.YOUTUBE_CHANNEL_ID

  if(!apiKey || !channelId){
    const data = manualResponse()
    cache = { ts: Date.now(), data }
    return data
  }

  try{
    const search = await axios.get<YoutubeSearchResponse>('https://www.googleapis.com/youtube/v3/search', {
      timeout: 7000,
      params: {
        key: apiKey,
        channelId,
        part: 'snippet',
        order: 'date',
        maxResults: 3,
        type: 'video',
      },
    })

    const ids = (search.data.items || [])
      .map((item) => item.id?.videoId)
      .filter((id): id is string => Boolean(id))

    if(!ids.length){
      const data = manualResponse()
      cache = { ts: Date.now(), data }
      return data
    }

    const details = await axios.get<YoutubeVideosDetailsResponse>('https://www.googleapis.com/youtube/v3/videos', {
      timeout: 7000,
      params: {
        key: apiKey,
        id: ids.join(','),
        part: 'snippet,statistics',
      },
    })

    const byId = new Map((details.data.items || []).map((item) => [item.id, item]))
    const videos = ids
      .map((id) => byId.get(id))
      .map((item) => item ? formatVideo(item) : null)
      .filter((video): video is YoutubeVideo => Boolean(video))

    const data: YoutubeVideosResponse = {
      videos: videos.length ? videos : MANUAL_YOUTUBE_VIDEOS,
      source: videos.length ? 'youtube' : 'manual',
    }

    cache = { ts: Date.now(), data }
    return data
  }catch{
    const data = manualResponse()
    cache = { ts: Date.now(), data }
    return data
  }
}
