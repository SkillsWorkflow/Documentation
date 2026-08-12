---
id: 7log
title: '7Log'
description: "7Log is where the agency's client requests are registered and tracked commercially."
sidebar_label: 7Log
---

### Description

This article describes the integration between **7Log** and `Skills Workflow`.

7Log is where the agency's client requests are registered and tracked commercially. Skills Workflow is where the work those requests turn into is planned, staffed and delivered. This integration connects the two, so that a request accepted in 7Log becomes a live project in Skills Workflow on its own, and stays aligned as it advances.

Without it, someone reads the day's requests in 7Log and re-creates each one by hand — retyping the client, the description, the dates, the cost centre and the owner, and then remembering to move the project every time the request changes phase. That is slow, and it quietly drifts: the two systems end up disagreeing about which jobs exist and what state they are in.

With it, the commercial team keeps working in 7Log, the delivery team keeps working in Skills Workflow, and neither has to maintain the other's list.

---

### Data Exchange Technology

The exchange runs over the 7Log web API. Skills Workflow authenticates with a dedicated API user and then calls 7Log directly. No files, no FTP servers and no locally installed application are required.

The integration is **scheduled, not event-driven**. Every 15 minutes it asks 7Log for the requests that changed in the previous hour, and processes each one. The overlapping window means a request is still picked up if a run is delayed or a single call fails.

The exchange is **one-way**: 7Log is the source of truth for the request, and Skills Workflow follows it. Changing a project in Skills Workflow does not write anything back to 7Log.

---

### Data Exchange (To Skills Workflow)

**Requests → Projects**

Each request in 7Log corresponds to one project in Skills Workflow, matched on the request number. The following information is carried across:

| Received from 7Log | Becomes in Skills Workflow |
| --- | --- |
| Request number | Project number — the key that links the two records |
| Client code | The client the project belongs to |
| Description | Project name |
| Creation date | Project start date (the end date defaults to 30 days later) |
| Brand | The client's product |
| Intervention type | Project nature |
| Phase | Project stage |
| Cost centre | The project's **Centro_Custo** field |
| Created by | Project owner, who is also assigned to the project |

**What each phase does**

The phase held in 7Log decides what happens, so that only requests that represent real work reach Skills Workflow:

| Phase in 7Log | Result |
| --- | --- |
| Registo, Faturação, Orçamentação | The project is created, if it does not exist yet |
| Concluído | Ignored — a request that is already finished does not open a project |
| Any other phase | Ignored |

Once a project exists, a later phase change in 7Log moves the project to the matching stage in Skills Workflow. If the project is already in that stage, nothing happens — so a request that generates several updates does not produce a string of duplicate transitions.

---

### What the Agency Needs to Provide

- **A 7Log API address and a dedicated API user** for Skills Workflow to authenticate with.
- **Clients registered in Skills Workflow, carrying their 7Log client code.** This is the link between the two systems — see *Good to Know* below.
- **Project natures** in Skills Workflow matching the intervention types used in 7Log.
- **Workflow stages** on the Project document type matching the 7Log phases, with valid transitions between them.
- **A notification e-mail address** to receive the integration's alerts.

---

### Monitoring and Error Handling

The integration does not guess when something does not line up. It skips the request and reports it, so the gap is visible and fixable rather than silently wrong. An e-mail is sent when:

- the intervention type on the request does not match any project nature in Skills Workflow;
- the project could not be created;
- the request moved to a phase that Skills Workflow has no available transition to.

A problem with one request does not stop the run — the remaining requests are still processed, and the skipped one is picked up on a later run once the missing mapping is in place.

---

### Good to Know

- **The client has to exist in Skills Workflow first.** A request for a client that is not registered — or that is registered without its 7Log client code — is skipped. This is the most common reason a request does not appear, and it is worth checking before going live.
- **Only the last hour is polled, every 15 minutes.** A request registered in 7Log appears in Skills Workflow within a few minutes, not instantly.
- **Finished requests are never imported.** If a request is registered and completed in 7Log without ever being polled in between, no project is created for it.
- **Projects are matched by request number**, which should not be edited by hand.
- The integration is one-way: moving a project in Skills Workflow does not change the request in 7Log.

---

### Technical Reference

#### Components

| Name | Type | Version | Stage | Role |
| --- | --- | --- | --- | --- |
| 7Logs-Scheduler | Automation | 2 | Active | Runs every 15 minutes; enqueues `7Logs-GetJobsByPeriod` for the last hour |
| 7Logs-GetJobsByPeriod | Automation | 2 | Active | Authenticates to 7Log, pulls jobs in a period, creates/updates the matching Skills Workflow project |
| 7Logs-ProjectByNumber-Get | Query | 3 | Active | Decides, per job, whether to Create/Update/Ignore or flag a missing client mapping |
| 7Logs-TransitionByProjectAndName-Get | Query | 1 | Active | Looks up the workflow transition needed to move a project to a given stage |

