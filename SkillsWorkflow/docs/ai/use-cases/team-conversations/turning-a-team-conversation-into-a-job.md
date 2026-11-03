---
id: turning-a-team-conversation-into-a-job
title: Turn a Team Conversation into a Job
description: "See how a team agrees on a client request in Chat and asks Skilio to create the Job from what was said, without anyone retyping it as a form."
sidebar_label: Turn a Conversation into a Job
sidebar_position: 2
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
This use case is in preview, the conversation shows how the AI Assistant is expected to handle it, and what it answers or does today may differ from this example.
:::

## Overview

Client requests are often shaped in a quick conversation: someone passes on what the client asked, someone else adds the scope, a third person settles the deadline. When the team has agreed, mention **@Skilio** and ask it to create the Job. Skilio reads the conversation, finds the client and project, and proposes the Job's details and brief. The person who asked reviews them and approves.

The agency, client, people and Job in this example are illustrative.

<Walkthrough
  variant="team"
  conversation="Velmont Christmas campaign"
  members="4 online · 5 members"
  subtitle="An account team agrees on a new request in Chat and has Skilio create the Job."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="From agreement to Job">
        What the team agreed in the conversation becomes the Job’s title, description and brief, so nothing is lost between the chat and the form.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Agree on the request in the conversation: client, scope and deadline.',
          'Mention @Skilio and ask it to create the Job.',
          'Check the client, project, department and Job Type it proposes.',
          'Review the details and select Approve.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          '@Skilio create the Job from what we agreed above.',
          '@Skilio create it under the Velmont Christmas 2026 project.',
          '@Skilio change the deadline to 12 December before creating it.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Skilio uses the messages in this conversation. Say in the conversation anything it should include.',
          'When a client or project name matches more than one record, Skilio asks which one.',
          'Only the person who mentioned Skilio can approve the Job.',
        ]}
      />
    </>
  }
>
  <Walkthrough.DateSeparator label="Today" />

  <Walkthrough.Message sender="me" name="Ana Costa" time="11:40" avatar="/img/ai/avatars/ana-costa.svg">
    <p>Just off a call with Velmont. They want an in-store poster for the Christmas gift range, A2 and A3, same look as the website.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="member" name="Sofia Marques" time="11:42" avatar="/img/ai/avatars/sofia-marques.svg">
    <p>Easy to adapt from the hero banner. Two rounds of changes should be enough.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="member" name="Rui Santos" time="11:44" avatar="/img/ai/avatars/rui-santos.svg">
    <p>Print needs final files by 10 December. Ana, can you open it?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="me" name="Ana Costa" time="11:46" avatar="/img/ai/avatars/ana-costa.svg">
    <p>@Skilio create the Job from what we agreed above.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio" time="11:48">
    <p>The Job details are ready for review.</p>
    <Walkthrough.FieldTable
      rows={[
        ['Client', 'Velmont Bakery'],
        ['Project', 'Velmont Christmas 2026'],
        ['Business object type', 'Job'],
        ['Department', 'Creative'],
        ['Job Type', 'Print Design'],
        ['Title', 'Velmont Christmas 2026 – In-store Poster'],
        ['Description', 'In-store poster for the Christmas gift range in A2 and A3, adapted from the campaign website hero banner, with two rounds of changes'],
        ['Deadline', '10 December 2026'],
        ['Brief', 'Prepared from this conversation in the Print Design briefing sections'],
      ]}
    />
    <Walkthrough.Actions items={[{ label: 'Make changes' }, { label: 'Approve', primary: true }]} />
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio" time="11:50">
    <p>The Job has been created.</p>
    <Walkthrough.CreatedJobCard
      label="Created Job"
      title="Velmont Christmas 2026 – In-store Poster"
      number="1058"
      rows={[
        ['Job number', '1058'],
        ['Client', 'Velmont Bakery'],
        ['Project', 'Velmont Christmas 2026'],
        ['Department', 'Creative'],
        ['Job type', 'Print Design'],
        ['Deadline', '10 December 2026'],
      ]}
      actions={['Open popup', 'Navigate']}
    />
  </Walkthrough.Message>
</Walkthrough>

## Related articles

- [Create a Job from a Client Email](/docs/ai/use-cases/projects-and-jobs/creating-a-job-from-a-client-email)
- [Chat](/docs/product/files-and-collaboration/chat)
- [AI Assistant](/docs/ai/ai-assistant)
