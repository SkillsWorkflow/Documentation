---
id: receiving-notifications-about-resource-issues
title: Get Notified About Resource Issues
description: "See how a resource manager receives a message from the AI Assistant about hours recorded above plan, time recorded without being planned and people planned above their capacity, and narrows it down to what needs action."
sidebar_label: Get Notified About Resource Issues
sidebar_position: 7
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
This use case is in preview, the conversation shows how the AI Assistant is expected to handle it, and what it answers or does today may differ from this example.
:::

## Overview

The AI Assistant tells you about resource issues on your team without you having to ask: people who recorded more hours on a job than were planned, time recorded on jobs where the person was never planned, and people planned above their capacity in the coming weeks. Each issue comes with the person, the job and the hours involved. You can then ask the assistant to narrow the list to one client, find who has free capacity, and open the workspace where you change the planning.

The agency, clients, people, jobs and hours in this example are illustrative. The issues you see depend on your access and on the data your agency makes available to the assistant.

<Walkthrough
  subtitle="An example conversation between a resource manager and the AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="From scattered signals to one list">
        The assistant gathers overruns, unplanned time and over-capacity planning into one message, so you can act before the month closes.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Read the issues the assistant sends you.',
          'Ask for one client or one team to narrow the list.',
          'Check How I read your question to see what was counted as an overrun.',
          'Ask who has free capacity to take over work.',
          'Open Capacity × Workload to change the planning.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Which jobs have more hours recorded than planned this month?',
          'Who recorded time on jobs they were not planned on?',
          'Who on my team is planned above capacity next week?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'An overrun compares the hours a person recorded on a job with the hours planned for them on it.',
          'Time recorded on a job where the person was not planned shows as unplanned time.',
          'Leaves and holidays lower a person’s capacity in the weeks they fall in.',
          'You only see people and jobs you can access in Skills Workflow.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Good morning. Five resource issues on your team need attention:</strong></p>
    <Walkthrough.DataTable
      columns={['Issue', 'Person', 'Job', 'Hours']}
      rows={[
        ['Overrun', 'Anna Smith', 'Campaign Website', '46h recorded · 30h planned'],
        ['Overrun', 'Mark Evans', 'Spring Savings – Key Visual', '22h recorded · 16h planned'],
        ['Unplanned time', 'Julia Green', 'Holiday Packaging', '12h recorded · not planned'],
        ['Over capacity', 'David Brown', '3 jobs, week of 9 November', '48h planned · 40h capacity'],
        ['Over capacity', 'Sarah Lee', '2 jobs, week of 16 November', '36h planned · 24h capacity'],
      ]}
      note="Sarah Lee has two days of leave in the week of 16 November."
    />
    <Walkthrough.Source label="Workloads · 5 rows" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Show me only the overruns on Northwind Coffee, and since when.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>One overrun is on Northwind Coffee:</strong></p>
    <Walkthrough.DataTable
      columns={['Person', 'Job', 'Planned', 'Recorded', 'Over plan since']}
      rows={[
        ['Anna Smith', 'Campaign Website', '30h', '46h', '21 October'],
      ]}
      note="The job is due on 20 November and Anna is still planned on it next week."
    />
    <p><strong>How I read your question</strong></p>
    <ul>
      <li>Included: jobs of the Northwind Coffee client where a person recorded more hours than were planned for them.</li>
      <li>Assumed: “since when” means the first day the recorded hours went above the planned hours.</li>
    </ul>
    <Walkthrough.Source label="Workloads · 1 row" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Who could take some of David’s work in the week of 9 November?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Two people in David’s department have free capacity that week:</strong></p>
    <Walkthrough.DataTable
      columns={['Person', 'Capacity', 'Planned', 'Free']}
      rows={[
        ['Julia Green', '40h', '24h', '16h'],
        ['Mark Evans', '40h', '32h', '8h'],
      ]}
    />
    <p>Open <strong>Capacity × Workload</strong> to move the work.</p>
    <Walkthrough.WorkspaceCard
      title="Capacity × Workload"
      subtitle="Workspace · Menu"
      description="Compare workload with capacity to find over- and under-allocation, and where planned work exceeds available capacity."
    />
  </Walkthrough.Message>
</Walkthrough>

## Related articles

- [Discuss a Resource Overrun Notification](/docs/ai/use-cases/resource-management/discussing-a-resource-overrun-notification)
- [Check Contracted Hours and Team Capacity](/docs/ai/use-cases/resource-management/comparing-contracted-and-available-hours)
- [Find the Best Workspace for Resource Management](/docs/ai/use-cases/resource-management/finding-the-best-resource-management-dashboard)
- [AI Assistant](/docs/ai/ai-assistant)
