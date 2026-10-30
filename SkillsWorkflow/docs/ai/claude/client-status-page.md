---
id: ai-claude-client-status-page
title: Share a Live Status Page With a Client
description: "Ask Claude for a page that shows a client the state of their campaign, its deliverables and what is waiting on them, published at one address that always shows today's data."
sidebar_label: A Live Status Page for a Client
sidebar_position: 3
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

Give a client one address where they see how their work is going: the campaign's progress, the deliverables due, and the approvals waiting on them. Ask Claude for the page, review it, and send the client the address. The page reads Skills Workflow every time it opens, so nobody updates it by hand and nobody emails a status deck on Friday.

## Availability

Available. You need the [Skills Workflow connector in Claude](/docs/ai/claude/ai-claude-connect). The client signs in with their own Skills Workflow user, and sees only the projects and jobs that user is allowed to see.

## How to ask for it

1. Name the client, the project or campaign, and what the client should see on the page.
2. Check what Claude proposes for each section and the data behind it. Ask for changes before it publishes.
3. Claude publishes the page under the client's name and gives you the address.
4. Open the address as a user with the client's permissions, then send it.

The agency, client, numbers and address in this example are illustrative.

<Walkthrough
  title="Claude"
  subtitle="An example conversation between an account manager and Claude."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="A status update that keeps itself current">
        Claude builds the page from your projects and jobs. Every time the client opens it, it shows today's data.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Name the client and the campaign.',
          'Say what the client should and should not see.',
          'Review the sections before Claude publishes.',
          'Open the address as the client before sending it.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Make a status page for Northwind Coffee’s Christmas campaign.',
          'Add the approvals waiting on the client at the top.',
          'Hide the hours, the client should not see them.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'The client needs a Skills Workflow user to open the page.',
          'Any signed-in user who knows the address can open it. Restrict the folder by role when that matters.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>Make a status page for Northwind Coffee’s Christmas 2026 campaign. They should see progress, what is due in the next two weeks and anything waiting on their approval. No hours or costs.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <p>Here is the page I will publish for Northwind Coffee:</p>
    <Walkthrough.FieldTable
      rows={[
        ['Header', 'Campaign name, owner and overall progress'],
        ['Waiting on you', 'Jobs in a client approval stage, oldest first'],
        ['Due in the next two weeks', 'Deliverables with their due date and stage'],
        ['Delivered', 'Jobs closed this month'],
        ['Left out', 'Hours, rates and costs'],
      ]}
    />
    <p>The address will be <code>/portal/northwind-coffee/christmas-2026/</code>. Shall I publish it?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Yes, publish it.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <Walkthrough.StatusChip status="Published" label="northwind-coffee/christmas-2026" />
    <p>It is published. Open it with a user who has Northwind Coffee’s permissions before you send the address: that is exactly what the client will see.</p>
  </Walkthrough.Message>
</Walkthrough>

## Rules and behaviour

- The address has two parts, the client and the page: `/portal/{client}/{page}/`. Both use lowercase letters, numbers and hyphens only.
- Asking for a change republishes the whole page at the same address. The client keeps the same link.
- The page has no images of its own beyond what Claude embeds in it. Logos and pictures of people and clients come from Skills Workflow.
- Opening the page without a session shows the Skills Workflow sign-in, and returns to the page afterwards.

## Related articles

- [One Address for Everything a Client Opens](/docs/ai/claude/ai-claude-client-hub)
- [Build a Report From Your Data](/docs/ai/claude/ai-claude-reports)
- [Client Portals](/docs/ai/ai-portals)
- [Connect Claude to Skills Workflow](/docs/ai/claude/ai-claude-connect)
