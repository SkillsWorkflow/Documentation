---
id: jasmin
title: 'Jasmin'
description: "Jasmin is Primavera BSS's cloud accounting platform — the agency's ERP, where the books are kept and where invoices, credit notes and purchase documents are…"
sidebar_label: Jasmin
---

### Description

This article describes the integration between **Jasmin** and `Skills Workflow`.

Jasmin is Primavera BSS's cloud accounting platform — the agency's ERP, where the books are kept and where invoices, credit notes and purchase documents are legally issued. Skills Workflow is where the work those documents are for is planned, delivered and approved.

This is one of the widest financial integrations in the platform. It covers the full document cycle in both directions, so the operational teams work in Skills Workflow and finance keeps working in Jasmin, with neither side retyping the other's data.

In practice it takes care of two jobs:

- **Bringing the accounting foundation in** — clients, suppliers, currencies, payment terms, taxes, countries, sales items and purchase items are pulled from Jasmin, so that everything raised in Skills Workflow uses the same codes finance will post against.
- **Issuing the documents out** — approved bills, purchase orders and supplier invoices are created in Jasmin, and the reference Jasmin assigns is written back onto the Skills Workflow document.

That last point is what makes the cycle auditable: from any document in Skills Workflow, anyone can see exactly which Jasmin document it produced, without opening the ERP.

---

### Data Exchange Technology

The exchange runs over the Jasmin web API. Skills Workflow authenticates with the agency's own application credentials and then calls Jasmin directly. No files and no locally installed application are required.

The integration is **multi-company aware**: a Skills Workflow company maps to a particular Jasmin account and subscription, so a group running several companies can post each one's documents into its own set of books.

The two directions work differently:

- **Clients and suppliers are pulled daily**, picking up whatever was created in Jasmin since the previous day.
- **The remaining reference data** (countries, currencies, payment terms, taxes, sales and purchase items, credit-note reasons) is refreshed on demand.
- **Documents are issued as they are approved**, event-driven, not on a schedule.

---

### Data Exchange (To Skills Workflow)

| Received from Jasmin | Becomes in Skills Workflow |
| --- | --- |
| Customers | Billing clients and commercial clients, with their company link |
| Suppliers | Suppliers |
| Countries, currencies, payment terms | The matching reference records |
| Taxes | VAT rates |
| Sales items | Services |
| Purchase items | Expense item types |
| Memo reasons | Credit-note reversal reasons |

---

### Data Exchange (From Skills Workflow)

| Document | Sent to Jasmin as | When |
| --- | --- | --- |
| **Bill** | Invoice | The bill moves from *Under Approval* to *Integrada* |
| **Supplier Invoice** | Purchase invoice | The supplier invoice moves from *Novo* to *Integrado* |
| **Purchase Order** | Purchase order | The purchase order is created |
| **Client Credit Note** | Credit memo | *Currently switched off — see below* |

Every document is confirmed by reading it back from Jasmin after it is created, and the resulting reference is stored on the Skills Workflow document.

:::caution Client credit notes are not currently being sent
The credit-note flow is fully built, but the trigger that fires it is switched off in this configuration, so approved client credit notes do not reach Jasmin today. Everything else is unaffected.
:::

---

### What the Agency Needs to Provide

- **A Jasmin subscription with API access**, plus the application credentials for Skills Workflow to authenticate with.
- **The Jasmin account and subscription** each Skills Workflow company should post into.
- **The approval stages** listed above on the Bill and Supplier Invoice document types, since reaching them is what issues the document.

---

### Good to Know

- **Documents are only issued once they have cleared approval.** Moving a document between other stages never issues it by accident.
- **The reference data has to come in before documents go out** — a bill can only be issued against clients, taxes and items that Jasmin already knows.
- **Each company posts into its own Jasmin books**, so the same tenant can serve several legal entities.
- The integration is one-way per document: changing an invoice in Jasmin does not update the bill in Skills Workflow.

---

### Technical Reference

#### Components

| Flow | Webhook | Automation | Key Queries |
| --- | --- | --- | --- |
| Bill → Invoice | Jasmin-OnInvoiceStageUpdated (v3, Active) | Jasmin-Integrate Invoice (v14) | Jasmin-GetBill, Jasmin-GetBillItems |
| Client Credit Note | Jasmin-OnCreditNoteCreated (v4, **Disabled**) | Jasmin-IntegrateCreditNote (v9) | Jasmin-GetCreditNote, -Items |
| Supplier Invoice | Jasmin-OnSupplierInvoiceUpdated (v1, Active) | Jasmin-Integrate Supplier Invoice (v4) | Jasmin-GetSupplierInvoice, -Items |
| Purchase Order | Jasmin-OnPurchaseOrderCreated (v3, Active) | Jasmin-Integrate Purchase Order (v4) | Jasmin-GetPurchaseOrder, -Items |

| Master data | Trigger | Automation | Key Queries |
| --- | --- | --- | --- |
| Customers | Daily | Jasmin - Customers (v6) | Jasmin-GetCompanies, -GetBillingClient, -GetCommercialClient, -GetClient |
| Suppliers | Daily | Jasmin - Suppliers (v8) | Jasmin-GetSuppliers |
| Countries | On demand | Jasmin - Countries (v2) | — |
| Currencies / Payment Conditions / Taxes | On demand | Jasmin- Currency PaymentCondition Tax (v5) | Jasmin-GetCurrencies, -GetPaymentConditions, -GetTaxes |
| Sales Items (services) | On demand | Jasmin - SalesItems (v4) | Jasmin-GetSalesItems |
| Purchase Items (expense types) | On demand | Jasmin - PurchaseItems (v2) | Jasmin-GetPurchaseItems, custom table `JasminTaxSchema` |
| Reversal Reasons | On demand | Jasmin - ReversalReason (v2) | Jasmin-GetMemoReasons |

