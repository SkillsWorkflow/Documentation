---
id: ziflow
title: 'ZiFlow'
description: "ZiFlow is the online proofing tool where creative work is reviewed and approved."
sidebar_label: ZiFlow
---

:::caution Scope corrected against the Marketplace export
This page described only the inbound "proof decision moves the job's stage" webhook. The exported package (Module `Ziflow`, 21 components after de-duplicating repeated attachments) is considerably larger: it also includes a full **Create/Edit Proof workspace** embedded on the Job record, a **My Pending Proofs** / **Proofing** panel for reviewing proofs from Skills Workflow, and a set of REST wrapper automations for creating proofs, managing reviewers, and getting one-time review links. The stage-sync description below is accurate and unchanged; the "Package Contents" and a new section below now reflect the full export.
:::

### Description

This article describes the integration between **ZiFlow** and `Skills Workflow`.

ZiFlow is the online proofing tool where creative work is reviewed and approved. This integration closes the loop between the review and the job: when a proof moves in ZiFlow, the corresponding deliverable moves in Skills Workflow, automatically.

Without it, someone has to watch ZiFlow and manually drag jobs through their stages — which is exactly the kind of double bookkeeping that makes job status untrustworthy. With it, the stage a job is in reflects what the reviewers actually did.

---

### Data Exchange Technology

The integration is delivered as a **Marketplace automation**, not as a scheduled job. It is event-driven:

1. A reviewer acts on a proof in ZiFlow.
2. ZiFlow fires a webhook into Skills Workflow.
3. The automation reads the proof back from the ZiFlow API to confirm what happened.
4. The matching deliverable is transitioned to the corresponding stage.

Because it is event-driven, the update is effectively immediate — there is no waiting for a nightly run.

---

### What Triggers a Stage Change

| Event in ZiFlow | Stage applied in Skills Workflow |
| --- | --- |
| The proof finishes processing and is ready for review | **Proofing** |
| A reviewer returns a decision of *changes required* | **Changes Required** |

Any other proof event is ignored, so unrelated ZiFlow activity does not create noise in the job history.

The automation also checks the deliverable's current stage before acting. If the job is already in the target stage, nothing happens — so a proof that generates several events does not produce a string of duplicate transitions.

---

### How Proofs and Deliverables Are Linked

The link lives on the ZiFlow side. Each proof carries a **custom property group named "Skills Workflow"** containing a **DeliverableId** property, which holds the identifier of the deliverable in Skills Workflow.

That property is what the automation uses to find the right job. A proof created without it cannot be matched, and the event is ignored.

---

### What the Agency Needs to Provide

- A ZiFlow account with API access, and an API token. The token is stored in Skills Workflow as a configuration key and is never held in the automation itself.
- A webhook configured in ZiFlow pointing at the Skills Workflow automation.
- The **Skills Workflow → DeliverableId** custom property configured on the proofs, so proofs can be matched to jobs.
- Confirmation of which stages in the agency's workflow correspond to *Proofing* and *Changes Required*.

---

### Package Contents

The Marketplace package is larger than a single automation. As exported it includes:

| Name | Type | Role |
| --- | --- | --- |
| Ziflow - Enqueue - Update proof status | Automation (v3) | The actual webhook target ZiFlow calls; enqueues the status update as background work |
| Ziflow - Execute - Update proof status | Automation (v1) | Does the stage-sync logic described above |
| Ziflow - Create Proof | Automation (v3) | Creates the client/job folder hierarchy in ZiFlow (if needed) and the proof itself |
| Ziflow - Delete Proof | Automation (v1) | Deletes a proof |
| Ziflow - Add Reviewer to Stage / Delete Reviewer from Stage / Update Reviewer by Id | Automation (v1) | Manage a proof stage's reviewers |
| Ziflow - Get One Time Url | Automation (v2) | Generates a one-time review link for a reviewer and adds them to the internal/external review stage |
| Ziflow - Get Proof by Proof Id / Get Proofs by document id | Automation (v2 / v1) | Look up proof(s) for display in Skills Workflow |
| Ziflow - Get workflow templates | Automation (v1) | Lists ZiFlow workflow templates, for the Create Proof panel |
| Ziflow - Job team mappings | Automation (v1) | Resolves which Skills Workflow team should review a given proof |
| GetClientJobZiflowFolder | Query (v2) | Resolves the client's/job's existing ZiFlow folder ids for `Create Proof` |
| Create Proof | Workspace (v15) | Panel on the Job for starting a new proof (pick workflow template, reviewers) |
| Edit Proof | Workspace (v4) | Panel for editing an existing proof's details |
| My Pending Proofs | Workspace (v2) | Panel listing proofs awaiting the current user |
| Proofing Viewer | Workspace (v2) | Embeds the ZiFlow proof viewer directly in Skills Workflow |
| Proofing | Workspace (v1 job / v12 job / v5 project) | Proof list panel, shown on Job and Project records |
| Ziflow | System Parameter | Holds the ZiFlow API `token`, `url` and one-time-URL `expirationDays` |

