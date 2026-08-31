---
id: document-agent
title: Document Agent
description: "Create, update, duplicate, find and move jobs, deliverables and other documents by describing what you need, with an approval card before anything is written."
sidebar_label: Document Agent
sidebar_position: 2
---

The Document Agent does the work you would otherwise do through forms: creating a job, writing its brief, filling custom fields, changing who is on the team, moving it to the next stage. You describe the outcome; it works out which records that means and asks you to approve before it writes.

It is the agent to pick for anything that ends in a document existing or changing.

## What it can do

- Create a job or deliverable, with its brief written from the job type's briefing template
- Update an existing job's title, priority, effort, business value, dates, job type, and its plannable, blocked and timesheet flags
- Duplicate a Job, Deliverable, Project, Estimate or Request, optionally carrying over the description, team and custom field values
- Read and rewrite a document's brief
- Read and set custom field values
- Add and remove team members, across several roles in one change
- Move a document to another workflow stage
- Search any document type, and open one in a popup or navigate to it
- Attach a file you dropped into the chat to a brief, or post it to the document's feed

For the full list of tools behind these, see [Tools](/docs/ai/ai-tools).

## How to use it

1. Open the [AI Assistant](/docs/ai/ai-assistant) and select **Document Agent**.
2. Describe what you want. Name the client, project or job if you know it.
3. Answer the pickers it raises. When a name matches more than one record, it asks which one rather than guessing.
4. Read the approval card and approve, deny, or edit a value on the card first.

Working from a document already open on screen, leave the **Document** context switch on. The agent then knows which document you mean without being told.

### Creating a job

Describe the work in the same words you would use to a colleague, and include anything the brief should say.

```
Create a job for Northwind, spring campaign, artwork for the launch email.
Deadline end of next week.
```

The agent resolves the client, project, department and job type, asking you where a name is ambiguous. Before creating, it reads the job type's briefing template and writes your description into that structure, so the brief follows your agency's format rather than arriving as a paragraph. The approval card shows the resolved fields and the drafted brief; edit the title or description there if either is wrong.

### Duplicating a document

Ask for a copy and say what should differ:

```
Duplicate this job, but this one is for YouTube.
```

The agent reads the source brief, rewrites the name and the brief for the stated difference, and leaves everything else inherited. Client, project, department and job type always come from the original and cannot be changed here. It raises a question about whether to carry over the description, the team and the custom field values unless you already said.

A duplicate creates a new document. To fix a title or a brief on a document that already exists — including the copy you just made — ask for the change; do not ask for another duplicate.

### Moving a stage

```
Move SKILLS0059S1492 to Client Approval.
```

The agent lists the transitions actually available on that document right now, you pick one, and it asks for approval. If the transition requires a comment, a reason, hours, a file or extra fields, it collects them first.

## Rules and behaviour

- Everything that writes asks for approval first, and denying it changes nothing.
- The agent works with your permissions. A document you cannot see, it cannot find.
- Re-scoping is not supported: a document's client, project, department and business object type are fixed once it exists.
- Custom fields are written by their configured field, never by the label on screen, so a renamed label does not break a change.
- `Generate from template` results depend on the job type having a briefing template configured. Without one, the brief is written from the conversation alone.

## Related articles

- [AI Assistant](/docs/ai/ai-assistant)
- [Tools](/docs/ai/ai-tools)
- [Workflow Agent](/docs/ai/agents/workflow-agent)
- [Writing Agent](/docs/ai/agents/writing-agent)
- [AI Actions](/docs/ai/ai-actions)
