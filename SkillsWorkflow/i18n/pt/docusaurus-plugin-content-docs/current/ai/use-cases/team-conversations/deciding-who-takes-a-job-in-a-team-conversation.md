---
id: deciding-who-takes-a-job-in-a-team-conversation
title: Decidir Quem Fica com um Job numa Conversa de Equipa
description: "Veja como uma diretora de contas e um traffic manager perguntam ao Skilio, dentro da sua conversa no Chat, quem está livre para um novo prazo e atribuem a pessoa que escolheram à equipa do Job."
sidebar_label: Decidir Quem Fica com um Job
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está em preview, a conversa mostra como se espera que o AI Assistant o trate, e o que hoje responde ou faz pode ser diferente deste exemplo.
:::

## Visão geral

Quando uma decisão está a ser tomada numa conversa do Chat, qualquer pessoa que nela participe pode mencionar o **@Skilio** para trazer os factos. Aqui, o cliente antecipou um prazo. A diretora de contas e o traffic manager perguntam ao Skilio quem está livre, chegam a acordo sobre uma pessoa na conversa e pedem ao Skilio que a adicione à equipa do Job. Quem fez o pedido aprova a alteração antes de ser feita.

A agência, o cliente, as pessoas, o Job e as horas neste exemplo são ilustrativos.

<Walkthrough
  variant="team"
  conversation="Campanha de Natal Velmont"
  members="3 online · 5 membros"
  subtitle="Uma diretora de contas e um traffic manager decidem no Chat, com o Skilio na conversa."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De uma pergunta a uma decisão">
        O Skilio responde na conversa, para que todos trabalhem com os mesmos números e a decisão seja tomada onde decorre a discussão.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Mencione o @Skilio com o período e o tipo de pessoas de que precisa.',
          'Discuta as opções com o resto da conversa.',
          'Mencione novamente o @Skilio para atribuir a pessoa que combinaram.',
          'Reveja a alteração à equipa e selecione Aprovar.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          '@Skilio quem no Creative tem 30 horas livres antes do dia 15?',
          '@Skilio em que está o Lucas alocado na próxima semana?',
          '@Skilio adiciona a Sofia ao job Campaign Website como Executor.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Todos os participantes da conversa veem as respostas do Skilio.',
          'Só a pessoa que mencionou o Skilio pode aprovar a alteração que ele prepara.',
          'Selecione Negar para deixar a equipa do Job como está.',
        ]}
      />
    </>
  }
>
  <Walkthrough.DateSeparator label="Hoje" />

  <Walkthrough.Message sender="member" name="Ana Costa" time="09:12" avatar="/img/ai/avatars/ana-costa.svg">
    <p>A Velmont quer o site da campanha de Natal a 15, não a 22. Conseguimos?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="me" name="Rui Santos" time="09:14" avatar="/img/ai/avatars/rui-santos.svg">
    <p>Depende de quem está livre no Creative. @Skilio quem no Creative tem pelo menos 30 horas livres entre 3 e 15 de dezembro?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio" time="09:16">
    <p><strong>Duas pessoas do Creative têm pelo menos 30 horas livres entre quinta-feira 3 e terça-feira 15 de dezembro:</strong></p>
    <Walkthrough.DataTable
      columns={['Pessoa', 'Função', 'Tempo livre', 'Alocações atuais']}
      rows={[
        ['Sofia Marques', 'Associate Creative Director', '48h', '16h'],
        ['Lucas Ferreira', 'Designer', '34h', '30h'],
      ]}
      note="O Daniel Reed tem 22h livres. A Emma Clarke está ausente de 7 a 11 de dezembro."
    />
    <Walkthrough.Source label="Capacidade · 9 linhas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="member" name="Ana Costa" time="09:18" avatar="/img/ai/avatars/ana-costa.svg">
    <p>A Sofia conhece a marca, fez a campanha de verão. Vamos com ela.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="me" name="Rui Santos" time="09:20" avatar="/img/ai/avatars/rui-santos.svg">
    <p>Combinado. @Skilio adiciona a Sofia ao Velmont Christmas 2026 – Campaign Website como Executor.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio" time="09:22">
    <Walkthrough.ApprovalCard
      title="Adicionar à equipa deste documento"
      subtitle="VLB0021DIGI001 · Velmont Christmas 2026 – Campaign Website"
      rows={[['A adicionar', 'Sofia Marques como Executor']]}
      actions={[{ label: 'Negar' }, { label: 'Aprovar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio" time="09:24">
    <Walkthrough.StatusChip status="Atualizado" label="VLB0021DIGI001 · Velmont Christmas 2026 – Campaign Website" />
    <p>A Sofia Marques é agora a Executor no Velmont Christmas 2026 – Campaign Website.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Encontrar Pessoas Disponíveis e Atribuir uma a um Job](/docs/ai/use-cases/resource-management/checking-resource-availability)
- [Chat](/docs/product/files-and-collaboration/chat)
- [AI Assistant](/docs/ai/ai-assistant)
