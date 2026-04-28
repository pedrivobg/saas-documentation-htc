/* ============================================================
   APP.JS — Navegação, TOC, Busca, Sidebar
   ============================================================ */

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
    group: 'CRM e Contatos',
    items: [
      { id: '2.1', label: 'Visão Geral do CRM', icon: 'database', path: 'pages/crm/overview.html' },
      { id: '2.2', label: 'Criando Contatos', icon: 'user-plus', path: 'pages/crm/creating-contacts.html' },
      { id: '2.3', label: 'Tags e Segmentação', icon: 'tag', path: 'pages/crm/tags-segmentation.html' },
      { id: '2.4', label: 'Campos Personalizados', icon: 'sliders', path: 'pages/crm/custom-fields.html' },
      { id: '2.5', label: 'Importação de Contatos', icon: 'upload', path: 'pages/crm/import-contacts.html' },
    ]
  },
  {
    group: 'Conversas',
    items: [
      { id: '3.1', label: 'Inbox Unificado', icon: 'inbox', path: 'pages/conversations/unified-inbox.html' },
      { id: '3.2', label: 'WhatsApp', icon: 'smartphone', path: 'pages/conversations/whatsapp.html' },
    ]
  },
  {
    group: 'Calendários',
    items: [
      { id: '4.1', label: 'Visão Geral', icon: 'calendar', path: 'pages/calendars/overview.html' },
    ]
  },
  {
    group: 'Oportunidades',
    items: [
      { id: '5.1', label: 'O que é um Pipeline', icon: 'trending-up', path: 'pages/pipelines/what-is-pipeline.html' },
    ]
  },
  {
    group: 'Automações',
    items: [
      { id: '6.1', label: 'O que são Automações', icon: 'zap', path: 'pages/automations/what-are-automations.html' },
      { id: '6.2', label: 'Construtor Visual', icon: 'git-merge', path: 'pages/automations/visual-builder.html' },
      { id: '6.3', label: 'Triggers Disponíveis', icon: 'play-circle', path: 'pages/automations/triggers.html' },
      { id: '6.4', label: 'Ações Disponíveis', icon: 'arrow-right-circle', path: 'pages/automations/actions.html' },
    ]
  },
  {
    group: 'Inteligência Artificial',
    items: [
      { id: '10.1', label: 'IA e Automação', icon: 'cpu', path: 'pages/ai/overview.html' },
      { id: '10.2', label: 'IA de Conversação', icon: 'message-circle', path: 'pages/ai/conversation-ai.html' },
      { id: '11.1', label: 'Reputação e Reviews', icon: 'star', path: 'pages/reputation/overview.html' },
    ]
  },
  {
    group: 'Relatórios',
    items: [
      { id: '12.1', label: 'Dashboard e Analytics', icon: 'bar-chart-2', path: 'pages/reports/dashboard.html' },
    ]
  },
  {
    group: 'Configurações',
    items: [
      { id: '13.1', label: 'Dados da Conta', icon: 'settings', path: 'pages/settings/account.html' },
      { id: '13.2', label: 'Usuários e Permissões', icon: 'users', path: 'pages/settings/users.html' },
      { id: '13.3', label: 'Integrações', icon: 'link', path: 'pages/settings/integrations.html' },
    ]
  },
  {
    group: null,
    items: [
      { id: '14.1', label: 'Seu Plano', icon: 'package', path: 'pages/agency/features.html', special: true },
      { id: '14.2', label: 'Suporte', icon: 'headphones', path: 'pages/agency/support.html', special: true },
    ]
  },
];

const ALL_PAGES = NAV_STRUCTURE.flatMap(g => g.items);
let currentPage = null;

// Build lookup maps
const PATH_TO_ID = {};
const ID_TO_PATH = {};
ALL_PAGES.forEach(p => { PATH_TO_ID[p.path] = p.id; ID_TO_PATH[p.id] = p.path; });

document.addEventListener('DOMContentLoaded', () => {
  applyConfig();
  buildSidebar();
  initMobile();
  initSearch();
  initKeyboardShortcuts();

  // Load initial page from hash or default
  const hash = window.location.hash.replace('#', '');
  const pagePath = ID_TO_PATH[hash] || ALL_PAGES[0].path;
  loadPage(pagePath);
});

/* ---------- Config ---------- */
function applyConfig() {
  const r = document.documentElement.style;
  r.setProperty('--color-primary', APP_CONFIG.primaryColor);
  r.setProperty('--color-primary-text', APP_CONFIG.primaryTextColor);
  r.setProperty('--color-accent', APP_CONFIG.accentColor);
  r.setProperty('--color-bg', APP_CONFIG.bgColor);
  r.setProperty('--font-sans', APP_CONFIG.fontFamily);

  const headerName = document.getElementById('header-app-name');
  if (headerName) headerName.textContent = APP_CONFIG.appName;

  const sidebarLogo = document.getElementById('sidebar-logo');
  if (sidebarLogo) { sidebarLogo.src = APP_CONFIG.logoUrl; sidebarLogo.alt = 'Logo'; }

  document.title = APP_CONFIG.appName + ' — Documentação';

  initAIWidget();
}

