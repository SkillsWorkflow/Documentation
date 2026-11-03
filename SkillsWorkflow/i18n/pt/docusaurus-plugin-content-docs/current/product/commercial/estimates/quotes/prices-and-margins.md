---
id: prices-and-margins
title: Preços e margens
description: "Alterar preços no separador Orçamento, recalcular os recursos a partir da tabela de valores, desbloquear serviços e ler o resumo do orçamento e o seu objetivo de margem."
sidebar_label: Preços e margens
sidebar_position: 2
---

Os preços no separador Orçamento seguem as definições do orçamento e a sua fórmula. As regras exatas estão em [Regras de cálculo](/docs/product/commercial/estimates/quotes/calculation-rules).

## Alterar um preço

Altere um custo, uma quantidade, as horas, a **% Comissão** ou um valor de venda, e os valores relacionados dessa linha acompanham a alteração. Os totais do entregável e o resumo do orçamento são atualizados enquanto escreve.

Numa linha de recurso, escolher o **Grupo de Cargo** ou o **Utilizador** vai buscar os valores à tabela de valores do orçamento.

Numa linha de serviços, escolher o **Serviço** vai buscar o seu custo à **Tabela de Preços** do orçamento, quando existe, e a comissão de agência do cliente para esse serviço.

## Recalcular os recursos a partir da tabela de valores

**Aplicar valores tabela** repõe os valores da tabela de valores em todas as linhas de recursos gravadas.

1. Grave ou desfaça as alterações.
2. Clique em **Aplicar valores tabela** e confirme.

Cada linha de recurso gravada que tenha um custo na tabela de valores volta a receber os valores da tabela, perde o desconto e é gravada. Uma linha sem custo na tabela de valores mantém os seus valores.

## Serviços bloqueados

Uma linha de serviços enviada como pedido a outra empresa fica bloqueada, e o ícone de cadeado indica-o. Não pode ser alterada.

Para a desbloquear, clique nela com o botão direito e escolha **Desbloquear**, seguido do número de linhas. Selecione primeiro várias linhas para as desbloquear em conjunto. A opção exige permissão para desbloquear serviços.

## Resumo do orçamento

O resumo à direita soma toda a cotação e é atualizado enquanto escreve. Ao gravar, os totais são recalculados.

![img-box-shadow](/img/quotes/04-summary.png)
<figcaption>O resumo do orçamento com o objetivo de margem e a lista Verificar antes de enviar</figcaption>

- **Margem Final %** é a margem de todo o orçamento, com o intervalo do objetivo por baixo.
- **Total Venda** e **Total Compra** somam os entregáveis.
- **Por tipo de linha** reparte a venda, o custo e a margem entre recursos, serviços e despesas, com as horas dos recursos.
- **Horas por grupo de tipologia** lista as funções com mais horas.

**Verificar antes de enviar** aparece quando algo precisa de atenção:

- a margem está abaixo do objetivo;
- há linhas sem campos obrigatórios;
- há linhas sem quantidade ou horas;
- há linhas sem valor de venda;
- há linhas aprovadas e outras por aprovar.

**Esconder o resumo** e **Mostrar o resumo** fecham e abrem o painel.

## Artigos relacionados

- [Regras de cálculo](/docs/product/commercial/estimates/quotes/calculation-rules)
- [Aprovação e faturação](/docs/product/commercial/estimates/quotes/approval-and-billing)
- [Criar tabelas de preços](/docs/product/commercial/rates/rate-cards)
- [Tabelas de Preços](/docs/product/commercial/rates/price-tables)
