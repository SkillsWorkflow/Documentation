---
id: ai-connector-printable-reports
title: Imprimir ou Enviar um Relatório Tal Como Está Hoje
description: "Um relatório formatado para A4 que a sua ferramenta de IA publica: abra-o, imprima-o ou guarde-o em PDF, e envie uma cópia datada dos valores a alguém fora do Skills Workflow. Em preview."
sidebar_label: Um Relatório para Imprimir ou Enviar
sidebar_position: 7
---

:::preview
Isto ainda não está disponível. O exemplo abaixo foi construído com o conector num tenant de demonstração para mostrar como se espera que funcione, e a funcionalidade final pode ser diferente.
:::

Alguns relatórios são feitos para sair do Skills Workflow: o relatório mensal de estado anexado a um email para o cliente, o resumo de fim de campanha para a equipa de compras do cliente, os valores para uma reunião de administração. Peça à sua ferramenta de IA um relatório formatado para papel. Abra-o no dia em que precisa dele, selecione **Print or save as PDF** e envie a cópia. A cópia mantém os valores e a data desse momento.

![img-box-shadow](/img/ai/connector/monthly-report-screen.png)
<figcaption>O relatório mensal de estado do cliente fictício Northwind Coffee num tenant de demonstração, tal como abre no browser, com o seu botão de impressão.</figcaption>

![img-box-shadow](/img/ai/connector/monthly-report-print.png)
<figcaption>O mesmo relatório tal como é impresso: uma página A4 com a data e a hora dos valores no topo e no rodapé, e sem botão.</figcaption>

## Comportamento esperado

- O relatório é publicado no seu próprio endereço e lê dados em tempo real sempre que abre.
- Está formatado para A4. No papel e no PDF, os botões desaparecem e a data e a hora dos valores aparecem na página.
- O PDF é guardado a partir da caixa de diálogo de impressão do próprio browser. Sai do Skills Workflow consigo, e a pessoa a quem o envia não precisa de um utilizador do Skills Workflow.
- No exemplo, o relatório lê a query `DE-Jobs` para um cliente e um projeto, e agrupa os deliverables em à espera de aprovação, em curso e entregues.

Guardar uma cópia datada do relatório dentro do Skills Workflow não faz parte deste exemplo.

## Regras e comportamento

- O relatório no ecrã mostra sempre os valores de hoje. Só a cópia impressa ou guardada fica fixa.
- As permissões deixam de se aplicar a um PDF depois de enviado. Verifique o que mostra antes de sair da agência.

## Artigos relacionados

- [Construir um Relatório a Partir dos Seus Dados](/docs/ai/connector/ai-connector-reports)
- [Partilhar uma Página de Estado em Tempo Real com um Cliente](/docs/ai/connector/ai-connector-client-status-page)
- [Skills Workflow na Sua Ferramenta de IA](/docs/ai/connector)
