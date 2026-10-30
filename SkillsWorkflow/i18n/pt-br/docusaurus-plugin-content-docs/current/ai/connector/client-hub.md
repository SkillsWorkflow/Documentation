---
id: ai-connector-client-hub
title: Um Único Endereço para Tudo o que um Cliente Abre
description: "Peça à sua ferramenta de IA a página inicial de um cliente: um único endereço com links para todas as páginas de status e relatórios que você publica para ele, com um número em tempo real ao lado de cada link."
sidebar_label: Um Endereço por Cliente
sidebar_position: 4
---

Dê a cada cliente um único endereço para salvar nos favoritos. A sua ferramenta de IA cria uma página inicial para o cliente com links para as páginas que você publicou para ele, com um número em tempo real ao lado de cada link.

![img-box-shadow](/img/ai/connector/client-home-page.png)
<figcaption>A página inicial do cliente fictício Northwind Coffee em um tenant de demonstração, com links para a página de status e o relatório dele, com as aprovações pendentes e as entregas concluídas.</figcaption>

## Disponibilidade

Disponível. Você precisa do [conector do Skills Workflow na sua ferramenta de IA](/docs/ai/connector/ai-connector-setup) e de pelo menos uma página já publicada para o cliente.

## Como pedir

1. Peça uma página inicial para o cliente e indique as páginas para as quais ela tem links. A ferramenta de IA lê de volta uma página publicada quando você informa os nomes do cliente e da página.
2. Diga qual número cada link mostra.
3. Deixe a ferramenta de IA publicá-la no endereço principal do cliente, por exemplo `/portal/{client}/home/`.

## Regras e comportamento

- Um link abre a outra página no endereço dela. Cada página aplica as permissões de quem a vê por conta própria.
- A página inicial não encontra novas páginas sozinha. Peça à sua ferramenta de IA para adicionar cada uma.

## Artigos relacionados

- [Compartilhar uma Página de Status em Tempo Real com um Cliente](/docs/ai/connector/ai-connector-client-status-page)
- [Criar um Relatório a Partir dos Seus Dados](/docs/ai/connector/ai-connector-reports)
- [Portais de Clientes](/docs/ai/ai-portals)
