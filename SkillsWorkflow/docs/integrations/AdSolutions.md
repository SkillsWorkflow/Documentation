---
id: adsolutions
title: 'AdSolutions'
description: "AdIntegra is the agency's ad and media management back office — where campaigns and the individual pieces that make them up are registered for media planning…"
sidebar_label: AdSolutions
---

:::info Not the same as "AdnNet"
Despite the similar-sounding name, this integration is unrelated to the [AdnNet](./adnet) integration already documented on this site — the two connect to different external systems (this one to "AdIntegra", a SOAP/ASMX web service, per every exported component's `AdIntegraSkillsWS-` prefix and `AdIntegraSkills.asmx` endpoint).
:::

### Description

This article describes the integration between **AdIntegra** (the AdSolutions platform) and `Skills Workflow`.

AdIntegra is the agency's ad and media management back office — where campaigns and the individual pieces that make them up are registered for media planning and billing. Skills Workflow is where that work is briefed, produced and tracked.

The integration takes care of two jobs:

- **Bringing the master data in** — clients, billing products, suppliers and services that already exist in AdIntegra are created and kept up to date in Skills Workflow, so briefs are raised against the same records media and finance use.
- **Sending the operation out** — as soon as a project or job is real (it has left draft), it is registered in AdIntegra as a campaign or an ad piece, and the reference AdIntegra assigns is written back onto the Skills Workflow record.

The point is that a job only has to be described once. The producer briefs it in Skills Workflow; media and finance find it already waiting in AdIntegra under the right client and campaign, carrying a shared reference both sides can quote.

---

### Data Exchange Technology

The exchange runs over the AdIntegra web service, using a login and password configured by the agency. Skills Workflow authenticates for a token and then calls AdIntegra directly. No files and no locally installed application are required.

It works in two modes:

- **The outbound hand-off is event-driven** — it fires the moment a project or job leaves the draft stage.
- **The inbound master-data refresh is a batch pull**, run per company and per date range.

:::caution The master-data refresh currently has no active schedule
As exported, the automation that drives the periodic clients/suppliers/services refresh has its schedule switched off, so that half does not run on its own. The outbound job and project hand-off is unaffected and remains live. See the Technical Reference for detail.
:::

---

### Data Exchange (To Skills Workflow)

Pulled from AdIntegra, per company:

- **Clients** — created as billing clients and commercial clients, with the link to the company they belong to.
- **Billing products** — created as billing and commercial products.
- **Suppliers**.
- **Services**.

---

### Data Exchange (From Skills Workflow)

| Sent to AdIntegra | When |
| --- | --- |
| **Projects → Campanhas** (campaigns) | The project leaves the *Rascunho* (draft) stage |
| **Jobs → Peças** (ad pieces) | The job leaves the *Rascunho* (draft) stage |

In both cases the reference AdIntegra returns is stored back on the Skills Workflow record, so the two systems share the same identifier from then on.

---

### What the Agency Needs to Provide

- **An AdIntegra web service address**, plus a dedicated login and password for Skills Workflow.
- **The departments in scope** for the integration, and the stage name that means a client is confirmed — both held in the integration's system parameters.
- **A *Rascunho* (draft) stage** on the Project and Job document types, since leaving it is what triggers the hand-off.

---

### Good to Know

- **Nothing is sent while a project or job is still in draft.** This is deliberate: it keeps half-written briefs out of the media system.
- **Records are matched by their AdIntegra reference**, stored on the Skills Workflow record.
- Master data flows in, operational documents flow out — the two directions are independent, and one can be running while the other is not.

---

### Technical Reference

#### Components

| Name | Type | Version | Stage | Role |
| --- | --- | --- | --- | --- |
| AdIntegraSkillsWS-ScheduleTask | Automation | 2 (highest of 2 versions, both exported) | **No active trigger** | Would enqueue the Clients/Suppliers/Services refresh — both exported versions have their scheduler disabled |
| AdIntegraSkillsWS-Authenticate | Automation | 1 | Active | Shared helper: gets an AdIntegra API token |
| AdIntegraSkillsWS-BillingClients | Automation | 2 (highest of 2 versions, both exported) | Active | Pulls clients from AdIntegra for a date range |
| AdIntegraSkillsWS-BillingProducts | Automation | 1 | Active | Pulls billing products from AdIntegra |
| AdIntegraSkillsWS-Services | Automation | 1 | Active | Pulls services from AdIntegra |
| AdIntegraSkillsWS-Suppliers | Automation | 2 | Active | Pulls suppliers from AdIntegra |
| AdIntegraSkillsWS-Job-CreatePeca | Automation | 5 (highest of 2 versions, both exported) | Active | Sends a job to AdIntegra as a "Peça" |
| AdIntegraSkillsWS-Job-Created | Webhook | 1 | Active | Fires `Job-CreatePeca` when a Deliverable leaves the "Rascunho" stage |
| AdIntegraSkillsWS-Project-CreateCampanha | Automation | 4 | Active | Sends a project to AdIntegra as a "Campanha" |
| AdIntegraSkillsWS-Project-Created | Webhook | 1 | Active | Fires `Project-CreateCampanha` when a Project leaves the "Rascunho" stage |
| AdIntegraSkillsWS-Parameters | System Parameter | 2 | Active | Holds AdIntegra login (`usuario`, `senha`), the departments in scope, and the "client is clear" stage name |
| AdIntegraSkillsWS-BillingClient-Get, -BillingProduct-Get, -Client-Get, -ClientesCompany-Filter, -CompaniesAndDates-Get, -Product-Get, -Service-Get, -Supplier-Get, -Job-Get, -Project-Get | Query | various | Active | Resolve/build the payloads for the automations above |

Source: files under `[AdSolutions] [Integrations] AdIntegraSkillsWS-...` in the Marketplace export (26 files, 22 distinct components after de-duplicating attachments and version history).

:::caution Periodic master-data sync has no active trigger
`AdIntegraSkillsWS-ScheduleTask` is exported in two versions (v1 and v2) and **both have their scheduler `isActive: false`**. Its job is to enqueue `AdIntegraSkillsWS-BillingClients`, `-Suppliers` and `-Services` (confirmed by matching target automation ids) — with no active scheduler calling it, none of those three master-data pulls currently run on their own. Only the job/project webhook-triggered push to AdIntegra remains live.
:::

#### How It Works

**Periodic master data** (currently untriggered — see above): `AdIntegraSkillsWS-ScheduleTask` would authenticate (`AdIntegraSkillsWS-Authenticate`, `POST {host}/AdIntegraSkills.asmx/TOKEN`) and then, for each company/date range from `AdIntegraSkillsWS-CompaniesAndDates-Get`, enqueue `AdIntegraSkillsWS-BillingClients`, `-Suppliers` and `-Services` as background work. Each of those pulls the relevant AdIntegra endpoint (`POST {host}/AdIntegraSkills.asmx/CLIENTES` / `FORNECEDORES` / `PRODUTOS`), parses the XML response, resolves each record against Skills Workflow (`AdIntegraSkillsWS-BillingClient-Get` etc.), and creates/updates it. `AdIntegraSkillsWS-BillingProducts` follows the same pattern but isn't wired into the scheduler at all in this export.

**Job/Project hand-off** (active, webhook-triggered): when a Deliverable or Project transitions out of "Rascunho", the matching webhook fires `Job-CreatePeca` or `Project-CreateCampanha` (confirmed by matching automation ids). Each authenticates, runs its own `-Get` query (`AdIntegraSkillsWS-Job-Get` / `-Project-Get`) to build the AdIntegra payload, sends it (`POST {host}/AdIntegraSkills.asmx/PECAS` / `CAMPANHAS`), and writes the returned external reference back (`PUT /api/v3/documentUserFieldValues` for jobs, `PATCH /api/v3/project-companies/{id}` for projects).

#### External System Contact Points

- AdIntegra SOAP/ASMX service (`{host}/AdIntegraSkills.asmx`, host passed per-request rather than fixed): `/TOKEN`, `/CLIENTES`, `/PRODUTOS`, `/FORNECEDORES`, `/PECAS`, `/CAMPANHAS`.
- Skills Workflow's own API/analytics: the named queries above; `POST /api/v3/billing-clients`, `POST /api/v3/commercial-clients`, `POST /api/v3/commercial-client-companies`, `POST /api/v3/billing-products`, `POST /api/v3/commercial-products`, `POST /api/v3/commercial-product-companies`, `POST /api/v3/services`, `POST /api/v3/suppliers`, `PUT /api/v3/documentUserFieldValues`, `PATCH /api/v3/project-companies/{id}`.

#### Configuration

- System Parameter **`AdIntegraSkillsWS-Parameters`** — `usuario`, `senha` (AdIntegra login), `departamentos` (departments in scope), `etapaClienteClaro` (the stage name meaning "client is clear/confirmed"). Values are redacted in the export.

#### Open Questions

- Whether the master-data sync being untriggered is intentional (e.g. run manually, or superseded by something else) is not determinable from the export.
- `AdIntegraSkillsWS-BillingProducts` isn't enqueued by `AdIntegraSkillsWS-ScheduleTask` even if that scheduler were re-enabled — what's meant to trigger it isn't determinable.
