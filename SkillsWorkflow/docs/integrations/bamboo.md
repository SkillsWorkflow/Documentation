---
id: bamboo
title: 'BambooHR'
description: "BambooHR is where the agency's people and their time off are managed."
sidebar_label: BambooHR
---

:::caution Mechanism corrected, and two of three jobs are currently disabled
This page previously described the integration as event-driven, firing off a BambooHR webhook. The exported components (Module `BambooHR`) show three independently **scheduled, daily-polling** automations instead — each calling BambooHR's `/v1/employees/changed?since=...&type=...` endpoint for what changed since yesterday. No webhook file exists anywhere in this export. The "Data Exchange Technology" section below has been corrected accordingly.

More importantly: of the three, **only `BambooHR - Daily Employee Update` has its scheduler switched on** (`isActive: true`). `BambooHR - Daily Create Employee` and `BambooHr - Leaves Update` are both exported with `isActive: false` on their scheduler — meaning, as exported, new employees are not being created automatically and leave is not being synced, only changes to existing users' fields are. If that's not the intended current state, it needs fixing in the platform, not in this page.
:::

### Description

This article describes the integration between **BambooHR** and `Skills Workflow`.

BambooHR is where the agency's people and their time off are managed. This integration keeps Skills Workflow aligned with it on two fronts:

- **People** — employees created in BambooHR become users in Skills Workflow.
- **Time off** — leave requested and approved in BambooHR appears as leave in Skills Workflow.

The second one is what makes the difference day to day. Resourcing, scheduling, FTE and timesheets all depend on knowing who is actually available; if leave only lives in BambooHR, every one of those views is wrong. This integration means people book their holiday once, in HR, and the whole platform knows about it.

---

### Data Exchange Technology

The integration is delivered as three separate **Marketplace automations**, each on its own daily schedule — not event-driven:

| Automation | Role | Scheduler (as exported) |
| --- | --- | --- |
| BambooHR - Daily Create Employee | New employees changed/inserted in BambooHR since yesterday → created as Users | **Disabled** (`isActive: false`) |
| BambooHR - Daily Employee Update | Employees updated in BambooHR since yesterday → matching User fields updated | **Active** |
| BambooHr - Leaves Update | Time-off requests for the company's close-vacations period → leave created/updated/deleted in Skills Workflow | **Disabled** (`isActive: false`) |

Each run calls BambooHR's "changed employees" endpoint (`GET /v1/employees/changed?since=<yesterday>&type=...`), then for every id returned fetches that employee's full record (`GET /v1/employees/{id}?fields=...`) and applies it. Reading the current state rather than trusting the event/list payload means a run that's late or picks up the same id twice still leaves Skills Workflow correct.

Source: `[BambooHR] [Integrations] Daily Create Employee v17 (Automation) {Active}.json`, `[BambooHR] [Integrations] Daily Employee Update v15 (Automation) {Active}.json`, `[BambooHR] [Integrations] Leaves Update v17 (Automation) {Active}.json`, plus 8 supporting named queries (`BambooHr-GetSkillsInformation`, `BambooHr-GerUserByExternalId`, `BambooHr-UserExists`, `BambooHr-GetSupervisorByExternalId`, `BambooHr-GetsupervisorByEmail`, `BambooHr-GetUserLeaveInformation`, `BambooHr-GetUserLeavesForYear`, `BambooHr-GetCompanyCloseVacationsPeriod`).

---

### Data Exchange (To Skills Workflow)

**Employees**

New employees in BambooHR are created as Users in Skills Workflow:

| Field | Source |
| --- | --- |
| User | The BambooHR ID, stored in **BambooId** |
| UserName | The user's e-mail from BambooHR |
| Name | The user's full name |
| Typology | Created if it does not exist |
| Typology Group | Created if it does not exist |
| Department | The BambooHR ID, stored in **BambooId** on the department |
| Responsible | The user's supervisor in BambooHR |
| Required Hours | The working hours held in BambooHR |
| E-mail | The user's e-mail |
| Hire Date | The user's hire date |

**Time off**

For each employee, the automation reads their time-off requests from BambooHR across **every** status — approved, denied, requested, superseded and cancelled — and reflects them in Skills Workflow:

- A request that does not yet exist in Skills Workflow is created as leave and sent for approval.
- The leave is then approved or rejected so that its state matches the decision recorded in BambooHR.

Reading all statuses, rather than only approved ones, is what allows a holiday that was later cancelled or denied in BambooHR to be corrected in Skills Workflow instead of being left blocking the calendar.

Leave is matched per employee and per day, so re-running the automation does not create duplicates.

---

### Where This Data Is Used

- **User data** appears in the User Profile, and in Resourcing and Contracted Time.
- **Absence data** appears in approvals and scheduling.
- **FTE and Timesheets** use both.

---

### What the Agency Needs to Provide

- A BambooHR account with API access, the company domain, and an API key (read via a `Config` configuration key referenced by all three automations — its exact name and value are not part of the export).
- Confirmation of which Skills Workflow leave types the BambooHR time-off types map onto.

---

### Package Contents

To enable this integration, install the package from the Marketplace. As exported it contains three automations (`BambooHR - Daily Create Employee`, `BambooHR - Daily Employee Update`, `BambooHr - Leaves Update`) and 8 supporting named queries — not the single automation + single query previously documented here.

---

### Security

- All three automations poll BambooHR outbound, on a schedule — there's no public/inbound endpoint or shared key involved in what's exported (the previous "public endpoint with a shared key" description doesn't match; not determinable whether an older version worked that way).
- All data is encrypted in transit and at rest.
- PII, and therefore GDPR compliance for the source data, remains controlled by BambooHR.
- The BambooHR API key is stored in Skills Workflow as a configuration key, not inside the automation.

---

### Good to Know

- Users and leave are matched by the BambooHR ID. It should not be edited manually.
- The integration is one-way. Leave approved in Skills Workflow does not create a request in BambooHR — HR remains the place where time off is booked.
- Because it is event-driven, leave that already existed before the integration was switched on is not backfilled automatically.
