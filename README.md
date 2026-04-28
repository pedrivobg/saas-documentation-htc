# [App da Agência] — Documentação Interativa

Site de documentação estático, personalizável e pronto para embed no GoHighLevel.  
Construído com HTML5, CSS3 e JavaScript puro. Sem frameworks. Deploy em 1 clique.

---

## Índice

1. [Pré-requisitos](#pré-requisitos)
2. [Instalação local](#instalação-local)
3. [Personalizando para sua agência](#personalizando-para-sua-agência)
4. [Subindo para o GitHub](#subindo-para-o-github)
5. [Ativando o GitHub Pages](#ativando-o-github-pages)
6. [Embedando no GoHighLevel](#embedando-no-gohighlevel)
7. [Estrutura de arquivos](#estrutura-de-arquivos)

---

## Pré-requisitos

- [Node.js](https://nodejs.org) v18 ou superior
- [Git](https://git-scm.com) instalado
- Conta no [GitHub](https://github.com)
- Acesso de admin à sua conta no GoHighLevel (para o embed final)

---

## Instalação local

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/saas-documentation-htc.git

# 2. Entre na pasta
cd saas-documentation-htc

# 3. Instale as dependências
npm install

# 4. Inicie o servidor local
npm start
```

Abra `http://localhost:3000` no navegador. A documentação já estará rodando.

---

## Personalizando para sua agência

Toda a personalização é feita em **um único arquivo**: `public/config.js`.  
Abra esse arquivo em qualquer editor de texto (VS Code, Notepad++, etc.) e altere os valores.

### Identidade visual

```javascript
appName: 'Nome do Seu App',          // nome exibido no header e sidebar
appTagline: 'Sua descrição aqui',    // subtítulo da página de introdução
logoUrl: './assets/logo.svg',        // caminho para o logo (substitua o arquivo)
faviconUrl: './assets/favicon.ico',  // ícone da aba do navegador
```

**Para trocar o logo:**
1. Exporte o logo da sua agência em formato `.svg` ou `.png`
2. Renomeie o arquivo para `logo.svg` (ou atualize o caminho em `logoUrl`)
3. Coloque o arquivo em `public/assets/`
4. O logo antigo será substituído automaticamente

### Cores

```javascript
primaryColor: '#FFD600',        // cor de fundo do sidebar — use a cor principal da sua marca
primaryTextColor: '#111827',    // cor do texto dentro do sidebar
accentColor: '#111827',         // cor de links, badges e destaques
```

Para encontrar o código HEX da cor da sua marca, use [htmlcolorcodes.com](https://htmlcolorcodes.com/color-picker/).

### Informações de contato e suporte

```javascript
supportEmail: 'suporte@suaagencia.com',   // e-mail de suporte exibido na seção 14.2
supportWhatsApp: '+5511999999999',         // WhatsApp de suporte (com código do país)
supportUrl: 'https://suaagencia.com',      // site da agência
```

### Nome do assistente de IA

```javascript
aiName: 'Nome da IA',           // nome exibido no widget de chat
aiWelcome: 'Olá! Como posso te ajudar?',  // mensagem inicial do assistente
aiApiEndpoint: '',              // deixar vazio por enquanto (configurar depois)
```

O widget de IA já aparece visualmente na documentação. Para conectá-lo à IA nativa do GoHighLevel, siga as instruções da seção [Embedando no GoHighLevel](#embedando-no-gohighlevel).

### Seção exclusiva do plano (Seção 14)

```javascript
customSectionEnabled: true,
customSectionTitle: 'Seu Plano',
customFeatures: [
  {
    title: 'Nome da Feature',
    desc: 'Descrição do que está incluso no plano.',
    icon: 'star'
  }
]
```

Adicione quantas features quiser nesse array. Elas aparecem automaticamente na página 14.1.

### Atualizando o conteúdo das páginas

Cada página está em `public/pages/`. Para editar o texto de uma página, abra o arquivo `.html` correspondente e edite diretamente o conteúdo entre as tags.

Os títulos `<h2 id="...">` geram automaticamente os itens do menu lateral direito (TOC). Não remova os atributos `id`.

Substitua todos os marcadores `[IMAGEM: descrição]` por capturas de tela reais da sua plataforma usando a tag:
```html
<img src="./assets/screenshots/nome-do-arquivo.png" alt="Descrição da imagem">
```

---

## Subindo para o GitHub

Após personalizar, siga estes passos para subir as alterações:

```bash
# 1. Adicione todos os arquivos modificados
git add .

# 2. Crie um commit com descrição das mudanças
git commit -m "Personalização da agência: cores, logo e conteúdo"

# 3. Envie para o GitHub
git push origin main
```

Se for a primeira vez que você está subindo para um repositório novo:

```bash
# Crie o repositório no GitHub (pelo site), depois conecte:
git remote add origin https://github.com/seu-usuario/nome-do-repositorio.git
git branch -M main
git push -u origin main
```

---

## Ativando o GitHub Pages

O GitHub Pages serve o repositório como um site público gratuitamente.

1. No GitHub, abra o repositório
2. Clique em **Settings** (ícone de engrenagem)
3. No menu lateral, clique em **Pages**
4. Em **Source**, selecione **Deploy from a branch**
5. Em **Branch**, selecione `main` e a pasta `/public`
6. Clique em **Save**

Aguarde 1 a 2 minutos. A URL do site aparecerá no topo da página, no formato:
```
https://seu-usuario.github.io/nome-do-repositorio/
```

Copie essa URL — você vai precisar dela para o embed no GoHighLevel.

---

## Embedando no GoHighLevel

O GoHighLevel permite adicionar abas personalizadas na interface, onde você pode embedar qualquer URL como um iframe. Siga os passos abaixo para colocar a documentação dentro da plataforma dos seus clientes.

### Opção 1 — Aba no menu lateral do GoHighLevel

1. Acesse sua conta de agência no GoHighLevel
2. Vá em **Settings → Custom Menu Links**
3. Clique em **+ Add Menu Link**
4. Preencha:
   - **Name:** Documentação (ou o nome que preferir)
   - **URL:** cole a URL do GitHub Pages (ex: `https://seu-usuario.github.io/nome-do-repositorio/`)
   - **Open in:** selecione **iFrame** para abrir dentro da plataforma
   - **Icon:** escolha um ícone (sugestão: `book` ou `help-circle`)
5. Ative a opção **Show for all sub-accounts** se quiser que apareça para todos os clientes
6. Clique em **Save**

A documentação agora aparece como uma aba no menu lateral para todos os usuários das subcontas da agência.

### Opção 2 — Snapshot (recomendado para SaaS)

Se você está entregando um snapshot para os clientes, inclua a URL da documentação no campo de Custom Menu Link dentro do snapshot. Assim, quando um novo cliente ativa o plano, a documentação já aparece automaticamente na conta dele.

### Conectando o widget de IA nativa do GoHighLevel

Após embedar a documentação, você pode conectar o widget de IA visível na documentação à IA conversacional nativa do GoHighLevel:

1. No GoHighLevel, configure um agente de **Conversation AI** (Settings > Conversation AI)
2. Treine o agente com o conteúdo desta documentação (você pode usar o chat widget configurado para responder sobre a plataforma)
3. No GoHighLevel, vá em **Settings > Chat Widget** e copie o código de embed do widget
4. No arquivo `public/config.js`, cole a URL do endpoint gerado pelo GoHighLevel no campo `aiApiEndpoint`
5. Suba novamente para o GitHub (`git add . && git commit -m "IA conectada" && git push`)
6. Aguarde 1 minuto para o GitHub Pages atualizar

O widget de chat dentro da documentação passará a responder usando a IA da sua plataforma.

---

## Estrutura de arquivos

```
saas-documentation-htc/
├── package.json              ← dependências (Express)
├── server.js                 ← servidor local (npm start)
├── README.md                 ← este arquivo
└── public/
    ├── index.html            ← shell principal da documentação
    ├── config.js             ← ÚNICO ARQUIVO QUE VOCÊ PRECISA EDITAR
    └── assets/
        ├── css/
        │   ├── style.css         ← design system (não editar)
        │   └── components.css    ← componentes (não editar)
        ├── js/
        │   ├── app.js            ← lógica de navegação (não editar)
        │   ├── ai-widget.js      ← widget de IA (não editar)
        │   └── search-index.js   ← índice de busca (não editar)
        ├── logo.svg              ← SUBSTITUIR pelo logo da agência
        ├── favicon.ico           ← SUBSTITUIR pelo favicon da agência
        └── screenshots/          ← ADICIONAR capturas de tela aqui
    └── pages/
        ├── getting-started/      ← páginas 1.1 a 1.3
        ├── crm/                  ← páginas 2.1 a 2.5
        ├── conversations/        ← páginas 3.1 a 3.2
        ├── calendars/            ← página 4.1
        ├── pipelines/            ← página 5.1
        ├── automations/          ← páginas 6.1 a 6.4
        ├── ai/                   ← páginas 10.1 a 10.2
        ├── reputation/           ← página 11.1
        ├── reports/              ← página 12.1
        ├── settings/             ← páginas 13.1 a 13.3
        └── agency/               ← páginas 14.1 a 14.2
```

---

## Dúvidas frequentes

**Posso usar meu próprio domínio?**  
Sim. No GitHub Pages, vá em Settings > Pages > Custom Domain e configure seu domínio. Você vai precisar adicionar um registro CNAME no seu provedor de DNS apontando para `seu-usuario.github.io`.

**O site funciona sem internet?**  
Parcialmente. Os ícones (Lucide via CDN) precisam de conexão. Para uso offline completo, baixe o Lucide e coloque localmente em `public/assets/js/lucide.min.js`, atualizando o `<script>` no `index.html`.

**Como adicionar novas páginas?**  
Crie um novo arquivo `.html` em `public/pages/sua-pasta/`, siga o template das páginas existentes e adicione a entrada correspondente no array `NAV_STRUCTURE` dentro de `public/assets/js/app.js`.

**Como traduzir para outro idioma?**  
Edite diretamente o conteúdo HTML de cada página em `public/pages/`. Para múltiplos idiomas, estruture em subpastas por idioma (`pages/en/`, `pages/pt/`) e ajuste o `loadPage()` em `app.js` para ler o idioma do `config.js`.
