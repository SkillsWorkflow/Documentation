---
id: ai-connector-client-status-page
title: Compartilhar uma Página de Status em Tempo Real com um Cliente
description: "Peça à sua ferramenta de IA uma página que mostre a um cliente o andamento da campanha, as entregas e o que aguarda por ele, publicada em um único endereço que sempre mostra os dados de hoje."
sidebar_label: Uma Página de Status em Tempo Real para um Cliente
sidebar_position: 3
---

Dê a um cliente um único endereço onde ele vê como o trabalho está andando: o progresso da campanha, as entregas previstas e as aprovações que aguardam por ele. Peça a página à sua ferramenta de IA, revise-a e envie o endereço ao cliente. A página lê o Skills Workflow sempre que é aberta, então ninguém a atualiza à mão.

![img-box-shadow](/img/ai/connector/client-status-page.png)
<figcaption>Uma página de status publicada com o conector em um tenant de demonstração, para o cliente fictício Northwind Coffee: o progresso, três contadores, as entregas que aguardam o cliente e todas as entregas com a etapa e a data de entrega.</figcaption>

## Disponibilidade

Disponível. Você precisa do [conector do Skills Workflow na sua ferramenta de IA](/docs/ai/connector/ai-connector-setup). O cliente faz login com o próprio usuário do Skills Workflow e vê apenas os projetos e as Atividades que esse usuário tem permissão para ver.

## Como pedir

1. Indique o cliente e o projeto, e diga o que o cliente deve ver. A página acima foi criada a partir da consulta `DE-Jobs`, filtrada para um cliente e um projeto.
2. Diga qual etapa significa "aguardando o cliente". Os nomes das etapas são os configurados no seu tenant, e a página os mostra como estão.
3. Deixe a ferramenta de IA publicar a página. Ela informa o endereço, `/portal/{client}/{page}/`.
4. Abra o endereço como um usuário com as permissões do cliente antes de enviá-lo.

## Regras e comportamento

- O endereço tem duas partes, o cliente e a página. Ambas usam apenas letras minúsculas, números e hífens.
- Pedir uma alteração republica a página inteira no mesmo endereço. O cliente continua com o mesmo link.
- Uma página publicada pela primeira vez pode responder "não encontrada" por alguns instantes antes de abrir.
- Abrir a página sem sessão mostra o login do Skills Workflow e volta para a página em seguida.

## Artigos relacionados

- [Um Único Endereço para Tudo o que um Cliente Abre](/docs/ai/connector/ai-connector-client-hub)
- [Criar um Relatório a Partir dos Seus Dados](/docs/ai/connector/ai-connector-reports)
- [Portais de Clientes](/docs/ai/ai-portals)
- [Conectar o Claude, o Codex ou o GitHub Copilot ao Skills Workflow](/docs/ai/connector/ai-connector-setup)
