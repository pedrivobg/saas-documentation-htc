# PROMPT — 10.2 IA de Conversação

> **Navegação:** IA e Automação > IA de Conversação  
> **Ícone da página:** `message-circle`  
> **Badge:** `Inteligência Artificial`
> **Anterior:** 10.1 — Visão Geral da IA | **Próxima:** 10.3 — IA de Voz

---

## Resumo

Configure um bot que responde leads automaticamente como se fosse um humano.

---

## Instruções Gerais desta Página

Construir a página seguindo o template padrão definido no Master Prompt:
1. Breadcrumb de navegação
2. Ícone `message-circle` + H1 como título + Badge `Inteligência Artificial`
3. Parágrafo de resumo
4. Seções H2 com âncoras para o TOC
5. Rodapé com navegação ← Anterior | Próxima →

Todas as imagens devem ser placeholders no formato `[IMAGEM: descrição detalhada do que deve ser capturado]`.

---

## Seções da Página

### ⚙️ Como Funciona {#how-it-works}

H2 "Como Funciona".

Diagrama SVG de fluxo:
Lead manda mensagem → Plataforma verifica se IA está ativa → Sim: IA gera resposta contextualizada → Envia → Registra no histórico. Nó adicional saindo de "Sim": Se humano responder → IA recua e apenas observa.

Callout info: "Você pode assumir a conversa a qualquer momento. Basta responder e a IA para de responder automaticamente para aquele contato."

---

### 🎛 Modos de Operação {#modes}

H2 "Modos de Operação".

3 cards de modo com ícone e cor de status:

**Auto-Pilot (Ativa)**
Ícone: play | Badge verde "Ativo"
"A IA responde imediatamente qualquer mensagem recebida. O humano pode assumir a qualquer momento simplesmente respondendo."

**Sugestão**
Ícone: eye | Badge amarelo "Revisão"
"A IA sugere a resposta no painel, mas um humano precisa aprovar antes de enviar. Ideal para equipes que querem treinar a IA progressivamente."

**Desativada por Contato**
Ícone: pause | Badge cinza "Inativo"
"A IA é desativada apenas para aquele contato específico. Os outros leads continuam sendo atendidos normalmente."

---

### ✅ O que a IA Consegue Fazer {#capabilities}

H2 "O que a IA Consegue Fazer".

Checklist em 2 colunas com ícone check:
✓ Responder perguntas frequentes
✓ Qualificar leads com perguntas
✓ Enviar link de calendário para agendamento
✓ Identificar interesse do lead
✓ Encerrar conversa educadamente
✓ Notificar humano quando necessário
✓ Responder em múltiplos idiomas
✓ Manter contexto de toda a conversa

---

### 🔧 Configurando a IA {#setup}

H2 "Configurando a IA".

Passos numerados:
1. Configurações > IA de Conversação > Criar Novo Agente
2. Defina o nome do agente (ex: "Sofia — Assistente Comercial")
3. Escreva as instruções de personalidade e o que o agente deve/não deve fazer
4. Selecione os canais onde ele vai atuar (WhatsApp, SMS, Instagram...)
5. Ative o agente

[IMAGEM: tela de configuração de agente com campos preenchidos]

Callout success: "DICA: Quanto mais detalhadas as instruções, melhor o resultado. Inclua: tom de voz, o que oferecer, o que não revelar, como encaminhar para agendamento."

---

## Checklist antes de finalizar esta página

- [ ] Breadcrumb correto: IA e Automação > IA de Conversação
- [ ] Ícone correto: `message-circle`
- [ ] TOC gerado automaticamente a partir dos H2
- [ ] Todos os [IMAGEM: ...] marcados como placeholder
- [ ] Navegação Prev/Next no rodapé: ← 10.1 — Visão Geral da IA | 10.3 — IA de Voz →
- [ ] Responsividade testada em mobile
- [ ] Callouts usando as classes corretas (info, warning, success, danger)