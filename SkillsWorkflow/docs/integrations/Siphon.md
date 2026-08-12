---
id: siphon
title: 'Siphon'
description: "When a client approves a brief, the assets that brief covers usually need to be made available to someone outside Skills Workflow — a production partner, a…"
sidebar_label: Siphon
---

### Description

This article describes the **Siphon** integration in `Skills Workflow`.

When a client approves a brief, the assets that brief covers usually need to be made available to someone outside Skills Workflow — a production partner, a media owner, or the client themselves. Producing that shareable link is a small task, but it is a manual one, and it sits directly in the path between approval and the work actually starting.

This integration removes that step. The moment a brief is marked **Client Approved**, its details are handed to the external system that produces the shared link, without anyone having to ask for it.

The value is in the timing rather than the volume: approval and availability become the same event, so nothing waits on someone remembering to generate a link.

---

### Data Exchange Technology

The exchange is a **single outbound call over the web**, authenticated with an access key held in Skills Workflow's configuration. No files and no locally installed application are required.

It is **event-driven** — it fires on the approval itself, and nothing is sent at any other time.

Both the destination address and the key are configured rather than fixed, so the same mechanism can point at whichever service the agency uses to produce the links.

---

### Data Exchange (From Skills Workflow)

**Approved briefs → a link request**

When a Request reaches the **Client Approved** stage, the following is sent:

| Sent | Meaning |
| --- | --- |
| Brief identifier and name | Which brief was approved |
| Client name | Who approved it |
| Brand name and number | What it is for |

---

### What the Agency Needs to Provide

- **The destination address** of the service that produces the shared links, plus the access key for Skills Workflow to authenticate with.
- **A *Client Approved* stage** on the Request document type, since reaching it is what triggers the hand-off.

---

### Good to Know

- **Only client approval triggers it.** A brief moving between any other stages sends nothing.
- **Skills Workflow does not hold the link.** It hands over the brief's details; producing and distributing the link is the receiving system's job, so the link itself appears there rather than on the Request.
- The integration is one-way and fire-and-forget — there is no response written back onto the brief.

---

### Technical Reference

#### Components

| Name | Type | Version | Stage | Role |
| --- | --- | --- | --- | --- |
| Swivle - Request brief shared link | Automation | 1 | Active | Forwards the approved brief's data to an external webhook so a shared link can be created |
| Request to create Brief shared link | Webhook | 1 | Active | Fires the automation when a Request's stage changes to "Client Approved" |
| GetBriefData | Query | 1 | Active | Looks up the brief's id, name, client name, brand name and brand number |

Source: `[Siphon] [Integrations] Swivle - Request brief shared link v1 (Automation) {Active}.json`, `[Siphon] [Integrations] Request to create Brief shared link v1 (Webhook) {Active}.json`, `[Siphon] [Integrations] GetBriefData v1 (Query) {Active}.json`.

#### How It Works

1. The webhook listens for `StageUpdated` events on `Skill.Module.BusinessObjects.Request` where `toWorkflowStageName` equals "Client Approved", and calls the `Swivle - Request brief shared link` automation (id `9fa9842e-26ec-4807-9d1b-da1471e8020c`).
2. The automation reads the `Siphon` configuration key (which holds a target URL and an auth key), then runs the `GetBriefData` query (`POST /api/v3/analytics/named-query/GetBriefData/execute`) with the Request's id, returning `briefId`, `briefName`, `clientName`, `brandName` and `brandNumber`.
3. It `POST`s that data as JSON to the URL stored in the configuration key (`Authorization: Bearer <key>`), then exits.

The automation's name (`Swivle - Request brief shared link`) indicates the receiving endpoint is expected to create a shared link in Swivle, the agency's DAM (see the [Swivle](./swivle) integration) — but the export only shows the outbound call to a generically-named `Siphon` webhook target, not the receiving side.

#### External System Contact Points

- Outbound webhook: URL and bearer key are both read from the `Siphon` configuration key at runtime, not hard-coded — the actual endpoint is not part of the export.
- Skills Workflow's own analytics API: `POST /api/v3/analytics/named-query/GetBriefData/execute`.

#### Configuration

- Configuration key **`Siphon`** — holds `webhooksUrl` (the outbound target) and `key` (bearer token). Values are not part of the export.

#### Open Questions

- What system actually receives the "Siphon" webhook, and what it does with the brief data, is not determinable from the export — the automation's name suggests it results in a Swivle shared link, but this is not confirmed by any Swivle-side file.
