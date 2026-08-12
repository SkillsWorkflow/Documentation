---
id: wk-radar
title: 'WK Radar'
description: "WK Radar is the agency's ERP — where the client and supplier ledgers live and where sales and purchase orders are processed."
sidebar_label: WK Radar
---

### Description

This article describes the integration between **WK Radar** and `Skills Workflow`.

WK Radar is the agency's ERP — where the client and supplier ledgers live and where sales and purchase orders are processed. Skills Workflow is where the work is run and the documents originate.

The integration keeps the two aligned so that the commercial teams work in Skills Workflow and finance keeps working in WK Radar, without either side maintaining the other's lists.

It takes care of two jobs:

- **Bringing the master data in** — active clients, suppliers and services registered in WK Radar are created and kept up to date in Skills Workflow every day, so documents are raised against records finance recognises.
- **Sending the documents out** — bills and supplier invoices are registered in WK Radar as sales and purchase orders, and the reference WK Radar assigns is written back onto the document.

---

### Data Exchange Technology

The exchange runs over the WK Radar web API. Skills Workflow authenticates for a token and then calls WK Radar directly. No files and no locally installed application are required.

The master data is refreshed on a **daily schedule**, which pulls suppliers, clients and services in sequence. To avoid missing late edits, each run looks back further than a single day rather than only at the previous 24 hours.

Documents are sent **as they are approved**, not on a schedule.

---

### Data Exchange (To Skills Workflow)

| Received from WK Radar | Becomes in Skills Workflow |
| --- | --- |
| Active clients | Billing clients |
| Active suppliers | Suppliers |
| Services | Services |

Only records marked active in WK Radar are imported, so retired clients and suppliers do not reappear.

---

### Data Exchange (From Skills Workflow)

| Document | Sent to WK Radar as |
| --- | --- |
| **Bill** | Sales order (*pedido*) |
| **Supplier Invoice** | Purchase order (*ordem de compra*) |

The reference WK Radar returns is stored on the Skills Workflow document.

:::caution Bill hand-off is not currently active
The bill flow is fully built, but the trigger that fires it is switched off in this configuration, so approved bills do not currently reach WK Radar on their own. The supplier invoice flow and the daily master-data refresh are unaffected.
:::

---

### What the Agency Needs to Provide

- **A WK Radar account with API access**, plus the address and credentials for Skills Workflow.
- **The stages** on the Bill and Supplier Invoice document types that mean "approved and ready to register".
- **Client and supplier records carrying their WK Radar identifiers**, so documents resolve to the right ledger entries.

---

### Good to Know

- **The daily refresh looks back more than one day**, so a record edited in WK Radar after that day's run has already completed is still picked up.
- **Only active records are imported** — inactive clients and suppliers in WK Radar are left out by design.
- **Documents are matched by their WK Radar reference**, stored on the Skills Workflow document after a successful registration.

---

### Technical Reference

#### Components

| Name | Type | Version | Stage | Role |
| --- | --- | --- | --- | --- |
| WKRadar-ScheduledUpdate | Automation | 2 | Active | Daily: enqueues the Suppliers/Clients/Services refreshes |
| WKRadar-Authenticate | Automation | 2 | Active | Shared helper: gets a WK Radar API token |
| WKRadar-Clients | Automation | 2 | Active | Pulls active clients changed since a given date from WK Radar |
| WKRadar-Suppliers | Automation | 2 | Active | Pulls active suppliers changed since a given date |
| WKRadar-Services | Automation | 2 | Active | Pulls services from WK Radar |
| WKRadar-IntegrateBill | Automation | 2 | Active | Sends a bill to WK Radar as a sales order ("Pedido") |
| WKRadar-BillStageChanged | Webhook | 1 | **Disabled** (`active: false`) | Would fire `WKRadar-IntegrateBill` on a Bill reaching "Integrated" — currently off, and its URL points at a `playground-dev` tenant |
| WKRadar-IntegrateSupplierInvoice | Automation | 1 | Active | Sends a supplier invoice to WK Radar as a purchase order |
| WKRadar-GetClient | Query | 2 | Active | Resolves an existing client for the Clients sync |
| WKRadar-GetSupplier | Query | 2 | Active | Resolves an existing supplier for the Suppliers sync |
| WKRadar-GetService | Query | 2 | Active | Resolves an existing service for the Services sync |
| WKRadar-GetBillById | Query | 3 | Active | Builds the outbound payload for a bill |
| WKRadar-GetSupplierInvoiceById | Query | 1 | Active | Builds the outbound payload for a supplier invoice |

