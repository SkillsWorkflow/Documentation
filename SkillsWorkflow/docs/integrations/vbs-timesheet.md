---
id: vbs-timesheet
title: 'VBS Timesheet'
description: "This integration is separate from the VBS employee integration."
sidebar_label: VBS Timesheet
---

### Description

This article describes the **VBS Timesheet** integration between `Skills Workflow` and **VBS**.

This integration is separate from the [VBS](vbs) employee integration. While that one brings people into Skills Workflow, this one sends **time** back out: the hours and the leave that people record in Skills Workflow are pushed into VBS, so that the agency's cost, billing and payroll processes run on the same time data the teams actually entered.

It takes care of the full life cycle of a time entry, not just the creation:

- Time entries and leave created in Skills Workflow are sent to VBS.
- Entries changed in Skills Workflow are updated in VBS.
- Entries deleted in Skills Workflow are deleted in VBS.
- The status VBS gives back to an entry is written onto the entry in Skills Workflow.

---

### Data Exchange Technology

The integration calls the VBS timesheet API directly, using the address and the authentication headers configured by the agency. No files, no FTP servers and no locally installed application are required.

The integration runs on a schedule, company by company, and only within the working window the agency defines. Each company can decide:

- whether the integration runs on **Saturday** and on **Sunday**
- the **start** and **final** work hour between which it is allowed to run

Outside that window, the company is simply skipped. This keeps the traffic against VBS inside the hours the agency wants it to happen.

Only time recorded from the configured **Timesheet Period From** date onwards is considered, so switching the integration on does not push years of historical time into VBS.

---

### Data Exchange (From Skills Workflow)

**Time entries and leave**

Time recorded in Skills Workflow is sent to VBS with the employee, the date, the duration, the client, the project and the work type. Leave is sent the same way, flagged as leave rather than as worked time. Public holidays registered in Skills Workflow are taken into account.

Time can be sent either detailed or grouped, depending on how the agency wants VBS to see it:

| Setting | Effect |
| --- | --- |
| Timesheet Group By Client | Entries are grouped by client before being sent |
| Timesheet Group By Project | Entries are grouped by project before being sent |

Once an entry is accepted, VBS returns its own identifier, which is stored on the entry in Skills Workflow. That identifier is what links the two records from then on.

**Changes and deletions**

When an entry that had already been sent is changed in Skills Workflow, the corresponding entry is updated in VBS. When it is deleted, it is deleted in VBS as well and the link between the two systems is cleared, so the time does not stay behind in VBS after being removed from Skills Workflow.

---

### Data Exchange (To Skills Workflow)

After sending, the integration reads the entries back from VBS and updates the **status** of the corresponding timesheet or leave in Skills Workflow. This means the teams can see in Skills Workflow whether their time has been accepted downstream, without having to open VBS.

---

### Settings the Agency Controls

The integration is configured per company, from the integration settings area in Skills Workflow:

| Setting | What it does |
| --- | --- |
| Api Link | Address of the agency's VBS timesheet API |
| Authorization Header | Authentication token sent with each request |
| Id External System Header | Identifier of Skills Workflow as an external system in VBS |
| User Login | User the integration operates as |
| Code | Company code in VBS |
| Timesheet Period From | Earliest date from which time is exported |
| Timesheet Group By Client | Groups entries by client before sending |
| Timesheet Group By Project | Groups entries by project before sending |
| Run On Saturday / Run On Sunday | Whether the integration runs at the weekend |
| Start Work Hour / Final Work Hour | Hours between which the integration is allowed to run |
| Check Duplicity | Checks VBS for an existing entry before creating a new one, to avoid duplicates |
| Administrator Mail | Address that receives the error notifications for this company |
| Log Level Type | How much detail is written to the integration log |

---

### What the Agency Needs to Provide

- The address of the VBS timesheet API, plus the authorization token, the external system identifier and the user the integration should operate as.
- The company code in VBS.
- The date from which time should start being exported.
- The working window and grouping rules the agency wants applied.
- An administrator e-mail address to receive integration notifications.

---

### Monitoring and Error Handling

Every run writes to the integration log inside Skills Workflow, at the level of detail chosen in **Log Level Type**. The log is cleared at the start of each run.

An entry that VBS rejects is recorded with the reason VBS gave, and a summary e-mail is sent to the address configured in **Administrator Mail**. Rejected entries do not stop the run — the remaining entries are still sent — and they are retried on the following run, so a transient problem in VBS resolves itself once the connection is back.

---

### Marketplace Export: Cost Centre Workspace

A separate Marketplace component, **`VBS Time Sheet Cost Centre`** (Workspace, v3, Active — `[VBS] [Integrations] VBS Time Sheet Cost Centre v3 (Workspace) {Active} - Workspace.json`), implements a different mechanism from the settings-driven push described above: an in-app query view that produces a VBS-ready export row per timesheet entry, apparently for a manual/Excel-based hand-off rather than the automatic API push. Its own description (stored in the component, in Portuguese) frames it as "Business rules for the VBS Excel integration."

- The query computes, per timesheet entry: the user's and client's external ids, the destination **Company** and **Division** codes, and a **CostCenter**, using lookup tables `LineofBusiness` and `DestinationCostCenter`.
- Cost-center routing follows the discipline (department type) and the project's business line, with exceptions: divisions flagged "Don't Use Line of Business" (e.g. a central production division) and clients classified `InterCompany` instead use the user's own cost center and branch; if a project has no business line, the client's is used instead.
- Freelancer-type users are excluded.
- Only approved hours (`Aprovado = 'S'`) are included, and the row carries a fixed `cod_system = '24'` and `TypeHour = 'D'`.

This looks like a client-specific customization layered on top of, or as an alternative to, the native VBS Timesheet integration described elsewhere on this page — not determinable from the export how the two relate operationally (e.g. whether this Workspace is used instead of the API push for this client, or as a manual reconciliation/audit view).

---

### Good to Know

- Entries are matched by the VBS identifier stored on the Skills Workflow timesheet or leave. It should not be edited manually.
- **Check Duplicity** is the safety net for cases where an entry may have reached VBS but the confirmation did not reach Skills Workflow. With it enabled, the integration checks VBS first instead of creating a second entry.
- Projects need to carry their VBS reference for detailed (ungrouped) time to be exported against the right job.
- Because the integration also reads statuses back, running it more often means the teams see the downstream status sooner.
