import Link from 'next/link'
import Image from 'next/image'

const WHATSAPP_URL = 'https://wa.me/5541992656337'

export default function Header(){
  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/70 via-black/40 to-transparent backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link href="#top" className="flex items-center gap-3">
          <Image
            src="/phoenix-logo.jpg"
            alt="Phoenix Imports e Imports"
            width={64}
            height={64}
            className="h-14 w-14 rounded-md object-cover ring-1 ring-white/10"
            priority
          />
          <div>
            <div className="text-xl font-bold leading-tight text-white">Phoenix</div>
            <div className="text-xs text-gray-400">Imports & Imports</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <Link href="#top">Início</Link>
          <Link href="#services">Serviços</Link>
          <Link href="#trainings">Treinamentos</Link>
          <Link href="#about">Sobre</Link>
          <Link href="#videos">Vídeos</Link>
          <Link href="#contact">Contato</Link>
          <a href={WHATSAPP_URL} className="ml-4 btn-primary">Falar no WhatsApp</a>
        </nav>
        <div className="md:hidden">
          <a href={WHATSAPP_URL} className="btn-primary">WhatsApp</a>
        </div>
      </div>
    </header>
  )
}
