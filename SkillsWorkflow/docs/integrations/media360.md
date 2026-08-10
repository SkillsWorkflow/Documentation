---
id: media360
title: 'Media360'
sidebar_label: Media360
---

### Description

This article describes the integration between **Media360** and `Skills Workflow`.

Media360 is the agency's media and financial back office. This integration is the widest of the financial integrations: it keeps the client and supplier base aligned in both systems, and it pushes the whole commercial and billing cycle produced in Skills Workflow — projects, contracts, bills, credit notes, supplier invoices and supplier notes — into Media360, so that finance never has to re-enter a document that was already approved by the operational teams.

---

### Data Exchange Technology

The integration connects directly to the Media360 database. There is no file exchange and no additional application to install on the agency side; the connection is configured once, at deployment, by Skills Workflow.

The integration runs on a schedule, company by company. Each company configured on the tenant has its own Media360 identification and its own document type mapping.

Every document exported keeps its Media360 identifier in Skills Workflow. That identifier is what allows the integration to tell an already-exported document from a new one, and to send updates for documents that changed after they were first exported.

---

### Data Exchange (To Skills Workflow)

The following master data is received from Media360:

**Clients** — created and updated in Skills Workflow as Billing Clients and Commercial Clients, with the company links, identification, address, city and country details held in Media360. Clients that Media360 deactivates are moved to the stage configured in **Commercial Client Cancel Stage**.

**Suppliers** — created and updated in Skills Workflow as Suppliers.

---

### Data Exchange (From Skills Workflow)

The following are sent to Media360:

| Document | What is sent |
| --- | --- |
| Services | The service catalogue maintained in Skills Workflow |
| Projects | Projects opened in Skills Workflow, with the code built from the company **Code** and **Code Letter** |
| Contracts | Contracts associated with those projects |
| Bills | Bills of the type configured in **Bill Document Type**, with their items |
| Client Credit Notes | Credit notes of the type configured in **Client Credit Note Document Type**, with their items |
| Supplier Invoices | Supplier invoices of the type configured in **Supplier Invoice Document Type**, with their items |
| Supplier Notes | Supplier notes of the type configured in **Supplier Note Document Type**, with their items |

After the first export pass, the integration runs a second pass over bills, client credit notes, supplier invoices and supplier notes to send **changes** made to documents that had already been exported. This means a document corrected in Skills Workflow after it was sent does not have to be corrected manually in Media360 as well.

The workflow state of exported documents is also kept aligned, so the financial status visible in Skills Workflow reflects what happened to the document downstream.

---

### Settings the Agency Controls

The integration is configured per company, from the integration settings area in Skills Workflow:

| Setting | What it does |
| --- | --- |
| Id | Identifier of this company in Media360 |
| Code | Company code used when building document codes |
| Code Letter | Letter used together with the code |
| Commercial Client Cancel Stage | Stage applied to commercial clients that Media360 deactivates |
| Bill Document Type | Which Skills Workflow document type is exported as a bill |
| Client Credit Note Document Type | Which document type is exported as a client credit note |
| Supplier Invoice Document Type | Which document type is exported as a supplier invoice |
| Supplier Note Document Type | Which document type is exported as a supplier note |
| Administrator Mail | Address that receives the error notifications for this company |
| Log Level Type | How much detail is written to the integration log |

---

### What the Agency Needs to Provide

- Access to the Media360 database, with a dedicated user for Skills Workflow.
- The Media360 identifier, code and code letter for each company.
- Confirmation of which Skills Workflow document types map to bills, client credit notes, supplier invoices and supplier notes.
- An administrator e-mail address to receive integration notifications.

---

### Monitoring and Error Handling

Every run writes to the integration log inside Skills Workflow, at the level of detail chosen in **Log Level Type**. The log is cleared at the start of each run, and records both the documents processed and the ones that failed.

A summary e-mail is sent to the address configured in **Administrator Mail**. A document that fails does not stop the run; the integration continues with the remaining documents and reports everything at the end.

---

### Good to Know

- Documents are matched by their Media360 identifier. It is stored on the Skills Workflow document and should not be edited manually.
- Only documents of the configured types are exported. If a new document type is introduced, the mapping has to be updated for it to be picked up.
- Master data flows only from Media360 into Skills Workflow; documents flow only from Skills Workflow into Media360.
