---
id: creating-an-alert-for-unusual-expenses
title: Criar um Alerta para Despesas Fora do Normal
description: "Veja como um gestor financeiro pede ao AI Assistant para rever cada despesa quando é submetida, e como o aprovador é depois avisado de possíveis duplicados, recibos em falta ou valores fora do normal, com o motivo, antes de aprovar."
sidebar_label: Alerta para Despesas Fora do Normal
sidebar_position: 4
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está em preview, a conversa mostra como se espera que o AI Assistant o trate, e o que hoje responde ou faz pode ser diferente deste exemplo.
:::

## Visão geral

Nem todos os alertas correm num agendamento. Peça ao AI Assistant para analisar cada despesa no momento em que é submetida e para avisar o aprovador quando algo parecer errado: uma despesa que pode ser um duplicado, uma sem recibo, ou um valor muito acima do habitual para esse tipo de despesa.

O aprovador recebe a notificação antes de aprovar, com o motivo de cada exceção. As despesas sem nada fora do normal não enviam nada. Revê o alerta num cartão antes de ser criado, incluindo o que teria assinalado no mês passado.

A agência, as pessoas, as despesas e os valores neste exemplo são ilustrativos. O alerta assinala despesas para uma pessoa verificar. Não as aprova nem as rejeita.

<Walkthrough
  subtitle="Exemplo de conversa entre um gestor financeiro e o AI Assistant, e a notificação que o alerta envia depois."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Um segundo olhar antes de cada aprovação">
        Os aprovadores continuam a aprovar como hoje. Quando uma despesa precisa de ser vista com mais atenção, sabem porquê antes de a abrirem.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Diga que despesas rever e o que conta como fora do normal.',
          'Confira o que o alerta teria assinalado no mês passado.',
          'Reveja o alerta e selecione Criar.',
          'Abra a despesa assinalada a partir da notificação e decida.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Revê as despesas submetidas e explica as exceções antes da aprovação.',
          'Assinala refeições acima de 60 € por pessoa.',
          'Não assinales despesas de quilometragem sem recibo.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Um possível duplicado é uma despesa com a mesma pessoa, data e valor que outra despesa.',
          'Um valor fora do normal é comparado com as despesas do mesmo tipo nos últimos 12 meses.',
          'O alerta corre quando uma despesa é submetida, não num agendamento.',
          'Quem decide é o aprovador. O alerta nunca altera a etapa da despesa.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Revê as despesas submetidas e explica ao aprovador as exceções antes da aprovação.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Vou verificar cada despesa quando for submetida e notificar o seu aprovador só quando encontrar uma exceção. O que deve contar como fora do normal?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Possíveis duplicados, recibos em falta e tudo o que seja mais do dobro do valor habitual para esse tipo.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Criar o alerta “Despesas a verificar antes da aprovação”"
      subtitle="Revê estes detalhes antes de eu criar o alerta."
      rows={[
        ['Corre', 'Quando uma despesa é submetida'],
        ['Exceções', 'Possível duplicado, recibo em falta, valor mais do dobro do habitual para o seu tipo'],
        ['Níveis', 'Ação necessária para um possível duplicado, Atenção para as restantes'],
        ['Quem', 'O aprovador da despesa'],
        ['Canais', 'Web, Email'],
        ['Mês passado', '11 de 236 despesas teriam sido assinaladas: 3 possíveis duplicados'],
      ]}
      actions={[{ label: 'Negar' }, { label: 'Criar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revi o alerta e selecionei Criar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Criado" label="Despesas a verificar antes da aprovação" />
    <p>A partir de agora, cada despesa submetida é verificada assim que chega.</p>
  </Walkthrough.Message>

  <Walkthrough.DateSeparator label="Dois dias depois · Notificações de David Brown, aprovador" />

  <Walkthrough.NotificationPanel>
    <Walkthrough.NotificationCard
      level="action"
      levelLabel="Ação necessária"
      title="Despesas a verificar antes da aprovação"
      time="Hoje, 11:42"
    >
      <p><strong>Julia Green · Táxi, 38,50 €, 3 de novembro</strong> pode ser um duplicado. Uma despesa com a mesma data e valor foi submetida a 4 de novembro e já está aprovada.</p>
    </Walkthrough.NotificationCard>

    <Walkthrough.NotificationCard
      level="attention"
      levelLabel="Atenção"
      title="Despesas a verificar antes da aprovação"
      time="Hoje, 11:42"
    >
      <p><strong>Julia Green · Almoço com cliente, 312 €, 5 de novembro</strong> não tem recibo anexado e é cerca do triplo do seu almoço com cliente habitual.</p>
    </Walkthrough.NotificationCard>
  </Walkthrough.NotificationPanel>
</Walkthrough>

## Artigos relacionados

- [Aprovar Despesas](/docs/product/billing-and-costs/expenses/approve-expenses)
- [Criar um Alerta de Prontidão para Faturação](/docs/ai/use-cases/alerts-and-notifications/creating-a-billing-readiness-alert)
- [Receber e gerir notificações](/docs/product/notifications/receive-and-manage-notifications)
- [Automações](/docs/build-and-extend/automations)
- [Assistente de IA](/docs/ai/ai-assistant)
