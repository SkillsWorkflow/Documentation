---
id: creating-a-billing-readiness-alert
title: Criar um Alerta de Prontidão para Faturação
description: "Veja como um gestor financeiro pede ao AI Assistant para preparar todas as segundas-feiras uma lista de ações de faturação, com o que está a bloquear cada item e quem é responsável, e como cada responsável recebe depois só os itens que dependem de si."
sidebar_label: Alerta de Prontidão para Faturação
sidebar_position: 3
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está em preview, a conversa mostra como se espera que o AI Assistant o trate, e o que hoje responde ou faz pode ser diferente deste exemplo.
:::

## Visão geral

Peça ao AI Assistant para verificar todas as semanas o que está pronto a faturar e o que está a travar a faturação: autorizações de fatura ainda não aprovadas, notas de encomenda do cliente em falta ou estimates sem condições de faturação. Para cada item bloqueado, o alerta indica o bloqueio e a pessoa que o pode resolver.

Recebe a lista completa. Cada responsável recebe só os seus próprios itens, marcados **Ação necessária** quando a data de faturação prevista já passou. Revê o alerta num cartão antes de ser criado.

A agência, os clientes, os estimates, as pessoas e os valores neste exemplo são ilustrativos. Cada pessoa só é avisada sobre documentos a que tem acesso.

<Walkthrough
  subtitle="Exemplo de conversa entre um gestor financeiro e o AI Assistant, e as notificações que o alerta envia depois."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De andar atrás da faturação a uma lista de ações semanal">
        O financeiro deixa de andar atrás das equipas de conta uma a uma. Todas as segundas-feiras, cada bloqueio já está com a pessoa que o pode resolver.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Diga o que conta como bloqueio da faturação e quando verificar.',
          'Escolha quem recebe a lista completa e quem recebe os seus próprios itens.',
          'Confira os bloqueios que o alerta reportaria hoje.',
          'Reveja o alerta e selecione Criar.',
          'Faça o acompanhamento a partir das notificações à medida que chegam.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Todas as segundas-feiras, prepara uma lista de ações de faturação com o bloqueio e o responsável.',
          'Acrescenta os estimates aprovados há mais de 30 dias que não têm autorização de fatura.',
          'Envia-me a lista de faturação também no último dia útil do mês.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'O responsável é o account manager do estimate, a não ser que o bloqueio seja uma aprovação, que vai para o aprovador.',
          'Ação necessária é para itens que já passaram a data de faturação prevista. Os restantes são marcados Atenção.',
          'O alerta não cria nem altera nenhum documento de faturação.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Todas as segundas-feiras, prepara uma lista de ações de faturação com o bloqueio e o responsável.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Vou verificar os estimates aprovados com faturação prevista para este mês. Estes são os bloqueios que posso procurar. Quais queres?</p>
    <ul>
      <li>Autorização de fatura à espera de aprovação</li>
      <li>Nota de encomenda do cliente em falta</li>
      <li>Sem condições de faturação no estimate</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Os três. Envia-me a lista completa, e a cada responsável só a sua parte.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Criar o alerta “Lista de ações de faturação”"
      subtitle="Revê estes detalhes antes de eu criar o alerta."
      rows={[
        ['Verifica', 'Estimates aprovados com faturação prevista para este mês'],
        ['Bloqueios', 'Autorização de fatura à espera de aprovação, nota de encomenda do cliente em falta, sem condições de faturação'],
        ['Níveis', 'Ação necessária quando passou a data de faturação prevista, Atenção nos outros casos'],
        ['Quando', 'Todas as segundas-feiras, 09:00'],
        ['Quem', 'Tu: a lista completa · Cada responsável: os seus próprios itens'],
        ['Canais', 'Web, Email'],
        ['Se corresse hoje', '9 itens bloqueados, 84.300 €, 5 responsáveis notificados'],
      ]}
      actions={[{ label: 'Negar' }, { label: 'Criar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revi o alerta e selecionei Criar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Criado" label="Lista de ações de faturação" />
    <p>A primeira lista chega na próxima segunda-feira às 09:00.</p>
  </Walkthrough.Message>

  <Walkthrough.DateSeparator label="Próxima segunda-feira · Notificações de Anna Smith, account manager" />

  <Walkthrough.NotificationPanel>
    <Walkthrough.NotificationCard
      level="action"
      levelLabel="Ação necessária"
      title="Lista de ações de faturação · 2 itens"
      time="Hoje, 09:00"
    >
      <ul>
        <li><strong>Orvella Tea · Spring Campaign</strong>, 12.500 €: nota de encomenda do cliente em falta. A faturação estava prevista para 31 de outubro.</li>
        <li><strong>Velmont Bakery · Packaging Refresh</strong>, 6.800 €: sem condições de faturação no estimate.</li>
      </ul>
    </Walkthrough.NotificationCard>
  </Walkthrough.NotificationPanel>
</Walkthrough>

## Artigos relacionados

- [Autorizações de fatura](/docs/product/billing-and-costs/billing/invoice-authorizations)
- [Notas de Encomenda](/docs/product/billing-and-costs/billing/purchase-orders)
- [Acompanhar Estimates à Espera de Aprovação](/docs/ai/use-cases/accounts-status/tracking-pending-proposals-and-approvals)
- [Receber e gerir notificações](/docs/product/notifications/receive-and-manage-notifications)
- [Assistente de IA](/docs/ai/ai-assistant)
