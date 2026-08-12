---
id: hubspot
title: 'HubSpot'
description: "HubSpot is where the agency's new business lives — the pipeline of deals, the companies behind them, the value and the expected close date."
sidebar_label: HubSpot
---

### Description

This article describes the integration between **HubSpot** and `Skills Workflow`.

HubSpot is where the agency's new business lives — the pipeline of deals, the companies behind them, the value and the expected close date. Skills Workflow is where a deal becomes actual work once it is real.

This integration carries the deal across the moment it changes, so the commercial team never has to re-create in production what they already built in the CRM.

The problem it solves is the hand-off itself. Traditionally, a deal is won and someone forwards the details so a project can be opened — which means a delay, a re-typing, and a project whose value, dates and client details are a snapshot of whatever was in the CRM at the moment of the e-mail. Here the project is created from the deal, and keeps following it: when the deal's value, stage or close date changes in HubSpot, the project changes too. The client is created automatically if the agency has not worked with that company before.

---

### Data Exchange Technology

The exchange runs over the HubSpot API, authenticated with a HubSpot private app token. No files and no locally installed application are required.

It is **event-driven** — HubSpot notifies Skills Workflow when a deal changes, and Skills Workflow reads the deal back from HubSpot to get its current state before acting.

The integration is scoped to **one specific HubSpot pipeline**. Deals in any other pipeline are ignored, so the rest of the CRM's activity does not create projects.

The exchange is **one-way**: HubSpot is the source of truth for the deal, and Skills Workflow follows it.

---

### Data Exchange (To Skills Workflow)

**Companies → Clients**

The first time a deal is seen for a company the agency has not worked with, that company is created as a client, matched on its website so an existing client is reused rather than duplicated.

**Deals → Projects**

| Received from HubSpot | Becomes in Skills Workflow |
| --- | --- |
| Deal name | Project name |
| Associated company | The client the project belongs to |
| Created date | Project start |
| Deal stage | The project's stage |
| Amount | The project's value |
| Expected close date | The agreed date |
| Deal type, and the pipeline's own custom fields | Recorded on the project |

The first time a deal is seen the project is created and moved to its opening stage; on every later change the same project is updated, rather than a second one being created.

---

### What the Agency Needs to Provide

- **A HubSpot private app token** with access to deals, companies and pipelines.
- **The pipeline** whose deals should become projects — the integration is deliberately limited to one.
- **Webhooks configured in HubSpot** to notify Skills Workflow when a deal changes.
- **Agreement on how deal stages map** to project stages.

---

### Monitoring and Error Handling

A deal with **no company associated with it** cannot be turned into a project, because there is no client to attach it to. When this happens the integration stops and sends an e-mail alert rather than creating an orphan project — the fix is to associate the company in HubSpot.

---

### Good to Know

- **Only one pipeline is integrated.** Deals elsewhere in HubSpot are ignored by design.
- **Projects are matched to deals by the HubSpot deal identifier**, so a deal only ever produces one project no matter how often it changes.
- **Clients are matched by company website.** A company whose website differs from the existing client record will create a second client.
- The integration is one-way: changing the project in Skills Workflow does not update the deal in HubSpot.

---

### Technical Reference

#### Components

| Name | Type | Version | Stage | Role |
| --- | --- | --- | --- | --- |
| HubSpot-WebhookReceived | Automation | 10 | Active | Entry point: reads the changed HubSpot deal, decides create-client / create-project / update-project |
| HubSpot-CreateClient | Automation | 3 | Active | Creates the commercial client from the deal's associated HubSpot company |
| HubSpot-CreateProject | Automation | 10 | Active | Creates the Skills Workflow project from the deal and moves it to the "Novo Projecto" (new project) transition |
| HubSpot-UpdateProject | Automation | 9 | Active | Updates an existing project's fields and stage from the deal |
| HubSpot-ClientExists | Query | 6 | Active | Checks for an existing client by website |
| HubSpot-ProjectExists | Query | 6 | Active | Checks for an existing project by HubSpot deal id (custom field `hubspotId`) |
| HubSpot-GetProjectDetails | Query | 9 | Active | Resolves company/client ids etc. needed to create a project |
| HubSpot-GetProjectUpdateDetails | Query | 6 | Active | Resolves the existing project and its current stage for an update |
| HubSpot-GetNovoProjectoTransition | Query | 9 | Active | Looks up the "new project" workflow transition to apply on create |
| HubSpot-GetTransitionDetails | Query | 10 | Active | Looks up a workflow transition, used during project creation |

