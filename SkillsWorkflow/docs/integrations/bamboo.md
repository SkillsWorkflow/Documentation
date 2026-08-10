---
id: bamboo
title: 'BambooHR'
sidebar_label: BambooHR
---

### Description

This article describes the integration between **BambooHR** and `Skills Workflow`.

BambooHR is where the agency's people and their time off are managed. This integration keeps Skills Workflow aligned with it on two fronts:

- **People** — employees created in BambooHR become users in Skills Workflow.
- **Time off** — leave requested and approved in BambooHR appears as leave in Skills Workflow.

The second one is what makes the difference day to day. Resourcing, scheduling, FTE and timesheets all depend on knowing who is actually available; if leave only lives in BambooHR, every one of those views is wrong. This integration means people book their holiday once, in HR, and the whole platform knows about it.

---

### Data Exchange Technology

The integration is delivered as a **Marketplace automation**, not as a scheduled job. It is event-driven:

1. A change in BambooHR — a new employee, or a time-off request being created or decided — fires a webhook.
2. The webhook triggers the automation in Skills Workflow.
3. The automation calls the BambooHR API to read the current state of that employee.
4. Skills Workflow is updated to match.

Because it reads the current state rather than trusting the event payload, an event that arrives late or out of order still leaves Skills Workflow correct.

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

- A BambooHR account with API access, the company domain, and an API key.
- Webhooks configured in BambooHR for employee changes and time-off changes, pointing at the Skills Workflow automation.
- Confirmation of which Skills Workflow leave types the BambooHR time-off types map onto.

---

### Package Contents

To enable this integration, install the package from the Marketplace. It contains the automation workflow that performs the sync, and the named query used to look up existing leave before creating new records.

---

### Security

- The automation endpoint is public but requires a **shared key**.
- The shared key is set by the agency and is unique to it.
- All data is encrypted in transit and at rest.
- PII, and therefore GDPR compliance for the source data, remains controlled by BambooHR.
- The BambooHR API key is stored in Skills Workflow as a configuration key, not inside the automation.

---

### Good to Know

- Users and leave are matched by the BambooHR ID. It should not be edited manually.
- The integration is one-way. Leave approved in Skills Workflow does not create a request in BambooHR — HR remains the place where time off is booked.
- Because it is event-driven, leave that already existed before the integration was switched on is not backfilled automatically.
