# PROMPT — 3.2 WhatsApp

> **Navegação:** Conversas > WhatsApp  
> **Ícone da página:** `smartphone`
> **Anterior:** 3.1 — Inbox Unificado | **Próxima:** 3.3 — SMS

---

## Resumo

Envie e receba mensagens de WhatsApp diretamente do CRM.

---

## Instruções Gerais desta Página

Construir a página seguindo o template padrão definido no Master Prompt:
1. Breadcrumb de navegação
2. Ícone `smartphone` + H1 como título
3. Parágrafo de resumo
4. Seções H2 com âncoras para o TOC
5. Rodapé com navegação ← Anterior | Próxima →

Todas as imagens devem ser placeholders no formato `[IMAGEM: descrição detalhada do que deve ser capturado]`.

---

## Seções da Página

### 📱 WhatsApp no [App da Agência] {#intro}

H2 "WhatsApp no [App da Agência]".

Parágrafo: "O WhatsApp é o canal de comunicação mais usado no Brasil. Na plataforma, você pode enviar e receber mensagens de WhatsApp diretamente do CRM, automatizar respostas e manter todo o histórico organizado."

Callout info: "A plataforma suporta dois tipos de integração. A diferença é importante para escolher o que funciona melhor para o seu volume de mensagens."

---

### ⚖️ API Não Oficial × API Oficial {#api-comparison}

H2 "API Não Oficial × API Oficial".

Tabela comparativa 3 colunas:
| Característica | API Não Oficial | API Oficial (WhatsApp Business) |
| Configuração | QR code simples | Aprovação da Meta (2-5 dias) |
| Custo | Incluso no plano | Custo por conversa (variável) |
| Templates | Mensagem livre | Templates aprovados obrigatórios para 1º contato |
| Volume | Pequeno/médio | Qualquer volume |
| Risco | Possível suspensão se usado incorretamente | Sem risco |
| Indicado para | Testes, volumes menores, início | Uso profissional em escala |

Badge destacado na API Não Oficial: "Padrão do plano"

Callout warning: "Se usar API não oficial: não envie mensagens em massa para listas frias. O WhatsApp pode suspender o número por spam."

---

### ⏰ Regra das 24 Horas {#window-24h}

H2 "Regra das 24 Horas".

Callout warning: "IMPORTANTE: O WhatsApp só permite enviar mensagens livres dentro das 24 horas após o último contato do cliente. Após esse prazo, é necessário usar templates aprovados (API Oficial) ou aguardar o cliente iniciar a conversa."

Diagrama SVG da timeline:
- 0h — cliente manda mensagem → janela de 24h abre
- 0h a 24h — você pode responder com qualquer texto
- +24h — janela fecha → apenas templates funcionam

---

### ✅ Boas Práticas {#best-practices}

H2 "Boas Práticas".

Lista de 6 itens com ícone check verde:
1. Envie mensagens apenas das 8h às 20h
2. Use o nome do contato para personalizar
3. Mantenha as mensagens curtas e diretas
4. Respeite o opt-out — se alguém pedir para parar, pare
5. Teste os fluxos com seu próprio número antes de ativar
6. Nunca envie a mesma mensagem para mais de 100 contatos por vez sem warmup

---

### 🔗 Conectando o WhatsApp {#connecting}

H2 "Conectando o WhatsApp".

Tabs: API Não Oficial | API Oficial

**Tab API Não Oficial:**
Passos:
1. Configurações > Integrações > WhatsApp
2. Clique em "Conectar via QR Code"
3. Abra o WhatsApp no celular > 3 pontos > Aparelhos Conectados
4. Clique em "Conectar Aparelho" e escaneie o QR
5. Aguarde a confirmação

[IMAGEM: QR code de exemplo com instrução]

**Tab API Oficial:**
Passos:
1. Configurações > Integrações > WhatsApp Business API
2. Clique em "Iniciar Aprovação Meta"
3. Siga o processo de verificação da Meta Business
4. Após aprovação (2-5 dias), configure os templates
5. Associe o número aprovado

---

## Checklist antes de finalizar esta página

- [ ] Breadcrumb correto: Conversas > WhatsApp
- [ ] Ícone correto: `smartphone`
- [ ] TOC gerado automaticamente a partir dos H2
- [ ] Todos os [IMAGEM: ...] marcados como placeholder
- [ ] Navegação Prev/Next no rodapé: ← 3.1 — Inbox Unificado | 3.3 — SMS →
- [ ] Responsividade testada em mobile
- [ ] Callouts usando as classes corretas (info, warning, success, danger)