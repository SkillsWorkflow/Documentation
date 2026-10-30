---
id: analyzing-client-profitability
title: Analyze Client Profitability
description: "See how an account director asks the AI Assistant how profitable a client is, compares income and cost per project, finds why a project is losing margin and opens the Profitability Workspace."
sidebar_label: Analyze Client Profitability
sidebar_position: 4
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
This use case is in preview, the conversation shows how the AI Assistant is expected to handle it, and what it answers or does today may differ from this example.
:::

## Overview

Ask the AI Assistant how profitable a client is over a period. It compares each project's income with its cost and shows the margin, with the most and least profitable projects first. Follow up on a project to see where the cost went, by typology group, and open the client's **Profitability Workspace** to keep following it.

The agency, client, projects and values in this example are illustrative. The figures you see depend on your access and on the data your agency makes available to the assistant.

<Walkthrough
  subtitle="An example conversation between an account director and the AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="From a client to its margins">
        The assistant compares income and cost across the client’s projects and shows where the margin is made and where it is lost.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Ask how profitable the client was over a period.',
          'Read the income, cost and margin per project.',
          'Check How I read your question to see how income and cost were calculated.',
          'Ask why a project is below the others.',
          'Open the Profitability Workspace on the client.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'How profitable was Northwind Coffee this year?',
          'Which of my clients has the lowest margin?',
          'Why is Holiday Packaging losing money?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Income comes from the hours sold on the estimates. Cost comes from the hours recorded and each person’s cost.',
          'Costs and margins are only shown to people whose profile can see them.',
          'Third-party costs and expenses are included when they are on the project’s estimates.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>How profitable was Northwind Coffee this year?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Northwind Coffee brought €486,000 in income this year, with a cost of €352,400 and a margin of 27%.</strong></p>
    <Walkthrough.DataTable
      columns={['Project', 'Income', 'Cost', 'Margin', 'Margin %']}
      rows={[
        ['Retainer 2026', '€312,000', '€218,400', '€93,600', '30%'],
        ['Northwind Christmas 2026', '€124,000', '€89,300', '€34,700', '28%'],
        ['Holiday Packaging', '€50,000', '€44,700', '€5,300', '11%'],
      ]}
    />
    <p><strong>How I read your question</strong></p>
    <ul>
      <li>Included: Northwind Coffee projects with hours recorded from 1 January to today.</li>
      <li>Assumed: income is the hours sold on the estimates at their sale value, and cost is the hours recorded at each person’s cost.</li>
    </ul>
    <Walkthrough.Source label="Profitability · 3 rows" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Why is Holiday Packaging so much lower?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Design recorded 62% more hours than were sold:</strong></p>
    <Walkthrough.DataTable
      columns={['Typology group', 'Hours sold', 'Hours recorded', 'Cost over income']}
      rows={[
        ['Design', '240h', '389h', '€8,900'],
        ['Copywriting', '80h', '76h', '—'],
        ['Accounts', '60h', '71h', '€600'],
      ]}
      note="Most of the extra design hours were recorded in September, after the client asked for a third packaging round."
    />
    <p>To follow the margin per project and typology, open the client’s <strong>Profitability Workspace</strong>.</p>
    <Walkthrough.WorkspaceCard
      title="Profitability Workspace"
      subtitle="Workspace · Client"
      description="Planned profit and margin per project and per typology, with the most profitable projects first."
    />
  </Walkthrough.Message>
</Walkthrough>

## Related articles

- [Client Workspace](/docs/product/dashboards-and-reporting/client-dashboard)
- [Create Estimate](/docs/product/commercial/estimates/create-estimate)
- [Check Critical Jobs Across Your Clients](/docs/ai/use-cases/accounts-status/monitoring-critical-activities-across-accounts)
- [AI Assistant](/docs/ai/ai-assistant)
