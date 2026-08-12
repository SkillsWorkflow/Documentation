---
id: timely
title: 'Timely'
description: "Timely is where people actually record their hours — a lightweight, pleasant time tracker that teams will genuinely use."
sidebar_label: Timely
---

### Description

This article describes the integration between **Timely** and `Skills Workflow`.

Timely is where people actually record their hours — a lightweight, pleasant time tracker that teams will genuinely use. Skills Workflow is where those hours have to end up, because that is where cost, capacity, utilisation and billing are calculated.

This integration lets the agency have both: people track time in the tool they like, and the platform gets the time data it needs, without anyone entering the same hours twice or exporting spreadsheets at month end.

It works in both directions, because each side owns part of the picture:

- **Out to Timely** — the clients and projects people need to track time against, and who is assigned to them, are pushed automatically. Nobody has to maintain a project list in two places, and time can never be logged against a project that does not exist.
- **In from Timely** — the hours themselves become timesheets in Skills Workflow, and Timely's labels become work types, so the time arrives already categorised.

The point is that time capture stops being an administrative chore. The tracker stays populated on its own, and the hours flow back without a monthly reconciliation.

---

### Data Exchange Technology

The exchange runs over the Timely web API, authenticated with the agency's own Timely application using OAuth. No files and no locally installed application are required.

It is **event-driven in both directions**:

- Creating or activating a client or project in Skills Workflow pushes it to Timely straight away.
- Logging, editing or deleting hours in Timely notifies Skills Workflow, which updates the matching timesheet.

A bulk load is available for the initial population of clients into Timely.

---

### Data Exchange (From Skills Workflow)

| Sent to Timely | When |
| --- | --- |
| **Clients** | A client is created |
| **Projects** | A project becomes Active (from Draft or In Progress) |
| **Project team assignments** | Someone is assigned to or removed from a project |

Projects are only pushed once they are genuinely active, so drafts do not clutter the tracker.

---

### Data Exchange (To Skills Workflow)

| Received from Timely | Becomes in Skills Workflow |
| --- | --- |
| **Logged hours** | Timesheets, against the matching user and project |
| **Labels** | Work types |

Editing or deleting an entry in Timely updates or removes the corresponding timesheet, so the two stay aligned rather than only agreeing at the moment of creation.

---

### What the Agency Needs to Provide

- **A Timely account**, with an application registered for Skills Workflow to authenticate against, and the account identifier.
- **Webhooks configured in Timely** so that logged, edited and deleted hours notify Skills Workflow.
- **Agreement on how Timely's labels map** to Skills Workflow work types.

---

### Good to Know

- **Projects reach Timely only when Active.** If a project is missing from the tracker, its stage is the first thing to check.
- **Users are matched between the two systems by their Timely identifier**, stored on the Skills Workflow user. A person who has not been matched cannot have their hours imported.
- **Time flows in, structure flows out.** Timely owns the hours; Skills Workflow owns the clients, projects and who is on them.
- Deleting an entry in Timely deletes the timesheet in Skills Workflow — the sync is not append-only.

---

### Technical Reference

#### Components

