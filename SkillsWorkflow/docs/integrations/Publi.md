---
id: publi
title: 'Publi'
description: "Publi is the agency's media-buying system, where media budgets are registered and bought against."
sidebar_label: Publi
---

### Description

This article describes the integration between **Publi** and `Skills Workflow`.

Publi is the agency's media-buying system, where media budgets are registered and bought against. Skills Workflow is where the estimate behind that budget is built and approved with the client.

This integration hands the estimate over the moment it is approved. An estimate in Skills Workflow can be a substantial document — client, contract, currency, supplier, and a set of billed lines — and re-keying it into a media system is both slow and the kind of task where a transposed figure is expensive. Here the whole thing is assembled and sent in one step, and the reference Publi assigns is written back onto the estimate so both systems point at the same budget.

---

### Data Exchange Technology

The exchange runs over the Publi web service. Skills Workflow logs in with a dedicated user and then submits the estimate. No files and no locally installed application are required.

It is **event-driven**: it fires when the estimate reaches the stage that means it is approved for media. Nothing is sent before then.

The login is performed **per company** — the division the estimate belongs to determines which Publi company the estimate is registered against, so a group with several media companies posts each one's budgets into the right place.

---

### Data Exchange (From Skills Workflow)

**Estimates → Orçamentos (budgets)**

When an estimate reaches the **Integrado** stage, it is sent to Publi as a budget, carrying its client, contract, currency, supplier and billed lines.

The identifier Publi returns is stored on the estimate, and is the visible sign the hand-off succeeded.

An estimate that has already been sent is **not sent again** if it changes stage a second time, so re-triggering does not create a duplicate budget in the media system.

---

### What the Agency Needs to Provide

- **A Publi web service address**, plus a dedicated login and password for Skills Workflow.
- **Division records carrying their Publi company code**, since the division is what selects the Publi company to log into.
- **An *Integrado* stage** on the Estimate document type, since reaching it is what triggers the hand-off.

---

### Good to Know

- **Nothing is sent until the estimate is approved.** Moving an estimate between other stages never registers a budget by accident.
- **An estimate is only ever sent once.** The integration checks before sending, so a duplicate budget is not created.
- **The division decides the Publi company.** If a division is missing its Publi code, the login for that estimate cannot be performed.
- The integration is one-way: changing the budget in Publi does not update the estimate in Skills Workflow.

---

### Technical Reference

#### Components

| Name | Type | Version | Stage | Role |
| --- | --- | --- | --- | --- |
| Publi-EstimateWithBills-Integrate | Automation | 1 | Active | Logs into Publi and submits the estimate/bill data |
| Publi-Estimate-StageUpdated | Webhook | 1 | Active | Fires the automation when an Estimate moves to "Integrado" |
| Publi-EstimateById | Query | 2 | Active | Builds the full estimate+bills payload ("orçamento") sent to Publi |
| Publi-EstimateDivisionExternalId | Query | 1 | Active | Looks up the division's external id, used to log into Publi as the right "empresa" |

Source: `[Publi] [Integrations] Publi-EstimateWithBills-Integrate v1 (Automation) {Active}.json`, `[Publi] [Integrations] Publi-Estimate-StageUpdated v1 (Webhook) {Active}.json`, `[Publi] [Integrations] Publi-EstimateById v2 (Query) {Active}.json`, `[Publi] [Integrations] Publi-EstimateDivisionExternalId v1 (Query) {Active}.json`.

#### How It Works

1. The webhook listens for `StageUpdated` on `Skill.Module.BusinessObjects.Estimate` where `toWorkflowStageName` equals "Integrado", and fires `Publi-EstimateWithBills-Integrate` (matching automation id `ff2184c4-f71b-4640-82ff-e13a0654885e`).
2. The automation reads the `publi-integration` configuration key (Publi host and credentials), then runs `Publi-EstimateDivisionExternalId` to get the division's external id.
3. It logs into Publi (`GET {host}/publiweb/Services/IntegracaoService.svc/Login?usuario=&senha=&empresa=`), a SOAP-style web service, using that division as the "empresa" (company).
4. It runs `Publi-EstimateById`, passing the estimate id and the login token; this query assembles the full estimate — including bills, bill items, supplier, client, contract and currency data — into a single `json` payload representing an "orçamento" (budget) with an `operation` flag.
5. If `operation` is `INCLUSAO` (insert — i.e. not yet sent), it `POST`s the payload to Publi (`.../IntegracaoService.svc/SaveOrcamento`) and writes the returned description back onto the Estimate as its `ExternalId` (`PATCH /api/estimates/{id}`). If the estimate was already integrated, it exits without resending.

#### External System Contact Points

- Publi web service (host from the `publi-integration` configuration key): `GET .../publiweb/Services/IntegracaoService.svc/Login`, `POST .../publiweb/Services/IntegracaoService.svc/SaveOrcamento`.
- Skills Workflow's own analytics/API: named queries `Publi-EstimateDivisionExternalId`, `Publi-EstimateById`; `PATCH /api/estimates/{id}`.

#### Configuration

- Configuration key **`publi-integration`** — holds the Publi host (`host`), login (`usuario`), and password (`senha`). Values are not part of the export.

#### Open Questions

- The exact shape and field mapping of the "orçamento" JSON built by `Publi-EstimateById` (beyond the tables it joins — bills, bill items, supplier, client, contract, currency) is not fully determinable without the query's full SQL text.
- What "already integrated" (`operation` other than `INCLUSAO`) means for a re-triggered stage change, and whether updates are ever resent, is not determinable from the export.
