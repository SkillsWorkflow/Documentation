---
id: finding-the-best-resource-management-dashboard
title: Find the Best Workspace for Resource Management
description: "See how a project manager asks the AI Assistant which workspaces to use for resource allocation, utilization and resource requirements, and opens the recommended workspace from the chat."
sidebar_label: Find the Best Resource Management Workspace
sidebar_position: 4
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Overview

Ask the AI Assistant, in your own words, which workspace to use for what you want to monitor: how work is allocated across people, how busy the team is, or where planned demand exceeds available capacity. The assistant matches your question to the workspaces your agency has, explains what each one is for, and recommends the clearest choice. Each recommended workspace comes with an **Open workspace** button, so you can go straight to it from the chat.

The agency and team in this example are illustrative. Skills Workflow provides a set of standard workspaces, and some agencies also have custom workspaces built on request. The assistant recommends from the workspaces available in your agency, so the names you see may differ from this example. Resources Scheduler, My Scheduler and Capacity × Workload, used in this example, are standard workspaces.

<Walkthrough
  subtitle="An example conversation between a project manager and the AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="From question to workspace">
        The assistant tells you which of your agency's workspaces answers your resource management question, explains why, and takes you to it.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Say what you want to monitor: allocation, utilization or resource requirements.',
          'Read which workspace the assistant recommends for each and why.',
          'Ask a follow-up to narrow the choice, for example for your own work or for a team.',
          'Select Open workspace on the card to go to the recommended workspace.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Which workspace shows where planned work exceeds capacity?',
          'Where can I see what my team is booked on next month?',
          'What is the best dashboard to monitor resource utilization by department?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Besides the standard workspaces, your agency may have custom ones. Describe what you want to see, and the assistant maps it to the workspaces available in yours.',
          'The same workspace can answer more than one question. Here, one workspace covers both utilization and planned demand against capacity.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>I need to keep an eye on my team’s resource allocation. Which dashboard should I use?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>For <strong>allocation</strong>, use <strong>Resources Scheduler</strong>. It is the closest match for assigning and reviewing work across resources.</p>
    <p>For your own assignments, use <strong>My Scheduler</strong>.</p>
    <Walkthrough.WorkspaceCard
      title="Resources Scheduler"
      subtitle="Workspace · Menu"
      description="Assign and review work across resources on a timeline, and see who is booked on what."
    />
    <Walkthrough.WorkspaceCard
      title="My Scheduler"
      subtitle="Workspace · Menu"
      description="Review the work you are assigned to on a timeline."
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>And to check utilization, and whether planned work goes beyond the capacity we have?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <ul>
      <li><strong>Utilization:</strong> use <strong>Capacity × Workload</strong>. It is the best available view for assessing workload against capacity and identifying over- or under-allocation.</li>
      <li><strong>Resource requirements, planned demand versus available capacity:</strong> also use <strong>Capacity × Workload</strong>. It highlights where planned work exceeds available resource capacity.</li>
    </ul>
    <p>The <strong>Planning</strong> views are likely useful for forward planning, but <strong>Capacity × Workload</strong> is the clearest choice for capacity-versus-demand analysis.</p>
    <Walkthrough.WorkspaceCard
      title="Capacity × Workload"
      subtitle="Workspace · Menu"
      description="Compare workload with capacity to find over- and under-allocation, and where planned work exceeds available capacity."
    />
  </Walkthrough.Message>
</Walkthrough>

## Related articles

- [Resource Scheduler](/docs/product/planning-and-scheduling/resourcing/resource-scheduler)
- [Using workspaces](/docs/product/dashboards-and-reporting/using-workspaces)
- [Find Available Creatives and Assign One to a Job](/docs/ai/use-cases/resource-management/checking-resource-availability)
- [AI Assistant](/docs/ai/ai-assistant)
