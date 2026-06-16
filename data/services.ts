export type ServiceIcon = 'chip' | 'gearbox' | 'scanner' | 'ecu' | 'performance'

export type ServiceItem = {
  title: string
  desc: string
  tag: string
  icon: ServiceIcon
  highlights?: string[]
}

export type ServiceCategory = {
  name: string
  subtitle?: string
  tone?: 'mechatronics' | 'performance' | 'diagnostics'
  services: ServiceItem[]
}

export const AUTHORITY_STATS = [
  {
    value: '+10',
    label: 'anos de experiência técnica',
  },
  {
    value: '+75 mil',
    label: 'seguidores acompanhando tecnologia automotiva',
  },
  {
    value: '+1000',
    label: 'soluções aplicadas em módulos e transmissões',
  },
  {
    value: 'Brasil',
    label: 'atendimento nacional para clientes e oficinas',
  },
]

export const LAB_FEATURES = [
  {
    label: 'Diagnóstico eletrônico',
    icon: 'scanner' as const,
  },
  {
    label: 'Bancada especializada',
    icon: 'gearbox' as const,
  },
  {
    label: 'Tecnologia OEM',
    icon: 'ecu' as const,
  },
]

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    name: 'Mecatrônica & Módulos Eletrônicos',
    tone: 'mechatronics',
    services: [
      {
        title: 'Mecatrônicas Automotivas',
        desc: 'Diagnóstico e recuperação de unidades mecatrônicas de alta complexidade, aplicando tecnologia para corrigir falhas sem necessidade de substituição completa.',
        tag: 'Referência Nacional',
        icon: 'chip',
      },
      {
        title: 'Reparo de Módulos TCM / ECU',
        desc: 'Laboratório especializado em reparo de módulos eletrônicos automotivos, corrigindo falhas internas de comunicação e gerenciamento.',
        tag: 'Eletrônica Avançada',
        icon: 'ecu',
      },
      {
        title: 'DSG DQ200 / DQ250',
        desc: 'Soluções completas para transmissões DSG Volkswagen e Audi, incluindo reparo de mecatrônica, módulos eletrônicos, placas e componentes internos.',
        tag: 'VW • Audi',
        icon: 'gearbox',
      },
      {
        title: 'Powershift',
        desc: 'Especialistas em módulos Powershift, solucionando falhas de acionamento, comunicação, programação e funcionamento da transmissão.',
        tag: 'Ford',
        icon: 'ecu',
      },
      {
        title: 'Mercedes-Benz Travado no P',
        desc: 'Solução especializada para falhas onde o veículo permanece bloqueado na posição Parking, evitando substituições desnecessárias.',
        tag: 'Mercedes-Benz',
        icon: 'scanner',
      },
      {
        title: 'GM 6T30 e Multimarcas',
        desc: 'Diagnóstico e reparação eletrônica de módulos utilizados em diferentes transmissões nacionais e importadas.',
        tag: 'GM • Importados',
        icon: 'chip',
      },
    ],
  },
  {
    name: 'Performance, Potência e Eficiência',
    subtitle: 'Soluções desenvolvidas sob medida para extrair o melhor desempenho do conjunto motor, câmbio e eletrônica do veículo.',
    tone: 'performance',
    services: [
      {
        title: 'Performance de Motor e Câmbio',
        desc: 'Desenvolvimento de soluções personalizadas para otimização de potência, torque, respostas da transmissão e integração entre motor e câmbio automático.',
        tag: 'Alta Performance',
        icon: 'performance',
        highlights: ['Resposta mais rápida', 'Melhor gerenciamento eletrônico', 'Otimização personalizada'],
      },
      {
        title: 'Soluções EGR / DPF',
        desc: 'Diagnóstico avançado e soluções técnicas para sistemas EGR e DPF, corrigindo falhas de funcionamento e gerenciamento eletrônico.',
        tag: 'Tecnologia Diesel',
        icon: 'scanner',
        highlights: ['Diagnóstico preciso', 'Análise técnica', 'Solução especializada'],
      },
    ],
  },
  {
    name: 'Diagnóstico Avançado e Engenharia Eletrônica',
    subtitle: 'Equipamentos profissionais, conhecimento técnico e tecnologia para encontrar a causa real das falhas.',
    tone: 'diagnostics',
    services: [
      {
        title: 'Diagnóstico com Equipamentos de Concessionária',
        desc: 'Utilização de equipamentos oficiais e ferramentas avançadas das montadoras para análises precisas em sistemas eletrônicos automotivos.',
        tag: 'Tecnologia OEM',
        icon: 'scanner',
      },
      {
        title: 'Arquivos e Soluções Sob Medida',
        desc: 'Criação e aplicação de arquivos personalizados conforme necessidade específica do módulo, transmissão ou sistema eletrônico do veículo.',
        tag: 'Personalização Técnica',
        icon: 'ecu',
      },
      {
        title: 'Correção Código P085100',
        desc: 'Solução técnica para falhas relacionadas ao gerenciamento eletrônico da transmissão, sensores e comunicação entre módulos.',
        tag: 'Falha Especializada',
        icon: 'gearbox',
      },
      {
        title: 'Programação e Adaptação de Módulos',
        desc: 'Configuração, programação e adaptação de módulos eletrônicos utilizando tecnologia especializada.',
        tag: 'Eletrônica Avançada',
        icon: 'chip',
      },
    ],
  },
]
