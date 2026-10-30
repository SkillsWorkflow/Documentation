---
id: asking-questions-about-client-projects-and-tasks
title: Ask About a Client's Projects and Tasks
description: "See how an account manager asks the AI Assistant what is open for a client: its projects, the overdue jobs and who has them, and what is due next."
sidebar_label: Ask About a Client's Projects and Tasks
sidebar_position: 3
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Overview

Ask the AI Assistant, in your own words, what is open for one client or for several. It lists the client's active projects with their open and late jobs, and you can follow up to see which jobs are overdue and who is responsible for each, and what is due in the coming days. Use it to prepare a client call or to decide where to follow up first.

:::note Preview
This use case is in preview and has not been tested end to end yet. The conversation shows how the AI Assistant is expected to handle it, and what it answers or does today may differ from this example.
:::

The agency, client, projects, jobs and people in this example are illustrative. The jobs you see depend on your access and on the data your agency makes available to the assistant.

<Walkthrough
  subtitle="An example conversation between an account manager and the AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="A client’s work in one answer">
        The assistant gathers the client’s projects, jobs, due dates and responsible people, so you know what is open and who to talk to.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Ask what is open for the client.',
          'Read the projects with their open and late jobs.',
          'Ask which jobs are overdue and who has them.',
          'Ask what is due next.',
          'Open a job from the list to act on it.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'What do we have open for Contoso Bank?',
          'Who is responsible for the late Contoso jobs?',
          'What is due for my clients next week?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'The responsible person is the one set on the job’s team.',
          'A job is overdue when its due date has passed and it is not in a closing stage.',
          'Ask about several clients at once by naming them, or ask for all the clients you are responsible for.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>I have a call with Contoso Bank tomorrow. What do we have open for them?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Contoso Bank has four active projects with 17 open jobs, 3 of them late:</strong></p>
    <Walkthrough.DataTable
      columns={['Project', 'Open jobs', 'Late', 'Next due']}
      rows={[
        ['Spring Savings Campaign', '7', '2', '4 November'],
        ['Mobile App Onboarding', '5', '1', '6 November'],
        ['Annual Report 2026', '3', '0', '20 November'],
        ['Branch Signage Refresh', '2', '0', '2 December'],
      ]}
    />
    <p><strong>How I read your question</strong></p>
    <ul>
      <li>Included: projects of Contoso Bank that are not in a closing stage, and their jobs that are not delivered.</li>
      <li>Assumed: “open” means not in a closing stage.</li>
    </ul>
    <Walkthrough.Source label="Jobs · 17 rows" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Which ones are late and who has them?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.JobList
      title="Late jobs for Contoso Bank"
      rows={[
        { title: 'Spring Savings – Key Visual', number: 'CTB0012CR001', stage: 'In Progress', due: '6 days late', tone: 'late', facts: [['Responsible', 'Mark Evans'], ['Project', 'Spring Savings Campaign'], ['Recorded', '22h of 16h planned']] },
        { title: 'Spring Savings – Radio Script', number: 'CTB0012CW002', stage: 'Client Approval', due: '3 days late', tone: 'late' },
        { title: 'Onboarding Screens – Copy', number: 'CTB0014CW001', stage: 'In Progress', due: '1 day late', tone: 'late' },
      ]}
      footer="Jobs · 3 rows"
    />
    <ul>
      <li>Mark Evans has the key visual. The radio script has been with the client for approval since 27 October.</li>
      <li>Julia Green has the onboarding copy, which she expects to deliver tomorrow according to the job’s Feed.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>And what is due next week?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Four Contoso Bank jobs are due next week:</strong></p>
    <Walkthrough.DataTable
      columns={['Job', 'Due', 'Responsible', 'Stage']}
      rows={[
        ['Spring Savings – Social Posts', '9 November', 'Sarah Lee', 'In Progress'],
        ['Spring Savings – Landing Page', '10 November', 'Anna Smith', 'New'],
        ['Onboarding Screens – Design', '12 November', 'David Brown', 'In Progress'],
        ['Annual Report – Layout', '13 November', 'Julia Green', 'In Progress'],
      ]}
      note="The landing page has not started and needs the key visual, which is late."
    />
  </Walkthrough.Message>
</Walkthrough>

## Related articles

- [Check Critical Jobs Across Your Clients](/docs/ai/use-cases/accounts-status/monitoring-critical-activities-across-accounts)
- [See the Jobs You're Working On](/docs/ai/use-cases/projects-and-jobs/finding-pending-tasks-and-actions)
- [Ask About a Project's Status](/docs/ai/use-cases/client-dashboards-and-forms/asking-questions-about-project-status)
- [AI Assistant](/docs/ai/ai-assistant)
