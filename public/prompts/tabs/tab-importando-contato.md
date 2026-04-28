# PROMPT — 2.5 Importação de Contatos

> **Navegação:** CRM e Contatos > Importação de Contatos  
> **Ícone da página:** `upload`
> **Anterior:** 2.4 — Campos Personalizados | **Próxima:** 3.1 — Inbox Unificado

---

## Resumo

Importar sua base de contatos existente por CSV, passo a passo.

---

## Instruções Gerais desta Página

Construir a página seguindo o template padrão definido no Master Prompt:
1. Breadcrumb de navegação
2. Ícone `upload` + H1 como título
3. Parágrafo de resumo
4. Seções H2 com âncoras para o TOC
5. Rodapé com navegação ← Anterior | Próxima →

Todas as imagens devem ser placeholders no formato `[IMAGEM: descrição detalhada do que deve ser capturado]`.

---

## Seções da Página

### ✅ Antes de Importar {#before-importing}

H2 "Antes de Importar".

Checklist:
- [ ] Certifique-se de que seu CSV tem as colunas: nome, telefone, e-mail
- [ ] Formate telefones com DDI: +55 11 99999-9999
- [ ] Remova duplicatas da planilha antes de importar
- [ ] Limite recomendado por lote: até 5.000 contatos

Callout warning: "Importar uma lista sem permissão de contato pode violar leis de privacidade (LGPD). Importe apenas contatos que consentiram em receber comunicações."

---

### 📥 Passo a Passo da Importação {#import-steps}

H2 "Passo a Passo da Importação".

StepCards numerados:

1. **Baixar o modelo** — Contatos > Importar > Baixar CSV modelo
2. **Preencher a planilha** — seguir as colunas do modelo exatamente
3. **Fazer o upload** — arrastar o arquivo ou clicar para selecionar
4. **Mapear as colunas** — indicar qual coluna da sua planilha corresponde a qual campo do CRM
5. **Configurar opções** — definir tags a aplicar, pipeline de destino, tratamento de duplicatas
6. **Revisar e confirmar** — prévia dos primeiros contatos antes de confirmar

[IMAGEM: tela de mapeamento de colunas em importação CSV]

---

### 🔄 Tratamento de Duplicatas {#duplicates}

H2 "Tratamento de Duplicatas".

Callout info: "O sistema detecta duplicatas pelo e-mail ou telefone. Você escolhe o que acontece com duplicatas encontradas:"

3 opções em cards:
- **Pular** — mantém o contato existente sem alterações
- **Atualizar** — atualiza os campos do contato existente com os dados do CSV
- **Criar novo** — cria um segundo contato mesmo com dados iguais (não recomendado)

---

## Checklist antes de finalizar esta página

- [ ] Breadcrumb correto: CRM e Contatos > Importação de Contatos
- [ ] Ícone correto: `upload`
- [ ] TOC gerado automaticamente a partir dos H2
- [ ] Todos os [IMAGEM: ...] marcados como placeholder
- [ ] Navegação Prev/Next no rodapé: ← 2.4 — Campos Personalizados | 3.1 — Inbox Unificado →
- [ ] Responsividade testada em mobile
- [ ] Callouts usando as classes corretas (info, warning, success, danger)