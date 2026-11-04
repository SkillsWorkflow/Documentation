---
id: ai-connector-wall-displays
title: Pôr os Números da Sua Agência num Ecrã
description: "Um quadro que a sua ferramenta de IA publica para uma TV no estúdio: o que tem entrega nas próximas duas semanas, o que está à espera do cliente e o que está atrasado, em letra grande e que se atualiza sozinho. Em preview."
sidebar_label: Números num Ecrã do Estúdio
sidebar_position: 9
---

:::preview
Isto ainda não está disponível. O exemplo abaixo foi construído com o conector num tenant de demonstração para mostrar como se espera que funcione, e a funcionalidade final pode ser diferente.
:::

Ponha no ecrã do estúdio o que a equipa deve ver num relance: o que tem entrega em breve, o que está à espera do cliente e o que já está atrasado. Peça à sua ferramenta de IA um quadro feito para uma TV, legível do outro lado da sala, que se mantém atualizado sozinho.

![img-box-shadow](/img/ai/connector/studio-board.png)
<figcaption>O quadro de estúdio da campanha de Natal do cliente fictício Northwind Coffee num tenant de demonstração, a 1920 × 1080: a entregar nos próximos 14 dias, à espera do cliente e atrasados.</figcaption>

## Comportamento esperado

- O quadro ocupa um ecrã de 1920 × 1080, com poucos valores em letra grande e até cinco deliverables por baixo de cada um.
- Volta a ler os dados a cada 5 minutos e mostra a hora da última atualização. O relógio no canto mostra que o ecrã está ativo.
- No exemplo, o quadro lê a query `DE-Jobs` para os deliverables em aberto de um cliente. Os deliverables atrasados aparecem apenas na coluna Late.

## Regras e comportamento

- O computador ligado ao ecrã precisa de um utilizador do Skills Workflow com sessão iniciada, e o quadro mostra o que esse utilizador pode ver. Use um utilizador que não possa ver custos nem salários.
- Quando a sessão termina, o ecrã mostra o início de sessão do Skills Workflow até alguém voltar a iniciar sessão.

## Artigos relacionados

- [Construir um Relatório a Partir dos Seus Dados](/docs/ai/connector/ai-connector-reports)
- [Acrescentar um Ecrã ao Skills Workflow](/docs/ai/connector/ai-connector-team-screens)
- [Skills Workflow na Sua Ferramenta de IA](/docs/ai/connector)
