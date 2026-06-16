import { diagnosticWhatsAppUrl, generalWhatsAppUrl } from '../utils/whatsapp'

const badges = [
  'Reparo de módulos e transmissões',
  'DSG DQ200 • DQ250 • Audi/VW',
  'Powershift • GM 6T30 • Multimarcas',
  'Audi • Mercedes • BMW • Premium',
]

const trustItems = [
  '+75 mil seguidores acompanhando tecnologia automotiva',
  'Especialistas em câmbio automático',
  'Equipamentos de concessionária online',
  'Peças em pronta entrega',
]

export default function Hero(){
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-black scroll-mt-24">
      <div className="absolute inset-0 z-0">
        <svg
          className="h-full w-full"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="redGlow" cx="48%" cy="46%" r="62%">
              <stop offset="0%" stopColor="#B91C1C" stopOpacity="0.36" />
              <stop offset="48%" stopColor="#7F1D1D" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#050505" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="carGlow" cx="72%" cy="54%" r="40%">
              <stop offset="0%" stopColor="#DC2626" stopOpacity="0.28" />
              <stop offset="52%" stopColor="#991B1B" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#050505" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="fadeBottom" x1="720" y1="0" x2="720" y2="900">
              <stop offset="0%" stopColor="#000000" stopOpacity="0.10" />
              <stop offset="58%" stopColor="#000000" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.94" />
            </linearGradient>
            <linearGradient id="carLine" x1="560" y1="300" x2="1360" y2="560">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.40" />
              <stop offset="100%" stopColor="#DC2626" stopOpacity="0.30" />
            </linearGradient>
          </defs>

          <rect width="1440" height="900" fill="#050505" />
          <rect width="1440" height="900" fill="url(#redGlow)" />
          <rect width="1440" height="900" fill="url(#carGlow)" />

          <path
            d="M90 675 C315 540 535 540 735 580 C935 620 1105 520 1360 365"
            stroke="#DC2626"
            strokeWidth="3"
            strokeOpacity="0.32"
          />
          <path
            d="M120 610 C300 475 470 455 650 485 C820 512 960 415 1305 275"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeOpacity="0.11"
          />

          <g opacity="0.06">
            <path d="M0 760 H1440" stroke="#FFFFFF" />
            <path d="M0 700 H1440" stroke="#FFFFFF" />
          </g>

          <g opacity="0.16">
            <circle cx="1175" cy="225" r="170" stroke="#DC2626" strokeWidth="1" />
            <circle cx="1175" cy="225" r="104" stroke="#DC2626" strokeWidth="1" />
          </g>

          <g opacity="0.24">
            <path
              d="M590 455 C690 350 850 318 1035 350 C1150 370 1245 420 1345 492"
              stroke="url(#carLine)"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M650 505 C755 430 925 420 1085 455 C1195 480 1260 522 1325 570"
              stroke="#DC2626"
              strokeWidth="6"
              strokeLinecap="round"
              strokeOpacity="0.82"
            />
            <path
              d="M760 430 C820 360 935 350 1040 378"
              stroke="#FFFFFF"
              strokeWidth="4"
              strokeLinecap="round"
              strokeOpacity="0.53"
            />
            <circle cx="760" cy="575" r="48" stroke="#FFFFFF" strokeWidth="4" strokeOpacity="0.28" />
            <circle cx="1160" cy="575" r="48" stroke="#FFFFFF" strokeWidth="4" strokeOpacity="0.28" />
          </g>

          <rect width="1440" height="900" fill="url(#fadeBottom)" />
        </svg>
      </div>

      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container py-24 md:py-28">
          <div className="max-w-4xl">
            <div className="text-sm font-semibold uppercase tracking-wide text-red-400">Centro Técnico de Alta Performance</div>
            <h1 className="mt-4 max-w-4xl text-[2.35rem] font-extrabold leading-[1.05] sm:text-5xl lg:text-[3.35rem]">
              <span className="block">Referência Nacional</span>
              <span className="block">em Mecatrônicas Automotivas</span>
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-300 md:text-lg">
              Diagnóstico avançado, reparação de módulos eletrônicos e soluções para transmissões automáticas de veículos nacionais, importados e premium.
            </p>

            <div className="mt-7 grid max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {badges.map((badge) => (
                <span key={badge} className="flex min-h-14 items-center rounded border border-white/10 bg-white/[0.075] px-4 py-3 text-sm text-gray-100 shadow-lg shadow-red-950/25 backdrop-blur-xl ring-1 ring-red-500/15 transition hover:border-red-700/70 hover:bg-red-950/20">
                  {badge}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={diagnosticWhatsAppUrl} target="_blank" rel="noreferrer" className="btn-primary text-center">Diagnosticar meu câmbio</a>
              <a href={generalWhatsAppUrl} target="_blank" rel="noreferrer" className="btn-ghost text-center">Conheça nossas Soluções</a>
            </div>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-400">
              Seu câmbio apresentou falha? Evite substituições caras antes de um diagnóstico especializado.
            </p>

            <div className="mt-10 grid max-w-4xl grid-cols-1 gap-3 border-l border-red-800/70 pl-5 sm:grid-cols-2 lg:grid-cols-4">
              {trustItems.map((item) => (
                <div key={item} className="text-sm font-medium text-gray-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
