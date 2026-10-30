---
id: ai-connector-client-hub
title: Um Endereço para Tudo o que um Cliente Abre
description: "Peça à sua ferramenta de IA a página inicial de um cliente: um só endereço com ligações para todas as páginas de estado e relatórios que publica para ele, com um valor em tempo real ao lado de cada ligação."
sidebar_label: Um Endereço por Cliente
sidebar_position: 4
---

Dê a cada cliente um só endereço para guardar nos favoritos. A sua ferramenta de IA constrói uma página inicial para o cliente com ligações para as páginas que publicou para ele, com um valor em tempo real ao lado de cada ligação.

![img-box-shadow](/img/ai/connector/client-home-page.png)
<figcaption>A página inicial do cliente fictício Northwind Coffee num tenant de demonstração, com ligações para a sua página de estado e o seu relatório, com as aprovações à espera e os deliverables concluídos.</figcaption>

## Disponibilidade

Disponível. Precisa do [conector do Skills Workflow na sua ferramenta de IA](/docs/ai/connector/ai-connector-setup) e de pelo menos uma página já publicada para o cliente.

## Como pedir

1. Peça uma página inicial para o cliente e indique as páginas para as quais tem ligações. A ferramenta de IA lê uma página publicada quando lhe dá os nomes do cliente e da página.
2. Diga que valor mostra cada ligação.
3. Deixe a ferramenta de IA publicá-la no endereço principal do cliente, por exemplo `/portal/{client}/home/`.

## Regras e comportamento

- Uma ligação abre a outra página no seu próprio endereço. Cada página aplica por si as permissões de quem a vê.
- A página inicial não encontra páginas novas sozinha. Peça à sua ferramenta de IA para acrescentar cada uma.

## Artigos relacionados

- [Partilhar uma Página de Estado em Tempo Real com um Cliente](/docs/ai/connector/ai-connector-client-status-page)
- [Construir um Relatório a Partir dos Seus Dados](/docs/ai/connector/ai-connector-reports)
- [Portais de Cliente](/docs/ai/ai-portals)