| Name | Type | Version | Stage | Role |
| --- | --- | --- | --- | --- |
| Timely - Oauth | Automation | 2 | Active | Handles the OAuth token exchange with Timely |
| Timely-CreateClient | Automation | 2 | Active | Pushes a new client to Timely |
| Timely-OnClientCreated | Webhook | 1 | Active | Fires `Timely-CreateClient` on CommercialClient creation |
| Timely-ClientsFirstLoad | Automation | 2 | Active | On-demand bulk push of existing clients to Timely |
| Timely-CreateProject | Automation | 3 | Active | Pushes a project to Timely once it becomes Active |
| Timely-OnProjectCreated | Webhook | 4 | Active | Fires `Timely-CreateProject` when a Project moves from Draft/InProgress to Active |
| Timely-ProjectAssignments | Automation | 1 | Active | Pushes project team assignments to Timely |
| Timely-OnAssignmentCreated / (Deleted) | Webhook | 1 | Active | Fire on Assignment created/deleted for a Project |
| Timely-SyncWorktypes | Automation | 3 | Active | Pulls Timely's labels into Skills Workflow as Worktypes |
| **Legacy per-event timesheet sync** | | | | |
| Timely-WebhookReceived | Automation | 4 | Active | Dispatches `hours:created/updated/deleted` events immediately |
| Timely-CreateTimesheet | Automation | 10 (highest of 2 versions, both exported) | Active | Creates one timesheet per Timely event, immediately |
| Timely-UpdateTimesheet | Automation | 5 | Active | Updates the matching timesheet |
| Timely-DeleteTimesheet | Automation | 2 | Active | Deletes the matching timesheet |
| Timely-CreateCustomTable | Automation | 1 | Active | Creates the `TimelyTimesheets` custom table this generation relies on |
| **"2026" batched timesheet sync** | | | | |
| Timely-2026-WebHookReceived | Automation | 2 | Active | Records every incoming Timely event into the `TimelyEvents` custom table |
| Timely-2026-HandleEventsByDate | Automation | 2 | **No active trigger** (scheduler `isActive: false`) | Would process a day's stored events into timesheets in bulk |
| Timely-2026-CreateTimesheets | Automation | 2 | Active | Creates timesheets from resolved event data, deleting same-day entries first |
| Timely-2026-DeleteUserTimesheetsByDay | Automation | 2 | Active | Deletes a user's timesheets for a day, on demand |
| Timely-2026-HandleFailedEvent | Automation | 1 | Active | Records an event that failed processing into `TimelyFailedEvents` |
| Timely-2026-ProcessFailedEventsByDate | Automation | 1 | Active | Reprocesses failed events for a date |
| Timely-2026-CreateCustomTable | Automation | 1 | Active | Creates the `TimelyEvents` / `TimelyFailedEvents` custom tables this generation relies on |
| Timely-2026-BulkUpdate | Automation | 1 | Active | On-demand bulk update — body not further inspected |

Plus 14 supporting named queries (`Timely-ProjectDetailsById`, `Timely-ProjectIsValid`, `Timely-NewClients`, `Timely-NewWorkTypesByExternalId`, `Timely-GetTimelyTimesheetById`, `-GroupedById`, `-ByUserProjectDay`, `-GetTimelyTimesheetToUpdate`, `Timely-TimesheetDetailsByProject`, `-UpdateTimesheetDetailsByProject`, `Timely-2026-AllEvents-Get`, `-EventsByDate-Get`, `-FailedEvents-Get`, `-FailedEventsByUserAndDate`, `-UserByTimelyId-Get`).

Source: files under `[Timely] [Integrations] ...` in the Marketplace export (39 files, 38 distinct components after de-duplicating one attachment pair).

