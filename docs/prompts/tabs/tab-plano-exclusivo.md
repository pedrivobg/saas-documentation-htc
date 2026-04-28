# PROMPT — 14.1 Funcionalidades Exclusivas do Plano

> **Navegação:** Seu Plano > Funcionalidades  
> **Ícone da página:** `package`  
> **Badge:** `Exclusivo`
> **Anterior:** 13.5 — Telefone e SMS | **Próxima:** 14.2 — Suporte Dedicado

---

## Resumo

Recursos especiais incluídos no seu plano com a agência.

---

## Instruções Gerais desta Página

Construir a página seguindo o template padrão definido no Master Prompt:
1. Breadcrumb de navegação
2. Ícone `package` + H1 como título + Badge `Exclusivo`
3. Parágrafo de resumo
4. Seções H2 com âncoras para o TOC
5. Rodapé com navegação ← Anterior | Próxima →

Todas as imagens devem ser placeholders no formato `[IMAGEM: descrição detalhada do que deve ser capturado]`.

---

## Seções da Página

### 🌟 Recursos do Seu Plano {#custom-features}

H2 "Recursos do Seu Plano".

Parágrafo: "Além de todas as funcionalidades padrão da plataforma, o seu plano inclui recursos e serviços adicionais configurados especificamente para o seu negócio pela sua agência."

Grid de FeatureCards gerado dinamicamente a partir de APP_CONFIG.customFeatures.

Callout info: "Os recursos exibidos aqui são específicos do plano que você contratou. Para adicionar outros recursos, entre em contato com seu gerente de conta."

---

### 📊 Comparativo de Planos {#comparison}

H2 "Comparativo de Planos".

Tabela gerada a partir de APP_CONFIG (cada agência personaliza):
| Recurso | Starter | Pro | Agency |
| Subcontas | 1 | 3 | Ilimitadas |
| IA de Conversação | — | ✓ | ✓ |
| IA de Voz | — | — | ✓ |
| Suporte | Base de conhecimento | WhatsApp | Prioritário |
| Trial | 14 dias | 14 dias | 14 dias |

Badge "Seu plano atual" no plano contratado.

---

## Checklist antes de finalizar esta página

- [ ] Breadcrumb correto: Seu Plano > Funcionalidades
- [ ] Ícone correto: `package`
- [ ] TOC gerado automaticamente a partir dos H2
- [ ] Todos os [IMAGEM: ...] marcados como placeholder
- [ ] Navegação Prev/Next no rodapé: ← 13.5 — Telefone e SMS | 14.2 — Suporte Dedicado →
- [ ] Responsividade testada em mobile
- [ ] Callouts usando as classes corretas (info, warning, success, danger)