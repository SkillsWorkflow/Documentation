---
id: omie
title: 'Omie'
description: "Omie is the Brazilian cloud ERP many agencies use for accounting and tax compliance — including issuing the NFS-e, the electronic service invoice that is a…"
sidebar_label: Omie
---

### Description

This article describes the integration between **Omie** and `Skills Workflow`.

Omie is the Brazilian cloud ERP many agencies use for accounting and tax compliance — including issuing the *NFS-e*, the electronic service invoice that is a legal requirement for billing services in Brazil. Skills Workflow is where the work being billed is run.

This integration closes the billing loop end to end, and its distinguishing feature is that it goes **both ways on the same document**:

- **Clients are pushed out to Omie** every day, so accounting is registering invoices against the same client records the agency works with.
- **A bill is sent to Omie** as a service order (*Ordem de Serviço*) when it is ready.
- **The issued invoice comes back.** When Omie issues the NFS-e for that service order, the invoice reference is written onto the bill in Skills Workflow automatically.

That last step is what makes it worth having. Without it, someone has to watch Omie for the invoice to be issued and then go back and record the number against the job — which is exactly the kind of manual reconciliation that goes stale. With it, the bill in Skills Workflow shows its own tax invoice number, so operations and finance are looking at the same fact.

---

### Data Exchange Technology

The exchange runs over the Omie web API, using credentials configured by the agency. No files and no locally installed application are required.

Three things happen on different rhythms:

- **The client push runs daily**, sending clients registered or changed that day.
- **Bills are sent as they become ready**, not on a schedule.
- **The NFS-e comes back when Omie issues it** — Omie calls Skills Workflow, so the invoice number lands as soon as it exists rather than waiting for the next run.

A bulk load is available for the initial population, and an on-demand client update for ad-hoc corrections.

---

### Data Exchange (From Skills Workflow)

| Sent to Omie | As |
| --- | --- |
| **Clients** | Omie customers, with their billing details and country resolved against Omie's own country list |
| **Bills** | Service orders (*Ordem de Serviço*), with their line items |

---

### Data Exchange (To Skills Workflow)

| Received from Omie | Result |
| --- | --- |
| **NFS-e issued** for a service order | The electronic invoice reference is written onto the matching bill |

---

### What the Agency Needs to Provide

- **An Omie account with API access**, plus the application key and secret for Skills Workflow.
- **Omie configured to notify Skills Workflow** when an NFS-e is issued, so the reference can be returned automatically.
- **Clients whose company and billing setup exist in Omie** — see *Good to Know*.

---

### Monitoring and Error Handling

If a bill cannot be resolved to a valid company or client in Omie, the integration stops on that bill and reports it rather than sending an incomplete document to an accounting system. The remaining bills are unaffected.

---

### Good to Know

- **The client has to reach Omie before its bills can.** The daily client push is what makes billing possible, so a brand-new client billed the same day may need the push to run first.
- **Bills are matched to their Omie service order**, and the service order to its NFS-e, so the chain from job to tax invoice is traceable in both directions.
- **The invoice number arrives when Omie issues it**, which may be some time after the bill is sent — a bill without a number yet has not necessarily failed.

---

### Technical Reference

#### Components

| Name | Type | Version | Stage | Role |
| --- | --- | --- | --- | --- |
| Omie-Clients | Automation | 2 | Active | Daily: sends today's new/changed clients to Omie |
| Omie-Clients-FirstLoad | Automation | 1 | Active | On-demand variant of the same client push, without the "today" date filter — for an initial bulk load |
| Omie-BulkClientUpdate | Automation | 1 | Active | On-demand: pushes a client update to Omie and updates its billing e-mail |
| Omie-Send Bills | Automation | 6 | Active | Sends a bill and its items to Omie as a service order |
| Omie-Recieve_NFS-e | Automation | 2 | Active | Inbound: receives Omie's NFS-e notification and patches the matching bill |
| Omie-GetClientTodayFormatted | Query | 1 | Active | Returns today's date, used to filter which clients to send |
| Omie-GetBillingClient | Query | 1 | Active | Resolves the billing client/company data for a client push |
| Omie-GetBillById | Query | 4 | Active | Resolves a bill's data for sending, or a `company`/`client` error status if not resolvable |
| Omie-getBillItemsById | Query | 2 | Active | Resolves a bill's line items for sending |
| Omie-GetBillByOrdemServico | Query | 1 | Active | Looks up the Skills Workflow bill matching an Omie service-order id |
| Omie-UpdateEmailFactura | Query | 1 | Active | Used by the bulk client update to refresh a client's billing e-mail |

Source: `[Omie] [Integrations] Clients v2 (Automation) {Active}.json`, `[Omie] [Integrations] Omie-Clients-FirstLoad v1 (Automation) {Active}.json`, `[Omie] [Integrations] Omie-BulkClientUpdate v1 (Automation) {Active}.json`, `[Omie] [Integrations] Send Bills v6 (Automation) {Active}.json`, `[Omie] [Integrations] Recieve NFS-e v2 (Automation) {Active}.json`, and the six named queries above.

#### How It Works

1. **Clients** — daily, `Omie-Clients` runs `Omie-GetClientTodayFormatted` to get today's date, then for each client changed/created today: `POST https://app.omie.com.br/api/v1/geral/clientes/` to upsert the client in Omie, `Omie-GetBillingClient` to resolve the matching billing client, `POST /api/v3/billing-clients`, and a country lookup (`.../geral/paises/` in Omie, matched to a Skills Workflow country by ISO code) before writing the result back via `PUT /api/v3/documentUserFieldValues`. `Omie-Clients-FirstLoad` and `Omie-BulkClientUpdate` reuse the same Omie client endpoint for an initial load / ad-hoc update outside the daily run.
2. **Sending a bill** — `Omie-Send Bills`, triggered on demand for a specific bill, runs `Omie-GetBillById`; a `company`/`client` status halts with an internal notification instead of sending. Otherwise it fetches the bill's items (`Omie-getBillItemsById`), ensures the client exists in Omie (`.../geral/clientes/`), and creates the service order (`POST .../servicos/os/`), writing the result back via `PUT /api/v3/documentUserFieldValues`.
3. **Receiving the invoice** — `Omie-Recieve_NFS-e` is called directly by Omie (its payload uses Omie's own field name `event.id_os`, not a Skills Workflow event shape) when an NFS-e is issued for a service order. It looks up the matching bill via `Omie-GetBillByOrdemServico` and patches it (`PATCH /api/bills/{id}`) with the invoice reference.

#### External System Contact Points

- Omie API (`app.omie.com.br/api/v1/`): `POST /geral/clientes/` (create/update client), `POST /geral/paises/` (country lookup), `POST /servicos/os/` (create service order).
- Inbound: Omie calls this tenant's `Omie-Recieve_NFS-e` endpoint directly when an NFS-e is issued.
- Skills Workflow's own API/analytics: the named queries above; `POST /api/v3/billing-clients`, `PUT /api/v3/documentUserFieldValues`, `PATCH /api/bills/{id}`.

#### Configuration

- Configuration key **`Omie`** — holds the Omie API credentials used by `Omie-Send Bills` (and presumably the other Omie-calling automations, though only this one's `ConfigurationKeys` action was inspected in depth). Values are not part of the export.

#### Open Questions

- What triggers `Omie-Send Bills` (a webhook, a manual action, another automation) is not part of this export — only that it expects a bill id in an HTTP request body shaped like a Skills Workflow event.
- The exact authentication Omie uses to call `Omie-Recieve_NFS-e` back is not shown in this automation.
