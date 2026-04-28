# PROMPT — 4.1 Visão Geral de Calendários

> **Navegação:** Calendários > Visão Geral  
> **Ícone da página:** `calendar`
> **Anterior:** 3.6 — Chat Widget | **Próxima:** 4.2 — Configurando Disponibilidade

---

## Resumo

Tipos de calendário e como o agendamento automático funciona.

---

## Instruções Gerais desta Página

Construir a página seguindo o template padrão definido no Master Prompt:
1. Breadcrumb de navegação
2. Ícone `calendar` + H1 como título
3. Parágrafo de resumo
4. Seções H2 com âncoras para o TOC
5. Rodapé com navegação ← Anterior | Próxima →

Todas as imagens devem ser placeholders no formato `[IMAGEM: descrição detalhada do que deve ser capturado]`.

---

## Seções da Página

### 📅 Calendários no [App da Agência] {#intro}

H2 "Calendários no [App da Agência]".

Parágrafo: "Esqueça os links de Calendly colados no WhatsApp. Na plataforma, os clientes agendam diretamente por uma página personalizada com a sua marca — e o sistema cuida do restante: confirmação automática, lembretes por SMS e e-mail, e registro no CRM."

Callout info: "Cada agendamento cria automaticamente um contato no CRM (se ainda não existir), adiciona a tag de reunião agendada e pode disparar uma automação completa."

---

### 🗂 Tipos de Calendário {#calendar-types}

H2 "Tipos de Calendário".

Grid 2×2 de FeatureCards:

**Individual**
Ícone: user
"Um consultor, uma agenda. O lead escolhe o horário disponível com a pessoa responsável. Ideal para vendas, consultorias ou atendimento direto."

**Round Robin (Revezamento)**
Ícone: refresh-cw
"Distribui os agendamentos automaticamente entre vários consultores, equilibrando a carga. Ideal para equipes com múltiplos SDRs ou consultores."

**Classe ou Grupo**
Ícone: users
"Múltiplos participantes no mesmo horário. Ideal para webinars, workshops, treinamentos em grupo ou aulas."

**Serviço**
Ícone: briefcase
"O cliente escolhe o tipo de serviço e o sistema exibe os horários disponíveis para aquele serviço. Ideal para clínicas, salões e prestadores de serviço."

---

### 🔄 Como Funciona o Agendamento {#booking-flow}

H2 "Como Funciona o Agendamento".

Diagrama SVG de fluxo horizontal:
Cliente acessa o link → Escolhe data e horário → Preenche nome e contato → Recebe confirmação SMS + e-mail → Sistema cria oportunidade → Lembrete 24h antes → Lembrete 1h antes

Cada etapa com ícone correspondente e cor.

---

### 🔗 Integrações de Calendário {#integrations}

H2 "Integrações de Calendário".

3 IntegrationCards com logo placeholder:

**Google Calendar**
"Sincronização bidirecional. Agendamentos feitos na plataforma aparecem no Google Calendar e vice-versa. Bloqueios no Google Calendar bloqueiam automaticamente a disponibilidade."

**Outlook / Microsoft Teams**
"Sync de disponibilidade com Outlook. Para empresas que usam Microsoft 365."

**Zoom / Google Meet**
"Link de videoconferência gerado automaticamente e enviado na confirmação. O cliente não precisa fazer nada."

---

## Checklist antes de finalizar esta página

- [ ] Breadcrumb correto: Calendários > Visão Geral
- [ ] Ícone correto: `calendar`
- [ ] TOC gerado automaticamente a partir dos H2
- [ ] Todos os [IMAGEM: ...] marcados como placeholder
- [ ] Navegação Prev/Next no rodapé: ← 3.6 — Chat Widget | 4.2 — Configurando Disponibilidade →
- [ ] Responsividade testada em mobile
- [ ] Callouts usando as classes corretas (info, warning, success, danger)