---
id: azure-devops
title: 'Azure DevOps'
description: "Azure DevOps (Boards) is where the development team tracks its work items."
sidebar_label: Azure DevOps
---

### Description

This article describes the integration between **Azure DevOps** and `Skills Workflow`.

Azure DevOps (Boards) is where the development team tracks its work items. Skills Workflow is where the ticket was raised, prioritised and approved. This integration keeps the two in step, so a ticket does not have to be logged twice and the two records do not drift apart.

The gap it closes is a familiar one: a bug is reported and approved in Skills Workflow, then someone re-types it into Azure DevOps and, from that point on, the two systems have separate lives. The developer closes the work item; the requester still sees the ticket sitting open. This integration means the work item is created from the ticket, carries the brief's attachment with it, and follows the ticket's stage automatically — with the change attributed to whoever actually moved it, not to a service account.

---

### Data Exchange Technology

The exchange runs over the Azure DevOps REST API, authenticated with an access token held in Skills Workflow's configuration. No files and no locally installed application are required.

It is **event-driven** and runs in one direction: Skills Workflow is the source of truth for the ticket, and Azure DevOps follows it. Nothing done on the board writes back to Skills Workflow.

---

### Data Exchange (From Skills Workflow)

**Tickets → Bug work items**

A work item is created for a qualifying ticket, in the team's current iteration, with the file attached to the ticket's brief uploaded to it.

Not every ticket qualifies. A ticket is skipped — deliberately, and without creating anything — when it is a customization, when it already has a work item, or when it is not marked as found in a build.

**Stage changes → work item status**

As the ticket advances, the work item's state is updated to match:

| Ticket moves to | Azure DevOps state |
| --- | --- |
| Approved by PM | Approved by PM |
| PM Tests | PM Validation(Dev) |
| To Install | Done |

The update is recorded against the e-mail address of the person who moved the ticket, so the board shows who actually made the change.

Any other stage change is ignored, so unrelated movement in Skills Workflow does not create noise on the board.

---

### What the Agency Needs to Provide

- **An Azure DevOps organisation, project and team**, and an access token with permission to create and update work items and upload attachments.
- **The three workflow stages** above on the ticket document type, named so they can be matched.
- **User e-mail addresses that match** between Skills Workflow and Azure DevOps, so the status change can be attributed correctly.

---

### Good to Know

- **Only the three stages above move the work item.** If those stages are renamed, the mapping has to be updated to match.
- **A ticket only ever creates one work item** — the integration checks first, so re-triggering does not produce duplicates.
- **Customizations are excluded by design**, as are tickets not found in a build.
- The integration is one-way. Closing a work item in Azure DevOps does not move the ticket in Skills Workflow.

---

### Technical Reference

#### Components

| Name | Type | Version | Stage | Role |
| --- | --- | --- | --- | --- |
| Azure DevOps - Create Work Item in Visual Studio | Automation | 2 | Active | Creates a Bug work item in Azure DevOps for a qualifying deliverable, with its brief file attached |
| Azure DevOps - Update work item stage | Automation | 1 | Active | Updates the Azure DevOps work item's `System.State` when the Skills Workflow deliverable's stage changes |
| Azure DevOps - Update work item stage based on Ticket stage | Webhook | 1 | Active | Fires "Update work item stage" whenever a deliverable's stage changes to To Install, Approved by PM, or PM Tests |

Source: `[Azure DevOps] [Integrations] Create Work Item in Azure DevOps v2 (Automation) {Active}.json`, `[Azure DevOps] [Integrations] Update work item stage v1 (Automation) {Active}.json`, `[Azure DevOps] [Integrations] Update work item stage based on Ticket stage v1 (Webhook) {Active}.json`.

#### How It Works

**Creating a work item** (`Create Work Item in Azure DevOps`, triggered on demand by an inbound request carrying `event.documentId.id` — the export doesn't include the webhook/button that fires it):
1. `POST /api/analytics/globalQuery/GetJobWorkItemAndBriefById/execute` looks up the deliverable/brief by id and checks flags `IsCustomization`, `HasWorkItem` and `HasFoundInBuild`. If it's a customization, already has a work item, or wasn't found in the build, the automation exits without creating anything.
2. Otherwise it reads the `AzureDevOps` configuration key for the auth token, gets the team's current iteration (`GET .../Skill Team/_apis/work/teamsettings/iterations`), and creates the work item (`POST .../_apis/wit/workitems/$Bug`).
3. It downloads the brief's file from Skills Workflow (`GET /api/v3/file-system/files/{id}/content`, then the returned download link) and attaches it to the new work item (`POST .../_apis/wit/attachments`, then `PATCH .../_apis/wit/workitems/{id}` to link the attachment) and writes the result back to the deliverable (`POST /api/posts`).

**Syncing status** (`Update work item stage based on Ticket stage` webhook → `Update work item stage` automation, confirmed by matching automation id `4369ef13-ade2-4bb1-a60f-8909a0b1a0fe`):
1. The webhook listens for `StageUpdated` events on `Skill.Module.BusinessObjects.Deliverable` where the transition name is "To Install", "Approved by PM" or "PM Tests".
2. The automation looks up the work item and the user's email (`POST /api/analytics/globalQuery/execute?queryName=WorkItemUserMail`), maps the transition name to an Azure DevOps state (`To Install`→`Done`, `PM Tests`→`PM Validation(Dev)`, `Approved by PM`→`Approved by PM`), and enqueues a background patch of the work item's `System.State` and `System.ChangedBy` fields (target workflow id `7d5b3107-0afb-4f2f-87c0-aa746dd3f77c`, not part of this export).

#### External System Contact Points

- Azure DevOps REST API v6.0, organization `nextway`, project `Skill`, team `Skill Team` (`dev.azure.com/nextway/Skill/...`):
  - `GET .../Skill Team/_apis/work/teamsettings/iterations`
  - `POST .../_apis/wit/workitems/$Bug`
  - `PATCH .../_apis/wit/workitems/{id}`
  - `POST .../_apis/wit/attachments`
  - Auth: bearer/PAT token read from the `AzureDevOps` configuration key.
- Skills Workflow's own API/analytics endpoints: `GetJobWorkItemAndBriefById`, `WorkItemUserMail` global queries, `/api/v3/file-system/files/{id}/content`, `/api/posts`.

#### Configuration

- Configuration key **`AzureDevOps`** — holds the Azure DevOps access token. Its content is not part of the export.
- Two Skills Workflow global (analytics) queries, `GetJobWorkItemAndBriefById` and `WorkItemUserMail`, are referenced by name but not included in this export — their exact logic (how "customization" and "found in build" are determined) is not determinable.

#### Open Questions

- What triggers `Create Work Item in Azure DevOps` (a webhook, a panel button, or another automation) is not included in this export.
- The background target workflow `7d5b3107-0afb-4f2f-87c0-aa746dd3f77c` that actually performs the Azure DevOps state patch is not part of this export.
