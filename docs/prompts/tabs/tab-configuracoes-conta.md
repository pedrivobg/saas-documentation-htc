# PROMPT — 13.1 Configurações da Conta

> **Navegação:** Configurações > Dados da Conta  
> **Ícone da página:** `settings`
> **Anterior:** 12.4 — Relatórios de E-mail | **Próxima:** 13.2 — Usuários e Permissões

---

## Resumo

Configurações gerais da conta: nome, endereço, fuso horário e logo.

---

## Instruções Gerais desta Página

Construir a página seguindo o template padrão definido no Master Prompt:
1. Breadcrumb de navegação
2. Ícone `settings` + H1 como título
3. Parágrafo de resumo
4. Seções H2 com âncoras para o TOC
5. Rodapé com navegação ← Anterior | Próxima →

Todas as imagens devem ser placeholders no formato `[IMAGEM: descrição detalhada do que deve ser capturado]`.

---

## Seções da Página

### ⚙️ Configurações Gerais {#general-settings}

H2 "Configurações Gerais".

Parágrafo: "As configurações gerais definem a identidade da sua conta na plataforma. Essas informações aparecem em e-mails enviados, páginas de agendamento e documentos."

[IMAGEM: tela de configurações gerais com campos]

Campos principais:
- **Nome da Empresa** — aparece em e-mails e páginas públicas
- **Endereço** — usado em rodapés de e-mail (requisito anti-spam)
- **Fuso Horário** — afeta agendamentos e automações de data/hora
- **Logo** — exibido em e-mails e páginas de agendamento
- **Website** — URL do site principal

---

### 🕐 Por que o Fuso Horário é Importante {#timezone-importance}

H2 "Por que o Fuso Horário é Importante".

Callout warning: "Configurar o fuso horário errado faz com que automações de data/hora (aniversários, renovações, lembretes) disparem no horário errado. Configure corretamente desde o início."

Instrução: Configurações > Dados da Conta > Fuso Horário > Selecionar "America/Sao_Paulo" (BRT) ou o fuso correto da sua localização.

---

## Checklist antes de finalizar esta página

- [ ] Breadcrumb correto: Configurações > Dados da Conta
- [ ] Ícone correto: `settings`
- [ ] TOC gerado automaticamente a partir dos H2
- [ ] Todos os [IMAGEM: ...] marcados como placeholder
- [ ] Navegação Prev/Next no rodapé: ← 12.4 — Relatórios de E-mail | 13.2 — Usuários e Permissões →
- [ ] Responsividade testada em mobile
- [ ] Callouts usando as classes corretas (info, warning, success, danger)