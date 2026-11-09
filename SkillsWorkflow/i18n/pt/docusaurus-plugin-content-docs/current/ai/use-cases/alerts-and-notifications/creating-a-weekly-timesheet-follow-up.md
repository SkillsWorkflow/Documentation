---
id: creating-a-weekly-timesheet-follow-up
title: Criar um Acompanhamento Semanal de Timesheets
description: "Veja como um gestor de operações pede ao AI Assistant para verificar todas as sextas-feiras o tempo em falta e as timesheets pendentes de aprovação, e como o alerta lembra depois cada pessoa das suas próprias horas em falta e dá a cada aprovador um resumo por equipa."
sidebar_label: Acompanhamento Semanal de Timesheets
sidebar_position: 2
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está em preview, a conversa mostra como se espera que o AI Assistant o trate, e o que hoje responde ou faz pode ser diferente deste exemplo.
:::

## Visão geral

Peça ao AI Assistant para acompanhar as timesheets todas as semanas. Um só alerta pode dizer coisas diferentes a dois grupos de pessoas: cada pessoa com tempo em falta recebe um lembrete com os seus próprios dias e horas, e cada aprovador recebe um resumo da sua equipa, com as pessoas que ainda têm tempo em falta e as timesheets à espera da sua aprovação.

Revê o alerta num cartão antes de ser criado, incluindo quantas pessoas lembraria se corresse hoje. A partir daí, os lembretes saem todas as sextas-feiras sem que ninguém os prepare.

A agência, as equipas, as pessoas e as horas neste exemplo são ilustrativas. O tempo em falta é contado face ao calendário de cada pessoa, por isso ausências e feriados não aparecem como tempo em falta.

<Walkthrough
  subtitle="Exemplo de conversa entre um gestor de operações e o AI Assistant, e as notificações que o alerta envia depois."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Um alerta, a mensagem certa para cada pessoa">
        As pessoas são lembradas das suas próprias horas em falta. Os aprovadores veem a sua equipa num relance. Ninguém tem de andar atrás das timesheets à mão na sexta-feira à tarde.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Diga quando verificar e quem deve ser lembrado.',
          'Escolha o que cada grupo recebe.',
          'Confira quantas pessoas o alerta lembraria hoje.',
          'Reveja o alerta e selecione Criar.',
          'Leia os lembretes e os resumos à medida que chegam.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Todas as sextas-feiras, identifica o tempo em falta e prepara lembretes para os colaboradores e os aprovadores.',
          'Lembra também as pessoas na segunda-feira de manhã se a semana delas continuar incompleta.',
          'Deixa o estúdio de Lisboa fora dos lembretes de timesheets.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'O tempo em falta é a diferença entre as horas esperadas no calendário de uma pessoa e as horas que registou.',
          'Um lembrete só vai para a pessoa a quem diz respeito. O resumo da equipa vai para quem aprova as timesheets dessas pessoas.',
          'O assistente pede a sua aprovação antes de criar o alerta.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Todas as sextas-feiras, identifica o tempo em falta e prepara lembretes para os colaboradores e os aprovadores.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Posso configurar um só alerta para ambos. Primeiro, duas perguntas:</p>
    <ul>
      <li>Que semana deve verificar: a semana atual até sexta-feira, ou a semana completa anterior?</li>
      <li>Os aprovadores devem ser avisados também das timesheets à espera da sua aprovação?</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>A semana atual. E sim, acrescenta as aprovações pendentes, urgentes se tiverem mais de uma semana.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Criar o alerta “Acompanhamento semanal de timesheets”"
      subtitle="Revê estes detalhes antes de eu criar o alerta."
      rows={[
        ['Verifica', 'Tempo em falta esta semana, e timesheets à espera de aprovação'],
        ['Pessoas com tempo em falta', 'Um lembrete com os seus próprios dias e horas · Atenção'],
        ['Aprovadores', 'Um resumo por equipa · Atenção, ou Ação necessária para aprovações com mais de 7 dias'],
        ['Quando', 'Todas as sextas-feiras, 15:00'],
        ['Canais', 'Web, Email, Push'],
        ['Se corresse hoje', '14 lembretes a pessoas, 4 resumos a aprovadores'],
      ]}
      actions={[{ label: 'Negar' }, { label: 'Criar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revi o alerta e selecionei Criar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Criado" label="Acompanhamento semanal de timesheets" />
    <p>Os primeiros lembretes saem esta sexta-feira às 15:00.</p>
  </Walkthrough.Message>

  <Walkthrough.DateSeparator label="Sexta-feira · Notificações de Mark Evans, designer" />

  <Walkthrough.NotificationPanel>
    <Walkthrough.NotificationCard
      level="attention"
      levelLabel="Atenção"
      title="A tua timesheet desta semana"
      time="Hoje, 15:00"
    >
      <p>Tens 12h em falta esta semana: 4h na quarta-feira e 8h na quinta-feira. Regista-as antes de a semana fechar.</p>
    </Walkthrough.NotificationCard>
  </Walkthrough.NotificationPanel>

  <Walkthrough.DateSeparator label="Sexta-feira · Notificações de David Brown, diretor criativo" />

  <Walkthrough.NotificationPanel>
    <Walkthrough.NotificationCard
      level="action"
      levelLabel="Ação necessária"
      title="Acompanhamento semanal de timesheets · Equipa criativa"
      time="Hoje, 15:00"
    >
      <ul>
        <li>3 timesheets estão à espera da tua aprovação há mais de 7 dias.</li>
        <li>4 pessoas ainda têm tempo em falta esta semana, 31h no total. O Mark Evans é quem tem mais, 12h.</li>
      </ul>
    </Walkthrough.NotificationCard>
  </Walkthrough.NotificationPanel>
</Walkthrough>

## Artigos relacionados

- [Encontrar Quem Está Bloqueado por Horas em Falta](/docs/ai/use-cases/resource-management/finding-who-has-overdue-hours)
- [Criar um Alerta para Fees que Precisam de Atenção](/docs/ai/use-cases/alerts-and-notifications/creating-an-alert-for-fees-that-need-attention)
- [Receber e gerir notificações](/docs/product/notifications/receive-and-manage-notifications)
- [Automações](/docs/build-and-extend/automations)
- [Assistente de IA](/docs/ai/ai-assistant)
