---
id: workday-informatica
title: 'Workday Informatica'
description: "Workday is the HR system of record — where employees request time off and where it is approved."
sidebar_label: Workday Informatica
---

### Description

This article describes the integration between **Workday** and `Skills Workflow`.

Workday is the HR system of record — where employees request time off and where it is approved. Skills Workflow is where the consequences of that time off are felt: resourcing, scheduling, capacity, FTE and timesheets all depend on knowing who is actually available.

This integration brings absence out of HR and into planning. If leave only lives in Workday, every resourcing view in Skills Workflow is quietly wrong — someone is shown as available on a week they are on holiday, and the plan is built on it. Here, approved time off appears against the person automatically, and disappears again if it is cancelled.

It covers both shapes of absence:

- **Individual absences** — single days and short periods.
- **Leave periods** — longer, structured blocks of time off.

---

### Data Exchange Technology

The exchange runs through an **Informatica integration layer in front of Workday**, rather than calling Workday directly. Skills Workflow authenticates against that layer and requests the absence data published for it.

Both syncs are **scheduled**:

| Sync | Runs |
| --- | --- |
| Absences | Once a day |
| Leave periods | Every 6 hours |

The exchange is **one-way**: Workday is the source of truth, and Skills Workflow follows it.

The integration is scoped to a defined set of companies, so only the entities that belong in it are processed.

---

### Data Exchange (To Skills Workflow)

**Absences and leave periods → Leave**

Each absence record is checked against Skills Workflow before anything is applied, and then one of the following happens:

| Situation | Result |
| --- | --- |
| The absence is new | Leave is created against the employee, recorded as though entered by them |
| The absence was cancelled in Workday | The corresponding leave is removed |
| The absence already exists unchanged | Nothing — it is skipped rather than re-created |
| The employee is not in scope | Skipped |

Because cancellations are handled as well as approvals, a holiday that is later withdrawn in Workday stops blocking the calendar in Skills Workflow, instead of remaining as a phantom absence.

---

### What the Agency Needs to Provide

- **Access to the Workday integration endpoints** published through Informatica, plus the credentials for Skills Workflow.
- **Employees present in Skills Workflow** and matched to their Workday record.
- **Leave types in Skills Workflow** corresponding to the absence types Workday sends.
- **The companies in scope** for the integration.

---

### Monitoring and Error Handling

The integration does not guess when a record cannot be placed. An absence is reported rather than applied when the employee cannot be matched, the leave type does not exist in Skills Workflow, the leave year cannot be resolved, or a cancellation refers to leave that is not there.

In each case two things happen: an **e-mail notification** is sent, and the attempt is **recorded in the company's integration log**, so there is a durable record to review rather than only a message in someone's inbox. A problem with one record does not stop the run.

---

### Good to Know

- **Workday is the source of truth for absence.** Leave entered by hand in Skills Workflow for a synced employee will be overwritten or removed by the next run.
- **Leave types have to exist first.** A new absence type introduced in Workday needs a matching leave type in Skills Workflow before it can be imported.
- **Absence is recorded against the employee**, so it appears in resourcing and scheduling as though they entered it themselves.
- The two syncs run at different frequencies, so a long leave period may appear on a different cadence to a single day's absence.

---

### Technical Reference

#### Components

| Name | Type | Version | Stage | Role |
| --- | --- | --- | --- | --- |
| Workday - Absence | Automation | 3 | Active | Daily sync of single-day absences from Workday into Skills Workflow leaves |
| Workday - CCW | Automation | 2 | Active | 6-hourly sync of Workday leave periods into Skills Workflow leave periods |
| Workday-Absence-Validate-Get | Query | 3 | Active | Validates a Workday absence record and decides create/delete/error |
| Workday-CCWAbsence-Validate-Get | Query | 3 | Active | Same validation for leave-period (CCW) records |
| Workday-Companies-Get | Query | 2 | Active | Lists the companies (`VML%`, excluding some) this integration applies to |

