---
id: calculation-rules
title: Regras de cálculo
description: "Como a aba Orçamento precifica recursos, serviços e despesas: as fórmulas da proposta, de onde vem cada valor, o imposto e os totais do entregável e da proposta."
sidebar_label: Regras de cálculo
sidebar_position: 3
---

A aba Orçamento precifica cada linha com a fórmula definida na empresa e os valores da proposta. A página mostra os resultados enquanto você digita, e o Skills Workflow recalcula os totais quando você salva.

## Qual fórmula se aplica

O **Tipo de Cálculo Estimado** da empresa define a fórmula de recursos e despesas. O **Tipo de Cálculo de Estimativa de Serviço** define a de serviços. Uma empresa salva sem **Tipo de Cálculo de Estimativa de Serviço** usa o seu **Tipo de Cálculo Estimado**.

Uma condição de pagamento pode ter o seu próprio **Tipo de Cálculo de Estimativa de Serviço**. As linhas de serviços com essa condição de pagamento usam esse tipo.

Há cinco fórmulas: **Default**, **Markup**, **MarkupWithVat**, **MarkupWithVatAndMargin** e **MarkupOnlyOnVat**.

## De onde vêm os valores

| Valor | De onde vem | Usado em |
|---|---|---|
| **Inflation %** | A aba **Info** da proposta | Recursos, serviços e despesas |
| **Overheads %** | A aba **Info** da proposta | Recursos |
| **Margem de Recursos %** | A aba **Info** da proposta | Recursos |
| **Margem de Fornecedores %** | A aba **Info** da proposta | **% Honorários** de uma nova linha de serviços |
| **FTE** | A aba **Info** da proposta | **Utilização** dos recursos |
| **Rate Card** e **Coluna Rate Card** | A aba **Info** da proposta | **Tabela** e **Unitário Compra** dos recursos |
| **Coluna Rate Card Venda** | A aba **Info** da proposta | **Unitário Venda** dos recursos, quando a tabela de valores tem um valor de venda para a função |
| **Tabela de Preços** e **Preço** | A aba **Info** da proposta | **Unitário Compra** dos serviços, por serviço |
| Comissão de agência | O cliente, por serviço | **% Honorários** de uma linha de serviços com esse serviço |
| **Impostos** | O entregável | Imposto de todas as linhas dele |

## Recursos

Uma linha de recurso recebe sua **Tabela** e seu **Unitário Compra** da tabela de valores, de acordo com o grupo de cargo, o usuário, o departamento e o mercado do entregável.

Sem desconto nem **Unitário Venda** digitado, o **Unitário Venda** acompanha o **Unitário Compra**:

| Fórmula | Unitário Venda |
|---|---|
| **Default**, **MarkupOnlyOnVat** | Unitário Compra × (1 + Inflation %) × (1 + Overheads %) × (1 + Margem de Recursos %) |
| **Markup**, **MarkupWithVat**, **MarkupWithVatAndMargin** | Unitário Compra × (1 + Inflation %) × (1 + Overheads %) ÷ (1 − Margem de Recursos %) |

Quando a tabela de valores tem um valor de venda para a função na **Coluna Rate Card Venda**, o **Unitário Venda** é esse valor.

Os totais acompanham as horas:

- **Total Compra** = Unitário Compra × Horas
- **Total Venda** = Unitário Venda × Horas
- **Utilização** = Horas ÷ FTE

## Serviços

**Total Compra** = Unitário Compra × #Custo, menos o desconto da linha. O desconto é o **% Desconto** da linha, ou o desconto da condição de pagamento quando a linha não tem um.

Quando você altera **#Custo**, **#Venda** recebe o mesmo valor.

Uma nova linha de serviços calcula seu **Unitário Venda** a partir do custo e de **% Honorários**:

| Fórmula | Unitário Venda |
|---|---|
| **Default**, **MarkupOnlyOnVat** | Total Compra × (1 + Inflation %) × (1 + % Margem) × (1 + % Honorários) ÷ #Venda |
| **Markup**, **MarkupWithVat**, **MarkupWithVatAndMargin** | Total Compra × (1 + Inflation %) × (1 + % Margem) ÷ (1 − % Honorários) ÷ #Venda |

