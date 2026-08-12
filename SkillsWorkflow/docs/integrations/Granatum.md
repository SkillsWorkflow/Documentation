---
id: granatum
title: 'Granatum'
description: "Granatum is the agency's financial management platform — where cash flow is planned and where money in and money out is recorded against cost and profit…"
sidebar_label: Granatum
---

### Description

This article describes the integration between **Granatum** and `Skills Workflow`.

Granatum is the agency's financial management platform — where cash flow is planned and where money in and money out is recorded against cost and profit centres. Skills Workflow is where the work that generates that money is run.

The integration keeps the two aligned so that the commercial teams work in Skills Workflow and the finance team keeps working in Granatum, without anyone retyping the same client, supplier or document twice.

In practice it takes care of two jobs:

- **Bringing the master data in** — clients, suppliers and cost/profit centres that already exist in Granatum are created and kept up to date in Skills Workflow, so documents are raised against the records finance actually uses.
- **Posting the financials out** — once a bill or purchase order is approved, it is written into Granatum as a financial entry (*lançamento*), and the reference Granatum assigns is stored back on the document.

The result is that approval is posting. Finance stops re-keying approved documents, and every document in Skills Workflow carries the Granatum entry it produced — so anyone can trace one to the other without opening both systems.

---

### Data Exchange Technology

The exchange runs over the Granatum web API, using an address and access token configured by the agency. No files and no locally installed application are required.

The two directions work differently:

- **Posting documents out is event-driven** — it fires when the document reaches the stage that means it is ready.
- **Pulling master data in is an on-demand batch**, run when the agency needs to refresh it.

---

### Data Exchange (To Skills Workflow)

| Received from Granatum | Becomes in Skills Workflow |
| --- | --- |
| Clients | Commercial clients and billing clients, with the link to their company |
| Suppliers | Suppliers |
| Cost and profit centres | Commercial products |

Records already imported keep their Granatum identifier, so subsequent runs update the existing record instead of creating a duplicate.

---

### Data Exchange (From Skills Workflow)

**Bills and Purchase Orders → Lançamentos (financial entries)**

When a bill or a purchase order changes stage, it is sent to Granatum as a financial entry and the result is written back onto the document.

The same mechanism serves both document types, so money owed to the agency and money the agency owes are posted the same way.

---

### What the Agency Needs to Provide

- **A Granatum account with API access**, plus the address and access token for Skills Workflow.
- **Cost and profit centre codes** on the client records that should map to Granatum's.
- **The stage** on the Bill and Purchase Order document types that means "ready to post", since reaching it is what triggers the hand-off.

---

### Good to Know

- **Master data flows in, documents flow out.** Granatum owns the client, supplier and cost-centre lists; Skills Workflow owns the documents.
- **Documents are linked by the Granatum entry reference** stored on them after a successful post.
- The master-data refresh is run on demand rather than on a fixed schedule, so it is worth re-running it after a batch of new clients or suppliers is set up in Granatum.

---

### Technical Reference

#### Components

| Name | Type | Version | Stage | Role |
| --- | --- | --- | --- | --- |
| Granatum-Lancamentos | Automation | 1 | Active | Posts a Bill or Purchase Order to Granatum as a financial entry and links it back |
| Granatum-Bill-Stage | Webhook | 1 | Active | Fires `Granatum-Lancamentos` when a Bill's stage changes |
| Granatum-PurchaseOrder-Stage | Webhook | 1 | Active | Fires `Granatum-Lancamentos` when a Purchase Order's stage changes |
| Granatum-Clients | Automation | 1 | Active | Pulls clients from Granatum and creates/updates the matching commercial and billing clients |
| Granatum-Suppliers | Automation | 1 | Active | Pulls suppliers from Granatum |
| Granatum-Products | Automation | 1 | Active | Pulls cost/profit centers from Granatum as commercial products |
| Granatum-Client | Query | 1 | Active | Resolves an existing client for the Clients sync |
| Granatum-Supplier | Query | 1 | Active | Resolves an existing supplier for the Suppliers sync |
| Granatum-CentroCustosLucro | Query | 1 | Active | Lists clients' cost/profit-center codes to resolve against Granatum |
| Granatum-GetLancamentoById | Query | 1 | Active | Builds the financial-entry payload for a Bill or Purchase Order |
| Granatum-GetBillItemById | Query | 1 | Active | Resolves a bill item's data (article, VAT) — not called by any automation in this export |

Source: `[Granatum] [Integrations] Lancamentos v1 (Automation) {Active}.json`, `[Granatum] [Integrations] Bill Stage v1 (Webhook) {Active}.json`, `[Granatum] [Integrations] Purchase Order Stage v1 (Webhook) {Active}.json`, `[Granatum] [Integrations] Clients v1 (Automation) {Active}.json`, `[Granatum] [Integrations] Suppliers v1 (Automation) {Active}.json`, `[Granatum] [Integrations] Products v1 (Automation) {Active}.json`, and the named queries above.

#### How It Works

**Posting a financial entry** (webhook-triggered, confirmed by matching automation id `60d2e209-40d5-4309-a7e2-286c93628daf`): either webhook fires `Granatum-Lancamentos` on a `StageUpdated` event for a `Bill` or `PurchaseOrder`. The automation runs `Granatum-GetLancamentoById` to build the entry, `POST`s it to Granatum (`{host}/v1/lancamentos?access_token=...`), and patches the source document with the result (`PATCH /api/bill/{id}` or `PATCH /api/purchase-orders/{id}` depending on which fired it).

**Syncing master data** (all on-demand — no scheduler and no webhook in this export triggers them):
- `Granatum-Clients`: `GET {host}/v1/clientes` from Granatum, resolves each against `Granatum-Client`, and creates/updates the commercial client, billing client and their company link (`POST /api/v3/commercial-clients`, `POST /api/v3/billing-clients`, `POST /api/v3/commercial-client-companies`, or the matching `PATCH`es on update).
- `Granatum-Suppliers`: `GET {host}/v1/fornecedores`, resolved against `Granatum-Supplier`, `POST /api/v3/suppliers`.
- `Granatum-Products`: resolves each client's cost/profit-center code (`Granatum-CentroCustosLucro`), fetches it from Granatum (`GET {host}/v1/centros_custo_lucro/{code}`), and creates it as a commercial product (`POST /api/v3/commercial-products`).

#### External System Contact Points

- Granatum API (`{host}` from the `Config` configuration key, token as an `access_token` query parameter): `GET /v1/clientes`, `GET /v1/fornecedores`, `GET /v1/centros_custo_lucro/{id}`, `POST /v1/lancamentos`.
- Skills Workflow's own API/analytics: named queries `Granatum-Client`, `Granatum-Supplier`, `Granatum-CentroCustosLucro`, `Granatum-GetLancamentoById`; `POST /api/v3/commercial-clients`, `POST /api/v3/billing-clients`, `POST /api/v3/commercial-client-companies`, `POST /api/v3/suppliers`, `POST /api/v3/commercial-products`, `PATCH /api/bill/{id}`, `PATCH /api/purchase-orders/{id}`.

#### Configuration

- A `Config` configuration key (exact name not confirmed beyond the `Config` alias used in the automations) — holds Granatum's `host` and `access_token`. Values are not part of the export.

#### Open Questions

- What triggers `Granatum-Clients`, `Granatum-Suppliers` and `Granatum-Products` (a schedule configured outside the exported JSON, or a manual action) is not determinable from the export.
- `Granatum-GetBillItemById` isn't called by any exported automation — whether it's used by a component outside this export or is unused isn't determinable.
