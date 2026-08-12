---
id: client-and-agencies
title: 'Client and Agencies'
description: "Some clients run Skills Workflow themselves."
sidebar_label: Client and Agencies
---

:::info Two-tenant integration
This is not a connection to an external product — it's a bridge between **two separate Skills Workflow tenants**: an agency's own tenant and its client's own tenant. The Marketplace export ships it as two packages, `Client and Agencies (Agency)` and `Client and Agencies (Client)`, one installed on each side. Both halves are documented together on this page.
:::

### Description

This article describes the **Client and Agencies** integration between two `Skills Workflow` environments.

Some clients run Skills Workflow themselves. When they do, the client's marketing team and the agency delivering the work are both in the same product — but in separate environments, each with its own users, data and security. That separation is the point: neither side wants the other inside their tenant.

This integration bridges the two without collapsing them. The client raises and follows work in their own environment; the agency plans and delivers it in theirs; and the job, its stage and the conversation around it stay in step across the boundary.

What it replaces is the status e-mail. Without it, the client asks where something is, someone at the agency checks and replies, and the client's own system holds a stale copy of the truth. With it, the client sees the stage move and the comment appear in their own environment, as it happens, without the agency having to tell them.

The bridge is deliberately selective: only what the agency marks as client-visible crosses over, and only for the stages the agency has chosen to share.

---

### Data Exchange Technology

Each side installs its own package — one on the agency's environment, one on the client's. The two call each other directly over the web, each authenticating with a shared secret the other checks before accepting anything.

The exchange is **event-driven in both directions**: it runs when a job's stage changes or a comment is posted, not on a schedule.

---

### Data Exchange (Client → Agency)

When a job's stage changes in the client's environment, it is sent to the agency, where:

- the **project is created** if the agency does not have one for it yet;
- the **job is created or updated** underneath it;
- the right **team member is assigned** to it.

This is how work raised by the client arrives in the agency's environment ready to be picked up.

---

### Data Exchange (Agency → Client)

When someone at the agency posts a comment on a job, it is sent to the client's environment, where it appears as a comment on their copy of the job — and, if the job also moved to a stage the agency has chosen to share, their job moves to that stage too.

Only comments marked as visible to the client cross over, and only the stages listed in the agency's configuration. Internal discussion and internal stages stay internal.

---

### What the Agency Needs to Provide

- **Both environments' addresses**, and a shared secret agreed between them.
- **The list of stages** on the agency side that are eligible to be shared with the client.
- **Matching client, company and product records** on the agency side for the work the client sends — see *Good to Know*.

---

### Monitoring and Error Handling

If work arrives from the client for a company or a client record the agency's environment does not recognise, the integration does not guess. It stops and sends an e-mail alert, so the missing mapping can be added and the work re-sent, rather than a project being created against the wrong client.

---

### Good to Know

- **The client and company have to be mapped on the agency side first.** This is the most common reason work does not come through.
- **Nothing crosses over by default.** A comment is only shared if it is marked visible to the client, and a stage change is only shared if that stage is in the agreed list.
- **Both sides keep their own security.** Users of one environment never gain access to the other; only the specific records above are exchanged.
- Each environment can be upgraded, configured and administered independently — the bridge only depends on the two agreeing on the shared secret and the stage list.

---

### Technical Reference

#### Components

**Agency side** (`[Client and Agencies (Agency)] [Integrations] ...`):

