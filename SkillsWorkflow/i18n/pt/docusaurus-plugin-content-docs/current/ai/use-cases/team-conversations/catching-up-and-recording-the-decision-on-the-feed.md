---
id: catching-up-and-recording-the-decision-on-the-feed
title: Pôr-se a Par de uma Conversa e Registar a Decisão
description: "Veja como uma pessoa adicionada a um grupo do Chat pede ao Skilio um resumo do que foi decidido e depois publica a decisão no Feed do Job, para que não fique apenas no chat."
sidebar_label: Pôr-se a Par e Registar a Decisão
sidebar_position: 3
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está em preview, a conversa mostra como se espera que o AI Assistant o trate, e o que hoje responde ou faz pode ser diferente deste exemplo.
:::

## Visão geral

Quando entra numa conversa que já decorre há algum tempo, mencione o **@Skilio** e pergunte o que foi decidido. O Skilio resume a conversa: as decisões, quem é responsável por quê e o que ainda está em aberto. As decisões tomadas no Chat ficam no Chat, por isso pode depois pedir ao Skilio que as publique no Feed do Job, onde o resto da equipa e o histórico do Job as encontram. Revê o comentário antes de ser publicado.

A agência, o cliente, as pessoas, o Job e as mensagens neste exemplo são ilustrativos.

<Walkthrough
  variant="team"
  conversation="Campanha de Natal Velmont"
  members="3 online · 6 membros"
  subtitle="Uma gestora financeira entra numa conversa de grupo e regista a decisão no Feed do Job."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Do chat ao registo">
        O Skilio transforma uma conversa longa num resumo curto para quem chega mais tarde e leva a decisão para o Job, onde deve ficar.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Mencione o @Skilio e pergunte o que foi decidido.',
          'Confirme o resumo com as pessoas da conversa.',
          'Peça ao Skilio que publique a decisão no Feed do Job e diga quem mencionar.',
          'Reveja o comentário e selecione Publicar.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          '@Skilio o que decidimos aqui?',
          '@Skilio o que ainda está em aberto?',
          '@Skilio publica a decisão no Feed do Job e menciona a Ana.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'O resumo baseia-se apenas nas mensagens desta conversa.',
          'O comentário é publicado no Feed do Job com o seu nome, e as pessoas que mencionar são notificadas.',
          'Selecione Negar para deixar o Feed como está.',
        ]}
      />
    </>
  }
>
  <Walkthrough.DateSeparator label="Hoje" />

  <Walkthrough.Message sender="member" name="Rui Santos" time="15:05" avatar="/img/ai/avatars/rui-santos.svg">
    <p>Estou a adicionar a Laura, do Financeiro, para ela ver a alteração.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="me" name="Laura Bennett" time="15:07" avatar="/img/ai/avatars/laura-bennett.svg">
    <p>Olá a todos. @Skilio o que decidiram aqui?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio" time="15:09">
    <p><strong>A equipa decidiu entregar o site da campanha de Natal da Velmont uma semana mais cedo:</strong></p>
    <ul>
      <li>O cliente antecipou a entrega de 22 para 15 de dezembro. A Ana Costa confirmou-o na chamada.</li>
      <li>A Sofia Marques passa a ser a Executor no Campaign Website. O Rui Santos adicionou-a à equipa.</li>
      <li>Foi acrescentado um poster para loja como novo Job, Velmont Christmas 2026 – In-store Poster (1058), com prazo a 10 de dezembro.</li>
    </ul>
    <p><strong>Ainda em aberto:</strong> se a entrega antecipada tem uma taxa de urgência para o cliente. Ninguém o confirmou.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="me" name="Laura Bennett" time="15:11" avatar="/img/ai/avatars/laura-bennett.svg">
    <p>Obrigada. O contrato deles tem uma taxa de urgência. @Skilio publica esta decisão no Feed do Campaign Website, diz que a taxa de urgência se aplica e menciona a Ana para ela avisar o cliente.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio" time="15:13">
    <Walkthrough.ApprovalCard
      title="Publicar um comentário"
      subtitle="Revê o comentário antes de eu o publicar."
      rows={[
        ['Job', 'Velmont Christmas 2026 – Campaign Website'],
        ['Menções', 'Ana Costa'],
        ['Comentário', 'Entrega antecipada de 22 para 15 de dezembro a pedido do cliente. A Sofia Marques é agora a Executor. A taxa de urgência do contrato aplica-se à entrega antecipada. Ana, podes avisar a Velmont Bakery?'],
      ]}
      actions={[{ label: 'Negar' }, { label: 'Publicar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio" time="15:15">
    <Walkthrough.StatusChip status="Publicado" label="Velmont Christmas 2026 – Campaign Website" />
    <p>O comentário está no Feed do Job. A Ana foi notificada.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Discutir uma Notificação de Derrapagem de Recursos](/docs/ai/use-cases/resource-management/discussing-a-resource-overrun-notification)
- [Utilizar o Feed](/docs/product/files-and-collaboration/using-feed)
- [Chat](/docs/product/files-and-collaboration/chat)
