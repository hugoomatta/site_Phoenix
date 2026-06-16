const WHATSAPP_URL = 'https://wa.me/5541992656337'
const WHATSAPP_DISPLAY = '(41) 99265-6337'

const footerColumns = [
  {
    title: 'Soluções',
    links: [
      { label: 'Mecatrônicas', href: '#services' },
      { label: 'Módulos DSG', href: '#services' },
      { label: 'Powershift', href: '#services' },
      { label: 'GM 6T30', href: '#services' },
      { label: 'Peças em pronta entrega', href: '#contact' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre', href: '#about' },
      { label: 'Treinamentos', href: '#trainings' },
      { label: 'Vídeos', href: '#videos' },
      { label: 'Avaliações', href: '#reviews' },
    ],
  },
  {
    title: 'Contato',
    links: [
      { label: `WhatsApp ${WHATSAPP_DISPLAY}`, href: WHATSAPP_URL },
      { label: 'Instagram', href: 'https://www.instagram.com/phoenix_imports_e_imports/' },
      { label: 'YouTube', href: 'https://www.youtube.com/channel/UCqhpJ8IcqKOrbmPqtn7R3bg' },
      { label: 'Facebook', href: 'https://www.facebook.com/p/Phoenix-Imports-Imports-61552080106435/' },
    ],
  },
]

export default function Footer(){
  return (
    <footer className="mt-12 border-t border-red-950/40 bg-black py-10">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-[1.25fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <div className="text-xl font-bold">Phoenix Imports & Imports</div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-400">
              Tecnologia em alta performance para transmissões automáticas, mecatrônicas e módulos eletrônicos.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="font-semibold">{column.title}</h3>
              <div className="mt-3 flex flex-col gap-2 text-sm text-gray-400">
                {column.links.map((link) => (
                  <a key={`${column.title}-${link.label}`} href={link.href} className="hover:text-white" target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-5 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Phoenix Imports & Imports. Todos os direitos reservados.</div>
          <div>Desenvolvido para alta performance digital.</div>
        </div>
      </div>
    </footer>
  )
}
