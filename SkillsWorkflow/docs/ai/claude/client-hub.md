---
id: ai-claude-client-hub
title: One Address for Everything a Client Opens
description: "Ask Claude for a client's home page: one address that links to every status page and report you publish for them, with a short summary of each."
sidebar_label: One Address per Client
sidebar_position: 4
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

Give each client a single address to bookmark. Claude builds a home page for the client that links to the status pages and reports you published for them, and shows one line of live data beside each link: how many approvals are waiting, how much of the retainer is used. When you publish something new for the client, ask Claude to add it to the home page.

## Availability

Available. You need the [Skills Workflow connector in Claude](/docs/ai/claude/ai-claude-connect) and at least one page already published for the client.

## How to ask for it

1. Ask Claude for a home page for the client and name the pages it should link to. Claude can read back what is published for the client when you give it the page names.
2. Say which figure, if any, each link should show.
3. Review the page and let Claude publish it at the client's main address, for example `/portal/{client}/home/`.

The agency, client, numbers and address in this example are illustrative.

<Walkthrough
  title="Claude"
  subtitle="An example conversation between an account director and Claude."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="One link to send, once">
        The client keeps one address. New pages appear on it when you ask Claude to add them.
      </Walkthrough.CapabilityCard>
      <Walkthrough.PhrasingCard
        items={[
          'Make a home page for Contoso Bank linking to their status page and retainer report.',
          'Add the new campaign page to Contoso’s home page.',
          'Show how many approvals are waiting next to the status page link.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Each linked page applies its own data permissions when it opens.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>Contoso Bank has a status page and a retainer report. Make them a home page that links to both, with the number of approvals waiting next to the status page.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <p>I found both pages under <code>contoso-bank</code>. The home page will have:</p>
    <Walkthrough.DataTable
      columns={['Link', 'Shown beside it']}
      rows={[
        ['Campaign status', 'Approvals waiting on you'],
        ['Retainer report', 'Share of this month’s hours used'],
        ['Your team', 'The account team, with their pictures'],
      ]}
    />
    <p>I will publish it at <code>/portal/contoso-bank/home/</code>.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Go ahead.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <Walkthrough.StatusChip status="Published" label="contoso-bank/home" />
    <p>Published. Send Contoso this one address; the other two are reachable from it.</p>
  </Walkthrough.Message>
</Walkthrough>

## Rules and behaviour

- A link on the home page opens the other page at its own address. Each page checks the viewer's permissions on its own.
- The home page does not find new pages by itself. Ask Claude to add each one.

## Related articles

- [Share a Live Status Page With a Client](/docs/ai/claude/ai-claude-client-status-page)
- [Build a Report From Your Data](/docs/ai/claude/ai-claude-reports)
- [Client Portals](/docs/ai/ai-portals)
