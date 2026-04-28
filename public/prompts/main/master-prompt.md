# MASTER PROMPT — Documentation App [App da Agência]

> **Envie este prompt PRIMEIRO, antes de qualquer prompt de página.**  
> Ele define o contexto completo, design system e comportamentos globais do projeto.

---

## Contexto do Projeto

Você vai construir uma **documentação interativa completa** para uma plataforma de CRM, automação e marketing chamada **[App da Agência]**.

Esta é uma plataforma **white-label**. O nome real da tecnologia subjacente **NUNCA deve aparecer** no conteúdo — use sempre `[App da Agência]` ou o valor configurado em `config.js`.

A documentação será embedada dentro da própria plataforma como uma página HTML, hospedada no GitHub e servida como site estático. Deve ser **100% responsiva** e funcionar como uma documentação profissional de produto SaaS.

---

## Referência Visual Obrigatória

Seguir exatamente o estilo da documentação **Novo Dash** (referência fornecida):

- Sidebar esquerda com fundo na **cor primária** da agência, fixa, com grupos de navegação
- Conteúdo central em fundo `#F9FAFB`, largura máxima `720px`, centralizada
- **Tabela de conteúdos âncora** na direita, sticky, com indicador de seção ativa
- **Header fixo** com nome do app à esquerda, link DOCUMENTAÇÃO ao centro, seletor de idioma à direita
- **Widget de IA** no canto inferior direito — botão circular que abre painel de chat
- **Cards de feature** com ícone em container quadrado arredondado, título e descrição
- **Breadcrumb** de navegação (Home > Grupo > Página) acima de cada conteúdo
- Rodapé de cada página com ← Página Anterior | Próxima Página →

---

## Tecnologia

**HTML5 + CSS3 (vanilla) + JavaScript vanilla.**  
Sem frameworks. Sem dependências desnecessárias. O resultado deve ser um repositório GitHub com a seguinte estrutura:

```
docs/
├── index.html              ← página inicial (Introdução)
├── config.js               ← ÚNICO ARQUIVO PARA PERSONALIZAR
├── assets/
│   ├── css/
│   │   ├── style.css       ← design system completo (CSS variables)
│   │   └── components.css  ← componentes reutilizáveis
│   ├── js/
│   │   ├── app.js          ← navegação, TOC, busca
│   │   ├── ai-widget.js    ← widget de IA
│   │   └── search-index.js ← índice de busca gerado
│   └── icons/              ← ícones SVG inline
├── pages/
│   ├── getting-started/
│   │   ├── introduction.html
│   │   ├── initial-setup.html
│   │   └── navigation.html
│   ├── crm/
│   ├── conversations/
│   ├── calendars/
│   ├── pipelines/
│   ├── automations/
│   ├── email-marketing/
│   ├── sites-funnels/
│   ├── payments/
│   ├── ai/
│   ├── reputation/
│   ├── reports/
│   ├── settings/
│   └── agency/             ← seção 14 personalizada
└── README.md               ← instruções de personalização
```

---

## Arquivo config.js — Personalização

Este é o **único arquivo** que a agência edita. Todo o sistema lê as variáveis daqui.

```javascript
// config.js — EDITE APENAS ESTE ARQUIVO
const APP_CONFIG = {
  // IDENTIDADE
  appName: '[App da Agência]',
  appTagline: 'Sua plataforma completa de CRM e automação',
  logoUrl: './assets/logo.svg',
  faviconUrl: './assets/favicon.ico',

  // CORES (HEX)
  primaryColor: '#FFD600',           // fundo do sidebar
  primaryTextColor: '#111827',       // texto no sidebar
  accentColor: '#111827',            // links, badges, destaques
  bgColor: '#F9FAFB',                // fundo do conteúdo
  fontFamily: 'Inter, Arial, sans-serif',

  // AI WIDGET
  aiEnabled: true,
  aiName: 'Nexus',
  aiWelcome: 'Olá! Como posso te ajudar com o [App da Agência]?',
  aiApiEndpoint: '',                 // URL do endpoint de IA

  // IDIOMA
  defaultLanguage: 'pt-BR',
  languages: ['pt-BR'],

  // CONTATO E SUPORTE
  supportEmail: 'suporte@suaagencia.com',
  supportWhatsApp: '',
  supportUrl: '',

  // SEÇÃO 14 — PERSONALIZAÇÕES (editar conforme o plano)
  customSectionEnabled: true,
  customSectionTitle: 'Seu Plano',
  customSectionSubtitle: 'Recursos exclusivos incluídos no seu plano',
  customFeatures: [
    {
      title: 'Feature Exclusiva',
      desc: 'Descrição da feature...',
      icon: 'star'
    }
  ]
};
```

