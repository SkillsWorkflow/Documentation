---
id: updating-rate-cards
title: Atualizar uma Rate Card
description: "Veja como um gestor financeiro pede ao AI Assistant para aumentar as tarifas de um cliente para alguns grupos de cargo a partir de uma nova data, revê as tarifas atuais e as novas de cada coluna, vê que estimates usam a rate card e aprova a alteração."
sidebar_label: Atualizar uma Rate Card
sidebar_position: 3
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está em preview, a conversa mostra como se espera que o AI Assistant o trate, e o que hoje responde ou faz pode ser diferente deste exemplo.
:::

## Visão geral

Diga ao AI Assistant que rate card quer alterar, que grupos de cargo ou utilizadores, em quanto e a partir de quando, ou anexe o ficheiro com as novas tarifas. O assistente mostra a tarifa atual e a nova de cada coluna da rate card, e lista os estimates que a usam, para que possa decidir se também precisam de novos preços. Escolhe se altera a rate card ou cria uma nova para o novo período, e revê a alteração num cartão antes de ser aplicada.

A agência, o cliente, as rate cards, as colunas, as tarifas e os estimates neste exemplo são ilustrativos. As rate cards e as suas colunas dependem da configuração da sua agência.

<Walkthrough
  subtitle="Exemplo de conversa entre um gestor financeiro e o AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Novas tarifas com o impacto à vista">
        O assistente prepara as novas tarifas de cada coluna e mostra que estimates usam a rate card antes de alterar o que quer que seja.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Indique a rate card, os grupos de cargo ou utilizadores, a alteração e a data.',
          'Escolha se altera a rate card ou cria uma para o novo período.',
          'Confira as tarifas atuais e as novas de cada coluna.',
          'Confira os estimates que usam a rate card.',
          'Reveja os detalhes e selecione Criar ou Atualizar.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Aumenta em 4% as tarifas de Design na rate card da Northwind a partir de janeiro.',
          'Atualiza a rate card com a tabela de preços em anexo.',
          'Que estimates usam a rate card Northwind Coffee 2026?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Uma rate card tem uma Data de Início e uma Data de Conclusão. Um novo período significa normalmente uma nova rate card.',
          'A alteração aplica-se a todas as colunas da rate card, a não ser que indique uma.',
          'Os estimates que usam a rate card são listados para que os possa confirmar com a equipa de conta.',
          'O assistente pede a sua aprovação antes de alterar o que quer que seja. Selecione Negar para deixar a rate card como está.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Aumenta em 4% o Design e o Copywriting na rate card da Northwind Coffee a partir de 1 de janeiro de 2027.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>A rate card <strong>Northwind Coffee 2026</strong> vai de 1 de janeiro a 31 de dezembro de 2026. Devo alterá-la, ou criar uma nova para 2027 com as novas tarifas?</p>
    <Walkthrough.Choices
      label="Rate Card"
      options={['Criar Northwind Coffee 2027', 'Alterar Northwind Coffee 2026']}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Cria a de 2027.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.DataTable
      columns={['Grupo de Cargo · Coluna', '2026', '2027']}
      rows={[
        ['Design · Standard', '70,00 €', '72,80 €'],
        ['Design · Discount 10%', '63,00 €', '65,52 €'],
        ['Copywriting · Standard', '65,00 €', '67,60 €'],
        ['Copywriting · Discount 10%', '58,50 €', '60,84 €'],
      ]}
      note="O Creative e o Accounts mantêm as tarifas de 2026."
    />
    <p><strong>Dois estimates para 2027 usam a rate card de 2026:</strong> 2026 - 00412 · Retainer 2027 e 2026 - 00409 · Gift Card Design. Confirme com a equipa de conta se devem passar para a nova rate card.</p>
    <Walkthrough.ApprovalCard
      title="Criar esta rate card"
      subtitle="Revê estes detalhes antes de eu a criar."
      rows={[
        ['Nome', 'Northwind Coffee 2027'],
        ['Copiada de', 'Northwind Coffee 2026'],
        ['Empresa', 'Bluebird Creative'],
        ['Data de Início', '1 de janeiro de 2027'],
        ['Data de Conclusão', '31 de dezembro de 2027'],
        ['Alteração', 'Design e Copywriting +4%, todas as colunas'],
      ]}
      actions={[{ label: 'Negar' }, { label: 'Criar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Revi os detalhes e selecionei Criar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Criado" label="Northwind Coffee 2027" />
    <p>A rate card foi criada com as novas tarifas de Design e Copywriting. Defina-a no cliente Northwind Coffee para a usar em novos estimates.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Criar tabelas de preços](/docs/product/commercial/rates/rate-cards)
- [Tabelas de Preços](/docs/product/commercial/rates/price-tables)
- [Criar um Orçamento](/docs/product/commercial/estimates/create-estimate)
- [AI Assistant](/docs/ai/ai-assistant)
