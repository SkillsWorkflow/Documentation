---
id: monitoring-critical-activities-across-accounts
title: Verificar as Atividades Críticas dos Seus Clientes
description: "Veja como um diretor de contas pergunta ao Assistente de IA quais clientes têm mais Atividades atrasadas, quais Atividades atrasaram recentemente e o que vence nos próximos sete dias."
sidebar_label: Verificar as Atividades Críticas dos Seus Clientes
sidebar_position: 2
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visão geral

Pergunte ao Assistente de IA, com suas próprias palavras, quais clientes têm mais Atividades atrasadas. Escolha os clientes que você quer acompanhar e pergunte quais Atividades desses clientes atrasaram nos últimos 30 dias e quais vencem na próxima semana. Cada resposta lista as Atividades com o projeto e o departamento, agrupadas por cliente.

A agência, os clientes, os projetos, os números das Atividades, os departamentos e os workspaces neste exemplo são ilustrativos. As Atividades que você vê dependem das Atividades às quais você tem acesso.

<Walkthrough
  subtitle="Um exemplo de conversa entre um diretor de contas e o Assistente de IA."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Atividades críticas por cliente">
        O assistente conta as Atividades atrasadas por cliente e depois lista as Atividades atrasadas e as próximas dos clientes que você indicar, com o projeto e o departamento.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Pergunte quais clientes têm mais Atividades atrasadas.',
          'Escolha os clientes que você quer acompanhar.',
          'Pergunte quais Atividades desses clientes atrasaram em um período recente, como os últimos 30 dias.',
          'Pergunte quais Atividades desses clientes vencem nos próximos sete dias.',
          'Consulte Como interpretei sua pergunta para ver as datas e os clientes que o assistente usou.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Quais clientes têm mais Atividades atrasadas agora?',
          'Quais Atividades desses clientes atrasaram nos últimos 30 dias?',
          'Quais Atividades desses clientes vencem nos próximos 7 dias?',
          'Agrupe por cliente e inclua o projeto e o departamento.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Uma resposta lê até 200 Atividades, a menos que você peça mais. Quando o limite é atingido, o assistente informa que a lista é parcial.',
          'Informe um período, como os últimos 30 dias. Sem isso, Atividades atrasadas de anos anteriores podem ocupar a lista.',
          'O assistente não consegue mostrar quais Atividades estão bloqueadas nem ordenar as Atividades por prioridade.',
          'Consultar Atividades não as altera, por isso não é necessária aprovação.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Você">
    <p>Quais clientes têm mais Atividades atrasadas agora?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>A Orbit Telecom tem a maior parte das Atividades atrasadas entre as 200 Atividades obtidas</strong>, mas não consigo confirmar quais clientes lideram no total: os resultados atingiram o limite de 200 Atividades. Por isso, a divisão por cliente é parcial e não é uma classificação completa.</p>
    <Walkthrough.DataTable
      columns={['Cliente', 'Atividades atrasadas']}
      rows={[
        ['Orbit Telecom', '31'],
        ['Northwind Coffee', '18'],
        ['Lumen Bank', '14'],
        ['Atlas Motors', '11'],
        ['Outros', '126'],
      ]}
      note="Primeiras 200 linhas. A consulta foi limitada, por isso as porcentagens não são mostradas."
    />
    <p>Você pode acompanhar a carga de trabalho e os prazos dos clientes no workspace abaixo.</p>
    <Walkthrough.WorkspaceCard
      title="Global Planning"
      subtitle="Workspace · Menu"
    />
    <p><strong>Como interpretei sua pergunta</strong></p>
    <ul>
      <li>Incluídas: Atividades visíveis para você que estão marcadas como atrasadas, agrupadas por cliente.</li>
      <li>Presumido: “atrasadas agora” se refere ao indicador de atraso atual da Atividade.</li>
      <li>Limite: só foram obtidas 200 Atividades atrasadas. Restringir a menos clientes ou a um período pode permitir uma comparação completa.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>Quais Atividades da Orbit Telecom, da Northwind Coffee e do Lumen Bank atrasaram nos últimos 30 dias? Agrupe por cliente e inclua o projeto e o departamento.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Encontrei <strong>6 Atividades que atrasaram nos últimos 30 dias</strong>: 3 da Orbit Telecom, 2 da Northwind Coffee e 1 do Lumen Bank.</p>
    <p><strong>Orbit Telecom</strong></p>
    <Walkthrough.DataTable
      columns={['Atividade', 'Projeto', 'Departamento']}
      rows={[
        ['ORB0018ACC002 · Media Plan', 'Orbit 5G Launch', 'Account Management'],
        ['ORB0018CR004 · Key Visual Adaptations', 'Orbit 5G Launch', 'Creative'],
        ['ORB0019DIGI001 · Landing Page', 'Orbit Black Friday 2026', 'Digital'],
      ]}
    />
    <p><strong>Northwind Coffee</strong></p>
    <Walkthrough.DataTable
      columns={['Atividade', 'Projeto', 'Departamento']}
      rows={[
        ['NWC0021ACC001 · Client Presentation', 'Northwind Holiday Menu 2026', 'Account Management'],
        ['NWC0021PROD002 · In-Store Posters', 'Northwind Holiday Menu 2026', 'Production'],
      ]}
    />
    <p><strong>Lumen Bank</strong></p>
    <Walkthrough.DataTable
      columns={['Atividade', 'Projeto', 'Departamento']}
      rows={[
        ['LUM0033CR001 · Social Templates', 'Lumen Bank Savings Campaign', 'Creative'],
      ]}
    />
    <p><strong>Como interpretei sua pergunta</strong></p>
    <ul>
      <li>Incluídas: Atividades da Orbit Telecom, da Northwind Coffee e do Lumen Bank que estão marcadas como atrasadas, com data de entrega entre 27 de setembro e 26 de outubro de 2026.</li>
      <li>Presumido: “atrasaram” significa que a data de entrega passou durante esse período. Atividades que estavam atrasadas, mas não estão mais marcadas assim, não são incluídas.</li>
      <li>Agrupadas por cliente e ordenadas por data de entrega e, depois, por número da Atividade. As 6 Atividades correspondentes estão todas incluídas.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Você">
    <p>E quais Atividades desses três clientes vencem nos próximos 7 dias?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>A Northwind Coffee tem 4 Atividades que vencem entre hoje e 3 de novembro</strong> e o Lumen Bank tem 1. A Orbit Telecom não tem Atividades vencendo nesse período.</p>
    <p><strong>Northwind Coffee</strong></p>
    <Walkthrough.DataTable
      columns={['Atividade', 'Departamento', 'Entrega']}
      rows={[
        ['NWC0021ACC003 · Status Meeting', 'Account Management', '29/10/2026'],
        ['NWC0021CR002 · Menu Board Design', 'Creative', '30/10/2026'],
        ['NWC0022CR001 · Concept Development', 'Creative', '02/11/2026'],
        ['NWC0021PROD003 · Print Proofs', 'Production', '03/11/2026'],
      ]}
    />
    <p><strong>Lumen Bank</strong></p>
    <Walkthrough.DataTable
      columns={['Atividade', 'Departamento', 'Entrega']}
      rows={[
        ['LUM0033DIGI002 · Display Banners', 'Digital', '03/11/2026'],
      ]}
    />
    <p><strong>Como interpretei sua pergunta</strong></p>
    <ul>
      <li>Incluídas: Atividades da Orbit Telecom, da Northwind Coffee e do Lumen Bank com data de entrega entre 27 de outubro e 3 de novembro de 2026.</li>
      <li>Agrupadas por cliente e ordenadas por data de entrega e, depois, por número da Atividade.</li>
    </ul>
  </Walkthrough.Message>
</Walkthrough>

## Artigos relacionados

- [Verificar os Projetos Atrasados que Precisam da Sua Atenção](/docs/ai/use-cases/projects-and-jobs/identifying-project-delays)
- [Ver as Atividades em que Você Está Trabalhando](/docs/ai/use-cases/projects-and-jobs/finding-pending-tasks-and-actions)
- [Assistente de IA](/docs/ai/ai-assistant)
