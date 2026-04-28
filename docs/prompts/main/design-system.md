# PROMPT — Design System + Layout Base

> **Enviar após o Master Prompt.**  
> Constrói o shell completo da documentação: layout, sidebar, header, TOC e AI widget. Sem conteúdo de página ainda.

---

## Objetivo

Construir o **layout base** que todas as páginas vão herdar: HTML shell, CSS completo, JavaScript global e o AI widget funcional. Ao terminar, deve ser possível navegar pelo shell vazio antes de adicionar qualquer conteúdo de página.

---

## index.html — Shell Principal

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[App da Agência] — Documentação</title>
  <link rel="icon" href="./assets/favicon.ico">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./assets/css/style.css">
  <link rel="stylesheet" href="./assets/css/components.css">
  <script src="./config.js"></script>
</head>
<body>

  <!-- HEADER -->
  <header class="doc-header">
    <button class="sidebar-toggle" aria-label="Menu">☰</button>
    <a href="./index.html" class="header-logo">
      <img src="" id="header-logo-img" alt="" height="32">
      <span id="header-app-name"></span>
    </a>
    <nav class="header-nav">
      <span class="header-nav-link active">DOCUMENTAÇÃO</span>
    </nav>
    <div class="header-actions">
      <button class="search-trigger" aria-label="Buscar">
        <!-- ícone lupa SVG -->
      </button>
      <span class="lang-badge" id="lang-badge">PT</span>
    </div>
  </header>

  <!-- SIDEBAR -->
  <aside class="doc-sidebar" id="sidebar">
    <div class="sidebar-logo">
      <img src="" id="sidebar-logo" alt="" height="36">
    </div>
    <nav class="sidebar-nav" id="sidebar-nav">
      <!-- navegação gerada pelo app.js a partir de NAV_STRUCTURE -->
    </nav>
    <div class="sidebar-footer">
      <a href="#" id="open-app-link" class="sidebar-open-app">
        <!-- ícone externo -->
        <span>Abrir App</span>
      </a>
    </div>
  </aside>

  <!-- OVERLAY MOBILE -->
  <div class="sidebar-overlay" id="sidebar-overlay"></div>

  <!-- MAIN LAYOUT -->
  <main class="doc-main">
    <div class="doc-content-wrapper">
      <!-- CONTEÚDO DA PÁGINA (injetado via JS ou carregado em iframe) -->
      <div class="doc-content" id="doc-content">
        <!-- páginas carregadas aqui -->
      </div>

      <!-- TOC LATERAL -->
      <aside class="doc-toc" id="doc-toc">
        <p class="toc-title">Nesta página</p>
        <ul class="toc-list" id="toc-list">
          <!-- gerado pelo app.js via IntersectionObserver -->
        </ul>
      </aside>
    </div>
  </main>

  <!-- SEARCH MODAL -->
  <div class="search-modal" id="search-modal" hidden>
    <div class="search-backdrop"></div>
    <div class="search-container">
      <div class="search-input-wrapper">
        <!-- ícone lupa -->
        <input type="text" id="search-input" placeholder="Buscar na documentação..." autocomplete="off">
        <kbd>ESC</kbd>
      </div>
      <ul class="search-results" id="search-results"></ul>
    </div>
  </div>

  <!-- AI WIDGET -->
  <div class="ai-widget" id="ai-widget">
    <button class="ai-toggle" id="ai-toggle" aria-label="Abrir assistente">
      <!-- ícone SVG do assistente -->
    </button>
    <div class="ai-panel" id="ai-panel" hidden>
      <div class="ai-header">
        <div class="ai-avatar"><!-- ícone --></div>
        <div class="ai-header-info">
          <span id="ai-name-display"></span>
          <span class="ai-status">Online</span>
        </div>
        <button class="ai-close" id="ai-close">✕</button>
      </div>
      <div class="ai-messages" id="ai-messages">
        <div class="ai-message ai-message--bot" id="ai-welcome"></div>
      </div>
      <div class="ai-input-area">
        <input type="text" id="ai-input" placeholder="Pergunte algo...">
        <button id="ai-send">→</button>
      </div>
    </div>
  </div>

  <script src="./assets/js/app.js"></script>
  <script src="./assets/js/ai-widget.js"></script>
