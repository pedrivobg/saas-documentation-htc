/* ============================================================
   SEARCH-INDEX.JS — Índice de busca de todas as páginas
   ============================================================ */

const SEARCH_INDEX = [
  { title: 'Introdução', desc: 'Visão geral do [App da Agência], o que ele faz e para quem é.', path: 'pages/getting-started/introduction.html' },
  { title: 'Configuração Inicial', desc: 'Os 7 primeiros passos para deixar a plataforma pronta.', path: 'pages/getting-started/initial-setup.html' },
  { title: 'Navegando na Plataforma', desc: 'Tour visual da interface e glossário dos termos.', path: 'pages/getting-started/navigation.html' },
  { title: 'Visão Geral do CRM', desc: 'O que o CRM registra automaticamente e como centraliza seus dados.', path: 'pages/crm/overview.html' },
  { title: 'Criando e Editando Contatos', desc: 'Como criar contatos manualmente, importar por CSV e capturar por formulário.', path: 'pages/crm/creating-contacts.html' },
  { title: 'Tags e Segmentação', desc: 'Como usar tags para segmentar, filtrar e automatizar.', path: 'pages/crm/tags-segmentation.html' },
  { title: 'Campos Personalizados', desc: 'Como criar campos extras para informações do seu negócio.', path: 'pages/crm/custom-fields.html' },
  { title: 'Importação de Contatos', desc: 'Importar sua base de contatos existente por CSV.', path: 'pages/crm/import-contacts.html' },
  { title: 'Inbox Unificado', desc: 'Todas as mensagens de todos os canais em um único lugar.', path: 'pages/conversations/unified-inbox.html' },
  { title: 'WhatsApp', desc: 'Envie e receba mensagens de WhatsApp diretamente do CRM.', path: 'pages/conversations/whatsapp.html' },
  { title: 'Calendários', desc: 'Tipos de calendário e como o agendamento automático funciona.', path: 'pages/calendars/overview.html' },
  { title: 'O que é um Pipeline', desc: 'O funil de vendas visual e como organizar oportunidades.', path: 'pages/pipelines/what-is-pipeline.html' },
  { title: 'O que são Automações', desc: 'O conceito de automação e como muda a forma de trabalhar.', path: 'pages/automations/what-are-automations.html' },
  { title: 'Construtor Visual de Workflows', desc: 'Tour do canvas e como criar seu primeiro workflow.', path: 'pages/automations/visual-builder.html' },
  { title: 'Triggers Disponíveis', desc: 'Todos os eventos que podem iniciar uma automação.', path: 'pages/automations/triggers.html' },
  { title: 'Ações Disponíveis', desc: 'Tudo que uma automação pode fazer quando disparada.', path: 'pages/automations/actions.html' },
  { title: 'Visão Geral da IA', desc: 'O que a plataforma consegue fazer com Inteligência Artificial.', path: 'pages/ai/overview.html' },
  { title: 'IA de Conversação', desc: 'Configure um bot que responde leads automaticamente.', path: 'pages/ai/conversation-ai.html' },
  { title: 'Reputação e Reviews', desc: 'Como a plataforma automatiza a gestão de avaliações no Google.', path: 'pages/reputation/overview.html' },
  { title: 'Dashboard e Analytics', desc: 'Como interpretar o dashboard de KPIs e métricas.', path: 'pages/reports/dashboard.html' },
  { title: 'Configurações da Conta', desc: 'Nome, endereço, fuso horário e logo.', path: 'pages/settings/account.html' },
  { title: 'Usuários e Permissões', desc: 'Convidar membros da equipe e definir permissões.', path: 'pages/settings/users.html' },
  { title: 'Integrações', desc: 'Como conectar Google, Meta, Stripe, Zapier e mais.', path: 'pages/settings/integrations.html' },
  { title: 'Funcionalidades do Plano', desc: 'Recursos especiais incluídos no seu plano.', path: 'pages/agency/features.html' },
  { title: 'Suporte Dedicado', desc: 'Canais de atendimento, horários e como abrir chamado.', path: 'pages/agency/support.html' },
];
