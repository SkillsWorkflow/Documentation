---
id: creating-an-alert-for-fees-that-need-attention
title: Create an Alert for Fees That Need Attention
description: "See how an account manager asks the AI Assistant to warn the account directors every week about Fees close to or over their contracted hours, reviews the alert before it is created, and how the alert then arrives as a notification marked Attention or Action required."
sidebar_label: Alert for Fees That Need Attention
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
This use case is in preview, the conversation shows how the AI Assistant is expected to handle it, and what it answers or does today may differ from this example.
:::

## Overview

Tell the AI Assistant which Fees to watch, when a Fee needs attention and who should hear about it. The assistant asks for what is missing, such as the threshold, and shows you the alert on a card before creating it: what it checks, the levels, when it runs, who receives it and on which channels. It also tells you what the alert would send if it ran today.

Once you select **Create**, the alert runs as an automation on the schedule you chose. Each account director receives a notification with the Fees of their clients, marked **Attention** or **Action required**, and the reason behind each one.

The agency, clients, Fees, jobs, people and hours in this example are illustrative. The Fees each person is told about depend on their access.

<Walkthrough
  subtitle="An example conversation between an account manager and the AI Assistant, and the notification the alert sends later."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="From a question you repeat to an alert that runs itself">
        Instead of checking every Fee each week, you describe the check once. The assistant turns it into an alert and the account directors are told only when a Fee needs them.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Say what to check, how often and who should be told.',
          'Answer the assistant’s questions about thresholds and levels.',
          'Check what the alert would send if it ran today.',
          'Review the alert and select Create.',
          'Read the notification when it arrives and open the Fee from it.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Every Monday, tell the account directors which fees need attention and why.',
          'Warn me when a fee goes above 90% of its hours.',
          'Pause the fees alert until January.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Action required is for a Fee over its contracted hours or forecast to go over before its end date. Attention is for a Fee above the warning threshold.',
          'The forecast uses the hours recorded so far and the weeks left until the Fee’s end date.',
          'The assistant asks for your approval before it creates the alert. Select Deny to leave things as they are.',
          'Each person only hears about the Fees they can access.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>Every Monday, tell the account directors which fees need attention and why.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>I can set that up as a weekly alert. When should a Fee count as needing attention: by the hours consumed, by the value, or both?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>By hours. Warn at 85%, and make it urgent if it’s over or will go over before the end date.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Create alert “Fees that need attention”"
      subtitle="Review these details before I create the alert."
      rows={[
        ['Checks', 'Active Fees: hours consumed against contracted hours'],
        ['Attention', '85% or more of the contracted hours consumed'],
        ['Action required', 'Over 100%, or forecast to go over before the Fee’s end date'],
        ['When', 'Every Monday, 08:00'],
        ['Who', 'The account director of each client'],
        ['Channels', 'Web, Email'],
        ['If it ran today', '2 Fees Action required, 3 Fees Attention, 4 account directors notified'],
      ]}
      actions={[{ label: 'Deny' }, { label: 'Create', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>I reviewed the alert and selected Create.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Created" label="Fees that need attention" />
    <p>The alert runs next Monday at 08:00. You can pause it, change it or delete it by asking me, or in <strong>Maintenance → Automations</strong>.</p>
  </Walkthrough.Message>

  <Walkthrough.DateSeparator label="Next Monday · Notifications of Rita Moreira, account director" />

  <Walkthrough.NotificationPanel>
    <Walkthrough.NotificationCard
      level="action"
      levelLabel="Action required"
      title="Fees that need attention"
      time="Today, 08:00"
    >
      <p><strong>Orvella Tea Retainer 2026</strong> is at 96% of its 1,200 contracted hours and will go over around 20 November. Most of the extra hours come from Website Refresh, 52h above its estimate after two product pages were added on 14 October.</p>
    </Walkthrough.NotificationCard>

    <Walkthrough.NotificationCard
      level="attention"
      levelLabel="Attention"
      title="Fees that need attention"
      time="Today, 08:00"
    >
      <p><strong>Velmont Bakery Fee 2026</strong> is at 87% of its contracted hours, with eight weeks left. At this pace it ends the year at about 98%.</p>
    </Walkthrough.NotificationCard>
  </Walkthrough.NotificationPanel>
</Walkthrough>

## Related articles

- [Create a Weekly Timesheet Follow-up](/docs/ai/use-cases/alerts-and-notifications/creating-a-weekly-timesheet-follow-up)
- [Copy a Client's Fee to the Next Year](/docs/ai/use-cases/contracts-estimates-and-purchase-orders/duplicating-estimates-for-the-next-years-of-a-fee)
- [Receive and manage notifications](/docs/product/notifications/receive-and-manage-notifications)
- [Automations](/docs/build-and-extend/automations)
- [AI Assistant](/docs/ai/ai-assistant)
