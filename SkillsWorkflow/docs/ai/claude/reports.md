---
id: ai-claude-reports
title: Build a Report From Your Data
description: "Ask Claude for a report with tables and charts built on your Skills Workflow data extraction queries: retainer burn, billing by month, jobs by stage, hours by client."
sidebar_label: A Report From Your Data
sidebar_position: 5
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

Ask Claude for the report you would otherwise build in a spreadsheet every month: the hours used on a retainer, billing by month, jobs by stage, time by client. Claude builds it on your data extraction queries, the same ones behind your Skills Workflow reports, and publishes it with tables and charts. The figures are calculated when someone opens the report.

## Availability

Available. You need the [Skills Workflow connector in Claude](/docs/ai/claude/ai-claude-connect). The report reads the data extraction queries published on your tenant; the list is in [Data Extraction API](/docs/build-and-extend/api/data-extraction-api). A question no query answers needs the query first.

## How to ask for it

1. Say who the report is for and the question it answers, for example "how much of Contoso's retainer is used this quarter".
2. Name the figures and the period. Claude picks the query and the columns and tells you which.
3. Ask for only the columns the report shows. A person allowed to run a query receives every column the report asks for, costs and rates included, even when the page does not draw them.
4. Review the report as someone who is not allowed to run the query: they see a message saying they have no access, not an empty table.

The agency, client, numbers and address in this example are illustrative.

<Walkthrough
  title="Claude"
  subtitle="An example conversation between a finance manager and Claude."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="The monthly spreadsheet, without the spreadsheet">
        Claude builds the report on your own queries. It is filtered and summed in Skills Workflow before a single row reaches the page.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Name the question, the figures and the period.',
          'Check which query and columns Claude chose.',
          'Leave out cost and rate columns the readers should not receive.',
          'Open the report as someone without access.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Report the hours on Contoso’s retainer by month, against the contracted hours.',
          'Add a chart of billing by month for this year.',
          'Show jobs by stage for the Northwind account.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>I need a report of the hours recorded on Contoso Bank’s retainer, month by month this year, against the contracted hours.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <p>I will build it on your time sheets query, filtered to Contoso Bank and 2026, grouped by month:</p>
    <Walkthrough.DataTable
      columns={['Month', 'Recorded', 'Contracted', 'Used']}
      rows={[
        ['July', '312 h', '320 h', '98%'],
        ['August', '205 h', '320 h', '64%'],
        ['September', '341 h', '320 h', '107%'],
      ]}
      note="A line chart of recorded against contracted hours goes above the table. No cost or rate columns are requested."
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Good. Publish it for the Contoso account team.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <Walkthrough.StatusChip status="Published" label="contoso-bank/retainer-hours" />
    <p>Published. People who are not allowed to run the time sheets query see a message saying so.</p>
  </Walkthrough.Message>
</Walkthrough>

## Rules and behaviour

- Queries are read-only. A report never changes data.
- Each query checks its roles. A person without them is refused the data in the report, as they are in Skills Workflow.
- Charts are drawn inside the page. A report cannot load chart libraries or anything else from another site.
- The report shows data as it is when it opens. For a copy of the figures at a given moment, see [Print or Send a Report as It Stands Today](/docs/ai/claude/ai-claude-printable-reports).

## Related articles

- [Data Extraction API](/docs/build-and-extend/api/data-extraction-api)
- [Print or Send a Report as It Stands Today](/docs/ai/claude/ai-claude-printable-reports)
- [Share a Live Status Page With a Client](/docs/ai/claude/ai-claude-client-status-page)
- [Client Portals](/docs/ai/ai-portals)
