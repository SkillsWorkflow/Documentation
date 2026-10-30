---
id: creating-an-estimate-from-instructions
title: Create an Estimate From Your Instructions
description: "See how an account manager describes the scope, deliverables and hours of a job to the AI Assistant, confirms what is missing, reviews the estimate lines priced from the client's rate card and approves the new estimate."
sidebar_label: Create an Estimate From Instructions
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Overview

Describe the work to the AI Assistant as you would to a colleague: the client and project, the deliverables, and the hours each typology group needs. The assistant prepares the estimate with one line per deliverable and typology group, priced from the rate card on the client, and asks for anything it cannot work out, such as the Estimate Type or the dates. You review the lines and totals on a card before the estimate is created.

:::note Preview
This use case is in preview and has not been tested end to end yet. The conversation shows how the AI Assistant is expected to handle it, and what it answers or does today may differ from this example.
:::

The agency, client, project, estimate, typology groups, rates and values in this example are illustrative. Estimate Types, rate cards and stages depend on your agency's configuration.

<Walkthrough
  subtitle="An example conversation between an account manager and the AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="From a description to an estimate">
        The assistant turns the scope you describe into estimate lines priced from the client’s rate card, and asks before it assumes.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Describe the client, project, deliverables and hours.',
          'Answer what the assistant asks for, such as the Estimate Type.',
          'Check the lines, the Rate Card and Rate Card Column, and the total.',
          'Review the details and select Create.',
          'Open the estimate to add margins, overheads or third-party costs.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Create an estimate for Contoso Bank’s spring campaign with these hours.',
          'Price this scope with the client’s rate card.',
          'Add 8 more Design hours to the landing page.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Rate Card and Rate Card Column come from the client. Name another one if this estimate needs it.',
          'Each line’s value is its hours times the Table Rate of the typology group.',
          'The assistant asks for your approval before it creates the estimate. Select Deny to change it first.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>Create an estimate for Contoso Bank, Spring Savings Campaign. They need a key visual, six social posts and a landing page.</p>
    <ul>
      <li>Key visual: 24h Creative, 16h Design.</li>
      <li>Social posts: 24h Design, 12h Copywriting.</li>
      <li>Landing page: 16h Creative, 20h Design, 12h Copywriting.</li>
      <li>Plus 16h of Accounts for the whole thing.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>I’ll price it with the <strong>Contoso Bank 2026</strong> rate card, <strong>Standard</strong> column, which is set on the client. Which Estimate Type should it use?</p>
    <Walkthrough.Choices label="Estimate Type" options={['Campaign', 'Retainer', 'One-off']} />
    <p><strong>How I read your question</strong></p>
    <ul>
      <li>Assumed: the estimate runs from 1 November 2026 to 31 March 2027, the dates of the Spring Savings Campaign project.</li>
      <li>Assumed: the Accounts hours go on a line of their own, Account Management.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Campaign.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.DataTable
      columns={['Deliverable · Typology group', 'Hours', 'Table Rate', 'Value']}
      rows={[
        ['Key Visual · Creative', '24h', '€85', '€2,040'],
        ['Key Visual · Design', '16h', '€70', '€1,120'],
        ['Social Posts (6) · Design', '24h', '€70', '€1,680'],
        ['Social Posts (6) · Copywriting', '12h', '€65', '€780'],
        ['Landing Page · Creative', '16h', '€85', '€1,360'],
        ['Landing Page · Design', '20h', '€70', '€1,400'],
        ['Landing Page · Copywriting', '12h', '€65', '€780'],
        ['Account Management · Accounts', '16h', '€60', '€960'],
      ]}
      note="140 hours, €10,120."
    />
    <Walkthrough.ApprovalCard
      title="Create this estimate"
      subtitle="Review these details before I create it."
      rows={[
        ['Client', 'Contoso Bank'],
        ['Project', 'Spring Savings Campaign'],
        ['Estimate Type', 'Campaign'],
        ['Name', 'Spring Savings Campaign'],
        ['Start Date', '1 November 2026'],
        ['End Date', '31 March 2027'],
        ['Rate Card', 'Contoso Bank 2026 · Standard'],
        ['Lines', '8 lines, 140h'],
        ['Total', '€10,120'],
      ]}
      actions={[{ label: 'Deny' }, { label: 'Create', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>I reviewed the details and selected Create.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Created" label="2026 - 00417 · Spring Savings Campaign" />
    <p>The estimate was created in New, with 8 lines and a total of €10,120. Open it to add margins, overheads or third-party costs before you send it to the client.</p>
  </Walkthrough.Message>
</Walkthrough>

## Related articles

- [Create Estimate](/docs/product/commercial/estimates/create-estimate)
- [Create Rate Cards](/docs/product/commercial/rates/rate-cards)
- [Create an Estimate From a File](/docs/ai/use-cases/contracts-estimates-and-purchase-orders/creating-an-estimate-from-files)
- [Compare Estimate Scenarios Before Creating One](/docs/ai/use-cases/contracts-estimates-and-purchase-orders/discussing-estimate-scenarios-before-creation)
- [AI Assistant](/docs/ai/ai-assistant)