Source: `[WK Radar] [Integrations] WKRadar-ScheduledUpdate v2 (Automation) {Active}.json`, `[WK Radar] [Integrations] WKRadar-Authenticate v2 (Automation) {Active}.json`, `[WK Radar] [Integrations] WKRadar-Clients v2 (Automation) {Active}.json`, `[WK Radar] [Integrations] WKRadar-Suppliers v2 (Automation) {Active}.json`, `[WK Radar] [Integrations] WKRadar-Services v2 (Automation) {Active}.json`, `[WK Radar] [Integrations] WKRadar-IntegrateBill v2 (Automation) {Active}.json`, `[WK Radar] [Integrations] WKRadar-BillStageChanged v1 (Webhook) {Active}.json`, `[WK Radar] [Integrations] WKRadar-IntegrateSupplierInvoice v1 (Automation) {Active}.json`, and the named queries above.

#### How It Works

1. `WKRadar-ScheduledUpdate` runs daily, computes a date 10 days before yesterday, and enqueues `WKRadar-Suppliers`, `WKRadar-Clients` and `WKRadar-Services` as background work with that date.
2. Each pull authenticates via `WKRadar-Authenticate` (`POST {host}/wk.api/api/v1/token`), calls the matching WK Radar endpoint (`GET /wk.api/api/empresarial/v1/cliente|fornecedor|servico`, filtered by change date and `Situacao=Ativo` for clients/suppliers), resolves each record against Skills Workflow (`WKRadar-GetClient` / `WKRadar-GetSupplier` / `WKRadar-GetService`), and creates or updates it.
3. `WKRadar-IntegrateBill` runs `WKRadar-GetBillById`, then `POST {host}/RadarWebWebServices/Areas/comercial/Comercial.svc/json/GravarPedido` to record the sales order, and patches the bill (`PATCH /api/bills/{id}`) with the result. It's designed to be webhook-triggered (its body shape expects `event.documentId.id`), but the only matching webhook in the export, `WKRadar-BillStageChanged`, is disabled.
4. `WKRadar-IntegrateSupplierInvoice` follows the same pattern for purchase orders (`WKRadar-GetSupplierInvoiceById`, `POST {host}/api/compras/v1/ordem-compra`, `PATCH /api/supplier-invoices/{id}`) — no webhook for it is included in this export at all.

#### External System Contact Points

- WK Radar API (`{host}` from a `Config` configuration key): `POST /wk.api/api/v1/token`, `GET /wk.api/api/empresarial/v1/cliente`, `.../fornecedor`, `.../servico`, `POST /RadarWebWebServices/.../GravarPedido`, `POST /api/compras/v1/ordem-compra`.
- Skills Workflow's own API/analytics: the named queries above; `POST /api/v3/billing-clients`, `POST /api/v3/suppliers`, `POST /api/v3/services`, `PATCH /api/bills/{id}`, `PATCH /api/supplier-invoices/{id}`.

#### Configuration

- A `Config` configuration key — holds the WK Radar host and credentials. Values are not part of the export.

#### Open Questions

- `WKRadar-BillStageChanged` is disabled and points at a `playground-dev` tenant URL — whether bill integration is meant to be re-enabled with a production webhook, or was replaced by something else, isn't determinable from the export.
- No webhook for `WKRadar-IntegrateSupplierInvoice` is included in this export — what currently triggers it, if anything, is not determinable.
