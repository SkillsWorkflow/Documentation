---
id: asking-questions-about-project-status
title: Ask About a Project's Status
description: "See how a project manager asks the AI Assistant where a project stands, which jobs are late, what could put the timeline at risk, what is waiting on the client and how many hours are planned and recorded."
sidebar_label: Ask About a Project's Status
sidebar_position: 2
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Overview

Ask the AI Assistant, in your own words, how a project is going. It answers with the project's stage, its jobs by stage, the jobs flagged as delayed, the project dates and its owner. Follow up to see what could put the timeline at risk, which jobs are waiting on the client and how many hours are planned and recorded, so you know what to raise at your next status meeting.

Every project and job in the answer is a link. Select one to open it and act on it. When a workspace helps you follow the project, the assistant suggests it with an **Open** button.

The client, project, jobs and hours in this example are illustrative. The jobs you see depend on your access and on the data your agency makes available to the assistant.

<Walkthrough
  subtitle="An example conversation between a project manager and the AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="From a question to a status update">
        The assistant gathers the project’s jobs, stages, dates and hours into one answer, ready for a client call or a status meeting.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Ask how the project is going.',
          'Read the project stage and its jobs by stage.',
          'Ask what could put the timeline at risk.',
          'Ask which jobs are waiting on the client.',
          'Ask how many hours are planned and recorded.',
          'Open a job from the answer to act on it.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Where are we on the Orvella Tea Christmas project?',
          'What is late on this project?',
          'What do we need from the client this week?',
          'How many hours are planned and recorded on this project?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Stages depend on each job’s workflow, so the same project can show different stage names.',
          'A job is late when its planned end date has passed and it is not finished.',
          'Waiting on the client means the job is in a client approval or feedback stage, or its comments or brief show an open request to the client.',
          'Planned hours come from the bookings on the project’s jobs and recorded hours from timesheets.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>Where are we on the Orvella Tea Christmas 2026 project?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>ORV0031 — Orvella Tea – Christmas 2026 Campaign is In Progress.</strong> It runs from 1 September to 15 December 2026, with you as owner.</p>
    <Walkthrough.DataTable
      columns={['Stage', 'Jobs']}
      rows={[
        ['Closed', '2'],
        ['Client Approval', '3'],
        ['In Progress', '2'],
        ['To Do', '1'],
      ]}
      note="1 of the 8 jobs is flagged as delayed."
    />
    <p>The main concern is the launch event stand, which is past its planned end date. You can follow the project’s stages in the workspace below.</p>
    <Walkthrough.WorkspaceCard title="Kanban" subtitle="Workspace · Menu" actionLabel="Open" />
    <p><strong>How I read your question</strong></p>
    <ul>
      <li>Included: project ORV0031 and all its jobs visible to you.</li>
      <li>Assumed: “where are we” means the project stage, job progress and delay flags, not recorded hours or billing.</li>
    </ul>
    <Walkthrough.Source label="Jobs · 8 rows" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>What could put the timeline at risk?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.JobList
      title="Jobs at risk"
      rows={[
        { title: 'Christmas Launch Event – Stand Design', number: 'ORV0031EV002', stage: 'In Progress', due: '4 days late', tone: 'late' },
        { title: 'Christmas Launch Event – Stand Production', number: 'ORV0031EV003', stage: 'To Do', due: '13 Nov' },
        { title: 'Campaign Website', number: 'ORV0031DIGI001', stage: 'In Progress', due: '20 Nov' },
      ]}
      footer="Jobs · 3 rows"
    />
    <ul>
      <li>Stand Design was due on 31 October and is still In Progress. This is the first item I would escalate.</li>
      <li>Stand Production has responsible people but no executor listed.</li>
      <li>Campaign Website is due in 16 days and is still In Progress.</li>
    </ul>
    <p>Recommended next step: confirm a revised date for the stand design and assign an executor to Stand Production.</p>
    <p><strong>How I read your question</strong></p>
    <ul>
      <li>Included: the project’s jobs, reviewed by planned end date, stage, priority and assignments.</li>
      <li>Not assessed: dependencies, remaining effort and people’s availability.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>What is waiting on the client?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Three jobs are waiting for client approval:</strong></p>
    <Walkthrough.DataTable
      columns={['Job', 'Stage', 'Due']}
      rows={[
        ['Social Media Calendar – December', 'Client Approval', '7 Nov'],
        ['In-store Posters', 'Client Approval', '10 Nov'],
        ['Gift Card Design', 'Client Approval', '14 Nov'],
      ]}
      note="The comments and latest briefs of the other jobs do not show an open request to the client."
    />
    <Walkthrough.Source label="Descriptions · 8 rows" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>How many hours are planned and recorded on this project?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.DataTable
      columns={['', 'Hours']}
      rows={[
        ['Planned', '590h'],
        ['Recorded', '398h'],
      ]}
      note="Recorded time is 67% of the planned hours. This compares time only and does not measure how much of the work is done."
    />
    <p>You can follow planned and actual time by month in the workspace below.</p>
    <Walkthrough.WorkspaceCard title="FTE" subtitle="Workspace · Menu" actionLabel="Open" />
    <p><strong>How I read your question</strong></p>
    <ul>
      <li>Assumed: “planned” means the hours booked on the project’s jobs, not contracted or estimated effort.</li>
      <li>Included: time recorded by everyone visible on the project, whatever its approval or billable status.</li>
    </ul>
    <Walkthrough.Source label="Time sheets · 1 row" />
  </Walkthrough.Message>
</Walkthrough>

## Related articles

- [Check the Delayed Projects That Need Your Attention](/docs/ai/use-cases/projects-and-jobs/identifying-project-delays)
- [Discuss a Project Delay Notification](/docs/ai/use-cases/client-dashboards-and-forms/discussing-a-project-delay-notification)
- [Project Burn Workspace](/docs/product/dashboards-and-reporting/project-burn-dashboard)
- [AI Assistant](/docs/ai/ai-assistant)
