# PROMPT — 3.1 Inbox Unificado

> **Navegação:** Conversas > Inbox Unificado  
> **Ícone da página:** `inbox`
> **Anterior:** 2.5 — Importação de Contatos | **Próxima:** 3.2 — WhatsApp

---

## Resumo

Todas as mensagens de todos os canais em um único lugar.

---

## Instruções Gerais desta Página

Construir a página seguindo o template padrão definido no Master Prompt:
1. Breadcrumb de navegação
2. Ícone `inbox` + H1 como título
3. Parágrafo de resumo
4. Seções H2 com âncoras para o TOC
5. Rodapé com navegação ← Anterior | Próxima →

Todas as imagens devem ser placeholders no formato `[IMAGEM: descrição detalhada do que deve ser capturado]`.

---

## Seções da Página

### 💬 O que é o Inbox Unificado {#what-is}

H2 "O que é o Inbox Unificado".

Parágrafo: "O Inbox Unificado é uma caixa de entrada que reúne automaticamente todas as conversas: WhatsApp, SMS, e-mail, Instagram, Facebook Messenger e Chat do site. Você responde tudo sem sair da plataforma."

[IMAGEM: tela do inbox com conversas de diferentes canais na barra lateral]

Tabela de canais suportados:
| Canal | Tipo | Configuração necessária |
| WhatsApp | Mensagem | Número Twilio ou API WA |
| SMS | Mensagem | Número Twilio |
| E-mail | E-mail | SMTP configurado |
| Instagram | Mensagem e Comentário | Conta Meta conectada |
| Facebook Messenger | Mensagem | Página Facebook conectada |
| Chat do Site | Chat ao vivo | Widget instalado no site |

---

### 🔍 Filtros e Organização {#inbox-filters}

H2 "Filtros e Organização".

Cards de filtros disponíveis:
- **Todas** — todas as conversas
- **Minhas** — apenas conversas atribuídas a mim
- **Não lidas** — conversas com mensagens novas
- **Por canal** — filtrar por WhatsApp, Instagram, etc.
- **Por responsável** — filtrar por membro da equipe
- **Sem resposta** — conversas aguardando retorno

---

### ⚡ Ações em uma Conversa {#conversation-actions}

H2 "Ações em uma Conversa".

Lista de ações disponíveis dentro de uma conversa:
- Adicionar ou remover tags
- Atribuir a um usuário
- Criar oportunidade vinculada
- Adicionar nota interna (visível apenas para o time)
- Agendar mensagem para envio futuro
- Usar snippet (template de mensagem pronto)
- Desativar a IA para aquela conversa específica

Callout info: "Para desativar a IA em uma conversa sem desligar para os outros leads: abra a conversa e clique no toggle da IA no canto superior. Ela ficará inativa apenas para aquele contato."

---

## Checklist antes de finalizar esta página

- [ ] Breadcrumb correto: Conversas > Inbox Unificado
- [ ] Ícone correto: `inbox`
- [ ] TOC gerado automaticamente a partir dos H2
- [ ] Todos os [IMAGEM: ...] marcados como placeholder
- [ ] Navegação Prev/Next no rodapé: ← 2.5 — Importação de Contatos | 3.2 — WhatsApp →
- [ ] Responsividade testada em mobile
- [ ] Callouts usando as classes corretas (info, warning, success, danger)