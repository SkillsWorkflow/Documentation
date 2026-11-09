---
id: creating-an-alert-for-fees-that-need-attention
title: Criar um Alerta para Fees que Precisam de Atenção
description: "Veja como um account manager pede ao AI Assistant para avisar os account directors todas as semanas sobre os Fees perto ou acima das horas contratadas, revê o alerta antes de ser criado e como o alerta chega depois como uma notificação marcada Atenção ou Ação necessária."
sidebar_label: Alerta para Fees que Precisam de Atenção
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está em preview, a conversa mostra como se espera que o AI Assistant o trate, e o que hoje responde ou faz pode ser diferente deste exemplo.
:::

## Visão geral

Diga ao AI Assistant que Fees deve vigiar, quando é que um Fee precisa de atenção e quem deve ser avisado. O assistente pergunta o que falta, como o limite, e mostra-lhe o alerta num cartão antes de o criar: o que verifica, os níveis, quando corre, quem o recebe e em que canais. Diz-lhe também o que o alerta enviaria se corresse hoje.

Depois de selecionar **Criar**, o alerta corre como uma automação no agendamento que escolheu. Cada account director recebe uma notificação com os Fees dos seus clientes, marcados **Atenção** ou **Ação necessária**, e o motivo de cada um.

A agência, os clientes, os Fees, os jobs, as pessoas e as horas neste exemplo são ilustrativos. Os Fees de que cada pessoa é avisada dependem dos seus acessos.

<Walkthrough
  subtitle="Exemplo de conversa entre um account manager e o AI Assistant, e a notificação que o alerta envia depois."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De uma pergunta que repete a um alerta que corre sozinho">
        Em vez de verificar todos os Fees todas as semanas, descreve a verificação uma vez. O assistente transforma-a num alerta e os account directors só são avisados quando um Fee precisa deles.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Diga o que verificar, com que frequência e quem deve ser avisado.',
          'Responda às perguntas do assistente sobre limites e níveis.',
          'Confira o que o alerta enviaria se corresse hoje.',
          'Reveja o alerta e selecione Criar.',
          'Leia a notificação quando chegar e abra o Fee a partir dela.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Todas as segundas-feiras, diz aos account directors que fees precisam de atenção e porquê.',
          'Avisa-me quando um fee passar 90% das suas horas.',
          'Pausa o alerta dos fees até janeiro.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Ação necessária é para um Fee acima das horas contratadas ou com previsão de as ultrapassar antes da data de fim. Atenção é para um Fee acima do limite de aviso.',
          'A previsão usa as horas registadas até agora e as semanas que faltam até à data de fim do Fee.',
          'O assistente pede a sua aprovação antes de criar o alerta. Selecione Negar para deixar tudo como está.',
          'Cada pessoa só é avisada sobre os Fees a que tem acesso.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Todas as segundas-feiras, diz aos account directors que fees precisam de atenção e porquê.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Posso configurar isso como um alerta semanal. Quando é que um Fee deve contar como precisando de atenção: pelas horas consumidas, pelo valor ou por ambos?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Pelas horas. Avisa aos 85%, e torna-o urgente se estiver acima ou se for ultrapassar antes da data de fim.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Criar o alerta “Fees que precisam de atenção”"
      subtitle="Revê estes detalhes antes de eu criar o alerta."
      rows={[
        ['Verifica', 'Fees ativos: horas consumidas face às horas contratadas'],
        ['Atenção', '85% ou mais das horas contratadas consumidas'],
        ['Ação necessária', 'Acima de 100%, ou com previsão de ultrapassar antes da data de fim do Fee'],
        ['Quando', 'Todas as segundas-feiras, 08:00'],
        ['Quem', 'O account director de cada cliente'],
        ['Canais', 'Web, Email'],
        ['Se corresse hoje', '2 Fees Ação necessária, 3 Fees Atenção, 4 account directors notificados'],
      ]}
      actions={[{ label: 'Negar' }, { label: 'Criar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revi o alerta e selecionei Criar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Criado" label="Fees que precisam de atenção" />
    <p>O alerta corre na próxima segunda-feira às 08:00. Podes pausá-lo, alterá-lo ou eliminá-lo pedindo-me, ou em <strong>Manutenção → Automations</strong>.</p>
  </Walkthrough.Message>

  <Walkthrough.DateSeparator label="Próxima segunda-feira · Notificações de Rita Moreira, account director" />

  <Walkthrough.NotificationPanel>
    <Walkthrough.NotificationCard
      level="action"
      levelLabel="Ação necessária"
      title="Fees que precisam de atenção"
      time="Hoje, 08:00"
    >
      <p><strong>Orvella Tea Retainer 2026</strong> está a 96% das suas 1200 horas contratadas e vai ultrapassá-las por volta de 20 de novembro. A maior parte das horas a mais vem do Website Refresh, 52h acima do seu estimate depois de terem sido acrescentadas duas páginas de produto a 14 de outubro.</p>
    </Walkthrough.NotificationCard>

    <Walkthrough.NotificationCard
      level="attention"
      levelLabel="Atenção"
      title="Fees que precisam de atenção"
      time="Hoje, 08:00"
    >
      <p><strong>Velmont Bakery Fee 2026</strong> está a 87% das suas horas contratadas, com oito semanas pela frente. A este ritmo, termina o ano a cerca de 98%.</p>
    </Walkthrough.NotificationCard>
  </Walkthrough.NotificationPanel>
</Walkthrough>

## Artigos relacionados

- [Criar um Acompanhamento Semanal de Timesheets](/docs/ai/use-cases/alerts-and-notifications/creating-a-weekly-timesheet-follow-up)
- [Copiar o Fee de um Cliente para o Ano Seguinte](/docs/ai/use-cases/contracts-estimates-and-purchase-orders/duplicating-estimates-for-the-next-years-of-a-fee)
- [Receber e gerir notificações](/docs/product/notifications/receive-and-manage-notifications)
- [Automações](/docs/build-and-extend/automations)
- [Assistente de IA](/docs/ai/ai-assistant)
