---
id: turning-a-team-conversation-into-a-job
title: Transformar uma Conversa de Equipe em uma Atividade
description: "Veja como uma equipe combina um pedido do cliente no Chat e pede ao Skilio que crie a Atividade a partir do que foi dito, sem que ninguém precise digitá-lo de novo em um formulário."
sidebar_label: Transformar uma Conversa em uma Atividade
sidebar_position: 2
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está em preview, a conversa mostra como se espera que o Assistente de IA lide com ele, e o que ele responde ou faz hoje pode ser diferente deste exemplo.
:::

## Visão geral

Os pedidos dos clientes muitas vezes tomam forma em uma conversa rápida: alguém repassa o que o cliente pediu, outra pessoa acrescenta o escopo, uma terceira define o prazo. Quando a equipe chegar a um acordo, mencione **@Skilio** e peça que ele crie a Atividade. O Skilio lê a conversa, encontra o cliente e o projeto e propõe os dados e o brief da Atividade. Quem fez o pedido revisa e aprova.

A agência, o cliente, as pessoas e a Atividade deste exemplo são ilustrativos.

<Walkthrough
  variant="team"
  conversation="Campanha de Natal Velmont"
  members="4 online · 5 membros"
  subtitle="Uma equipe de contas combina um novo pedido no Chat e pede ao Skilio que crie a Atividade."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Do acordo à Atividade">
        O que a equipe combinou na conversa vira o título, a descrição e o brief da Atividade, para que nada se perca entre o chat e o formulário.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Combine o pedido na conversa: cliente, escopo e prazo.',
          'Mencione @Skilio e peça que ele crie a Atividade.',
          'Confira o cliente, o projeto, o departamento e o Tipo de Atividade que ele propõe.',
          'Revise os dados e selecione Aprovar.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          '@Skilio crie a Atividade a partir do que combinamos acima.',
          '@Skilio crie no projeto Velmont Christmas 2026.',
          '@Skilio mude o prazo para 12 de dezembro antes de criar.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'O Skilio usa as mensagens desta conversa. Diga na conversa tudo o que ele deve incluir.',
          'Quando o nome de um cliente ou projeto corresponde a mais de um registro, o Skilio pergunta qual é.',
          'Só a pessoa que mencionou o Skilio pode aprovar a Atividade.',
        ]}
      />
    </>
  }
>
  <Walkthrough.DateSeparator label="Hoje" />

  <Walkthrough.Message sender="me" name="Ana Costa" time="11:40" avatar="/img/ai/avatars/ana-costa.svg">
    <p>Acabei de sair de uma ligação com a Velmont. Eles querem um cartaz para as lojas para a linha de presentes de Natal, em A2 e A3, com o mesmo visual do site.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="member" name="Sofia Marques" time="11:42" avatar="/img/ai/avatars/sofia-marques.svg">
    <p>Dá para adaptar fácil a partir do banner principal. Duas rodadas de alterações devem bastar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="member" name="Rui Santos" time="11:44" avatar="/img/ai/avatars/rui-santos.svg">
    <p>A gráfica precisa dos arquivos finais até 10 de dezembro. Ana, você pode abrir?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="me" name="Ana Costa" time="11:46" avatar="/img/ai/avatars/ana-costa.svg">
    <p>@Skilio crie a Atividade a partir do que combinamos acima.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio" time="11:48">
    <p>Os dados da Atividade estão prontos para revisão.</p>
    <Walkthrough.FieldTable
      rows={[
        ['Cliente', 'Velmont Bakery'],
        ['Projeto', 'Velmont Christmas 2026'],
        ['Tipo de objeto de negócio', 'Atividade'],
        ['Departamento', 'Creative'],
        ['Tipo de atividade', 'Print Design'],
        ['Título', 'Velmont Christmas 2026 – In-store Poster'],
        ['Descrição', 'Cartaz para as lojas da linha de presentes de Natal em A2 e A3, adaptado do banner principal do site da campanha, com duas rodadas de alterações'],
        ['Prazo', '10 de dezembro de 2026'],
        ['Briefing', 'Preparado a partir desta conversa, nas seções de briefing de Print Design'],
      ]}
    />
    <Walkthrough.Actions items={[{ label: 'Fazer alterações' }, { label: 'Aprovar', primary: true }]} />
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio" time="11:50">
    <p>A Atividade foi criada.</p>
    <Walkthrough.CreatedJobCard
      label="Atividade criada"
      title="Velmont Christmas 2026 – In-store Poster"
      number="1058"
      rows={[
        ['Número Atividade', '1058'],
        ['Cliente', 'Velmont Bakery'],
        ['Projeto', 'Velmont Christmas 2026'],
        ['Departamento', 'Creative'],
        ['Tipo de atividade', 'Print Design'],
        ['Prazo', '10 de dezembro de 2026'],
      ]}
      actions={['Abrir popup', 'Navegar']}
    />
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Criar uma Atividade a partir de um E-mail do Cliente](/docs/ai/use-cases/projects-and-jobs/creating-a-job-from-a-client-email)
- [Chat](/docs/product/files-and-collaboration/chat)
- [Assistente de IA](/docs/ai/ai-assistant)
