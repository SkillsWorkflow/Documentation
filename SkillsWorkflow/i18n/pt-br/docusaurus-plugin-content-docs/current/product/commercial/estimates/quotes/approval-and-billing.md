---
id: approval-and-billing
title: Aprovação e faturamento
description: "Aprove o que o cliente aceitou na aba Orçamento, mostre só os entregáveis aprovados e planeje como cada entregável é faturado."
sidebar_label: Aprovação e faturamento
sidebar_position: 5
---

Entregáveis e linhas têm uma marcação **Aprovado** para o que o cliente aceitou. Cada entregável também tem um plano de faturamento: as condições de faturamento pelas quais ele será faturado.

## Aprovar

Marque **Aprovado** em um entregável ou em uma linha. **Aprovar tudo** marca todos os entregáveis e linhas que você tem permissão para aprovar. Quando tudo está aprovado, o botão passa a mostrar **Desaprovar tudo** e desmarca todos.

As aprovações são gravadas quando você clica em **Salvar**.

O botão de filtro acima dos entregáveis, ou `Alt`+`A`, mostra só os entregáveis aprovados. Pressione-o de novo para mostrar todos.

## Abrir o plano de faturamento

O plano de faturamento fica abaixo das linhas de cada entregável. **Faturamento** mostra ou oculta o plano em todos os entregáveis. `Alt`+`B` vai para o plano de faturamento, e pressionar de novo o oculta.

O cabeçalho de cada plano mostra o **Total** do entregável, o que foi **Faturado**, o que ainda está **A faturar** e quanto disso está **Distribuído**.

![img-box-shadow](/img/quotes/06-billing-plan.png)
<figcaption>O plano de faturamento de um entregável, dividido em duas condições de faturamento</figcaption>

## Adicionar uma condição de faturamento

1. Comece a digitar em **Digite para adicionar uma condição de faturamento…**.
2. Escolha o **Cliente de Faturamento** e a **Condição de Pagamento**.
3. Escolha o **Tipo**: **Porcentagem** ou **Valor**, e digite o montante. O outro é calculado a partir do que ainda falta faturar.
4. Defina a **Data**.
5. Clique em **Salvar**.

Uma nova condição de faturamento começa com a porcentagem que ainda está livre.

## Regras e comportamento

- Toda condição de faturamento precisa de um cliente de faturamento e de uma condição de pagamento.
- Porcentagens e valores devem ser maiores que 0.
- Um valor não pode exceder o valor do entregável.
- As condições de faturamento de um entregável não podem somar mais de 100%.

## Artigos relacionados

- [Faturar um orçamento](/docs/product/commercial/estimates/invoice-estimate)
- [Resumo](/docs/product/commercial/estimates/quotes/overview)
