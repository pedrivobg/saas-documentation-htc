# PROMPT — 6.1 O que são Automações

> **Navegação:** Automações > O que são Automações  
> **Ícone da página:** `zap`  
> **Badge:** `Funcionalidade essencial`
> **Anterior:** 5.4 — Valor e Relatórios | **Próxima:** 6.2 — Construtor Visual

---

## Resumo

O conceito de automação e como ele muda a forma de trabalhar.

---

## Instruções Gerais desta Página

Construir a página seguindo o template padrão definido no Master Prompt:
1. Breadcrumb de navegação
2. Ícone `zap` + H1 como título + Badge `Funcionalidade essencial`
3. Parágrafo de resumo
4. Seções H2 com âncoras para o TOC
5. Rodapé com navegação ← Anterior | Próxima →

Todas as imagens devem ser placeholders no formato `[IMAGEM: descrição detalhada do que deve ser capturado]`.

---

## Seções da Página

### ⚡ O Conceito de Automação {#concept}

H2 "O Conceito de Automação".

Parágrafo: "Uma automação é uma sequência de ações que acontece automaticamente quando um evento específico ocorre. Você configura uma vez e ela trabalha 24 horas por dia, todos os dias."

Callout info: "Pense em uma automação como uma receita de bolo: quando o ingrediente X entra (TRIGGER), o sistema executa Y e Z (AÇÕES). Você não precisa estar presente."

Exemplo real em card destacado:
- **Trigger:** Lead manda mensagem no WhatsApp
- **Espera:** 2 minutos
- **Ação 1:** Sistema responde com mensagem de boas-vindas
- **Ação 2:** Cria oportunidade no pipeline
- **Ação 3:** Notifica o consultor responsável

---

### 🧩 Componentes de uma Automação {#components}

H2 "Componentes de uma Automação".

3 FeatureCards horizontais em linha:

**TRIGGER (Gatilho)**
Ícone: play-circle | Badge: "Início"
"O evento que inicia tudo. Pode ser uma mensagem recebida, formulário preenchido, reunião agendada, pagamento confirmado, data chegando, e muito mais."

**CONDIÇÃO (Opcional)**
Ícone: git-branch | Badge: "Se / Então"
"Uma bifurcação: SE o lead tem a tag X, faça A. SE não tem, faça B. Permite personalizar o caminho com base em dados do contato."

**AÇÃO**
Ícone: arrow-right-circle | Badge: "Resultado"
"O que o sistema executa: enviar mensagem, criar tag, mover no pipeline, atribuir responsável, esperar X horas, criar tarefa."

---

### 💡 Exemplos de Automações Comuns {#examples}

H2 "Exemplos de Automações Comuns".

Tabs com 4 exemplos, cada um com diagrama SVG simples:

**Tab 1 — Primeiro Contato**
Lead manda mensagem → Aguarda 2min → Responde automaticamente → Cria oportunidade → Notifica consultor

**Tab 2 — Lembrete de Reunião**
Reunião agendada → Aguarda até 24h antes → Envia SMS lembrete → Aguarda até 1h antes → Envia outro SMS

**Tab 3 — Follow-up de Proposta**
Proposta enviada → Aguarda 1 dia → Verifica se fechou → Não fechou: envia follow-up → Aguarda mais 2 dias → Verifica novamente

**Tab 4 — Pós No-Show**
Lead não aparece → Aplica tag no-show → Envia mensagem empática → Aguarda 2h resposta → Respondeu: link de reagendamento | Não respondeu: notifica consultor

---

### 🤖 O que Você Pode Automatizar {#what-you-can-automate}

H2 "O que Você Pode Automatizar".

Tabela 2 colunas:
| Situação | O que automatizar |
| Novo lead entra | Resposta imediata + criação de oportunidade |
| Lead não responde | Sequência de 3 follow-ups em 7 dias |
| Reunião agendada | Confirmação + lembretes 24h e 1h antes |
| Reunião não aconteceu | Mensagem empática + link de reagendamento |
| Proposta enviada | Acompanhamento automático por 7 dias |
| Cliente fecha negócio | Boas-vindas + início do onboarding |
| Data de renovação se aproxima | Aviso automático 7 dias antes |
| Aniversário do cliente | Mensagem personalizada de parabéns |
| Review negativo no Google | Alerta urgente para o time |

---

## Checklist antes de finalizar esta página

- [ ] Breadcrumb correto: Automações > O que são Automações
- [ ] Ícone correto: `zap`
- [ ] TOC gerado automaticamente a partir dos H2
- [ ] Todos os [IMAGEM: ...] marcados como placeholder
- [ ] Navegação Prev/Next no rodapé: ← 5.4 — Valor e Relatórios | 6.2 — Construtor Visual →
- [ ] Responsividade testada em mobile
- [ ] Callouts usando as classes corretas (info, warning, success, danger)