Source: `[7Log] [Integrations] 7Logs-Scheduler v2 (Automation) {Active}.json`, `[7Log] [Integrations] 7Logs-GetJobsByPeriod v2 (Automation) {Active}.json`, `[7Log] [Integrations] 7Logs-ProjectByNumber-Get v3 (Query) {Active}.json`, `[7Log] [Integrations] 7Logs-TransitionByProjectAndName-Get v1 (Query) {Active}.json`.

#### How It Works

1. **`7Logs-Scheduler`** runs every 15 minutes. It computes a `Start`/`End` window (now minus one hour, to now) and enqueues `7Logs-GetJobsByPeriod` (its own automation id) as background work with that window.
2. **`7Logs-GetJobsByPeriod`** authenticates against the 7Log API (`POST {host}/Token`, password grant, host read from the `7log-api` configuration key) and fetches jobs changed in the window (`POST {host}/API/Pedidos/GetJobs`, `tipoData: 1`).
3. For each job returned, it calls **`7Logs-ProjectByNumber-Get`** (`POST /api/v3/analytics/named-query/7Logs-ProjectByNumber-Get/execute`), which returns an `action`:
   - `Client` — the 7Log client (`codEntidade`) isn't mapped to a Skills Workflow client (matched on `commercialClient.externalId`) → the job is skipped.
   - `Exists` — the project already matches the incoming stage → skipped.
   - `Ignore` — the incoming stage isn't one Skills Workflow tracks (including `Concluído`) → skipped.
   - `Create` — no project exists yet:
     - If the query couldn't resolve a `projectNatureId`, an email is sent ("Project Nature '...' Not Found") and the job is skipped.
     - Otherwise `POST /api/v3/projects` creates it, `PUT /api/v3/documentUserFieldValues` sets the `Centro_Custo` custom field, and `POST /api/v3/posts` assigns the project owner (assignment type id `f00eff4d-a086-4d9c-bd9a-ee4df79fd401`). A `400/401/403/404` from the create call sends an email ("Create Project '...' Error").
   - `Update` — a project exists but its stage differs:
     - **`7Logs-TransitionByProjectAndName-Get`** looks up the transition to the target stage. If none is available, an email is sent ("Transition Not Available For Stage '...'"); otherwise `POST /api/posts` applies the transition.
4. All error/skip emails go to `ines@skillsworkflow.com`, sent as "7Jobs | Skills Workflow". The scheduler notifies on error only, not on success.

Field mapping performed inside `7Logs-ProjectByNumber-Get`: `numeroPedido` → project number, `codEntidade` → client (via `externalId`), `descricao` → name (stripped of quotes and non-breaking spaces), `dataCriacao` → begin date (end date defaults to +30 days), `marca` → `commercialClientProduct`, `tipoIntervencao` → `projectNature` (with `Faturação` mapped to the nature named `Projeto`), `fase` → workflow state, `centroCustos` → `Centro_Custo`, `criadoPor`/`atualizadoPor` (e-mails) → users, falling back to the `internal process` user.

#### External System Contact Points

- 7Log API (host read from the `7log-api` configuration key):
  - `POST {host}/Token` — OAuth2 password grant.
  - `POST {host}/API/Pedidos/GetJobs` — `{Start, End, tipoData: 1}`, bearer-authenticated.
- Skills Workflow's own API/analytics: `POST /api/v3/projects`, `PUT /api/v3/documentUserFieldValues`, `POST /api/v3/posts`, `POST /api/posts`, named queries `7Logs-ProjectByNumber-Get` and `7Logs-TransitionByProjectAndName-Get`.

#### Configuration

- Configuration key **`7log-api`** — holds the 7Log API host. Credentials in this export are inline in the automation body rather than in the configuration key — see Open Questions.
- Custom field **`Centro_Custo`** on Project.
- Assignment type id `f00eff4d-a086-4d9c-bd9a-ee4df79fd401` — used to assign the project owner.

#### Open Questions

- The 7Log API password appears in plain text in the exported automation body rather than in a configuration key — whether this reflects the live system or is an export artefact is not determinable from the export.
- The full set of project-nature and client-mapping rules lives inside the `7Logs-ProjectByNumber-Get` SQL and depends on data in Skills Workflow's own tables — which specific 7Log values map to which records is not enumerable from the export alone.
