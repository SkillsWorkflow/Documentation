---
id: adnet
title: 'AdnNet'
sidebar_label: AdnNet
---

### Description

This article describes the integration between **AdnNet** and `Skills Workflow`.

AdnNet is the agency's administrative and financial back office. The integration keeps the two systems aligned so that the commercial teams work in Skills Workflow and the finance teams keep working in AdnNet, without anyone having to retype the same client, supplier, job or invoice twice.

In practice, the integration takes care of two jobs:

- **Bringing the master data in** — clients and suppliers that already exist in AdnNet are created and kept up to date in Skills Workflow.
- **Sending the operation out** — jobs, bills and supplier invoices approved in Skills Workflow are pushed into AdnNet so that finance can invoice and pay from them.

---

### Data Exchange Technology

The exchange runs over the AdnNet web API. Skills Workflow authenticates with a login and an API key configured by the agency, and then calls AdnNet directly. No files, no FTP servers and no locally installed application are required.

The integration runs on a schedule, company by company. Each company configured on the agency's tenant is processed independently, with its own AdnNet credentials and its own settings.

On the very first run for a company, the integration pulls the last month of client and supplier data from AdnNet. From then on it only picks up what changed since the previous successful run.

---

### Data Exchange (To Skills Workflow)

The following records are received from AdnNet:

**Clients**

Clients registered in AdnNet are created and updated in Skills Workflow as:

- Billing Clients
- Commercial Clients — only when the **Create Commercial Client** setting is enabled
- The link between a Commercial Client and the company it belongs to

Client records include the legal and trading names, tax identification, addresses (both the main address and the billing address), city, state, postal code, country, e-mail and the active/inactive status held in AdnNet. Cities and countries are matched against the ones already registered in Skills Workflow.

**Suppliers**

Suppliers registered in AdnNet are created and updated in Skills Workflow as Suppliers, with the same identification and address information.

Records already imported keep their AdnNet identifier, so subsequent runs update the existing record instead of creating a duplicate.

---

### Data Exchange (From Skills Workflow)

The following documents are sent to AdnNet:

**Projects → Jobs**

Projects created in Skills Workflow are opened as jobs in AdnNet. The job number returned by AdnNet is written back onto the project in Skills Workflow, so both systems share the same reference.

**Bills → Invoice orders**

Bills issued in Skills Workflow are sent to AdnNet as invoice orders, against the job created in the previous step. Only bills of the document type configured in **Bill Document Type** are exported.

**Supplier Invoices → Checkings**

Supplier invoices registered in Skills Workflow are sent to AdnNet. Only supplier invoices of the document type configured in **Supplier Invoice Document Type** are exported.

Each document that is successfully exported is marked as synchronised, so it is not sent again on the next run.

---

### Settings the Agency Controls

The integration is configured per company, from the integration settings area in Skills Workflow:

| Setting | What it does |
| --- | --- |
| Url | Address of the agency's AdnNet API |
| Login | User the integration authenticates with in AdnNet |
| Api Key | Key used together with the login |
| Create Commercial Client | Whether clients imported from AdnNet should also be created as Commercial Clients |
| Bill Document Type | Which Skills Workflow document type is treated as a bill for export |
| Supplier Invoice Document Type | Which Skills Workflow document type is treated as a supplier invoice for export |
| Administrator Mail | Address that receives the error notifications for this company |
| Log Level Type | How much detail is written to the integration log |

---

### What the Agency Needs to Provide

- A reachable AdnNet API address, plus a dedicated login and API key for Skills Workflow.
- Confirmation of which document types in Skills Workflow correspond to bills and to supplier invoices.
- An administrator e-mail address to receive integration notifications.

---

### Monitoring and Error Handling

Every run writes to the integration log inside Skills Workflow, at the level of detail chosen in **Log Level Type**. The log is cleared at the start of each run, so it always reflects the most recent execution.

If anything fails — a record that could not be created, a document AdnNet rejected, or a connectivity problem — a summary e-mail is sent to the address configured in **Administrator Mail**. A failure on one record does not stop the rest of the run: the integration continues and reports everything that went wrong at the end.

---

### Good to Know

- Records are matched by their AdnNet identifier, which is stored on the Skills Workflow record. Changing that identifier manually will cause duplicates.
- Documents are only exported once. If a document needs to be re-sent, the synchronisation mark has to be cleared first.
- Each company runs with its own credentials and its own settings, so different companies on the same tenant can point at different AdnNet environments.
