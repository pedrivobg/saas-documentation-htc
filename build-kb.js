const fs = require('fs');
const path = require('path');

const pages = [
  { title: "Introdução", file: "getting-started/introduction.html" },
  { title: "Configuração Inicial", file: "getting-started/initial-setup.html" },
  { title: "Navegando na Plataforma", file: "getting-started/navigation.html" },
  { title: "CRM Visão Geral", file: "crm/overview.html" },
  { title: "Criando Contatos", file: "crm/creating-contacts.html" },
  { title: "Tags e Segmentação", file: "crm/tags-segmentation.html" },
  { title: "Campos Personalizados", file: "crm/custom-fields.html" },
  { title: "Importação de Contatos", file: "crm/importing.html" },
  { title: "Inbox Unificado", file: "conversations/unified-inbox.html" },
  { title: "WhatsApp", file: "conversations/whatsapp.html" },
  { title: "Calendários", file: "calendars/overview.html" },
  { title: "Pipeline", file: "pipelines/overview.html" },
  { title: "Automações", file: "automations/what-are-automations.html" },
  { title: "Construtor Visual", file: "automations/visual-builder.html" },
  { title: "Triggers", file: "automations/triggers.html" },
  { title: "Ações", file: "automations/actions.html" },
  { title: "IA Visão Geral", file: "ai/overview.html" },
  { title: "IA de Conversação", file: "ai/conversation-ai.html" },
  { title: "Reputação e Reviews", file: "reputation/overview.html" },
  { title: "Dashboard", file: "reports/overview.html" },
  { title: "Configurações da Conta", file: "settings/account.html" },
  { title: "Usuários", file: "settings/users.html" },
  { title: "Integrações", file: "settings/integrations.html" },
  { title: "Plano Exclusivo", file: "agency/custom-plan.html" },
  { title: "Suporte", file: "agency/support.html" }
];

let htmlContent = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="robots" content="noindex">
  <title>Knowledge Base — [App da Agência]</title>
  <style>
    body { font-family: Arial, sans-serif; background: #fff; color: #000; padding: 20px; max-width: 800px; margin: 0 auto; }
  </style>
</head>
<body>
  <article>
`;

pages.forEach(page => {
  const filePath = path.join(__dirname, 'docs', 'pages', page.file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Extrai o conteúdo dentro de <section> ou <article>, ignorando <nav> e <header>
    // Como os arquivos têm um padrão: <article> <nav>...</nav> <header>...</header> <section>...</section> ...
    // Vamos remover <nav>, <header>, e scripts.
    content = content.replace(/<nav\b[^<]*(?:(?!<\/nav>)<[^<]*)*<\/nav>/gi, '');
    content = content.replace(/<header\b[^<]*(?:(?!<\/header>)<[^<]*)*<\/header>/gi, '');
    content = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    content = content.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
    
    // Remove tags que não queremos (div, span, i, img, table, tr, td, th, thead, tbody, a, button) mas mantendo o texto de dentro (para div, span, a)
    // Na verdade, é melhor remover os elementos interativos e limpar as tags.
    // Vamos apenas usar regex básico para manter <p>, <ul>, <ol>, <li>, <strong>, <b>, <i>, <em>.
    
    // Uma forma simples é extrair todo o texto e colocar em <p>
    // Ou podemos limpar tags específicas.
    content = content.replace(/<i data-lucide[^>]*><\/i>/gi, ''); // remove icones lucide vazios
    content = content.replace(/<img[^>]*>/gi, ''); // remove imagens
    
    // Extrai o conteúdo entre <body> ou simplesmente pega tudo
    htmlContent += `    <h2>${page.title}</h2>\n`;
    
    // Strip div, span classes, table -> we just keep the text structure.
    // To make it simple, let's keep all standard tags but remove class/id/style attributes
    content = content.replace(/ (class|id|style|data-[a-z-]+|onclick|href)='[^']*'/gi, '');
    content = content.replace(/ (class|id|style|data-[a-z-]+|onclick|href)="[^"]*"/gi, '');
    
    htmlContent += `    ${content.trim()}\n\n`;
  }
});

htmlContent += `  </article>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'docs', 'kb-full.html'), htmlContent);
console.log('kb-full.html created successfully!');