Plus **setup/plumbing**: `Jasmin - Initial Configuration` (creates the custom fields this package needs, `POST /api/v3/document-user-fields`), `Jasmin-CreateTaxSchemaCustomTable` (creates the `JasminTaxSchema` custom table), `Jasmin-OauthClientCredentials` (shared OAuth2 client-credentials token helper), `Jasmin-WebhookEndpoint` and `Jasmin - Webhook Received` (a no-op stub and a generic event-type dispatcher respectively — neither is wired to a webhook in this export), and named query `Jasmin-DocumentsNotSettled` (lists bills/expenses/supplier invoices not yet settled — not called by any exported automation).

Source: files under `[Jasmin] [Integrations] ...` in the Marketplace export (43 files, 42 distinct components after de-duplicating one attachment pair).

:::caution Client Credit Note integration is switched off
`Jasmin-OnCreditNoteCreated` is exported with `"active": false` — its target automation, `Jasmin-IntegrateCreditNote`, exists and is Active, but nothing currently triggers it (confirmed: the webhook's `automationId` matches `Jasmin-IntegrateCreditNote`'s own id exactly). As exported, client credit notes are not sent to Jasmin.
:::

#### How It Works

Every Jasmin-calling automation gets an OAuth2 client-credentials token first (`POST https://identity.primaverabss.com/connect/token`) before calling the Jasmin API at `{Config.host}/{account}/{subscription}/...` (account/subscription resolved per-document from the query results, since a company can map to a different Jasmin account/subscription).

**Financial documents** (all four follow the same shape): the webhook fires on the approval transition (Bill: Under Approval → "Integrada"; Supplier Invoice: "Novo" → "Integrado"; Credit Note and Purchase Order: on creation) and calls the matching `Jasmin-Integrate ...` automation, which builds the document + line items from two named queries, `POST`s it to the relevant Jasmin endpoint (`billing/invoices`, `billing/memos`, `invoiceReceipt/invoices`, `purchases/orders`), re-fetches it by the returned id to confirm, and patches the Skills Workflow document with the Jasmin reference (`PATCH /api/bills/{id}`, `/api/client-credit-notes/{id}`, `/api/supplier-invoices/{id}`, `/api/purchase-orders/{id}`).

**Master data**: `Jasmin - Customers` and `Jasmin - Suppliers` run daily, pulling everything created since yesterday from Jasmin (`salesCore/customerParties/odata`, `purchasesCore/supplierParties/odata`, both `$filter`ed by `CreatedOn` and iterated per company via `Jasmin-GetCompanies`), resolving and creating/updating the matching billing client, commercial client (+ company link) or supplier. The remaining master-data automations (`Countries`, `Currency PaymentCondition Tax`, `SalesItems`, `PurchaseItems`, `ReversalReason`) are on-demand pulls of Jasmin reference data (`corePatterns/countries`, `corePatterns/currencies`, `financialCore/paymentTerms`, `taxesCore/taxTypeCodes`, `salesCore/salesItems`, `purchasesCore/purchasesItems`, `logisticsCore/memoReasons`, all via OData), each resolved and created in Skills Workflow (`/api/v3/countries`, `/api/v3/currencies`, `/api/v3/payment-conditions`, `/api/vats`, `/api/v3/services`, `/api/expense-item-types`, `/api/reversal-reasons`).

#### External System Contact Points

- Jasmin identity: `POST https://identity.primaverabss.com/connect/token` (OAuth2 client credentials).
- Jasmin API (`{Config.host}/{account}/{subscription}/...`): `salesCore/customerParties/odata`, `purchasesCore/supplierParties/odata`, `corePatterns/countries/odata`, `corePatterns/currencies/odata`, `financialCore/paymentTerms/odata`, `taxesCore/taxTypeCodes/odata`, `salesCore/salesItems/odata`, `purchasesCore/purchasesItems/odata`, `taxesCore/itemTaxSchemas/{id}`, `logisticsCore/memoReasons/odata`, `billing/invoices`, `billing/memos`, `invoiceReceipt/invoices`, `purchases/orders`.
- Skills Workflow's own API/analytics: the named queries listed above; `POST /api/v3/billing-clients`, `/api/v3/commercial-clients`, `/api/v3/commercial-client-companies`, `/api/v3/suppliers`, `/api/v3/countries`, `/api/v3/currencies`, `/api/v3/payment-conditions`, `/api/vats`, `/api/v3/services`, `/api/expense-item-types`, `/api/reversal-reasons`, `/api/v3/document-user-fields`, `/api/v3/custom-tables/...`.

#### Configuration

- A `Config` configuration key — holds Jasmin's `host` and OAuth client credentials. Values are not part of the export.
- Custom table **`JasminTaxSchema`** — caches Jasmin tax-schema lookups used when resolving purchase item taxes.

#### Open Questions

- Whether disabling the Credit Note webhook was intentional (e.g. credit notes are handled another way) or an oversight is not determinable from the export.
- `Jasmin-WebhookEndpoint` is a no-op (Start → Exit with nothing in between) and `Jasmin - Webhook Received` is a generic dispatcher — neither has a matching webhook file in this export, so what (if anything) currently calls them isn't determinable.
- `Jasmin-DocumentsNotSettled` isn't called by any exported automation.
