---
id: providing-clients-with-an-online-project-status-portal
title: Give a Client an Online Project Status Portal
description: "See how an account manager asks the AI Assistant for a client portal with a project's status, contract burn, risks and pending requests, reviews what the page shows and publishes it."
sidebar_label: Give a Client a Project Status Portal
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Overview

Tell the AI Assistant which client and project the portal is for and what it should show. The assistant proposes the sections of the page and the data behind each one: the project's status, its contract burn, the jobs at risk and the requests still waiting on someone. You review the page, and the assistant publishes it as a client portal with its own address, ready to share.

A client portal is a page of its own, served from Skills Workflow and reading live data. Anyone who opens it signs in and sees the data their own permissions allow. Read [Client Portals](/docs/ai/ai-portals) for how portals work and what is not there yet.

:::note Preview
This use case is in preview and has not been tested end to end yet. The conversation shows how the AI Assistant is expected to handle it, and what it answers or does today may differ from this example.
:::

The agency, client, project, numbers and address in this example are illustrative.

<Walkthrough
  subtitle="An example conversation between an account manager and the AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="From a request to a page the client opens">
        The assistant builds a portal around the project the client cares about, with live status, burn, risks and pending requests.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Name the client, the project and what the portal should show.',
          'Check the sections and the data the assistant proposes.',
          'Ask for changes to the sections before publishing.',
          'Review the address and select Publish.',
          'Open the portal and check it as a user who should see it.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Create a status page for Northwind Coffee with their Christmas project.',
          'Give Contoso Bank an online view of contract burn and pending approvals.',
          'Add the jobs at risk to the Northwind portal.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'A portal reads data through the permissions of the person who opens it. Someone who cannot see a project in Skills Workflow does not see it in the portal either.',
          'A portal is not limited to its client yet. Any signed-in user who knows the address can open it, so restrict the portal folders by role.',
          'The address has two parts, the client and the portal, in lowercase letters, numbers and hyphens.',
          'The assistant asks for your approval before it publishes. Select Deny to keep the page unpublished.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>Northwind Coffee wants to follow the Christmas 2026 project online. Create a portal with the project status, contract burn, risks and the requests waiting on them.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>I’ll build a portal for <strong>Northwind Christmas 2026</strong> with four sections:</p>
    <Walkthrough.DataTable
      columns={['Section', 'What it shows']}
      rows={[
        ['Project status', 'Jobs by stage, delivered this month and due in the next two weeks'],
        ['Contract burn', 'Contracted, planned and recorded hours, and the burn percentage'],
        ['At risk', 'Late jobs and jobs due this week that are not in production yet'],
        ['Waiting on you', 'Jobs waiting for client approval or feedback, with the days waiting'],
      ]}
    />
    <p>Should the burn show hours only, or hours and values?</p>
    <Walkthrough.Choices label="Contract burn" options={['Hours only', 'Hours and values']} />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Hours only. And add the client’s logo at the top.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Publish this portal"
      subtitle="Review the portal before I publish it."
      rows={[
        ['Client', 'Northwind Coffee'],
        ['Project', 'Northwind Christmas 2026'],
        ['Address', '/portal/northwind-coffee/christmas-2026/'],
        ['Sections', 'Project status, Contract burn (hours), At risk, Waiting on you'],
        ['Header', 'Northwind Coffee logo'],
      ]}
      actions={[{ label: 'Deny' }, { label: 'Publish', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>I reviewed the details and selected Publish.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Published" label="northwind-coffee/christmas-2026" />
    <p>The portal is published. Today it shows 14 jobs, 9 delivered, 62% of the contracted hours recorded, 2 jobs at risk and 3 jobs waiting for client approval.</p>
    <p>Before you share the address, restrict the <strong>northwind-coffee</strong> folder to the roles that should open it.</p>
  </Walkthrough.Message>
</Walkthrough>

## Related articles

- [Client Portals](/docs/ai/ai-portals)
- [Find the Best Workspace or Portal to Share With a Client](/docs/ai/use-cases/client-dashboards-and-forms/finding-the-best-client-dashboard-or-portal)
- [Follow Several Clients From One Portal](/docs/ai/use-cases/accounts-status/consolidated-portals-across-multiple-clients)
- [AI Assistant](/docs/ai/ai-assistant)
