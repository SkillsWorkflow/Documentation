---
id: ai-claude-wall-displays
title: Colocar os Números da Sua Agência em uma Tela
description: "Peça ao Claude uma visão feita para uma TV no estúdio ou no escritório: os prazos de hoje, a capacidade da semana, as aprovações pendentes, atualizando sozinha."
sidebar_label: Números em uma Tela no Estúdio
sidebar_position: 9
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Isto está em preview e ainda não foi testado de ponta a ponta. É criado com o que o Skills Workflow oferece hoje; deixe-o rodando na tela por um dia antes de confiar nele.
:::

Coloque em uma tela na parede o que a equipe deve ver com um olhar: os prazos do dia, quem está acima da capacidade nesta semana, as Atividades aguardando clientes. Peça ao Claude uma visão feita para uma TV, legível do outro lado da sala e que se atualiza sozinha.

## Disponibilidade

Preview. Você precisa do [conector do Skills Workflow no Claude](/docs/ai/claude/ai-claude-connect) e de um usuário do Skills Workflow com login no computador ligado à tela. A tela mostra o que esse usuário tem permissão para ver.

## Como pedir

1. Diga que é para uma TV, o tamanho dela e de que distância as pessoas a leem.
2. Indique os números, no máximo uns poucos, e com que frequência eles são atualizados.
3. Faça login no computador da tela com um usuário que vê apenas o que a sala deve ver e abra o endereço em tela cheia.

A agência, as pessoas e os números deste exemplo são ilustrativos.

<Walkthrough
  title="Claude"
  subtitle="Exemplo de conversa entre um gerente de estúdio e o Claude."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="O quadro do estúdio, sempre atualizado">
        Letras grandes, poucos números e uma atualização a cada poucos minutos.
      </Walkthrough.CapabilityCard>
      <Walkthrough.NoteCard
        items={[
          'Escolha com cuidado o usuário com login: todos na sala veem o que esse usuário vê.',
          'Quando a sessão termina, a tela mostra o login do Skills Workflow até alguém fazer login de novo.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Crie um quadro para a TV do estúdio: os prazos de hoje, as Atividades aguardando clientes e quem está acima de 100% nesta semana. Atualize a cada cinco minutos.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <p>O quadro tem três colunas, com letras legíveis a alguns metros:</p>
    <Walkthrough.DataTable
      columns={['Prazos de hoje', 'Aguardando clientes', 'Acima da capacidade']}
      rows={[
        ['7 Atividades, 2 atrasadas', '11 Atividades, a mais antiga há 9 dias', 'Anna 112%, Rui 104%'],
      ]}
      note="Ele se atualiza a cada cinco minutos e mostra a hora da última atualização em um canto."
    />
    <Walkthrough.StatusChip status="Publicado" label="studio/board" />
  </Walkthrough.Message>
</Walkthrough>

## Regras e comportamento

- A visão lê os dados de novo a cada atualização. Ela nunca altera dados.
- Uma tela em uma sala compartilhada mostra o que o usuário com login vê. Não faça login com um usuário que possa ver custos ou salários.

## Artigos relacionados

- [Criar um Relatório a Partir dos Seus Dados](/docs/ai/claude/ai-claude-reports)
- [Adicionar uma Tela ao Skills Workflow](/docs/ai/claude/ai-claude-team-screens)
- [Skills Workflow no Claude](/docs/ai/claude)
