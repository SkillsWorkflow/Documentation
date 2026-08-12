---
id: vbd
title: 'VBD'
description: "VBD is where the agency's jobs are opened commercially — a client is registered, a job is numbered, and a campaign is attached to it."
sidebar_label: VBD
---

:::caution Direction corrected against the Marketplace export
This page previously described VBD as a read-only endpoint that **Skills Workflow publishes** for an external consumer to pull from ("Out"). The exported components (Module `SQL Server` in the Marketplace export, all named `VBD - ...`) show the opposite: Skills Workflow **polls an external VBD endpoint** every few minutes and creates clients and projects from what it returns ("In"). Every exported automation reads from `{host}/vbd-skills/client-jobs?since=...&token=...` (a configuration key named `VBD-Integration`) and writes into Skills Workflow via `/api/v3/commercial-clients`, `/api/v3/billing-clients` and `/api/v3/projects` — never the other way around. The previous "publishes a secured endpoint" description is not supported by anything in this export; it has been replaced below. If a separate, genuinely outbound VBD publishing service also exists, it wasn't part of this export.
:::

### Description

This article describes the integration between **VBD** and `Skills Workflow`.

VBD is where the agency's jobs are opened commercially — a client is registered, a job is numbered, and a campaign is attached to it. Skills Workflow is where that job is then planned, staffed and delivered.

This integration removes the set-up step in between. Rather than someone reading the day's new jobs in VBD and creating the matching client and project by hand, the client and the project appear on their own, carrying the job number, campaign, category, owner and cost centre that VBD already holds.

The benefit is speed and fidelity at the same time. Work can start almost immediately after it is opened commercially, and the project carries VBD's own reference data rather than a re-typed approximation of it — so the two systems agree on which job is which from the outset.

---

### Data Exchange Technology

The exchange runs over the VBD web service, using an address and access token configured by the agency. Skills Workflow polls VBD; VBD does not need to call Skills Workflow, and no files or locally installed application are required.

The integration runs on a **short cycle** — it checks for new jobs every few minutes — so a job opened in VBD appears in Skills Workflow within minutes rather than overnight.

The exchange is **one-way**: VBD is the source of truth for the client and the job, and Skills Workflow follows it.

---

### Data Exchange (To Skills Workflow)

Each record VBD returns carries both the client and the job, and both are created if they do not already exist.

**Clients**

| Received from VBD | Becomes in Skills Workflow |
| --- | --- |
| Tax identification | The client's tax number |
| Registered legal name | Billing client |
| Trading name | Commercial client |
| Client code | The client's external reference |

The commercial client, the billing client and the link between them and the company are all created together, so the client arrives usable rather than half-formed.

**Jobs → Projects**

| Received from VBD | Becomes in Skills Workflow |
| --- | --- |
| Job number | Project number |
| Campaign | Project name |
| Opening date and time | Project start |
| Job category | The project's classification |
| Job owner | The project owner |
| Competitive-pitch indicator | Recorded on the project |

Once created, the project is automatically moved to its first available stage, so it arrives ready to work on.

---

### What the Agency Needs to Provide

- **A VBD service address and access token** for Skills Workflow to authenticate with.
- **Confirmation of which project classification** corresponds to each VBD job category.
- **A workflow on the Project document type** with a valid opening transition, since new projects are moved to their first stage automatically.

---

### Good to Know

- **Existing clients and projects are reused, not duplicated.** The integration checks whether each already exists before creating anything, so the same job appearing in consecutive polls does not produce a second project.
- **The client is created from the job.** There is no separate client feed — a client arrives the first time a job is opened for them.
- The integration is one-way: renaming or re-classifying a project in Skills Workflow does not change the job in VBD.

---

### Technical Reference

#### Components

| Name | Type | Version | Stage | Role |
| --- | --- | --- | --- | --- |
| VBD - Clients and Projects | Automation | 3 | Active | Current scheduler: polls VBD every 5 minutes, delegates creation to `VBD - Create Client` / `VBD - Create Project` |
| VBD - Create Client | Automation | 3 | Active | Creates (or reuses) the commercial/billing client for one VBD record |
| VBD - Create Project | Automation | 3 | Active | Creates the project and moves it to its first available stage |
| VBD - Daily Clients and Project Creation | Automation | 2 | Active | Older, self-contained version of the same flow — polls every 4 minutes and creates clients/projects inline, without delegating |
| VBD-GetClient | Query | 4 | Active | Checks whether a commercial client already exists for the incoming record |
| VBD-GetProject | Query | 4 | Active | Checks whether a project already exists for the incoming record |

