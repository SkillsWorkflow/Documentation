---
id: ai-connector-client-status-page
title: Partilhar uma Página de Estado em Tempo Real com um Cliente
description: "Peça à sua ferramenta de IA uma página que mostre a um cliente o estado da sua campanha, os seus deliverables e o que está à espera dele, publicada num só endereço que mostra sempre os dados de hoje."
sidebar_label: Uma Página de Estado para um Cliente
sidebar_position: 3
---

Dê a um cliente um só endereço onde vê como está a correr o trabalho: o progresso da campanha, os deliverables a entregar e as aprovações que estão à espera dele. Peça a página à sua ferramenta de IA, reveja-a e envie o endereço ao cliente. A página lê o Skills Workflow sempre que é aberta, por isso ninguém a atualiza à mão.

![img-box-shadow](/img/ai/connector/client-status-page.png)
<figcaption>Uma página de estado publicada com o conector num tenant de demonstração, para o cliente fictício Northwind Coffee: o progresso, três contadores, os deliverables à espera do cliente e todos os deliverables com a sua etapa e data de entrega.</figcaption>

## Disponibilidade

Disponível. Precisa do [conector do Skills Workflow na sua ferramenta de IA](/docs/ai/connector/ai-connector-setup). O cliente inicia sessão com o seu próprio utilizador do Skills Workflow e vê apenas os projetos e jobs que esse utilizador pode ver.

## Como pedir

1. Indique o cliente e o projeto, e diga o que o cliente deve ver. A página acima foi construída a partir da query `DE-Jobs`, filtrada para um cliente e um projeto.
2. Diga que etapa significa "à espera do cliente". Os nomes das etapas são os configurados no seu tenant, e a página mostra-os tal como estão.
3. Deixe a ferramenta de IA publicar a página. Dá-lhe o endereço, `/portal/{client}/{page}/`.
4. Abra o endereço como um utilizador com as permissões do cliente antes de o enviar.

## Regras e comportamento

- O endereço tem duas partes, o cliente e a página. Ambas usam apenas letras minúsculas, números e hífenes.
- Pedir uma alteração volta a publicar a página inteira no mesmo endereço. O cliente mantém a mesma ligação.
- Uma página publicada pela primeira vez pode responder "não encontrada" durante pouco tempo antes de abrir.
- Abrir a página sem sessão mostra o início de sessão do Skills Workflow e volta à página a seguir.

## Artigos relacionados

- [Um Endereço para Tudo o que um Cliente Abre](/docs/ai/connector/ai-connector-client-hub)
- [Construir um Relatório a Partir dos Seus Dados](/docs/ai/connector/ai-connector-reports)
- [Portais de Cliente](/docs/ai/ai-portals)
- [Ligar o Claude, o Codex ou o GitHub Copilot ao Skills Workflow](/docs/ai/connector/ai-connector-setup)
