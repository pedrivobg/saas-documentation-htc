# [App da Agência] — Documentação Interativa

Site de documentação estático, personalizável e pronto para embed no GoHighLevel.  
Construído com HTML5, CSS3 e JavaScript puro. Sem frameworks. Deploy em minutos.

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

Você não precisa saber programar nem mexer em código diretamente.  
Todas as alterações são feitas via IA dentro do **Anti-Gravity**, a IDE do Google com IA integrada.

### Passo 1 — Baixar o Anti-Gravity

1. Acesse **[antigravity.google](https://antigravity.google/)** e baixe a versão gratuita
2. Escolha o instalador para o seu sistema: **Windows** ou **Mac**
3. Instale e abra o programa
4. Conecte sua conta Google quando solicitado

### Passo 2 — Conectar sua conta GitHub

1. Dentro do Anti-Gravity, clique em **Connect to GitHub**
2. O navegador abrirá automaticamente para autenticação
3. Faça login no GitHub e autorize o acesso
4. Volte ao Anti-Gravity — a conexão estará ativa

> Ainda não tem conta no GitHub? Crie gratuitamente em [github.com](https://github.com)

### Passo 3 — Fazer fork do repositório

1. Acesse o repositório oficial da documentação HTC:  
   **[github.com/pedrivobg/saas-documentation-htc](https://github.com/pedrivobg/saas-documentation-htc)**
2. Clique em **Fork** no canto superior direito
3. Isso cria uma cópia do projeto na sua própria conta GitHub
4. Você pode renomear o repositório para o nome da sua agência se quiser

### Passo 4 — Clonar o repositório no Anti-Gravity

1. No Anti-Gravity, clique em **Clone Repository**
2. Selecione o repositório que você acabou de criar via fork
3. Escolha uma pasta no seu computador para salvar os arquivos
4. Aguarde o download — o projeto estará pronto para edição

---

## Personalizando para sua agência

Você não precisa editar nenhum arquivo diretamente. A IA do Anti-Gravity faz tudo por você.

### Como usar a IA do Anti-Gravity para personalizar

No Anti-Gravity, selecione o modelo **Gemini 2.5 Pro** no seletor de modelos e abra o chat de IA.  
Copie o prompt abaixo, preencha com os dados da sua agência e envie:

---

```
Preciso personalizar esta documentação para minha agência. Faça as seguintes alterações em todos os arquivos necessários do projeto:

- Nome do app: [ESCREVA AQUI O NOME DO SEU APP]
- Descrição/tagline: [ESCREVA AQUI UMA FRASE CURTA DE DESCRIÇÃO]
- Cor principal do sidebar (HEX): [EX: #1A56DB]
- Cor do texto no sidebar (HEX): [EX: #FFFFFF]
- Cor de links e destaques (HEX): [EX: #1A56DB]
- E-mail de suporte: [SEU EMAIL]
- WhatsApp de suporte (com código do país): [EX: +5511999999999]
- Site da agência: [EX: https://suaagencia.com.br]
- Nome do assistente de voz: [EX: Nexus]
- Recursos exclusivos do plano (liste até 5, com título e descrição curta):
  1. [Título]: [Descrição]
  2. [Título]: [Descrição]
  3. [Título]: [Descrição]
```

---

A IA vai localizar e atualizar todos os arquivos necessários automaticamente.

### Trocando o logo

Após receber as alterações da IA, troque o logo manualmente:

1. Prepare o logo da sua agência em formato `.svg` ou `.png`
2. No Anti-Gravity, navegue até a pasta `docs/assets/`
3. Arraste o arquivo de logo para essa pasta
4. Se o nome do arquivo for diferente de `logo.svg`, envie este prompt para a IA:

```
Atualize o caminho do logo em todos os arquivos para apontar para ./assets/[NOME-DO-SEU-ARQUIVO]
```

### Adicionando screenshots reais

Para substituir os placeholders de imagem da documentação, envie para a IA:

```
Substitua o placeholder [IMAGEM: DESCRIÇÃO DA IMAGEM] na página [NOME DA PÁGINA] 
por uma tag de imagem apontando para ./assets/screenshots/[NOME-DO-ARQUIVO.png]
```

Arraste o arquivo de imagem para `docs/assets/screenshots/` e pronto.

### Editando o conteúdo de uma página

Para alterar qualquer texto da documentação sem mexer no código, envie para a IA:

```
Na página [NOME DA PÁGINA], altere o texto [TRECHO ATUAL] para [NOVO TEXTO].
Faça a mesma alteração no arquivo kb-full.html no trecho correspondente.
```

> **Importante:** sempre que editar o conteúdo de qualquer página, peça para a IA atualizar também o `kb-full.html`. Esse arquivo é usado pelo assistente de voz para aprender o conteúdo da documentação.

---

## Subindo as alterações para o GitHub

Após a IA fazer as alterações, suba tudo de volta ao GitHub:

1. No Anti-Gravity, clique no ícone de **Source Control** na barra lateral esquerda
2. Você verá a lista de arquivos modificados
3. Escreva uma mensagem curta descrevendo o que mudou (ex: `Personalização da agência`)
4. Clique em **Commit** e depois em **Push**
5. Pronto — as alterações estão no GitHub e o site será atualizado em instantes

---

## Ativando o GitHub Pages

Faça isso apenas uma vez, logo após o primeiro push:

1. Abra seu repositório no GitHub
2. Clique em **Settings** → **Pages**
3. Em **Branch**, selecione `main`
4. Na pasta, selecione `/docs`
5. Clique em **Save**

Aguarde 1 a 2 minutos. A URL do site aparecerá no formato:
```
https://seu-usuario.github.io/nome-do-repositorio/
```

Copie essa URL — você vai precisar dela para o embed no GoHighLevel e para configurar o Voice AI.

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

A documentação agora aparece como uma aba no menu lateral para todos os usuários das subcontas.

### Opção 2 — Via Snapshot (para SaaS)

Inclua o Custom Menu Link dentro do snapshot. Quando um novo cliente ativar o plano, a documentação já aparece automaticamente na conta dele, sem nenhuma configuração manual.

---

## Configurando o Voice AI

O widget de voz já aparece visualmente na documentação. Para ativá-lo com a IA da sua conta GHL, siga os passos abaixo.

### Passo 1 — Criar o Knowledge Base

1. No GHL, acesse `AI Agents → Knowledge Base → Create New`
2. Nome: `Documentação [App da Agência]`
3. Em **Web Crawler**, adicione esta URL como tipo **Exact URL**:
   ```
   https://seu-usuario.github.io/nome-do-repositorio/kb-full.html
   ```
4. Clique em **Crawl** e aguarde o processamento
5. Salve o Knowledge Base

> Esta URL aponta para uma página especial com todo o conteúdo da documentação em um único lugar, permitindo que o GHL indexe tudo de uma vez.

### Passo 2 — Criar o Voice AI Agent

1. `AI Agents → Voice AI → New Agent`
2. Configure:
   - **Agent Name:** nome do assistente (ex: Nexus)
   - **Language:** Português (Brasil)
   - **Initial Message:** `Olá! Sou o Nexus, assistente da documentação do [App da Agência]. Como posso te ajudar hoje?`
3. Em **Agent Goals**, clique em **Switch to Advanced Mode**
4. Cole o prompt completo disponível no arquivo `docs/prompts/voice-ai-prompt.md`
5. Conecte o Knowledge Base criado no passo anterior
6. **Trigger Prompt:** `O usuário está perguntando sobre funcionalidades, configurações ou como usar a plataforma`
7. Clique em **Evaluate**, resolva os itens críticos e salve

### Passo 3 — Criar o Chat Widget

1. `Sites → Chat Widgets → New Widget → Voice AI`
2. Conecte ao agente criado acima
3. Configure a cor para a mesma cor principal da sua agência
4. Clique em **Get Code** e copie o código completo que aparecer

### Passo 4 — Conectar o widget à documentação

Com o código copiado do GHL, envie este prompt para a IA do Anti-Gravity:

```
Substitua o código do Voice AI widget no projeto pelo seguinte código:

[COLE AQUI O CÓDIGO COPIADO DO GHL]
```

A IA vai localizar o lugar correto e fazer a troca automaticamente. Depois é só fazer commit e push normalmente.

### Mantendo o Voice AI atualizado

Sempre que editar o conteúdo da documentação:
1. Faça commit e push normalmente pelo Anti-Gravity
2. No GHL, acesse `AI Agents → Knowledge Base → [seu KB]`
3. Clique em **Re-crawl**
4. O assistente aprende o novo conteúdo imediatamente — sem nenhuma outra configuração

---

## Estrutura de arquivos

```
saas-documentation-htc/
├── README.md                     ← este arquivo
└── docs/
    ├── index.html                ← shell principal (não editar)
    ├── config.js                 ← configurações do app (editado pela IA)
    ├── kb-full.html              ← conteúdo completo para o Voice AI
    └── assets/
        ├── css/                      ← estilos (não editar)
        ├── js/                       ← lógica do site (não editar)
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
        └── voice-ai-prompt.md        ← prompt do Voice AI para o GHL
```

---

## Dúvidas frequentes

**Preciso saber programar para usar isso?**  
Não. Todas as alterações são feitas via IA dentro do Anti-Gravity. Você descreve o que quer, a IA faz.

**Posso usar meu próprio domínio?**  
Sim. No GitHub, vá em Settings → Pages → Custom Domain. Adicione um registro CNAME no seu provedor de DNS apontando para `seu-usuario.github.io`.

**Como adicionar novas páginas?**  
Envie para a IA do Anti-Gravity:
```
Crie uma nova página de documentação chamada [NOME DA PÁGINA] na seção [NOME DA SEÇÃO], 
com o seguinte conteúdo: [DESCREVA O CONTEÚDO]. Adicione também ao kb-full.html.
```

**O Voice AI está respondendo coisas erradas ou desatualizadas.**  
Verifique se o `kb-full.html` foi atualizado e faça re-crawl no Knowledge Base do GHL.

**O site abre mas mostra só o README.**  
Confirme que no GitHub Pages a pasta selecionada é `/docs`, não `/ (root)`.

**O Anti-Gravity não está conseguindo fazer a alteração que pedi.**  
Tente ser mais específico no prompt, indicando o nome da seção ou da página que quer alterar. Se ainda assim não funcionar, tente dividir o pedido em partes menores.

