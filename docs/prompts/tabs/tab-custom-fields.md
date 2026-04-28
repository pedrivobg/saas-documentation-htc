# PROMPT — 2.4 Campos Personalizados

> **Navegação:** CRM e Contatos > Campos Personalizados  
> **Ícone da página:** `sliders`
> **Anterior:** 2.3 — Tags e Segmentação | **Próxima:** 2.5 — Importação de Contatos

---

## Resumo

Como criar campos extras para armazenar informações específicas do seu negócio.

---

## Instruções Gerais desta Página

Construir a página seguindo o template padrão definido no Master Prompt:
1. Breadcrumb de navegação
2. Ícone `sliders` + H1 como título
3. Parágrafo de resumo
4. Seções H2 com âncoras para o TOC
5. Rodapé com navegação ← Anterior | Próxima →

Todas as imagens devem ser placeholders no formato `[IMAGEM: descrição detalhada do que deve ser capturado]`.

---

## Seções da Página

### 📋 O que são Campos Personalizados {#what-are-custom-fields}

H2 "O que são Campos Personalizados".

Parágrafo: "Os campos nativos do CRM (nome, e-mail, telefone) cobrem o básico. Campos personalizados permitem adicionar qualquer informação extra que o seu negócio precisa registrar."

Exemplos de campos personalizados úteis:
- **Temperatura do Lead** (Dropdown: Quente / Morno / Frio)
- **Orçamento Mensal** (Dropdown com faixas de valor)
- **É Tomador de Decisão** (Sim / Não)
- **Ferramenta Atual** (Dropdown: RD Station / HubSpot / Sem CRM)
- **Data de Início do Contrato** (Data)
- **Valor Mensal Contratado** (Número)

---

### 🔤 Tipos de Campo Disponíveis {#types}

H2 "Tipos de Campo Disponíveis".

Grid de cards, um por tipo:
- **Texto** — resposta livre em uma linha
- **Área de Texto** — resposta longa, múltiplas linhas
- **Número** — apenas números, para valores e quantidades
- **Dropdown** — lista de opções predefinidas (apenas uma escolha)
- **Múltipla Escolha** — lista de opções (várias escolhas)
- **Data** — calendário de seleção
- **Sim/Não** — toggle binário
- **URL** — link web

---

### ➕ Criando um Campo {#create-field}

H2 "Criando um Campo".

Passos numerados:
1. Acesse Configurações > Campos Personalizados
2. Clique em "+ Novo Campo"
3. Defina o nome (ex: "Temperatura do Lead")
4. Escolha o tipo (ex: Dropdown)
5. Se Dropdown: adicione as opções (ex: Quente, Morno, Frio)
6. Salve

[IMAGEM: tela de criação de campo personalizado com tipo Dropdown]

Callout info: "Organize campos em grupos (ex: Qualificação, Comercial, Cliente) para facilitar a visualização na ficha do contato."

---

## Checklist antes de finalizar esta página

- [ ] Breadcrumb correto: CRM e Contatos > Campos Personalizados
- [ ] Ícone correto: `sliders`
- [ ] TOC gerado automaticamente a partir dos H2
- [ ] Todos os [IMAGEM: ...] marcados como placeholder
- [ ] Navegação Prev/Next no rodapé: ← 2.3 — Tags e Segmentação | 2.5 — Importação de Contatos →
- [ ] Responsividade testada em mobile
- [ ] Callouts usando as classes corretas (info, warning, success, danger)