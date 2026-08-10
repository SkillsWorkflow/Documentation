---
title: Integrations
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
| [AdnNet](./adnet) | Clients and suppliers in; jobs, bills and supplier invoices out | Both |
| [Media360](./media360) | Clients and suppliers in; services, projects, contracts, bills, credit notes, supplier invoices and notes out | Both |
| [MMS](./mms) | Master data load — clients, products, suppliers, services and users | In |
| [Primavera](./primavera) | Financial master data in; bills, credit notes, expenses, purchase orders, supplier invoices and notes out | Both |
| [Sage](./sage) | Financial master data in; bills, credit notes, expenses, purchase orders, supplier invoices and notes out | Both |
| [TOConline](./toconline) | Approved bills issued as invoices in TOConline, with the invoice number written back | Out |
| [VBS](./vbs) | Full commercial and financial cycle, with each flow switchable per company | Both |
| [iSAP](./isap) | Employees, clients and products in; jobs both ways, including closure | Both |

---

### Job & Production Management

| Integration | What it covers | Direction |
| --- | --- | --- |
| [CETA](./ceta) | Clients, products and approved timesheets out; projects and jobs in | Both |
| [JAM](./jam) | Clients, products, projects and jobs out; status changes, assignments and files in | Both |

---

### HR & People

| Integration | What it covers | Direction |
| --- | --- | --- |
| [ADP](./adp) | Employee provisioning from ADP payroll files | In |
| [BambooHR](./bamboo) | Employees and time off, event-driven from BambooHR | In |
| [CS](./cs) | Employee provisioning and terminations from Career Settings | In |
| [EAS](./eas) | Users, leaves, timesheets, clients, products and job jackets | Both |
| [HR-Link](./hr-link) | Employee provisioning from HR-Link personal and job data | In |
| [Reach](./reach) | User provisioning from SAP SuccessFactors | In |
| [UtilPro](./utilpro) | Employee provisioning, including working-time rules | In |

---

### Time & Timesheets

| Integration | What it covers | Direction |
| --- | --- | --- |
| [VBS Timesheet](./vbs-timesheet) | Time and leave out to VBS, with status read back | Both |
| [GSP Timesheet Importer](./gsp-dynamic-timesheet-importer) | Dynamics timesheet report loaded for reporting | In |

---

### Creative & Collaboration

| Integration | What it covers | Direction |
| --- | --- | --- |
| [ZiFlow](./ziflow) | Proof decisions move the deliverable's stage | In |
| [Microsoft Teams](./microsoft-teams) | Posts a card to a Teams channel on any configured event | Out |
| [Cloud Storage](./cloud-storage) | Box, Google Drive and SharePoint — folders, uploads and previews | Both |

---

### Identity & Access

| Integration | What it covers | Direction |
| --- | --- | --- |
| [Single Sign-On](./single-sign-on-sso) | SAML 2.0 authentication via Google Suite, Microsoft Entra or Okta | — |
| [Azure AD Blocker](./azure-ad-blocker) | Blocks Active Directory accounts from Skills Workflow | Out |

---

### Reporting & Data

| Integration | What it covers | Direction |
| --- | --- | --- |
| [Power BI](./powerbi) | Scheduled query exports as Power BI data sources | Out |
| [Custom Table Importer](./custom-table-importer) | Excel files loaded into custom tables | In |
| [VBD](./vbd) | Secured endpoint publishing clients and jobs on demand | Out |
| [API](./api) | The Skills Workflow Integration API | Both |

---

### Product Pages and Technical References

Every integration has a **product page** — this is what the tables above link to. It explains what the integration takes care of, what the agency has to provide, and what can be configured.

Some integrations also have a **Technical Reference**, listed underneath them in the sidebar. That page holds the interface specification: file naming conventions, templates and field-by-field mappings. It is written for the team implementing the exchange, and is not needed to understand or configure the integration.
