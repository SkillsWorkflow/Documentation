---
id: visto
title: 'Visto'
description: "Visto is the external print-production system where artwork is sent for output, corrected and signed off."
sidebar_label: Visto
---

### Description

This article describes the integration between **Visto** and `Skills Workflow`.

Visto is the external print-production system where artwork is sent for output, corrected and signed off. Skills Workflow is where the job it belongs to is managed.

This integration keeps the job's stage honest. Once a piece has gone to production, the truth about where it stands lives in Visto — it is at output, it came back for adjustment, it was approved. Without the integration, that truth has to be relayed: someone in production tells someone in account management, who moves the job. Status in Skills Workflow becomes a lagging, second-hand account of what production already knows.

With it, the job moves itself. Visto reports the change and Skills Workflow applies it, so the stage anyone looks at is the stage the piece is actually in.

The two systems are linked the first time a job is matched: Visto's own reference is stored on the job, and from then on both sides are talking about the same piece.

---

### Data Exchange Technology

Visto calls Skills Workflow directly over the web when a job's stage changes. The exchange is **event-driven** — there is no scheduled run, so the job moves within moments of the change in production.

The outbound half of the connection — Skills Workflow telling Visto that a job is ready, or has moved — is delivered by the [Zappier](./zappier) package, which sends job and stage data to Visto through a Zapier webhook.

---

### Data Exchange (To Skills Workflow)

**Stage changes → job stages**

Visto sends the job number, its own reference for the piece, and the stage it has moved to. Skills Workflow finds the job, records Visto's reference if it does not have one yet, and moves the job to the matching stage.

Nothing else about the job is overwritten — the integration moves the stage, it does not re-write the brief, the dates or the team.

---

### Data Exchange (From Skills Workflow)

Handled by the [Zappier](./zappier) package. Jobs entering the production stages — *Enviado para Arizona*, *Em Ajuste Arizona*, *Aprovado Arizona* — are sent to Visto, with the fuller job detail sent the first time a job enters the flow and a lighter update on subsequent stage changes.

---

### What the Agency Needs to Provide

- **Visto configured to call Skills Workflow** when a job's stage changes.
- **Workflow stages on the job matching Visto's**, with valid transitions between them — see *Good to Know*.
- **A notification e-mail address** to receive alerts when a stage cannot be applied.

---

### Monitoring and Error Handling

If Visto reports a stage that the job has no valid transition to, the integration does not force it. It leaves the job where it is and sends an e-mail alert, so the workflow can be corrected rather than a job being pushed into a state its own process does not allow.

---

### Good to Know

- **The workflow has to allow the move.** This is the usual reason a job appears stuck: Visto reported a stage, but no transition exists from where the job currently is.
- **Jobs are matched by job number**, and Visto's reference is stored on the job the first time they are linked.
- **Only the stage is updated** by the inbound flow — everything else about the job is left alone.

---

### Technical Reference

#### Components

| Name | Type | Version | Stage | Role |
| --- | --- | --- | --- | --- |
| Visto-HandleWebhookRequest | Automation | 3 | Active | Inbound endpoint: applies a job stage update requested by Visto |
| Visto-JobTransition-Get | Query | 3 | Active | Resolves the Skills Workflow transition matching Visto's requested stage, keyed by job number and Visto's stage code |
| Visto-JobStageUpdate-Get | Query | 5 | Active | Builds the outbound payload (job, Visto stage label, comment, link) for a Skills Workflow stage change — not called by the exported automation |
| Visto-jobToStage-Get | Query | 1 | Active | Alternate lookup of the transition to a named stage, keyed by stage name rather than Visto's external code — not called by the exported automation |

Source: `[Visto] [Integrations] Visto-HandleWebhookRequest v3 (Automation) {Active}.json`, `[Visto] [Integrations] Visto-JobTransition-Get v3 (Query) {Active}.json`, `[Visto] [Integrations] Visto-JobStageUpdate-Get v5 (Query) {Active}.json`, `[Visto] [Integrations] Visto-jobToStage-Get v1 (Query) {Active}.json`.

#### How It Works

**Inbound (Visto → Skills Workflow, exported):**
1. Visto calls the automation's HTTP endpoint with a body containing `Action`, `ID_Skills` (the Skills Workflow job number), `ID_VG` (Visto's own job id) and `Etapa` (Visto's stage code).
2. If `Action` is `Update`, `Visto-JobTransition-Get` looks up the job by `ID_Skills` and finds the transition whose external id matches `Etapa`. It also reports whether the job already has an `ExternalId` set (`Exists`) or not (`Create`).
3. If no matching transition is found, an email alert is sent ("... - Transition Not Available") to `ines@skillsworkflow.com` and `helder.barreiros@skillsworkflow.com`.
4. If the job doesn't yet have an `ExternalId`, it's set to `ID_VG` (`PATCH /api/jobs/{jobId}`).
5. The transition is applied (`POST /api/v3/posts`, `Actions.transition`).

**Outbound (Skills Workflow → Visto):** `Visto-JobStageUpdate-Get` is built to run when a deliverable enters one of three stages — "Enviado para Arizona", "Em Ajuste Arizona", "Aprovado Arizona" (naming suggests an Arizona-brand large-format printer output stage) — and maps each to a Visto-facing label (`To do`, `Para ajustar`, `Aprovado`), together with the latest comment and a link back to the job. **This direction is actually implemented by the [Zappier](./zappier) Marketplace package** — despite its name, that package's components are internally named `Visto-StageChanged` / `Visto-JobStageUpdate-Get` / `Visto-JobById-Get` and send exactly this data to Visto via a Zapier webhook. See that page for the full flow.

#### External System Contact Points

- Inbound: Visto calls this automation's own HTTP endpoint (URL not included) with the job update payload.
- Outbound: via the [Zappier](./zappier) package — `POST https://hooks.zapier.com/hooks/catch/16059441/29959bj/`.
- Skills Workflow's own API: `PATCH /api/jobs/{jobId}`, `POST /api/v3/posts`, named query `Visto-JobTransition-Get`.

#### Configuration

- Not determinable from the export — no configuration key or system parameter is referenced by the inbound automation.

#### Open Questions

- `Visto-jobToStage-Get` is not called by any exported automation, in either this package or [Zappier](./zappier) — whether it's dead, used by an unexported component, or a manual/ad-hoc query is not determinable.
- The copies of `Visto-JobStageUpdate-Get` and `Visto-JobTransition-Get` exported under [Zappier](./zappier) are older versions (v2) than the ones here (v5, v3) — whether that package is running stale copies isn't determinable.