| Name | Type | Version | Stage | Role |
| --- | --- | --- | --- | --- |
| CA-Agency-HandleActivity | Automation | 2 | Active | Receiving endpoint: accepts a job/project update pushed from the client tenant and applies it |
| CA-Agency-JobUpdated | Automation | 1 | Active | Sending side: pushes a client-visible comment/stage update to the client tenant when a Post is created |
| CA-Agency-Post-Created | Webhook | 1 | Active | Fires `CA-Agency-JobUpdated` whenever a Post is created |
| CA-Agency-Integration | System Parameter | 1 | Active | Holds the shared integration secret, the client tenant's connection details, and which stages are pushed to the client |
| CA-Agency-Project-Get | Query | 2 | Active | Resolves what to do with an incoming project update: exists / create / company or client not found |
| CA-Agency-Job-Get | Query | 2 | Active | Resolves what to do with an incoming job update |
| CA-Agency-JobDetails-Get | Query | 1 | Active | Builds the outbound payload describing a job/post for the client tenant |
| CA-Agency-ProjectAssignment-Get | Query | 2 | Active | Looks up the user/team to assign on a newly created job |

**Client side** (`[Client and Agencies (Client)] [Integrations] ...`):

| Name | Type | Version | Stage | Role |
| --- | --- | --- | --- | --- |
| CA-Client-Job-StageUpdated | Automation | 3 | Active | Sending side: pushes a job's data to the agency tenant when its stage changes |
| CA-Client-Job-StageUpdated | Webhook | 2 | Active | Fires the automation above on `StageUpdated` for a Deliverable |
| CA-Client-ReceivedActivity | Automation | 1 | Active | Receiving endpoint: accepts an activity/stage update pushed from the agency tenant and applies it |
| CA-Client-Integration | System Parameter | 1 | Active | Holds the agency tenant's connection details, the receiving webhook id, and the shared integration secret |
| CA-Client-Job-Get | Query | 2 | Active | Builds the outbound payload describing a job for the agency tenant |
| CA-Client-JobUpdateFromRequest-Get | Query | 2 | Active | Resolves an incoming agency update against the client's own job/workflow |

Source: `[Client and Agencies (Agency)] [Integrations] CA-Agency-HandleActivity v2 (Automation) {Active}.json`, `[Client and Agencies (Agency)] [Integrations] CA-Agency-JobUpdated v1 (Automation) {Active}.json`, `[Client and Agencies (Agency)] [Integrations] CA-Agency-Post-Created v1 (Webhook) {Active}.json`, `[Client and Agencies (Agency)] [Integrations] CA-Agency-Integration v1 (System Parameter) {Active}.json`, `[Client and Agencies (Agency)] [Integrations] CA-Agency-Project-Get v2 (Query) {Active}.json`, `[Client and Agencies (Agency)] [Integrations] CA-Agency-Job-Get v2 (Query) {Active}.json`, `[Client and Agencies (Agency)] [Integrations] CA-Agency-JobDetails-Get v1 (Query) {Active}.json`, `[Client and Agencies (Agency)] [Integrations] CA-Agency-ProjectAssignment-Get v2 (Query) {Active}.json`, `[Client and Agencies (Client)] [Integrations] CA-Client-Job-StageUpdated v3 (Automation) {Active}.json`, `[Client and Agencies (Client)] [Integrations] CA-Client-Job-StageUpdated v2 (Webhook) {Active}.json`, `[Client and Agencies (Client)] [Integrations] CA-Client-ReceivedActivity v1 (Automation) {Active}.json`, `[Client and Agencies (Client)] [Integrations] CA-Client-Integration v1 (System Parameter) {Active}.json`, `[Client and Agencies (Client)] [Integrations] CA-Client-Job-Get v2 (Query) {Active}.json`, `[Client and Agencies (Client)] [Integrations] CA-Client-JobUpdateFromRequest-Get v1 (Query) {Active} - Query.json`.

#### How It Works

