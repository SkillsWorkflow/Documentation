---
id: discussing-estimate-scenarios-before-creation
title: Compare Estimate Scenarios Before Creating One
description: "See how an account manager asks the AI Assistant to compare a full scope, a reduced scope and a discounted rate against a client's budget, and creates the estimate from the chosen scenario."
sidebar_label: Compare Estimate Scenarios
sidebar_position: 4
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
This use case is in preview, the conversation shows how the AI Assistant is expected to handle it, and what it answers or does today may differ from this example.
:::

## Overview

Before you create an estimate, ask the AI Assistant to compare the options you are weighing: a different scope, fewer hours for a typology group, or another column of the client's rate card. The assistant prices each scenario, shows the hours and the total side by side, and tells you how each one fits the client's budget. When you choose one, it prepares the estimate from it for your approval.

The agency, client, project, rate card columns, rates and values in this example are illustrative. Rate cards and their columns depend on your agency's configuration.

<Walkthrough
  subtitle="An example conversation between an account manager and the AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Options side by side">
        The assistant prices each scenario with the client’s rate card and compares them against the budget, so you choose before anything is created.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Describe the scope and the client’s budget.',
          'Name the scenarios to compare.',
          'Read the hours, total and difference to budget for each.',
          'Choose a scenario and ask the assistant to create the estimate.',
          'Review the details and select Create.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'What if we drop the landing page?',
          'Price this with the Discount 10% column instead.',
          'Which option fits a budget of €9,500?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Scenarios are only compared in the chat. Nothing is created until you approve an estimate.',
          'Each scenario is priced from the Rate Card and Rate Card Column you name, or the ones on the client.',
          'Ask for as many scenarios as you need, and change one at a time to see its effect.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>Contoso Bank has a budget of €9,500 for the Spring Savings Campaign: key visual, six social posts and a landing page, 140 hours in total. Compare the full scope at Standard rates, a version with three posts and no landing page, and the full scope at the Discount 10% column.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Only the discounted full scope fits the budget:</strong></p>
    <Walkthrough.DataTable
      columns={['Scenario', 'Hours', 'Total', 'Against €9,500']}
      rows={[
        ['A · Full scope, Standard', '140h', '€10,120', '€620 over'],
        ['B · Three posts, no landing page, Standard', '74h', '€5,350', '€4,150 under'],
        ['C · Full scope, Discount 10%', '140h', '€9,108', '€392 under'],
      ]}
      note="Rates from the Contoso Bank 2026 rate card."
    />
    <ul>
      <li>A delivers everything, €620 above the budget.</li>
      <li>B is about half the hours, and the campaign has no landing page.</li>
      <li>C delivers everything with 10% less income on the same hours.</li>
    </ul>
    <p><strong>How I read your question</strong></p>
    <ul>
      <li>Assumed: in B, the key visual and Accounts hours stay the same, the social posts take half the hours and the landing page hours are removed.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Go with C. Create the estimate.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Create this estimate"
      subtitle="Review these details before I create it."
      rows={[
        ['Client', 'Contoso Bank'],
        ['Project', 'Spring Savings Campaign'],
        ['Estimate Type', 'Campaign'],
        ['Name', 'Spring Savings Campaign'],
        ['Rate Card', 'Contoso Bank 2026 · Discount 10%'],
        ['Lines', '8 lines, 140h'],
        ['Total', '€9,108'],
      ]}
      actions={[{ label: 'Deny' }, { label: 'Create', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>I reviewed the details and selected Create.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Created" label="2026 - 00417 · Spring Savings Campaign" />
    <p>The estimate was created in New, with a total of €9,108.</p>
  </Walkthrough.Message>
</Walkthrough>

## Related articles

- [Create an Estimate From Your Instructions](/docs/ai/use-cases/contracts-estimates-and-purchase-orders/creating-an-estimate-from-instructions)
- [Create Rate Cards](/docs/product/commercial/rates/rate-cards)
- [Create Estimate](/docs/product/commercial/estimates/create-estimate)
- [AI Assistant](/docs/ai/ai-assistant)
