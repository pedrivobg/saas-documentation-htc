# PROMPT — 1.1 Introdução

> **Navegação:** Primeiros Passos > Introdução  
> **Ícone da página:** `zap`
> **Anterior:** — | **Próxima:** 1.2 — Configuração Inicial

---

## Resumo

Visão geral do [App da Agência], o que ele faz, para quem é e quais problemas resolve.

---

## Instruções Gerais desta Página

Construir a página seguindo o template padrão definido no Master Prompt:
1. Breadcrumb de navegação
2. Ícone `zap` + H1 como título
3. Parágrafo de resumo
4. Seções H2 com âncoras para o TOC
5. Rodapé com navegação ← Anterior | Próxima →

Todas as imagens devem ser placeholders no formato `[IMAGEM: descrição detalhada do que deve ser capturado]`.

---

## Seções da Página

### HERO {#hero}

Título H1: "Bem-vindo ao [App da Agência]".
Subtítulo abaixo do H1 em `var(--text-lg)`, cor muted: "A plataforma completa para gerenciar seus leads, automatizar seu comercial e crescer de forma organizada."

Abaixo do subtítulo, um grid de 6 FeatureCards clicáveis (tamanho menor, apenas ícone + label) que navegam para a seção correspondente:
1. CRM e Contatos — ícone: database
2. Conversas — ícone: message-circle
3. Calendários — ícone: calendar
4. Automações — ícone: zap
5. Sites e Funis — ícone: layout
6. Inteligência Artificial — ícone: cpu

Cards em fundo levemente cinza, hover eleva com sombra, cursor pointer. Ao clicar, navega para a página daquela seção.

---

### ✨ Destaques {#highlights}

H2 "Destaques" com parágrafo abaixo: "Benefícios que fazem a diferença para o seu negócio."

Grid 2×2 de HighlightCards, cada um com ícone, título e descrição:

1. **Tudo em um só lugar** | ícone: layers
   "Chega de alternar entre 10 ferramentas. CRM, automação, calendário, chat e pagamentos numa única tela."

2. **Resposta em segundos** | ícone: zap
   "O sistema responde novos leads automaticamente enquanto você faz outras coisas."

3. **Nunca perca um lead** | ícone: target
   "Toda ligação, mensagem ou formulário é capturado e registrado automaticamente."

4. **Veja tudo acontecendo** | ícone: bar-chart-2
   "Dashboard em tempo real mostrando seu funil, conversas e desempenho da equipe."

---

### 🗺 Visão Geral {#overview}

H2 "Visão Geral".

Parágrafo: "[App da Agência] é a central de comando do seu negócio. Todos os seus leads chegam aqui, todas as conversas acontecem aqui, todos os agendamentos e propostas são gerenciados aqui."

Diagrama de fluxo SVG inline mostrando a jornada do lead:
→ Lead entra → CRM registra → IA responde → Reunião agendada → Proposta enviada → Cliente ganho

Nós conectados por setas. Nós: retângulos arredondados, fundo `var(--color-primary)` com opacidade 15%, borda `2px solid var(--color-primary)` no nó final "Cliente ganho". Setas finas em `var(--color-border)` com ponta preenchida.

---

### 🔧 Funcionalidades Principais {#main-features}

H2 "Funcionalidades Principais".

Lista em 2 colunas, cada item com ícone checkmark verde e texto:
- CRM e gestão de contatos
- Inbox unificado (WhatsApp, SMS, e-mail, Instagram, Facebook)
- Calendários com agendamento automático
- Funil de vendas visual (Pipeline)
- Automações e workflows visuais
- E-mail marketing e campanhas
- Construtor de sites e funis de vendas
- Gestão de pagamentos e assinaturas recorrentes
- Inteligência Artificial integrada (chat, voz, reviews)
- Relatórios e dashboards em tempo real

---

### 📖 Conceitos Chave {#key-concepts}

H2 "Conceitos Chave".

5 GlossaryCards em lista vertical (não grid), cada um com:
- Termo em negrito + ícone pequeno à esquerda
- Borda esquerda 3px na cor primária
- Explicação em 1 linha

Termos:
1. **CONTATO** — qualquer pessoa ou empresa no seu banco de dados
2. **OPORTUNIDADE** — um negócio em andamento com um contato específico
3. **PIPELINE** — o caminho visual que uma oportunidade percorre até fechar
4. **WORKFLOW** — uma série de ações automáticas disparadas por um evento
5. **TAG** — uma etiqueta colorida para organizar e filtrar contatos

---

## Checklist antes de finalizar esta página

- [ ] Breadcrumb correto: Primeiros Passos > Introdução
- [ ] Ícone correto: `zap`
- [ ] TOC gerado automaticamente a partir dos H2
- [ ] Todos os [IMAGEM: ...] marcados como placeholder
- [ ] Navegação Prev/Next no rodapé: ← — | 1.2 — Configuração Inicial →
- [ ] Responsividade testada em mobile
- [ ] Callouts usando as classes corretas (info, warning, success, danger)