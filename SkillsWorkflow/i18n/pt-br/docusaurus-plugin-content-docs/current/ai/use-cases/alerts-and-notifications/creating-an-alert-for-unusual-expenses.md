---
id: creating-an-alert-for-unusual-expenses
title: Criar um Alerta para Despesas Fora do Comum
description: "Veja como um gerente financeiro pede ao Assistente de IA que revise cada despesa no momento em que ela é submetida, e como o aprovador é avisado depois sobre possíveis duplicados, recibos em falta ou valores fora do comum, com o motivo, antes de aprovar."
sidebar_label: Alerta para Despesas Fora do Comum
sidebar_position: 4
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está em preview, a conversa mostra como se espera que o Assistente de IA lide com ele, e o que ele responde ou faz hoje pode ser diferente deste exemplo.
:::

## Visão geral

Nem todo alerta é executado em uma periodicidade. Peça ao Assistente de IA que analise cada despesa no momento em que ela é submetida e que avise o aprovador quando algo parecer errado: uma despesa que pode ser duplicada, uma sem recibo ou um valor muito acima do habitual para aquele tipo de despesa.

O aprovador recebe a notificação antes de aprovar, com o motivo de cada exceção. Despesas sem nada fora do comum não geram nenhum envio. Você revisa o alerta em um cartão antes de ele ser criado, incluindo o que ele teria sinalizado no mês passado.

A agência, as pessoas, as despesas e os valores deste exemplo são ilustrativos. O alerta sinaliza despesas para uma pessoa verificar. Ele não as aprova nem as rejeita.

<Walkthrough
  subtitle="Exemplo de conversa entre um gerente financeiro e o Assistente de IA, e a notificação que o alerta envia depois."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Um segundo olhar antes de cada aprovação">
        Os aprovadores continuam aprovando como fazem hoje. Quando uma despesa precisa de uma análise mais atenta, eles sabem o motivo antes de abri-la.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Diga quais despesas revisar e o que conta como fora do comum.',
          'Confira o que o alerta teria sinalizado no mês passado.',
          'Revise o alerta e selecione Criar.',
          'Abra a despesa sinalizada a partir da notificação e decida.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Revise as despesas recém-submetidas e explique as exceções antes da aprovação.',
          'Sinalize refeições acima de € 60 por pessoa.',
          'Não sinalize despesas de quilometragem sem recibo.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Um possível duplicado é uma despesa com a mesma pessoa, data e valor de outra despesa.',
          'Um valor fora do comum é comparado com as despesas do mesmo tipo nos últimos 12 meses.',
          'O alerta é executado quando uma despesa é submetida, não em uma periodicidade.',
          'Quem decide é o aprovador. O alerta nunca altera a etapa da despesa.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Revise as despesas recém-submetidas e explique as exceções ao aprovador antes da aprovação.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Vou verificar cada despesa quando ela for submetida e notificar o aprovador dela apenas quando eu encontrar uma exceção. O que deve contar como fora do comum?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Possíveis duplicados, recibos em falta e qualquer valor acima do dobro do habitual para aquele tipo.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Criar o alerta “Despesas a verificar antes da aprovação”"
      subtitle="Revise estes detalhes antes de eu criar o alerta."
      rows={[
        ['Execução', 'Quando uma despesa é submetida'],
        ['Exceções', 'Possível duplicado, recibo em falta, valor acima do dobro do habitual para o tipo'],
        ['Níveis', 'Ação necessária para um possível duplicado, Atenção para os outros'],
        ['Quem', 'O aprovador da despesa'],
        ['Canais', 'Web, Email'],
        ['Mês passado', '11 de 236 despesas teriam sido sinalizadas: 3 possíveis duplicados'],
      ]}
      actions={[{ label: 'Negar' }, { label: 'Criar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revisei o alerta e selecionei Criar.</p>
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
      <p><strong>Julia Green · Táxi, € 38,50, 3 de novembro</strong> pode ser um duplicado. Uma despesa com a mesma data e o mesmo valor foi submetida em 4 de novembro e já está aprovada.</p>
    </Walkthrough.NotificationCard>

    <Walkthrough.NotificationCard
      level="attention"
      levelLabel="Atenção"
      title="Despesas a verificar antes da aprovação"
      time="Hoje, 11:42"
    >
      <p><strong>Julia Green · Almoço com cliente, € 312, 5 de novembro</strong> não tem recibo anexado e é cerca de três vezes o valor habitual dos almoços com clientes dela.</p>
    </Walkthrough.NotificationCard>
  </Walkthrough.NotificationPanel>
</Walkthrough>

## Artigos relacionados

- [Aprovar Despesas](/docs/product/billing-and-costs/expenses/approve-expenses)
- [Criar um Alerta de Prontidão para Faturamento](/docs/ai/use-cases/alerts-and-notifications/creating-a-billing-readiness-alert)
- [Receber e gerenciar notificações](/docs/product/notifications/receive-and-manage-notifications)
- [Automações](/docs/build-and-extend/automations)
- [Assistente de IA](/docs/ai/ai-assistant)
