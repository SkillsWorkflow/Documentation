---
id: ai-tools
title: Tools
description: "The catalogue of tools an agent can be given: what each one lets the agent read or change, which ones write to your account, and how tools are granted per agent."
sidebar_label: Tools
sidebar_position: 4
---

An agent on its own can only talk. What lets it look something up, create a job or move a document is a **tool**. An agent's tools are the whole of what it can do: an agent without `create_job` cannot create a job, however you ask.

This page is the catalogue. Read it to know what an existing agent is capable of, and to decide what to grant an agent you are building in [Add your own skills, agents and tools](/docs/ai/ai-extend).

## How tools are granted

Every agent definition carries a `tools` allow-list. Listing tool names restricts the agent to those; leaving the list empty gives it the whole platform catalogue below.

`get_current_time` is added to every agent and needs no entry.

Two further sets are opt-in and are not part of `tools`:

- **Your data extraction queries**: set `useAnalyticsTools`, and narrow with `analyticsTools`.
- **Your own MCP servers**: list them in `mcpServers`.

Both are covered in [Add your own skills, agents and tools](/docs/ai/ai-extend).

## Tools that write

These change data. Put every one of them on the agent's `toolsRequiringApproval` list so the user sees an approval card before the tool runs. See [AI Assistant](/docs/ai/ai-assistant#approve-what-it-does).

`create_job` · `update_job` · `duplicate_document` · `update_document_brief` · `update_document_custom_fields` · `update_team_members` · `execute_workflow_transition` · `create_timesheet_entry`

Everything else on this page reads, apart from the three memory tools, which write only to the asking user's own memory store.

## Platform tools

These run on the server, against the Skills Workflow API, as the signed-in user.

### Finding a record

| Tool | What the agent can do |
|---|---|
| `resolve_client` | Find a client from a name the user typed, ranked by relevance |
| `resolve_project` | Find a project from a name |
| `resolve_department` | Find a department, scoped by project, client and business object type |
| `resolve_job_type` | Find a job type within a department |
| `list_clients` | List clients, optionally filtered by name |
| `list_projects` | List projects, filtered by name, client, product, contract or request |
| `list_departments` | List departments the user can see, optionally narrowed by project |
| `list_job_types` | List job types, filtered by department, client, project or document type |
| `list_document_types` | List document types |
| `list_assignment_types` | List the team roles a document type accepts |
| `get_project_by_id` | Read full project details |
| `search_users` | Find users by name, email or username |
| `get_current_user` | Read who is asking |
| `get_current_time` | Read the current date and time |

The `resolve_*` tools are what turn *"the Northwind retainer"* into a record. When more than one candidate matches, the assistant asks you to pick.

### Documents and jobs

| Tool | What the agent can do |
|---|---|
| `get_job_by_number` | Open a job by its number |
| `search_documents` | Search any document type — projects, jobs, estimates, contracts, expenses, bills, purchase orders, requests, credit notes, supplier invoices |
| `create_job` | Create a job or deliverable from project, business object type, department, job type, dates and title |
| `update_job` | Edit an existing job's title, priority, effort, business value, dates, job type and its plannable, blocked and timesheet flags |
| `duplicate_document` | Copy a Job, Deliverable, Project, Estimate or Request, optionally carrying over its description, team and custom field values |

`update_job` changes only the fields passed. It cannot re-scope a document: client, project, department and business object type are fixed once a document exists.

### Briefs

| Tool | What the agent can do |
|---|---|
| `get_document_brief` | Read a document's brief |
| `update_document_brief` | Write a document's brief |
| `get_job_type_brief_template` | Read the briefing template configured on a job type, so a brief follows your structure |
| `get_client_brief_instructions` | Read the client's own brief-writing instructions |

Together these are what produce a structured brief instead of a paragraph. The agent reads the job type's template and the client's instructions first, then writes into that scaffold.

### Custom fields

| Tool | What the agent can do |
|---|---|
| `get_document_custom_fields` | List a document's custom fields with their labels and current values |
| `update_document_custom_fields` | Set one or more custom field values |

