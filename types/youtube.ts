export type YoutubeVideo = {
  id: string
  title: string
  tag: string
  url: string
  thumbnail: string
  viewCount?: string
}

export type YoutubeVideosResponse = {
  videos: YoutubeVideo[]
  source: 'youtube' | 'manual'
}
