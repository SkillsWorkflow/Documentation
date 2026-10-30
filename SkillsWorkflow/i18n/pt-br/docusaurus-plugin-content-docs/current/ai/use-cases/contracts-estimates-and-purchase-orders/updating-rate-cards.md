---
id: updating-rate-cards
title: Atualizar um Rate Card
description: "Veja como um gerente financeiro pede ao Assistente de IA que aumente as tarifas de um cliente para alguns grupos de cargo a partir de uma nova data, revisa as tarifas atuais e novas de cada coluna, vê quais propostas usam o rate card e aprova a alteração."
sidebar_label: Atualizar um Rate Card
sidebar_position: 3
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Diga ao Assistente de IA qual rate card alterar, quais grupos de cargo ou usuários, em quanto e a partir de quando, ou anexe o arquivo com as novas tarifas. O assistente mostra a tarifa atual e a nova para cada coluna do rate card e lista as propostas que o usam, para que você decida se elas também precisam de novos preços. Você escolhe se quer alterar o rate card ou criar um novo para o novo período, e revisa a alteração em um cartão antes de ela ser aplicada.

:::note Preview
Este caso de uso está em preview e ainda não foi testado de ponta a ponta. A conversa mostra como se espera que o Assistente de IA lide com ele, e o que ele responde ou faz hoje pode ser diferente deste exemplo.
:::

A agência, o cliente, os rate cards, as colunas, as tarifas e as propostas deste exemplo são ilustrativos. Os rate cards e as colunas deles dependem da configuração da sua agência.

<Walkthrough
  subtitle="Exemplo de conversa entre um gerente financeiro e o Assistente de IA."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Novas tarifas com o impacto à vista">
        O assistente prepara as novas tarifas para cada coluna e mostra quais propostas usam o rate card antes de qualquer alteração.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Indique o rate card, os grupos de cargo ou usuários, a alteração e a data.',
          'Escolha se quer alterar o rate card ou criar um para o novo período.',
          'Confira as tarifas atuais e novas de cada coluna.',
          'Confira as propostas que usam o rate card.',
          'Revise os detalhes e selecione Criar ou Atualizar.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Aumente em 4% as tarifas de Design no rate card da Northwind a partir de janeiro.',
          'Atualize o rate card com a lista de preços anexada.',
          'Quais propostas usam o rate card Northwind Coffee 2026?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Um rate card tem uma Data de Início e uma Data de Conclusão. Um novo período geralmente significa um novo rate card.',
          'A alteração se aplica a todas as colunas do rate card, a menos que você indique uma.',
          'As propostas que usam o rate card são listadas para que você as confira com a equipe da conta.',
          'O assistente pede a sua aprovação antes de alterar qualquer coisa. Selecione Negar para deixar o rate card como está.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Aumente em 4% Design e Copywriting no rate card da Northwind Coffee a partir de 1º de janeiro de 2027.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>O rate card <strong>Northwind Coffee 2026</strong> vai de 1º de janeiro a 31 de dezembro de 2026. Devo alterá-lo ou criar um novo para 2027 com as novas tarifas?</p>
    <Walkthrough.Choices
      label="Rate Card"
      options={['Criar Northwind Coffee 2027', 'Alterar Northwind Coffee 2026']}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Crie o de 2027.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.DataTable
      columns={['Grupo de Cargo · Coluna', '2026', '2027']}
      rows={[
        ['Design · Standard', '€ 70,00', '€ 72,80'],
        ['Design · Discount 10%', '€ 63,00', '€ 65,52'],
        ['Copywriting · Standard', '€ 65,00', '€ 67,60'],
        ['Copywriting · Discount 10%', '€ 58,50', '€ 60,84'],
      ]}
      note="Creative e Accounts mantêm as tarifas de 2026."
    />
    <p><strong>Duas propostas de 2027 usam o rate card de 2026:</strong> 2026 - 00412 · Retainer 2027 e 2026 - 00409 · Gift Card Design. Confira com a equipe da conta se elas devem passar para o novo rate card.</p>
    <Walkthrough.ApprovalCard
      title="Criar este rate card"
      subtitle="Revise estes detalhes antes de eu criar."
      rows={[
        ['Nome', 'Northwind Coffee 2027'],
        ['Copiado de', 'Northwind Coffee 2026'],
        ['Empresa', 'Bluebird Creative'],
        ['Data de Início', '1º de janeiro de 2027'],
        ['Data de Conclusão', '31 de dezembro de 2027'],
        ['Alteração', 'Design e Copywriting +4%, todas as colunas'],
      ]}
      actions={[{ label: 'Negar' }, { label: 'Criar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revisei os detalhes e selecionei Criar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Criado" label="Northwind Coffee 2027" />
    <p>O rate card foi criado com as novas tarifas de Design e Copywriting. Defina-o no cliente Northwind Coffee para usá-lo em novas propostas.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Criar Tabelas de Preços](/docs/product/commercial/rates/rate-cards)
- [Tabelas de Preços](/docs/product/commercial/rates/price-tables)
- [Criar Proposta](/docs/product/commercial/estimates/create-estimate)
- [Assistente de IA](/docs/ai/ai-assistant)
