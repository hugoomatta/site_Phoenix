import Image from 'next/image'

const highlights = [
  'Mecatrônica automotiva',
  'Eletrônica embarcada',
  'Transmissões automáticas',
  'Performance e alta tecnologia',
]

export default function About(){
  return (
    <section id="about" className="scroll-mt-24">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative min-h-96 overflow-hidden rounded-lg border border-red-900/40 bg-black shadow-2xl shadow-red-950/20">
          <Image
            src="/phoenix-logo-v2.png"
            alt="Phoenix Imports & Imports - Tecnologia em alta performance"
            fill
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 rounded border border-white/10 bg-black/55 p-4 backdrop-blur">
            <div className="text-sm text-red-300">Phoenix Imports & Imports</div>
            <div className="mt-1 text-xl font-bold">Centro de tecnologia automotiva</div>
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-lg shadow-black/30 backdrop-blur-md md:p-8">
          <div className="text-sm font-semibold uppercase tracking-wide text-red-400">Sobre a Phoenix</div>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">
            Mais que uma oficina. Um centro de tecnologia automotiva.
          </h2>
          <div className="mt-5 space-y-4 text-gray-300">
            <p>
              A Phoenix Imports & Imports nasceu com o propósito de entregar soluções avançadas para sistemas automotivos de alta complexidade.
            </p>
            <p>
              Somos especialistas em mecatrônicas, módulos eletrônicos e transmissões automáticas, atuando com diagnóstico preciso, reparação técnica e desenvolvimento de soluções onde muitas vezes a única alternativa apresentada é a substituição completa.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item} className="rounded border border-red-950/50 bg-black/35 px-4 py-3 text-sm text-gray-100">
                <span className="mr-2 text-red-400">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
