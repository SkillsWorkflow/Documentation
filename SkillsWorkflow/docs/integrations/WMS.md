---
id: wms
title: 'WMS'
description: "WMS is a separate Work Management System that runs alongside Skills Workflow, each holding the same work for a different audience."
sidebar_label: WMS
---

:::info Two-part integration
"WMS" ships as two Marketplace packages, `WMS (Server)` and `WMS (Client)`, sharing the same authentication secret and the same `/api/integration-workflows/{id}/execute` call pattern used by the [Client and Agencies](./client-and-agencies) tenant bridge elsewhere in this export. This strongly suggests **WMS is another Skills Workflow tenant** acting as the agency's Work Management System, rather than a third-party product — though no file states this explicitly. Both halves are documented together on this page: **Server** receives events from WMS and creates/updates records here; **Client** sends this tenant's own events to WMS.
:::

### Description

This article describes the **WMS** integration in `Skills Workflow`.

WMS is a separate Work Management System that runs alongside Skills Workflow, each holding the same work for a different audience. This integration keeps the two continuously mirrored, in both directions, so a job exists once as far as the people using it are concerned — regardless of which system they happen to be in.

This is the most complete two-way sync in this section. Rather than exchanging one document type on approval, it mirrors the working record itself and everything attached to it: the project, the job, the brief, the comments, who is assigned, and the client's products. When any of those changes on one side, the other follows.

The value is that neither population has to move. Teams working in WMS keep working there; teams working in Skills Workflow keep working here; and neither is looking at a stale copy or waiting on someone to relay a status. The two systems behave as one shared record with two front doors.

---

### Data Exchange Technology

The two systems call each other directly over the web. Every request in either direction carries a shared secret that the receiving side checks before accepting anything, and a request that fails that check is rejected outright.

The exchange is **event-driven in both directions** — it runs when something changes, not on a schedule, so the two sides stay in step continuously rather than converging at the end of a run.

Incoming changes are **queued and processed in the background** rather than applied inline, so a burst of activity on one side does not slow down the other, and each change carries a retry count so it can be re-attempted rather than lost.

---

### What Is Exchanged

Both directions cover the same ground:

| Record | Created | Updated | Stage change | Deleted |
| --- | --- | --- | --- | --- |
| **Project** | ✓ | ✓ | ✓ | |
| **Job** | ✓ | ✓ | ✓ | |
| **Brief** | ✓ | | | |
| **Comment** | ✓ | ✓ | | |
| **Assignment** (who is on the job) | ✓ | | | ✓ |
| **Client product** | | ✓ | | |

When a job arrives that belongs to a project the receiving side does not have yet, the **project is created first**, then the job underneath it, then the team assigned — so work never lands orphaned.

---

### What the Agency Needs to Provide

- **Both systems' addresses**, and a shared secret agreed between them.
- **Matching workflow stages** on both sides, so a stage change on one can be applied on the other.
- **Agreement on scope** — which departments and record types should cross over. Some events are deliberately filtered; see *Good to Know*.

---

### Good to Know

- **Not everything crosses over.** Job updates, for instance, can be scoped to a specific department, so only the work that matters to the other system is mirrored.
- **Project stage changes are conditional** — a project only reports its stage change if it actually has jobs underneath it, which prevents empty projects generating noise.
- **A rejected request is silent by design.** A request whose shared secret does not match is refused without side effects, so a misconfigured connection fails closed rather than writing bad data.
- Because the sync is two-way and event-driven, a change made on either side is expected to appear on the other within moments — a persistent one-way gap points at the connection rather than at timing.

---

### Technical Reference

#### Components

**Server side** (receives from WMS — `[WMS (Server)] [Integrations] Wms-...`):

