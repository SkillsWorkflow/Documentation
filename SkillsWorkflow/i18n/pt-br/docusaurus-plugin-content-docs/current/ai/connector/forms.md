---
id: ai-connector-forms
title: Receber Pedidos com um Formulário
description: "Um formulário que a sua ferramenta de IA publica para a equipe de um cliente: cada pedido se torna uma Atividade no projeto certo, na primeira etapa, com os detalhes no Feed da Atividade. Em preview."
sidebar_label: Um Formulário que Cria Trabalho
sidebar_position: 8
---

:::preview
Isto ainda não está disponível. O exemplo abaixo foi criado com o conector em um tenant de demonstração para mostrar como se espera que funcione, e o recurso final pode ser diferente.
:::

Substitua os e-mails de pedido por um formulário. A equipe de marketing do cliente diz o que precisa, os detalhes e a data, e o pedido chega ao Skills Workflow como uma Atividade no projeto da campanha, pronta para o tráfego assumir.

![img-box-shadow](/img/ai/connector/request-form.png)
<figcaption>O formulário de pedidos do cliente fictício Northwind Coffee em um tenant de demonstração, preenchido pela equipe de marketing dele.</figcaption>

![img-box-shadow](/img/ai/connector/request-form-sent.png)
<figcaption>Depois do envio, o formulário mostra o número da Atividade que criou, a etapa dela e um link para a página de status da campanha.</figcaption>

![img-box-shadow](/img/ai/connector/request-form-job.jpg)
<figcaption>A Atividade que o formulário criou, no Skills Workflow: no projeto da campanha, em To Do, com a data pedida e os detalhes do pedido no Feed dela.</figcaption>

## Comportamento esperado

- Cada pedido cria uma Atividade no projeto ao qual o formulário pertence. O departamento e o tipo de Atividade são os que a agência escolheu quando o formulário foi criado.
- O nome, a data e a prioridade vêm do formulário. Os detalhes são publicados no Feed da Atividade.
- A Atividade sai de Draft para a primeira etapa do seu workflow, da mesma forma que aconteceria se fosse criada no Skills Workflow.
- A pessoa que envia o formulário vê o número da Atividade e pode acompanhá-la na página de status do cliente.

## Regras e comportamento

- Quem preenche o formulário faz login no Skills Workflow. A Atividade é criada como essa pessoa, com as permissões dela, e uma pessoa que não pode criar Atividades no projeto recebe uma mensagem informando isso.
- Um formulário para pessoas sem um usuário do Skills Workflow não faz parte deste exemplo.

## Artigos relacionados

- [Compartilhar uma Página de Status em Tempo Real com um Cliente](/docs/ai/connector/ai-connector-client-status-page)
- [Um Único Endereço para Tudo o que um Cliente Abre](/docs/ai/connector/ai-connector-client-hub)
- [Skills Workflow na Sua Ferramenta de IA](/docs/ai/connector)
