---
title: Integrations
description: "Skills Workflow connects to the systems an agency already runs — the ERP finance works in, the HR system that owns the people, the proofing tool the creatives…"
sidebar_label: Overview
---

Skills Workflow connects to the systems an agency already runs — the ERP finance works in, the HR system that owns the people, the proofing tool the creatives review in, the storage the files live on — so that each piece of information is maintained in one place and shared everywhere it is needed.

This page lists every available integration, what it covers and which way the data flows.

---

### How to Read the Direction Column

| Direction | Meaning |
| --- | --- |
| **In** | The other system is the source of truth; Skills Workflow follows it |
| **Out** | Skills Workflow is the source of truth; the other system receives the data |
| **Both** | Each system owns part of the exchange — the page explains which |

---

### ERP, Finance & Master Data

| Integration | What it covers | Direction |
| --- | --- | --- |
| [AdnNet](adnet) | Clients and suppliers in; jobs, bills and supplier invoices out | Both |
| [AdSolutions](./adsolutions) | Clients, products, suppliers and services in from AdIntegra; jobs and projects out as they leave draft | Both |
| [Granatum](./granatum) | Clients, suppliers and products in; approved bills and purchase orders posted out as financial entries | Both |
| [Jasmin](./jasmin) | Clients, suppliers and reference data in from Primavera's Jasmin ERP; bills, purchase orders and supplier invoices out (client credit notes built but currently disabled) | Both |
| [Kamul](./kamul) | Brands, clients, products and suppliers in; bills and purchase orders out, with status polled back | Both |
| [Media360](media360) | Clients and suppliers in; services, projects, contracts, bills, credit notes, supplier invoices and notes out | Both |
| [MMS](mms) | Master data load — clients, products, suppliers, services and users | In |
| [Omie](./omie) | Clients out to Omie daily; bills out as service orders, with the issued NFS-e invoice read back | Both |
| [Primavera](./primavera) | Financial master data in; bills, credit notes, expenses, purchase orders, supplier invoices and notes out | Both |
| [Publi](./publi) | An approved media estimate sent out to Publi as an "orçamento" | Out |
| [Sage](./sage) | Financial master data in; bills, credit notes, expenses, purchase orders, supplier invoices and notes out | Both |
| [TOConline](toconline) | Approved bills, client credit notes and supplier invoices issued in TOConline, with the document number written back; clients, suppliers, services and taxes kept in sync | Both |
| [VBD](vbd) | Skills Workflow polls an external VBD feed and creates clients/projects from it | In |
| [VBS](vbs) | Full commercial and financial cycle, with each flow switchable per company | Both |
| [WK Radar](./wk-radar) | Clients, suppliers and services in; bills and supplier invoices out (bill hand-off currently disabled) | Both |
| [iSAP](./isap) | Employees, clients and products in; jobs both ways, including closure | Both |

---

### Job & Production Management

| Integration | What it covers | Direction |
| --- | --- | --- |
| [7Log](./7log) | Jobs from 7Log created/updated as projects, on a 15-minute poll | In |
| [Active Collab](./active-collab) | ActiveCollab tasks mirrored as jobs — creation, updates, stage, comments and attachments | In |
| [Automations — Generic Create Project](./automations) | A generic, credential-protected inbound endpoint any system can call to create a project | In |
| [Azure DevOps](./azure-devops) | Creates an Azure DevOps work item for a deliverable and keeps its status synced to the job's stage | Out |
| [CETA](./ceta) | Clients, products and approved timesheets out; projects and jobs in | Both |
| [Client and Agencies](./client-and-agencies) | Job/project/comment sync between an agency's Skills Workflow tenant and its client's — both halves | Both |
| [HubSpot](./hubspot) | Won/updated HubSpot deals (one pipeline) become and stay in sync as projects | In |
| [JAM](./jam) | Clients, products, projects and jobs out; status changes, assignments and files in | Both |
| [Visto](./visto) | Print-production stage sync with Visto — inbound stage updates; outbound side delivered via [Zappier](./zappier) | Both |
| [WMS](./wms) | Two-way job/project/brief/comment/assignment/product sync with an external Work Management System | Both |
| [Zappier](./zappier) | Delivers Visto job/stage-change payloads via a Zapier webhook — the outbound half of [Visto](./visto) | Out |

---

### HR & People

| Integration | What it covers | Direction |
| --- | --- | --- |
| [ADP](adp) | Employee provisioning from ADP payroll files | In |
| [BambooHR](bamboo) | Employees and time off, from three independent daily-scheduled automations (only the employee-update one currently runs — see the page) | In |
| [CS](cs) | Employee provisioning and terminations from Career Settings | In |
| [EAS](./eas) | Users, leaves, timesheets, clients, products and job jackets | Both |
| [HR-Link](hr-link) | Employee provisioning from HR-Link personal and job data | In |
| [Reach](./reach) | User provisioning from SAP SuccessFactors | In |
| [UtilPro](./utilpro) | Employee provisioning, including working-time rules | In |
| [Workday Informatica](./workday-informatica) | Absences and leave periods from Workday (VML), synced daily / every 6 hours | In |

