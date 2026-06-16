import type { FormEvent } from 'react'

const WHATSAPP_PHONE = '5541992656337'
const WHATSAPP_DISPLAY = '(41) 99265-6337'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}`
const ADDRESS = 'R. Isaías Régis de Miranda, 1760 - Boqueirão, Curitiba - PR'
const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`
const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`

const contactHighlights = [
  'Atendimento para Curitiba e todo o Brasil',
  'Envio e recebimento de módulos',
  'Peças em pronta entrega',
  'Treinamentos para oficinas',
]

export default function Contact(){
  function handleSubmit(event: FormEvent<HTMLFormElement>){
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') || '').trim()
    const phone = String(formData.get('phone') || '').trim()
    const vehicle = String(formData.get('vehicle') || '').trim()
    const issue = String(formData.get('issue') || '').trim()

    const text = [
      'Olá, gostaria de solicitar um diagnóstico técnico.',
      name && `Nome: ${name}`,
      phone && `WhatsApp: ${phone}`,
      vehicle && `Marca e modelo: ${vehicle}`,
      issue && `Problema apresentado: ${issue}`,
    ].filter(Boolean).join('\n')

    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className="scroll-mt-24 overflow-hidden rounded-lg border border-red-950/40 bg-[radial-gradient(circle_at_90%_8%,rgba(220,38,38,0.18),transparent_28%),linear-gradient(135deg,rgba(17,24,39,0.84),rgba(0,0,0,0.96))] p-6 shadow-2xl shadow-red-950/10 md:p-8">
      <div className="max-w-3xl">
        <div className="text-sm font-semibold uppercase tracking-wide text-red-400">Contato</div>
        <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">Fale com um especialista Phoenix</h2>
        <p className="mt-4 text-gray-300">Envie os dados do veículo e receba orientação técnica para diagnóstico, reparo ou peças.</p>
      </div>

      <div className="mt-8 grid grid-cols-1 items-start gap-6 lg:grid-cols-[1fr_0.95fr]">
        <form className="space-y-3 rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-lg shadow-black/30 backdrop-blur-md" onSubmit={handleSubmit}>
          <input name="name" className="w-full rounded bg-black/45 p-3 outline-none ring-1 ring-white/10 transition focus:ring-red-700" placeholder="Nome" />
          <input name="phone" className="w-full rounded bg-black/45 p-3 outline-none ring-1 ring-white/10 transition focus:ring-red-700" placeholder="WhatsApp" />
          <input name="vehicle" className="w-full rounded bg-black/45 p-3 outline-none ring-1 ring-white/10 transition focus:ring-red-700" placeholder="Marca e modelo do veículo" />
          <textarea name="issue" className="min-h-36 w-full rounded bg-black/45 p-3 outline-none ring-1 ring-white/10 transition focus:ring-red-700" placeholder="Problema apresentado" />
          <button type="submit" className="btn-primary w-full">Solicitar diagnóstico técnico</button>
        </form>

        <div className="space-y-5">
          <div className="rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-lg shadow-black/30 backdrop-blur-md">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {contactHighlights.map((item) => (
                <div key={item} className="rounded border border-red-950/50 bg-black/35 px-4 py-3 text-sm text-gray-100">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-5">
              <h3 className="font-semibold">WhatsApp</h3>
              <a className="mt-2 block text-sm text-gray-300 hover:text-white" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                {WHATSAPP_DISPLAY}
              </a>
              <h3 className="mt-5 font-semibold">Endereço</h3>
              <a className="mt-2 block text-sm text-gray-300 hover:text-white" href={MAPS_URL} target="_blank" rel="noreferrer">
                {ADDRESS}
              </a>
              <a className="btn-ghost mt-4 inline-block" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Falar agora no WhatsApp</a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gray-950 shadow-2xl shadow-black/30">
            <iframe
              title="Mapa Phoenix Imports e Imports"
              src={MAP_EMBED_URL}
              className="h-96 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />
          </div>
        </div>
      </div>
    </section>
  )
}
