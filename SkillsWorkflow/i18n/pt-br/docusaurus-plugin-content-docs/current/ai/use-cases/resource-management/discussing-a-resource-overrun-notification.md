---
id: discussing-a-resource-overrun-notification
title: Discutir uma Notificação de Horas Acima do Planejado
description: "Veja como um gerente de projetos pergunta ao Assistente de IA por que uma Atividade ultrapassou as horas planejadas, lê um resumo do Feed, dos comentários e dos arquivos da Atividade e pede à equipe, no Feed, que confirme a causa e os próximos passos."
sidebar_label: Discutir uma Notificação de Horas Acima do Planejado
sidebar_position: 8
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está em preview, a conversa mostra como se espera que o Assistente de IA lide com ele, e o que ele responde ou faz hoje pode ser diferente deste exemplo.
:::

## Visão geral

Quando o Assistente de IA avisar que alguém registrou mais horas em uma Atividade do que o planejado, pergunte o motivo. O assistente lê o Feed da Atividade, os comentários e as respostas, a descrição e os arquivos anexados, e resume o que explica as horas a mais. Em seguida, você pode pedir que ele publique um comentário no Feed da Atividade, mencionando as pessoas que precisam confirmar a causa e decidir o que acontece a seguir. Você revisa o comentário antes de ele ser publicado.

A agência, o cliente, as pessoas, a Atividade, os comentários e as horas deste exemplo são ilustrativos. O assistente só lê documentos e comentários aos quais você tem acesso.

<Walkthrough
  subtitle="Exemplo de conversa entre um gerente de projetos e o Assistente de IA."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Das horas a mais a uma conversa">
        O assistente transforma o histórico da Atividade em uma explicação curta das horas a mais e inicia a discussão com as pessoas certas no Feed da Atividade.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Pergunte por que a Atividade ultrapassou as horas planejadas.',
          'Leia o resumo e confira os comentários e os arquivos em que ele se baseia.',
          'Peça ao assistente que publique um comentário no Feed da Atividade e diga quem mencionar.',
          'Revise o comentário e selecione Publicar.',
          'Acompanhe as respostas no Feed da Atividade.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Por que a Anna ultrapassou as horas planejadas no Campaign Website?',
          'O que mudou nesta Atividade desde que ela foi planejada?',
          'Pergunte à equipe no Feed se precisamos de mais horas.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'O resumo se baseia no que foi escrito na Atividade. Quando ninguém registrou o motivo, o assistente avisa.',
          'O comentário é publicado no Feed da Atividade com o seu nome, e as pessoas mencionadas são notificadas.',
          'O assistente pede a sua aprovação antes de publicar. Selecione Negar para deixar o Feed como está.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>A Anna Smith registrou 46 horas no Campaign Website, 16 horas a mais do que as 30 planejadas.</strong> A Atividade pertence ao projeto Northwind Christmas 2026 e vence em 20 de novembro.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Por que isso aconteceu?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>As horas a mais vêm de uma mudança de escopo que não foi incluída no planejamento:</strong></p>
    <ul>
      <li>Em 19 de outubro, o cliente pediu mais duas landing pages para a linha de presentes de Natal. O David Brown publicou o pedido no Feed.</li>
      <li>Em 20 de outubro, a Anna respondeu que as novas páginas precisavam de cerca de 15 horas a mais de design.</li>
      <li>O sitemap revisado, <strong>Northwind_Christmas_sitemap_v2.pdf</strong>, foi anexado no mesmo dia e mostra as duas novas páginas.</li>
      <li>O planejamento e a descrição da Atividade não foram atualizados depois da mudança.</li>
    </ul>
    <p>Ninguém confirmou se as páginas extras podem ser cobradas do cliente.</p>
    <Walkthrough.Source label="Feed · 6 publicações · 1 arquivo" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Publique no Feed da Atividade pedindo ao David e à Anna que confirmem o novo escopo, se ele pode ser cobrado e de quantas horas a mais a Anna precisa até o fim.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Publicar um comentário"
      subtitle="Revise o comentário antes de eu publicá-lo."
      rows={[
        ['Atividade', 'Campaign Website'],
        ['Menções', 'David Brown, Anna Smith'],
        ['Comentário', 'A Anna registrou 46h contra 30h planejadas, depois das duas landing pages adicionadas em 19 de outubro. Vocês podem confirmar o novo escopo, se ele pode ser cobrado da Northwind Coffee e de quantas horas a mais a Anna precisa para terminar a Atividade?'],
      ]}
      actions={[{ label: 'Negar' }, { label: 'Publicar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revisei o comentário e selecionei Publicar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Publicado" label="Campaign Website" />
    <p>O comentário está no Feed da Atividade. O David e a Anna foram notificados.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Receber Notificações sobre Problemas de Recursos](/docs/ai/use-cases/resource-management/receiving-notifications-about-resource-issues)
- [Usando o Feed](/docs/product/files-and-collaboration/using-feed)
- [Tipos de notificação](/docs/product/notifications/notification-types)
- [Assistente de IA](/docs/ai/ai-assistant)
