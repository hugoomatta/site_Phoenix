import { DEFAULT_WHATSAPP_URL } from '../lib/whatsapp'

export default function MobileWhatsAppBar(){
  return (
    <a
      href={DEFAULT_WHATSAPP_URL}
      target="_blank"
      rel="noreferrer"
      className="fixed inset-x-3 bottom-3 z-[80] flex min-h-14 items-center justify-center gap-2 rounded-md bg-[#c5162e] px-4 py-3 text-center text-sm font-bold text-white shadow-2xl shadow-black/50 ring-1 ring-white/10 md:hidden"
      aria-label="Solicitar diagnóstico Phoenix pelo WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" aria-hidden="true">
        <path d="M14.7 6.3a4 4 0 00-5.1 5.1l-4.8 4.8a2 2 0 102.8 2.8l4.8-4.8a4 4 0 005.1-5.1l-2.9 2.9-2.1-2.1 2.9-2.9z" className="stroke-current" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>Solicitar diagnóstico Phoenix</span>
    </a>
  )
}
