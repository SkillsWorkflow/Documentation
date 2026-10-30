---
id: analyzing-client-profitability
title: Analisar a Rentabilidade de um Cliente
description: "Veja como um account director pergunta ao AI Assistant quão rentável é um cliente, compara a receita e o custo por projeto, descobre porque é que um projeto está a perder margem e abre o Profitability Workspace."
sidebar_label: Analisar a Rentabilidade de um Cliente
sidebar_position: 4
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Pergunte ao AI Assistant quão rentável é um cliente num período. O assistente compara a receita de cada projeto com o seu custo e mostra a margem, com os projetos mais e menos rentáveis primeiro. Faça perguntas de seguimento sobre um projeto para ver para onde foi o custo, por grupo de cargo, e abra o **Profitability Workspace** do cliente para continuar a acompanhá-lo.

:::note Preview
Este caso de uso está em preview e ainda não foi testado de ponta a ponta. A conversa mostra como se espera que o AI Assistant o trate, e o que hoje responde ou faz pode ser diferente deste exemplo.
:::

A agência, o cliente, os projetos e os valores neste exemplo são ilustrativos. Os números que vê dependem dos seus acessos e dos dados que a sua agência disponibiliza ao assistente.

<Walkthrough
  subtitle="Exemplo de conversa entre um account director e o AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De um cliente às suas margens">
        O assistente compara a receita e o custo dos projetos do cliente e mostra onde a margem é ganha e onde é perdida.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Pergunte quão rentável foi o cliente num período.',
          'Leia a receita, o custo e a margem por projeto.',
          'Consulte Como interpretei a tua pergunta para ver como foram calculados a receita e o custo.',
          'Pergunte porque é que um projeto está abaixo dos outros.',
          'Abra o Profitability Workspace no cliente.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Quão rentável foi a Northwind Coffee este ano?',
          'Qual dos meus clientes tem a margem mais baixa?',
          'Porque é que o Holiday Packaging está a perder dinheiro?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'A receita vem das horas vendidas nos estimates. O custo vem das horas registadas e do custo de cada pessoa.',
          'Os custos e as margens só são mostrados a quem tem um perfil que os pode ver.',
          'Os custos de terceiros e as despesas são incluídos quando estão nos estimates do projeto.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Quão rentável foi a Northwind Coffee este ano?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>A Northwind Coffee gerou 486.000 € de receita este ano, com um custo de 352.400 € e uma margem de 27%.</strong></p>
    <Walkthrough.DataTable
      columns={['Projeto', 'Receita', 'Custo', 'Margem', '% Margem']}
      rows={[
        ['Retainer 2026', '312.000 €', '218.400 €', '93.600 €', '30%'],
        ['Northwind Christmas 2026', '124.000 €', '89.300 €', '34.700 €', '28%'],
        ['Holiday Packaging', '50.000 €', '44.700 €', '5.300 €', '11%'],
      ]}
    />
    <p><strong>Como interpretei a tua pergunta</strong></p>
    <ul>
      <li>Incluído: projetos da Northwind Coffee com horas registadas de 1 de janeiro até hoje.</li>
      <li>Assumido: a receita são as horas vendidas nos estimates ao seu valor de venda, e o custo são as horas registadas ao custo de cada pessoa.</li>
    </ul>
    <Walkthrough.Source label="Rentabilidade · 3 linhas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Porque é que o Holiday Packaging está tão abaixo?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>O Design registou mais 62% de horas do que as vendidas:</strong></p>
    <Walkthrough.DataTable
      columns={['Grupo de Cargo', 'Horas vendidas', 'Horas registadas', 'Custo acima da receita']}
      rows={[
        ['Design', '240h', '389h', '8.900 €'],
        ['Copywriting', '80h', '76h', '—'],
        ['Accounts', '60h', '71h', '600 €'],
      ]}
      note="A maior parte das horas extra de design foi registada em setembro, depois de o cliente pedir uma terceira ronda de packaging."
    />
    <p>Para acompanhar a margem por projeto e por cargo, abra o <strong>Profitability Workspace</strong> do cliente.</p>
    <Walkthrough.WorkspaceCard
      title="Profitability Workspace"
      subtitle="Workspace · Cliente"
      description="Lucro planeado e margem por projeto e por cargo, com os projetos mais rentáveis primeiro."
    />
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Workspaces de Clientes](/docs/product/dashboards-and-reporting/client-dashboard)
- [Criar um Orçamento](/docs/product/commercial/estimates/create-estimate)
- [Ver os Jobs Críticos dos Seus Clientes](/docs/ai/use-cases/accounts-status/monitoring-critical-activities-across-accounts)
- [AI Assistant](/docs/ai/ai-assistant)