| Name | Type | Version | Stage | Role |
| --- | --- | --- | --- | --- |
| Wms-ProcessWebhookTask | Automation | 17 | Active | Single inbound endpoint: validates the shared secret and enqueues `Wms-ExecuteWebhookTask` |
| Wms-ExecuteWebhookTask | Automation | 18 | Active | Dispatches by event type + document type to the automation below that handles it |
| Wms-CreateJobAndProject | Automation | 18 | Active | Creates a job (and its project, if new) from an incoming Deliverable-created event |
| Wms-UpdateJob | Automation | 19 | Active | Updates a job (and patches its project) from an incoming Deliverable-updated event |
| Wms-MoveStage | Automation | 17 | Active | Moves a job's stage from an incoming Deliverable stage-updated event |
| Wms-MoveProjectStage | Automation | 1 | Active | Moves a project's stage from an incoming Project stage-updated event |
| Wms-CreateDocumentBrief | Automation | 17 | Active | Creates a brief from an incoming DocumentBrief-created event |
| Wms-CreateOrUpdatePost | Automation | 17 | Active | Creates or updates a comment from an incoming Post event |
| Wms-CreateOrDeleteAssignment | Automation | 17 | Active | Creates or removes a team assignment from an incoming Assignment event |
| Wms-UpdateProject | Automation | 17 | Active | Updates a project from an incoming Project-updated event |
| Wms-UpdateProduct | Automation | 17 | Active | Updates a commercial product from an incoming CommercialClientProduct-updated event |
| Wms-TestQuery | Automation | 17 | Active | Diagnostic: runs `wms-automation_ProjectLookup` — not part of the production flow |
| 12 supporting `wms-automation_*` named queries | Query | various | Active | Look up / validate the records each automation above acts on |

**Client side** (sends to WMS — `[WMS (Client)] [Integrations] Wms...`):

| Name | Type | Version | Stage | Role |
| --- | --- | --- | --- | --- |
| Wms - On Job Created | Automation | 18 | Active | Sends a new job (with its briefs and assignments) to WMS |
| Wms - On Job Updated | Automation | 17 | Active | Sends a job update to WMS |
| Wms - On Stage Changed | Automation | 18 | Active | Sends a job stage change to WMS |
| Wms - On Project Updated | Automation | 17 | Active | Sends a project update to WMS |
| Wms - On Project Stage Changed | Automation | 2 | Active | Sends a project stage change to WMS, if the project has valid jobs |
| Wms - On DocumentBrief Created | Automation | 17 | Active | Sends a new brief to WMS |
| Wms - On Post Created | Automation | 17 | Active | Sends a new comment to WMS |
| Wms - On Assignment Created Or Deleted | Automation | 17 | Active | Sends a team assignment/unassignment to WMS |
| Wms - On Product Updated | Automation | 17 | Active | Sends a commercial product update to WMS |
| Wms-CreateDocumentBriefEvent | Webhook | 17 | Active | Fires on DocumentBrief creation |
| Wms-CreatePostEvent | Webhook | 17 | Active | Fires on Post creation |
| Wms-CreatedAssignmentEvent / Wms-DeleteAssignmentEvent | Webhook | 17 | Active | Fire on Assignment creation / deletion |
| Wms-OnJobStageChange | Webhook | 17 | Active | Fires on Deliverable `StageUpdated` |
| Wms-OnProjectStageChange | Webhook | 1 | Active | Fires on Project `StageUpdated` |
| Wms-UpdateJobEvent | Webhook | 17 | Active | Fires on Deliverable `Updated`, filtered to one specific department |
| Wms-UpdateProjectEvent | Webhook | 17 | Active | Fires on Project `Updated` |
| Wms-UpdatedCommercialClientProduct | Webhook | 17 | Active | Fires on CommercialClientProduct `Updated` |
| 12 supporting `wms-automation*` named queries | Query | various | Active | Build the payload each automation sends to WMS |

Source: files under `[WMS (Server)] [Integrations] Wms-...` / `wms-automation_...` (27 files, 26 distinct components) and `[WMS (Client)] [Integrations] Wms...` / `wms-automation...` (30 files, 30 distinct components) in the Marketplace export.

#### How It Works

**Receiving from WMS (Server side):**
1. WMS calls `Wms-ProcessWebhookTask`'s endpoint. It checks the request header `x-shared-secret` against a hardcoded value; a mismatch or empty body exits without processing. It then adds a `retryCount` of `0` if missing, and enqueues `Wms-ExecuteWebhookTask` (confirmed by matching automation id `1ab7d093-249b-41bf-a099-443c98b5663c`) as background work with the payload Base64-encoded.
2. `Wms-ExecuteWebhookTask` decodes the payload and dispatches on `Payload.type` (`Created` / `Updated` / `StageUpdated` / `Deleted`) crossed with `Payload.documentType`:
   - `Created` + `Deliverable` → `Wms-CreateJobAndProject`; `+ DocumentBrief` → `Wms-CreateDocumentBrief`; `+ Post` → `Wms-CreateOrUpdatePost`; `+ Assignment` → `Wms-CreateOrDeleteAssignment`.
   - `Updated` + `Deliverable` → `Wms-UpdateJob`; `+ Project` → `Wms-UpdateProject`; `+ Post` → `Wms-CreateOrUpdatePost`; `+ CommercialClientProduct` → `Wms-UpdateProduct`.
   - `StageUpdated` + `Deliverable` → `Wms-MoveStage`; `+ Project` → `Wms-MoveProjectStage`.
   - `Deleted` + `Assignment` → `Wms-CreateOrDeleteAssignment`.
