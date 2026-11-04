---
id: ai-connector-printable-reports
title: Imprimir ou Enviar um Relatório Como Está Hoje
description: "Um relatório diagramado para A4 que a sua ferramenta de IA publica: abra-o, imprima-o ou salve-o como PDF e envie uma cópia datada dos números a alguém de fora do Skills Workflow. Em preview."
sidebar_label: Um Relatório para Imprimir ou Enviar
sidebar_position: 7
---

:::preview
Isto ainda não está disponível. O exemplo abaixo foi criado com o conector em um tenant de demonstração para mostrar como se espera que funcione, e o recurso final pode ser diferente.
:::

Alguns relatórios são feitos para sair do Skills Workflow: o relatório de status mensal anexado a um e-mail para o cliente, o resumo de fim de campanha para a equipe de compras dele, os números para uma reunião da diretoria. Peça à sua ferramenta de IA um relatório diagramado para papel. Abra-o no dia em que precisar, selecione **Print or save as PDF** e envie a cópia. A cópia guarda os números e a data daquele momento.

![img-box-shadow](/img/ai/connector/monthly-report-screen.png)
<figcaption>O relatório de status mensal do cliente fictício Northwind Coffee em um tenant de demonstração, como abre no navegador, com o seu botão de impressão.</figcaption>

![img-box-shadow](/img/ai/connector/monthly-report-print.png)
<figcaption>O mesmo relatório como é impresso: uma página A4 com a data e a hora dos números no topo e no rodapé, e sem botão.</figcaption>

## Comportamento esperado

- O relatório é publicado no seu próprio endereço e lê dados em tempo real sempre que é aberto.
- Ele é diagramado para A4. No papel e no PDF, os botões desaparecem e a data e a hora dos números aparecem na página.
- O PDF é salvo a partir da própria caixa de diálogo de impressão do navegador. Ele sai do Skills Workflow com você, e a pessoa a quem você o envia não precisa de um usuário do Skills Workflow.
- No exemplo, o relatório lê a consulta `DE-Jobs` para um cliente e um projeto, e agrupa as entregas em aguardando aprovação, em andamento e entregues.

Guardar uma cópia datada do relatório dentro do Skills Workflow não faz parte deste exemplo.

## Regras e comportamento

- O relatório na tela sempre mostra os números de hoje. Apenas a cópia impressa ou salva fica fixa.
- As permissões deixam de se aplicar a um PDF depois que ele é enviado. Confira o que ele mostra antes que saia da agência.

## Artigos relacionados

- [Criar um Relatório a Partir dos Seus Dados](/docs/ai/connector/ai-connector-reports)
- [Compartilhar uma Página de Status em Tempo Real com um Cliente](/docs/ai/connector/ai-connector-client-status-page)
- [Skills Workflow na Sua Ferramenta de IA](/docs/ai/connector)
