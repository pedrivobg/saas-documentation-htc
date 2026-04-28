# PROMPT — 2.3 Tags e Segmentação

> **Navegação:** CRM e Contatos > Tags e Segmentação  
> **Ícone da página:** `tag`
> **Anterior:** 2.2 — Criando Contatos | **Próxima:** 2.4 — Campos Personalizados

---

## Resumo

Como usar tags para segmentar, filtrar e automatizar com base em grupos de contatos.

---

## Instruções Gerais desta Página

Construir a página seguindo o template padrão definido no Master Prompt:
1. Breadcrumb de navegação
2. Ícone `tag` + H1 como título
3. Parágrafo de resumo
4. Seções H2 com âncoras para o TOC
5. Rodapé com navegação ← Anterior | Próxima →

Todas as imagens devem ser placeholders no formato `[IMAGEM: descrição detalhada do que deve ser capturado]`.

---

## Seções da Página

### 🏷 O que são Tags {#what-are-tags}

H2 "O que são Tags".

Parágrafo: "Tags são etiquetas que você cola em um contato para identificar quem ele é, de onde veio e em que fase está. Pense como as etiquetas de uma pasta física — mas digitais e muito mais poderosas."

Grid de exemplos de tags coloridas: novo-lead | lead-qualificado | reuniao-agendada | cliente-ativo | no-show | upsell-potencial

Callout info: "A diferença de tag para campo personalizado: tag é uma etiqueta binária (tem ou não tem). Campo personalizado guarda um valor específico (ex: valor da proposta = R$2.000)."

---

### 🗂 Estratégia de Tags {#tagging-strategy}

H2 "Estratégia de Tags".

Tabela com exemplos agrupados por categoria:

**Origem:**
lead-organico | lead-indicacao | lead-anuncio-meta | lead-anuncio-google | lead-instagram | lead-whatsapp

**Status comercial:**
novo-lead | lead-qualificado | lead-desqualificado | lead-em-negociacao | lead-ganho | lead-perdido

**Reuniões:**
reuniao-agendada | reuniao-realizada | reuniao-cancelada | no-show

**Clientes:**
cliente-ativo | cliente-em-risco | onboarding-iniciado | onboarding-concluido | churn

**Follow-up:**
followup-pendente | lead-nao-responde | reativacao | blacklist

---

### ➕ Como Adicionar Tags {#how-to-add}

H2 "Como Adicionar Tags".

3 formas com ícone para cada:
1. **Manualmente** — abrir o contato e clicar em + Tag
2. **Em massa** — selecionar vários contatos na lista e aplicar tag
3. **Automaticamente** — via workflow (a mais usada)

[IMAGEM: tela de adição de tag com campo de busca de tags existentes]

---

### 🔍 Filtrando por Tags {#filtering}

H2 "Filtrando por Tags".

Parágrafo: "Na lista de Contatos, use o painel de filtros para exibir apenas os contatos com determinadas tags. Você pode combinar múltiplos filtros."

[IMAGEM: painel de filtros com tags selecionadas]

Exemplos de filtros úteis:
- Mostrar apenas clientes-ativos com tag cliente-ativo
- Mostrar leads para follow-up com tag followup-pendente
- Mostrar leads que não respondem com tag lead-nao-responde

---

## Checklist antes de finalizar esta página

- [ ] Breadcrumb correto: CRM e Contatos > Tags e Segmentação
- [ ] Ícone correto: `tag`
- [ ] TOC gerado automaticamente a partir dos H2
- [ ] Todos os [IMAGEM: ...] marcados como placeholder
- [ ] Navegação Prev/Next no rodapé: ← 2.2 — Criando Contatos | 2.4 — Campos Personalizados →
- [ ] Responsividade testada em mobile
- [ ] Callouts usando as classes corretas (info, warning, success, danger)