3. Each target automation runs its own lookup query (e.g. `wms-automation_jobDataLookup`, `wms-automation_ProjectDataLookup`, `wms-automation_AssignmentDataLookup`) and applies the change via Skills Workflow's own API (`POST /api/jobs`, `POST /api/v3/projects`, `POST /api/documentBriefs`, `POST /api/posts`, `PATCH /api/jobs/{id}`, `PATCH /api/projects/{id}`, `PATCH /api/commercialproducts/{id}`).
4. `Wms-CreateJobAndProject` additionally creates the project first if `wms-automation_ProjectLookup` finds none, then transitions both the new project and job to their first available stage.

**Sending to WMS (Client side):**
1. Each of the 9 "Wms - On ..." automations is fired by its matching webhook, runs a lookup query to validate and build the payload (e.g. `wms-automation_jobLookupById`, `wms-automation_ProjectLookupById`, `wms-automation_AssignmentById`), and `POST`s the result to `{host}/api/integration-workflows/{automationId}/execute` — landing on the Server side's `Wms-ProcessWebhookTask`. The destination host and target automation id are read from a `Parameters` (or, for Project Stage Changed, `Config`) configuration key, not hardcoded, so which WMS environment/tenant receives each event type is configurable per automation.
2. A few send extra context beyond the bare record: `Wms - On Job Created` also fetches the job's and project's briefs (`GET /api/documentBriefs?...`) and the project's team assignments (`wms-automation_ProjectAssignmentsById`); `Wms - On Assignment Created Or Deleted` first checks the job and project are still valid (`wms-automation_jobIsValidById`, `wms-automation_ProjectIsValidById`); `Wms - On Project Stage Changed` only sends if the project has valid jobs under it (`wms-automation-ProjectHasValidJobs`).
3. `Wms-UpdateJobEvent` is filtered at the webhook level to a single department (id `284db428-3d20-4a2b-81d6-35033e0caaa2`) — job updates outside that department don't reach WMS.

#### External System Contact Points

- Client → WMS: `POST {host}/api/integration-workflows/{automationId}/execute`, header `x-shared-secret`. Host and automation id are per-automation configuration values, not fixed.
- WMS → Server: inbound calls to `Wms-ProcessWebhookTask`'s own HTTP endpoint (URL not included), authenticated with the same header.
- Skills Workflow's own API/analytics on each side: the `wms-automation*` named queries; `POST /api/jobs`, `POST /api/v3/projects`, `POST /api/documentBriefs`, `POST /api/posts`, `PATCH /api/jobs/{id}`, `PATCH /api/projects/{id}`, `PATCH /api/commercialproducts/{id}`, `PUT /api/v3/documentUserFieldValues`, `PUT /api/v3/post-comments/{id}`, `GET /api/documentBriefs`.

#### Configuration

- Server side: the shared secret validated by `Wms-ProcessWebhookTask` is hardcoded in the automation rather than a configuration key.
- Client side: configuration key **`Parameters`** (and, inconsistently, `Config` on `Wms - On Project Stage Changed`) — holds `host` and `automationId` per automation.
- Values are not part of the export.

:::danger Credential found in the export
All 9 Client-side webhooks carry the same hardcoded shared `secret` value in their own JSON, matching the value `Wms-ProcessWebhookTask` checks on the Server side. The value is not reproduced here. If this export is genuine, treat it as compromised and rotate it — since both sides use the same secret, rotating it requires updating both.
:::

#### Open Questions

- Whether "WMS" is genuinely another Skills Workflow tenant (as the URL pattern and shared-secret mechanism suggest) or a third-party product built to the same API shape is not stated anywhere in the export.
- `Wms-TestQuery` looks like a leftover diagnostic automation rather than part of the production dispatch table.
- Why `Wms - On Project Stage Changed` reads a `Config` configuration key while every other Client-side automation reads `Parameters` is not explained — possibly a naming inconsistency introduced when it was added later (its version, v2, is much lower than its siblings' v17/v18).
- Why `Wms-UpdateJobEvent` is scoped to a single department while the other Deliverable events aren't is not explained in the export.
