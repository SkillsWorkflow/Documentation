---
id: ai-claude-forms
title: Collect Requests With a Form
description: "Ask Claude for a form that creates work in Skills Workflow: a request form that opens a job, or a short feedback form a client fills in after a delivery."
sidebar_label: A Form That Creates Work
sidebar_position: 8
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
This is in preview and has not been tested end to end yet. It is built with what Skills Workflow offers today; test it with a real request before sharing it.
:::

Replace the request emails with a form. Ask Claude for a page where a client or a colleague describes what they need, and the request lands in Skills Workflow as a job, with the fields your team needs filled in. The same goes for a feedback form after a delivery, or a short brief for a new piece of work.

## Availability

Preview. You need the [Skills Workflow connector in Claude](/docs/ai/claude/ai-claude-connect). Whoever fills in the form signs in to Skills Workflow, and what they send is created as them, with their permissions. A form for people without a Skills Workflow user is not available.

## How to ask for it

1. Say what the form creates, for which client, and in which job type.
2. List the questions, and which field in Skills Workflow each answer goes to.
3. Say what the person sees after sending: the job number, a thank-you, a link to the status page.
4. Send a test request yourself and open the job it created.

The agency, client and job in this example are illustrative.

<Walkthrough
  title="Claude"
  subtitle="An example conversation between a traffic manager and Claude."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Requests arrive as work, not as email">
        Each form creates the job with the answers in the right fields, as the person who sent it.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Name the job type and the client.',
          'Map each question to a field.',
          'Send a test request and open the job.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'People who are not allowed to create the job get a message saying so.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>Northwind’s marketing team emails us their requests. Make them a form that creates a job in the Northwind Coffee client: what they need, the deadline, the channel and any files they have.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <p>Here is what each answer becomes:</p>
    <Walkthrough.DataTable
      columns={['Question', 'Goes to']}
      rows={[
        ['What do you need?', 'Job name and description'],
        ['When do you need it?', 'Due date'],
        ['Which channel?', 'The job’s channel field'],
        ['Files', 'Attached to the job'],
      ]}
      note="After sending, the person sees the job number and a link to Northwind’s status page."
    />
  </Walkthrough.Message>
</Walkthrough>

## Rules and behaviour

- A form creates and updates records as the signed-in person. Whatever they cannot do in Skills Workflow, the form cannot do for them.

## Related articles

- [Share a Live Status Page With a Client](/docs/ai/claude/ai-claude-client-status-page)
- [Skills Workflow in Claude](/docs/ai/claude)
- [Connect Claude to Skills Workflow](/docs/ai/claude/ai-claude-connect)
