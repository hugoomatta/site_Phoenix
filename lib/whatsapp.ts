export const WHATSAPP_NUMBER = '5541992656337'

export const DEFAULT_WHATSAPP_MESSAGE = `Olá Phoenix, vim pelo site.

Gostaria de um diagnóstico técnico:

Nome:
Veículo:
Ano:
Problema apresentado:
Código de falha, se houver:`

export function buildWhatsAppUrl(message: string){
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const DEFAULT_WHATSAPP_URL = buildWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE)
