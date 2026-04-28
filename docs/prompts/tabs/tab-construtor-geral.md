# PROMPT — 6.2 Construtor Visual de Workflows

> **Navegação:** Automações > Construtor Visual  
> **Ícone da página:** `git-merge`
> **Anterior:** 6.1 — O que são Automações | **Próxima:** 6.3 — Triggers Disponíveis

---

## Resumo

Tour do canvas de automação e como criar seu primeiro workflow.

---

## Instruções Gerais desta Página

Construir a página seguindo o template padrão definido no Master Prompt:
1. Breadcrumb de navegação
2. Ícone `git-merge` + H1 como título
3. Parágrafo de resumo
4. Seções H2 com âncoras para o TOC
5. Rodapé com navegação ← Anterior | Próxima →

Todas as imagens devem ser placeholders no formato `[IMAGEM: descrição detalhada do que deve ser capturado]`.

---

## Seções da Página

### 🖥 Tour do Canvas {#canvas-tour}

H2 "Tour do Canvas".

[IMAGEM: screenshot do canvas de workflow com nós e conexões]

Legenda das áreas:
1. **Toolbar** — adicionar nós, fazer zoom, desfazer
2. **Canvas** — área de construção do workflow
3. **Painel lateral** — configurações do nó selecionado
4. **Botão de teste** — simular o workflow com um contato real
5. **Botão de ativar** — ligar/desligar o workflow

---

### 🧩 Tipos de Nós {#node-types}

H2 "Tipos de Nós".

Grid de cards por categoria:

**Triggers (Início)**
Form Submitted | Customer Reply | Appointment Booked | Tag Added | Pipeline Stage Changed | Payment Received | Date/Time Based | Stale Opportunity

**Comunicação**
Send SMS/WhatsApp | Send Email | Send Internal Notification | Create Task | Add to Google Ads | Add to Meta

**CRM**
Add Tag | Remove Tag | Update Contact Field | Update Opportunity | Create Opportunity | Find Opportunity

**Controle de Fluxo**
Wait (tempo ou evento) | If/Else Condition | Go To Workflow | Remove from Workflow | End Workflow

**IA**
Activate Conversation AI | Send to Voice AI

---

### 🚀 Criando seu Primeiro Workflow {#first-workflow}

H2 "Criando seu Primeiro Workflow".

Passos numerados com StepCards:

1. Automações > Criar Novo Workflow
2. Clique em "+ Adicionar Trigger" e escolha o evento inicial (ex: Form Submitted)
3. Clique no "+" abaixo do trigger para adicionar a primeira ação (ex: Send SMS)
4. Configure o conteúdo da mensagem no painel lateral
5. Adicione mais nós conforme necessário
6. Use o botão "Testar" para simular com um contato de teste
7. Clique em "Publicar" para ativar

[IMAGEM: canvas com workflow simples de 3 nós]

---

### 💡 Dicas de Boas Práticas {#tips}

H2 "Dicas de Boas Práticas".

Callout success: "DICA: Sempre teste o workflow com seu próprio número/e-mail antes de ativar para contatos reais. Isso evita enviar mensagens incorretas para leads."

Lista:
- Dê nomes descritivos para seus workflows (ex: "01. Lead Novo — WhatsApp")
- Use o Wait de 1-2 minutos entre o trigger e a primeira mensagem para não parecer robótico
- Configure o "Allow Re-entry" com cuidado — geralmente deve estar desativado
- Use condições (If/Else) para tratar leads que já estão em outras etapas
- Adicione notificação interna nos workflows críticos para que o time seja avisado

---

## Checklist antes de finalizar esta página

- [ ] Breadcrumb correto: Automações > Construtor Visual
- [ ] Ícone correto: `git-merge`
- [ ] TOC gerado automaticamente a partir dos H2
- [ ] Todos os [IMAGEM: ...] marcados como placeholder
- [ ] Navegação Prev/Next no rodapé: ← 6.1 — O que são Automações | 6.3 — Triggers Disponíveis →
- [ ] Responsividade testada em mobile
- [ ] Callouts usando as classes corretas (info, warning, success, danger)