export const WHATSAPP_NUMBER = '5541992656337'

export function buildWhatsAppUrl(message: string){
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const diagnosticMessage = `Olá Phoenix, vim pelo site.

Gostaria de um diagnóstico técnico.

Nome:
Veículo:
Ano:
Problema apresentado:
Código de falha (se houver):`

export const trainingMessage = `Olá Phoenix, vim pelo site.

Tenho interesse nos treinamentos Phoenix.

Gostaria de mais informações sobre:

Treinamento desejado:
Experiência na área:
Cidade:

Aguardo o contato.`

export const partsMessage = `Olá Phoenix, vim pelo site.

Gostaria de consultar disponibilidade de peças.

Peça necessária:
Modelo do veículo:
Ano:

Aguardo retorno.`

export const generalMessage = `Olá Phoenix, vim pelo site.

Gostaria de falar com um especialista.`

export const diagnosticWhatsAppUrl = buildWhatsAppUrl(diagnosticMessage)
export const trainingWhatsAppUrl = buildWhatsAppUrl(trainingMessage)
export const partsWhatsAppUrl = buildWhatsAppUrl(partsMessage)
export const generalWhatsAppUrl = buildWhatsAppUrl(generalMessage)
