---
id: automations
title: 'Generic Automations'
description: "Unlike the other integrations in this section, this one is not tied to a named external system."
sidebar_label: Generic Automations
---

### Description

This article describes the **Generic Create Project** endpoint in `Skills Workflow`.

Unlike the other integrations in this section, this one is not tied to a named external system. It is a ready-made, credential-protected entry point that lets **any** system create a project in Skills Workflow by calling a web address — without a bespoke integration having to be built for it first.

That is its value. When a client's intranet, an internal tool, a form, or an automation platform needs to open projects in Skills Workflow, the usual answer is a development project: agree a payload, build an automation, test it, deploy it. This endpoint removes that step for the single most common case. The agency issues a key to whoever needs it, they post the project details, and the project exists.

It is deliberately narrow: it creates projects, and nothing else.

---

### Data Exchange Technology

The endpoint is a **web address that the calling system posts to** — Skills Workflow does not poll anything and there is no schedule. Every call is authenticated with an application id and secret issued by the agency, sent as request headers. A call without valid credentials is rejected outright.

The response is immediate and tells the caller what happened: the created project on success, or the reason it was refused.

---

### Data Exchange (To Skills Workflow)

**A request → a Project**

The calling system supplies:

| Required | Meaning |
| --- | --- |
| Name | The project's name |
| Start date | When the project begins |
| Client | The client the project belongs to |
| Project nature | The kind of project |
| Project owner | The user who will own it — the project is created as though by this person |
| Classification | The project's classification |

If all of it is present and valid, the project is created and automatically moved to its first available workflow stage, so it arrives ready to work on rather than sitting in a limbo state.

---

### What the Agency Needs to Provide

- **An application id and secret** for each system allowed to call the endpoint, held in Skills Workflow's configuration.
- **The endpoint address**, given to whoever is integrating.
- **Agreement on the values** the caller will send for client, project nature, project owner and classification, since these must correspond to records that already exist in Skills Workflow.

---

### Monitoring and Error Handling

Because the caller gets an answer synchronously, failures surface on their side rather than silently in Skills Workflow:

| Response | Meaning |
| --- | --- |
| Unauthorised | The application id or secret was missing or wrong |
| Rejected | One or more required fields were missing from the request |
| Refused | The details were complete but Skills Workflow could not create the project — the reason is returned |

Nothing is created unless the whole request succeeds, so a failed call never leaves a half-made project behind.

---

### Good to Know

- **Projects only.** Jobs, briefs and everything else still need their own integration.
- **The project is created as the supplied owner**, so it appears in Skills Workflow attributed to a real person rather than to a system account.
- The credentials are the usual point of failure — if a system that was working stops creating projects, the key is the first thing to check.

---

### Technical Reference

#### Components

| Name | Type | Version | Stage | Role |
| --- | --- | --- | --- | --- |
| Generic - Create Project | Automation | 1 | Active | Inbound HTTP endpoint that authenticates a request and creates a Skills Workflow project |

Source: `[Automations] [Integrations] Generic - Create Project v1 (Automation) {Active}.json`.

#### How It Works

The automation is exposed as an HTTP endpoint (`isApiCall: true` on every action, no scheduler defined — it runs on demand when called, not on a timer).

1. **Authenticate** (`AuthenticateSW` sub-workflow) — reads the configuration key `Generic-Authentication`, which holds the list of valid `x-appId`/`x-appSecret` pairs, and checks the incoming request's `X-AppId` / `X-AppSecret` headers against it. If either header is missing or doesn't match, the automation returns `401 Unauthorized`.
2. **ValidateRequest** — validates the request body is present and contains `name`, `beginDateUtc`, `clientId`, `projectNatureId`, `projectOwnerId` and `classificationId`. Missing fields return `400` with the validation error as the body.
3. **CreateProject** — `POST /api/v3/projects` with `OperationType: Create` and the request body as `CreateModel`, using `X-AppUser` set to the caller-supplied `projectOwnerId`. A non-`201` response returns `400` with the API's error content.
4. **GetAvailableStages** — `GET /api/workflowStateTransitions?documentTypeName=Skill.Module.BusinessObjects.Project&documentId={projectId}` to find the project's first workflow transition.
5. **MoveStageToFirstAvailable** — `POST /api/posts` with a `Transition` action to move the new project to that first available stage, clearing any previous workflow state.
6. On success, returns `200` with the created project's content.

#### External System Contact Points

- Inbound: an HTTP endpoint on this automation (URL not present in the export — automations are invoked via their own execute URL, keyed by the automation's id).
- Outbound (internal): calls Skills Workflow's own API — `POST /api/v3/projects`, `GET /api/workflowStateTransitions`, `POST /api/posts`.
- Auth: custom header pair `X-AppId` / `X-AppSecret`, validated against the `Generic-Authentication` configuration key.

#### Configuration

- Configuration key **`Generic-Authentication`** — holds the accepted `x-appId` and `x-appSecret` values. Its content is not part of the export.

#### Open Questions

- Which external system(s) actually call this endpoint is not determinable from the export — the component is generic by design and not scoped to a named third party.
- The endpoint URL and the specific caller(s) authorized via `Generic-Authentication` are not determinable from the export.
