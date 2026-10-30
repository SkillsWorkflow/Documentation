---
id: updating-rate-cards
title: Update a Rate Card
description: "See how a finance manager asks the AI Assistant to raise a client's rates for some typology groups from a new date, reviews the current and new rates for every column, sees which estimates use the rate card and approves the change."
sidebar_label: Update a Rate Card
sidebar_position: 3
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
This use case is in preview, the conversation shows how the AI Assistant is expected to handle it, and what it answers or does today may differ from this example.
:::

## Overview

Tell the AI Assistant which rate card to change, which typology groups or users, by how much and from when, or attach the file with the new rates. The assistant shows the current and the new rate for every column of the rate card, and lists the estimates that use it, so you can decide whether they need new prices too. You choose whether to change the rate card or create a new one for the new period, and review the change on a card before it is applied.

The agency, client, rate cards, columns, rates and estimates in this example are illustrative. Rate cards and their columns depend on your agency's configuration.

<Walkthrough
  subtitle="An example conversation between a finance manager and the AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="New rates with their impact in view">
        The assistant prepares the new rates for every column and shows which estimates use the rate card before anything changes.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Name the rate card, the typology groups or users, the change and the date.',
          'Choose whether to change the rate card or create one for the new period.',
          'Check the current and new rates for each column.',
          'Check the estimates that use the rate card.',
          'Review the details and select Create or Update.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Raise Design rates on the Northwind rate card by 4% from January.',
          'Update the rate card with the attached price list.',
          'Which estimates use the Northwind Coffee 2026 rate card?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'A rate card has a Start Date and an End Date. A new period usually means a new rate card.',
          'The change applies to every column of the rate card unless you name one.',
          'Estimates that use the rate card are listed so you can check them with the account team.',
          'The assistant asks for your approval before it changes anything. Select Deny to leave the rate card as it is.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>Raise Design and Copywriting on the Northwind Coffee rate card by 4% from 1 January 2027.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>The <strong>Northwind Coffee 2026</strong> rate card runs from 1 January to 31 December 2026. Should I change it, or create a new one for 2027 with the new rates?</p>
    <Walkthrough.Choices
      label="Rate card"
      options={['Create Northwind Coffee 2027', 'Change Northwind Coffee 2026']}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Create the 2027 one.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.DataTable
      columns={['Typology group · Column', '2026', '2027']}
      rows={[
        ['Design · Standard', '€70.00', '€72.80'],
        ['Design · Discount 10%', '€63.00', '€65.52'],
        ['Copywriting · Standard', '€65.00', '€67.60'],
        ['Copywriting · Discount 10%', '€58.50', '€60.84'],
      ]}
      note="Creative and Accounts keep their 2026 rates."
    />
    <p><strong>Two estimates for 2027 use the 2026 rate card:</strong> 2026 - 00412 · Retainer 2027 and 2026 - 00409 · Gift Card Design. Check with the account team whether they should move to the new rate card.</p>
    <Walkthrough.ApprovalCard
      title="Create this rate card"
      subtitle="Review these details before I create it."
      rows={[
        ['Name', 'Northwind Coffee 2027'],
        ['Copied from', 'Northwind Coffee 2026'],
        ['Company', 'Bluebird Creative'],
        ['Start Date', '1 January 2027'],
        ['End Date', '31 December 2027'],
        ['Change', 'Design and Copywriting +4%, all columns'],
      ]}
      actions={[{ label: 'Deny' }, { label: 'Create', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>I reviewed the details and selected Create.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Created" label="Northwind Coffee 2027" />
    <p>The rate card was created with the new Design and Copywriting rates. Set it on the Northwind Coffee client to use it in new estimates.</p>
  </Walkthrough.Message>
</Walkthrough>

## Related articles

- [Create Rate Cards](/docs/product/commercial/rates/rate-cards)
- [Price Tables](/docs/product/commercial/rates/price-tables)
- [Create Estimate](/docs/product/commercial/estimates/create-estimate)
- [AI Assistant](/docs/ai/ai-assistant)
