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

## Aprovar as entregas antes de faturar {#approve-deliverables}

Só as entregas marcadas como **Aprovado** são faturadas. Um serviço novo é criado já aprovado, mas uma entrega nova não. Antes de faturar, abra o orçamento e marque como **Aprovado** as entregas a faturar.

O workflow pode fazer isto por si. Quando a ação **ApproveItems** está numa transição, passar o orçamento por essa transição marca como aprovadas todas as entregas e todos os serviços do orçamento. O seu administrador sabe dizer se o workflow de orçamentos a usa. Consulte [Ações de Workflow](/docs/administration/workflows/workflow-actions).

## Erro: "Deve existir pelo menos uma condição de faturação com valor / percentagem." {#error-billing-condition-value-percentage}

Esta mensagem aparece ao faturar um orçamento quando nenhuma das condições de faturação tem um montante que possa ser faturado. Verifique o orçamento por esta ordem:

1. Pelo menos uma entrega está marcada como **Aprovado**. Só as entregas aprovadas são faturadas, e as condições de faturação só são verificadas nessas entregas.
2. Se uma entrega aprovada tiver condições de faturação próprias, pelo menos uma delas precisa de um **Valor** ou de uma **Percentagem** diferente de 0. Quando todas as entregas aprovadas têm condições de faturação próprias, as **Condições de Faturação** do orçamento não são usadas.
3. Nas **Condições de Faturação** do orçamento, preencha o campo que corresponde ao **Tipo de Quantia**: **Percentagem** quando o tipo é Percentagem, **Valor** quando o tipo é Valor. Um valor escrito no outro campo não conta.

A soma das condições de faturação do orçamento não pode ultrapassar 100% do valor do orçamento sem IVA.

## Artigos relacionados

- [Criar um Orçamento](/docs/product/commercial/estimates/create-estimate)
- [Autorizações de fatura](/docs/product/billing-and-costs/billing/invoice-authorizations)
- [Notas de credito](/docs/product/billing-and-costs/billing/credit-notes)
- [Erros e dúvidas frequentes](/docs/product/troubleshooting)
