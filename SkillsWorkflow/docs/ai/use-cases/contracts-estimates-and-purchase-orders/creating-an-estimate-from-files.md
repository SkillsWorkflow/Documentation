---
id: creating-an-estimate-from-files
title: Create an Estimate From a File
description: "See how an account manager attaches a client's scope spreadsheet to the AI Assistant, checks the deliverables, hours and third-party costs it extracts, answers what is missing and approves the new estimate."
sidebar_label: Create an Estimate From a File
sidebar_position: 2
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
This use case is in preview, the conversation shows how the AI Assistant is expected to handle it, and what it answers or does today may differ from this example.
:::

## Overview

Attach the file that describes the work, such as a client brief, a scope spreadsheet or a supplier quote, and ask the AI Assistant for an estimate. The assistant extracts the deliverables, the hours per typology group, the third-party costs and the expenses, prices the hours from the rate card on the client, and lists what the file does not say. Answer what is missing, review the estimate on a card and approve it.

The agency, client, file, estimate, suppliers, rates and values in this example are illustrative. Estimate Types, rate cards and stages depend on your agency's configuration.

<Walkthrough
  subtitle="An example conversation between an account manager and the AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="From a scope file to an estimate">
        The assistant reads the file, builds the estimate lines from it and flags every gap before anything is created.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Attach the file and say which client and project it is for.',
          'Check the deliverables, hours and costs the assistant extracted.',
          'Answer the gaps the assistant flags.',
          'Review the details and select Create.',
          'Open the estimate and check it against the file.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Create an estimate from this brief for Fabrikam Motors.',
          'Use the hours in this spreadsheet and the client’s rate card.',
          'Leave the printing out until we have a quote.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'The assistant only uses what is in the file and what you tell it. Anything it cannot find is listed as missing.',
          'Hours are priced from the client’s Rate Card. Third-party costs and expenses keep the values in the file.',
          'The file is not attached to the estimate. Add it to the estimate’s files if the team needs it.',
          'The assistant asks for your approval before it creates the estimate. Select Deny to change it first.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>Create an estimate for Fabrikam Motors, Showroom Launch project, from the attached scope.</p>
    <p><strong>Attached:</strong> Fabrikam_Showroom_Launch_scope.xlsx</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>The file describes four deliverables, a photo shoot and travel:</strong></p>
    <Walkthrough.DataTable
      columns={['Line', 'Component', 'Quantity', 'Value']}
      rows={[
        ['Showroom Brochure · Creative, Design, Copywriting', 'Resources', '24h · 80h · 30h', '€9,590'],
        ['POS Displays · Design', 'Resources', '70h', '€4,900'],
        ['Dealer Social Templates · Creative, Design, Copywriting', 'Resources', '56h · 50h · 30h', '€10,210'],
        ['Account Management · Accounts', 'Resources', '40h', '€2,400'],
        ['Product Photo Shoot', 'Third Party Costs', '1', '€10,500'],
        ['Travel to Shoot Location', 'Expenses', '1', '€900'],
      ]}
      note="Hours priced with the Fabrikam Motors 2026 rate card, Standard column."
    />
    <p><strong>Missing from the file</strong></p>
    <ul>
      <li>The photo shoot has a value but no supplier.</li>
      <li>The file mentions printing 500 brochures, with no value.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>The shoot is with Lumen Studio. Leave the printing out until we have a quote.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Create this estimate"
      subtitle="Review these details before I create it."
      rows={[
        ['Client', 'Fabrikam Motors'],
        ['Project', 'Showroom Launch'],
        ['Estimate Type', 'Campaign'],
        ['Name', 'Showroom Launch'],
        ['Rate Card', 'Fabrikam Motors 2026 · Standard'],
        ['Resources', '8 lines, 380h, €27,100'],
        ['Third Party Costs', 'Product Photo Shoot, Lumen Studio, €10,500'],
        ['Expenses', 'Travel to Shoot Location, €900'],
        ['Total', '€38,500'],
        ['Not included', 'Brochure printing'],
      ]}
      actions={[{ label: 'Deny' }, { label: 'Create', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>I reviewed the details and selected Create.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Created" label="2026 - 00418 · Showroom Launch" />
    <p>The estimate was created in New, with a total of €38,500. Add the brochure printing as a third-party cost when the quote arrives.</p>
  </Walkthrough.Message>
</Walkthrough>

## Related articles

- [Create Estimate](/docs/product/commercial/estimates/create-estimate)
- [Create an Estimate From Your Instructions](/docs/ai/use-cases/contracts-estimates-and-purchase-orders/creating-an-estimate-from-instructions)
- [Files](/docs/product/files-and-collaboration/files)
- [AI Assistant](/docs/ai/ai-assistant)
