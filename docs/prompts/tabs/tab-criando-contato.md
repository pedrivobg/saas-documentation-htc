# PROMPT — 2.2 Criando e Editando Contatos

> **Navegação:** CRM e Contatos > Criando Contatos  
> **Ícone da página:** `user-plus`
> **Anterior:** 2.1 — Visão Geral do CRM | **Próxima:** 2.3 — Tags e Segmentação

---

## Resumo

Como criar contatos manualmente, importar por CSV e capturar por formulário.

---

## Instruções Gerais desta Página

Construir a página seguindo o template padrão definido no Master Prompt:
1. Breadcrumb de navegação
2. Ícone `user-plus` + H1 como título
3. Parágrafo de resumo
4. Seções H2 com âncoras para o TOC
5. Rodapé com navegação ← Anterior | Próxima →

Todas as imagens devem ser placeholders no formato `[IMAGEM: descrição detalhada do que deve ser capturado]`.

---

## Seções da Página

### ✏️ Criar Manualmente {#create-manual}

H2 "Criar Manualmente".

Passos numerados:
1. Acesse Contatos no menu lateral
2. Clique em "Novo Contato" no canto superior direito
3. Preencha nome, telefone e e-mail (os demais campos são opcionais)
4. Clique em Salvar

[IMAGEM: modal de criação de contato com campos destacados]

Callout info: "O telefone é o campo mais importante para automações de WhatsApp e SMS. Certifique-se de incluir o DDD e o código do país (+55 para Brasil)."

---

### 📥 Importar por CSV {#import-csv}

H2 "Importar por CSV".

Passos numerados:
1. Acesse Contatos > Importar
2. Faça o download do modelo de CSV (template)
3. Preencha sua planilha seguindo o modelo
4. Faça o upload do arquivo
5. Mapeie as colunas da sua planilha para os campos do CRM
6. Revise a prévia e confirme a importação

[IMAGEM: tela de mapeamento de colunas CSV]

Callout warning: "A plataforma verifica duplicatas automaticamente pelo e-mail ou telefone. Se um contato já existir, ele será atualizado, não duplicado."

Tabela de colunas obrigatórias vs. opcionais no CSV.

---

### 📋 Capturar por Formulário {#capture-form}

H2 "Capturar por Formulário".

Parágrafo: "A forma mais eficiente. Quando um lead preenche um formulário no seu site ou landing page, o CRM cria o contato automaticamente e dispara as automações configuradas."

Diagrama SVG: Lead preenche formulário → Contato criado no CRM → Tag adicionada → Workflow disparado → Mensagem enviada em 2 minutos.

[IMAGEM: exemplo de formulário conectado ao CRM]

---

### ✏️ Editando um Contato {#edit-contact}

H2 "Editando um Contato".

Passos simples:
1. Abra o contato clicando no nome
2. Clique no lápis/editar ao lado do campo
3. Altere e salve

Callout info: "Todas as alterações ficam registradas no histórico do contato com data, hora e usuário que fez a mudança."

---

## Checklist antes de finalizar esta página

- [ ] Breadcrumb correto: CRM e Contatos > Criando Contatos
- [ ] Ícone correto: `user-plus`
- [ ] TOC gerado automaticamente a partir dos H2
- [ ] Todos os [IMAGEM: ...] marcados como placeholder
- [ ] Navegação Prev/Next no rodapé: ← 2.1 — Visão Geral do CRM | 2.3 — Tags e Segmentação →
- [ ] Responsividade testada em mobile
- [ ] Callouts usando as classes corretas (info, warning, success, danger)