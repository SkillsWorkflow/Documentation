---
id: monitoring-critical-activities-across-accounts
title: Ver os Jobs Críticos dos Seus Clientes
description: "Veja como um diretor de contas pergunta ao AI Assistant que clientes têm mais Jobs atrasados, que Jobs ficaram atrasados recentemente e o que vence nos próximos sete dias."
sidebar_label: Ver os Jobs Críticos dos Seus Clientes
sidebar_position: 2
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Pergunte ao AI Assistant, por palavras suas, que clientes têm mais Jobs atrasados. Escolha os clientes a que quer dar seguimento e pergunte que Jobs desses clientes ficaram atrasados nos últimos 30 dias e quais vencem na próxima semana. Cada resposta mostra os Jobs com o projeto e o departamento, agrupados por cliente.

A agência, os clientes, os projetos, os números dos Jobs, os departamentos e os workspaces neste exemplo são ilustrativos. Os Jobs que vê dependem dos Jobs a que tem acesso.

<Walkthrough
  subtitle="Exemplo de conversa entre um diretor de contas e o AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Jobs críticos por cliente">
        O assistente conta os Jobs atrasados por cliente e depois mostra os Jobs atrasados e os próximos dos clientes que indicar, com o projeto e o departamento.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Pergunte que clientes têm mais Jobs atrasados.',
          'Escolha os clientes a que quer dar seguimento.',
          'Pergunte que Jobs desses clientes ficaram atrasados num período recente, como os últimos 30 dias.',
          'Pergunte que Jobs desses clientes vencem nos próximos sete dias.',
          'Consulte Como interpretei a tua pergunta para ver as datas e os clientes que o assistente usou.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Que clientes têm mais Jobs atrasados neste momento?',
          'Que Jobs destes clientes ficaram atrasados nos últimos 30 dias?',
          'Que Jobs destes clientes vencem nos próximos 7 dias?',
          'Agrupa-os por cliente e inclui o projeto e o departamento.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Uma resposta lê até 200 Jobs, a não ser que peça mais. Quando o limite é atingido, o assistente indica que a lista é parcial.',
          'Indique um período, como os últimos 30 dias. Sem isso, os Jobs atrasados de anos anteriores podem encher a lista.',
          'O assistente não consegue mostrar que Jobs estão bloqueados nem ordenar os Jobs por prioridade.',
          'Consultar Jobs não os altera, por isso não é necessária aprovação.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Que clientes têm mais Jobs atrasados neste momento?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>A Orbit Telecom tem a maior parte dos Jobs atrasados entre os 200 Jobs obtidos</strong>, mas não consigo confirmar que clientes lideram no total: os resultados atingiram o limite de 200 Jobs. Por isso, a divisão por cliente é parcial e não é uma classificação completa.</p>
    <Walkthrough.DataTable
      columns={['Cliente', 'Jobs atrasados']}
      rows={[
        ['Orbit Telecom', '31'],
        ['Northwind Coffee', '18'],
        ['Lumen Bank', '14'],
        ['Atlas Motors', '11'],
        ['Outros', '126'],
      ]}
      note="Primeiras 200 linhas. A consulta foi limitada, por isso as percentagens não são mostradas."
    />
    <p>Podes acompanhar a carga de trabalho e os prazos dos clientes no workspace abaixo.</p>
    <Walkthrough.WorkspaceCard
      title="Global Planning"
      subtitle="Workspace · Menu"
    />
    <p><strong>Como interpretei a tua pergunta</strong></p>
    <ul>
      <li>Incluído: Jobs visíveis para ti que estão marcados como atrasados, agrupados por cliente.</li>
      <li>Assumido: “atrasados neste momento” refere-se ao indicador de atraso atual do Job.</li>
      <li>Limite: só foram obtidos 200 Jobs atrasados. Restringir a menos clientes ou a um período pode permitir uma comparação completa.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Que Jobs da Orbit Telecom, da Northwind Coffee e do Lumen Bank ficaram atrasados nos últimos 30 dias? Agrupa-os por cliente e inclui o projeto e o departamento.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Encontrei <strong>6 Jobs que ficaram atrasados nos últimos 30 dias</strong>: 3 da Orbit Telecom, 2 da Northwind Coffee e 1 do Lumen Bank.</p>
    <p><strong>Orbit Telecom</strong></p>
    <Walkthrough.DataTable
      columns={['Job', 'Projeto', 'Departamento']}
      rows={[
        ['ORB0018ACC002 · Media Plan', 'Orbit 5G Launch', 'Account Management'],
        ['ORB0018CR004 · Key Visual Adaptations', 'Orbit 5G Launch', 'Creative'],
        ['ORB0019DIGI001 · Landing Page', 'Orbit Black Friday 2026', 'Digital'],
      ]}
    />
    <p><strong>Northwind Coffee</strong></p>
    <Walkthrough.DataTable
      columns={['Job', 'Projeto', 'Departamento']}
      rows={[
        ['NWC0021ACC001 · Client Presentation', 'Northwind Holiday Menu 2026', 'Account Management'],
        ['NWC0021PROD002 · In-Store Posters', 'Northwind Holiday Menu 2026', 'Production'],
      ]}
    />
    <p><strong>Lumen Bank</strong></p>
    <Walkthrough.DataTable
      columns={['Job', 'Projeto', 'Departamento']}
      rows={[
        ['LUM0033CR001 · Social Templates', 'Lumen Bank Savings Campaign', 'Creative'],
      ]}
    />
    <p><strong>Como interpretei a tua pergunta</strong></p>
    <ul>
      <li>Incluído: Jobs da Orbit Telecom, da Northwind Coffee e do Lumen Bank que estão marcados como atrasados, com data de entrega entre 27 de setembro e 26 de outubro de 2026.</li>
      <li>Assumido: “ficaram atrasados” significa que a data de entrega passou durante esse período. Os Jobs que estiveram atrasados mas já não estão marcados como tal não são incluídos.</li>
      <li>Agrupados por cliente e ordenados por data de entrega e, depois, por número do Job. Os 6 Jobs correspondentes estão todos incluídos.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>E que Jobs destes três clientes vencem nos próximos 7 dias?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>A Northwind Coffee tem 4 Jobs que vencem entre hoje e 3 de novembro</strong> e o Lumen Bank tem 1. A Orbit Telecom não tem Jobs a vencer nesse período.</p>
    <p><strong>Northwind Coffee</strong></p>
    <Walkthrough.DataTable
      columns={['Job', 'Departamento', 'Entrega']}
      rows={[
        ['NWC0021ACC003 · Status Meeting', 'Account Management', '29/10/2026'],
        ['NWC0021CR002 · Menu Board Design', 'Creative', '30/10/2026'],
        ['NWC0022CR001 · Concept Development', 'Creative', '02/11/2026'],
        ['NWC0021PROD003 · Print Proofs', 'Production', '03/11/2026'],
      ]}
    />
    <p><strong>Lumen Bank</strong></p>
    <Walkthrough.DataTable
      columns={['Job', 'Departamento', 'Entrega']}
      rows={[
        ['LUM0033DIGI002 · Display Banners', 'Digital', '03/11/2026'],
      ]}
    />
    <p><strong>Como interpretei a tua pergunta</strong></p>
    <ul>
      <li>Incluído: Jobs da Orbit Telecom, da Northwind Coffee e do Lumen Bank com data de entrega entre 27 de outubro e 3 de novembro de 2026.</li>
      <li>Agrupados por cliente e ordenados por data de entrega e, depois, por número do Job.</li>
    </ul>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Ver os Projetos Atrasados que Precisam da Sua Atenção](/docs/ai/use-cases/projects-and-jobs/identifying-project-delays)
- [Ver os Jobs em que Está a Trabalhar](/docs/ai/use-cases/projects-and-jobs/finding-pending-tasks-and-actions)
- [AI Assistant](/docs/ai/ai-assistant)
