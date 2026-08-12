---
title: 'TOConline'
description: "TOConline is the certified online accounting and invoicing platform used by many agencies in Portugal."
sidebar_label: TOConline
---

:::caution Scope corrected against the Marketplace export
This page previously described a single bill-to-invoice flow. The exported package (Module `TOC Online`, 32 files / 30 distinct components) is considerably larger: it also issues **client credit notes** and **supplier invoices** to TOConline, and runs a **daily master-data sync** of clients, suppliers, services and taxes. The bill flow below is accurate and unchanged; the "Package Contents" and two new sections cover the rest.
:::

### Description

This article describes the integration between **TOConline** and `Skills Workflow`.

TOConline is the certified online accounting and invoicing platform used by many agencies in Portugal. This integration closes the last manual step in the billing cycle: once a bill has been approved in Skills Workflow, it is issued as an invoice in TOConline automatically, and the invoice number comes straight back onto the bill.

Without it, somebody re-keys every approved bill into the accounting platform — which is slow, error-prone, and leaves the two systems disagreeing about what has actually been invoiced. With it, approval *is* invoicing, and each bill in Skills Workflow carries the TOConline document number that corresponds to it.

The same approve-and-send pattern also applies to client credit notes and supplier invoices, and clients, suppliers, services and tax rates are kept in sync with TOConline in the background so the codes bills refer to stay current.

---

### Data Exchange Technology

The integration is delivered as a **Marketplace package**, not as a scheduled job. It is event-driven and runs the moment a bill is approved.

Skills Workflow authenticates against TOConline using **OAuth2**, with the agency's own application credentials. The credentials are held in a Skills Workflow configuration key, never inside the automation itself.

---

### What Triggers It

The integration fires on a single, deliberately narrow condition — a bill moving:

| From stage | To stage |
| --- | --- |
| Under Approval | Integrated |

Any other stage change on a bill is ignored. This means a bill is only ever issued once it has cleared approval, and moving a bill between other stages will never invoice it by accident.

---

### What Happens on Each Run

1. The bill's stage change fires the webhook.
2. Skills Workflow authenticates against TOConline.
3. The bill header and its lines are read from Skills Workflow.
4. The customer is read back from TOConline, to pick up the official tax and business name held there.
5. The invoice is created in TOConline.
6. The document number TOConline returns is written onto the bill in Skills Workflow, in the **External** field.

Step 6 is what makes the integration auditable: from the bill in Skills Workflow, anyone can see the exact invoice it produced.

---

### What Is Sent

**Invoice header**

| Sent to TOConline | Taken from |
| --- | --- |
| Document type | Always issued as an invoice (*FT*) |
| Date | The date the bill is integrated |
| Customer | The client's **TocOnlineClientCode** |
| Customer tax number | The customer record in TOConline |
| Customer business name | The customer record in TOConline |
| Due date | The bill's due date |
| Notes | The bill number, followed by the most recent brief on the document |
| External reference | The bill's *Your Reference* field |

**Invoice lines**

| Sent to TOConline | Taken from |
| --- | --- |
| Item code | The article's **TocOnlineServiceCode** |
| Description | The bill item description |
| Quantity | The bill item quantity |
| Unit price | The bill item unit price |
| Item type | Always sent as *Service* |

---

### What the Agency Needs to Provide

**A TOConline application** — client id, client secret, base URL, scope and callback URL, so Skills Workflow can authenticate. These are stored in a Skills Workflow configuration key.

**Two user fields, populated:**

| Field | On | Holds |
| --- | --- | --- |
| `TocOnlineClientCode` | Client | The client's customer id in TOConline |
| `TocOnlineServiceCode` | Article | The article's item code in TOConline |

These are the link between the two systems. A bill for a client without a `TocOnlineClientCode`, or containing an article without a `TocOnlineServiceCode`, cannot be issued — this is the most common cause of failures on this integration, and it is worth checking both are filled in before going live.

**Two workflow stages on the Bill document type**, named **Under Approval** and **Integrated**, since the trigger matches on those stages.

---

### Package Contents

Install the package from the Marketplace. As exported it contains three financial-document flows (Bill, Client Credit Note, Supplier Invoice), a daily master-data sync, and 21 supporting named queries — not just the bill flow.