:::caution Two timesheet-sync mechanisms exist; the newer one is currently unscheduled
This export contains a **legacy** pipeline (`Timely-WebhookReceived` → `Timely-CreateTimesheet`/`UpdateTimesheet`/`DeleteTimesheet`, one timesheet created per event in real time) and a **"2026"** rewrite (`Timely-2026-WebHookReceived` stores every event in a `TimelyEvents` custom table; `Timely-2026-HandleEventsByDate` would process a whole day's events into timesheets in bulk, with failures tracked separately in `TimelyFailedEvents`). Both sets of automations are individually Active, but `Timely-2026-HandleEventsByDate`'s own scheduler is disabled, so — unless something else calls it directly — events land in `TimelyEvents` but are never turned into timesheets by this newer path. It's not determinable from the export whether the legacy pipeline is still the live one (with "2026" only staged for a future cutover) or whether both are live and could double-create timesheets.
:::

#### How It Works

- **Clients**: `Timely-OnClientCreated` fires `Timely-CreateClient` (confirmed by matching automation id `9c9e17ec-...`), which `POST`s the client to `{api}/{account}/clients` and stores the returned Timely id (`PUT /api/v3/documentUserFieldValues`). `Timely-ClientsFirstLoad` does the same for all existing clients found by `Timely-NewClients`, on demand.
- **Projects**: `Timely-OnProjectCreated` fires `Timely-CreateProject` (confirmed by matching automation id `efce2596-...`) when a project reaches Active from Draft or InProgress; it builds the project payload (`Timely-ProjectDetailsById`) and posts it to `{api}/{account}/projects`.
- **Assignments**: `Timely-OnAssignmentCreated`/`Deleted` (scoped to Project assignments) drive `Timely-ProjectAssignments`, which validates the project (`Timely-ProjectIsValid`) and updates it in Timely.
- **Work types**: `Timely-SyncWorktypes` pulls Timely's labels (`GET {api}/{account}/labels`), resolves new ones (`Timely-NewWorkTypesByExternalId`), and creates them as Skills Workflow Worktypes (`POST /api/Worktypes`) — the only inbound (Timely → Skills Workflow) master-data flow here.
- **Timesheets (legacy)**: `Timely-WebhookReceived` dispatches on `hours:created/updated/deleted` (ignoring events tagged `Skills Workflow1`, to avoid reacting to its own writes back to Timely) to `Timely-CreateTimesheet` / `-UpdateTimesheet` / `-DeleteTimesheet`, each of which fetches the event from Timely, builds/matches the timesheet (`Timely-TimesheetDetailsByProject`, `Timely-GetTimelyTimesheetById`), creates/updates/deletes it (`POST`/`PUT`/`DELETE /api/timesheets`), and writes the link into the `TimelyTimesheets` custom table.
- **Timesheets ("2026")**: `Timely-2026-WebHookReceived` fetches the event and stores it as a row in `TimelyEvents`. `Timely-2026-HandleEventsByDate` (currently untriggered) would, for a given day, fetch all active Timely users, get each one's events for that day, resolve them against `TimelyEvents`/`Timely-2026-TimesheetDataByEvents`, and hand off to `Timely-2026-CreateTimesheets` (which deletes any existing timesheet for that user/day first, then recreates from the resolved events). Failures are recorded via `Timely-2026-HandleFailedEvent` and can be retried via `Timely-2026-ProcessFailedEventsByDate`.

#### External System Contact Points

- Timely API (`{api}`/`{account}` from a `Config` configuration key): `GET/POST {account}/clients`, `{account}/projects`, `{account}/labels`, `{account}/users`, `{account}/users/{id}/events`, `{account}/events/{id}`.
- Inbound: Timely calls `Timely-WebhookReceived` and `Timely-2026-WebHookReceived`'s endpoints on `hours:*` events.
- Skills Workflow's own API/analytics: the named queries above; `POST/PUT/DELETE /api/timesheets`, `POST /api/v3/timesheets`, `GET /api/v3/timesheets/lookup`, `POST /api/Worktypes`, `PUT /api/v3/documentUserFieldValues`, `GET/POST /api/v3/custom-tables/...`.

#### Configuration

- A `Config` configuration key — holds Timely's `api` base URL and `account`. Values are not part of the export.
- Custom tables **`TimelyTimesheets`** (legacy) and **`TimelyEvents`** / **`TimelyFailedEvents`** ("2026") store the integration's own bookkeeping inside Skills Workflow.

#### Open Questions

- Whether the legacy or the "2026" timesheet pipeline is the one actually in production is not determinable from the export — see the caution above.
- `Timely-2026-BulkUpdate` has no inspected body beyond its name; what it bulk-updates isn't determinable from the summary alone.
- `Timely - Oauth`'s exact token-refresh mechanics weren't inspected in depth.
