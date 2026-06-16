const brandGroups = [
  {
    name: 'Veículos Premium',
    brands: [
      { name: 'Audi', category: 'Premium alemão', technologies: 'DSG • S-Tronic • Mecatrônica' },
      { name: 'Mercedes-Benz', category: 'Premium alemão', technologies: '7G-Tronic • 9G-Tronic • Módulos eletrônicos' },
      { name: 'BMW', category: 'Performance premium', technologies: 'ZF • Gerenciamento eletrônico' },
      { name: 'Porsche', category: 'Alta performance', technologies: 'PDK • Alta performance' },
      { name: 'Land Rover', category: 'Premium 4x4', technologies: 'ZF • Sistemas inteligentes' },
      { name: 'Volvo', category: 'Premium europeu', technologies: 'Transmissões automáticas premium' },
    ],
  },
  {
    name: 'Nacionais e Importados',
    brands: [
      { name: 'Volkswagen', category: 'Linha nacional/importada', technologies: 'DSG DQ200 • DQ250' },
      { name: 'Ford', category: 'Multimarcas', technologies: 'Powershift • Módulos TCM' },
      { name: 'GM', category: 'Nacional', technologies: '6T30 • Módulos eletrônicos' },
      { name: 'Toyota', category: 'Importados', technologies: 'Diagnóstico avançado' },
      { name: 'Honda', category: 'Importados', technologies: 'Transmissões automáticas' },
      { name: 'Hyundai', category: 'Importados', technologies: 'Sistemas eletrônicos' },
      { name: 'Jeep', category: 'SUV premium', technologies: 'Câmbio automático' },
      { name: 'Nissan', category: 'Importados', technologies: 'CVT • Sistemas eletrônicos' },
    ],
  },
]

const authorityItems = ['Mecatrônica', 'Módulos eletrônicos', 'Programação', 'Reparação avançada']

function BrandIcon({ name }: { name: string }){
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)

  return (
    <div className="flex h-10 w-10 items-center justify-center rounded border border-red-800/50 bg-black/40 text-xs font-bold text-red-200">
      {initials}
    </div>
  )
}

export default function Brands(){
  return (
    <section id="brands" className="relative scroll-mt-24 overflow-hidden rounded-lg border border-red-950/40 bg-[radial-gradient(circle_at_80%_0%,rgba(220,38,38,0.18),transparent_28%),linear-gradient(135deg,rgba(17,24,39,0.80),rgba(0,0,0,0.96))] p-6 shadow-2xl shadow-red-950/10 md:p-8">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <svg viewBox="0 0 1200 620" className="h-full w-full" fill="none" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
          <rect x="760" y="95" width="250" height="170" rx="24" stroke="#ffffff" strokeWidth="2" />
          <path d="M800 145h160M800 188h112M1010 165h80M1010 210h110M890 265v105M890 370h170M1060 370v90" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          <circle cx="890" cy="265" r="9" fill="#dc2626" />
          <circle cx="1060" cy="370" r="9" fill="#dc2626" />
          <path d="M60 470 C250 350 465 345 690 410 C860 458 1010 390 1160 285" stroke="#dc2626" strokeWidth="4" />
          <circle cx="310" cy="475" r="55" stroke="#ffffff" strokeWidth="3" />
          <circle cx="805" cy="475" r="55" stroke="#ffffff" strokeWidth="3" />
        </svg>
      </div>

      <div className="relative max-w-4xl">
        <div className="text-sm font-semibold uppercase tracking-wide text-red-400">Marcas atendidas</div>
        <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">Domínio técnico nas maiores plataformas automotivas do mundo</h2>
        <p className="mt-4 text-gray-300">
          Experiência em diagnóstico, reparação eletrônica e soluções para transmissões automáticas presentes em veículos nacionais, importados e premium.
        </p>
      </div>

      <div className="relative mt-8 space-y-9">
        {brandGroups.map((group) => (
          <div key={group.name}>
            <div className="flex items-center gap-4">
              <h3 className="text-lg font-bold">{group.name}</h3>
              <div className="h-px flex-1 bg-gradient-to-r from-red-800 to-transparent" />
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {group.brands.map((brand) => (
                <article key={brand.name} className="group rounded-lg border border-white/10 bg-white/[0.055] p-4 shadow-lg shadow-black/20 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-red-700/80 hover:bg-red-950/20 hover:shadow-[0_0_30px_rgba(220,38,38,0.22)]">
                  <div className="flex items-start gap-3">
                    <BrandIcon name={brand.name} />
                    <div>
                      <h4 className="font-semibold text-gray-100 transition group-hover:text-white">{brand.name}</h4>
                      <div className="mt-1 text-xs font-medium text-red-300">{brand.category}</div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-gray-400">{brand.technologies}</p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="relative mt-8 rounded-lg border border-red-900/50 bg-black/40 p-5 shadow-lg shadow-red-950/20 backdrop-blur-md">
        <h3 className="text-xl font-bold">Cada transmissão possui uma tecnologia. Nós dominamos o diagnóstico.</h3>
        <div className="mt-4 flex flex-wrap gap-3">
          {authorityItems.map((item) => (
            <span key={item} className="rounded border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-gray-100">
              <span className="mr-2 text-red-400">✓</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
