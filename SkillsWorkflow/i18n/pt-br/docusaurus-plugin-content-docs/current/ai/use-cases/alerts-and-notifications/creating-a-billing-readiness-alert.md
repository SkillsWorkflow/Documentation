---
id: creating-a-billing-readiness-alert
title: Criar um Alerta de Prontidão para Faturamento
description: "Veja como um gerente financeiro pede ao Assistente de IA que prepare toda segunda-feira uma lista de ações de faturamento, com o que está bloqueando cada item e quem é o responsável, e como cada responsável recebe depois apenas os itens que dependem dele."
sidebar_label: Alerta de Prontidão para Faturamento
sidebar_position: 3
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está em preview, a conversa mostra como se espera que o Assistente de IA lide com ele, e o que ele responde ou faz hoje pode ser diferente deste exemplo.
:::

## Visão geral

Peça ao Assistente de IA que verifique toda semana o que está pronto para faturar e o que está travando o faturamento: autorizações de fatura ainda não aprovadas, ordens de compra do cliente em falta ou propostas sem condições de faturamento. Para cada item bloqueado, o alerta indica o bloqueio e a pessoa que pode resolvê-lo.

Você recebe a lista completa. Cada responsável recebe apenas os próprios itens, marcados como **Ação necessária** quando a data de faturamento planejada já passou. Você revisa o alerta em um cartão antes de ele ser criado.

A agência, os clientes, as propostas, as pessoas e os valores deste exemplo são ilustrativos. Cada pessoa só é avisada sobre documentos aos quais tem acesso.

<Walkthrough
  subtitle="Exemplo de conversa entre um gerente financeiro e o Assistente de IA, e as notificações que o alerta envia depois."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Da cobrança interna do faturamento a uma lista de ações semanal">
        O financeiro deixa de cobrar as equipes de contas uma a uma. Toda segunda-feira, cada bloqueio já está com a pessoa que pode resolvê-lo.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Diga o que conta como bloqueio do faturamento e quando verificar.',
          'Escolha quem recebe a lista completa e quem recebe os próprios itens.',
          'Confira os bloqueios que o alerta informaria hoje.',
          'Revise o alerta e selecione Criar.',
          'Faça o acompanhamento a partir das notificações à medida que chegam.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Toda segunda-feira, prepare uma lista de ações de faturamento com o bloqueio e o responsável.',
          'Inclua as propostas aprovadas há mais de 30 dias que não têm autorização de fatura.',
          'Me envie a lista de faturamento também no último dia útil do mês.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'O responsável é o gerente de contas da proposta, a menos que o bloqueio seja uma aprovação, que vai para o aprovador.',
          'Ação necessária é para itens com a data de faturamento planejada já ultrapassada. Os outros são marcados como Atenção.',
          'O alerta não cria nem altera nenhum documento de faturamento.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Toda segunda-feira, prepare uma lista de ações de faturamento com o bloqueio e o responsável.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Vou verificar as propostas aprovadas com faturamento previsto para este mês. Estes são os bloqueios que posso procurar. Quais você quer?</p>
    <ul>
      <li>Autorização de fatura aguardando aprovação</li>
      <li>Ordem de compra do cliente em falta</li>
      <li>Proposta sem condições de faturamento</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Os três. Me envie a lista completa, e a cada responsável apenas a parte dele.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Criar o alerta “Lista de ações de faturamento”"
      subtitle="Revise estes detalhes antes de eu criar o alerta."
      rows={[
        ['Verifica', 'Propostas aprovadas com faturamento previsto para este mês'],
        ['Bloqueios', 'Autorização de fatura aguardando aprovação, ordem de compra do cliente em falta, sem condições de faturamento'],
        ['Níveis', 'Ação necessária quando a data de faturamento planejada já passou, Atenção nos outros casos'],
        ['Quando', 'Toda segunda-feira, 09:00'],
        ['Quem', 'Você: a lista completa · Cada responsável: os próprios itens'],
        ['Canais', 'Web, Email'],
        ['Se fosse executado hoje', '9 itens bloqueados, € 84.300, 5 responsáveis notificados'],
      ]}
      actions={[{ label: 'Negar' }, { label: 'Criar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revisei o alerta e selecionei Criar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Criado" label="Lista de ações de faturamento" />
    <p>A primeira lista chega na próxima segunda-feira às 09:00.</p>
  </Walkthrough.Message>

  <Walkthrough.DateSeparator label="Próxima segunda-feira · Notificações de Anna Smith, gerente de contas" />

  <Walkthrough.NotificationPanel>
    <Walkthrough.NotificationCard
      level="action"
      levelLabel="Ação necessária"
      title="Lista de ações de faturamento · 2 itens"
      time="Hoje, 09:00"
    >
      <ul>
        <li><strong>Orvella Tea · Spring Campaign</strong>, € 12.500: ordem de compra do cliente em falta. O faturamento estava planejado para 31 de outubro.</li>
        <li><strong>Velmont Bakery · Packaging Refresh</strong>, € 6.800: proposta sem condições de faturamento.</li>
      </ul>
    </Walkthrough.NotificationCard>
  </Walkthrough.NotificationPanel>
</Walkthrough>

## Artigos relacionados

- [Autorizações de fatura](/docs/product/billing-and-costs/billing/invoice-authorizations)
- [Ordem de Compra](/docs/product/billing-and-costs/billing/purchase-orders)
- [Acompanhar Propostas Aguardando Aprovação](/docs/ai/use-cases/accounts-status/tracking-pending-proposals-and-approvals)
- [Receber e gerenciar notificações](/docs/product/notifications/receive-and-manage-notifications)
- [Assistente de IA](/docs/ai/ai-assistant)
