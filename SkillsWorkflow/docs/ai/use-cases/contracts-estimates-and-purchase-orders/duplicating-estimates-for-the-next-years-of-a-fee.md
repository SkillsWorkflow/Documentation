---
id: duplicating-estimates-for-the-next-years-of-a-fee
title: Copy a Client's Fee to the Next Year
description: "See how an account manager renews a client's retainer by asking the AI Assistant to copy this year's Fee, with its estimate, to next year, apply an inflation rate to the estimate lines and activate the new estimate."
sidebar_label: Copy a Fee to the Next Year
sidebar_position: 5
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Copying the whole Fee is in preview. Today the assistant copies only the estimate, with its lines, and the copy stays on the original Fee: it does not create a new Fee. The copy keeps the original's **Start Date**, **End Date** and values. Setting the new dates and the **Inflation %** field on the copy is also in preview, so open the new estimate's **Info** and set them before you use it. The assistant can activate the copy.
:::

## Overview

Tell the AI Assistant which client's Fee to renew and the inflation rate to apply. The assistant finds this year's Fee and its estimate, and copies both to the next year in the same step: the new Fee's name and dates, and the estimate with its lines, the inflation rate applied to its values and the description, team or custom fields you choose to carry over. You review everything on a card before anything is created.

Once the copy exists, the assistant shows the new estimate's values next to last year's. You can then ask it to activate the new estimate, so the team can start planning the year's work.

The agency, client, Fees, estimates, numbers, hours, values and stages in this example are illustrative. The documents you see depend on your access, and the stages and transitions depend on the estimate's workflow.

<Walkthrough
  subtitle="An example conversation between an account manager and the AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="From this year's Fee to next year's">
        The assistant copies the Fee and its estimate to the new year, applies the inflation rate you ask for to the estimate lines, and activates the new estimate with your approval.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Ask for the client’s Fee for this year and check its estimate.',
          'Ask the assistant to copy the Fee to next year and name the inflation rate.',
          'Check How I read your question to confirm the new dates.',
          'Choose what the estimate copy includes: Description, Team or Custom fields.',
          'Review the details and select Duplicate.',
          'Check the new Fee, and the new estimate’s Start Date, End Date and Inflation % in its Info.',
          'Ask the assistant to activate the new estimate.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Show me the fee we have with Northwind Coffee this year and its estimate.',
          'Copy the Northwind Coffee Retainer 2026 fee and apply a 5% inflation rate.',
          'Duplicate the fee for January to December 2027.',
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
    <p>Northwind Coffee has just renewed its retainer for 2027. Show me the fee we have with them this year and its estimate.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Northwind Coffee has one fee for 2026, Northwind Coffee Retainer 2026</strong>, from 1 January to 31 December 2026. It has one estimate, <strong>2026 - 00031 · Retainer 2026</strong>, for 4,800 hours and €312,000:</p>
    <Walkthrough.DataTable
      columns={['Typology group', 'Hours', 'Value']}
      rows={[
        ['Creative', '1,800h', '€126,000'],
        ['Design', '1,400h', '€84,000'],
        ['Copywriting', '900h', '€58,500'],
        ['Accounts', '700h', '€43,500'],
      ]}
      note="The estimate is in Invoiced."
    />
    <p><strong>How I read your question</strong></p>
    <ul>
      <li>Included: Northwind Coffee fees with dates in 2026, and the estimates on them.</li>
      <li>Assumed: “this year” means 1 January to 31 December 2026.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Copy the Northwind Coffee Retainer 2026 fee to next year and apply a 5% inflation rate.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>I'll copy the fee and its estimate to 2027 and set Inflation % to 5 on the new estimate. What should the estimate copy include?</p>
    <Walkthrough.Choices
      label="What should the copy include? Choose any"
      options={['Description', 'Team', 'Custom fields']}
    />
    <p><strong>How I read your question</strong></p>
    <ul>
      <li>Assumed: “next year” means 1 January to 31 December 2027, the same period as the original fee, one year later.</li>
      <li>Assumed: the new fee is named Northwind Coffee Retainer 2027 and the new estimate Retainer 2027.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Description and Team.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Duplicate this fee"
      subtitle="Review these details before I duplicate it."
      rows={[
        ['Duplicating', 'Northwind Coffee Retainer 2026'],
        ['Document type', 'Fee'],
        ['New fee name', 'Northwind Coffee Retainer 2027'],
        ['Start Date', '1 January 2027'],
        ['End Date', '31 December 2027'],
        ['Estimate', '2026 - 00031 · Retainer 2026'],
        ['New estimate name', 'Retainer 2027'],
        ['Inflation %', '5'],
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
    <p>The fee was duplicated as <strong>Northwind Coffee Retainer 2027</strong>, dated 1 January to 31 December 2027. Its estimate was copied to the new fee as <strong>2026 - 00412 · Retainer 2027</strong>, with the same dates and Inflation % set to 5. The estimate lines were updated with the inflation:</p>
    <Walkthrough.DataTable
      columns={['Typology group', 'Hours', '2026', '2027']}
      rows={[
        ['Creative', '1,800h', '€126,000', '€132,300'],
        ['Design', '1,400h', '€84,000', '€88,200'],
        ['Copywriting', '900h', '€58,500', '€61,425'],
        ['Accounts', '700h', '€43,500', '€45,675'],
      ]}
      note="The hours are the same as in 2026. The total goes from €312,000 to €327,600."
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Activate the estimate.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Updated" label="2026 - 00412 · Retainer 2027" />
    <p>The estimate was activated and moved to New.</p>
  </Walkthrough.Message>
</Walkthrough>

## Related articles

- [Fees](/docs/product/commercial/fees)
- [Create Estimate](/docs/product/commercial/estimates/create-estimate)
- [Document Agent](/docs/ai/agents/document-agent)
