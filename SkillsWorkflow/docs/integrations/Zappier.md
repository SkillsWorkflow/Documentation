---
id: zappier
title: 'Zappier'
description: "Visto is the external print-production system."
sidebar_label: Zappier
---

:::info This is the outbound half of the Visto integration
Despite the Marketplace package being named "Zappier" (and its files prefixed `Zappier-`), every component's own internal name, category (`Visto-Integration`) and behavior show this is the **outbound** side of the [Visto](./visto) print-production integration — notifying Visto of job creation and stage changes via a Zapier webhook, rather than calling Visto directly. See [Visto](./visto) for the inbound side (Visto telling Skills Workflow about stage changes).
:::

### Description

This article describes the outbound half of the [Visto](./visto) integration, delivered through **Zapier**.

[Visto](./visto) is the external print-production system. That page covers the inbound direction — production telling Skills Workflow that a piece has moved. This package covers the opposite direction: Skills Workflow telling Visto that a job is ready to be produced, and keeping it informed as the job advances.

The two together close the loop. A job reaches the stage where it should go to production, and production learns about it without anyone sending it over. From then on, each side reports its own changes to the other.

Zapier sits in the middle as the delivery mechanism. Rather than Skills Workflow integrating against Visto directly, it posts the job to a Zapier webhook, and Zapier routes it onward. The practical benefit is that the routing can be changed — a new destination, an extra notification, a transformation — without altering anything in Skills Workflow.

---

### Data Exchange Technology

The exchange is a **single outbound call to a Zapier webhook**, made when a job's stage changes. There is no schedule; the call happens on the stage change itself.

The webhook address is the credential — anyone holding it can post to it — so it is treated as a secret.

---

### Data Exchange (From Skills Workflow)

**Job stage changes → Visto**

The integration reacts to jobs entering the production stages, and sends a different amount of detail depending on whether Visto is meeting the job for the first time:

| Situation | What is sent |
| --- | --- |
| A job enters production for the first time (*Enviado para Arizona*, from a stage other than *Devolvido Arizona*) | The full job detail — enough for Visto to create its own record |
| A job re-enters production after being returned (*Enviado para Arizona*, from *Devolvido Arizona*) | A stage update |
| A job moves to *Em Ajuste Arizona*, *Em aprovação Arizona* or *Aprovado Arizona* | A stage update |
| Any other stage change | Nothing is sent |

Sending the fuller record only on first entry keeps the ongoing traffic light while still giving Visto everything it needs up front.

---

### What the Agency Needs to Provide

- **A Zapier account** with a catch-hook configured to receive the job data and route it to Visto.
- **The production stages** above on the job document type, named so they can be matched.
- **The webhook address**, configured in Skills Workflow and treated as a secret.

---

### Good to Know

- **Only the production stages trigger it.** Movement elsewhere in the job's workflow sends nothing.
- **The first entry into production sends more than later ones** — this is deliberate, not an inconsistency.
- **Zapier is a relay, not the destination.** What ultimately happens to the job data depends on how the Zap is configured, which is managed in Zapier rather than in Skills Workflow.
- Despite this package being named "Zappier" in the Marketplace, everything in it belongs to the Visto integration — see the [Visto](./visto) page for the other direction.

---

### Technical Reference

#### Components

| Name | Type | Version | Stage | Role |
| --- | --- | --- | --- | --- |
| Visto-StageChanged (package name `Zappier-CreateJob`) | Automation | 3 | Active | Builds the job payload and sends it to a Zapier webhook |
| Visto-StageChanged (package name `Zappier-OnJobStageUpdated`) | Webhook | 3 | Active | Fires the automation on Deliverable stage changes |
| Visto-JobById-Get (package name `Zappier-GetJobById`) | Query | 5 | Active | Builds the full job payload, used the first time a job enters the flow |
| Visto-JobStageUpdate-Get | Query | 2 | Active | Builds a lighter stage-update payload, used for subsequent stage changes |
| Visto-JobTransition-Get | Query | 2 | Active | Present in this package but not called by the exported automation |

Source: `[Zappier] [Integrations] Zappier-CreateJob v3 (Automation) {Active}.json`, `[Zappier] [Integrations] Zappier-OnJobStageUpdated v3 (Webhook) {Active}.json`, `[Zappier] [Integrations] Zappier-GetJobById v5 (Query) {Active}.json`, `[Zappier] [Integrations] Visto-JobStageUpdate-Get v2 (Query) {Active}.json`, `[Zappier] [Integrations] Visto-JobTransition-Get v2 (Query) {Active}.json`.

#### How It Works

1. The webhook fires on `StageUpdated` for a `Deliverable` where the destination stage is "Enviado para Arizona", "Em Ajuste Arizona" or "Aprovado Arizona" (matching automation id `98610c89-b3a6-455b-9ecd-e7b2dbe922b4`).
2. The automation branches on the **destination** stage:
   - "Enviado para Arizona" **and** the job came **from** "Devolvido Arizona" → treated as a stage update (`Visto-JobStageUpdate-Get`).
   - "Enviado para Arizona" from any other stage → treated as a new job entering the flow (`Visto-JobById-Get`, the fuller payload).
   - "Em Ajuste Arizona", "Em aprovação Arizona" or "Aprovado Arizona" → always a stage update (`Visto-JobStageUpdate-Get`).
3. Either way, the resulting payload is `POST`ed as JSON to a Zapier "catch hook" URL (`https://hooks.zapier.com/hooks/catch/16059441/29959bj/`) — Zapier then presumably relays it into Visto, though what Zapier does with it isn't part of this export.

This lines up with the `Visto-JobStageUpdate-Get` query documented on the [Visto](./visto) page as "referenced but not exported" — it's exported here, under this differently-named package, and resolves that page's open question about what sends stage updates to Visto.

#### External System Contact Points

- Zapier: `POST https://hooks.zapier.com/hooks/catch/16059441/29959bj/` — no authentication beyond the URL itself being a secret.
- Skills Workflow's own analytics: named queries `Visto-JobById-Get`, `Visto-JobStageUpdate-Get`.

#### Configuration

- The Zapier catch-hook URL is hardcoded in the automation rather than configured via a configuration key.

#### Open Questions

- What the Zapier "Zap" behind that catch-hook URL actually does with the payload (forward to Visto, transform it, etc.) is entirely outside this export.
- The query versions here (`Visto-JobStageUpdate-Get` v2, `Visto-JobTransition-Get` v2) are older than the versions exported under the `Visto` module (v5, v3) with the same names — whether this package is running stale copies or the two are meant to diverge is not determinable.
