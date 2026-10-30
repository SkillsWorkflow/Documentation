---
id: ai-connector-forms
title: Recolher Pedidos com um Formulário
description: "Um formulário que a sua ferramenta de IA publica para a equipa de um cliente: cada pedido torna-se um job no projeto certo, na sua primeira etapa, com os detalhes no feed do job. Em preview."
sidebar_label: Um Formulário que Cria Trabalho
sidebar_position: 8
---

:::preview
Isto ainda não está disponível. O exemplo abaixo foi construído com o conector num tenant de demonstração para mostrar como se espera que funcione, e a funcionalidade final pode ser diferente.
:::

Substitua os emails de pedido por um formulário. A equipa de marketing do cliente diz o que precisa, os detalhes e a data, e o pedido chega ao Skills Workflow como um job no projeto da campanha, pronto para o traffic tratar dele.

![img-box-shadow](/img/ai/connector/request-form.png)
<figcaption>O formulário de pedidos do cliente fictício Northwind Coffee num tenant de demonstração, preenchido pela sua equipa de marketing.</figcaption>

![img-box-shadow](/img/ai/connector/request-form-sent.png)
<figcaption>Depois do envio, o formulário mostra o número do job que criou, a sua etapa e uma ligação para a página de estado da campanha.</figcaption>

![img-box-shadow](/img/ai/connector/request-form-job.jpg)
<figcaption>O job que o formulário criou, no Skills Workflow: no projeto da campanha, em To Do, com a data pedida e os detalhes do pedido no seu feed.</figcaption>

## Comportamento esperado

- Cada pedido cria um job no projeto a que o formulário pertence. O departamento e o tipo de job são os que a agência escolheu quando o formulário foi construído.
- O nome, a data e a prioridade vêm do formulário. Os detalhes são publicados no feed do job.
- O job sai de Draft para a primeira etapa do seu workflow, tal como aconteceria se fosse criado no Skills Workflow.
- A pessoa que envia o formulário vê o número do job e pode acompanhá-lo na página de estado do cliente.

## Regras e comportamento

- Quem preenche o formulário inicia sessão no Skills Workflow. O job é criado em nome dessa pessoa, com as suas permissões, e uma pessoa que não pode criar jobs no projeto recebe uma mensagem a dizê-lo.
- Um formulário para pessoas sem utilizador do Skills Workflow não faz parte deste exemplo.

## Artigos relacionados

- [Partilhar uma Página de Estado em Tempo Real com um Cliente](/docs/ai/connector/ai-connector-client-status-page)
- [Um Endereço para Tudo o que um Cliente Abre](/docs/ai/connector/ai-connector-client-hub)
- [Skills Workflow na Sua Ferramenta de IA](/docs/ai/connector)