**Client → Agency:**
1. On the client tenant, `CA-Client-Job-StageUpdated`'s webhook fires on `StageUpdated` for a `Deliverable`.
2. The automation reads the `ca-client-integration` configuration key, looks up the job via `CA-Client-Job-Get`, and — if found — builds the destination URL from the job's own tenant field: `https://apiv2-{job.tenant}.skillsworkflow.com/api/integration-workflows/{Config.webhook}/execute`.
3. It `POST`s the job data, Base64-encoded, to that URL with header `x-integrationsecret: {Config.integrationSecret}` — landing on the agency tenant's `CA-Agency-HandleActivity`.
4. `CA-Agency-HandleActivity` validates the `x-integrationsecret` header against its own `ca-agency-integration` configuration key; a mismatch exits without processing.
5. It decodes the request body from Base64 and runs `CA-Agency-Project-Get`, which returns an `action`: `EXISTS` (job already has its project — go straight to job creation/update), `CREATE` (project needs creating first), or `COMPANYNOTFOUND` / `CLIENTNOTFOUND` (the incoming company or client isn't recognized on the agency tenant).
6. On `COMPANYNOTFOUND` / `CLIENTNOTFOUND`, an email alert ("BB Error - ...") is sent to `helder.barreiros@skillsworkflow.com` and processing stops.
7. Otherwise the project is created if needed, then the job is created/updated (`CreateJob` sub-workflow, using `CA-Agency-Job-Get`), and `AddJobAssignment` assigns the right user/team via `CA-Agency-ProjectAssignment-Get` and `POST /api/posts`.

**Agency → Client:**
1. On the agency tenant, `CA-Agency-Post-Created` fires on every `Post` created.
2. `CA-Agency-JobUpdated` only proceeds for posts on the right document type, then calls `CA-Agency-JobDetails-Get` with the post/event id and the list of "valid stages" from the `ca-agency-integration` configuration key.
3. If the query reports the underlying job/post as `found`, the resulting data is `POST`ed to the client tenant's own webhook endpoint (`https://apiv2-{Config.client.tenant}.skillsworkflow.com/api/integration-workflows/{Config.client.automationId}/execute`), authenticated with an `x-api-auth` header — landing on the client tenant's `CA-Client-ReceivedActivity`.
4. `CA-Client-ReceivedActivity` runs `CA-Client-JobUpdateFromRequest-Get` against the incoming payload. If the status is `found` (a stage transition applies), it creates a client-visible comment **and** transitions the Deliverable's stage in one call (`POST /api/v3/posts`, `isVisibleToClient: true`, with a `transition` action). If the status is `found Job` (the job matched but no valid transition applies), it posts the comment only, without changing the stage. Otherwise it exits without creating anything.

#### External System Contact Points

- Agency → client tenant: `POST https://apiv2-{client.tenant}.skillsworkflow.com/api/integration-workflows/{client.automationId}/execute`, header `x-api-auth`, landing on `CA-Client-ReceivedActivity`.
- Client → agency tenant: `POST https://apiv2-{job.tenant}.skillsworkflow.com/api/integration-workflows/{webhook}/execute`, header `x-integrationsecret`, landing on `CA-Agency-HandleActivity`.
- Skills Workflow's own API/analytics on each side: named queries `CA-Agency-Project-Get`, `CA-Agency-Job-Get`, `CA-Agency-JobDetails-Get`, `CA-Agency-ProjectAssignment-Get`, `CA-Client-Job-Get`, `CA-Client-JobUpdateFromRequest-Get`; `POST /api/v3/posts`, `POST /api/posts`.

#### Configuration

- Agency side, configuration key **`ca-agency-integration`** — `integrationSecret` (validates inbound calls from the client), `client` (the client tenant's name/automation id, used for outbound calls, `x-api-auth`), and `stages` (which workflow stages on the agency side are eligible to be pushed to the client).
- Client side, configuration key **`ca-client-integration`** — `agency` (context for the agency side), `webhook` (the agency automation id to call), and `integrationSecret`.
- Values for both are not part of the export.

#### Open Questions

- What "BB" stands for in the agency-side error email subject is not stated anywhere in the export.
- The exact set of fields in the job/project payload exchanged between tenants depends on the full SQL of `CA-Agency-JobDetails-Get`, `CA-Agency-Project-Get`, `CA-Agency-Job-Get` and `CA-Client-Job-Get`, not fully explored here.
