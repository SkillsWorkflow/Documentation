---
id: active-collab
title: 'Active Collab'
description: "ActiveCollab is the day-to-day task tracker some teams live in — a board of tasks, lists, comments and attachments."
sidebar_label: Active Collab
---

### Description

This article describes the integration between **ActiveCollab** and `Skills Workflow`.

ActiveCollab is the day-to-day task tracker some teams live in — a board of tasks, lists, comments and attachments. Skills Workflow is where those tasks have to exist as jobs, so they can be costed, resourced, reported on and billed. This integration mirrors one into the other continuously.

The value is that neither team has to change how they work. The people executing keep their board in ActiveCollab; the agency keeps a complete, current picture of the work in Skills Workflow — including the conversation around it, not just the task title. Every comment and attachment added on the board lands on the job, so the job record is genuinely the full story rather than an empty shell someone has to go elsewhere to understand.

---

### Data Exchange Technology

The exchange runs over the ActiveCollab web API, using an address and token configured by the agency. No files and no locally installed application are required.

The integration is **event-driven**. ActiveCollab calls Skills Workflow whenever something happens on a task, and Skills Workflow reacts immediately — there is no scheduled run and no waiting. Because it reads the full task back from ActiveCollab rather than trusting the notification, an event that arrives late or out of order still leaves the job correct.

A whole project's existing tasks can also be **imported in bulk** on demand, rather than waiting for each one to change individually. This is how a project already underway in ActiveCollab is brought into Skills Workflow.

The exchange is **one-way**: ActiveCollab is the source of truth for the task, and Skills Workflow follows it.

---

### Data Exchange (To Skills Workflow)

**Tasks → Jobs**

| What happens in ActiveCollab | Result in Skills Workflow |
| --- | --- |
| A task is created | A job is created, with its brief, its initial stage, its tags and the person who raised it |
| A task is renamed, re-tagged or re-assigned | The matching job is updated, and tags no longer on the task are removed from the job |
| A task moves to a different task list | The job moves to the matching workflow stage |
| A comment is added to a task | The comment appears on the job |
| A file is attached to a task | The attachment is recorded on the job |

When a job is created, the integration also pulls across the comments the task already had, so the job does not start out missing its history.

---

### What the Agency Needs to Provide

- **An ActiveCollab account with API access**, plus the address and token for Skills Workflow to authenticate with.
- **Webhooks configured in ActiveCollab** pointing at Skills Workflow, for task, comment and attachment events.
- **A Skills Workflow project** matching each ActiveCollab project that should be mirrored, carrying its ActiveCollab identifier.
- **Agreement on which task list corresponds to which workflow stage**, and which department and assignment type new jobs should be created under.

---

### Good to Know

- **Jobs and tasks are matched by the ActiveCollab task identifier**, stored on the job. It should not be edited manually.
- **An update only lands if the job already exists.** If a task was never imported in the first place, later changes to it have nothing to update — this is the usual reason a change does not appear, and it is fixed by running the bulk import for that project.
- **Task lists have to map to real stages.** A task moved to a list with no matching Skills Workflow stage leaves the job where it is.
- The integration is one-way: moving a job or editing its brief in Skills Workflow does not change the task in ActiveCollab.

---

### Technical Reference

#### Components

| Name | Type | Version | Stage | Role |
| --- | --- | --- | --- | --- |
| ActiveCollab-ProcessWebHook | Automation | 2 | Active | Single inbound endpoint: dispatches every ActiveCollab webhook event to the matching automation below |
| ActiveCollab-CreateTask | Automation | 3 | Active | Creates a job from a new ActiveCollab task |
| ActiveCollab-UpdateTask | Automation | 2 | Active | Updates a job's fields/tags from an updated ActiveCollab task |
| ActiveCollab-TaskListChanged | Automation | 2 | Active | Moves a job's stage when its task changes task-list |
| ActiveCollab-CommentCreated | Automation | 2 | Active | Adds a comment to a job from an ActiveCollab task comment |
| ActiveCollab-AttachmentCreated | Automation | 2 | Active | Records a job comment when a file is attached in ActiveCollab |
| ActiveCollab-ImportProjectTasks | Automation | 3 | Active | On-demand bulk import of a whole ActiveCollab project's tasks |
| ActiveCollab-GetJobByExternalId | Query | 2 | Active | Looks up the job matching an ActiveCollab task id |
| ActiveCollab-GetProjectByExternalId | Query | 1 | Active | Looks up the Skills Workflow project matching an ActiveCollab project id |
| ActiveCollab-GetStageByName | Query | 2 | Active | Resolves a workflow stage by name, for task-list changes |
| ActiveCollab-GetTransitionByName | Query | 2 | Active | Resolves a workflow transition by name, for job creation |
| ActiveCollab-GetUserByEmail | Query | 2 | Active | Looks up a Skills Workflow user by e-mail — not called by any automation in this export |

