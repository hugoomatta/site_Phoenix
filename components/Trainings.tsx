import { trainingWhatsAppUrl } from '../utils/whatsapp'

const trainings = [
  {
    title: 'Treinamento em Mecatrônica Automotiva',
    topics: ['Diagnóstico avançado', 'Reparação em bancada', 'Testes e validações', 'Falhas reais de mercado'],
  },
  {
    title: 'Treinamento em Módulos Eletrônicos',
    topics: ['Eletrônica automotiva aplicada', 'Análise de placas e componentes', 'Comunicação entre módulos', 'Soluções avançadas'],
  },
  {
    title: 'Treinamento em Câmbios Automáticos',
    topics: ['DSG DQ200 / DQ250', 'Powershift', 'Sistemas premium', 'Diagnóstico eletrônico'],
  },
]

function TrainingIcon(){
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
      <path d="M4 7l8-4 8 4-8 4-8-4z" className="stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 10v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" className="stroke-current" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M20 7v6" className="stroke-current" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export default function Trainings(){
  return (
    <section id="trainings" className="scroll-mt-24 overflow-hidden rounded-lg border border-red-950/40 bg-[radial-gradient(circle_at_12%_0%,rgba(220,38,38,0.18),transparent_30%),linear-gradient(135deg,rgba(17,24,39,0.72),rgba(0,0,0,0.96))] p-6 shadow-2xl shadow-red-950/10 md:p-8">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <div>
          <div className="text-sm font-semibold uppercase tracking-wide text-red-400">Treinamentos</div>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">Formando os próximos especialistas em tecnologia automotiva</h2>
          <p className="mt-4 max-w-3xl text-gray-300">
            O conhecimento aplicado diariamente em nosso laboratório agora capacitando profissionais em mecatrônica, módulos eletrônicos e transmissões automáticas.
          </p>
          <p className="mt-4 border-l border-red-700 pl-4 text-sm font-semibold text-gray-100">
            Aprenda com quem diagnostica, recupera e desenvolve soluções reais todos os dias.
          </p>
        </div>
        <div className="lg:text-right">
          <a className="btn-primary inline-block" href={trainingWhatsAppUrl} target="_blank" rel="noreferrer">Conhecer treinamentos Phoenix</a>
          <p className="mt-3 text-sm text-gray-400">Treinamentos para mecânicos, oficinas e profissionais que buscam evolução técnica.</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
        {trainings.map((training) => (
          <article key={training.title} className="group rounded-lg border border-white/10 bg-white/[0.055] p-6 shadow-lg shadow-black/30 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-red-700/70 hover:bg-red-950/20 hover:shadow-[0_0_34px_rgba(220,38,38,0.20)]">
            <div className="flex h-12 w-12 items-center justify-center rounded border border-red-800/50 bg-black/35 text-red-400 transition group-hover:border-red-500 group-hover:text-red-300">
              <TrainingIcon />
            </div>
            <h3 className="mt-5 font-semibold">{training.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              {training.topics.map((topic) => (
                <li key={topic} className="flex items-center gap-2">
                  <span className="text-red-400">✓</span>
                  {topic}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