### Teams

| Tool | What the agent can do |
|---|---|
| `get_document_team` | Read who is on a document's team |
| `update_team_members` | Add and remove team members |

One `update_team_members` call carries every change the user asked for, across as many roles as they named, and lands in the document's feed as a single entry.

### Workflow

| Tool | What the agent can do |
|---|---|
| `list_workflow_transitions` | List the transitions available on a document right now |
| `execute_workflow_transition` | Move a document to another stage |

There is no default transition. The agent lists what is available, you pick, and then it asks for approval.

### Time

| Tool | What the agent can do |
|---|---|
| `create_timesheet_entry` | Log time. Without a user, it logs against the person asking |

### Your data

| Tool | What the agent can do |
|---|---|
| `execute_named_query` | Run one of your data extraction named queries and return rows |
| `analytics_{query}` | One tool per named query your tenant publishes, granted through `useAnalyticsTools` |

These are what answer *"how is this client tracking this month"* without a dashboard. Every query is filtered, sorted and paged in SQL before a row is returned, is read-only, and is scoped to the asking user's permissions — a user refused a report in the platform is refused it here too.

The query catalogue is per tenant. See [Data Extraction API](/docs/build-and-extend/api/data-extraction-api) for which queries exist and what each carries.

### Memory

| Tool | What the agent can do |
|---|---|
| `save_memory` | Remember a preference, fact or record the user named |
| `update_memory` | Correct something remembered earlier |
| `delete_memory` | Forget something |

Users see and clear this store themselves under **Manage Memories**.

### Chat interface

| Tool | What the agent can do |
|---|---|
| `gen-ui.emit_custom_event` | Push a card or a custom payload into the chat |
| `gen-ui.emit_custom_prompt` | Offer a follow-up prompt the user can tap |

Neither changes any data.

## Browser tools

These run in the user's browser instead of on the server, because they need the screen the user is looking at. They are granted per agent and cannot be listed in `tools`.

| Tool | What the agent can do |
|---|---|
| `OpenDocument` | Open a document in a preview popup, or navigate to it |
| `AttachFileToDocument` | Attach a file the user dropped into the chat to a document's brief |
| `PostFileToFeed` | Post to a document's feed, with a file |
| `SDK_List` | List the SDK methods available to it |
| `SDK_Invoke` | Call one of them |
| `Workspace_Get`, `Workspace_List` | Read a workspace definition |
| `Workspace_Validate`, `Workspace_Apply` | Check a workspace change, then apply it |
| `CustomTable_List`, `CustomTable_Get`, `CustomTable_Validate` | Read and check custom table definitions |
| `Integration_Get`, `Integration_List`, `Integration_Validate` | Read and check integration workflows |
| `GetBriefingTemplates`, `GetBriefingTemplateContent`, `ResolveJobTypeBriefingTemplate` | Read briefing templates from the editor |
| `GetTransitionRequirements` | Read what a transition needs before running it: a comment, a motive, hours, a file, user fields |
| `GetJobByNumber`, `SearchDocuments` | Look up a job or search documents from the screen the user is on |
| `SearchWorkflowStageTransitions` | List the transitions available on a document right now |
| `ExecuteWorkflowTransition` | Move a document to another stage. Writes |
| `GetDocumentBrief`, `UpdateDocumentBrief` | Read and write a brief from inside the editor. `UpdateDocumentBrief` writes |

## What tools cannot do

- **They never exceed your permissions.** Every call carries the signed-in user's identity. An agent asked for a report the user is not granted gets refused, exactly as the user would be.
- **They never act as someone else.** The user a tool acts for is taken from the session, never from something the agent decides.
- **Data extraction is read-only.** No named query writes.

## Related articles

- [Agents](/docs/ai/agents)
- [AI Assistant](/docs/ai/ai-assistant)
- [Add your own skills, agents and tools](/docs/ai/ai-extend)
- [Data Extraction API](/docs/build-and-extend/api/data-extraction-api)
