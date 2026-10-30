---
id: ai-connector-reports
title: Criar um Relatório a Partir dos Seus Dados
description: "Peça à sua ferramenta de IA um relatório com tabelas e gráficos baseado nas consultas de extração de dados do Skills Workflow, publicado em um endereço que calcula os números quando é aberto."
sidebar_label: Um Relatório a Partir dos Seus Dados
sidebar_position: 5
---

Peça à sua ferramenta de IA o relatório que, de outra forma, você montaria em uma planilha. Ela o monta com base nas suas consultas de extração de dados, as mesmas por trás dos relatórios do Skills Workflow, e o publica com tabelas e gráficos. Os números são calculados quando alguém abre o relatório.

![img-box-shadow](/img/ai/connector/campaign-report.png)
<figcaption>Um relatório de campanha publicado com o conector em um tenant de demonstração: as entregas por etapa, as entregas previstas por semana e as entregas em aberto, tudo a partir da consulta DE-Jobs.</figcaption>

## Disponibilidade

Disponível. Você precisa do [conector do Skills Workflow na sua ferramenta de IA](/docs/ai/connector/ai-connector-setup). O relatório lê as consultas de extração de dados publicadas no seu tenant; a lista está em [Data Extraction API](/docs/build-and-extend/api/data-extraction-api). Uma pergunta que nenhuma consulta responde precisa primeiro da consulta.

## Como pedir

1. Diga para quem é o relatório, a pergunta que ele responde e o período.
2. Indique os números. A ferramenta de IA escolhe a consulta e as colunas; confira quais.
3. Peça apenas as colunas que o relatório mostra. Uma pessoa com permissão para executar uma consulta recebe todas as colunas que o relatório pede, incluindo custos e valores de hora, mesmo quando a página não as exibe.
4. Abra o relatório como alguém que não tem permissão para executar a consulta. O relatório deve dizer a essa pessoa que ela não tem acesso, e não mostrar uma tabela vazia.

## Regras e comportamento

- As consultas são somente leitura. Um relatório nunca altera dados.
- Cada consulta verifica os seus perfis. Uma pessoa sem eles tem os dados recusados no relatório, como acontece no Skills Workflow.
- Os gráficos são desenhados dentro da página. Um relatório não pode carregar bibliotecas de gráficos nem qualquer outra coisa de outro site.
- O relatório mostra os dados como estão no momento em que é aberto. Um relatório para imprimir ou enviar, com os números de um determinado momento, está planejado: veja [Imprimir ou Enviar um Relatório Como Está Hoje](/docs/ai/connector/ai-connector-printable-reports).

## Artigos relacionados

- [Data Extraction API](/docs/build-and-extend/api/data-extraction-api)
- [Compartilhar uma Página de Status em Tempo Real com um Cliente](/docs/ai/connector/ai-connector-client-status-page)
- [Portais de Clientes](/docs/ai/ai-portals)
