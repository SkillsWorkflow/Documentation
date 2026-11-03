---
id: catching-up-and-recording-the-decision-on-the-feed
title: Se Atualizar sobre uma Conversa e Registrar a Decisão
description: "Veja como uma pessoa adicionada a um grupo do Chat pede ao Skilio um resumo do que foi decidido e depois faz com que a decisão seja publicada no Feed da Atividade, para que ela não fique só no chat."
sidebar_label: Se Atualizar e Registrar a Decisão
sidebar_position: 3
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está em preview, a conversa mostra como se espera que o Assistente de IA lide com ele, e o que ele responde ou faz hoje pode ser diferente deste exemplo.
:::

## Visão geral

Quando você entra em uma conversa que já está acontecendo há algum tempo, mencione **@Skilio** e pergunte o que foi decidido. O Skilio resume a conversa: as decisões, quem é responsável pelo quê e o que ainda está em aberto. As decisões tomadas no Chat ficam no Chat, então você pode pedir ao Skilio que as publique no Feed da Atividade, onde o restante da equipe e o histórico da Atividade podem encontrá-las. Você revisa o comentário antes de ele ser publicado.

A agência, o cliente, as pessoas, a Atividade e as mensagens deste exemplo são ilustrativos.

<Walkthrough
  variant="team"
  conversation="Campanha de Natal Velmont"
  members="3 online · 6 membros"
  subtitle="Uma gerente financeira entra em uma conversa de grupo e registra a decisão no Feed da Atividade."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Do chat ao registro">
        O Skilio transforma uma conversa longa em um resumo curto para quem chega depois e leva a decisão para a Atividade, onde ela deve ficar.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Mencione @Skilio e pergunte o que foi decidido.',
          'Confira o resumo com as pessoas da conversa.',
          'Peça ao Skilio que publique a decisão no Feed da Atividade e diga quem mencionar.',
          'Revise o comentário e selecione Publicar.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          '@Skilio o que decidimos aqui?',
          '@Skilio o que ainda está em aberto?',
          '@Skilio publique a decisão no Feed da Atividade e mencione a Ana.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'O resumo se baseia apenas nas mensagens desta conversa.',
          'O comentário é publicado no Feed da Atividade com o seu nome, e as pessoas mencionadas são notificadas.',
          'Selecione Negar para deixar o Feed como está.',
        ]}
      />
    </>
  }
>
  <Walkthrough.DateSeparator label="Hoje" />

  <Walkthrough.Message sender="member" name="Rui Santos" time="15:05" avatar="/img/ai/avatars/rui-santos.svg">
    <p>Estou adicionando a Laura, do Financeiro, para ela ver a mudança.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="me" name="Laura Bennett" time="15:07" avatar="/img/ai/avatars/laura-bennett.svg">
    <p>Oi, pessoal. @Skilio o que vocês decidiram aqui?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio" time="15:09">
    <p><strong>A equipe decidiu entregar o site da campanha de Natal da Velmont uma semana antes:</strong></p>
    <ul>
      <li>O cliente antecipou a entrega de 22 para 15 de dezembro. A Ana Costa confirmou na ligação.</li>
      <li>A Sofia Marques assume como Executor no Campaign Website. O Rui Santos a adicionou à equipe.</li>
      <li>Um cartaz para as lojas foi adicionado como nova Atividade, Velmont Christmas 2026 – In-store Poster (1058), com prazo em 10 de dezembro.</li>
    </ul>
    <p><strong>Ainda em aberto:</strong> se a entrega antecipada tem uma taxa de urgência para o cliente. Ninguém confirmou.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="me" name="Laura Bennett" time="15:11" avatar="/img/ai/avatars/laura-bennett.svg">
    <p>Obrigada. Existe uma taxa de urgência no contrato deles. @Skilio publique esta decisão no Feed do Campaign Website, diga que a taxa de urgência se aplica e mencione a Ana para ela avisar o cliente.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio" time="15:13">
    <Walkthrough.ApprovalCard
      title="Publicar um comentário"
      subtitle="Revise o comentário antes de eu publicá-lo."
      rows={[
        ['Atividade', 'Velmont Christmas 2026 – Campaign Website'],
        ['Menções', 'Ana Costa'],
        ['Comentário', 'A entrega foi antecipada de 22 para 15 de dezembro a pedido do cliente. A Sofia Marques agora é Executor. A taxa de urgência do contrato se aplica à entrega antecipada. Ana, você pode avisar a Velmont Bakery?'],
      ]}
      actions={[{ label: 'Negar' }, { label: 'Publicar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio" time="15:15">
    <Walkthrough.StatusChip status="Publicado" label="Velmont Christmas 2026 – Campaign Website" />
    <p>O comentário está no Feed da Atividade. A Ana foi notificada.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Discutir uma Notificação de Horas Acima do Planejado](/docs/ai/use-cases/resource-management/discussing-a-resource-overrun-notification)
- [Usando o Feed](/docs/product/files-and-collaboration/using-feed)
- [Chat](/docs/product/files-and-collaboration/chat)
