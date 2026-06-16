import Image from 'next/image'
import { YOUTUBE_CHANNEL_URL } from '../data/youtubeVideos'
import type { YoutubeVideosResponse } from '../types/youtube'

function formatViews(value?: string){
  if(!value) return null
  const views = Number(value)
  if(Number.isNaN(views)) return null
  return new Intl.NumberFormat('pt-BR', { notation: 'compact', maximumFractionDigits: 1 }).format(views)
}

export default function Videos({ response }: { response: YoutubeVideosResponse }){
  return (
    <section id="videos" className="scroll-mt-24">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-wide text-red-400">Vídeos</div>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">Na prática: tecnologia automotiva em ação</h2>
          <p className="mt-4 text-gray-300">
            Acompanhe diagnósticos reais, reparação de módulos, testes em bancada e soluções aplicadas em transmissões automáticas.
          </p>
        </div>
        <a className="btn-primary text-center" href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noreferrer">Ver todos os conteúdos no YouTube</a>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {response.videos.map((video)=> {
          const views = formatViews(video.viewCount)

          return (
            <a key={video.url} href={video.url} target="_blank" rel="noreferrer" className="group block overflow-hidden rounded-lg border border-white/10 bg-white/[0.055] shadow-xl shadow-black/30 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-red-700/70 hover:bg-red-950/20 hover:shadow-[0_0_38px_rgba(220,38,38,0.24)]">
              <div className="relative aspect-video overflow-hidden bg-gray-950">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute left-4 top-4 rounded border border-red-900/60 bg-black/55 px-3 py-1 text-xs font-medium text-red-100 backdrop-blur">
                  {video.tag}
                </div>
                {views && (
                  <div className="absolute bottom-4 left-4 rounded border border-white/10 bg-black/55 px-3 py-1 text-xs text-gray-100 backdrop-blur">
                    {views} visualizações
                  </div>
                )}
                <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-red-700 text-sm font-bold text-white shadow-[0_0_34px_rgba(220,38,38,0.65)] transition group-hover:scale-110">
                  Play
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold">{video.title}</h3>
                {response.source === 'youtube' && <p className="mt-2 text-xs text-gray-500">Atualizado automaticamente via YouTube API</p>}
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}
