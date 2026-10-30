---
id: ai-connector-wall-displays
title: Colocar os Números da Sua Agência em uma Tela
description: "Um painel que a sua ferramenta de IA publica para uma TV no estúdio: o que vence nas próximas duas semanas, o que aguarda o cliente e o que está atrasado, em letras grandes e atualizando sozinho. Em preview."
sidebar_label: Números em uma Tela no Estúdio
sidebar_position: 9
---

:::preview
Isto ainda não está disponível. O exemplo abaixo foi criado com o conector em um tenant de demonstração para mostrar como se espera que funcione, e o recurso final pode ser diferente.
:::

Coloque na tela do estúdio o que a equipe deve ver de relance: o que vence em breve, o que aguarda o cliente e o que já está atrasado. Peça à sua ferramenta de IA um painel feito para uma TV, legível do outro lado da sala, que se mantém atualizado sozinho.

![img-box-shadow](/img/ai/connector/studio-board.png)
<figcaption>O painel do estúdio da campanha de Natal do cliente fictício Northwind Coffee em um tenant de demonstração, em 1920 × 1080: o que vence nos próximos 14 dias, o que aguarda o cliente e o que está atrasado.</figcaption>

## Comportamento esperado

- O painel preenche uma tela de 1920 × 1080, com poucos números em letras grandes e até cinco entregas abaixo de cada um.
- Ele lê os dados novamente a cada 5 minutos e mostra a hora da última atualização. O relógio no canto mostra que a tela está ativa.
- No exemplo, o painel lê a consulta `DE-Jobs` para as entregas em aberto de um cliente. As entregas atrasadas aparecem apenas na coluna Late.

## Regras e comportamento

- O computador por trás da tela precisa de um usuário do Skills Workflow com sessão iniciada, e o painel mostra o que esse usuário pode ver. Use um usuário que não possa ver custos nem salários.
- Quando a sessão termina, a tela mostra o login do Skills Workflow até que alguém faça login novamente.

## Artigos relacionados

- [Criar um Relatório a Partir dos Seus Dados](/docs/ai/connector/ai-connector-reports)
- [Adicionar uma Tela ao Skills Workflow](/docs/ai/connector/ai-connector-team-screens)
- [Skills Workflow na Sua Ferramenta de IA](/docs/ai/connector)