</body>
</html>
```

---

## Estrutura de Navegação (NAV_STRUCTURE em app.js)

```javascript
const NAV_STRUCTURE = [
  {
    group: 'Primeiros Passos',
    items: [
      { id: '1.1', label: 'Introdução', icon: 'zap', path: 'pages/getting-started/introduction.html' },
      { id: '1.2', label: 'Configuração Inicial', icon: 'settings', path: 'pages/getting-started/initial-setup.html' },
      { id: '1.3', label: 'Navegando na Plataforma', icon: 'compass', path: 'pages/getting-started/navigation.html' },
    ]
  },
  {
    group: 'Funcionalidades',
    items: [
      { id: '2', label: 'CRM e Contatos', icon: 'database', path: 'pages/crm/overview.html' },
      { id: '3', label: 'Conversas', icon: 'message-circle', path: 'pages/conversations/unified-inbox.html' },
      { id: '4', label: 'Calendários', icon: 'calendar', path: 'pages/calendars/overview.html' },
      { id: '5', label: 'Oportunidades', icon: 'trending-up', path: 'pages/pipelines/what-is-pipeline.html' },
      { id: '6', label: 'Automações', icon: 'zap', path: 'pages/automations/what-are-automations.html' },
      { id: '7', label: 'E-mail Marketing', icon: 'mail', path: 'pages/email-marketing/overview.html' },
      { id: '8', label: 'Sites e Funis', icon: 'layout', path: 'pages/sites-funnels/overview.html' },
      { id: '9', label: 'Pagamentos', icon: 'credit-card', path: 'pages/payments/overview.html' },
    ]
  },
  {
    group: 'Inteligência Artificial',
    items: [
      { id: '10', label: 'IA e Automação', icon: 'cpu', path: 'pages/ai/overview.html' },
      { id: '11', label: 'Reputação e Reviews', icon: 'star', path: 'pages/reputation/overview.html' },
    ]
  },
  {
    group: 'Relatórios',
    items: [
      { id: '12', label: 'Analytics e Relatórios', icon: 'bar-chart-2', path: 'pages/reports/dashboard.html' },
    ]
  },
  {
    group: 'Configurações',
    items: [
      { id: '13', label: 'Configurações', icon: 'settings', path: 'pages/settings/account.html' },
    ]
  },
  {
    group: null, // sem label de grupo — seção especial
    items: [
      { id: '14', label: 'Seu Plano', icon: 'package', path: 'pages/agency/features.html', special: true },
    ]
  },
];
```

---

## app.js — Comportamentos Globais

```javascript
// app.js
document.addEventListener('DOMContentLoaded', () => {
  applyConfig();       // aplica config.js nas variáveis CSS e DOM
  buildSidebar();      // gera sidebar a partir de NAV_STRUCTURE
  initSearch();        // inicializa busca com search-index.js
  initTOC();           // TOC com IntersectionObserver
  initMobile();        // hamburger e overlay
  highlightActive();   // marca item ativo na sidebar
});

function applyConfig() {
  document.documentElement.style.setProperty('--color-primary', APP_CONFIG.primaryColor);
  document.documentElement.style.setProperty('--color-primary-text', APP_CONFIG.primaryTextColor);
  document.documentElement.style.setProperty('--color-accent', APP_CONFIG.accentColor);
  document.documentElement.style.setProperty('--color-bg', APP_CONFIG.bgColor);
  document.documentElement.style.setProperty('--font-sans', APP_CONFIG.fontFamily);
  document.getElementById('header-app-name').textContent = APP_CONFIG.appName;
  document.getElementById('ai-name-display').textContent = APP_CONFIG.aiName;
  document.getElementById('ai-welcome').textContent = APP_CONFIG.aiWelcome;
  // aplicar logo, favicon, etc.
}

function initTOC() {
  const headings = document.querySelectorAll('.doc-content h2[id]');
  const tocList = document.getElementById('toc-list');
  headings.forEach(h => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent;
    a.addEventListener('click', e => {
      e.preventDefault();
      h.scrollIntoView({ behavior: 'smooth' });
    });
    li.appendChild(a);
    tocList.appendChild(li);
  });
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const link = tocList.querySelector(`a[href="#${id}"]`);
      if (link) link.classList.toggle('active', entry.isIntersecting);
    });
  }, { rootMargin: '-20% 0px -70% 0px' });
  headings.forEach(h => observer.observe(h));
}

