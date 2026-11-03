---
id: calculation-rules
title: Regras de cálculo
description: "Como o separador Orçamento calcula o preço de recursos, serviços e despesas: as fórmulas do orçamento, a origem de cada valor, o IVA e os totais do entregável e do orçamento."
sidebar_label: Regras de cálculo
sidebar_position: 3
---

O separador Orçamento calcula o preço de cada linha com a fórmula definida na empresa e os valores do orçamento. A página mostra os resultados enquanto escreve, e o Skills Workflow recalcula os totais quando grava.

## Que fórmula se aplica

O **Tipo de Cálculo Estimado** da empresa define a fórmula para recursos e despesas. O **Tipo de Cálculo de Estimativa de Serviço** define-a para os serviços. Uma empresa gravada sem **Tipo de Cálculo de Estimativa de Serviço** usa o seu **Tipo de Cálculo Estimado**.

Uma condição de pagamento pode ter o seu próprio **Tipo de Cálculo de Estimativa de Serviço**. As linhas de serviços com essa condição de pagamento usam-no.

Há cinco fórmulas: **Default**, **Markup**, **MarkupWithVat**, **MarkupWithVatAndMargin** e **MarkupOnlyOnVat**.

## De onde vêm os valores

| Valor | Origem | Usado em |
|---|---|---|
| **Inflação %** | O separador **Info** do orçamento | Recursos, serviços e despesas |
| **Overheads %** | O separador **Info** do orçamento | Recursos |
| **Margem de Recursos %** | O separador **Info** do orçamento | Recursos |
| **Margem de Fornecedores %** | O separador **Info** do orçamento | A **% Comissão** de uma linha de serviços nova |
| **FTE** | O separador **Info** do orçamento | **Utilização** dos recursos |
| **Rate Card** e **Coluna Rate Card** | O separador **Info** do orçamento | **Tabela** e **Unitário Compra** dos recursos |
| **Coluna Rate Card Venda** | O separador **Info** do orçamento | **Unitário Venda** dos recursos, quando a tabela de valores tem um valor de venda para a função |
| **Tabela de Preços** e **Preço** | O separador **Info** do orçamento | **Unitário Compra** dos serviços, por serviço |
| Comissão de agência | O cliente, por serviço | **% Comissão** de uma linha de serviços com esse serviço |
| **IVA** | O entregável | IVA de todas as linhas do entregável |

## Recursos

Uma linha de recurso recebe a **Tabela** e o **Unitário Compra** da tabela de valores, para o seu grupo de tipologia, utilizador, departamento e o mercado do entregável.

Sem desconto nem **Unitário Venda** escrito à mão, o seu **Unitário Venda** acompanha o **Unitário Compra**:

| Fórmula | Unitário Venda |
|---|---|
| **Default**, **MarkupOnlyOnVat** | Unitário Compra × (1 + Inflação %) × (1 + Overheads %) × (1 + Margem de Recursos %) |
| **Markup**, **MarkupWithVat**, **MarkupWithVatAndMargin** | Unitário Compra × (1 + Inflação %) × (1 + Overheads %) ÷ (1 − Margem de Recursos %) |

Quando a tabela de valores tem um valor de venda para a função na **Coluna Rate Card Venda**, o **Unitário Venda** é esse valor.

Os totais seguem as horas:

- **Total Compra** = Unitário Compra × Horas
- **Total Venda** = Unitário Venda × Horas
- **Utilização** = Horas ÷ FTE

## Serviços

**Total Compra** = Unitário Compra × #Custo, menos o desconto da linha. O desconto é a **% Desconto** da linha, ou o desconto da condição de pagamento quando a linha não tem nenhum.

Quando altera **#Custo**, **#Venda** fica com o mesmo valor.

Uma linha de serviços nova calcula o seu **Unitário Venda** a partir do custo e da **% Comissão**:

| Fórmula | Unitário Venda |
|---|---|
| **Default**, **MarkupOnlyOnVat** | Total Compra × (1 + Inflação %) × (1 + % Margem) × (1 + % Comissão) ÷ #Venda |
| **Markup**, **MarkupWithVat**, **MarkupWithVatAndMargin** | Total Compra × (1 + Inflação %) × (1 + % Margem) ÷ (1 − % Comissão) ÷ #Venda |

