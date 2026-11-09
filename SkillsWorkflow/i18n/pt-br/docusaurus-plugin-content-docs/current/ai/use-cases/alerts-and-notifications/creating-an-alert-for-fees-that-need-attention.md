---
id: creating-an-alert-for-fees-that-need-attention
title: Criar um Alerta para Contratos que Precisam de Atenção
description: "Veja como um gerente de contas pede ao Assistente de IA que avise os diretores de contas toda semana sobre os Contratos perto ou acima das horas contratadas, revisa o alerta antes de ele ser criado e como o alerta chega depois como uma notificação marcada como Atenção ou Ação necessária."
sidebar_label: Alerta para Contratos que Precisam de Atenção
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está em preview, a conversa mostra como se espera que o Assistente de IA lide com ele, e o que ele responde ou faz hoje pode ser diferente deste exemplo.
:::

## Visão geral

Diga ao Assistente de IA quais Contratos acompanhar, quando um Contrato precisa de atenção e quem deve ser avisado. O assistente pergunta o que estiver faltando, como o limite, e mostra o alerta em um cartão antes de criá-lo: o que ele verifica, os níveis, quando é executado, quem o recebe e em quais canais. Ele também diz o que o alerta enviaria se fosse executado hoje.

Depois que você seleciona **Criar**, o alerta é executado como uma automação na periodicidade que você escolheu. Cada diretor de contas recebe uma notificação com os Contratos dos seus clientes, marcados como **Atenção** ou **Ação necessária**, e o motivo de cada um.

A agência, os clientes, os Contratos, as Atividades, as pessoas e as horas deste exemplo são ilustrativos. Os Contratos sobre os quais cada pessoa é avisada dependem dos acessos dela.

<Walkthrough
  subtitle="Exemplo de conversa entre um gerente de contas e o Assistente de IA, e a notificação que o alerta envia depois."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De uma pergunta que você repete a um alerta que funciona sozinho">
        Em vez de verificar todos os Contratos toda semana, você descreve a verificação uma vez. O assistente a transforma em um alerta, e os diretores de contas só são avisados quando um Contrato precisa deles.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Diga o que verificar, com que frequência e quem deve ser avisado.',
          'Responda às perguntas do assistente sobre limites e níveis.',
          'Confira o que o alerta enviaria se fosse executado hoje.',
          'Revise o alerta e selecione Criar.',
          'Leia a notificação quando ela chegar e abra o Contrato a partir dela.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Toda segunda-feira, avise os diretores de contas quais contratos precisam de atenção e por quê.',
          'Me avise quando um contrato passar de 90% das horas.',
          'Pause o alerta de contratos até janeiro.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Ação necessária é para um Contrato acima das horas contratadas ou com previsão de ultrapassá-las antes da data de fim. Atenção é para um Contrato acima do limite de aviso.',
          'A previsão usa as horas registradas até agora e as semanas que faltam até a data de fim do Contrato.',
          'O assistente pede a sua aprovação antes de criar o alerta. Selecione Negar para deixar tudo como está.',
          'Cada pessoa só é avisada sobre os Contratos aos quais tem acesso.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Toda segunda-feira, avise os diretores de contas quais contratos precisam de atenção e por quê.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Posso configurar isso como um alerta semanal. Quando um Contrato deve ser considerado como precisando de atenção: pelas horas consumidas, pelo valor ou pelos dois?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Pelas horas. Avise a partir de 85% e marque como urgente se já tiver ultrapassado ou se for ultrapassar antes da data de fim.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Criar o alerta “Contratos que precisam de atenção”"
      subtitle="Revise estes detalhes antes de eu criar o alerta."
      rows={[
        ['Verifica', 'Contratos ativos: horas consumidas em relação às horas contratadas'],
        ['Atenção', '85% ou mais das horas contratadas consumidas'],
        ['Ação necessária', 'Acima de 100%, ou com previsão de ultrapassar antes da data de fim do Contrato'],
        ['Quando', 'Toda segunda-feira, 08:00'],
        ['Quem', 'O diretor de contas de cada cliente'],
        ['Canais', 'Web, Email'],
        ['Se fosse executado hoje', '2 Contratos em Ação necessária, 3 Contratos em Atenção, 4 diretores de contas notificados'],
      ]}
      actions={[{ label: 'Negar' }, { label: 'Criar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revisei o alerta e selecionei Criar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Criado" label="Contratos que precisam de atenção" />
    <p>O alerta será executado na próxima segunda-feira às 08:00. Você pode pausá-lo, alterá-lo ou excluí-lo pedindo para mim, ou em <strong>Manutenção → Automations</strong>.</p>
  </Walkthrough.Message>

  <Walkthrough.DateSeparator label="Próxima segunda-feira · Notificações de Rita Moreira, diretora de contas" />

  <Walkthrough.NotificationPanel>
    <Walkthrough.NotificationCard
      level="action"
      levelLabel="Ação necessária"
      title="Contratos que precisam de atenção"
      time="Hoje, 08:00"
    >
      <p><strong>Orvella Tea Retainer 2026</strong> está em 96% das 1.200 horas contratadas e vai ultrapassá-las por volta de 20 de novembro. A maior parte das horas a mais vem do Website Refresh, 52h acima da proposta depois que duas páginas de produto foram adicionadas em 14 de outubro.</p>
    </Walkthrough.NotificationCard>

    <Walkthrough.NotificationCard
      level="attention"
      levelLabel="Atenção"
      title="Contratos que precisam de atenção"
      time="Hoje, 08:00"
    >
      <p><strong>Velmont Bakery Fee 2026</strong> está em 87% das horas contratadas, e faltam oito semanas. Nesse ritmo, termina o ano em cerca de 98%.</p>
    </Walkthrough.NotificationCard>
  </Walkthrough.NotificationPanel>
</Walkthrough>

## Artigos relacionados

- [Criar um Acompanhamento Semanal das Time Sheets](/docs/ai/use-cases/alerts-and-notifications/creating-a-weekly-timesheet-follow-up)
- [Copiar o Contrato de um Cliente para o Ano Seguinte](/docs/ai/use-cases/contracts-estimates-and-purchase-orders/duplicating-estimates-for-the-next-years-of-a-fee)
- [Receber e gerenciar notificações](/docs/product/notifications/receive-and-manage-notifications)
- [Automações](/docs/build-and-extend/automations)
- [Assistente de IA](/docs/ai/ai-assistant)
