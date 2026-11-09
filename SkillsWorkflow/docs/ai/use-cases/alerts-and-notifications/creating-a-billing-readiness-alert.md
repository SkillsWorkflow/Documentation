---
id: creating-a-billing-readiness-alert
title: Create a Billing Readiness Alert
description: "See how a finance manager asks the AI Assistant to prepare a billing action list every Monday, with what is blocking each item and who is responsible, and how each responsible person then receives only the items that depend on them."
sidebar_label: Billing Readiness Alert
sidebar_position: 3
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
This use case is in preview, the conversation shows how the AI Assistant is expected to handle it, and what it answers or does today may differ from this example.
:::

## Overview

Ask the AI Assistant to check every week what is ready to bill and what is holding billing back: invoice authorizations not yet approved, missing client purchase orders, or estimates without billing conditions. For every blocked item, the alert names the blocker and the person who can remove it.

You receive the full list. Each responsible person receives only their own items, marked **Action required** when the planned billing date has already passed. You review the alert on a card before it is created.

The agency, clients, estimates, people and values in this example are illustrative. Each person only hears about documents they can access.

<Walkthrough
  subtitle="An example conversation between a finance manager and the AI Assistant, and the notifications the alert sends later."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="From a billing chase to a weekly action list">
        Finance stops chasing account teams one by one. Every Monday, each blocker is already with the person who can remove it.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Say what counts as blocking billing and when to check.',
          'Choose who receives the full list and who receives their own items.',
          'Check the blockers the alert would report today.',
          'Review the alert and select Create.',
          'Follow up from the notifications as they arrive.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Each Monday, prepare a billing action list with the blocker and responsible owner.',
          'Add estimates approved more than 30 days ago that have no invoice authorization.',
          'Send me the billing list on the last working day of the month too.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'The responsible person is the account manager of the estimate, unless the blocker is an approval, which goes to the approver.',
          'Action required is for items past their planned billing date. The rest are marked Attention.',
          'The alert does not create or change any billing document.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>Each Monday, prepare a billing action list with the blocker and the responsible owner.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>I’ll check approved estimates with billing due this month. These are the blockers I can look for. Which ones do you want?</p>
    <ul>
      <li>Invoice authorization waiting for approval</li>
      <li>Client purchase order missing</li>
      <li>No billing conditions on the estimate</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>All three. Send me the full list, and each owner only their part.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Create alert “Billing action list”"
      subtitle="Review these details before I create the alert."
      rows={[
        ['Checks', 'Approved estimates with billing due this month'],
        ['Blockers', 'Invoice authorization waiting for approval, client purchase order missing, no billing conditions'],
        ['Levels', 'Action required when past the planned billing date, Attention otherwise'],
        ['When', 'Every Monday, 09:00'],
        ['Who', 'You: the full list · Each owner: their own items'],
        ['Channels', 'Web, Email'],
        ['If it ran today', '9 blocked items, €84,300, 5 owners notified'],
      ]}
      actions={[{ label: 'Deny' }, { label: 'Create', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>I reviewed the alert and selected Create.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Created" label="Billing action list" />
    <p>The first list arrives next Monday at 09:00.</p>
  </Walkthrough.Message>

  <Walkthrough.DateSeparator label="Next Monday · Notifications of Anna Smith, account manager" />

  <Walkthrough.NotificationPanel>
    <Walkthrough.NotificationCard
      level="action"
      levelLabel="Action required"
      title="Billing action list · 2 items"
      time="Today, 09:00"
    >
      <ul>
        <li><strong>Orvella Tea · Spring Campaign</strong>, €12,500: client purchase order missing. Billing was planned for 31 October.</li>
        <li><strong>Velmont Bakery · Packaging Refresh</strong>, €6,800: no billing conditions on the estimate.</li>
      </ul>
    </Walkthrough.NotificationCard>
  </Walkthrough.NotificationPanel>
</Walkthrough>

## Related articles

- [Invoice Authorizations](/docs/product/billing-and-costs/billing/invoice-authorizations)
- [Purchase Orders](/docs/product/billing-and-costs/billing/purchase-orders)
- [Track Estimates Waiting for Approval](/docs/ai/use-cases/accounts-status/tracking-pending-proposals-and-approvals)
- [Receive and manage notifications](/docs/product/notifications/receive-and-manage-notifications)
- [AI Assistant](/docs/ai/ai-assistant)
