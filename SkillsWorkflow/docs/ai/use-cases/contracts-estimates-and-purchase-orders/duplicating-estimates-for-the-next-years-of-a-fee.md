---
id: duplicating-estimates-for-the-next-years-of-a-fee
title: Copy a Fee and Its Estimate to the Next Year With Inflation
description: "See how an account manager asks the AI Assistant to copy last year's Fee, with its estimate, to a new year, with new dates and an inflation rate, and then activate the new estimate."
sidebar_label: Copy a Fee to the Next Year
sidebar_position: 5
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Overview

Ask the AI Assistant to copy a Fee to the next year: the Fee itself and the estimate on it. You give it the new dates and an inflation rate, choose what else the estimate copy carries over, and approve the copy before it is created. The new estimate is created on the new Fee, and the assistant can then activate it.

:::note Preview
Copying the whole Fee is in preview. Today the assistant copies only the estimate, with its lines, and the copy stays on the original Fee: it does not create a new Fee. The copy keeps the original's **Start Date**, **End Date** and values. Setting the new dates and the **Inflation %** field on the copy is also in preview, so open the new estimate's **Info** and set them before you use it. The assistant can activate the copy.
:::

The agency, client, Fees, estimate names, numbers and stages in this example are illustrative. The stages and transitions you see depend on the estimate's workflow.

<Walkthrough
  subtitle="An example conversation between an account manager and the AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Next year's Fee from last year's">
        The assistant finds the Fee and its estimate, copies both to the new year with the dates, inflation rate and details you choose, and activates the new estimate with your approval.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Name the Fee to copy, the new dates and the inflation rate.',
          'Choose what the estimate copy includes: Description, Team or Custom fields.',
          'Review the details and select Duplicate.',
          'Check the new Fee, and the new estimate’s Start Date, End Date and Inflation % in its Info.',
          'Ask the assistant to activate the new estimate.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Copy the BBC 2025 fee and its estimate to 2026, with 10% inflation.',
          'Duplicate the BBC 2025 fee for January to December 2026.',
          'Activate the estimate.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Preview: today only the estimate is copied, and the copy stays on the original Fee. The new Fee is not created.',
          'Preview: the estimate copy keeps the original’s dates and values. Set Start Date, End Date and Inflation % in the new estimate’s Info.',
          'Inflation % is applied to the estimate lines, so the values change when you set it.',
          'The assistant asks for your approval before it creates the copy. Select Deny to leave things as they are.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>Copy the BBC 2025 fee and its estimate to 2026, with dates from 1 January 2026 to 31 December 2026, and apply a 10% inflation rate.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>I found the <strong>BBC 2025</strong> fee and its estimate <strong>2025 - 00195 · FEE</strong>. What should the estimate copy include?</p>
    <Walkthrough.JobList
      title="Estimates · BBC 2025"
      rows={[
        { title: 'FEE', number: '2025 - 00195', stage: 'Invoiced' },
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
      title="Duplicate this fee"
      subtitle="Review these details before I duplicate it."
      rows={[
        ['Duplicating', 'BBC 2025'],
        ['Document type', 'Fee'],
        ['New fee name', 'BBC 2026'],
        ['Start Date', '1 January 2026'],
        ['End Date', '31 December 2026'],
        ['Estimate', '2025 - 00195 · FEE'],
        ['New estimate name', 'FEE 2026'],
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
    <Walkthrough.StatusChip status="Updated" label="Duplicate this fee" />
    <p>The fee was duplicated as <strong>BBC 2026</strong>, dated 1 January to 31 December 2026. Its estimate was copied to the new fee as <strong>2026 - 00012 · FEE 2026</strong>, with the same dates and Inflation % set to 10. The estimate lines were updated with the inflation.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Activate the estimate.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Updated" label="2026 - 00012 · FEE 2026" />
    <p>The estimate was activated and moved to New.</p>
  </Walkthrough.Message>
</Walkthrough>

## Related articles

- [Fees](/docs/product/commercial/fees)
- [Create Estimate](/docs/product/commercial/estimates/create-estimate)
- [Document Agent](/docs/ai/agents/document-agent)