---

## Design System — CSS Variables

```css
/* style.css — gerado a partir do config.js */
:root {
  /* Cores primárias (lidas do config.js via JS no load) */
  --color-primary: #FFD600;
  --color-primary-dark: #E6C000;
  --color-primary-text: #111827;
  --color-accent: #111827;
  --color-accent-light: #F3F4F6;

  /* Fundo e superfícies */
  --color-bg: #F9FAFB;
  --color-bg-card: #FFFFFF;
  --color-border: #E5E7EB;

  /* Texto */
  --color-text: #111827;
  --color-text-muted: #6B7280;
  --color-text-sidebar: #111827;

  /* Estados */
  --color-success: #10B981;
  --color-success-light: #ECFDF5;
  --color-warning: #F59E0B;
  --color-warning-light: #FFFBEB;
  --color-error: #EF4444;
  --color-error-light: #FEF2F2;
  --color-info: #3B82F6;
  --color-info-light: #EFF6FF;

  /* Layout */
  --sidebar-width: 240px;
  --toc-width: 200px;
  --header-height: 56px;
  --content-max-width: 720px;

  /* Tipografia */
  --font-sans: 'Inter', Arial, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;

  /* Bordas e sombras */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-full: 9999px;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.08);
  --shadow-lg: 0 8px 24px rgba(0,0,0,0.12);
}
```

---

## Componentes Globais

### Sidebar
- Largura `240px`, fundo `var(--color-primary)`, fixa à esquerda
- Logo no topo: `40px` de altura, padding `20px`
- Grupos: label uppercase, `11px`, `font-weight: 700`, `opacity: 0.6`
- Items: `padding: 8px 12px`, `border-radius: var(--radius-sm)`, `14px`, `font-weight: 500`
- Item ativo: `background: rgba(0,0,0,0.12)`, `font-weight: 700`
- Ícone: `16px`, `margin-right: 10px`
- Mobile (`<768px`): colapsa para drawer com hamburger no header

### Header Fixo
- Altura `56px`, fundo branco, `border-bottom: 1px solid var(--color-border)`
- Esquerda: logo + nome do app
- Centro: link "DOCUMENTAÇÃO" em `font-size: 13px`, `letter-spacing: 0.05em`
- Direita: ícone de busca (abre search modal) + badge de idioma
- Z-index: `1000`

### TOC (Table of Contents) — Lateral Direita
- `position: sticky`, `top: calc(var(--header-height) + 24px)`
- Largura `200px`, visível apenas em `>1280px`
- Título: "Nesta página", `12px`, uppercase, muted
- Links de âncora: `13px`, muted → hover accent
- Item ativo: `color: var(--color-accent)`, `font-weight: 600`, `border-left: 2px solid`
- Gerado automaticamente via `IntersectionObserver` nos H2 da página

### AI Widget
- `position: fixed`, `bottom: 24px`, `right: 24px`
- Botão: circular `56px`, fundo `var(--color-primary)`, sombra elevada
- Painel: `380px × 520px`, `border-radius: 16px`, sombra XL
- Header: nome da IA (lido de `config.js`), cor primária
- Input: `border: 1px solid var(--color-border)`, `border-radius: var(--radius-md)`
- Streaming de resposta com cursor piscante

### FeatureCard
- Fundo `var(--color-bg-card)`, `border: 1px solid var(--color-border)`, `border-radius: var(--radius-md)`
- Padding `24px`
- Ícone: container `44×44px`, `background: var(--color-accent-light)`, `border-radius: var(--radius-md)`
- Hover: `transform: translateY(-2px)`, `box-shadow: var(--shadow-md)`, `transition: 200ms ease`
- Grid: `1col` mobile → `2col` tablet → `3col` desktop