Source: files under `[Ziflow] [Integrations] ...` in the Marketplace export, listed in the Technical Reference below.

---

### Monitoring and Error Handling

The automation records each execution, including the last time it ran and whether it succeeded. Failures are visible in the automation's log inside Skills Workflow.

Because the flow is triggered by ZiFlow, an event that arrives while Skills Workflow is unavailable is not retried by the platform — ZiFlow's own webhook retry policy applies.

---

### Creating and Managing Proofs from Skills Workflow

Beyond the inbound stage sync, this package lets people start and manage ZiFlow proofs without leaving Skills Workflow:

- **Creating a proof** (`Ziflow - Create Proof`): resolves the job's (and if needed, its client's) ZiFlow folder via `GetClientJobZiflowFolder`, creating either folder in ZiFlow first if it doesn't exist yet (`POST https://api.ziflow.io/v1/folders`, folder id written back via `PUT /api/v3/documentUserFieldValues`), then creates the proof itself in that folder using the ZiFlow token from the `Ziflow` configuration key.
- **Reviewers**: `Ziflow - Add Reviewer to Stage`, `Ziflow - Delete Reviewer from Stage` and `Ziflow - Update Reviewer by Id` are thin wrappers around ZiFlow's own `/v1/proofs/{id}/stages/{id}/reviewers` endpoints. `Ziflow - Get One Time Url` additionally adds a reviewer to the internal and external review stages and returns a one-time review link, expiring after the configured number of days.
- **Viewing proofs**: `Ziflow - Get Proof by Proof Id` and `Ziflow - Get Proofs by document id` back the `My Pending Proofs`, `Proofing` and `Proofing Viewer` panels shown on Job/Project records.
- **Workflow templates and team mapping**: `Ziflow - Get workflow templates` lists the templates available when starting a proof; `Ziflow - Job team mappings` resolves which Skills Workflow team should be assigned to review it.

**Cross-reference:** the [Box](./cloud-storage/box) integration includes `Box - Ziflow - Create temporary shared link`, which creates temporary Box shared links for files — used to feed file previews into these ZiFlow proofs.

Source: `[Ziflow] [Integrations] Ziflow - Enqueue - Update proof status v3 (Automation) {Active}.json`, `[Ziflow] [Integrations] Ziflow - Execute - Update proof status v1 (Automation) {Active}.json`, `[Ziflow] [Integrations] Ziflow - Create Proof v3 (Automation) {Active}.json`, `[Ziflow] [Integrations] Ziflow - Delete Proof v1 (Automation) {Active}.json`, `[Ziflow] [Integrations] Ziflow - Add Reviewer to Stage v1 (Automation) {Active}.json`, `[Ziflow] [Integrations] Ziflow - Delete Reviewer from Stage v1 (Automation) {Active}.json`, `[Ziflow] [Integrations] Ziflow - Update Reviewer by Id v1 (Automation) {Active}.json`, `[Ziflow] [Integrations] Ziflow - Get One Time Url v2 (Automation) {Active}.json`, `[Ziflow] [Integrations] Ziflow - Get Proof by Proof Id v2 (Automation) {Active}.json`, `[Ziflow] [Integrations] Ziflow - Get Proofs by document id v1 (Automation) {Active}.json`, `[Ziflow] [Integrations] Ziflow - Get workflow templates v1 (Automation) {Active}.json`, `[Ziflow] [Integrations] Ziflow - Job team mappings v1 (Automation) {Active} - Automation.json`, `[Ziflow] [Integrations] GetClientJobZiflowFolder v2 (Query) {Active}.json`, `[Ziflow] [Integrations] Create Proof v15 (Workspace) {Active}.json`, `[Ziflow] [Integrations] Edit Proof v4 (Workspace) {Active} - Workspace.json`, `[Ziflow] [Integrations] My Pending Proofs v2 (Workspace) {Active}.json`, `[Ziflow] [Integrations] Proofing Viewer v2 (Workspace) {Active}.json`, `[Ziflow] [Integrations] Proofing v1 (Workspace) {Active} - Workspace.json`, `[Ziflow] [Integrations] Proofing v12 (Workspace) {Active}.json`, `[Ziflow] [Integrations] Proofing v5 (Workspace) {Active}.json`, `[Ziflow] [Integrations] Ziflow v1 (System Parameter) {Active}.json`.

#### Open Questions

- Two near-duplicate exports of `Ziflow - Job team mappings` differ only in a missing `/` in the ZiFlow URL template (`{{url}}{{proofId}}` vs `{{url}}/{{proofId}}`) — which is actually live is not determinable from the export.

---

### Good to Know

- Stage names are configurable. If the agency renames the *Proofing* or *Changes Required* stages, the automation has to be updated to match.
- The integration is one-way: ZiFlow drives Skills Workflow. Moving a job by hand in Skills Workflow does not change the proof in ZiFlow.
- Only the two events above are handled today. Other proof decisions — approved, approved with changes — can be added by extending the automation.
