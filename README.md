# [App da Agência] — Documentação Interativa

Site de documentação estático, personalizável e pronto para embed no GoHighLevel.  
Construído com HTML5, CSS3 e JavaScript puro. Sem frameworks. Deploy em 1 clique.

---

## Índice

1. [Instalação e configuração inicial](#instalação-e-configuração-inicial)
2. [Personalizando para sua agência](#personalizando-para-sua-agência)
3. [Subindo as alterações para o GitHub](#subindo-as-alterações-para-o-github)
4. [Ativando o GitHub Pages](#ativando-o-github-pages)
5. [Embedando no GoHighLevel](#embedando-no-gohighlevel)
6. [Configurando o Voice AI](#configurando-o-voice-ai)
7. [Estrutura de arquivos](#estrutura-de-arquivos)
8. [Dúvidas frequentes](#dúvidas-frequentes)

---

## Instalação e configuração inicial

Você não precisa instalar Node.js, Git ou qualquer ferramenta de linha de comando.  
Tudo é feito dentro do **Anti-Gravity**, uma IDE com IA integrada.

### Passo 1 — Baixar o Anti-Gravity

1. Acesse **[antigravity.ai](https://antigravity.ai)** e baixe a versão gratuita
2. Escolha o instalador correto para o seu sistema: **Windows** ou **Mac**
3. Instale normalmente e abra o programa
4. Conecte sua conta Google quando solicitado

### Passo 2 — Conectar sua conta GitHub

1. Dentro do Anti-Gravity, clique em **Connect to GitHub**
2. O navegador abrirá automaticamente para autenticação
3. Faça login no GitHub e autorize o acesso
4. Volte ao Anti-Gravity — a conexão estará ativa

> Ainda não tem conta no GitHub? Crie gratuitamente em [github.com](https://github.com)

### Passo 3 — Fazer fork do repositório

1. Acesse o repositório oficial da documentação HTC:  
   **[github.com/htc-community/saas-documentation]** ← link será disponibilizado
2. Clique em **Fork** no canto superior direito
3. Isso cria uma cópia do projeto na sua própria conta GitHub
4. Você pode renomear o repositório para o nome da sua agência

### Passo 4 — Clonar o repositório no Anti-Gravity

1. No Anti-Gravity, clique em **Clone Repository**
2. Selecione o repositório que você acabou de criar via fork
3. Escolha uma pasta no seu computador para salvar os arquivos
4. Aguarde o download — o projeto estará pronto para edição

---

## Personalizando para sua agência

Toda a personalização é feita em **um único arquivo**: `docs/config.js`.  
Abra esse arquivo no Anti-Gravity e altere apenas os valores entre aspas.

### Identidade visual

```javascript
appName: 'Nome do Seu App',          // nome exibido no header e sidebar
appTagline: 'Sua descrição aqui',    // subtítulo da página de introdução
logoUrl: './assets/logo.svg',        // caminho para o logo
faviconUrl: './assets/favicon.ico',  // ícone da aba do navegador
```

**Para trocar o logo:**
1. Exporte o logo da sua agência em formato `.svg` ou `.png`
2. Renomeie o arquivo para `logo.svg`
3. Arraste o arquivo para a pasta `docs/assets/` dentro do Anti-Gravity
4. O logo será substituído automaticamente no site

### Cores

```javascript
primaryColor: '#FFD600',        // cor do sidebar — use a cor principal da sua marca
primaryTextColor: '#111827',    // cor do texto dentro do sidebar
accentColor: '#111827',         // cor de links e destaques
```

> Para encontrar o código HEX da sua cor: [htmlcolorcodes.com](https://htmlcolorcodes.com/color-picker/)

### Contato e suporte

```javascript
supportEmail: 'suporte@suaagencia.com',
supportWhatsApp: '+5511999999999',
supportUrl: 'https://suaagencia.com',
```

### Assistente de voz

```javascript
aiEnabled: true,
aiName: 'Nexus',                    // nome exibido no widget
aiGhlWidgetId: 'SEU_WIDGET_ID',     // preenchido após configurar o Voice AI (seção abaixo)
```

### Seção exclusiva do plano (Seção 14)

```javascript
customSectionEnabled: true,
customSectionTitle: 'Seu Plano',
customFeatures: [
  {
    title: 'Nome da Feature',
    desc: 'Descrição do recurso incluso no plano.',
    icon: 'star'
  }
]
```

### Editando o conteúdo das páginas

Cada página está em `docs/pages/`. Abra qualquer arquivo `.html` no Anti-Gravity e edite o texto diretamente.

Os títulos `<h2 id="...">` geram automaticamente os itens do TOC lateral. Não remova os atributos `id`.

Para adicionar screenshots reais, substitua os marcadores `[IMAGEM: descrição]` por:
```html
<img src="./assets/screenshots/nome-do-arquivo.png" alt="Descrição">
```
E coloque o arquivo de imagem na pasta `docs/assets/screenshots/`.

### Atualizando a página do Knowledge Base

Sempre que editar qualquer conteúdo das páginas, abra também o arquivo  
`docs/kb-full.html` e faça a mesma alteração no trecho correspondente.

Esse arquivo é usado exclusivamente pelo assistente de voz para aprender o conteúdo da documentação. Sem essa atualização, o Voice AI continuará respondendo com informações antigas.

---

## Subindo as alterações para o GitHub

Após personalizar, envie as alterações de volta para o GitHub pelo Anti-Gravity:

1. No Anti-Gravity, clique no ícone de **Source Control** (ou Git) na barra lateral
2. Você verá a lista de arquivos modificados
3. Escreva uma mensagem descrevendo a alteração (ex: `Atualização de cores e logo`)
4. Clique em **Commit** e depois em **Push**
5. As alterações já estão no GitHub

---

## Ativando o GitHub Pages

1. Abra seu repositório no GitHub
2. Clique em **Settings** → **Pages**
3. Em **Branch**, selecione `main`
4. Na pasta, selecione `/docs`
5. Clique em **Save**

Aguarde 1 a 2 minutos. A URL do site aparecerá no formato:
```
https://seu-usuario.github.io/nome-do-repositorio/
```

Copie essa URL — você vai precisar dela para o embed e para o Voice AI.

---

## Embedando no GoHighLevel

### Opção 1 — Menu lateral (recomendado para começar)

1. Acesse sua agência no GoHighLevel
2. Vá em **Settings → Custom Menu Links**
3. Clique em **+ Add Menu Link**
4. Preencha:
   - **Name:** Documentação
   - **URL:** URL do GitHub Pages
   - **Open in:** iFrame
   - **Icon:** book
5. Ative **Show for all sub-accounts**
6. Clique em **Save**

### Opção 2 — Via Snapshot (para SaaS)

Inclua o Custom Menu Link dentro do snapshot. Quando um novo cliente ativar o plano, a documentação já aparece automaticamente na conta dele.

---

## Configurando o Voice AI

O widget de voz já está integrado visualmente na documentação.  
Para ativá-lo com a IA da sua conta GHL, siga os passos abaixo.

### Passo 1 — Criar o Knowledge Base

1. No GHL, acesse `AI Agents → Knowledge Base → Create New`
2. Nome: `Documentação [App da Agência]`
3. Em **Web Crawler**, adicione a seguinte URL como tipo **Exact URL**:
   ```
   https://seu-usuario.github.io/nome-do-repositorio/kb-full.html
   ```
4. Clique em **Crawl** e aguarde
5. Salve o Knowledge Base

> Esta URL aponta para uma página especial que contém todo o conteúdo da documentação em um único lugar, permitindo que o GHL indexe tudo de uma vez.

### Passo 2 — Criar o Voice AI Agent

1. `AI Agents → Voice AI → New Agent`
2. Configure:
   - **Agent Name:** nome do assistente (ex: Nexus)
   - **Language:** Português (Brasil)
   - **Initial Message:** `Olá! Sou o Nexus, assistente da documentação do [App da Agência]. Como posso te ajudar hoje?`
3. Em **Agent Goals**, clique em **Switch to Advanced Mode**
4. Cole o prompt completo do arquivo `docs/prompts/voice-ai-prompt.md`
5. Conecte o Knowledge Base criado no passo anterior
6. **Trigger Prompt:** `O usuário está perguntando sobre funcionalidades, configurações ou como usar a plataforma`
7. Clique em **Evaluate**, resolva os itens críticos e salve

### Passo 3 — Criar o Chat Widget

1. `Sites → Chat Widgets → New Widget → Voice AI`
2. Conecte ao agente criado acima
3. Configure a cor para coincidir com o `primaryColor` do `config.js`
4. Clique em **Get Code** e copie o `data-widget-id`

### Passo 4 — Conectar ao config.js

Abra `docs/config.js` e preencha:
```javascript
aiGhlWidgetId: 'COLE_O_WIDGET_ID_AQUI',
```

Salve, faça commit e push. Aguarde 1-2 minutos e teste.

### Mantendo o Voice AI atualizado

Sempre que atualizar páginas da documentação e o `kb-full.html`:
1. Faça o push normalmente para o GitHub
2. No GHL, acesse `AI Agents → Knowledge Base → [seu KB]`
3. Clique em **Re-crawl**
4. O assistente aprende o novo conteúdo imediatamente

---

## Estrutura de arquivos

```
saas-documentation-htc/
├── README.md                     ← este arquivo
└── docs/
    ├── index.html                ← shell principal
    ├── config.js                 ← ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR
    ├── kb-full.html              ← página do Knowledge Base do Voice AI
    └── assets/
        ├── css/
        │   ├── style.css             ← design system (não editar)
        │   └── components.css        ← componentes (não editar)
        ├── js/
        │   ├── app.js                ← navegação (não editar)
        │   ├── ai-widget.js          ← widget de voz (não editar)
        │   └── search-index.js       ← busca (não editar)
        ├── logo.svg                  ← SUBSTITUIR pelo logo da agência
        ├── favicon.ico               ← SUBSTITUIR pelo favicon
        └── screenshots/              ← ADICIONAR capturas de tela aqui
    ├── pages/
    │   ├── getting-started/          ← páginas 1.1 a 1.3
    │   ├── crm/                      ← páginas 2.1 a 2.5
    │   ├── conversations/            ← páginas 3.1 a 3.2
    │   ├── calendars/                ← página 4.1
    │   ├── pipelines/                ← página 5.1
    │   ├── automations/              ← páginas 6.1 a 6.4
    │   ├── ai/                       ← páginas 10.1 a 10.2
    │   ├── reputation/               ← página 11.1
    │   ├── reports/                  ← página 12.1
    │   ├── settings/                 ← páginas 13.1 a 13.3
    │   └── agency/                   ← páginas 14.1 a 14.2
    └── prompts/
        └── voice-ai-prompt.md        ← prompt completo do Voice AI
```

---

## Dúvidas frequentes

**Posso usar meu próprio domínio?**  
Sim. No GitHub, vá em Settings → Pages → Custom Domain. Adicione um registro CNAME no seu provedor de DNS apontando para `seu-usuario.github.io`.

**Como adicionar novas páginas?**  
Crie um arquivo `.html` em `docs/pages/sua-pasta/`, copie a estrutura de uma página existente e adicione a entrada em `NAV_STRUCTURE` dentro de `docs/assets/js/app.js`. Adicione também o conteúdo novo em `docs/kb-full.html` e faça re-crawl no GHL.

**O Voice AI está respondendo coisas erradas ou desatualizadas.**  
Verifique se o `kb-full.html` foi atualizado com as últimas alterações e faça re-crawl no Knowledge Base do GHL.

**O site abre mas mostra só o README.**  
Confirme que no GitHub Pages a pasta selecionada é `/docs`, não `/ (root)`.
