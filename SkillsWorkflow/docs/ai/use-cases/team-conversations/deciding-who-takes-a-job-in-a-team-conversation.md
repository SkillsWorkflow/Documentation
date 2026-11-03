---
id: deciding-who-takes-a-job-in-a-team-conversation
title: Decide Who Takes a Job in a Team Conversation
description: "See how an account director and a traffic manager ask Skilio, inside their Chat conversation, who is free for a new deadline, and assign the person they agree on to the Job's team."
sidebar_label: Decide Who Takes a Job
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
This use case is in preview, the conversation shows how the AI Assistant is expected to handle it, and what it answers or does today may differ from this example.
:::

## Overview

When a decision is being made in a Chat conversation, anyone in it can mention **@Skilio** to bring in the facts. Here, the client has moved a deadline forward. The account director and the traffic manager ask Skilio who is free, agree on a person in the conversation, and ask Skilio to add that person to the Job's team. The person who asked approves the change before it is made.

The agency, client, people, Job and hours in this example are illustrative.

<Walkthrough
  variant="team"
  conversation="Velmont Christmas campaign"
  members="3 online · 5 members"
  subtitle="An account director and a traffic manager decide in Chat, with Skilio in the conversation."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="From a question to a decision">
        Skilio answers in the conversation, so everyone works from the same numbers and the decision is made where the discussion is.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Mention @Skilio with the period and the kind of people you need.',
          'Discuss the options with the rest of the conversation.',
          'Mention @Skilio again to assign the person you agreed on.',
          'Review the team change and select Approve.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          '@Skilio who in Creative has 30 hours free before the 15th?',
          '@Skilio what is Lucas booked on next week?',
          '@Skilio add Sofia to the Campaign Website job as Executor.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Everyone in the conversation sees Skilio’s answers.',
          'Only the person who mentioned Skilio can approve the change it prepares.',
          'Select Deny to leave the Job’s team as it is.',
        ]}
      />
    </>
  }
>
  <Walkthrough.DateSeparator label="Today" />

  <Walkthrough.Message sender="member" name="Ana Costa" time="09:12" avatar="/img/ai/avatars/ana-costa.svg">
    <p>Velmont wants the Christmas campaign website on the 15th, not the 22nd. Can we do it?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="me" name="Rui Santos" time="09:14" avatar="/img/ai/avatars/rui-santos.svg">
    <p>Depends on who’s free in Creative. @Skilio who in Creative has at least 30 hours free between 3 and 15 December?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio" time="09:16">
    <p><strong>Two people in Creative have at least 30 hours free between Thursday 3 and Tuesday 15 December:</strong></p>
    <Walkthrough.DataTable
      columns={['Person', 'Role', 'Free time', 'Current bookings']}
      rows={[
        ['Sofia Marques', 'Associate Creative Director', '48h', '16h'],
        ['Lucas Ferreira', 'Designer', '34h', '30h'],
      ]}
      note="Daniel Reed has 22h free. Emma Clarke has leave from 7 to 11 December."
    />
    <Walkthrough.Source label="Capacity · 9 rows" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="member" name="Ana Costa" time="09:18" avatar="/img/ai/avatars/ana-costa.svg">
    <p>Sofia knows the brand, she did the summer campaign. Let’s go with her.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="me" name="Rui Santos" time="09:20" avatar="/img/ai/avatars/rui-santos.svg">
    <p>Agreed. @Skilio add Sofia to Velmont Christmas 2026 – Campaign Website as Executor.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio" time="09:22">
    <Walkthrough.ApprovalCard
      title="Add to this document’s team"
      subtitle="VLB0021DIGI001 · Velmont Christmas 2026 – Campaign Website"
      rows={[['Adding', 'Sofia Marques as Executor']]}
      actions={[{ label: 'Deny' }, { label: 'Approve', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio" time="09:24">
    <Walkthrough.StatusChip status="Updated" label="VLB0021DIGI001 · Velmont Christmas 2026 – Campaign Website" />
    <p>Sofia Marques is now the Executor on Velmont Christmas 2026 – Campaign Website.</p>
  </Walkthrough.Message>
</Walkthrough>

## Related articles

- [Find Available People and Assign One to a Job](/docs/ai/use-cases/resource-management/checking-resource-availability)
- [Chat](/docs/product/files-and-collaboration/chat)
- [AI Assistant](/docs/ai/ai-assistant)
