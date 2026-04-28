// config.js — EDITE APENAS ESTE ARQUIVO
const APP_CONFIG = {
  // IDENTIDADE
  appName: '[App da Agência]',
  appTagline: 'Sua plataforma completa de CRM e automação',
  logoUrl: './assets/logo.svg',
  faviconUrl: './assets/favicon.svg',

  // CORES (HEX)
  primaryColor: '#F0C800',
  primaryTextColor: '#111827',
  accentColor: '#111827',
  bgColor: '#F9FAFB',
  fontFamily: "'Sora', Arial, sans-serif",

  // AI WIDGET (configurar depois)
  aiEnabled: false,
  aiApiEndpoint: '',

  // IDIOMA
  defaultLanguage: 'pt-BR',
  languages: ['pt-BR'],

  // CONTATO E SUPORTE
  supportEmail: 'suporte@suaagencia.com',
  supportWhatsApp: '',
  supportUrl: '',

  // SEÇÃO 14 — PERSONALIZAÇÕES
  customSectionEnabled: true,
  customSectionTitle: 'Seu Plano',
  customSectionSubtitle: 'Recursos exclusivos incluídos no seu plano',
  customFeatures: [
    {
      title: 'IA de Conversação',
      desc: 'Bot inteligente que responde leads automaticamente 24/7 via WhatsApp, SMS e Instagram.',
      icon: 'message-circle'
    },
    {
      title: 'Automação Completa',
      desc: 'Workflows ilimitados com triggers, condições e ações para automatizar todo o comercial.',
      icon: 'zap'
    },
    {
      title: 'Suporte Prioritário',
      desc: 'Atendimento direto via WhatsApp com tempo de resposta de até 2 horas úteis.',
      icon: 'headphones'
    }
  ],

  // COMPARATIVO DE PLANOS
  plans: [
    { name: 'Starter', subaccounts: '1', conversationAI: false, voiceAI: false, support: 'Base de conhecimento', trial: '14 dias' },
    { name: 'Pro', subaccounts: '3', conversationAI: true, voiceAI: false, support: 'WhatsApp', trial: '14 dias' },
    { name: 'Agency', subaccounts: 'Ilimitadas', conversationAI: true, voiceAI: true, support: 'Prioritário', trial: '14 dias' }
  ],
  currentPlan: 'Pro'
};
