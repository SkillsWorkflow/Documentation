---
id: finding-who-has-overdue-hours
title: Find Who Is Blocked for Missing Hours
description: "See how a project manager asks the AI Assistant who on the team is blocked for missing hours, who will be blocked in the next few days, which jobs are affected, and where to follow it every week."
sidebar_label: Find Who Has Overdue Hours
sidebar_position: 10
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Overview

Ask the AI Assistant, in your own words, who on your team has overdue hours. It lists the people who are blocked because their timesheets are missing hours, with how many hours each one still has to record. You can then ask who will be blocked in the next few days if they do not record their time, which jobs they were planned on and recorded less time than planned, and where to follow the situation every week.

The agency, people and hours in this example are illustrative. The people you see depend on your access and on the data your agency makes available to the assistant.

<Walkthrough
  subtitle="An example conversation between a project manager and the AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="From missing hours to action">
        The assistant shows who is already blocked for missing hours and who is about to be, so you can follow up before the month closes and before work stops.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Ask who on your team is blocked for missing hours.',
          'Read the missing hours for each person to see how far behind they are.',
          'Check How I read your question to see who was included and what was assumed.',
          'Ask who will be blocked in the next few days and follow up with them.',
          'Ask which jobs they were planned on to see where recorded time is behind.',
          'Use the Missing Time Hours and Approvals workspace to follow it every week.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Who on my team is blocked for missing hours?',
          'Who will be blocked in the next few days?',
          'Which of my projects are affected?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'A person blocked for missing hours cannot work in the platform until they record the missing hours.',
          'The days until block are updated once a day. Someone blocked since the last update, for example right after their user was activated, shows as blocked without a count.',
          'Once someone is blocked, the count no longer shows how long they have been blocked. Use the missing hours to see how far behind they are.',
          'Missing hours are not linked to any job until they are recorded. The assistant compares planned and recorded time to show which jobs are likely affected.',
          'Until the missing hours are recorded, those jobs show less time than was worked, and their contract burn reads low.',
          'Only people who are required to fill in timesheets are included.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>I am closing the month on the Northwind Coffee account. Who on my team is blocked because of missing hours?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Three people on your team are currently blocked for missing hours:</strong></p>
    <Walkthrough.DataTable
      columns={['Person', 'Missing hours', 'Days until block']}
      rows={[
        ['Anna Smith', '24h', 'Blocked'],
        ['David Brown', '16h', 'Blocked'],
        ['Sarah Lee', '40h', 'Not yet updated'],
      ]}
      note="Sarah Lee was blocked today, after her user was activated with no hours recorded. Her days until block will appear after the next daily update."
    />
    <p><strong>How I read your question</strong></p>
    <ul>
      <li>Included: active people on your team who are required to fill in timesheets and are currently blocked for missing hours.</li>
      <li>Assumed: “missing hours” means the hours still to record up to today.</li>
      <li>Not included: people blocked for another reason, such as an expired user account.</li>
    </ul>
    <Walkthrough.Source label="Missing hours · 3 rows" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>And who will be blocked in the next few days if they don’t record their time?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Two people will be blocked soon if they don’t record their missing hours:</strong></p>
    <Walkthrough.DataTable
      columns={['Person', 'Missing hours', 'Days until block']}
      rows={[
        ['Mark Evans', '16h', '1'],
        ['Julia Green', '8h', '2'],
      ]}
    />
    <p><strong>How I read your question</strong></p>
    <ul>
      <li>Included: people on your team who are not blocked yet and have a count of days until block.</li>
      <li>Assumed: “the next few days” means anyone with a count, which is set from today’s daily update.</li>
    </ul>
    <Walkthrough.Source label="Missing hours · 2 rows" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Which of my projects are affected?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>The three blocked people were planned on these jobs this month and have recorded less time than planned:</strong></p>
    <Walkthrough.DataTable
      columns={['Person', 'Job', 'Planned', 'Recorded']}
      rows={[
        ['Anna Smith', 'Campaign Website', '24h', '0h'],
        ['David Brown', 'Social Media Calendar', '20h', '4h'],
        ['Sarah Lee', 'Christmas Launch Event', '40h', '0h'],
      ]}
      note="All three jobs belong to the Northwind Christmas 2026 project. Its contract burn will read low until these hours are recorded."
    />
    <p><strong>How I read your question</strong></p>
    <ul>
      <li>Included: the jobs the blocked people were planned on from 1 October to today, compared with the time they recorded on each one.</li>
      <li>Assumed: planned time that was not recorded points to work done but not registered yet. The missing hours are not linked to any job until they are recorded.</li>
    </ul>
    <Walkthrough.Source label="Workloads · 3 rows" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Where can I follow this every week without asking?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Use the <strong>Missing Time Hours and Approvals</strong> workspace. Open it from the <strong>Timesheet</strong> menu. It shows the blocked users and missing hours by department, and a list of the blocked users with their missing hours and the days left.</p>
  </Walkthrough.Message>
</Walkthrough>

## Related articles

- [Missing Time Hours and Approvals Workspace](/docs/product/dashboards-and-reporting/timesheet-approvals-dashboard)
- [Filling in Time Sheets](/docs/product/time/timesheets/filling-time-sheets)
- [Checking Contract Burn](/docs/ai/use-cases/resource-management/checking-contract-burn)
- [AI Assistant](/docs/ai/ai-assistant)