**% Margem** é a margem de negociação da própria linha e normalmente é 0. Linhas com uma condição de pagamento **Direto Cliente**, e linhas com 100% de desconto, seguem outras regras.

O **Unitário Venda** é recalculado quando você altera **% Honorários** ou **% Margem**.

Em uma linha salva, alterar o custo ou a quantidade mantém o **Unitário Venda**, e **% Honorários** muda. Em uma empresa com **Percentagem de Honorários Fixa**, o **Unitário Venda** acompanha o custo sempre.

Digitar o **Unitário Venda** ou o **Total Venda** mantém esse preço e calcula **% Honorários** e **Honorários** a partir dele. Um **Total Venda** digitado define Unitário Venda = Total Venda ÷ #Venda.

## Despesas

As despesas são vendidas pelo custo mais a inflação:

- **#Venda** = #
- **Unitário Venda** = Unitário Compra × (1 + Inflation %)
- **Total Compra** = Unitário Compra × #, menos o desconto da linha

Uma linha de despesa sem desconto tem **Total Venda** = Unitário Venda × #.

## Imposto

O imposto se aplica a uma linha sem condição de pagamento, ou com uma condição de pagamento que tenha **Possui Imposto**. A alíquota é o valor de **Impostos** do entregável.

| Fórmula | Total Venda com Imposto |
|---|---|
| **Default**, **Markup** | Total Venda × (1 + Impostos) |
| **MarkupWithVat**, **MarkupOnlyOnVat** | Total Venda ÷ (1 − Impostos) |
| **MarkupWithVatAndMargin**, serviços | (Total Venda − Honorários) ÷ (1 − % Honorários − Impostos) |
| **MarkupWithVatAndMargin**, recursos | (Total Compra + overheads) ÷ (1 − Margem de Recursos % − Impostos) |

Para recursos em **MarkupWithVatAndMargin**, overheads = Overheads % × Unitário Compra × (1 + Inflation %) × Horas.

Estas regras não cobrem linhas com uma condição de pagamento **Direto Cliente**, despesas em **MarkupWithVatAndMargin** nem recursos precificados pela **Coluna Rate Card Venda** em **MarkupWithVatAndMargin**.

## Arredondamento

Com **Aplicar redondeo unitario** na empresa, os preços unitários são arredondados às casas decimais do preço da moeda.

## Entregáveis

- **Total Compra** = a soma de Total Compra × Nº Rep. das linhas
- **Total Venda** = a soma de Total Venda × Nº Rep. das linhas, mais a comissão de agência, menos o **Desconto** do entregável
- **Margem Final** = Total Venda − Total Compra
- **Margem Final %** = Margem Final ÷ Total Venda

**Nº Rep.** só é exibido em propostas recorrentes. Começa com o número de meses entre a **Data de Início** e a **Data de Conclusão** do entregável. Nas outras propostas é 1.

## Resumo do orçamento

- **Total Venda** e **Total Compra** são as somas dos entregáveis.
- **Margem Final %** = 1 − Total Compra ÷ Total Venda.
- Em **Por tipo de linha**, a venda de cada tipo de linha é a soma de Total Venda × Nº Rep. × (1 − % Desconto do entregável) das suas linhas. O custo é a soma de Total Compra × Nº Rep. das linhas, e o % é 1 − custo ÷ venda.

As regras do plano de faturamento e das condições de compra estão em [Aprovação e faturamento](/docs/product/commercial/estimates/quotes/approval-and-billing) e [Condições de compra](/docs/product/commercial/estimates/quotes/buy-conditions).

## Artigos relacionados

- [Preços e margens](/docs/product/commercial/estimates/quotes/prices-and-margins)
- [Criar tabelas de preços](/docs/product/commercial/rates/rate-cards)
- [Tabelas de Preços](/docs/product/commercial/rates/price-tables)
