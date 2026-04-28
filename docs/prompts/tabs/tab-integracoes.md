# PROMPT — 13.3 Integrações

> **Navegação:** Configurações > Integrações  
> **Ícone da página:** `link`
> **Anterior:** 13.2 — Usuários e Permissões | **Próxima:** 13.4 — E-mail e SMTP

---

## Resumo

Como conectar Google, Meta, Stripe, Zapier e mais.

---

## Instruções Gerais desta Página

Construir a página seguindo o template padrão definido no Master Prompt:
1. Breadcrumb de navegação
2. Ícone `link` + H1 como título
3. Parágrafo de resumo
4. Seções H2 com âncoras para o TOC
5. Rodapé com navegação ← Anterior | Próxima →

Todas as imagens devem ser placeholders no formato `[IMAGEM: descrição detalhada do que deve ser capturado]`.

---

## Seções da Página

### 🔗 Integrações Disponíveis {#integrations-grid}

H2 "Integrações Disponíveis".

Grid de IntegrationCards organizados por categoria:

**Comunicação:**
- Twilio (SMS e voz)
- WhatsApp Business API
- Google Meu Negócio

**Marketing e Anúncios:**
- Meta (Facebook + Instagram Ads)
- Google Ads
- TikTok Ads

**Calendário e Produtividade:**
- Google Calendar
- Outlook / Microsoft Teams
- Zoom
- Google Meet

**Pagamentos:**
- Stripe

**Automação e APIs:**
- Zapier
- Make (Integromat)
- Webhook genérico
- API REST

Cada card com: logo placeholder, nome, status (Conectado / Pendente / Não conectado) e botão de ação.

---

### ⭐ Integrações Prioritárias {#key-integrations}

H2 "Integrações Prioritárias".

Callout warning: "Configure essas 5 integrações primeiro. Elas são necessárias para o funcionamento das automações principais."

Cards de prioridade:
1. **Twilio** — sem isso, SMS e WhatsApp não funcionam
2. **SMTP** — sem isso, e-mails saem com endereço genérico e vão para spam
3. **Stripe** — necessário para pagamentos e planos SaaS
4. **Google Calendar** — para sincronizar disponibilidade
5. **Google Meu Negócio** — para reviews automáticos

---

## Checklist antes de finalizar esta página

- [ ] Breadcrumb correto: Configurações > Integrações
- [ ] Ícone correto: `link`
- [ ] TOC gerado automaticamente a partir dos H2
- [ ] Todos os [IMAGEM: ...] marcados como placeholder
- [ ] Navegação Prev/Next no rodapé: ← 13.2 — Usuários e Permissões | 13.4 — E-mail e SMTP →
- [ ] Responsividade testada em mobile
- [ ] Callouts usando as classes corretas (info, warning, success, danger)