| Flow | Webhook | Automation | Key Queries |
| --- | --- | --- | --- |
| Bill → Invoice | Toc Online - On Bill StageChanged (v2) | TocOnline - Integrate Bill (v4) | TocOnline-GetBillById, TocOnline-GetBillItemsById |
| Client Credit Note | Toc Online - On Client Credit Note Stage Changed (v2) | TocOnline- Integrate Credit Note (v3) | TocOnline-GetClientCreditNoteById, -ItemsById |
| Supplier Invoice | Toc Online - On Supplier Invoice Stage Changed (v1) | Toconline - Integrate Supplier Invoice (v2) | TocOnline-GetSupplierInvoiceById, -ItemsById |
| Master data (daily) | — (`TocOnline - Scheduler`, daily) | TocOnline - Clients (v2), Services (v1), Suppliers (v1) | TocOnline-GetBillingClient, -GetCommercialClient, -GetClient, -GetCommercialClientCompany, -GetLastTocOnlineClientCode, -GetArticle, -GetLastTocOnlineServiceCode, -GetSupplier, -GetLastTocOnlineSupplierCode |
| Taxes (on demand) | — | TocOnline - Taxes (v3) | TocOnline-GetTaxByExternalIdAndCompany, -GetCompanyByCode |
| Expense Item Types (on demand) | — | TocOnline - Expense Item Types (v2) | TocOnline-GetExpenseItemType, -GetLastTocOnlineExpenseItemCode |

Plus the configuration key holding the TOConline credentials (aliased `Config` across the automations, holding at least an `api` base URL).

---

### Client Credit Notes and Supplier Invoices

The same "approve → integrate" pattern used for bills applies to two more document types:

- **Client Credit Notes** — `Toc Online - On Client Credit Note Stage Changed` fires on the same New → Integrated transition as bills. `TocOnline- Integrate Credit Note` builds the credit note and its lines (`TocOnline-GetClientCreditNoteById`, `-ItemsById`) and sends them to TOConline (`POST {api}/api/commercial_sales_documents`, then `POST {api}/api/commercial_sales_document_lines` for the lines, with a `PATCH` variant also present for updates), writing the result back (`PATCH /api/client-credit-notes/{id}`).
- **Supplier Invoices** — `Toconline - Integrate Supplier Invoice` builds the invoice (`TocOnline-GetSupplierInvoiceById`, `-ItemsById`) and posts it to TOConline's purchases endpoint (`POST {api}/api/v1/commercial_purchases_documents`, then re-fetches it by id), writing the result back (`PATCH /api/supplier-invoices/{id}`).

:::caution Supplier Invoice webhook filter looks broken
`Toc Online - On Supplier Invoice Stage Changed`'s two filter conditions **both** check `fromWorkflowStageName` (one against `"Novo"`, one against `"Integrado"`), joined with `AND` — a single event can't have its `fromWorkflowStageName` equal to two different values at once, so as written this filter can never match anything. The second condition was most likely meant to check `toWorkflowStageName` instead. Until that's fixed, this webhook likely never fires.
:::

### Master Data Sync

`TocOnline - Clients`, `- Suppliers` and `- Services` each pull their respective list from TOConline (`GET {api}/api/customers`, `/api/suppliers`, `/api/services`), resolve each record against Skills Workflow (assigning the next `TocOnlineClientCode` / `TocOnlineSupplierCode` / `TocOnlineServiceCode` via the matching `GetLastTocOnline...Code` query when creating one), and create/update the corresponding billing client, commercial client, supplier or service — writing the assigned code back via `PUT /api/v3/documentUserFieldValues`.

`TocOnline - Scheduler` runs daily and enqueues `Clients`, `Suppliers` and `Services` as background work (confirmed by matching automation ids). `Clients` is additionally exported with its own daily scheduler active, so it currently runs both on its own schedule and via the orchestrator — likely redundant rather than harmful, since it looks up existing records before creating.

`TocOnline - Taxes` (pulls `GET {api}/api/taxes`, matches by external id and company, creates/updates `/api/v3/vats`) and `TocOnline - Expense Item Types` (pulls `GET {api}/api/expense_categories`) are on-demand and not part of the daily scheduler chain.

---

### Monitoring and Error Handling

Each execution is recorded in the automation's log inside Skills Workflow, including whether it succeeded.

If TOConline rejects the invoice, the bill keeps its stage and no document number is written back — so a failure is visible as a bill that reached *Integrated* without an External reference, rather than silently appearing to have been invoiced.

---

### Good to Know

- **The invoice date is the date the bill is integrated**, not the bill's own date. Approving a bill late means the invoice carries the later date.
- **Every line is issued as a service.** If the agency bills goods as well as services, they will still reach TOConline as service lines.
- **Only invoices are issued.** Credit notes and supplier documents are not covered by this package.
- The integration is one-way. Changing an invoice in TOConline does not update the bill in Skills Workflow, and re-approving a bill does not re-issue it.
