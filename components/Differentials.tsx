type DifferentialIcon = 'chip' | 'tool' | 'scanner' | 'trophy' | 'map' | 'gear'

const differentials: Array<{
  number: string
  title: string
  description: string
  icon: DifferentialIcon
}> = [
  {
    number: '01',
    title: 'Laboratório Técnico Especializado',
    description: 'Estrutura dedicada para diagnóstico, reparo eletrônico e recuperação de módulos automotivos de alta complexidade.',
    icon: 'chip',
  },
  {
    number: '02',
    title: 'Reparo antes da substituição',
    description: 'Onde muitos substituem componentes completos, aplicamos engenharia e tecnologia para recuperar sistemas.',
    icon: 'tool',
  },
  {
    number: '03',
    title: 'Tecnologia de Concessionária',
    description: 'Equipamentos avançados e acesso a ferramentas técnicas para diagnósticos precisos.',
    icon: 'scanner',
  },
  {
    number: '04',
    title: 'Referência Nacional',
    description: 'Conteúdo técnico, treinamentos e milhares de profissionais acompanhando nossa tecnologia.',
    icon: 'trophy',
  },
  {
    number: '05',
    title: 'Atendimento Brasil',
    description: 'Soluções técnicas para clientes, oficinas e profissionais de diferentes regiões.',
    icon: 'map',
  },
  {
    number: '06',
    title: 'Peças em pronta entrega',
    description: 'Estoque especializado de módulos, componentes e peças para acelerar reparos.',
    icon: 'gear',
  },
]

function Icon({ type }: { type: DifferentialIcon }){
  const common = 'stroke-current'

  if(type === 'tool'){
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M14 6l4 4M4 20l7.5-7.5M13 5l6 6-3 3-6-6 3-3z" className={common} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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

  if(type === 'trophy'){
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M8 4h8v5a4 4 0 01-8 0V4zM8 6H5a3 3 0 003 3M16 6h3a3 3 0 01-3 3M12 13v4M9 20h6" className={common} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if(type === 'map'){
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M9 18l-5 2V6l5-2 6 2 5-2v14l-5 2-6-2zM9 4v14M15 6v14" className={common} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }

  if(type === 'gear'){
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="3" className={common} strokeWidth="1.8" />
        <path d="M12 2v3M12 19v3M4.9 4.9L7 7M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1L7 17M17 7l2.1-2.1" className={common} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <rect x="7" y="7" width="10" height="10" rx="2" className={common} strokeWidth="1.8" />
      <path d="M4 9h3M4 15h3M17 9h3M17 15h3M9 4v3M15 4v3M9 17v3M15 17v3" className={common} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export default function Differentials(){
  return (
    <section id="differentials" className="scroll-mt-24">
      <div className="max-w-3xl">
        <div className="text-sm font-semibold uppercase tracking-wide text-red-400">Diferenciais</div>
        <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">Por que escolher a Phoenix?</h2>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {differentials.map((item) => (
          <article key={item.number} className="group rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-lg shadow-black/30 backdrop-blur-md ring-1 ring-red-950/30 transition duration-300 hover:-translate-y-1 hover:border-red-700/70 hover:bg-red-950/20 hover:shadow-red-950/30">
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded border border-red-800/50 bg-black/35 text-red-400 transition group-hover:border-red-500 group-hover:text-red-300">
                <Icon type={item.icon} />
              </div>
              <span className="text-sm font-bold text-red-400">{item.number}</span>
            </div>
            <h3 className="mt-5 font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
