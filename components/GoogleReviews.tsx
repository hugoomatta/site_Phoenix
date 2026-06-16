import type { ReviewsResponse } from '../types/review'

const fallbackReviewsUrl = 'https://www.google.com/search?q=Phoenix+Imports+%26+Imports+avaliacoes'

function Stars({n}:{n:number}){
  return (
    <div className="flex text-lg text-yellow-400" aria-label={`${n} de 5 estrelas`}>
      {Array.from({length:5}).map((_,i)=> <span key={i} className={i<n? 'opacity-100':'opacity-25'}>★</span>)}
    </div>
  )
}

function getGoogleReviewUrl(){
  const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID
  return placeId ? `https://search.google.com/local/writereview?placeid=${placeId}` : fallbackReviewsUrl
}

export default function GoogleReviews({ response }: { response: ReviewsResponse }){
  const { reviews, rating, total, source, googleMapsUrl } = response
  const googleReviewUrl = getGoogleReviewUrl()
  const googleReviewsUrl = googleMapsUrl || fallbackReviewsUrl
  const displayRating = rating ?? 4.7
  const displayTotal = total ?? reviews.length
  const isGoogleLive = source === 'google'

  return (
    <section className="scroll-mt-24">
      <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-red-400">Avaliações</div>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">O que dizem sobre a Phoenix</h2>
          <p className="mt-4 text-gray-300">
            Avaliações reais de clientes no Google reforçam nossa autoridade técnica e qualidade no atendimento.
          </p>
        </div>

        <div className="rounded-lg border border-red-900/40 bg-[radial-gradient(circle_at_18%_0%,rgba(220,38,38,0.20),transparent_32%),linear-gradient(135deg,rgba(17,24,39,0.86),rgba(0,0,0,0.94))] p-6 shadow-2xl shadow-red-950/20">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-6xl font-extrabold leading-none">{displayRating.toFixed(1)}</div>
              <div className="mt-2"><Stars n={Math.round(displayRating)} /></div>
              <p className="mt-2 text-sm text-gray-300">
                baseado em {displayTotal} avaliações no Google
              </p>
              {!isGoogleLive && (
                <p className="mt-2 text-xs text-red-200">Conecte o Google Places para exibir dados reais.</p>
              )}
            </div>
            <div className="flex flex-col gap-3 sm:min-w-56">
              <a className="btn-primary text-center" href={googleReviewsUrl} target="_blank" rel="noreferrer">Ver avaliações no Google</a>
              <a className="btn-ghost text-center" href={googleReviewUrl} target="_blank" rel="noreferrer">Avaliar no Google</a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
        {reviews.map((r,idx)=> (
          <article key={`${r.authorName}-${idx}`} className="rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-lg shadow-black/30 backdrop-blur-md transition hover:border-red-700/70 hover:bg-red-950/20">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-red-900/50 bg-black/45 text-sm font-semibold text-red-100">
                {r.profilePhoto ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={r.profilePhoto} alt="" className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                ) : (
                  r.authorName[0]
                )}
              </div>
              <div>
                <div className="font-semibold">{r.authorName}</div>
                <Stars n={Math.round(r.rating)} />
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-300">{r.comment}</p>
            <div className="mt-3 text-xs text-gray-500">{r.date}</div>
          </article>
        ))}
      </div>

      <p className="mt-4 text-sm text-gray-500">
        {isGoogleLive ? 'Dados carregados diretamente do Google Places.' : 'Exibindo avaliações demonstrativas até configurar as credenciais do Google Places.'}
      </p>
    </section>
  )
}
