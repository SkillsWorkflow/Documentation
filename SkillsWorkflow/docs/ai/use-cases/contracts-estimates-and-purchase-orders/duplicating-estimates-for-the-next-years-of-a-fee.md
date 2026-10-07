---
id: duplicating-estimates-for-the-next-years-of-a-fee
title: Copy a Fee's Estimate to the Next Year With Inflation
description: "See how an account manager asks the AI Assistant to copy last year's estimate on a multi-year Fee to a new year, with new dates and an inflation rate, and then activate the copy."
sidebar_label: Copy an Estimate to the Next Year
sidebar_position: 5
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Overview

Ask the AI Assistant to copy an estimate from an earlier year of a multi-year Fee to a new year. The copy stays on the same Fee. You give it the new dates and an inflation rate, choose what else to carry over, and approve the copy before it is created. The assistant can then activate the new estimate.

:::note Preview
Today the assistant copies the estimate with its lines, on the same Fee, and can activate the copy. The copy keeps the original's **Start Date**, **End Date** and values. Setting the new dates and the **Inflation %** field on the copy is in preview, so open the new estimate's **Info** and set them before you use it.
:::

The agency, client, Fee, estimate names, numbers and stages in this example are illustrative. The stages and transitions you see depend on the estimate's workflow.

<Walkthrough
  subtitle="An example conversation between an account manager and the AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Next year's estimate from last year's">
        The assistant finds the estimate on the Fee, copies it with its lines and the details you choose, and activates the copy with your approval.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Name the Fee and the estimate to copy, the new dates and the inflation rate.',
          'Choose what the copy includes: Description, Team or Custom fields.',
          'Review the details and select Duplicate.',
          'Check the new estimate’s Start Date, End Date and Inflation % in its Info.',
          'Ask the assistant to activate the new estimate.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Copy the 2024 estimate on the BBC fee to 2026, with 10% inflation.',
          'Duplicate estimate 2024 - 00195 for January to December 2026.',
          'Activate the estimate.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Preview: the copy keeps the original estimate’s dates and values. Set Start Date, End Date and Inflation % in the new estimate’s Info.',
          'Inflation % is applied to the estimate lines, so the values change when you set it.',
          'The copy is always created on the same Fee as the original.',
          'The assistant asks for your approval before it creates the copy. Select Deny to leave things as they are.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>On the BBC 2024–2026 fee, copy the estimate 2024 - 00195 to 2026, with dates from 1 January 2026 to 31 December 2026, and apply a 10% inflation rate.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>I found estimate <strong>2024 - 00195 · FEE</strong> on the BBC fee. What should the copy include?</p>
    <Walkthrough.JobList
      title="Estimates · BBC"
      rows={[
        { title: 'FEE', number: '2024 - 00195', stage: 'Invoiced' },
      ]}
    />
    <Walkthrough.Choices
      label="What should the copy include? Choose any"
      options={['Description', 'Team', 'Custom fields']}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Description and Team.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Duplicate this document"
      subtitle="Review these details before I duplicate it."
      rows={[
        ['Duplicating', '2024 - 00195 · FEE'],
        ['Document type', 'Estimate'],
        ['New name', 'FEE 2026'],
        ['Start Date', '1 January 2026'],
        ['End Date', '31 December 2026'],
        ['Inflation %', '10'],
        ['Includes', 'Description, Team'],
      ]}
      actions={[{ label: 'Deny' }, { label: 'Duplicate', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>I reviewed the details and selected Duplicate.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Updated" label="Duplicate this document" />
    <p>The estimate was duplicated as <strong>2024 - 00237 · FEE 2026</strong> on the BBC fee, dated 1 January to 31 December 2026, with Inflation % set to 10. The estimate lines were updated with the inflation.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Activate the estimate.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Updated" label="2024 - 00237 · FEE 2026" />
    <p>The estimate was activated and moved to New.</p>
  </Walkthrough.Message>
</Walkthrough>

## Related articles

- [Fees](/docs/product/commercial/fees)
- [Create Estimate](/docs/product/commercial/estimates/create-estimate)
- [Document Agent](/docs/ai/agents/document-agent)
