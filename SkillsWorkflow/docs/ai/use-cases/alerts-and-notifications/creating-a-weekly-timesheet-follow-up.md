---
id: creating-a-weekly-timesheet-follow-up
title: Create a Weekly Timesheet Follow-up
description: "See how an operations manager asks the AI Assistant to check every Friday for missing time and pending timesheet approvals, and how the alert then reminds each person of their own missing hours and gives each approver a summary by team."
sidebar_label: Weekly Timesheet Follow-up
sidebar_position: 2
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
This use case is in preview, the conversation shows how the AI Assistant is expected to handle it, and what it answers or does today may differ from this example.
:::

## Overview

Ask the AI Assistant to follow up on timesheets every week. One alert can tell two groups of people different things: each person with missing time gets a reminder with their own days and hours, and each approver gets a summary of their team, with the people still missing time and the timesheets waiting for their approval.

You review the alert on a card before it is created, including how many people it would remind if it ran today. After that, the reminders go out every Friday without anyone preparing them.

The agency, teams, people and hours in this example are illustrative. Missing time is counted against each person’s calendar, so leaves and holidays are not reported as missing.

<Walkthrough
  subtitle="An example conversation between an operations manager and the AI Assistant, and the notifications the alert sends later."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="One alert, the right message for each person">
        People are reminded of their own missing hours. Approvers see their team at a glance. Nobody has to chase timesheets by hand on Friday afternoon.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Say when to check and who should be reminded.',
          'Choose what each group receives.',
          'Check how many people the alert would remind today.',
          'Review the alert and select Create.',
          'Read the reminders and summaries as they arrive.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Every Friday, identify missing time and prepare reminders for employees and approvers.',
          'Also remind people on Monday morning if their week is still incomplete.',
          'Leave the Lisbon studio out of the timesheet reminders.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Missing time is the difference between a person’s expected hours in their calendar and the hours they recorded.',
          'A reminder goes only to the person it is about. The team summary goes to the person who approves their timesheets.',
          'The assistant asks for your approval before it creates the alert.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>Every Friday, identify missing time and prepare reminders for employees and approvers.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>I can set up one alert for both. Two questions first:</p>
    <ul>
      <li>Which week should it check: the current week up to Friday, or the previous full week?</li>
      <li>Should approvers also hear about timesheets waiting for their approval?</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>The current week. And yes, add the pending approvals, urgent if they’re older than a week.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Create alert “Weekly timesheet follow-up”"
      subtitle="Review these details before I create the alert."
      rows={[
        ['Checks', 'Missing time this week, and timesheets waiting for approval'],
        ['People with missing time', 'A reminder with their own days and hours · Attention'],
        ['Approvers', 'A summary by team · Attention, or Action required for approvals older than 7 days'],
        ['When', 'Every Friday, 15:00'],
        ['Channels', 'Web, Email, Push'],
        ['If it ran today', '14 reminders to people, 4 summaries to approvers'],
      ]}
      actions={[{ label: 'Deny' }, { label: 'Create', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>I reviewed the alert and selected Create.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Created" label="Weekly timesheet follow-up" />
    <p>The first reminders go out this Friday at 15:00.</p>
  </Walkthrough.Message>

  <Walkthrough.DateSeparator label="Friday · Notifications of Mark Evans, designer" />

  <Walkthrough.NotificationPanel>
    <Walkthrough.NotificationCard
      level="attention"
      levelLabel="Attention"
      title="Your timesheet this week"
      time="Today, 15:00"
    >
      <p>You have 12h missing this week: Wednesday 4h and Thursday 8h. Record them before the week closes.</p>
    </Walkthrough.NotificationCard>
  </Walkthrough.NotificationPanel>

  <Walkthrough.DateSeparator label="Friday · Notifications of David Brown, creative director" />

  <Walkthrough.NotificationPanel>
    <Walkthrough.NotificationCard
      level="action"
      levelLabel="Action required"
      title="Weekly timesheet follow-up · Creative team"
      time="Today, 15:00"
    >
      <ul>
        <li>3 timesheets have been waiting for your approval for more than 7 days.</li>
        <li>4 people are still missing time this week, 31h in total. Mark Evans has the most, 12h.</li>
      </ul>
    </Walkthrough.NotificationCard>
  </Walkthrough.NotificationPanel>
</Walkthrough>

## Related articles

- [Find Who Is Blocked for Missing Hours](/docs/ai/use-cases/resource-management/finding-who-has-overdue-hours)
- [Create an Alert for Fees That Need Attention](/docs/ai/use-cases/alerts-and-notifications/creating-an-alert-for-fees-that-need-attention)
- [Receive and manage notifications](/docs/product/notifications/receive-and-manage-notifications)
- [Automations](/docs/build-and-extend/automations)
- [AI Assistant](/docs/ai/ai-assistant)