A **% Margem** é a margem de negociação da própria linha, e normalmente é 0. As linhas com uma condição de pagamento **Direto Cliente**, e as linhas com 100% de desconto, seguem outras regras.

O **Unitário Venda** volta a ser calculado quando altera a **% Comissão** ou a **% Margem**.

Numa linha gravada, alterar o custo ou a quantidade mantém o **Unitário Venda**, e a **% Comissão** muda. Numa empresa com **Percentagem de Comissão Fixa**, o **Unitário Venda** acompanha sempre o custo.

Escrever o **Unitário Venda** ou o **Total Venda** mantém esse preço e calcula a partir dele a **% Comissão** e a **Comissão**. Um **Total Venda** escrito à mão define **Unitário Venda** = Total Venda ÷ #Venda.

## Despesas

As despesas são vendidas ao custo mais a inflação:

- **#Venda** = #
- **Unitário Venda** = Unitário Compra × (1 + Inflação %)
- **Total Compra** = Unitário Compra × #, menos o desconto da linha

Uma linha de despesa sem desconto tem **Total Venda** = Unitário Venda × #.

## IVA

O IVA aplica-se a uma linha sem condição de pagamento, ou com uma condição de pagamento que tenha **Possui Imposto**. A taxa é o **IVA** do entregável.

| Fórmula | Total Venda com IVA |
|---|---|
| **Default**, **Markup** | Total Venda × (1 + IVA) |
| **MarkupWithVat**, **MarkupOnlyOnVat** | Total Venda ÷ (1 − IVA) |
| **MarkupWithVatAndMargin**, serviços | (Total Venda − Comissão) ÷ (1 − % Comissão − IVA) |
| **MarkupWithVatAndMargin**, recursos | (Total Compra + overheads) ÷ (1 − Margem de Recursos % − IVA) |

Nos recursos com **MarkupWithVatAndMargin**, overheads = Overheads % × Unitário Compra × (1 + Inflação %) × Horas.

Estas regras não abrangem as linhas com uma condição de pagamento **Direto Cliente**, as despesas com **MarkupWithVatAndMargin**, nem os recursos com preço da **Coluna Rate Card Venda** com **MarkupWithVatAndMargin**.

## Arredondamento

Com **Aplicar arredondamento de unitário** na empresa, os preços unitários são arredondados às casas decimais do preço da moeda.

## Entregáveis

- **Total Compra** = a soma do Total Compra das linhas × Nº Rep.
- **Total Venda** = a soma do Total Venda das linhas × Nº Rep., mais a comissão de agência, menos o **Desconto** do entregável
- **Margem Final** = Total Venda − Total Compra
- **Margem Final %** = Margem Final ÷ Total Venda

**Nº Rep.** só aparece nos orçamentos de avença. Começa no número de meses entre a **Data de Início** e a **Data de Conclusão** do entregável. Nos outros orçamentos é 1.

## Resumo do orçamento

- **Total Venda** e **Total Compra** são as somas dos entregáveis.
- **Margem Final %** = 1 − Total Compra ÷ Total Venda.
- Em **Por tipo de linha**, a venda de cada tipo de linha é a soma do Total Venda das suas linhas × Nº Rep. × (1 − % Desconto do entregável). O seu custo é a soma do Total Compra das linhas × Nº Rep., e a sua % é 1 − custo ÷ venda.

As regras do plano de faturação e das condições de compra estão em [Aprovação e faturação](/docs/product/commercial/estimates/quotes/approval-and-billing) e [Condições de compra](/docs/product/commercial/estimates/quotes/buy-conditions).

## Artigos relacionados

- [Preços e margens](/docs/product/commercial/estimates/quotes/prices-and-margins)
- [Criar tabelas de preços](/docs/product/commercial/rates/rate-cards)
- [Tabelas de Preços](/docs/product/commercial/rates/price-tables)