Source: `[Active Collab] [Integrations] Process WebHook v2 (Automation) {Active}.json`, `[Active Collab] [Integrations] Create Task v3 (Automation) {Active}.json`, `[Active Collab] [Integrations] Update Task v2 (Automation) {Active}.json`, `[Active Collab] [Integrations] Task List Changed v2 (Automation) {Active}.json`, `[Active Collab] [Integrations] Comment Created v2 (Automation) {Active}.json`, `[Active Collab] [Integrations] Attachment Created v2 (Automation) {Active}.json`, `[Active Collab] [Integrations] Import Project Tasks v3 (Automation) {Active}.json`, and the named queries above.

#### How It Works

1. ActiveCollab calls a single Skills Workflow webhook endpoint for every event; `ActiveCollab-ProcessWebHook` reads `Body.type` and enqueues the matching automation as background work (confirmed by matching automation ids): `TaskCreated` → `ActiveCollab-CreateTask` (`5ce6bf8d-...`), `TaskUpdated` → `ActiveCollab-UpdateTask` (`0e7691b1-...`), `TaskListChanged`/`TaskListChangedFromReorder` → `ActiveCollab-TaskListChanged` (`ddd8e1a9-...`), `CommentCreated` → `ActiveCollab-CommentCreated` (`e344d852-...`), `AttachmentCreated` → `ActiveCollab-AttachmentCreated` (`109f79d5-...`). Any other type exits without action.
2. **Create**: `ActiveCollab-CreateTask` fetches the full task from ActiveCollab (`GET {host}/api/v1/projects/{id}/tasks/{id}`), resolves the Skills Workflow project (`ActiveCollab-GetProjectByExternalId`), the creating user by e-mail, department and assignment type, then creates the job (`POST /api/jobs`), sets custom fields, posts the brief (`POST /api/documentBriefs`), applies the initial transition (`ActiveCollab-GetTransitionByName`, `POST /api/posts`), pulls existing comments from ActiveCollab, and tags the job.
3. **Update**: `ActiveCollab-UpdateTask` re-fetches the task, finds the job by external id, updates the brief, patches the job (`PATCH /api/jobs/{id}`), and reconciles tags (adding new ones, deleting ones no longer present).
4. **Stage change**: `ActiveCollab-TaskListChanged` fetches the new task-list's name from ActiveCollab, resolves it to a Skills Workflow stage (`ActiveCollab-GetStageByName`), finds the job (`ActiveCollab-GetJobByExternalId`), and sets its workflow state directly (`PUT /api/jobs/{id}/workflowstate`).
5. **Comments/attachments**: `ActiveCollab-CommentCreated` and `ActiveCollab-AttachmentCreated` post the comment/attachment onto the matching job (`POST /api/v3/posts`).
6. **Bulk import**: `ActiveCollab-ImportProjectTasks`, run on demand for a project, fetches all of that project's tasks from ActiveCollab and checks each against `ActiveCollabId` custom field values already in Skills Workflow, to import only what isn't already there.

#### External System Contact Points

- ActiveCollab API (`{host}` from a `Config` configuration key): `GET /api/v1/projects/{id}/tasks/{id}`, `GET /api/v1/projects/{id}/tasks`, `GET /api/v1/projects/{id}/task-lists/{id}`, `GET /api/v1/users/{id}`, `GET /api/v1/comments/task/{id}`, `POST /api/v1/projects/{id}/tasks/{id}/subtasks`.
- Inbound: ActiveCollab calls `ActiveCollab-ProcessWebHook`'s endpoint for every task/comment/attachment event.
- Skills Workflow's own API/analytics: the named queries above; `POST /api/jobs`, `PATCH /api/jobs/{id}`, `PUT /api/jobs/{id}/workflowstate`, `POST /api/documentBriefs`, `POST /api/posts`, `POST /api/v3/document/{id}/tags`, `PUT /api/v3/documentUserFieldValues`.

#### Configuration

- A `Config` configuration key — holds the ActiveCollab host/token. Values are not part of the export.
- Custom field **`ActiveCollabId`** on Deliverable — links a job back to its ActiveCollab task id, used for lookups and to detect already-imported tasks.
- `Parameters.departmentName` and `Parameters.assignmentType` — used to resolve which department/assignment type new jobs get; their values are not part of the export.

#### Open Questions

- `ActiveCollab-GetUserByEmail` isn't called by any exported automation — the other flows call `GET /api/users/email?email=` directly instead, so whether this query is used elsewhere isn't determinable.
- How ActiveCollab is configured to send its webhooks to `ActiveCollab-ProcessWebHook` (which events, which projects) is not part of this export.
