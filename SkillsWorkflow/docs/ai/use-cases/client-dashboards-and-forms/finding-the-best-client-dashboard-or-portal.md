---
id: finding-the-best-client-dashboard-or-portal
title: Find the Best Workspace or Portal to Share With a Client
description: "See how an account manager asks the AI Assistant which workspace or client portal to use to share project status, contract burn and pending requests with a client, and what each one shows."
sidebar_label: Find the Best Client Workspace or Portal
sidebar_position: 3
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
This use case is in preview, the conversation shows how the AI Assistant is expected to handle it, and what it answers or does today may differ from this example.
:::

## Overview

Tell the AI Assistant what you want to share with a client: the status of their projects, the contract burn, the risks or the requests waiting on them. The assistant matches it to the workspaces and client portals your agency has, explains what each one shows and recommends the clearest choice. It also tells you which views are meant for the agency only, such as profitability.

The agency and client in this example are illustrative. The assistant recommends from the workspaces and portals available in your agency, so the names you see may differ. Burn Workspace and Profitability Workspace, used in this example, are client workspaces.

<Walkthrough
  subtitle="An example conversation between an account manager and the AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="From what the client asks to where to show it">
        The assistant points you to the workspace or portal that answers your client’s question, and warns you about the ones that should stay internal.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Say what the client wants to follow.',
          'Read which workspace or portal the assistant recommends and why.',
          'Ask whether a view is suitable to share with the client.',
          'Open the recommended workspace, or ask for a portal when none fits.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'What can I show Northwind Coffee about their contract burn?',
          'Is there a portal for this client already?',
          'Which dashboard should I use in the monthly client meeting?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Workspaces open inside Skills Workflow. A client portal is a page of its own that you share as an address.',
          'Views with margins, costs or rates are meant for the agency. Check what a view shows before sharing it.',
          'When no workspace or portal covers what the client needs, ask the assistant to create a portal.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>Northwind Coffee wants to see how their projects are going and how much of the contract they have used. What should I share with them?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>For <strong>contract burn</strong>, use the <strong>Burn Workspace</strong> on the client. It shows contracted, planned and recorded hours per project, and the burn month by month.</p>
    <p>For <strong>project status and pending requests</strong>, there is a client portal for Northwind Coffee, <strong>christmas-2026</strong>, with the jobs by stage, the jobs at risk and the jobs waiting for client approval.</p>
    <Walkthrough.WorkspaceCard
      title="Burn Workspace"
      subtitle="Workspace · Client"
      description="Contracted, planned and recorded hours per project, with the monthly time and revenue burn."
    />
    <Walkthrough.WorkspaceCard
      title="christmas-2026"
      subtitle="Client portal · northwind-coffee"
      description="Status, contract burn in hours, jobs at risk and jobs waiting on the client for the Christmas 2026 project."
      actionLabel="Open portal"
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Can I also show them the Profitability Workspace?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>No, keep it internal. The <strong>Profitability Workspace</strong> shows the planned profit and the margin per project and per typology, worked out from your income and your costs.</p>
    <p>The Burn Workspace also shows revenue against cost. In the client meeting, stay on the time burn charts, or share the portal, which shows hours only.</p>
  </Walkthrough.Message>
</Walkthrough>

## Related articles

- [Client Workspace](/docs/product/dashboards-and-reporting/client-dashboard)
- [Give a Client an Online Project Status Portal](/docs/ai/use-cases/client-dashboards-and-forms/providing-clients-with-an-online-project-status-portal)
- [Client Portals](/docs/ai/ai-portals)
- [AI Assistant](/docs/ai/ai-assistant)
