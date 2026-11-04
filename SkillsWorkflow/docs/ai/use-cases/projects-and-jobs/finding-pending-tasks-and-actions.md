---
id: finding-pending-tasks-and-actions
title: See the Jobs You're Working On
description: "See how a creative asks the AI Assistant which Jobs they are on this week, which projects those Jobs belong to and what is waiting for them."
sidebar_label: See the Jobs You're Working On
sidebar_position: 4
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Overview

Ask the AI Assistant, in your own words, which Jobs you are working on and what is waiting for you. It finds the Jobs where you are on the team, sums them up with the projects they belong to, and lists each Job with its stage and due date, or how many days late it is. Select a Job in the list to see its project and open it.

The agency, clients, projects, Job numbers and stages in this example are illustrative. The Jobs you see depend on the teams you are part of.

<Walkthrough
  subtitle="An example conversation between a creative and the AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Your Jobs at a glance">
        The assistant finds the Jobs where you are on the team, or that are pending your action, and lists them with their stage and due date.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Ask for your Jobs and the period you want to check.',
          'Read the summary to see how many Jobs you have and which projects they belong to.',
          'Check How I read your question to see what was included and assumed.',
          'Select a Job to see its client, project, Job type and department, then preview or open it.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'What Jobs am I on this week?',
          'Which of my Jobs are late?',
          'Which of my Jobs are due before Friday, and which projects are they in?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'If you ask for tasks, the assistant can read them as Jobs. It says so under How I read your question.',
          'A Job past its due date shows how many days late it is, unless it is in a finished stage.',
          'The list shows the first five Jobs. Select Show all to see the rest.',
          'Looking up your Jobs does not change them, so no approval is needed.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>Which Jobs am I working on this week, and which projects are they part of?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>You’re working on <strong>3 jobs this week</strong>, across two projects: <strong>General Motors – 2026 Global EV Campaign</strong> and <strong>Northwind Coffee – Autumn 2026 In-Store</strong>. One is new and scheduled for today; the other two are in progress and run through Friday.</p>
    <p><strong>How I read your question</strong></p>
    <ul>
      <li>Included: jobs where you are on the team and whose scheduled dates overlap 5–11 October 2026.</li>
      <li>Assumed: “working on” means jobs where you are a team member, using their scheduled start and end dates.</li>
      <li>Showing up to 50 jobs, ordered by start date.</li>
    </ul>
    <Walkthrough.JobList
      title="Jobs"
      footer="Jobs · 3 rows"
      rows={[
        { title: 'GM 2026 EV Campaign – Social Launch Assets', number: 'GMC0042CR001', stage: 'New', due: 'Today', tone: 'soon' },
        { title: 'GM 2026 EV Campaign – Global Website', number: 'GMC0042DIGI001', stage: 'In Progress', due: '9 Oct' },
        { title: 'Northwind Coffee – Autumn Menu Posters', number: 'NWC0017CR001', stage: 'In Progress', due: '9 Oct' },
      ]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>What tasks are pending any action on my part?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>You have <strong>4 jobs pending your action</strong>. They include <strong>two past-due jobs</strong>, one due today and one due Friday. Most are in progress; one is new.</p>
    <p><strong>How I read your question</strong></p>
    <ul>
      <li>Included: jobs specifically marked as pending for you.</li>
      <li>Assumed: “tasks” means jobs, and “pending action” means the job’s pending-for-you status.</li>
      <li>Showing up to 50 jobs, ordered by scheduled end date.</li>
    </ul>
    <Walkthrough.JobList
      title="Jobs"
      footer="Jobs · 4 rows"
      rows={[
        {
          title: 'Lumen Bank Brand Refresh – Key Visual',
          number: 'LUM0031CR001',
          stage: 'In Progress',
          due: '12 days late',
          tone: 'late',
          facts: [
            ['Client', 'Lumen Bank'],
            ['Project', 'Lumen Bank – 2026 Brand Refresh'],
            ['Job type', 'Art Direction'],
            ['Department', 'Creative'],
          ],
        },
        { title: 'Lumen Bank Brand Refresh – Social Templates', number: 'LUM0031CR002', stage: 'In Progress', due: '2 days late', tone: 'late' },
        { title: 'GM 2026 EV Campaign – Social Launch Assets', number: 'GMC0042CR001', stage: 'New', due: 'Today', tone: 'soon' },
        { title: 'GM 2026 EV Campaign – Global Website', number: 'GMC0042DIGI001', stage: 'In Progress', due: '9 Oct' },
      ]}
    />
  </Walkthrough.Message>
</Walkthrough>

## Related articles

- [Turn a Campaign Brief into a Job](/docs/ai/use-cases/projects-and-jobs/creating-a-job-using-a-briefing-template)
- [Check the Delayed Projects That Need Your Attention](/docs/ai/use-cases/projects-and-jobs/identifying-project-delays)
- [AI Assistant](/docs/ai/ai-assistant)
