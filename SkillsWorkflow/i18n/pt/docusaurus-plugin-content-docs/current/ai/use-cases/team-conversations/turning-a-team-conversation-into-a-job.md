---
id: turning-a-team-conversation-into-a-job
title: Transformar uma Conversa de Equipa num Job
description: "Veja como uma equipa chega a acordo sobre um pedido do cliente no Chat e pede ao Skilio que crie o Job a partir do que foi dito, sem que ninguém o tenha de reescrever num formulário."
sidebar_label: Transformar uma Conversa num Job
sidebar_position: 2
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está em preview, a conversa mostra como se espera que o AI Assistant o trate, e o que hoje responde ou faz pode ser diferente deste exemplo.
:::

## Visão geral

Os pedidos dos clientes ganham muitas vezes forma numa conversa rápida: alguém transmite o que o cliente pediu, outra pessoa acrescenta o âmbito e uma terceira fixa o prazo. Quando a equipa estiver de acordo, mencione o **@Skilio** e peça-lhe que crie o Job. O Skilio lê a conversa, encontra o cliente e o projeto e propõe os dados e o briefing do Job. Quem fez o pedido revê-os e aprova.

A agência, o cliente, as pessoas e o Job neste exemplo são ilustrativos.

<Walkthrough
  variant="team"
  conversation="Campanha de Natal Velmont"
  members="4 online · 5 membros"
  subtitle="Uma equipa de contas chega a acordo sobre um novo pedido no Chat e pede ao Skilio que crie o Job."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Do acordo ao Job">
        O que a equipa combinou na conversa passa a ser o título, a descrição e o briefing do Job, para que nada se perca entre o chat e o formulário.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Combinem o pedido na conversa: cliente, âmbito e prazo.',
          'Mencione o @Skilio e peça-lhe que crie o Job.',
          'Confirme o cliente, o projeto, o departamento e o Job Type que propõe.',
          'Reveja os dados e selecione Aprovar.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          '@Skilio cria o Job a partir do que combinámos acima.',
          '@Skilio cria-o no projeto Velmont Christmas 2026.',
          '@Skilio muda o prazo para 12 de dezembro antes de o criares.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'O Skilio usa as mensagens desta conversa. Diga na conversa tudo o que ele deve incluir.',
          'Quando o nome de um cliente ou projeto corresponde a mais do que um registo, o Skilio pergunta qual é.',
          'Só a pessoa que mencionou o Skilio pode aprovar o Job.',
        ]}
      />
    </>
  }
>
  <Walkthrough.DateSeparator label="Hoje" />

  <Walkthrough.Message sender="me" name="Ana Costa" time="11:40" avatar="/img/ai/avatars/ana-costa.svg">
    <p>Acabei de sair de uma chamada com a Velmont. Querem um poster para loja para a gama de presentes de Natal, em A2 e A3, com o mesmo look do site.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="member" name="Sofia Marques" time="11:42" avatar="/img/ai/avatars/sofia-marques.svg">
    <p>É fácil de adaptar a partir do hero banner. Duas rondas de alterações devem chegar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="member" name="Rui Santos" time="11:44" avatar="/img/ai/avatars/rui-santos.svg">
    <p>A gráfica precisa dos ficheiros finais até 10 de dezembro. Ana, consegues abri-lo?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="me" name="Ana Costa" time="11:46" avatar="/img/ai/avatars/ana-costa.svg">
    <p>@Skilio cria o Job a partir do que combinámos acima.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio" time="11:48">
    <p>Os dados do Job estão prontos para revisão.</p>
    <Walkthrough.FieldTable
      rows={[
        ['Cliente', 'Velmont Bakery'],
        ['Projeto', 'Velmont Christmas 2026'],
        ['Tipo de objeto de negócio', 'Job'],
        ['Departamento', 'Creative'],
        ['Job Type', 'Print Design'],
        ['Título', 'Velmont Christmas 2026 – In-store Poster'],
        ['Descrição', 'Poster para loja para a gama de presentes de Natal, em A2 e A3, adaptado do hero banner do site da campanha, com duas rondas de alterações'],
        ['Prazo', '10 de dezembro de 2026'],
        ['Briefing', 'Preparado a partir desta conversa nas secções de briefing de Print Design'],
      ]}
    />
    <Walkthrough.Actions items={[{ label: 'Fazer alterações' }, { label: 'Aprovar', primary: true }]} />
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio" time="11:50">
    <p>O Job foi criado.</p>
    <Walkthrough.CreatedJobCard
      label="Job criado"
      title="Velmont Christmas 2026 – In-store Poster"
      number="1058"
      rows={[
        ['Número Entrega', '1058'],
        ['Cliente', 'Velmont Bakery'],
        ['Projeto', 'Velmont Christmas 2026'],
        ['Departamento', 'Creative'],
        ['Tipo de job', 'Print Design'],
        ['Prazo', '10 de dezembro de 2026'],
      ]}
      actions={['Abrir popup', 'Navegar']}
    />
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Criar um Job a Partir de um Email do Cliente](/docs/ai/use-cases/projects-and-jobs/creating-a-job-from-a-client-email)
- [Chat](/docs/product/files-and-collaboration/chat)
- [AI Assistant](/docs/ai/ai-assistant)
