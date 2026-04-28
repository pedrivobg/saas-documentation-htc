# PROMPT — 12.1 Dashboard e Analytics

> **Navegação:** Relatórios > Dashboard  
> **Ícone da página:** `bar-chart-2`
> **Anterior:** 11.3 — Monitoramento de Reviews | **Próxima:** 12.2 — Relatório de Leads

---

## Resumo

Como interpretar o dashboard de KPIs e métricas da plataforma.

---

## Instruções Gerais desta Página

Construir a página seguindo o template padrão definido no Master Prompt:
1. Breadcrumb de navegação
2. Ícone `bar-chart-2` + H1 como título
3. Parágrafo de resumo
4. Seções H2 com âncoras para o TOC
5. Rodapé com navegação ← Anterior | Próxima →

Todas as imagens devem ser placeholders no formato `[IMAGEM: descrição detalhada do que deve ser capturado]`.

---

## Seções da Página

### 📊 O Dashboard {#what-is-dashboard}

H2 "O Dashboard".

Parágrafo: "O Dashboard é a visão executiva da sua operação. Ele mostra em tempo real as métricas mais importantes: quantos leads entraram, quantas oportunidades estão abertas, qual a taxa de conversão e quanto de receita está prevista."

[IMAGEM: screenshot do dashboard com KPIs e gráficos]

Callout info: "Use os filtros de período no canto superior direito para comparar diferentes janelas de tempo (últimos 7 dias, 30 dias, mês atual)."

---

### 📈 KPIs Disponíveis {#kpis}

H2 "KPIs Disponíveis".

Grid de cards de métricas:

**Oportunidades**
- Total de oportunidades no período
- Status: Abertas / Ganhas / Perdidas
- Taxa de conversão (ganhas ÷ totais)

**Valor**
- Valor total das oportunidades abertas
- Valor total ganho no período
- Ticket médio

**Funil e Estágios**
- Distribuição de oportunidades por estágio
- Tempo médio em cada estágio
- Taxa de avanço entre estágios

**Origem dos Leads**
- De onde vieram: formulário, Meta Ads, Google, outros
- Total de leads por origem
- Conversão por origem

---

### 🔍 Como Interpretar os Dados {#how-to-read}

H2 "Como Interpretar os Dados".

Tabela de sinais de alerta e o que fazer:
| Sinal | O que pode indicar | Ação recomendada |
| Taxa de conversão < 10% | Qualificação fraca ou proposta inadequada | Revisar roteiro de qualificação |
| Muitas oportunidades em Proposta Enviada | Follow-up insuficiente | Ativar automação de acompanhamento |
| Alto volume de no-shows | Lembretes fracos | Adicionar lembrete 1h antes |
| Leads sem movimento +7 dias | Falta de acompanhamento | Ativar alerta de oportunidades paradas |

---

## Checklist antes de finalizar esta página

- [ ] Breadcrumb correto: Relatórios > Dashboard
- [ ] Ícone correto: `bar-chart-2`
- [ ] TOC gerado automaticamente a partir dos H2
- [ ] Todos os [IMAGEM: ...] marcados como placeholder
- [ ] Navegação Prev/Next no rodapé: ← 11.3 — Monitoramento de Reviews | 12.2 — Relatório de Leads →
- [ ] Responsividade testada em mobile
- [ ] Callouts usando as classes corretas (info, warning, success, danger)