---
title: 'CETA'
description: "CETA is the agency's job and financial back office."
sidebar_label: CETA
sidebar_position: 1
---

### Description

This article describes the integration between **CETA** and `Skills Workflow`.

CETA is the agency's job and financial back office. This integration splits the responsibilities cleanly between the two systems, so each one owns what it is best at:

- **Skills Workflow owns the commercial master data** — clients and products are managed there and pushed to CETA.
- **CETA owns the work** — projects and jobs are opened in CETA and pulled into Skills Workflow.
- **Skills Workflow owns the time** — approved timesheets are sent back to CETA for costing and billing.

The result is that teams plan and record work in Skills Workflow, while CETA remains the system of record for the job structure and the financials, with no manual re-keying at any point.

---

### Data Exchange Technology

The exchange runs over **REST services** between the two systems. No file transfer and no locally installed application are required.

---

### What Goes Out To CETA

| Sent to CETA | Notes |
| --- | --- |
| Clients | New clients created in Skills Workflow are created automatically in CETA, and later changes are synchronised |
| Products | Same — created and kept in step with Skills Workflow |
| Timesheets | Only **approved** timesheets are sent |

Sending only approved time is deliberate: CETA receives figures the agency has already signed off, so nothing has to be reversed downstream because somebody was still editing their week.

---

### What Comes Into Skills Workflow

| Received from CETA | Notes |
| --- | --- |
| Projects | Imported when they reach **Pencil** or **Confirmed** status in CETA |
| Jobs | All jobs are imported. Only **approved** jobs are offered as timesheet suggestions |

Importing projects from the "Pencil" stage means the teams can see and plan against work that is still being negotiated, while the timesheet suggestion rule ensures people only book time to jobs that are actually approved.

---

### What the Agency Needs to Provide

- Network access between CETA and Skills Workflow, and the credentials for the CETA services.
- Agreement on which identifiers link clients, products, projects and jobs across the two systems.
- Confirmation of which Skills Workflow timesheet approval state counts as approved for export.

---

### Good to Know

- Clients and products are managed in Skills Workflow. Editing them in CETA will be overwritten.
- Projects and jobs are managed in CETA. They cannot be created in Skills Workflow and pushed the other way.
- A job that has not been approved in CETA is still visible in Skills Workflow — it simply will not be suggested when somebody fills in a timesheet.

---

For the field-by-field mappings, see the **[Technical Reference](./reference)**.