---

### Time & Timesheets

| Integration | What it covers | Direction |
| --- | --- | --- |
| [VBS Timesheet](vbs-timesheet) | Time and leave out to VBS, with status read back; also includes a client-specific cost-centre export view | Both |
| [GSP Timesheet Importer](gsp-dynamic-timesheet-importer) | Dynamics timesheet report loaded for reporting | In |
| [Timely](./timely) | Clients/projects/assignments/work types synced with Timely; hours logged in Timely become timesheets (two parallel sync mechanisms exist — see the page) | Both |

---

### Creative & Collaboration

| Integration | What it covers | Direction |
| --- | --- | --- |
| [ZiFlow](ziflow) | Proof decisions move the deliverable's stage; proofs can also be created, viewed and managed from Skills Workflow | Both |
| [Microsoft Teams](microsoft-teams) | Posts a card to a Teams channel on any configured event | Out |
| [Cloud Storage](cloud-storage/box) | Box, Google Drive and SharePoint — folders, uploads and previews (client folder auto-creation currently disabled) | Both |
| [Sitecore](./sitecore) | Order-brief submission panel plus an asset-library panel closely related to [Swivle](./swivle) | Both |
| [Swivle](./swivle) | Asset-library search/browse/cart panel embedded in a Request | In |
| [Siphon](./siphon) | Forwards an approved brief's data to an external webhook, likely to create a Swivle shared link | Out |

---

### Identity & Access

| Integration | What it covers | Direction |
| --- | --- | --- |
| [Single Sign-On](./single-sign-on-sso) | SAML 2.0 authentication via Google Suite, Microsoft Entra or Okta | — |
| [Azure AD Blocker](azure-ad-blocker) | Blocks Azure AD accounts for users delinquent on timesheets, and unblocks them on request | Out |

---

### Reporting & Data

| Integration | What it covers | Direction |
| --- | --- | --- |
| [Power BI](powerbi) | Scheduled query exports as Power BI data sources | Out |
| [Custom Table Importer](custom-table-importer) | Excel files loaded into custom tables | In |
| [API](api) | The Skills Workflow Integration API and Client API | Both |

---

### Cross-References

Some components and connections span more than one integration page in this list:

| Components | Where documented | What links them |
| --- | --- | --- |
| `Client and Agencies (Agency)` module ↔ `Client and Agencies (Client)` module | [Client and Agencies](./client-and-agencies) | Two Skills Workflow tenants (an agency's and its client's) calling each other's integration-workflow endpoints to keep jobs/projects/comments in sync. Shipped as two Marketplace packages, documented as one integration. |
| `WMS (Server)` module ↔ `WMS (Client)` module | [WMS](./wms) | Two halves of one bridge to a Work Management System, sharing the same `x-shared-secret` webhook credential. Shipped as two Marketplace packages, documented as one integration. |
| `Visto` module ↔ `Zappier` module | [Visto](./visto), [Zappier](./zappier) | The `Zappier` Marketplace package's components are internally named `Visto-StageChanged` / `Visto-JobStageUpdate-Get` / `Visto-JobById-Get` — despite the package name, it's the outbound half of the Visto integration, delivering job/stage data to Visto via a Zapier catch-hook. |
| `Sitecore` module ↔ `Swivle` module | [Sitecore](./sitecore), [Swivle](./swivle) | Both modules' `Content Library` Workspaces call the same underlying integration-workflow automations (asset search, filters) for what looks like the same DAM — variable naming inside one of them (`zonzaResult`) is a lead that the real system behind it is Zonza; see the note on [Zonza](zonza). |
| `Box` module ↔ `Ziflow` module | [Cloud Storage — Box](cloud-storage/box), [ZiFlow](ziflow) | `Box - Ziflow - Create temporary shared link` creates temporary Box file links used to feed previews into ZiFlow proofs. |
| `SQL Server` module | [VBD](vbd) | Every component in the Marketplace export's `SQL Server` module is internally named `VBD - ...`; it's documented under the existing VBD page, whose direction has been corrected from "Skills Workflow publishes" to "Skills Workflow polls an external VBD feed" based on the export. |
| `AdSolutions` vs `AdnNet` | [AdSolutions](./adsolutions), [AdnNet](adnet) | **Not the same integration**, despite the similar name — `AdSolutions` connects to "AdIntegra" (a different external system); noted here only to prevent the two being confused. |

---

### Product Pages and Technical References

Every integration has a **product page** — this is what the tables above link to. It explains what the integration takes care of, what the agency has to provide, and what can be configured.

Most pages also include a **Technical Reference** section (or, for a few, a separate Technical Reference page) — the interface specification: components, data flow, external endpoints and configuration. It is written for the team implementing or troubleshooting the exchange, and is not needed to understand or configure the integration.