// Atalho de teclado: / abre busca, ESC fecha tudo
document.addEventListener('keydown', e => {
  if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
    e.preventDefault();
    document.getElementById('search-modal').removeAttribute('hidden');
    document.getElementById('search-input').focus();
  }
  if (e.key === 'Escape') {
    document.getElementById('search-modal').setAttribute('hidden', '');
    document.getElementById('sidebar').classList.remove('open');
  }
});
```

---

## ai-widget.js

```javascript
// ai-widget.js
const aiToggle = document.getElementById('ai-toggle');
const aiPanel = document.getElementById('ai-panel');
const aiClose = document.getElementById('ai-close');
const aiInput = document.getElementById('ai-input');
const aiSend = document.getElementById('ai-send');
const aiMessages = document.getElementById('ai-messages');

aiToggle.addEventListener('click', () => aiPanel.removeAttribute('hidden'));
aiClose.addEventListener('click', () => aiPanel.setAttribute('hidden', ''));

async function sendAIMessage(message) {
  appendMessage(message, 'user');
  const botMsg = appendMessage('', 'bot');

  const endpoint = APP_CONFIG.aiApiEndpoint;
  if (!endpoint) {
    botMsg.textContent = 'O assistente está sendo configurado. Entre em contato com o suporte.';
    return;
  }

  try {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, page: document.title })
    });
    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      botMsg.textContent += decoder.decode(value);
      aiMessages.scrollTop = aiMessages.scrollHeight;
    }
  } catch {
    botMsg.textContent = 'Erro ao conectar com o assistente. Tente novamente.';
  }
}

function appendMessage(text, role) {
  const div = document.createElement('div');
  div.className = `ai-message ai-message--${role}`;
  div.textContent = text;
  aiMessages.appendChild(div);
  aiMessages.scrollTop = aiMessages.scrollHeight;
  return div;
}

aiSend.addEventListener('click', () => {
  const msg = aiInput.value.trim();
  if (!msg) return;
  aiInput.value = '';
  sendAIMessage(msg);
});

aiInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') aiSend.click();
});
```

---

## CSS — Componentes Principais (components.css)

### Layout Geral
```css
body { margin: 0; font-family: var(--font-sans); background: var(--color-bg); color: var(--color-text); }
.doc-header { position: fixed; top: 0; left: 0; right: 0; height: var(--header-height); z-index: 1000; background: #fff; border-bottom: 1px solid var(--color-border); display: flex; align-items: center; padding: 0 24px; gap: 16px; }
.doc-sidebar { position: fixed; top: var(--header-height); left: 0; bottom: 0; width: var(--sidebar-width); background: var(--color-primary); overflow-y: auto; z-index: 900; display: flex; flex-direction: column; }
.doc-main { margin-left: var(--sidebar-width); margin-top: var(--header-height); padding: 48px 24px; }
.doc-content-wrapper { max-width: calc(var(--content-max-width) + var(--toc-width) + 48px); margin: 0 auto; display: flex; gap: 48px; }
.doc-content { flex: 1; min-width: 0; max-width: var(--content-max-width); }
.doc-toc { width: var(--toc-width); flex-shrink: 0; }
```

### Feature Cards
```css
.feature-card { background: var(--color-bg-card); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: 24px; transition: transform 200ms ease, box-shadow 200ms ease; cursor: default; }
.feature-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
.feature-card-icon { width: 44px; height: 44px; background: var(--color-accent-light); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; margin-bottom: 12px; }
.feature-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 16px; margin: 24px 0; }
```

### Callouts
```css
.callout { padding: 14px 16px; border-radius: var(--radius-md); border-left: 4px solid; margin: 16px 0; }
.callout--info { background: var(--color-info-light); border-color: var(--color-info); }
.callout--warning { background: var(--color-warning-light); border-color: var(--color-warning); }
.callout--success { background: var(--color-success-light); border-color: var(--color-success); }
.callout--danger { background: var(--color-error-light); border-color: var(--color-error); }
.callout-label { font-weight: 700; font-size: var(--text-sm); margin-right: 6px; }
```

### Code Block
```css
.code-block { position: relative; background: #1E293B; color: #E2E8F0; border-radius: var(--radius-md); padding: 20px; font-family: var(--font-mono); font-size: 14px; line-height: 1.6; overflow-x: auto; margin: 16px 0; }
.code-copy-btn { position: absolute; top: 12px; right: 12px; background: rgba(255,255,255,0.1); border: none; color: #94A3B8; padding: 4px 10px; border-radius: var(--radius-sm); cursor: pointer; font-size: 12px; }
.code-copy-btn:hover { background: rgba(255,255,255,0.2); }
```