---
id: tracking-pending-proposals-and-approvals
title: Track Estimates Waiting for Approval
description: "See how an account director asks the AI Assistant which estimates are waiting for client approval, for how long and why, and asks the account manager on the Feed to follow up."
sidebar_label: Track Estimates Waiting for Approval
sidebar_position: 5
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
This use case is in preview, the conversation shows how the AI Assistant is expected to handle it, and what it answers or does today may differ from this example.
:::

## Overview

Ask the AI Assistant which estimates sent to clients are still waiting for approval. It lists them with their value, the day they were sent, how long they have been waiting and who is responsible. Ask why one is held up, and the assistant summarises what was written on the estimate and its Feed. You can then ask it to post a comment on the estimate's Feed so the responsible person follows up. You review the comment before it is posted.

The agency, clients, estimates, values and stages in this example are illustrative. The stages depend on each estimate's workflow, and the estimates you see depend on your access.

<Walkthrough
  subtitle="An example conversation between an account director and the AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="From pending estimates to a follow-up">
        The assistant shows which proposals are stuck, for how long and why, and starts the follow-up with the person responsible.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Ask which estimates are waiting for client approval.',
          'Read the value, the days waiting and the responsible person.',
          'Ask why an estimate is held up.',
          'Ask the assistant to post a comment on the estimate’s Feed.',
          'Review the comment and select Post.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Which proposals are still waiting for approval?',
          'What is the oldest estimate waiting on Contoso Bank?',
          'How much is waiting for client approval this month?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Waiting for approval means the estimate is in a stage your agency uses for client approval. The stage name depends on its workflow.',
          'The days waiting count from the day the estimate entered that stage.',
          'The reasons come from what was written on the estimate and its Feed. When nobody recorded one, the assistant says so.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>Which of our estimates are still waiting for the client to approve?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Four estimates are waiting for client approval, for €148,500 in total:</strong></p>
    <Walkthrough.DataTable
      columns={['Estimate', 'Client', 'Value', 'Sent', 'Days waiting', 'Responsible']}
      rows={[
        ['2026 - 00377 · Mobile App Phase 2', 'Contoso Bank', '€86,000', '1 October', '29', 'David Brown'],
        ['2026 - 00395 · Dealer Kit Q1', 'Fabrikam Motors', '€38,500', '15 October', '15', 'Anna Smith'],
        ['2026 - 00401 · Spring Shoot', 'Contoso Bank', '€16,000', '22 October', '8', 'David Brown'],
        ['2026 - 00409 · Gift Card Design', 'Northwind Coffee', '€8,000', '27 October', '3', 'Sarah Lee'],
      ]}
    />
    <p><strong>How I read your question</strong></p>
    <ul>
      <li>Included: estimates in the Awaiting Client Approval stage.</li>
      <li>Assumed: “sent” is the day the estimate entered that stage.</li>
    </ul>
    <Walkthrough.Source label="Estimates · 4 rows" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Why is Mobile App Phase 2 taking so long?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <ul>
      <li>On 8 October, the client asked on the Feed for the price of a smaller scope, without the Android version.</li>
      <li>David replied on 9 October that he would send an alternative. No revised estimate was created since.</li>
      <li>The last comment on the Feed is from 9 October.</li>
    </ul>
    <p>The client is probably waiting for the reduced option.</p>
    <Walkthrough.Source label="Feed · 4 posts" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Ask David on the Feed to send the reduced option this week.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Post a comment"
      subtitle="Review the comment before I post it."
      rows={[
        ['Estimate', '2026 - 00377 · Mobile App Phase 2'],
        ['Mentions', 'David Brown'],
        ['Comment', 'Contoso Bank asked for a version without Android on 8 October and is still waiting. Can you send them the reduced option this week?'],
      ]}
      actions={[{ label: 'Deny' }, { label: 'Post', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>I reviewed the comment and selected Post.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Posted" label="2026 - 00377 · Mobile App Phase 2" />
    <p>The comment is on the estimate’s Feed. David was notified.</p>
  </Walkthrough.Message>
</Walkthrough>

## Related articles

- [Create Estimate](/docs/product/commercial/estimates/create-estimate)
- [Using the Feed](/docs/product/files-and-collaboration/using-feed)
- [Compare Estimate Scenarios Before Creating One](/docs/ai/use-cases/contracts-estimates-and-purchase-orders/discussing-estimate-scenarios-before-creation)
- [AI Assistant](/docs/ai/ai-assistant)