/* ---------- AI Widget ---------- */
function initAIWidget() {
  if (!APP_CONFIG.aiEnabled || !APP_CONFIG.aiGhlWidgetId) return;
  
  // Check if already injected
  if (document.querySelector('script[data-widget-id]')) return;

  const script = document.createElement('script');
  script.src = 'https://widgets.leadconnectorhq.com/loader.js';
  script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
  script.setAttribute('data-widget-id', APP_CONFIG.aiGhlWidgetId);
  document.body.appendChild(script);
}

/* ---------- Sidebar ---------- */
function buildSidebar() {
  const nav = document.getElementById('sidebar-nav');
  if (!nav) return;
  nav.innerHTML = '';

  NAV_STRUCTURE.forEach(group => {
    if (group.group) {
      const label = document.createElement('span');
      label.className = 'sidebar-group-label';
      label.textContent = group.group;
      nav.appendChild(label);
    }

    group.items.forEach(item => {
      const a = document.createElement('a');
      a.className = 'sidebar-item' + (item.special ? ' special' : '');
      a.dataset.path = item.path;
      a.href = '#' + item.id;
      a.innerHTML = `<i data-lucide="${item.icon}"></i><span>${item.label}</span>`;
      a.addEventListener('click', e => {
        e.preventDefault();
        loadPage(item.path);
        closeMobileSidebar();
      });
      nav.appendChild(a);
    });
  });

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function highlightActive(path) {
  document.querySelectorAll('.sidebar-item').forEach(el => {
    el.classList.toggle('active', el.dataset.path === path);
  });
}

/* ---------- Page Loading ---------- */
async function loadPage(path) {
  const content = document.getElementById('doc-content');
  if (!content) return;

  content.innerHTML = '<div class="page-loader"><div class="spinner"></div></div>';

  try {
    const resp = await fetch(path);
    if (!resp.ok) throw new Error('404');
    const html = await resp.text();
    content.innerHTML = html;
  } catch {
    content.innerHTML = `<div class="callout callout--danger"><span class="callout-label">ERRO</span> Página não encontrada: ${path}</div>`;
  }

  currentPage = path;
  highlightActive(path);

  // Clean URL — use hash with short ID
  const id = PATH_TO_ID[path];
  if (id) window.history.pushState({}, '', '#' + id);

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Post-process page content
  if (typeof lucide !== 'undefined') lucide.createIcons();
  stripEmojisFromHeadings();
  assignHeadingIds();
  fixGridColumns();
  wrapTablesForScroll();
  initTOC();
  initCodeCopy();
  initTabs();
}

// Handle browser back/forward
window.addEventListener('popstate', () => {
  const hash = window.location.hash.replace('#', '');
  const pagePath = ID_TO_PATH[hash] || ALL_PAGES[0].path;
  if (pagePath !== currentPage) loadPage(pagePath);
});

/* ---------- Strip emojis from headings ---------- */
function stripEmojisFromHeadings() {
  document.querySelectorAll('#doc-content h2, #doc-content h3').forEach(h => {
    h.textContent = h.textContent.replace(/[\u{1F300}-\u{1FAD6}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{200D}\u{20E3}\u{E0020}-\u{E007F}✨⚡🗺🔧📖📋📝👤🔄🏷🗂➕🔍✏️📥💬⚖️⏰✅🔗📱🎯📊🃏💡🧩🔔🤖⚙️🎛🌟📞⭐🕐👥]/gu, '').trim();
  });
}

/* ---------- Assign IDs to h2 elements ---------- */
function assignHeadingIds() {
  const content = document.getElementById('doc-content');
  if (!content) return;

  content.querySelectorAll('h2').forEach(h2 => {
    if (h2.id) return; // already has an ID

    // Try to get ID from parent section
    const section = h2.closest('section[id]');
    if (section) {
      h2.id = section.id;
      return;
    }

    // Generate slug from text
    h2.id = h2.textContent.trim().toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // strip accents
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .substring(0, 50);
  });
}

/* ---------- Smart grid columns ---------- */
function fixGridColumns() {
  document.querySelectorAll('#doc-content .feature-grid').forEach(grid => {
    // Skip on mobile (JS won't override the CSS !important on <640px)
    if (window.innerWidth <= 640) return;
    const count = grid.children.length;
    if (count === 3) grid.style.gridTemplateColumns = 'repeat(3, 1fr)';
    else if (count === 4) grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
    else if (count === 5) grid.style.gridTemplateColumns = 'repeat(3, 1fr)';
    else if (count === 6) grid.style.gridTemplateColumns = 'repeat(3, 1fr)';
    else grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
  });
}

/* ---------- Wrap tables in scrollable container ---------- */
function wrapTablesForScroll() {
  document.querySelectorAll('#doc-content table').forEach(table => {
    if (table.parentElement.classList.contains('table-wrapper')) return;
    const wrapper = document.createElement('div');
    wrapper.className = 'table-wrapper';
    table.parentElement.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });
}

/* ==========================================================
   TOC — Table of Contents (rewritten from scratch)
   ========================================================== */
function initTOC() {
  const tocList = document.getElementById('toc-list');
  if (!tocList) return;
  tocList.innerHTML = '';

  // 1. Disconnect any previous observer
  if (window._tocObserver) {
    window._tocObserver.disconnect();
    window._tocObserver = null;
  }

  // 2. Collect all h2[id] in the loaded content
  const headings = Array.from(
    document.querySelectorAll('#doc-content h2[id]')
  );

  if (headings.length === 0) return;

  // 3. Build TOC links
  headings.forEach(h2 => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#' + h2.id;
    a.textContent = h2.textContent;
    a.addEventListener('click', e => {
      e.preventDefault();
      h2.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    li.appendChild(a);
    tocList.appendChild(li);
  });

  // 4. IntersectionObserver for active tracking
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const link = tocList.querySelector(`a[href="#${id}"]`);
        if (!link) return;
        if (entry.isIntersecting) {
          // Remove active from all, set on this one
          tocList.querySelectorAll('a.active').forEach(a => a.classList.remove('active'));
          link.classList.add('active');
        }
      });
    },
    { rootMargin: '-10% 0px -80% 0px' }
  );

  headings.forEach(h2 => observer.observe(h2));
  window._tocObserver = observer;
}

