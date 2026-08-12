---
id: kamul
title: 'Kamul'
description: "Kamul is the agency's ERP — where the client and supplier ledgers are kept and where invoices and purchase orders are processed."
sidebar_label: Kamul
---

### Description

This article describes the integration between **Kamul** and `Skills Workflow`.

Kamul is the agency's ERP — where the client and supplier ledgers are kept and where invoices and purchase orders are processed. Skills Workflow is where the work is run and the documents originate.

The integration keeps the two aligned so that the commercial teams work in Skills Workflow and finance keeps working in Kamul, without anyone maintaining the same brand, client, product or supplier list twice.

It takes care of two jobs:

- **Bringing the master data in** — brands, clients, products and suppliers registered in Kamul are created and kept up to date in Skills Workflow every day.
- **Sending the documents out** — bills and purchase orders are submitted to Kamul, and the reference Kamul assigns is written back onto the document.

It also does something the other financial integrations do not: because Kamul does not always answer immediately, the integration **keeps checking back** on documents it has submitted but not yet had a decision on, and updates them once Kamul has processed them. Nothing is left in limbo waiting for someone to notice.

---

### Data Exchange Technology

The exchange runs over the Kamul web API, using addresses and credentials configured by the agency. No files and no locally installed application are required.

The integration runs on a **daily schedule** for the master data. A single scheduled run drives all four pulls in sequence — brands, clients, products and suppliers — each picking up what changed since the previous day.

Documents are submitted **as they become ready**, and the follow-up check on pending documents runs separately.

---

### Data Exchange (To Skills Workflow)

| Received from Kamul | Becomes in Skills Workflow |
| --- | --- |
| Brands | Brands |
| Clients | Commercial clients and billing clients, with their company link |
| Products | Commercial and billing products, with their company link |
| Suppliers | Suppliers |

New clients are also moved to their correct opening stage as they are created, so they arrive usable rather than in draft.

---

### Data Exchange (From Skills Workflow)

| Document | Sent to Kamul as |
| --- | --- |
| **Bill** | Invoice (*factura*) |
| **Purchase Order** | Purchase order (*orden de compra*) |

Each submitted document carries a Kamul reference from then on. Documents still awaiting a response are re-checked against Kamul and updated once a decision exists.

---

### What the Agency Needs to Provide

- **A Kamul account with API access**, plus the address and credentials for Skills Workflow.
- **Confirmation of the opening stage** new clients should be moved to as they are imported.
- **The document types** in Skills Workflow that correspond to bills and purchase orders for export.

---

### Good to Know

- **The master data refresh runs once a day**, so a client or supplier created in Kamul appears in Skills Workflow the following run rather than immediately.
- **Records are matched by their Kamul identifier**, stored on the Skills Workflow record.
- **Submitted documents are not fire-and-forget** — the pending check is what closes the loop, so a document with no reference yet is not necessarily lost.

---

### Technical Reference

#### Components

| Name | Type | Version | Stage | Role |
| --- | --- | --- | --- | --- |
| Kamul-Integration Schedule | Automation | 2 | Active | Daily: enqueues the Brands/Clients/Products/Suppliers refreshes |
| Kamul-Brands | Automation | 2 | Active (own scheduler disabled — see below) | Pulls brands changed in Kamul |
| Kamul-Clients | Automation | 3 | Active (own scheduler disabled — see below) | Pulls clients changed in Kamul, and transitions new ones to the right stage |
| Kamul-Products | Automation | 3 | Active (own scheduler disabled — see below) | Pulls products changed in Kamul |
| Kamul-Suppliers | Automation | 3 | Active (own scheduler disabled — see below) | Pulls suppliers changed in Kamul |
| Kamul-Bill | Automation | 3 | Active | Sends a bill to Kamul as an invoice ("factura") |
| Kamul-PurchaseOrder | Automation | 2 | Active | Sends a purchase order to Kamul ("ordencompra") |
| Kamul-UpdatePendingDocuments | Automation | 1 | Active | Checks Kamul for the status of bills/purchase orders still pending and patches them |
| Kamul-GetBrand, Kamul-GetClient, Kamul-GetProduct, Kamul-GetSupplier | Query | 1–3 | Active | Resolve existing records for each master-data sync |
| Kamul-GetClientTransitionByName | Query | 1 | Active | Resolves the workflow transition to apply to a newly created client |
| Kamul-GetStageByName | Query | 1 | Active | Resolves a workflow stage by name — not called by any automation in this export |
| Kamul-BillById | Query | 5 | Active | Builds the outbound payload for a bill |
| Kamul-PurchaseOrderById | Query | 2 | Active | Builds the outbound payload for a purchase order |
| Kamul-DocumentsPending | Query | 1 | Active | Lists bills/purchase orders still awaiting a Kamul response |

