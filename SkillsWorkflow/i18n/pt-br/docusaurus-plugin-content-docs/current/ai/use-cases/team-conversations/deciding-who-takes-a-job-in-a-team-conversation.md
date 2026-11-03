---
id: deciding-who-takes-a-job-in-a-team-conversation
title: Decidir Quem Assume uma Atividade em uma Conversa de Equipe
description: "Veja como um diretor de contas e um gerente de tráfego perguntam ao Skilio, dentro da conversa do Chat, quem está livre para um novo prazo e atribuem a pessoa escolhida à equipe da Atividade."
sidebar_label: Decidir Quem Assume uma Atividade
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está em preview, a conversa mostra como se espera que o Assistente de IA lide com ele, e o que ele responde ou faz hoje pode ser diferente deste exemplo.
:::

## Visão geral

Quando uma decisão está sendo tomada em uma conversa do Chat, qualquer pessoa da conversa pode mencionar **@Skilio** para trazer os dados. Aqui, o cliente antecipou um prazo. O diretor de contas e o gerente de tráfego perguntam ao Skilio quem está livre, escolhem uma pessoa na conversa e pedem ao Skilio que a adicione à equipe da Atividade. Quem fez o pedido aprova a alteração antes que ela seja feita.

A agência, o cliente, as pessoas, a Atividade e as horas deste exemplo são ilustrativos.

<Walkthrough
  variant="team"
  conversation="Campanha de Natal Velmont"
  members="3 online · 5 membros"
  subtitle="Um diretor de contas e um gerente de tráfego decidem no Chat, com o Skilio na conversa."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De uma pergunta a uma decisão">
        O Skilio responde na conversa, para que todos trabalhem com os mesmos números e a decisão seja tomada onde a discussão acontece.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Mencione @Skilio com o período e o tipo de pessoas de que você precisa.',
          'Discuta as opções com o restante da conversa.',
          'Mencione @Skilio de novo para atribuir a pessoa escolhida.',
          'Revise a alteração na equipe e selecione Aprovar.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          '@Skilio quem do Creative tem 30 horas livres antes do dia 15?',
          '@Skilio em que o Lucas está alocado na semana que vem?',
          '@Skilio adicione a Sofia à Atividade Campaign Website como Executor.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Todos na conversa veem as respostas do Skilio.',
          'Só a pessoa que mencionou o Skilio pode aprovar a alteração que ele prepara.',
          'Selecione Negar para deixar a equipe da Atividade como está.',
        ]}
      />
    </>
  }
>
  <Walkthrough.DateSeparator label="Hoje" />

  <Walkthrough.Message sender="member" name="Ana Costa" time="09:12" avatar="/img/ai/avatars/ana-costa.svg">
    <p>A Velmont quer o site da campanha de Natal no dia 15, não no dia 22. Conseguimos?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="me" name="Rui Santos" time="09:14" avatar="/img/ai/avatars/rui-santos.svg">
    <p>Depende de quem estiver livre no Creative. @Skilio quem do Creative tem pelo menos 30 horas livres entre 3 e 15 de dezembro?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio" time="09:16">
    <p><strong>Duas pessoas do Creative têm pelo menos 30 horas livres entre quinta-feira, 3, e terça-feira, 15 de dezembro:</strong></p>
    <Walkthrough.DataTable
      columns={['Pessoa', 'Função', 'Tempo livre', 'Alocações atuais']}
      rows={[
        ['Sofia Marques', 'Associate Creative Director', '48h', '16h'],
        ['Lucas Ferreira', 'Designer', '34h', '30h'],
      ]}
      note="Daniel Reed tem 22h livres. Emma Clarke está de ausência de 7 a 11 de dezembro."
    />
    <Walkthrough.Source label="Capacidade · 9 linhas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="member" name="Ana Costa" time="09:18" avatar="/img/ai/avatars/ana-costa.svg">
    <p>A Sofia conhece a marca, ela fez a campanha de verão. Vamos com ela.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="me" name="Rui Santos" time="09:20" avatar="/img/ai/avatars/rui-santos.svg">
    <p>Combinado. @Skilio adicione a Sofia a Velmont Christmas 2026 – Campaign Website como Executor.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio" time="09:22">
    <Walkthrough.ApprovalCard
      title="Adicionar à equipe deste documento"
      subtitle="VLB0021DIGI001 · Velmont Christmas 2026 – Campaign Website"
      rows={[['Adicionando', 'Sofia Marques como Executor']]}
      actions={[{ label: 'Negar' }, { label: 'Aprovar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio" time="09:24">
    <Walkthrough.StatusChip status="Atualizado" label="VLB0021DIGI001 · Velmont Christmas 2026 – Campaign Website" />
    <p>Sofia Marques agora é Executor em Velmont Christmas 2026 – Campaign Website.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Encontrar Pessoas Disponíveis e Atribuir uma a uma Atividade](/docs/ai/use-cases/resource-management/checking-resource-availability)
- [Chat](/docs/product/files-and-collaboration/chat)
- [Assistente de IA](/docs/ai/ai-assistant)
