---
id: approval-and-billing
title: Aprovação e faturação
description: "Aprovar o que o cliente aceitou no separador Orçamento, mostrar só os entregáveis aprovados e planear como cada entregável é faturado."
sidebar_label: Aprovação e faturação
sidebar_position: 5
---

Os entregáveis e as linhas têm uma marca **Aprovado** para o que o cliente aceitou. Cada entregável tem também um plano de faturação: as condições de faturação pelas quais vai ser faturado.

## Aprovar

Marque **Aprovado** num entregável ou numa linha. **Aprovar tudo** marca todos os entregáveis e linhas que pode aprovar. Quando está tudo aprovado, o botão passa a **Desaprovar tudo** e desmarca-os.

As aprovações são gravadas quando clica em **Gravar**.

O botão de filtro por cima dos entregáveis, ou `Alt`+`A`, mostra só os entregáveis aprovados. Prima-o de novo para os mostrar todos.

## Abrir o plano de faturação

O plano de faturação fica por baixo das linhas de cada entregável. **Faturação** mostra-o ou esconde-o em todos os entregáveis. `Alt`+`B` vai para o plano de faturação, e premir de novo esconde-o.

O cabeçalho de cada plano mostra o **Total** do entregável, o que já foi **Faturado**, o que está ainda **A faturar** e quanto dele está **Atribuído**.

![img-box-shadow](/img/quotes/06-billing-plan.png)
<figcaption>O plano de faturação de um entregável, dividido em duas condições de faturação</figcaption>

## Adicionar uma condição de faturação

1. Comece a escrever em **Escreva para adicionar uma condição de faturação…**.
2. Escolha o **Cliente de Faturação** e a **Condição de Pagamento**.
3. Escolha o **Tipo**: **Percentagem** ou **Valor**, e escreva o montante. O outro é calculado a partir do que falta faturar.
4. Defina a **Data**.
5. Clique em **Gravar**.

Uma condição de faturação nova começa com a percentagem que ainda está livre.

## Regras e comportamento

- Cada condição de faturação precisa de um cliente de faturação e de uma condição de pagamento.
- As percentagens e os valores têm de ser superiores a 0.
- Um valor não pode exceder o valor do entregável.
- As condições de faturação de um entregável não podem somar mais de 100%.

## Artigos relacionados

- [Faturar um orçamento](/docs/product/commercial/estimates/invoice-estimate)
- [Resumo](/docs/product/commercial/estimates/quotes/overview)
