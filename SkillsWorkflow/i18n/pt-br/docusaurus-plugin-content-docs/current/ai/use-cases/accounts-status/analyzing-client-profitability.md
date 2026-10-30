---
id: analyzing-client-profitability
title: Analisar a Rentabilidade de um Cliente
description: "Veja como um diretor de contas pergunta ao Assistente de IA quão rentável é um cliente, compara receita e custo por projeto, descobre por que um projeto está perdendo margem e abre o Profitability Workspace."
sidebar_label: Analisar a Rentabilidade de um Cliente
sidebar_position: 4
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está em preview, a conversa mostra como se espera que o Assistente de IA lide com ele, e o que ele responde ou faz hoje pode ser diferente deste exemplo.
:::

## Visão geral

Pergunte ao Assistente de IA quão rentável um cliente foi em um período. Ele compara a receita de cada projeto com o custo e mostra a margem, com os projetos mais e menos rentáveis primeiro. Faça perguntas de acompanhamento sobre um projeto para ver para onde foi o custo, por grupo de cargo, e abra o **Profitability Workspace** do cliente para continuar acompanhando.

A agência, o cliente, os projetos e os valores deste exemplo são ilustrativos. Os números que você vê dependem do seu acesso e dos dados que a sua agência disponibiliza ao assistente.

<Walkthrough
  subtitle="Exemplo de conversa entre um diretor de contas e o Assistente de IA."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De um cliente às suas margens">
        O assistente compara receita e custo entre os projetos do cliente e mostra onde a margem é feita e onde é perdida.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Pergunte quão rentável o cliente foi em um período.',
          'Leia a receita, o custo e a margem por projeto.',
          'Confira Como interpretei sua pergunta para ver como a receita e o custo foram calculados.',
          'Pergunte por que um projeto está abaixo dos outros.',
          'Abra o Profitability Workspace do cliente.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Quão rentável foi a Northwind Coffee este ano?',
          'Qual dos meus clientes tem a menor margem?',
          'Por que o Holiday Packaging está dando prejuízo?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'A receita vem das horas vendidas nas propostas. O custo vem das horas registradas e do custo de cada pessoa.',
          'Custos e margens só são mostrados para as pessoas cujo perfil pode vê-los.',
          'Custos de terceiros e despesas são incluídos quando estão nas propostas do projeto.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Quão rentável foi a Northwind Coffee este ano?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>A Northwind Coffee gerou € 486.000 de receita este ano, com um custo de € 352.400 e uma margem de 27%.</strong></p>
    <Walkthrough.DataTable
      columns={['Projeto', 'Receita', 'Custo', 'Margem', 'Margem %']}
      rows={[
        ['Retainer 2026', '€ 312.000', '€ 218.400', '€ 93.600', '30%'],
        ['Northwind Christmas 2026', '€ 124.000', '€ 89.300', '€ 34.700', '28%'],
        ['Holiday Packaging', '€ 50.000', '€ 44.700', '€ 5.300', '11%'],
      ]}
    />
    <p><strong>Como interpretei sua pergunta</strong></p>
    <ul>
      <li>Incluído: projetos da Northwind Coffee com horas registradas de 1º de janeiro até hoje.</li>
      <li>Assumido: a receita são as horas vendidas nas propostas pelo valor de venda, e o custo são as horas registradas pelo custo de cada pessoa.</li>
    </ul>
    <Walkthrough.Source label="Rentabilidade · 3 linhas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Por que o Holiday Packaging está tão abaixo?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Design registrou 62% mais horas do que as vendidas:</strong></p>
    <Walkthrough.DataTable
      columns={['Grupo de Cargo', 'Horas vendidas', 'Horas registradas', 'Custo acima da receita']}
      rows={[
        ['Design', '240h', '389h', '€ 8.900'],
        ['Copywriting', '80h', '76h', '—'],
        ['Accounts', '60h', '71h', '€ 600'],
      ]}
      note="A maior parte das horas extras de design foi registrada em setembro, depois que o cliente pediu uma terceira rodada de embalagens."
    />
    <p>Para acompanhar a margem por projeto e por cargo, abra o <strong>Profitability Workspace</strong> do cliente.</p>
    <Walkthrough.WorkspaceCard
      title="Profitability Workspace"
      subtitle="Workspace · Cliente"
      description="Lucro planejado e margem por projeto e por cargo, com os projetos mais rentáveis primeiro."
    />
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Workspace de Cliente](/docs/product/dashboards-and-reporting/client-dashboard)
- [Criar Proposta](/docs/product/commercial/estimates/create-estimate)
- [Verificar as Atividades Críticas dos Seus Clientes](/docs/ai/use-cases/accounts-status/monitoring-critical-activities-across-accounts)
- [Assistente de IA](/docs/ai/ai-assistant)
