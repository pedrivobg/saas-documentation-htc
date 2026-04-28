# PROMPT — 6.3 Triggers Disponíveis

> **Navegação:** Automações > Triggers  
> **Ícone da página:** `play-circle`
> **Anterior:** 6.2 — Construtor Visual | **Próxima:** 6.4 — Ações Disponíveis

---

## Resumo

Todos os eventos que podem iniciar uma automação.

---

## Instruções Gerais desta Página

Construir a página seguindo o template padrão definido no Master Prompt:
1. Breadcrumb de navegação
2. Ícone `play-circle` + H1 como título
3. Parágrafo de resumo
4. Seções H2 com âncoras para o TOC
5. Rodapé com navegação ← Anterior | Próxima →

Todas as imagens devem ser placeholders no formato `[IMAGEM: descrição detalhada do que deve ser capturado]`.

---

## Seções da Página

### 🔔 Todos os Triggers {#triggers-list}

H2 "Todos os Triggers".

Tabela 3 colunas — Trigger / Quando dispara / Caso de uso comum:

| Customer Reply | Lead responde em qualquer canal | Primeiro contato automático |
| Form Submitted | Formulário preenchido | Captura de lead |
| Appointment Booked | Reunião agendada | Confirmação + lembretes |
| Appointment Status Changed | Status de reunião muda (realizada, no-show) | Follow-up pós-reunião |
| Pipeline Stage Changed | Oportunidade muda de estágio | Notificação interna, follow-up |
| Tag Added | Tag específica adicionada ao contato | Segmentação e desvios de fluxo |
| Contact Created | Novo contato criado | Boas-vindas para novos leads |
| Opportunity Created | Nova oportunidade criada | Atribuição de responsável |
| Payment Received | Pagamento confirmado via Stripe | Ativação de onboarding |
| Date/Time Based | Data específica ou relativa a um campo | Aniversários, renovações |
| Stale Opportunity | Oportunidade sem movimento por X dias | Alerta de oportunidade parada |
| Missed Call | Ligação perdida no número | Missed Call Text Back |
| New Review | Review recebido no Google | Alertas e agradecimentos |
| Document Sent | Contrato/documento enviado | Acompanhamento de assinatura |
| Document Signed | Contrato assinado | Ativação de onboarding |
| Facebook Lead Form | Formulário de anúncio Meta | Entrada de leads de anúncios |
| Birthday | Data de aniversário do contato | Mensagem de parabéns |
| Contact DND | Contato marcou não perturbe | Blacklist automática |

---

## Checklist antes de finalizar esta página

- [ ] Breadcrumb correto: Automações > Triggers
- [ ] Ícone correto: `play-circle`
- [ ] TOC gerado automaticamente a partir dos H2
- [ ] Todos os [IMAGEM: ...] marcados como placeholder
- [ ] Navegação Prev/Next no rodapé: ← 6.2 — Construtor Visual | 6.4 — Ações Disponíveis →
- [ ] Responsividade testada em mobile
- [ ] Callouts usando as classes corretas (info, warning, success, danger)