### Callout / Alert Box
- `padding: 14px 16px`, `border-radius: var(--radius-md)`, `border-left: 4px solid`
- Tipos: `info` (azul), `warning` (amarelo), `success` (verde), `danger` (vermelho)
- Label em negrito (`NOTA`, `IMPORTANTE`, `DICA`, `ATENÇÃO`) + texto corrido

### Code Block
- `background: #1E293B`, `color: #E2E8F0`, `border-radius: var(--radius-md)`
- Padding `20px`, `font: var(--font-mono)`, `14px`
- Botão "Copiar" no canto superior direito → muda para "Copiado! ✓" por 2 segundos

---

## Comportamentos Interativos Obrigatórios

1. **Sidebar mobile**: colapsa em `<768px`, toggle com hamburger no header, overlay escuro
2. **TOC ativo**: `IntersectionObserver` nos H2, atualiza qual item está em view
3. **Busca**: modal ao pressionar `/` ou clicar no ícone, filtra `search-index.js` em tempo real
4. **Smooth scroll**: clique em âncora do TOC rola com `behavior: 'smooth'`
5. **Teclado**: `ESC` fecha modais e sidebar mobile, `/` abre busca
6. **AI Widget**: streaming da resposta via `fetch` com `ReadableStream`
7. **Code block**: botão copiar com `navigator.clipboard.writeText()`
8. **Breadcrumb**: gerado automaticamente a partir da estrutura de pastas
9. **Navegação Prev/Next**: rodapé de cada página com links para anterior e próxima

---

## Estrutura de Cada Página (obrigatória)

```html
<!-- Toda página segue exatamente este template -->
<article class="doc-page">
  <nav class="breadcrumb">Home > Seção > Página</nav>

  <header class="page-header">
    <div class="page-icon"><!-- SVG --></div>
    <h1>Título da Página</h1>
    <p class="page-summary">Resumo em 2-3 linhas.</p>
  </header>

  <div class="quick-cards"><!-- 3-4 highlight cards --></div>

  <hr class="section-divider">

  <section id="secao-1">
    <h2>Título da Seção</h2>
    <!-- conteúdo -->
  </section>

  <!-- mais seções H2... -->

  <nav class="page-nav">
    <a href="prev.html">← Página Anterior</a>
    <a href="next.html">Próxima Página →</a>
  </nav>
</article>
```

---

## Tom de Voz

- Frases **curtas**, máximo 2 linhas por parágrafo
- Começar explicações com "O que é" antes de "Como usar"
- Usar **analogias do mundo físico** (funil = quadro de tarefas, tag = etiqueta, workflow = receita)
- Nunca usar jargão técnico sem explicar na mesma frase
- Screenshots: placeholder `[IMAGEM: descrição]` onde uma captura deve ser inserida
- Emojis com moderação nos títulos de seção (tornando mais amigável para iniciantes)

---

## O que NUNCA fazer

- ❌ Mencionar GoHighLevel, GHL, HighLevel ou qualquer nome da tecnologia real
- ❌ Usar imagens externas que dependam de CDN não controlado
- ❌ Hardcodar cores no CSS — sempre usar variáveis CSS
- ❌ Criar mais de 3 níveis de hierarquia na sidebar
- ❌ Incluir paywall ou login na documentação — ela é pública
- ❌ Usar unicode direto para bullets — usar listas HTML `<ul><li>`

---

## Ordem de Prioridade para Construção

Construir as páginas nesta ordem:

1. `index.html` + layout base (sidebar, header, TOC, AI widget)
2. Design system completo (`style.css` + `components.css`)
3. JavaScript global (`app.js`, busca, TOC observer)
4. Página 1.1 — Introdução
5. Páginas 2.1–2.3 — CRM
6. Páginas 3.1–3.2 — Conversas e WhatsApp
7. Páginas 4.1–4.4 — Calendários
8. Páginas 6.1–6.4 — Automações
9. Páginas 5.1–5.3 — Pipeline
10. Todas as demais na sequência numérica