---
id: discussing-a-resource-overrun-notification
title: Discutir uma Notificação de Derrapagem de Recursos
description: "Veja como um gestor de projetos pergunta ao AI Assistant porque é que um job ultrapassou as horas planeadas, lê um resumo do Feed, dos comentários e dos ficheiros do job, e pede à equipa no Feed que confirme a causa e os próximos passos."
sidebar_label: Discutir uma Notificação de Derrapagem de Recursos
sidebar_position: 8
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Quando o AI Assistant lhe disser que alguém registou num job mais horas do que as planeadas, pergunte-lhe porquê. O assistente lê o Feed do job, os comentários e as respostas, a descrição e os ficheiros anexados, e resume o que explica as horas a mais. Depois pode pedir-lhe para publicar um comentário no Feed do job, mencionando as pessoas que têm de confirmar a causa e decidir o que acontece a seguir. Revê o comentário antes de ser publicado.

:::note Preview
Este caso de uso está em preview e ainda não foi testado de ponta a ponta. A conversa mostra como se espera que o AI Assistant o trate, e o que hoje responde ou faz pode ser diferente deste exemplo.
:::

A agência, o cliente, as pessoas, o job, os comentários e as horas neste exemplo são ilustrativos. O assistente só lê documentos e comentários a que tem acesso.

<Walkthrough
  subtitle="Exemplo de conversa entre um gestor de projetos e o AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De uma derrapagem a uma conversa">
        O assistente transforma o histórico do job numa explicação curta da derrapagem e inicia a discussão com as pessoas certas no Feed do job.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Pergunte porque é que o job ultrapassou as horas planeadas.',
          'Leia o resumo e confira os comentários e os ficheiros em que se baseia.',
          'Peça ao assistente para publicar um comentário no Feed do job e diga quem mencionar.',
          'Reveja o comentário e selecione Publicar.',
          'Acompanhe as respostas no Feed do job.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Porque é que a Anna ultrapassou as horas planeadas no Campaign Website?',
          'O que mudou neste job desde que foi planeado?',
          'Pergunta à equipa no Feed se precisamos de mais horas.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'O resumo baseia-se no que foi escrito no job. Quando ninguém registou o motivo, o assistente di-lo.',
          'O comentário é publicado no Feed do job com o seu nome, e as pessoas que mencionar são notificadas.',
          'O assistente pede a sua aprovação antes de publicar. Selecione Negar para deixar o Feed como está.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>A Anna Smith registou 46 horas no Campaign Website, mais 16 horas do que as 30 planeadas.</strong> O job pertence ao projeto Northwind Christmas 2026 e tem conclusão prevista para 20 de novembro.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Porque é que isto aconteceu?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>As horas a mais vêm de uma alteração de âmbito que não foi acrescentada ao planeamento:</strong></p>
    <ul>
      <li>A 19 de outubro, o cliente pediu mais duas landing pages para a gama de presentes de Natal. O David Brown publicou o pedido no Feed.</li>
      <li>A 20 de outubro, a Anna respondeu que as novas páginas precisavam de cerca de mais 15 horas de design.</li>
      <li>O sitemap revisto, <strong>Northwind_Christmas_sitemap_v2.pdf</strong>, foi anexado no mesmo dia e mostra as duas novas páginas.</li>
      <li>O planeamento e a descrição do job não foram atualizados depois da alteração.</li>
    </ul>
    <p>Ninguém confirmou se as páginas extra são faturáveis ao cliente.</p>
    <Walkthrough.Source label="Feed · 6 publicações · 1 ficheiro" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Publica no Feed do job a pedir ao David e à Anna que confirmem o novo âmbito, se é faturável e de quantas horas mais a Anna precisa até ao fim.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Publicar um comentário"
      subtitle="Revê o comentário antes de eu o publicar."
      rows={[
        ['Job', 'Campaign Website'],
        ['Menções', 'David Brown, Anna Smith'],
        ['Comentário', 'A Anna registou 46h face a 30h planeadas, depois das duas landing pages acrescentadas a 19 de outubro. Podem confirmar o novo âmbito, se é faturável à Northwind Coffee e de quantas horas mais a Anna precisa para terminar o job?'],
      ]}
      actions={[{ label: 'Negar' }, { label: 'Publicar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revi o comentário e selecionei Publicar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Publicado" label="Campaign Website" />
    <p>O comentário está no Feed do job. O David e a Anna foram notificados.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Receber Notificações Sobre Problemas de Recursos](/docs/ai/use-cases/resource-management/receiving-notifications-about-resource-issues)
- [Utilizar o Feed](/docs/product/files-and-collaboration/using-feed)
- [Tipos de notificação](/docs/product/notifications/notification-types)
- [AI Assistant](/docs/ai/ai-assistant)
