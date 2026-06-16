import type { NextApiRequest, NextApiResponse } from 'next'
import { getYoutubeVideos } from '../../services/youtubeVideos'

export default async function handler(req: NextApiRequest, res: NextApiResponse){
  try{
    const data = await getYoutubeVideos()
    res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate')
    return res.status(200).json(data)
  }catch{
    return res.status(500).json({ error: 'Unable to fetch YouTube videos' })
  }
}
