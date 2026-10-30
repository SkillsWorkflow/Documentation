---
id: ai-claude-printable-reports
title: Print or Send a Report as It Stands Today
description: "Ask Claude for a report laid out for paper: the monthly status report or the end-of-campaign summary, dated, printed or saved as PDF from the browser and sent to whoever needs it."
sidebar_label: A Report to Print or Send
sidebar_position: 7
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
This is in preview and has not been tested end to end yet. It is built with what Skills Workflow offers today; check the printed result before sending it.
:::

Some reports are meant to leave Skills Workflow: the monthly status report attached to an email, the end-of-campaign summary for the client's procurement team, the figures for a board meeting. Ask Claude for a report laid out for paper. Open it on the day you need it, and print it or save it as PDF from the browser. The PDF holds the figures as they were at that moment, with the date printed on it.

## Availability

Preview. You need the [Skills Workflow connector in Claude](/docs/ai/claude/ai-claude-connect). Saving a copy of the report inside Skills Workflow, kept as it was on a date, is not available.

## How to ask for it

1. Ask for the report and say it is meant to be printed or saved as PDF, and on what paper size.
2. Ask for the date and time of the figures to be printed on every page.
3. Ask for a **Print** button on the page and nothing on paper that only makes sense on screen, such as filters and links.
4. Open the report, select **Print**, and choose your printer or **Save as PDF**.

The agency, client and numbers in this example are illustrative.

<Walkthrough
  title="Claude"
  subtitle="An example conversation between an account director and Claude."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="A dated copy to send">
        The report reads today's data when you open it. The PDF you save keeps it as it was.
      </Walkthrough.CapabilityCard>
      <Walkthrough.PhrasingCard
        items={[
          'Make Contoso’s monthly status report printable on A4.',
          'Print the date of the figures in the footer of every page.',
          'Start each project on a new page.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Whoever receives the PDF needs no Skills Workflow user.',
          'Check what the PDF shows before sending it outside the agency.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>I send Contoso Bank a status report at the end of every month. Make me a version of their status page laid out for A4, with the date on every page, that I can save as PDF.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <p>I published a print version next to the status page:</p>
    <Walkthrough.FieldTable
      rows={[
        ['Paper', 'A4, portrait'],
        ['Every page', 'Contoso Bank logo, the report title and “Figures as of” with the date and time'],
        ['Each project', 'Starts on a new page'],
        ['On screen only', 'The Print button'],
      ]}
    />
    <p>Open <code>/portal/contoso-bank/monthly-report/</code>, select Print and choose Save as PDF.</p>
  </Walkthrough.Message>
</Walkthrough>

## Rules and behaviour

- The report on screen always shows today's figures. Only the printed or saved copy is fixed.
- The PDF leaves Skills Workflow with you. Permissions no longer apply to whoever you send it to.

## Related articles

- [Build a Report From Your Data](/docs/ai/claude/ai-claude-reports)
- [Share a Live Status Page With a Client](/docs/ai/claude/ai-claude-client-status-page)
- [Skills Workflow in Claude](/docs/ai/claude)
