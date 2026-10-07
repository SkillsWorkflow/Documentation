---
id: identifying-project-delays
title: Check the Delayed Projects That Need Your Attention
description: "See how a project manager asks the AI Assistant which of their projects are behind schedule, finds closed projects with Jobs still open and moves those Jobs to a final stage."
sidebar_label: Check Delayed Projects
sidebar_position: 3
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Overview

Ask the AI Assistant, in your own words, which of your projects are behind schedule and what is still pending. It finds the projects where you are on the team and that are marked delayed, together with the Jobs pending your action. Follow-up questions narrow the answer, for example to closed projects whose Jobs were left open. The assistant can then cancel those Jobs or move them to another stage once you approve.

The agency, clients, projects, Job numbers, stages and transitions in this example are illustrative. The projects and Jobs you see depend on the teams you are part of, and the transitions depend on each Job's workflow.

<Walkthrough
  subtitle="An example conversation between a project manager and the AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Delays that need you">
        The assistant finds the delayed projects on your teams and the Jobs pending your action, narrows them down with each follow-up question, and moves open Jobs to another stage with your approval.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Ask which of your projects are behind schedule and what is still pending.',
          'Check How I read your question to see what was included and assumed.',
          'Ask for closed projects that still have open Jobs.',
          'Ask the assistant to cancel those Jobs, or choose another available transition.',
          'Review the stage change and select Approve.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Which of my projects are behind schedule?',
          'Are there closed projects that still have open Jobs?',
          'Cancel the open Jobs from projects that are already closed.',
          'What transitions are available for this Job?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Follow-up questions build on the previous answer.',
          'A Job can only be cancelled when its workflow has a cancellation transition available. Ask for the available transitions to see the alternatives.',
          'The assistant asks for your approval before it moves a Job to another stage. Select Deny to leave the Job unchanged.',
          'Looking up projects and Jobs does not change them, so no approval is needed.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>Which of my projects are behind schedule? I need to wrap up everything that’s overdue and see which tasks are still pending.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>You have <strong>9 projects</strong> on your team that are marked behind schedule. You also have <strong>4 jobs currently pending for you</strong>. <strong>Three are marked delayed</strong>; one is not.</p>
    <p><strong>How I read your question</strong></p>
    <ul>
      <li>Included: projects where you are on the team and the project is marked delayed.</li>
      <li>Included: jobs where you are on the team and currently have a pending action.</li>
      <li>Assumed: “overdue” means items marked behind schedule, and “my” means you are a member of the project or job team.</li>
      <li>Sorted both lists by end date, earliest first.</li>
    </ul>
    <Walkthrough.JobList
      title="Jobs"
      footer="Jobs · 4 rows"
      rows={[
        { title: 'GM 2025 Dealer Event – Recap Video', number: 'GMC0036VID001', stage: 'In Progress', due: '383 days late', tone: 'late' },
        { title: 'Lumen Bank Annual Report – Print Edition', number: 'LUM0024CR003', stage: 'New', due: '305 days late', tone: 'late' },
        { title: 'Orbit Telecom Autumn Promo – Social Assets', number: 'ORB0015CR001', stage: 'In Progress', due: '41 days late', tone: 'late' },
        { title: 'GM 2026 EV Campaign – Global Website', number: 'GMC0042DIGI001', stage: 'In Progress', due: '9 Oct' },
      ]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>And are there past projects, already closed, that still have open jobs? I want to close them properly.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>There are <strong>2 open jobs under closed projects</strong>: one in a done project and one in an approved project. They are shown below and should be reviewed, since their project is already closed.</p>
    <p><strong>How I read your question</strong></p>
    <ul>
      <li>Included: projects on your team in approved, done or cancelled stages.</li>
      <li>Included: jobs under those projects that are not in approved, done or cancelled stages.</li>
      <li>Assumed: “closed” means approved, done or cancelled; “open job” means a job outside those final stages.</li>
      <li>Sorted by job end date, earliest first.</li>
    </ul>
    <Walkthrough.JobList
      title="Jobs"
      footer="Jobs · 2 rows"
      rows={[
        { title: 'GM 2025 Dealer Event – Recap Video', number: 'GMC0036VID001', stage: 'In Progress', due: '383 days late', tone: 'late' },
        { title: 'Lumen Bank Annual Report – Print Edition', number: 'LUM0024CR003', stage: 'New', due: '305 days late', tone: 'late' },
      ]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Please cancel these open jobs for me.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Updated" label='Move this job to "Cancelled"' />
    <p>The job GMC0036VID001 – GM 2025 Dealer Event – Recap Video was cancelled successfully. The other job, LUM0024CR003 – Lumen Bank Annual Report – Print Edition, has no available cancellation transition, so it was not changed.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>What transitions do you have available?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Available transitions for LUM0024CR003 – Lumen Bank Annual Report – Print Edition: Send for Review → To Review by Traffic; In Progress → In Progress; Close → Done. Cancellation is not available.</p>
    <Walkthrough.Choices
      label="Choose a transition"
      options={['Send for Review → To Review by Traffic', 'In Progress → In Progress', 'Close → Done']}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Close → Done</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title='Move this job to "Done"'
      subtitle="LUM0024CR003 · Lumen Bank Annual Report – Print Edition"
      rows={[['Target stage', 'Done']]}
      actions={[{ label: 'Deny' }, { label: 'Approve', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>I reviewed the stage change and selected Approve.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Updated" label="LUM0024CR003 · Lumen Bank Annual Report – Print Edition" />
    <p>LUM0024CR003 – Lumen Bank Annual Report – Print Edition was moved to Done successfully.</p>
  </Walkthrough.Message>
</Walkthrough>

## Related articles

- [See the Jobs You're Working On](/docs/ai/use-cases/projects-and-jobs/finding-pending-tasks-and-actions)
- [Receiving Notifications About Project Delays](/docs/ai/use-cases/client-dashboards-and-forms/receiving-notifications-about-project-delays)
- [AI Assistant](/docs/ai/ai-assistant)
