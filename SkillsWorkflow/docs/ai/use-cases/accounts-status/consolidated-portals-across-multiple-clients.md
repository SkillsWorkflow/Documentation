---
id: consolidated-portals-across-multiple-clients
title: Follow Several Clients From One Portal
description: "See how an account director asks the AI Assistant for one portal that shows the status, pending requests and critical issues of several client accounts, with links to each client's own portal."
sidebar_label: Follow Several Clients From One Portal
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
This use case is in preview, the conversation shows how the AI Assistant is expected to handle it, and what it answers or does today may differ from this example.
:::

## Overview

Ask the AI Assistant for one page that shows all the accounts you are responsible for. The assistant proposes a portal with a row per client: active projects, late jobs, jobs waiting on the client and the contract burn, with the accounts that need attention at the top and a link to each client's own portal where one exists. You review the page and the assistant publishes it.

A client portal is a page of its own, served from Skills Workflow and reading live data through the permissions of whoever opens it. Read [Client Portals](/docs/ai/ai-portals) for how portals work and what is not there yet.

The agency, clients, numbers and addresses in this example are illustrative.

<Walkthrough
  subtitle="An example conversation between an account director and the AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Every account on one page">
        The assistant builds one portal across your clients, ordered by what needs attention, and links to each client’s own portal.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Name the clients the portal should cover.',
          'Check the columns and the order the assistant proposes.',
          'Review the address and select Publish.',
          'Open the portal and follow a client into its own portal.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Create one page with all my accounts.',
          'Add Tailspin Toys to my accounts portal.',
          'Put the clients with late jobs first.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Each person who opens the portal sees only the clients and projects their permissions allow.',
          'A portal is not limited to a client yet. Any signed-in user who knows the address can open it, so restrict the portal folder by role.',
          'The assistant asks for your approval before it publishes. Select Deny to keep the page unpublished.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>I look after Northwind Coffee, Contoso Bank and Fabrikam Motors. Create one portal where I can see how all three are doing.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>I’ll build an accounts portal with one row per client, ordered by late jobs:</p>
    <Walkthrough.DataTable
      columns={['Client', 'Active projects', 'Late jobs', 'Waiting on client', 'Contract burn', 'Portal']}
      rows={[
        ['Contoso Bank', '4', '3', '2', '81%', '—'],
        ['Northwind Coffee', '2', '1', '3', '62%', 'christmas-2026'],
        ['Fabrikam Motors', '3', '0', '1', '44%', '—'],
      ]}
      note="Contoso Bank has 81% of its contracted hours recorded with two months left on its fee."
    />
    <p><strong>How I read your question</strong></p>
    <ul>
      <li>Included: projects of the three clients that are not in a closing stage, and their jobs.</li>
      <li>Assumed: contract burn is the share of contracted hours already recorded on each client’s active fees.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Good. Publish it.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Publish this portal"
      subtitle="Review the portal before I publish it."
      rows={[
        ['Clients', 'Northwind Coffee, Contoso Bank, Fabrikam Motors'],
        ['Address', '/portal/accounts/anna-smith/'],
        ['Columns', 'Active projects, Late jobs, Waiting on client, Contract burn, Portal'],
        ['Order', 'Late jobs, most first'],
      ]}
      actions={[{ label: 'Deny' }, { label: 'Publish', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>I reviewed the details and selected Publish.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Published" label="accounts/anna-smith" />
    <p>The portal is published. Select a client’s row to see its late jobs, or the portal name to open Northwind Coffee’s own portal.</p>
  </Walkthrough.Message>
</Walkthrough>

## Related articles

- [Client Portals](/docs/ai/ai-portals)
- [Give a Client an Online Project Status Portal](/docs/ai/use-cases/client-dashboards-and-forms/providing-clients-with-an-online-project-status-portal)
- [Check Critical Jobs Across Your Clients](/docs/ai/use-cases/accounts-status/monitoring-critical-activities-across-accounts)
- [AI Assistant](/docs/ai/ai-assistant)