Source: `[HubSpot] [Integrations] Webhook Received v10 (Automation) {Active}.json`, `[HubSpot] [Integrations] Create Client v3 (Automation) {Active}.json`, `[HubSpot] [Integrations] Create Project v10 (Automation) {Active}.json`, `[HubSpot] [Integrations] Update Project v9 (Automation) {Active}.json`, `[HubSpot] [Integrations] Client Exists v6 (Query) {Active}.json`, `[HubSpot] [Integrations] Project Exists v6 (Query) {Active}.json`, `[HubSpot] [Integrations] Get Project Details v9 (Query) {Active}.json`, `[HubSpot] [Integrations] Get Project Update Details v6 (Query) {Active}.json`, `[HubSpot] [Integrations] Get Novo Projecto Transition v9 (Query) {Active}.json`, `[HubSpot] [Integrations] Get Transition Details v10 (Query) {Active}.json`.

#### How It Works

1. `HubSpot-WebhookReceived` receives a HubSpot webhook payload (a property-change event) and, for the changed deal, calls the HubSpot API to fetch the deal (`GET /deals/v1/deal/{objectId}`).
2. It only continues if the deal's `pipeline` is `15672372` — this integration is scoped to one specific HubSpot pipeline (its stage-name lookup and case name `IsBFerrazDeal`, plus a deal field `produtos_bferraz`, suggest this pipeline belongs to a specific client/brand referred to as "BFerraz" in the export).
3. If the deal has no associated HubSpot company, an email is sent ("... - Deal has no associated Companies") to `helder@skillsworkflow.com` and processing stops. Otherwise it fetches the pipeline's stage list and the associated company (`GET /crm/v3/pipelines/deals/15672372`, `GET /companies/v2/companies/{id}`).
4. `HubSpot-ClientExists` checks for a client by the company's website; if none exists, `HubSpot-CreateClient` is enqueued as background work with the company data (Base64-encoded).
5. The deal is mapped into a normalized object (id, name, company, dates, pipeline/stage, amount, deal type, custom fields like `temperatura`, `tipoDeCampanha`, `tipoDeProposta`, `produtos`), then `HubSpot-ProjectExists` checks for an existing project by the deal id. Depending on the result, either `HubSpot-CreateProject` or `HubSpot-UpdateProject` is enqueued as background work with the mapped deal (Base64-encoded).
6. `HubSpot-CreateProject` builds the project (using `HubSpot-GetProjectDetails`), creates it (`POST /api/Projects`), looks up and applies the "new project" transition (`HubSpot-GetTransitionDetails`, `POST /api/posts`), and sets custom fields (`PUT /api/v3/documentUserFieldValues`). `HubSpot-UpdateProject` follows the same pattern against the existing project (`HubSpot-GetProjectUpdateDetails`, `PATCH /api/projects/{id}` equivalent, `HubSpot-GetNovoProjectoTransition`).

#### External System Contact Points

- HubSpot API (`api.hubapi.com`): `GET /deals/v1/deal/{id}`, `GET /crm/v3/pipelines/deals/15672372`, `GET /companies/v2/companies/{id}`. Authenticated with a bearer Private App token embedded directly in the automation (see Configuration).
- Skills Workflow's own API/analytics: named queries `HubSpot-ClientExists`, `HubSpot-ProjectExists`, `HubSpot-GetProjectDetails`, `HubSpot-GetProjectUpdateDetails`, `HubSpot-GetNovoProjectoTransition`, `HubSpot-GetTransitionDetails`; `POST /api/v3/commercial-clients`, `POST /api/Projects`, `POST /api/posts`, `PUT /api/v3/documentUserFieldValues`.

#### Configuration

:::danger Credential found in the export
`HubSpot-WebhookReceived` calls the HubSpot API with a hardcoded `Bearer` Private App Access Token in the request headers, rather than a configuration key. The value is not reproduced here. If this export is genuine, treat this HubSpot token as compromised and rotate it.
:::

- Pipeline id `15672372` and the "BFerraz" custom fields are hardcoded in the automation rather than configured — this integration is built for one specific HubSpot pipeline/client, not general-purpose.

#### Open Questions

- What HubSpot subscribes/sends this webhook (a HubSpot workflow, a native webhook subscription) is not part of this export — only the receiving automation is.
- What "BFerraz" refers to is not stated in the export beyond appearing in a case name and a custom field name (`produtos_bferraz`).