Source: `[SQL Server] [Integrations] VBD - Clients and Projects v3 (Automation) {Active}.json`, `[SQL Server] [Integrations] VBD - Create Client v3 (Automation) {Active}.json`, `[SQL Server] [Integrations] VBD - Create Project v3 (Automation) {Active}.json`, `[SQL Server] [Integrations] Daily Job Creation v2 (Automation) {Active}.json` (component name `VBD - Daily Clients and Project Creation`), `[SQL Server] [Integrations] Get Client v4 (Query) {Active}.json`, `[SQL Server] [Integrations] Get Project v4 (Query) {Active}.json`.

**Both the v2 monolithic automation and the v3 scheduler + Create Client/Create Project split are Active at once**, each on its own few-minutes schedule, pulling the same feed. Each path checks for an existing client/project before creating one, so this looks safe from duplicates, but running two overlapping schedulers against the same external feed is redundant — see Open Questions.

#### How It Works

1. Every 4–5 minutes, the scheduler (`VBD - Daily Clients and Project Creation` or `VBD - Clients and Projects`) reads the `VBD-Integration` configuration key and calls `GET {host}/vbd-skills/client-jobs?since=<yesterday>&token=<token>` on the external VBD system.
2. For each record returned (fields include `CNPJ_CLIENTE`, `RAZAO_SOCIAL`, `NM_FANTASIA`, `COD_CLIENTE`, `NR_JOB`, `DT_INCLUSAO`, `HORA_INCLUSAO`, `STATUS_JOB`, `CATEGORIA_JOB`, `CAMPANHA_JOB`, `RESPONSAVEL_JOB`, `CONCORRENCIA` — Brazilian-Portuguese fields for client tax id, legal name, trade name, client code, job number, creation date/time, status, category, campaign, owner and a competitive-pitch flag):
   - `VBD-GetClient` checks whether the client already exists; if not, `VBD - Create Client` creates it (`POST /api/v3/commercial-clients`, `POST /api/v3/billing-clients`, then links them via `POST /api/v3/commercial-clients/{id}/billing-clients`).
   - `VBD-GetProject` checks whether the project already exists; if not, `VBD - Create Project` creates it (`POST /api/v3/projects`), looks up its first available workflow transition (`GET /api/workflowStateTransitions?...`), and applies it (`POST /api/posts`) — the same "create then move to first stage" pattern seen in the [7Log](./7log) and [Automations](./automations) integrations.
3. In the v3 path, the scheduler enqueues `VBD - Create Client` and `VBD - Create Project` as background work (30-second wait) rather than running them inline.

#### External System Contact Points

- External VBD endpoint: `GET {host}/vbd-skills/client-jobs?since=&token=`, host and token from the `VBD-Integration` configuration key.
- Skills Workflow's own API: `POST /api/v3/commercial-clients`, `POST /api/v3/billing-clients`, `POST /api/v3/commercial-clients/{id}/billing-clients`, `POST /api/v3/projects`, `GET /api/workflowStateTransitions`, `POST /api/posts`; named queries `VBD-GetClient`, `VBD-GetProject`.

#### Configuration

- Configuration key **`VBD-Integration`** — holds `host` (the external VBD endpoint) and `token`. Values are not part of the export.

#### Open Questions

- Two schedulers (`VBD - Daily Clients and Project Creation` v2 and `VBD - Clients and Projects` v3, the latter split into `Create Client`/`Create Project`) are both Active and pulling the same feed on overlapping cadences — not determinable whether v2 is meant to have been retired and simply wasn't deactivated, or whether both are intentionally kept running.
- Whether a genuinely outbound "Skills Workflow publishes a VBD endpoint" service (as this page previously described) exists anywhere is not determinable from this export — nothing in the exported files does that.
