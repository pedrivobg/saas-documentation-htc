# PROMPT — 1.2 Configuração Inicial

> **Navegação:** Primeiros Passos > Configuração Inicial  
> **Ícone da página:** `settings`
> **Anterior:** 1.1 — Introdução | **Próxima:** 1.3 — Navegando na Plataforma

---

## Resumo

Os 7 primeiros passos para deixar a plataforma pronta para usar.

---

## Instruções Gerais desta Página

Construir a página seguindo o template padrão definido no Master Prompt:
1. Breadcrumb de navegação
2. Ícone `settings` + H1 como título
3. Parágrafo de resumo
4. Seções H2 com âncoras para o TOC
5. Rodapé com navegação ← Anterior | Próxima →

Todas as imagens devem ser placeholders no formato `[IMAGEM: descrição detalhada do que deve ser capturado]`.

---

## Seções da Página

### ⚡ Por onde começar {#overview}

H2 "Por onde começar".

Callout tipo info: "Siga os passos abaixo na ordem. Cada um depende do anterior para funcionar corretamente. Você vai levar entre 30 e 60 minutos para completar tudo."

Progresso visual: barra de 7 etapas numeradas com linha horizontal conectando. Nó atual destaca em cor primária.

---

### Passo 1 — Dados da Conta {#step-1}

StepCard com número 1 em círculo cor primária.

**O que fazer:** Preencher as informações básicas do negócio: nome, endereço, fuso horário e logo.

**Onde:** Configurações > Dados da Conta > Informações Gerais

[IMAGEM: tela de configurações gerais com campos preenchidos]

**Por que importa:** O nome e logo aparecem em todos os e-mails e páginas enviados pela plataforma.

---

### Passo 2 — Configurar E-mail (SMTP) {#step-2}

StepCard com número 2.

**O que fazer:** Conectar seu e-mail de envio para que as mensagens saiam com o nome da sua empresa.

**Onde:** Configurações > E-mail > SMTP

[IMAGEM: tela de configuração SMTP com campos de host, porta e credenciais]

Callout warning: "Se não configurar o SMTP, os e-mails sairão com um endereço genérico da plataforma e podem cair no spam."

**Serviços compatíveis:** Gmail (via App Password), Outlook, SMTP próprio, SendGrid, Mailgun.

---

### Passo 3 — Número de Telefone {#step-3}

StepCard com número 3.

**O que fazer:** Comprar ou conectar um número de telefone para enviar e receber SMS e WhatsApp.

**Onde:** Configurações > Telefone

[IMAGEM: tela de compra de número com lista de números disponíveis]

Callout info: "Se você já usa WhatsApp com um número próprio, pode conectar a API não oficial escaneando um QR code. Para API oficial, o processo de aprovação leva alguns dias."

---

### Passo 4 — Criar um Calendário {#step-4}

StepCard com número 4.

**O que fazer:** Criar o calendário principal de agendamentos com sua disponibilidade.

**Onde:** Calendários > Criar Novo

[IMAGEM: tela de criação de calendário com configuração de horários]

**Configurações mínimas:** nome do calendário, fuso horário, dias e horários disponíveis, duração da reunião.

---

### Passo 5 — Criar um Pipeline {#step-5}

StepCard com número 5.

**O que fazer:** Criar o funil de vendas para acompanhar seus leads visualmente.

**Onde:** Oportunidades > Pipelines > Criar Pipeline

[IMAGEM: tela de criação de pipeline com estágios configurados]

**Estágios sugeridos para começar:** Novo Lead → Contato Realizado → Reunião Agendada → Proposta Enviada → Fechado Ganho / Fechado Perdido

---

### Passo 6 — Conectar Integrações {#step-6}

StepCard com número 6.

**O que fazer:** Conectar as ferramentas que você já usa para centralizar tudo na plataforma.

**Onde:** Configurações > Integrações

Grid de cards de integração com logo e status (Conectado / Pendente):
- Google Calendar — sincroniza disponibilidade
- Google Meu Negócio — reviews e localização
- Meta (Facebook/Instagram) — anúncios e DMs
- Stripe — pagamentos e cobranças

---

### Passo 7 — Testar o Sistema {#step-7}

StepCard com número 7.

**O que fazer:** Criar um contato de teste e passar pelo fluxo completo.

Checklist interativo (checkboxes clicáveis):
- [ ] Criar contato manualmente com seus próprios dados
- [ ] Enviar uma mensagem de teste por SMS
- [ ] Enviar um e-mail de teste
- [ ] Agendar uma reunião no seu calendário
- [ ] Criar uma oportunidade na pipeline

Callout success: "Se todos os itens acima funcionaram, sua conta está pronta. Bom trabalho! 🎉"

---

## Checklist antes de finalizar esta página

- [ ] Breadcrumb correto: Primeiros Passos > Configuração Inicial
- [ ] Ícone correto: `settings`
- [ ] TOC gerado automaticamente a partir dos H2
- [ ] Todos os [IMAGEM: ...] marcados como placeholder
- [ ] Navegação Prev/Next no rodapé: ← 1.1 — Introdução | 1.3 — Navegando na Plataforma →
- [ ] Responsividade testada em mobile
- [ ] Callouts usando as classes corretas (info, warning, success, danger)