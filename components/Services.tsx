import Image from 'next/image'
import { AUTHORITY_STATS, LAB_FEATURES, SERVICE_CATEGORIES, type ServiceIcon, type ServiceCategory } from '../data/services'
import { DEFAULT_WHATSAPP_URL } from '../lib/whatsapp'

function ServiceIconGraphic({ type }: { type: ServiceIcon }){
  const common = 'stroke-current'

  if(type === 'chip'){
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <rect x="7" y="7" width="10" height="10" rx="2" className={common} strokeWidth="1.8" />
        <path d="M4 9h3M4 15h3M17 9h3M17 15h3M9 4v3M15 4v3M9 17v3M15 17v3" className={common} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  }

  if(type === 'gearbox'){
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="3" className={common} strokeWidth="1.8" />
        <circle cx="16" cy="16" r="3" className={common} strokeWidth="1.8" />
        <path d="M10.2 10.2l3.6 3.6M15 6h4v4M5 18h4v-4" className={common} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if(type === 'scanner'){
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <rect x="5" y="4" width="14" height="16" rx="3" className={common} strokeWidth="1.8" />
        <path d="M8 9h8M8 13h5M9 17h.01M13 17h.01M17 17h.01" className={common} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  }

  if(type === 'performance'){
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M4 16a8 8 0 1116 0" className={common} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 16l4-6M7 16h10" className={common} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <rect x="6" y="6" width="12" height="12" rx="2" className={common} strokeWidth="1.8" />
      <path d="M9 10h6M9 14h4M12 2v4M12 18v4" className={common} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function CategoryBackground({ category }: { category: ServiceCategory }){
  if(category.tone === 'performance'){
    return (
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <svg viewBox="0 0 900 420" className="h-full w-full" fill="none" aria-hidden="true">
          <path d="M70 300a210 210 0 01420 0" stroke="#ffffff" strokeWidth="2" />
          <path d="M280 300l125-155" stroke="#dc2626" strokeWidth="4" strokeLinecap="round" />
          <path d="M560 115h190M560 165h140M560 215h220" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          <circle cx="405" cy="145" r="9" fill="#dc2626" />
        </svg>
      </div>
    )
  }

  if(category.tone === 'diagnostics'){
    return (
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <svg viewBox="0 0 900 420" className="h-full w-full" fill="none" aria-hidden="true">
          <rect x="560" y="70" width="170" height="235" rx="22" stroke="#ffffff" strokeWidth="2" />
          <path d="M595 125h100M595 170h70M595 235h120M170 260h220M280 150v220M390 260h170" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          <circle cx="280" cy="260" r="9" fill="#dc2626" />
          <circle cx="560" cy="260" r="9" fill="#dc2626" />
          <path d="M72 330 C230 250 420 250 615 300 C735 330 810 285 870 238" stroke="#dc2626" strokeWidth="3" />
        </svg>
      </div>
    )
  }

  if(category.tone === 'mechatronics'){
    return (
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <svg viewBox="0 0 900 420" className="h-full w-full" fill="none" aria-hidden="true">
          <rect x="520" y="70" width="210" height="145" rx="18" stroke="#ffffff" strokeWidth="2" />
          <path d="M550 110h150M550 145h95M730 125h70M730 165h90M640 215v80M640 295h130M770 295v70" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          <circle cx="640" cy="215" r="8" fill="#dc2626" />
          <circle cx="770" cy="295" r="8" fill="#dc2626" />
          <path d="M40 330 C230 235 420 245 610 292 C730 320 810 290 880 240" stroke="#dc2626" strokeWidth="3" />
        </svg>
      </div>
    )
  }

  return null
}

function emphasizedTitle(title: string){
  const words = ['Potência', 'Precisão', 'Tecnologia', 'Performance']
  return words.reduce<Array<string | JSX.Element>>((parts, word) => {
    return parts.flatMap((part) => {
      if(typeof part !== 'string' || !part.includes(word)) return [part]
      const [before, ...rest] = part.split(word)
      return [
        before,
        <span key={`${title}-${word}`} className="text-red-400">{word}</span>,
        rest.join(word),
      ]
    })
  }, [title])
}

export default function Services(){
  return (
    <section id="services" className="scroll-mt-24">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-red-400">Serviços especializados</div>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">
            Centro de Tecnologia em Mecatrônicas e Transmissões Automáticas
          </h2>
          <p className="mt-4 max-w-3xl text-gray-300">
            A Phoenix Imports & Imports é referência nacional em diagnóstico avançado, reparação eletrônica e soluções para sistemas de transmissão automática de alta complexidade.
          </p>
        </div>

        <div className="relative min-h-[26rem] overflow-hidden rounded-lg border border-red-900/50 bg-gray-950 shadow-2xl shadow-red-950/20 motion-safe:animate-[fadeIn_700ms_ease-out]">
          <Image
            src="/technical-lab.png"
            alt="Laboratório técnico automotivo com módulos, placas eletrônicas e componentes de transmissão"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/25 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 rounded border border-white/10 bg-black/55 p-4 backdrop-blur">
            <div className="text-sm text-red-300">Laboratório especializado</div>
            <div className="mt-1 text-xl font-bold">Engenharia aplicada ao reparo automotivo</div>
            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
              {LAB_FEATURES.map((feature) => (
                <div key={feature.label} className="flex items-center gap-2 rounded border border-red-950/60 bg-black/35 px-3 py-2 text-xs text-gray-100">
                  <span className="h-4 w-4 [&>svg]:h-4 [&>svg]:w-4">
                    <ServiceIconGraphic type={feature.icon} />
                  </span>
                  <span>{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-lg border border-red-900/40 bg-[radial-gradient(circle_at_12%_0%,rgba(220,38,38,0.20),transparent_32%),linear-gradient(135deg,rgba(17,24,39,0.88),rgba(0,0,0,0.92))] p-6 shadow-2xl shadow-red-950/20 md:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <div>
            <h3 className="text-2xl font-bold md:text-3xl">Onde muitos substituem, nós recuperamos.</h3>
            <p className="mt-3 text-gray-300">
              Com laboratório próprio, equipamentos avançados e domínio em eletrônica automotiva, recuperamos módulos e mecatrônicas com precisão técnica, reduzindo custos e preservando componentes originais.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {AUTHORITY_STATS.map((stat) => (
              <div key={stat.value} className="rounded border border-white/10 bg-white/[0.06] px-4 py-4 backdrop-blur-md">
                <div className="text-3xl font-extrabold leading-none text-red-500">{stat.value}</div>
                <div className="mt-2 text-sm leading-snug text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 rounded border border-red-900/50 bg-black/35 px-5 py-4 text-sm font-semibold text-gray-100">
          Antes de trocar uma transmissão completa, descubra se existe uma solução técnica.
        </div>
      </div>

      <div className="mt-12 space-y-12">
        {SERVICE_CATEGORIES.map((category) => (
          <div key={category.name}>
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <h3 className="text-xl font-bold">{emphasizedTitle(category.name)}</h3>
                {category.subtitle && <p className="mt-2 max-w-3xl text-sm text-gray-400">{emphasizedTitle(category.subtitle)}</p>}
              </div>
              <div className="hidden h-px flex-1 bg-gradient-to-r from-red-800 to-transparent md:block" />
            </div>
            <div className="relative mt-5 grid grid-cols-1 gap-5 overflow-hidden rounded-lg bg-[radial-gradient(circle_at_85%_10%,rgba(220,38,38,0.14),transparent_28%),linear-gradient(135deg,rgba(17,24,39,0.18),transparent)] p-1 md:grid-cols-2 xl:grid-cols-3">
              <CategoryBackground category={category} />
              {category.services.map((service) => (
                <article key={service.title} className="group relative flex min-h-[17.5rem] flex-col rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-lg shadow-black/30 backdrop-blur-md ring-1 ring-red-950/30 transition duration-300 hover:-translate-y-1 hover:border-red-600/80 hover:bg-red-950/20 hover:shadow-[0_0_34px_rgba(220,38,38,0.22)]">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded border border-red-800/50 bg-black/35 text-red-400 transition group-hover:border-red-500 group-hover:text-red-300">
                      <ServiceIconGraphic type={service.icon} />
                    </div>
                    <span className="rounded border border-red-700/60 bg-red-950/40 px-3 py-1 text-xs font-semibold text-red-100">
                      {service.tag}
                    </span>
                  </div>
                  <h4 className="mt-5 font-semibold">{service.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">{service.desc}</p>
                  {service.highlights && (
                    <div className="mt-4 space-y-2 text-sm text-gray-300">
                      {service.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-2">
                          <span className="text-red-400">✓</span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
            {category.tone === 'mechatronics' && (
              <div className="mt-6 flex flex-col gap-4 rounded-lg border border-red-900/50 bg-black/35 p-5 shadow-lg shadow-red-950/20 backdrop-blur-md md:flex-row md:items-center md:justify-between">
                <div>
                  <h4 className="font-semibold">Seu veículo apresentou falha no câmbio?</h4>
                  <p className="mt-1 text-sm text-gray-300">Antes de trocar componentes caros, consulte nossos especialistas.</p>
                </div>
                <a href={DEFAULT_WHATSAPP_URL} target="_blank" rel="noreferrer" className="btn-primary text-center">Solicitar diagnóstico especializado</a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