/* ---------- Code Copy ---------- */
function initCodeCopy() {
  document.querySelectorAll('.code-block').forEach(block => {
    if (block.querySelector('.code-copy-btn')) return;
    const btn = document.createElement('button');
    btn.className = 'code-copy-btn';
    btn.textContent = 'Copiar';
    btn.addEventListener('click', () => {
      const code = block.querySelector('code') || block;
      navigator.clipboard.writeText(code.textContent).then(() => {
        btn.textContent = 'Copiado! ✓';
        setTimeout(() => btn.textContent = 'Copiar', 2000);
      });
    });
    block.appendChild(btn);
  });
}

/* ---------- Tabs ---------- */
function initTabs() {
  document.querySelectorAll('.tabs').forEach(tabContainer => {
    const btns = tabContainer.querySelectorAll('.tab-btn');
    const parent = tabContainer.parentElement;
    btns.forEach(btn => {
      btn.addEventListener('click', () => {
        btns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const target = btn.dataset.tab;
        parent.querySelectorAll('.tab-content').forEach(tc => {
          tc.classList.toggle('active', tc.id === target);
        });
      });
    });
  });
}

/* ---------- Mobile Sidebar ---------- */
function initMobile() {
  const toggle = document.querySelector('.sidebar-toggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');

  if (toggle) toggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('open');
  });

  if (overlay) overlay.addEventListener('click', closeMobileSidebar);
}

function closeMobileSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  if (sidebar) sidebar.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
}

/* ---------- Search ---------- */
function initSearch() {
  const trigger = document.querySelector('.search-trigger');
  const modal = document.getElementById('search-modal');
  const input = document.getElementById('search-input');
  const results = document.getElementById('search-results');
  const backdrop = modal ? modal.querySelector('.search-backdrop') : null;

  if (trigger && modal) trigger.addEventListener('click', () => openSearch());
  if (backdrop) backdrop.addEventListener('click', () => closeSearch());

  if (input) {
    input.addEventListener('input', () => {
      const q = input.value.toLowerCase().trim();
      if (!q) { results.innerHTML = ''; return; }

      const matches = (typeof SEARCH_INDEX !== 'undefined' ? SEARCH_INDEX : [])
        .filter(item => item.title.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q));

      if (matches.length === 0) {
        results.innerHTML = '<li class="search-empty">Nenhum resultado encontrado.</li>';
        return;
      }

      results.innerHTML = matches.map(m =>
        `<li data-path="${m.path}"><div class="sr-title">${m.title}</div><div class="sr-desc">${m.desc}</div></li>`
      ).join('');

      results.querySelectorAll('li[data-path]').forEach(li => {
        li.addEventListener('click', () => {
          loadPage(li.dataset.path);
          closeSearch();
        });
      });
    });
  }
}

function openSearch() {
  const modal = document.getElementById('search-modal');
  const input = document.getElementById('search-input');
  if (modal) modal.removeAttribute('hidden');
  if (input) { input.value = ''; input.focus(); }
  document.getElementById('search-results').innerHTML = '';
}

function closeSearch() {
  const modal = document.getElementById('search-modal');
  if (modal) modal.setAttribute('hidden', '');
}

/* ---------- Keyboard Shortcuts ---------- */
function initKeyboardShortcuts() {
  document.addEventListener('keydown', e => {
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      openSearch();
    }
    if (e.key === 'Escape') {
      closeSearch();
      closeMobileSidebar();
    }
  });
}
