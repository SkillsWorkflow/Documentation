---
id: asking-questions-about-project-status
title: Ask About a Project's Status
description: "See how a project manager asks the AI Assistant where a project stands, which jobs are delivered, late or due soon, what is at risk and what is waiting on the client."
sidebar_label: Ask About a Project's Status
sidebar_position: 2
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
This use case is in preview, the conversation shows how the AI Assistant is expected to handle it, and what it answers or does today may differ from this example.
:::

## Overview

Ask the AI Assistant, in your own words, how a project is going. It answers with the project's jobs by stage, what was delivered, what is late and what is due next, and the hours recorded against what was contracted. Follow up to see what could put the timeline at risk and which jobs are waiting on the client, so you know what to raise at your next status meeting.

The agency, client, project, jobs and hours in this example are illustrative. The jobs you see depend on your access and on the data your agency makes available to the assistant.

<Walkthrough
  subtitle="An example conversation between a project manager and the AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="From a question to a status update">
        The assistant gathers the project’s jobs, dates and hours into one answer, ready for a client call or a status meeting.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Ask how the project is going.',
          'Read the jobs by stage and the hours recorded against the contract.',
          'Ask what could put the timeline at risk.',
          'Ask which jobs are waiting on the client.',
          'Open a job from the list to act on it.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Where are we on the Northwind Christmas project?',
          'What is late on this project?',
          'What do we need from the client this week?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Stages depend on each job’s workflow, so the same project can show different stage names.',
          'A job is late when its due date has passed and it is not in a closing stage.',
          'Waiting on the client means the job is in a stage your agency uses for client approval or feedback.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>Where are we on the Northwind Christmas 2026 project?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Northwind Christmas 2026 has 14 jobs. 9 are delivered, 3 are in progress and 2 have not started.</strong> The project ends on 15 December.</p>
    <Walkthrough.DataTable
      columns={['', 'Hours']}
      rows={[
        ['Contracted', '640h'],
        ['Planned', '590h'],
        ['Recorded', '398h'],
      ]}
      note="62% of the contracted hours are recorded, with 70% of the project’s time elapsed."
    />
    <p><strong>How I read your question</strong></p>
    <ul>
      <li>Included: all jobs of the Northwind Christmas 2026 project, and the hours planned and recorded on them up to today.</li>
      <li>Assumed: “delivered” means the job is in a closing stage.</li>
    </ul>
    <Walkthrough.Source label="Jobs · 14 rows" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>What could put the timeline at risk?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.JobList
      title="Jobs at risk"
      rows={[
        { title: 'Christmas Launch Event – Stand Design', number: 'NWC0031EV002', stage: 'In Progress', due: '4 days late', tone: 'late' },
        { title: 'Campaign Website', number: 'NWC0031DIGI001', stage: 'In Progress', due: '20 Nov' },
        { title: 'Christmas Launch Event – Stand Production', number: 'NWC0031EV003', stage: 'New', due: '13 Nov' },
      ]}
      footer="Jobs · 3 rows"
    />
    <ul>
      <li>The stand design is late and Stand Production cannot start until it is approved.</li>
      <li>Campaign Website has 16 hours recorded above plan after two landing pages were added.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>What is waiting on the client?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Three jobs are waiting for client approval:</strong></p>
    <Walkthrough.DataTable
      columns={['Job', 'Stage', 'Waiting since']}
      rows={[
        ['Social Media Calendar – December', 'Client Approval', '23 October'],
        ['In-store Posters', 'Client Approval', '27 October'],
        ['Gift Card Design', 'Client Approval', '29 October'],
      ]}
      note="The December social calendar has been waiting for 7 days and its first posts go out on 1 December."
    />
  </Walkthrough.Message>
</Walkthrough>

## Related articles

- [Check the Delayed Projects That Need Your Attention](/docs/ai/use-cases/projects-and-jobs/identifying-project-delays)
- [Discuss a Project Delay Notification](/docs/ai/use-cases/client-dashboards-and-forms/discussing-a-project-delay-notification)
- [Project Burn Workspace](/docs/product/dashboards-and-reporting/project-burn-dashboard)
- [AI Assistant](/docs/ai/ai-assistant)
