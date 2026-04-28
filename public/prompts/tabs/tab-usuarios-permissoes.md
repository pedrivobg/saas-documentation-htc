# PROMPT — 13.2 Usuários e Permissões

> **Navegação:** Configurações > Usuários  
> **Ícone da página:** `users`
> **Anterior:** 13.1 — Dados da Conta | **Próxima:** 13.3 — Integrações

---

## Resumo

Convidar membros da equipe e definir o que cada um pode fazer.

---

## Instruções Gerais desta Página

Construir a página seguindo o template padrão definido no Master Prompt:
1. Breadcrumb de navegação
2. Ícone `users` + H1 como título
3. Parágrafo de resumo
4. Seções H2 com âncoras para o TOC
5. Rodapé com navegação ← Anterior | Próxima →

Todas as imagens devem ser placeholders no formato `[IMAGEM: descrição detalhada do que deve ser capturado]`.

---

## Seções da Página

### 👥 Papéis Disponíveis {#roles}

H2 "Papéis Disponíveis".

Tabela de papéis e permissões:

| Papel | O que pode fazer |
| Admin | Tudo — configurações, usuários, dados, faturamento |
| Usuário | Usar todas as funcionalidades, sem acesso a configurações globais |
| Leitura | Visualizar dados, sem criar ou editar |

Callout info: "O papel de Admin deve ser dado apenas para quem gerencia a conta. Consultor de vendas geralmente usa o papel de Usuário."

---

### ➕ Convidando um Usuário {#invite}

H2 "Convidando um Usuário".

Passos:
1. Configurações > Usuários e Times > Convidar Usuário
2. Informe o e-mail e selecione o papel
3. Clique em Enviar Convite
4. O usuário recebe um e-mail com link de acesso
5. No primeiro acesso, define sua própria senha

[IMAGEM: modal de convite de usuário]

---

## Checklist antes de finalizar esta página

- [ ] Breadcrumb correto: Configurações > Usuários
- [ ] Ícone correto: `users`
- [ ] TOC gerado automaticamente a partir dos H2
- [ ] Todos os [IMAGEM: ...] marcados como placeholder
- [ ] Navegação Prev/Next no rodapé: ← 13.1 — Dados da Conta | 13.3 — Integrações →
- [ ] Responsividade testada em mobile
- [ ] Callouts usando as classes corretas (info, warning, success, danger)