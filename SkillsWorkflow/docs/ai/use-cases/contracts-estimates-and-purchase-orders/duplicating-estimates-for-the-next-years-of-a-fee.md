---
id: duplicating-estimates-for-the-next-years-of-a-fee
title: Copy a Client's Fee to the Next Year
description: "See how an account manager renews a client's retainer by asking the AI Assistant to copy this year's Fee, with its estimate, to next year."
sidebar_label: Copy a Fee to the Next Year
sidebar_position: 5
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Overview

When a client renews its retainer, ask the AI Assistant for this year's Fee and its estimate, then ask it to copy them to next year. The assistant asks what the copy should include and shows the new Fee's name and dates on a card. Nothing is created until you select Copy.

The new Fee and its estimate are created as drafts, dated for the new year, and the estimate gets the new year in its name. The assistant tells you what was not copied and gives you a button to open the new estimate.

The agency, client, Fees, estimates, numbers, values and stages in this example are illustrative. The documents you see depend on your access.

<Walkthrough
  subtitle="An example conversation between an account manager and the AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="From this year's Fee to next year's">
        The assistant copies the Fee and its estimate to the new year in one step, after you review the copy on a card.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Ask for the client’s Fee for this year and check its estimate.',
          'Ask the assistant to copy the Fee to next year.',
          'Check the dates and the new names in the assistant’s answer.',
          'Choose what the copy includes: Description, Team or Custom fields, and select Continue.',
          'On the Copy contract card, check the name and dates. Select Edit details to change them.',
          'Select Copy and open the new estimate.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Show me the fee we have with Orvella Tea this year and its estimate.',
          'Copy the Orvella Tea Retainer 2026 fee to next year.',
          'Copy the fee and its estimate to January–December 2027.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'The new Fee and its estimates are created as drafts.',
          'Each estimate moves by the same period as the Fee, with its lines, and gets the new year in its name.',
          'Files, the feed, approval history, monthly splits and billing conditions are not copied.',
          'If the Fee has more than one estimate, the assistant asks which ones to copy.',
          'If a contract with the new name already exists, the assistant asks whether to use it or choose another name.',
          'If the copy fails, nothing is created, and the assistant tells you why.',
          'Nothing is created until you select Copy. Select Discard to stop.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>Orvella Tea has just renewed its retainer for 2027. Show me the fee we have with them this year and its estimate.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Found one 2026 fee and its associated estimate for Orvella Tea, worth <strong>€96,000</strong> excluding tax. The fee and its estimate are both <strong>Approved</strong>.</p>
    <ul>
      <li><strong>Fee:</strong> 2026 - 00031 · Orvella Tea Retainer 2026 · €96,000 · Approved</li>
      <li><strong>Estimate:</strong> 2026 - 00118 · Orvella Tea Retainer 2026 · €96,000 · Approved</li>
    </ul>
    <Walkthrough.Actions items={[{ label: 'What are this fee’s billing terms?' }, { label: 'Show the estimate’s cost and margin' }]} />
    <p><strong>How I read your question</strong></p>
    <ul>
      <li>Included: Orvella Tea’s estimates from 1 January to 26 November 2026 and the linked fee contract.</li>
      <li>Assumed: “this year” means 2026; “fee” means the retainer contract, not an invoice.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Copy the Orvella Tea Retainer 2026 fee to next year.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>I’ll create a 2027 copy of Orvella Tea Retainer 2026, dated 1 Jan–31 Dec 2027, with its one estimate renamed <strong>Orvella Tea Retainer 2027</strong>.</p>
    <Walkthrough.ApprovalCard
      title="Orvella Tea Retainer 2026"
      subtitle="2026 - 00031 · Orvella Tea · Approved · Due 12/31/2026"
      rows={[
        ['Start date', '01/01/2026'],
        ['Total', '96,000.00'],
      ]}
      actions={[]}
    />
    <Walkthrough.Choices
      label="What should the copy include? Choose any"
      options={['Description', 'Team', 'Custom fields']}
    />
    <Walkthrough.Actions items={[{ label: 'Continue', primary: true }]} />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>I selected Description, Team and Custom fields and selected Continue.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Copy contract"
      rows={[
        ['Contract', 'Orvella Tea Retainer 2026'],
        ['Name', 'Orvella Tea Retainer 2027'],
        ['Start date', '01/01/2027'],
        ['End date', '12/31/2027'],
        ['Estimates', 'Orvella Tea Retainer 2026 → Orvella Tea Retainer 2027. Each one moves by the same period as the contract, lines included.'],
        ['Copied', 'Each estimate with its lines and details'],
        ['Includes', 'Description, Team, Custom fields'],
      ]}
      actions={[{ label: 'Edit details' }, { label: 'Discard' }, { label: 'Copy', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>I reviewed the details and selected Copy.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Created the 2027 contract as a <strong>Draft</strong>: <strong>Orvella Tea Retainer 2027</strong>, dated 1 Jan–31 Dec 2027. Its copied estimate, <strong>Orvella Tea Retainer 2027</strong>, is also a <strong>Draft</strong>.</p>
    <p>Files, feed and approval history were not carried over; monthly splits and the estimate’s billing conditions are also not copied.</p>
    <Walkthrough.ApprovalCard
      title="Orvella Tea Retainer 2027"
      subtitle="Contract · Orvella Tea · Draft · Due 12/31/2027"
      rows={[
        ['Start date', '01/01/2027'],
        ['Total', '96,000.00'],
      ]}
      actions={[]}
    />
    <Walkthrough.ApprovalCard
      title="Orvella Tea Retainer 2027"
      subtitle="Estimate · Orvella Tea · Draft · Due 12/31/2027"
      rows={[
        ['Contract', 'Orvella Tea Retainer 2027'],
        ['Start date', '01/01/2027'],
        ['Total', '96,000.00 €'],
      ]}
      actions={[]}
    />
    <Walkthrough.Actions items={[{ label: 'Open the 2027 estimate' }]} />
    <p>✓ Contract created successfully: <strong>Orvella Tea Retainer 2027</strong>.</p>
  </Walkthrough.Message>
</Walkthrough>

## Related articles

- [Fees](/docs/product/commercial/fees)
- [Create Estimate](/docs/product/commercial/estimates/create-estimate)
- [Document Agent](/docs/ai/agents/document-agent)
