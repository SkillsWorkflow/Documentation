---
id: monitoring-critical-activities-across-accounts
title: Check Critical Jobs Across Your Clients
description: "See how an account director asks the AI Assistant which clients have the most late Jobs, which Jobs became late recently and what is due in the next seven days."
sidebar_label: Check Critical Jobs Across Your Clients
sidebar_position: 2
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Overview

Ask the AI Assistant, in your own words, which of your clients have the most late Jobs. Pick the clients you want to follow up and ask which of their Jobs became late in the last 30 days, then which are due in the coming week. Each answer lists the Jobs with their project and department, grouped by client.

The agency, clients, projects, Job numbers, departments and workspaces in this example are illustrative. The Jobs you see depend on the Jobs you have access to.

<Walkthrough
  subtitle="An example conversation between an account director and the AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Critical Jobs by client">
        The assistant counts late Jobs by client, then lists the late and upcoming Jobs for the clients you name, with their project and department.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Ask which clients have the most late Jobs.',
          'Pick the clients you want to follow up.',
          'Ask which of their Jobs became late in a recent period, such as the last 30 days.',
          'Ask which of their Jobs are due in the next seven days.',
          'Check How I read your question to see the dates and clients the assistant used.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Which clients have the most late Jobs right now?',
          'Which Jobs for these clients became late in the last 30 days?',
          'Which Jobs for these clients are due in the next 7 days?',
          'Group them by client and include the project and department.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'An answer reads up to 200 Jobs unless you ask for more. When the limit is reached, the assistant says the list is partial.',
          'Ask for a period, such as the last 30 days. Without one, late Jobs from previous years can fill the list.',
          'The assistant cannot show which Jobs are blocked or sort Jobs by priority.',
          'Looking up Jobs does not change them, so no approval is needed.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>Which clients have the most late Jobs right now?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Orbit Telecom has the largest share of late Jobs in the 200 Jobs retrieved</strong>, but I can’t confirm which clients lead overall: the results reached the 200-Job limit. The client breakdown is therefore partial, not a complete ranking.</p>
    <Walkthrough.DataTable
      columns={['Client', 'Late Jobs']}
      rows={[
        ['Orbit Telecom', '31'],
        ['Northwind Coffee', '18'],
        ['Lumen Bank', '14'],
        ['Atlas Motors', '11'],
        ['Other', '126'],
      ]}
      note="First 200 rows. The query was capped, so shares are not shown."
    />
    <p>You can follow client workload and deadlines in the workspace below.</p>
    <Walkthrough.WorkspaceCard
      title="Global Planning"
      subtitle="Workspace · Menu"
    />
    <p><strong>How I read your question</strong></p>
    <ul>
      <li>Included: Jobs visible to you that are currently marked late, grouped by client.</li>
      <li>Assumed: “late right now” means the Job’s current late indicator.</li>
      <li>Limit: only 200 late Jobs were retrieved. Narrowing to fewer clients or a period may allow a complete comparison.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Which Jobs for Orbit Telecom, Northwind Coffee and Lumen Bank became late in the last 30 days? Group them by client and include the project and department.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>I found <strong>6 Jobs that became late in the last 30 days</strong>: 3 for Orbit Telecom, 2 for Northwind Coffee and 1 for Lumen Bank.</p>
    <p><strong>Orbit Telecom</strong></p>
    <Walkthrough.DataTable
      columns={['Job', 'Project', 'Department']}
      rows={[
        ['ORB0018ACC002 · Media Plan', 'Orbit 5G Launch', 'Account Management'],
        ['ORB0018CR004 · Key Visual Adaptations', 'Orbit 5G Launch', 'Creative'],
        ['ORB0019DIGI001 · Landing Page', 'Orbit Black Friday 2026', 'Digital'],
      ]}
    />
    <p><strong>Northwind Coffee</strong></p>
    <Walkthrough.DataTable
      columns={['Job', 'Project', 'Department']}
      rows={[
        ['NWC0021ACC001 · Client Presentation', 'Northwind Holiday Menu 2026', 'Account Management'],
        ['NWC0021PROD002 · In-Store Posters', 'Northwind Holiday Menu 2026', 'Production'],
      ]}
    />
    <p><strong>Lumen Bank</strong></p>
    <Walkthrough.DataTable
      columns={['Job', 'Project', 'Department']}
      rows={[
        ['LUM0033CR001 · Social Templates', 'Lumen Bank Savings Campaign', 'Creative'],
      ]}
    />
    <p><strong>How I read your question</strong></p>
    <ul>
      <li>Included: Jobs for Orbit Telecom, Northwind Coffee and Lumen Bank that are currently marked late, with due dates from 27 September through 26 October 2026.</li>
      <li>Assumed: “became late” means the due date passed during that period. Jobs that were late but are no longer marked late are not included.</li>
      <li>Grouped by client and ordered by due date, then Job number. All 6 matching Jobs are included.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>And which Jobs for these three clients are due in the next 7 days?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Northwind Coffee has 4 Jobs due from today through 3 November</strong> and Lumen Bank has 1. No Jobs are due in that period for Orbit Telecom.</p>
    <p><strong>Northwind Coffee</strong></p>
    <Walkthrough.DataTable
      columns={['Job', 'Department', 'Delivery']}
      rows={[
        ['NWC0021ACC003 · Status Meeting', 'Account Management', '29/10/2026'],
        ['NWC0021CR002 · Menu Board Design', 'Creative', '30/10/2026'],
        ['NWC0022CR001 · Concept Development', 'Creative', '02/11/2026'],
        ['NWC0021PROD003 · Print Proofs', 'Production', '03/11/2026'],
      ]}
    />
    <p><strong>Lumen Bank</strong></p>
    <Walkthrough.DataTable
      columns={['Job', 'Department', 'Delivery']}
      rows={[
        ['LUM0033DIGI002 · Display Banners', 'Digital', '03/11/2026'],
      ]}
    />
    <p><strong>How I read your question</strong></p>
    <ul>
      <li>Included: Jobs for Orbit Telecom, Northwind Coffee and Lumen Bank with a due date from 27 October through 3 November 2026.</li>
      <li>Grouped by client and ordered by due date, then Job number.</li>
    </ul>
  </Walkthrough.Message>
</Walkthrough>

## Related articles

- [Check the Delayed Projects That Need Your Attention](/docs/ai/use-cases/projects-and-jobs/identifying-project-delays)
- [See the Jobs You're Working On](/docs/ai/use-cases/projects-and-jobs/finding-pending-tasks-and-actions)
- [AI Assistant](/docs/ai/ai-assistant)
