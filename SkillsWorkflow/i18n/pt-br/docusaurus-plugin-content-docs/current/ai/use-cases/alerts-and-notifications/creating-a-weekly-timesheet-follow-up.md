---
id: creating-a-weekly-timesheet-follow-up
title: Criar um Acompanhamento Semanal das Time Sheets
description: "Veja como um gerente de operações pede ao Assistente de IA que verifique toda sexta-feira o tempo não registrado e as aprovações de time sheet pendentes, e como o alerta depois lembra cada pessoa das próprias horas em falta e dá a cada aprovador um resumo por equipe."
sidebar_label: Acompanhamento Semanal das Time Sheets
sidebar_position: 2
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está em preview, a conversa mostra como se espera que o Assistente de IA lide com ele, e o que ele responde ou faz hoje pode ser diferente deste exemplo.
:::

## Visão geral

Peça ao Assistente de IA que acompanhe as time sheets toda semana. Um único alerta pode dizer coisas diferentes a dois grupos de pessoas: cada pessoa com tempo não registrado recebe um lembrete com os próprios dias e horas, e cada aprovador recebe um resumo da sua equipe, com as pessoas que ainda não registraram todo o tempo e as time sheets aguardando a aprovação dele.

Você revisa o alerta em um cartão antes de ele ser criado, incluindo quantas pessoas ele lembraria se fosse executado hoje. Depois disso, os lembretes são enviados toda sexta-feira sem que ninguém precise prepará-los.

A agência, as equipes, as pessoas e as horas deste exemplo são ilustrativas. O tempo não registrado é calculado com base no calendário de cada pessoa, então ausências e feriados não aparecem como tempo em falta.

<Walkthrough
  subtitle="Exemplo de conversa entre um gerente de operações e o Assistente de IA, e as notificações que o alerta envia depois."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Um alerta, a mensagem certa para cada pessoa">
        As pessoas são lembradas das próprias horas em falta. Os aprovadores veem a sua equipe de relance. Ninguém precisa cobrar time sheets manualmente na sexta à tarde.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Diga quando verificar e quem deve ser lembrado.',
          'Escolha o que cada grupo recebe.',
          'Confira quantas pessoas o alerta lembraria hoje.',
          'Revise o alerta e selecione Criar.',
          'Leia os lembretes e os resumos à medida que chegam.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Toda sexta-feira, identifique o tempo não registrado e prepare lembretes para os colaboradores e os aprovadores.',
          'Lembre as pessoas também na segunda de manhã se a semana delas ainda estiver incompleta.',
          'Deixe o estúdio de Lisboa fora dos lembretes de time sheet.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'O tempo não registrado é a diferença entre as horas previstas no calendário da pessoa e as horas que ela registrou.',
          'Um lembrete vai apenas para a pessoa a que se refere. O resumo da equipe vai para quem aprova as time sheets dela.',
          'O assistente pede a sua aprovação antes de criar o alerta.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Toda sexta-feira, identifique o tempo não registrado e prepare lembretes para os colaboradores e os aprovadores.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Posso configurar um único alerta para os dois. Antes, duas perguntas:</p>
    <ul>
      <li>Qual semana ele deve verificar: a semana atual até sexta-feira ou a semana completa anterior?</li>
      <li>Os aprovadores também devem ser avisados sobre as time sheets aguardando a aprovação deles?</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>A semana atual. E sim, inclua as aprovações pendentes, como urgentes se tiverem mais de uma semana.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Criar o alerta “Acompanhamento semanal das time sheets”"
      subtitle="Revise estes detalhes antes de eu criar o alerta."
      rows={[
        ['Verifica', 'Tempo não registrado nesta semana e time sheets aguardando aprovação'],
        ['Pessoas com tempo não registrado', 'Um lembrete com os próprios dias e horas · Atenção'],
        ['Aprovadores', 'Um resumo por equipe · Atenção, ou Ação necessária para aprovações com mais de 7 dias'],
        ['Quando', 'Toda sexta-feira, 15:00'],
        ['Canais', 'Web, Email, Push'],
        ['Se fosse executado hoje', '14 lembretes para pessoas, 4 resumos para aprovadores'],
      ]}
      actions={[{ label: 'Negar' }, { label: 'Criar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revisei o alerta e selecionei Criar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Criado" label="Acompanhamento semanal das time sheets" />
    <p>Os primeiros lembretes são enviados nesta sexta-feira às 15:00.</p>
  </Walkthrough.Message>

  <Walkthrough.DateSeparator label="Sexta-feira · Notificações de Mark Evans, designer" />

  <Walkthrough.NotificationPanel>
    <Walkthrough.NotificationCard
      level="attention"
      levelLabel="Atenção"
      title="A sua time sheet desta semana"
      time="Hoje, 15:00"
    >
      <p>Faltam 12h nesta semana: 4h na quarta-feira e 8h na quinta-feira. Registre-as antes de a semana fechar.</p>
    </Walkthrough.NotificationCard>
  </Walkthrough.NotificationPanel>

  <Walkthrough.DateSeparator label="Sexta-feira · Notificações de David Brown, diretor de criação" />

  <Walkthrough.NotificationPanel>
    <Walkthrough.NotificationCard
      level="action"
      levelLabel="Ação necessária"
      title="Acompanhamento semanal das time sheets · Equipe de Criação"
      time="Hoje, 15:00"
    >
      <ul>
        <li>3 time sheets estão aguardando a sua aprovação há mais de 7 dias.</li>
        <li>4 pessoas ainda têm tempo não registrado nesta semana, 31h no total. O Mark Evans é quem tem mais, 12h.</li>
      </ul>
    </Walkthrough.NotificationCard>
  </Walkthrough.NotificationPanel>
</Walkthrough>

## Artigos relacionados

- [Encontrar Quem Está Bloqueado por Pendência de Time Sheet](/docs/ai/use-cases/resource-management/finding-who-has-overdue-hours)
- [Criar um Alerta para Contratos que Precisam de Atenção](/docs/ai/use-cases/alerts-and-notifications/creating-an-alert-for-fees-that-need-attention)
- [Receber e gerenciar notificações](/docs/product/notifications/receive-and-manage-notifications)
- [Automações](/docs/build-and-extend/automations)
- [Assistente de IA](/docs/ai/ai-assistant)
