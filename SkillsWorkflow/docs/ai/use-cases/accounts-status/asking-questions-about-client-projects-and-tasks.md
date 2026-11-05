---
id: asking-questions-about-client-projects-and-tasks
title: Ask About a Client's Projects and Tasks
description: "See how an account manager asks the AI Assistant what is open for a client: the open and late jobs, who is responsible and who is executing them, and what is due next for their clients."
sidebar_label: Ask About a Client's Projects and Tasks
sidebar_position: 3
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Overview

Ask the AI Assistant, in your own words, what is open for a client. It answers with the client's open jobs, how many are late, and what needs attention: approvals still pending, jobs without an executor or not ready to start. Follow up to see which jobs are late with their responsible people and executors, and what is due next across your clients. Use it to prepare a client call or to decide where to follow up first.

Every job in the answer is a link. Select one to open it and act on it. When a workspace helps you follow the work, the assistant suggests it with an **Open** button.

The client, projects, jobs and people in this example are illustrative. The jobs you see depend on your access and on the data your agency makes available to the assistant.

<Walkthrough
  subtitle="An example conversation between an account manager and the AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="A client’s work in one answer">
        The assistant gathers the client’s open jobs, due dates, responsible people and executors, so you know what is open and who to talk to.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Ask what is open for the client.',
          'Read the open and late jobs and what needs attention.',
          'Ask which jobs are late and who has them.',
          'Ask what is due next for your clients.',
          'Open a job from the answer to act on it.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'What do we have open for Corvane Bank?',
          'Who has the late Corvane Bank jobs?',
          'What is due for my clients next week?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Open jobs are the ones in a new, in-progress or awaiting-approval stage. Completed jobs are left out.',
          'A job is late when it is marked as delayed.',
          'Who has a job means its responsible people and its executors.',
          'My clients means the clients assigned to you.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>I have a call with Corvane Bank tomorrow. What do we have open for them?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Corvane Bank has 17 open jobs, 3 of them late.</strong></p>
    <p>For your call, the main points are:</p>
    <ul>
      <li>Two approvals are pending: one with the client and one with Account Management.</li>
      <li>One late job has no executor assigned.</li>
      <li>Most of the open work belongs to the Spring Savings Campaign and Mobile App Onboarding projects.</li>
    </ul>
    <Walkthrough.JobList
      title="Late jobs"
      rows={[
        { title: 'Spring Savings – Key Visual', number: 'CVB0012CR001', stage: 'In Progress', due: '6 days late', tone: 'late' },
        { title: 'Spring Savings – Radio Script', number: 'CVB0012CW002', stage: 'Client Approval', due: '3 days late', tone: 'late' },
        { title: 'Onboarding Screens – Copy', number: 'CVB0014CW001', stage: 'To Do', due: '1 day late', tone: 'late' },
      ]}
      footer="Jobs · 17 rows"
    />
    <p>You can follow the open work by stage in the workspace below.</p>
    <Walkthrough.WorkspaceCard title="Kanban" subtitle="Workspace · Menu" actionLabel="Open" />
    <p><strong>How I read your question</strong></p>
    <ul>
      <li>Included: Corvane Bank jobs visible to you in a new, in-progress or awaiting-approval stage.</li>
      <li>Assumed: “open” means jobs, not estimates, invoices or requests.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Which ones are late and who has them?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Three Corvane Bank jobs are late.</strong> Mark Evans is responsible for two of them.</p>
    <Walkthrough.DataTable
      columns={['Job', 'Due', 'Responsible', 'Executors', 'Stage']}
      rows={[
        ['Spring Savings – Key Visual', '29 Oct', 'Mark Evans', 'Sarah Lee', 'In Progress'],
        ['Spring Savings – Radio Script', '1 Nov', 'Mark Evans', 'Anna Smith', 'Client Approval'],
        ['Onboarding Screens – Copy', '3 Nov', 'Julia Green', 'None assigned', 'To Do'],
      ]}
      note="Onboarding Screens – Copy has no executor assigned. Check who will do it before the call."
    />
    <p><strong>How I read your question</strong></p>
    <ul>
      <li>Assumed: “who has them” means the responsible people and the assigned executors.</li>
      <li>Assumed: “late” means the job is marked as delayed.</li>
    </ul>
    <Walkthrough.Source label="Jobs · 3 rows" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>And what is due for my clients next week?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Four open jobs are due for your clients from 9 to 15 November.</strong> One is waiting for client approval.</p>
    <Walkthrough.JobList
      title="Due next week"
      rows={[
        { title: 'Spring Savings – Social Posts', number: 'CVB0012CR004', stage: 'In Progress', due: '9 Nov' },
        { title: 'Spring Savings – Landing Page', number: 'CVB0012DIGI001', stage: 'To Do', due: '10 Nov' },
        { title: 'Onboarding Screens – Design', number: 'CVB0014DE001', stage: 'In Progress', due: '12 Nov' },
        { title: 'Winter Menu – Poster', number: 'ORV0040CR002', stage: 'Client Approval', due: '13 Nov' },
      ]}
      footer="Jobs · 4 rows"
    />
    <p>You can follow upcoming due dates in the calendar below.</p>
    <Walkthrough.WorkspaceCard title="Calendar" subtitle="Workspace · Menu" actionLabel="Open" />
    <p><strong>How I read your question</strong></p>
    <ul>
      <li>Assumed: “my clients” means the clients assigned to you, not only the jobs where you are on the team.</li>
      <li>Included: jobs due from Monday 9 to Sunday 15 November. Completed jobs and older late jobs are left out.</li>
    </ul>
  </Walkthrough.Message>
</Walkthrough>

## Related articles

- [Check Critical Jobs Across Your Clients](/docs/ai/use-cases/accounts-status/monitoring-critical-activities-across-accounts)
- [See the Jobs You're Working On](/docs/ai/use-cases/projects-and-jobs/finding-pending-tasks-and-actions)
- [Ask About a Project's Status](/docs/ai/use-cases/client-dashboards-and-forms/asking-questions-about-project-status)
- [AI Assistant](/docs/ai/ai-assistant)
