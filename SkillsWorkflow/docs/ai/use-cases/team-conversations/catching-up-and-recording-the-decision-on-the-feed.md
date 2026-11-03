---
id: catching-up-and-recording-the-decision-on-the-feed
title: Catch Up on a Conversation and Record the Decision
description: "See how a person added to a Chat group asks Skilio for a summary of what was decided, and then has the decision posted on the Job's Feed so it does not stay only in the chat."
sidebar_label: Catch Up and Record the Decision
sidebar_position: 3
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
This use case is in preview, the conversation shows how the AI Assistant is expected to handle it, and what it answers or does today may differ from this example.
:::

## Overview

When you join a conversation that has been going for a while, mention **@Skilio** and ask what was decided. Skilio summarises the conversation: the decisions, who owns what, and what is still open. Decisions made in Chat stay in Chat, so you can then ask Skilio to post them on the Job's Feed, where the rest of the team and the Job's history can find them. You review the comment before it is posted.

The agency, client, people, Job and messages in this example are illustrative.

<Walkthrough
  variant="team"
  conversation="Velmont Christmas campaign"
  members="3 online · 6 members"
  subtitle="A finance manager joins a group conversation and records the decision on the Job’s Feed."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="From the chat to the record">
        Skilio turns a long conversation into a short summary for whoever joins late, and moves the decision onto the Job where it belongs.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Mention @Skilio and ask what was decided.',
          'Check the summary with the people in the conversation.',
          'Ask Skilio to post the decision on the Job’s Feed and name who to mention.',
          'Review the comment and select Post.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          '@Skilio what did we decide here?',
          '@Skilio what is still open?',
          '@Skilio post the decision on the Job’s Feed and mention Ana.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'The summary is based only on the messages in this conversation.',
          'The comment is posted on the Job’s Feed with your name, and the people you mention are notified.',
          'Select Deny to leave the Feed as it is.',
        ]}
      />
    </>
  }
>
  <Walkthrough.DateSeparator label="Today" />

  <Walkthrough.Message sender="member" name="Rui Santos" time="15:05" avatar="/img/ai/avatars/rui-santos.svg">
    <p>Adding Laura from Finance so she sees the change.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="me" name="Laura Bennett" time="15:07" avatar="/img/ai/avatars/laura-bennett.svg">
    <p>Hi all. @Skilio what did you decide here?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio" time="15:09">
    <p><strong>The team decided to deliver the Velmont Christmas campaign website a week early:</strong></p>
    <ul>
      <li>The client moved the delivery from 22 to 15 December. Ana Costa confirmed it on the call.</li>
      <li>Sofia Marques takes over as Executor on Campaign Website. Rui Santos added her to the team.</li>
      <li>An in-store poster was added as a new Job, Velmont Christmas 2026 – In-store Poster (1058), due on 10 December.</li>
    </ul>
    <p><strong>Still open:</strong> whether the earlier delivery has a rush fee for the client. Nobody has confirmed it.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="me" name="Laura Bennett" time="15:11" avatar="/img/ai/avatars/laura-bennett.svg">
    <p>Thanks. There is a rush fee in their contract. @Skilio post this decision on the Campaign Website Feed, say the rush fee applies, and mention Ana so she tells the client.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio" time="15:13">
    <Walkthrough.ApprovalCard
      title="Post a comment"
      subtitle="Review the comment before I post it."
      rows={[
        ['Job', 'Velmont Christmas 2026 – Campaign Website'],
        ['Mentions', 'Ana Costa'],
        ['Comment', 'Delivery moved from 22 to 15 December at the client’s request. Sofia Marques is now the Executor. The contract’s rush fee applies to the earlier delivery. Ana, can you let Velmont Bakery know?'],
      ]}
      actions={[{ label: 'Deny' }, { label: 'Post', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio" time="15:15">
    <Walkthrough.StatusChip status="Posted" label="Velmont Christmas 2026 – Campaign Website" />
    <p>The comment is on the Job’s Feed. Ana was notified.</p>
  </Walkthrough.Message>
</Walkthrough>

## Related articles

- [Discuss a Resource Overrun Notification](/docs/ai/use-cases/resource-management/discussing-a-resource-overrun-notification)
- [Using the Feed](/docs/product/files-and-collaboration/using-feed)
- [Chat](/docs/product/files-and-collaboration/chat)
