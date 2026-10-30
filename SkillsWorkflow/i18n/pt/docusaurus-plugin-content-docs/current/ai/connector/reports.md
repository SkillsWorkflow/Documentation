---
id: ai-connector-reports
title: Construir um Relatório a Partir dos Seus Dados
description: "Peça à sua ferramenta de IA um relatório com tabelas e gráficos construído sobre as queries de extração de dados do Skills Workflow, publicado num endereço que calcula os valores quando abre."
sidebar_label: Um Relatório a Partir dos Seus Dados
sidebar_position: 5
---

Peça à sua ferramenta de IA o relatório que, de outra forma, montaria numa folha de cálculo. A ferramenta constrói-o sobre as suas queries de extração de dados, as mesmas que estão por trás dos seus relatórios do Skills Workflow, e publica-o com tabelas e gráficos. Os valores são calculados quando alguém abre o relatório.

![img-box-shadow](/img/ai/connector/campaign-report.png)
<figcaption>Um relatório de campanha publicado com o conector num tenant de demonstração: deliverables por etapa, deliverables a entregar por semana e os deliverables em aberto, tudo a partir da query DE-Jobs.</figcaption>

## Disponibilidade

Disponível. Precisa do [conector do Skills Workflow na sua ferramenta de IA](/docs/ai/connector/ai-connector-setup). O relatório lê as queries de extração de dados publicadas no seu tenant; a lista está em [Data Extraction API](/docs/build-and-extend/api/data-extraction-api). Uma pergunta à qual nenhuma query responde precisa primeiro da query.

## Como pedir

1. Diga para quem é o relatório, a que pergunta responde e o período.
2. Indique os valores. A ferramenta de IA escolhe a query e as colunas; verifique quais.
3. Peça apenas as colunas que o relatório mostra. Uma pessoa que pode executar uma query recebe todas as colunas que o relatório pede, incluindo custos e rates, mesmo quando a página não as apresenta.
4. Abra o relatório como alguém que não pode executar a query. O relatório tem de lhe dizer que não tem acesso, e não mostrar uma tabela vazia.

## Regras e comportamento

- As queries são apenas de leitura. Um relatório nunca altera dados.
- Cada query verifica os seus perfis. A uma pessoa sem eles são recusados os dados no relatório, tal como no Skills Workflow.
- Os gráficos são desenhados dentro da página. Um relatório não pode carregar bibliotecas de gráficos nem nada de outro site.
- O relatório mostra os dados tal como estão quando abre. Um relatório para imprimir ou enviar, com os valores de um dado momento, está [planeado](/docs/ai/connector#planned).

## Artigos relacionados

- [Data Extraction API](/docs/build-and-extend/api/data-extraction-api)
- [Partilhar uma Página de Estado em Tempo Real com um Cliente](/docs/ai/connector/ai-connector-client-status-page)
- [Portais de Cliente](/docs/ai/ai-portals)
