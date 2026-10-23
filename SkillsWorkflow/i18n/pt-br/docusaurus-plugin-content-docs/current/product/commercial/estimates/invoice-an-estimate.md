---
id:  invoice-estimate
title: Orçamentos
sidebar_label: Faturar um orçamento
---

Os orçamentos podem ser criadas como retentores, e o sistema exibirá automaticamente seus valores.

Verifique como você pode criar a estimativa na Lição 1 na seção "orçamentos".

Para gerar uma estimativa de retenção, navegue até a guia de informações gerais da estimativa, marque a opção "Recorrência" e pressione o botão Salvar.

<figure>

![img-box-shadow](/img/university/estimates/estimates-lesson2-1.png)
<figcaption></figcaption>
</figure>

O sistema exibirá um novo campo chamado "Número do representante" no nível de entrega/cliente. 

<figure>

![img-box-shadow](/img/university/estimates/estimates-lesson2-2.png)
<figcaption></figcaption>
</figure>

Você pode ajustar o Rep.Number para o número de vezes que os valores precisam ser repetidos..

No exemplo abaixo, o campo Número do Rep é marcado como 6 (é uma estimativa de retenção de 6 meses) e o sistema multiplicará os valores de custo e os valores de receita pelo Número do Rep.

<figure>

![img-box-shadow](/img/university/estimates/estimates-lesson2-3.png)
<figcaption></figcaption>
</figure>

:::note
Esteja ciente de que os valores em Terceiros, Despesas e Recursos serão exibidos com os mesmos valores.
:::

Após a aprovação do cliente, o sistema exibirá as informações do projeto com as informações de recorrência

No nível do projeto, terceiros e despesas estarão disponíveis em "Custos planejados"

 

<figure>

![img-box-shadow](/img/university/estimates/estimates-lesson2-4.png)
<figcaption></figcaption>
</figure>

Os recursos estarão disponíveis em "Tempo planejado"

<figure>

![img-box-shadow](/img/university/estimates/estimates-lesson2-5.png)
<figcaption></figcaption>
</figure>

## Aprovar os entregáveis antes de faturar {#approve-deliverables}

Só os entregáveis marcados como **Aprovado** são faturados. Um serviço novo é criado já aprovado, mas um entregável novo não. Antes de faturar, abra o orçamento e marque como **Aprovado** os entregáveis a faturar.

O workflow pode fazer isso por você. Quando a ação **ApproveItems** está em uma transição, passar o orçamento por essa transição marca como aprovados todos os entregáveis e todos os serviços do orçamento. O seu administrador sabe dizer se o workflow de orçamentos a usa. Consulte [Ações de Workflow](/docs/administration/workflows/workflow-actions).

## Erro: "Deve existir pelo menos uma condição de faturamento com valor / porcentagem." {#error-billing-condition-value-percentage}

Esta mensagem aparece ao faturar um orçamento quando nenhuma das condições de faturamento tem um valor que possa ser faturado. Verifique o orçamento nesta ordem:

1. Pelo menos um entregável está marcado como **Aprovado**. Só os entregáveis aprovados são faturados, e as condições de faturamento só são verificadas nesses entregáveis.
2. Se um entregável aprovado tiver condições de faturamento próprias, pelo menos uma delas precisa de um **Valor** ou de uma **Percentagem** diferente de 0. Quando todos os entregáveis aprovados têm condições de faturamento próprias, as **Condições de Faturamento** do orçamento não são usadas.
3. Nas **Condições de Faturamento** do orçamento, preencha o campo que corresponde ao **Tipo de Quantia**: **Percentagem** quando o tipo é Percentagem, **Valor** quando o tipo é Valor. Um valor digitado no outro campo não conta.

A soma das condições de faturamento do orçamento não pode ultrapassar 100% do valor do orçamento sem impostos.

## Artigos relacionados

- [Criar um Orçamento](/docs/product/commercial/estimates/create-estimate)
- [Autorizações de fatura](/docs/product/billing-and-costs/billing/invoice-authorizations)
- [Notas de credito](/docs/product/billing-and-costs/billing/credit-notes)
- [Erros e dúvidas frequentes](/docs/product/troubleshooting)