Source: `[Workday Informatica] [Integrations] Workday - Absence v3 (Automation) {Active}.json`, `[Workday Informatica] [Integrations] Workday - CCW v2 (Automation) {Active}.json`, `[Workday Informatica] [Integrations] Workday-Absence-Validate-Get v3 (Query) {Active}.json`, `[Workday Informatica] [Integrations] Workday-CCWAbsence-Validate-Get v3 (Query) {Active}.json`, `[Workday Informatica] [Integrations] Workday-Companies-Get v2 (Query) {Active}.json`.

#### How It Works

Both automations follow the same shape, calling Workday's Informatica-hosted integration endpoints:

1. Authenticate: `POST {AuthUrl}` with Basic auth (credentials from the `workday-informatica` configuration key), expecting a bearer `access_token` back. A non-200 response exits with "Authentication Failure".
2. Pull data:
   - **Absence**: `POST {BaseUrl}/Workday_Absence_VML_LATAM_SubscriptionProcess100/v1/Workday_Absence_VML_LATAM_SubscriptionProcess`.
   - **CCW**: the equivalent `Workday_Ccw_VML_LATAM_SubscriptionProcess100` endpoint.
   Both normalize the response (a single object or an array) into a list and loop over each record.
3. For each record, a named query (`Workday-Absence-Validate-Get` / `Workday-CCWAbsence-Validate-Get`) checks the employee, vacation type and year against Skills Workflow and returns an `action`:
   - `Create` → the absence/leave period is created (`POST /api/leaves` for Absence; `POST /api/v3/leave-periods` then `PUT /api/leaves/status` / `PUT /api/v3/leave-periods/{id}` for CCW), impersonating the employee via `X-AppUser`.
   - `delete` → the existing leave is removed (`DELETE /api/leaves?forceDelete=true`).
   - `user` / `create-exists` → silently skipped (already up to date, or the user isn't applicable).
   - `vacationType`, `year`, `delete-missing` → treated as errors: an HTML email is sent to `helder@skillsworkflow.com` and `skills.workflow@vml.com`, and the attempt is recorded via `POST /api/v3/company-integration-logs` (documentType `Leave`, `documentName: WorkdayLeave`).
4. A create/update call that itself fails (non-200) also emails the same error notification before logging.

#`Workday-Companies-Get` restricts the integration to companies whose name matches `VML%` (with some exclusions in its `WHERE` clause) — this is a **VML**-specific integration.

#### External System Contact Points

- Workday (via an Informatica-hosted integration layer): `POST {AuthUrl}` (Basic auth), `POST {BaseUrl}/Workday_Absence_VML_LATAM_SubscriptionProcess100/v1/...` and `.../Workday_Ccw_VML_LATAM_SubscriptionProcess100/v1/...` (Bearer auth).
- Skills Workflow's own API: `POST /api/leaves`, `DELETE /api/leaves`, `POST /api/v3/leave-periods`, `PUT /api/leaves/status`, `PUT /api/v3/leave-periods/{id}`, `POST /api/v3/company-integration-logs`, named queries `Workday-Absence-Validate-Get`, `Workday-CCWAbsence-Validate-Get`, `Workday-Companies-Get`.

#### Configuration

- Configuration key **`workday-informatica`** — holds `AuthUrl`, `AuthorizationHeader` (Basic auth credentials) and `BaseUrl`. Values are not part of the export.
- Scheduler: Absence runs daily; CCW runs every 6 hours.
- Error/notification recipients are hard-coded in the automation bodies (`helder@skillsworkflow.com`, `skills.workflow@vml.com`) rather than configured.

#### Open Questions

- "CCW" is not spelled out anywhere in the export — its exact meaning (a Workday leave-period category) is not determinable.
- The precise validation rules inside `Workday-Absence-Validate-Get` / `Workday-CCWAbsence-Validate-Get` (how `vacationType`, `year` and `delete-missing` errors are triggered) depend on their full SQL, which joins several internal vacation/typology tables not fully explored here.
