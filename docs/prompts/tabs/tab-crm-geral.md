# PROMPT — 2.1 Visão Geral do CRM

> **Navegação:** CRM e Contatos > Visão Geral  
> **Ícone da página:** `database`  
> **Badge:** `Base de tudo`
> **Anterior:** 1.3 — Navegando na Plataforma | **Próxima:** 2.2 — Criando Contatos

---

## Resumo

O que o CRM registra automaticamente e como ele centraliza seu banco de dados.

---

## Instruções Gerais desta Página

Construir a página seguindo o template padrão definido no Master Prompt:
1. Breadcrumb de navegação
2. Ícone `database` + H1 como título + Badge `Base de tudo`
3. Parágrafo de resumo
4. Seções H2 com âncoras para o TOC
5. Rodapé com navegação ← Anterior | Próxima →

Todas as imagens devem ser placeholders no formato `[IMAGEM: descrição detalhada do que deve ser capturado]`.

---

## Seções da Página

### 🗃 O que é o CRM {#what-is-crm}

H2 "O que é o CRM".

Parágrafo: "CRM significa Gestão de Relacionamento com o Cliente. É o banco de dados central de todos os seus leads e clientes. Pense nele como uma agenda inteligente que não esquece nada: registra automaticamente cada mensagem, cada reunião, cada e-mail e cada pagamento."

Callout info: "Você não precisa preencher nada manualmente. Quando alguém preenche um formulário, manda um WhatsApp ou agenda uma reunião, o CRM cria o contato e registra tudo automaticamente."

---

### 📝 O que o CRM Registra Automaticamente {#what-crm-registers}

H2 "O que o CRM Registra Automaticamente".

Lista em 2 colunas com ícone e texto:
✓ Mensagens enviadas e recebidas (todos os canais)
✓ Formulários preenchidos pelo lead
✓ Reuniões agendadas, realizadas ou canceladas
✓ E-mails abertos e links clicados
✓ Chamadas realizadas e gravações
✓ Oportunidades criadas e estágio atual
✓ Tags adicionadas ou removidas
✓ Pagamentos confirmados ou com falha
✓ Reviews recebidos no Google

---

### 👤 A Ficha do Contato {#contact-record}

H2 "A Ficha do Contato".

[IMAGEM: wireframe da ficha de contato com áreas legendadas]

Áreas da ficha:
- **Dados básicos** (nome, telefone, e-mail, empresa, endereço)
- **Tags** (etiquetas de status e segmentação)
- **Oportunidades** (negócios associados a esse contato)
- **Histórico de conversas** (timeline de todos os contatos)
- **Notas** (anotações internas da equipe)
- **Tarefas** (ações pendentes relacionadas ao contato)
- **Campos personalizados** (dados extras que você criou)

---

### 🔄 Contato × Oportunidade {#contact-vs-opportunity}

H2 "Contato × Oportunidade".

Callout info: "CONTATO = a pessoa ou empresa (pode ter 0, 1 ou várias oportunidades). OPORTUNIDADE = um negócio específico sendo trabalhado com esse contato.

Exemplo: Maria Silva é um contato. A proposta de R$2.000/mês para automação de WhatsApp que você está negociando com ela é uma oportunidade."

Diagrama simples SVG: caixa "Contato: Maria Silva" com 2 setas apontando para "Oportunidade 1: WhatsApp R$2k" e "Oportunidade 2: CRM R$1k".

---

### 📋 Campos Nativos Disponíveis {#native-fields}

H2 "Campos Nativos Disponíveis".

Tabela 3 colunas — Campo / Tipo / Exemplo:
| Nome | Texto | João Silva |
| Sobrenome | Texto | Ferreira |
| E-mail | E-mail | joao@empresa.com |
| Telefone | Telefone | +55 11 99999-9999 |
| Empresa | Texto | Empresa XYZ |
| Endereço | Texto | Rua das Flores, 100 |
| Website | URL | empresa.com.br |
| Data de Nascimento | Data | 15/03/1990 |
| Origem do Lead | Seleção | Formulário / Instagram / Meta Ads |
| Usuário Responsável | Usuário | João (Consultor) |

Callout info: "Para registrar informações além dessas, use Campos Personalizados (veja a seção 2.4)."

---

## Checklist antes de finalizar esta página

- [ ] Breadcrumb correto: CRM e Contatos > Visão Geral
- [ ] Ícone correto: `database`
- [ ] TOC gerado automaticamente a partir dos H2
- [ ] Todos os [IMAGEM: ...] marcados como placeholder
- [ ] Navegação Prev/Next no rodapé: ← 1.3 — Navegando na Plataforma | 2.2 — Criando Contatos →
- [ ] Responsividade testada em mobile
- [ ] Callouts usando as classes corretas (info, warning, success, danger)