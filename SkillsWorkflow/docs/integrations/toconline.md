---
title: 'TOConline'
sidebar_label: TOConline
---

### Description

This article describes the integration between **TOConline** and `Skills Workflow`.

TOConline is the certified online accounting and invoicing platform used by many agencies in Portugal. This integration closes the last manual step in the billing cycle: once a bill has been approved in Skills Workflow, it is issued as an invoice in TOConline automatically, and the invoice number comes straight back onto the bill.

Without it, somebody re-keys every approved bill into the accounting platform — which is slow, error-prone, and leaves the two systems disagreeing about what has actually been invoiced. With it, approval *is* invoicing, and each bill in Skills Workflow carries the TOConline document number that corresponds to it.

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

Install the package from the Marketplace. It contains:

| Item | Purpose |
| --- | --- |
| Webhook | Fires when a bill moves from Under Approval to Integrated |
| Automation Workflow | Authenticates, gathers the data, issues the invoice and writes the number back |
| Named Query — bill | Retrieves the bill header |
| Named Query — bill items | Retrieves the bill lines |

Plus the configuration key holding the TOConline credentials.

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
