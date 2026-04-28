# PROMPT — 14.2 Suporte Dedicado

> **Navegação:** Seu Plano > Suporte  
> **Ícone da página:** `headphones`
> **Anterior:** 14.1 — Funcionalidades | **Próxima:** 14.3 — Onboarding

---

## Resumo

Canais de atendimento, horários e como abrir um chamado.

---

## Instruções Gerais desta Página

Construir a página seguindo o template padrão definido no Master Prompt:
1. Breadcrumb de navegação
2. Ícone `headphones` + H1 como título
3. Parágrafo de resumo
4. Seções H2 com âncoras para o TOC
5. Rodapé com navegação ← Anterior | Próxima →

Todas as imagens devem ser placeholders no formato `[IMAGEM: descrição detalhada do que deve ser capturado]`.

---

## Seções da Página

### 📞 Canais de Suporte {#support-channels}

H2 "Canais de Suporte".

Parágrafo: "Se você não encontrou a resposta aqui na documentação, nossa equipe está disponível pelos canais abaixo."

Grid de SupportCards gerado a partir de APP_CONFIG:

**Documentação** (sempre disponível)
"Você já está aqui! Use a busca no topo para encontrar respostas rápidas."

**WhatsApp** (se configurado)
Exibe APP_CONFIG.supportWhatsApp com botão "Abrir WhatsApp"

**E-mail** (sempre)
Exibe APP_CONFIG.supportEmail com botão "Enviar E-mail"

Horários de atendimento: configurados pela agência em APP_CONFIG.

---

## Checklist antes de finalizar esta página

- [ ] Breadcrumb correto: Seu Plano > Suporte
- [ ] Ícone correto: `headphones`
- [ ] TOC gerado automaticamente a partir dos H2
- [ ] Todos os [IMAGEM: ...] marcados como placeholder
- [ ] Navegação Prev/Next no rodapé: ← 14.1 — Funcionalidades | 14.3 — Onboarding →
- [ ] Responsividade testada em mobile
- [ ] Callouts usando as classes corretas (info, warning, success, danger)