Source: `[Kamul] [Integrations] Integration Schedule v2 (Automation) {Active}.json`, `[Kamul] [Integrations] Brands v2 (Automation) {Active}.json`, `[Kamul] [Integrations] Clients v3 (Automation) {Active}.json`, `[Kamul] [Integrations] Products v3 (Automation) {Active}.json`, `[Kamul] [Integrations] Suppliers v3 (Automation) {Active}.json`, `[Kamul] [Integrations] Bill v3 (Automation) {Active}.json`, `[Kamul] [Integrations] Purchase Order v2 (Automation) {Active}.json`, `[Kamul] [Integrations] Update Pending Documents v1 (Automation) {Active}.json`, and the named queries above.

:::info Individual schedulers are off, but the daily sync still runs
`Kamul-Brands`, `Kamul-Clients`, `Kamul-Products` and `Kamul-Suppliers` are each exported with their own scheduler `isActive: false` — but `Kamul-Integration Schedule`'s scheduler **is** active, runs daily, and enqueues all four directly by automation id with `since: yesterday`. So the daily master-data sync is live; only each automation's own (now-redundant) standalone schedule is switched off, most likely because they were consolidated under the single orchestrator.
:::

#### How It Works

1. `Kamul-Integration Schedule` runs daily and enqueues `Kamul-Brands`, `Kamul-Clients`, `Kamul-Products`, `Kamul-Suppliers` as background work, each with `since: <yesterday>`.
2. Each pull calls a Kamul export endpoint (`GET {host}/api/exportdata/marcaget|entidadget|productoget?fecha=...`, entities filtered by `IDTipoEntidad=CLT` for clients / `PRV` for suppliers), resolves each record against Skills Workflow (`Kamul-GetBrand` / `Kamul-GetClient` / `Kamul-GetProduct` / `Kamul-GetSupplier`), and creates or updates it. New clients are also transitioned to the right stage via `Kamul-GetClientTransitionByName`.
3. `Kamul-Bill` and `Kamul-PurchaseOrder`, triggered on demand, build the outbound payload (`Kamul-BillById` / `Kamul-PurchaseOrderById`, plus an ISO currency-code lookup), send it to Kamul (`POST {host}/api/integraptos/factura` or `.../ordencompra`), and write the result back onto the document.
4. `Kamul-UpdatePendingDocuments`, triggered on demand, runs `Kamul-DocumentsPending` to find bills/purchase orders still waiting, re-queries Kamul for each by its external id (`GET .../integraptos/factura?PresupuestoID=...&OrigenDatos=Skills`, `.../ordencompra?OrdenCompraID=...`), and patches the document (`PATCH /api/bills/{id}`, `PATCH /api/purchase-orders/{id}`) once Kamul has an answer.

#### External System Contact Points

- Kamul API (`{host}` / `{hostUat}` from a `Config` configuration key — note `Kamul-PurchaseOrder` and `Kamul-UpdatePendingDocuments` use `hostUat`, suggesting purchase orders and status polling may run against a UAT/test Kamul environment rather than production; see Open Questions): `GET /api/exportdata/marcaget`, `.../entidadget`, `.../productoget`; `POST /api/integraptos/factura`, `.../ordencompra`; `GET /api/integraptos/factura`, `.../ordencompra` (status polling).
- Skills Workflow's own API/analytics: the named queries above; `POST /api/v3/brands`, `POST /api/v3/commercial-clients`, `POST /api/v3/billing-clients`, `POST /api/v3/commercial-client-companies`, `POST /api/v3/commercial-products`, `POST /api/v3/billing-products`, `POST /api/v3/commercial-product-companies`, `POST /api/v3/suppliers`, `PATCH /api/bills/{id}`, `PATCH /api/purchase-orders/{id}`; `GET /api/v3/iso-codes/lookup`.

#### Configuration

- A `Config` configuration key — holds Kamul's `host`, `hostUat` and credentials. Values are not part of the export.

#### Open Questions

- `Kamul-PurchaseOrder` and `Kamul-UpdatePendingDocuments` call `Config.hostUat` while the master-data pulls and `Kamul-Bill` call `Config.host` — whether this is intentional (a genuinely separate UAT integration for those flows) or a leftover from testing is not determinable from the export.
- `Kamul-GetStageByName` isn't called by any exported automation.
