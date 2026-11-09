---
id: creating-an-alert-for-unusual-expenses
title: Create an Alert for Unusual Expenses
description: "See how a finance manager asks the AI Assistant to review every expense when it is submitted, and how the approver is then told about possible duplicates, missing receipts or unusual amounts, with the reason, before approving."
sidebar_label: Alert for Unusual Expenses
sidebar_position: 4
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
This use case is in preview, the conversation shows how the AI Assistant is expected to handle it, and what it answers or does today may differ from this example.
:::

## Overview

Not every alert runs on a schedule. Ask the AI Assistant to look at each expense the moment it is submitted, and to tell the approver when something looks wrong: an expense that may be a duplicate, one without a receipt, or an amount far above what is usual for that type of expense.

The approver receives the notification before approving, with the reason for each exception. Expenses with nothing unusual do not send anything. You review the alert on a card before it is created, including what it would have flagged last month.

The agency, people, expenses and amounts in this example are illustrative. The alert flags expenses for a person to check. It does not approve or reject them.

<Walkthrough
  subtitle="An example conversation between a finance manager and the AI Assistant, and the notification the alert sends later."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="A second look before every approval">
        Approvers keep approving as they do today. When an expense needs a closer look, they know why before they open it.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Say which expenses to review and what counts as unusual.',
          'Check what the alert would have flagged last month.',
          'Review the alert and select Create.',
          'Open the flagged expense from the notification and decide.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Review newly submitted expenses and explain any exceptions before approval.',
          'Flag meals above €60 per person.',
          'Don’t flag mileage expenses without a receipt.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'A possible duplicate is an expense with the same person, date and amount as another expense.',
          'An unusual amount is compared with the expenses of the same type in the last 12 months.',
          'The alert runs when an expense is submitted, not on a schedule.',
          'The approver decides. The alert never changes the expense’s stage.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>Review newly submitted expenses and explain any exceptions to the approver before approval.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>I’ll check each expense when it’s submitted and notify its approver only when I find an exception. What should count as unusual?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Possible duplicates, missing receipts, and anything more than twice the usual amount for that type.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Create alert “Expenses to check before approval”"
      subtitle="Review these details before I create the alert."
      rows={[
        ['Runs', 'When an expense is submitted'],
        ['Exceptions', 'Possible duplicate, missing receipt, amount more than twice the usual for its type'],
        ['Levels', 'Action required for a possible duplicate, Attention for the others'],
        ['Who', 'The approver of the expense'],
        ['Channels', 'Web, Email'],
        ['Last month', '11 of 236 expenses would have been flagged: 3 possible duplicates'],
      ]}
      actions={[{ label: 'Deny' }, { label: 'Create', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>I reviewed the alert and selected Create.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Created" label="Expenses to check before approval" />
    <p>From now on, each submitted expense is checked as it arrives.</p>
  </Walkthrough.Message>

  <Walkthrough.DateSeparator label="Two days later · Notifications of David Brown, approver" />

  <Walkthrough.NotificationPanel>
    <Walkthrough.NotificationCard
      level="action"
      levelLabel="Action required"
      title="Expenses to check before approval"
      time="Today, 11:42"
    >
      <p><strong>Julia Green · Taxi, €38.50, 3 November</strong> may be a duplicate. An expense with the same date and amount was submitted on 4 November and is already approved.</p>
    </Walkthrough.NotificationCard>

    <Walkthrough.NotificationCard
      level="attention"
      levelLabel="Attention"
      title="Expenses to check before approval"
      time="Today, 11:42"
    >
      <p><strong>Julia Green · Client lunch, €312, 5 November</strong> has no receipt attached, and is about three times her usual client lunch.</p>
    </Walkthrough.NotificationCard>
  </Walkthrough.NotificationPanel>
</Walkthrough>

## Related articles

- [Approve Expenses](/docs/product/billing-and-costs/expenses/approve-expenses)
- [Create a Billing Readiness Alert](/docs/ai/use-cases/alerts-and-notifications/creating-a-billing-readiness-alert)
- [Receive and manage notifications](/docs/product/notifications/receive-and-manage-notifications)
- [Automations](/docs/build-and-extend/automations)
- [AI Assistant](/docs/ai/ai-assistant)
