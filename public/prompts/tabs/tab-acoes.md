# PROMPT — 6.4 Ações Disponíveis

> **Navegação:** Automações > Ações Disponíveis  
> **Ícone da página:** `arrow-right-circle`
> **Anterior:** 6.3 — Triggers Disponíveis | **Próxima:** 6.5 — Condições e Ramificações

---

## Resumo

Tudo que uma automação pode fazer quando disparada.

---

## Instruções Gerais desta Página

Construir a página seguindo o template padrão definido no Master Prompt:
1. Breadcrumb de navegação
2. Ícone `arrow-right-circle` + H1 como título
3. Parágrafo de resumo
4. Seções H2 com âncoras para o TOC
5. Rodapé com navegação ← Anterior | Próxima →

Todas as imagens devem ser placeholders no formato `[IMAGEM: descrição detalhada do que deve ser capturado]`.

---

## Seções da Página

### ⚡ Todas as Ações {#actions-list}

H2 "Todas as Ações".

Organizar em grupos de cards:

**Comunicação com o Lead:**
- Send SMS/WhatsApp — envia mensagem pelo canal configurado
- Send Email — envia e-mail com template ou texto livre
- Send Internal Notification — notifica um ou mais usuários internamente
- Make Call (Voice AI) — realiza ligação automática via IA de voz

**Gestão de Contato e Oportunidade:**
- Add Tag — adiciona etiqueta ao contato
- Remove Tag — remove etiqueta do contato
- Update Contact Field — atualiza qualquer campo do contato
- Create Opportunity — cria nova oportunidade no pipeline
- Update Opportunity — muda estágio, valor ou responsável
- Find Opportunity — busca oportunidade existente para manipular

**Controle de Fluxo:**
- Wait — espera um tempo específico (minutos, horas, dias) ou aguarda evento
- If/Else — divide o fluxo em dois caminhos com base em condição
- Go To Workflow — encaminha para outro workflow
- Remove from Workflow — remove o contato de outro workflow ativo
- End Workflow — encerra o fluxo imediatamente

**IA e Externo:**
- Activate Conversation AI — ativa o bot de IA para aquela conversa
- Add to Google Ads Conversion — registra conversão no Google Ads
- Add to Meta Conversion — registra evento de conversão no Meta
- Create Task — cria tarefa atribuída a um usuário
- Send Webhook — envia dados para URL externa (Zapier, Make, API própria)

---

## Checklist antes de finalizar esta página

- [ ] Breadcrumb correto: Automações > Ações Disponíveis
- [ ] Ícone correto: `arrow-right-circle`
- [ ] TOC gerado automaticamente a partir dos H2
- [ ] Todos os [IMAGEM: ...] marcados como placeholder
- [ ] Navegação Prev/Next no rodapé: ← 6.3 — Triggers Disponíveis | 6.5 — Condições e Ramificações →
- [ ] Responsividade testada em mobile
- [ ] Callouts usando as classes corretas (info, warning, success, danger)