---
id: ai-claude-wall-displays
title: Pôr os Números da Sua Agência num Ecrã
description: "Peça ao Claude uma vista feita para uma TV no estúdio ou no escritório: os prazos do dia, a capacidade da semana, as aprovações à espera, atualizada sozinha."
sidebar_label: Números num Ecrã no Estúdio
sidebar_position: 9
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Isto está em preview e ainda não foi testado de ponta a ponta. É construído com o que o Skills Workflow oferece hoje; deixe-o a correr no ecrã durante um dia antes de contar com ele.
:::

Ponha num ecrã na parede o que a equipa deve ver num relance: os prazos do dia, quem está acima da capacidade esta semana, os jobs à espera dos clientes. Peça ao Claude uma vista feita para uma TV, legível do outro lado da sala e que se atualiza sozinha.

## Disponibilidade

Preview. Precisa do [conector do Skills Workflow no Claude](/docs/ai/claude/ai-claude-connect) e de um utilizador do Skills Workflow com sessão iniciada no computador ligado ao ecrã. O ecrã mostra o que esse utilizador pode ver.

## Como pedir

1. Diga que é para uma TV, o tamanho dela e a que distância as pessoas a leem.
2. Indique os valores, no máximo meia dúzia, e de quanto em quanto tempo se atualizam.
3. Inicie sessão no computador do ecrã com um utilizador que vê apenas o que a sala deve ver, e abra o endereço em ecrã inteiro.

A agência, as pessoas e os números neste exemplo são ilustrativos.

<Walkthrough
  title="Claude"
  subtitle="Exemplo de conversa entre um gestor de estúdio e o Claude."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="O quadro do estúdio, sempre atualizado">
        Letra grande, poucos valores e uma atualização a cada poucos minutos.
      </Walkthrough.CapabilityCard>
      <Walkthrough.NoteCard
        items={[
          'Escolha com cuidado o utilizador com sessão iniciada: todos na sala veem o que esse utilizador vê.',
          'Quando a sessão termina, o ecrã mostra o início de sessão do Skills Workflow até alguém voltar a iniciar sessão.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Cria um quadro para a TV do estúdio: os prazos de hoje, os jobs à espera dos clientes e quem está acima dos 100% esta semana. Atualiza a cada cinco minutos.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <p>O quadro tem três colunas, com letra legível a alguns metros:</p>
    <Walkthrough.DataTable
      columns={['Prazos de hoje', 'À espera dos clientes', 'Acima da capacidade']}
      rows={[
        ['7 jobs, 2 atrasados', '11 jobs, o mais antigo há 9 dias', 'Anna 112%, Rui 104%'],
      ]}
      note="Atualiza-se a cada cinco minutos e mostra a hora da última atualização num canto."
    />
    <Walkthrough.StatusChip status="Publicado" label="studio/board" />
  </Walkthrough.Message>
</Walkthrough>

## Regras e comportamento

- A vista volta a ler os dados a cada atualização. Nunca altera dados.
- Um ecrã numa sala partilhada mostra o que o utilizador com sessão iniciada vê. Não inicie sessão com um utilizador que possa ver custos ou salários.

## Artigos relacionados

- [Construir um Relatório a Partir dos Seus Dados](/docs/ai/claude/ai-claude-reports)
- [Acrescentar um Ecrã ao Skills Workflow](/docs/ai/claude/ai-claude-team-screens)
- [Skills Workflow no Claude](/docs/ai/claude)
