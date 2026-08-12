---
id: hr-link
title: 'HR-Link'
description: "HR-Link is the HR system of record."
sidebar_label: HR-Link
---

### Description

This article describes the integration between **HR-Link** and `Skills Workflow`.

HR-Link is the HR system of record. This integration takes care of the people side of the platform: every employee who exists in HR also exists in Skills Workflow, in the right company, department and typology, reporting to the right manager — without HR or IT having to maintain a second list.

It is one-way. HR-Link is the source of truth, and Skills Workflow follows it.

---

### Data Exchange Technology

The integration calls the HR-Link web services directly. Skills Workflow authenticates first against HR-Link's token service using a key and secret supplied by the agency, and then reads two separate feeds with the token it gets back:

| Feed | What it carries |
| --- | --- |
| Personal data | Who the person is — names, contact details, addresses |
| Job data | What the person does — company, business unit, department, job code, employee class, location and supervisor |

The two feeds are combined into a single view of each employee before anything is written to Skills Workflow. The integration runs on a schedule, company by company, and picks up what changed since the previous successful run.

No files, no FTP server and no locally installed application are required.

---

### Data Exchange (To Skills Workflow)

**What is created and maintained**

- **Users and Employees** — new joiners are created automatically; existing people are updated.
- **Typologies and Typology Groups** — created when they do not yet exist, so the agency does not have to pre-build the structure.
- **Departments** — matched by their external identifier against the departments already registered in Skills Workflow.
- **Responsible (manager)** — set from the supervisor in the job data feed, so the approval chain reflects the HR hierarchy.

**Employee fields populated**

Name, UserName, Company, Company Code, Department, Typology, E-mail, Phone, Hire Date, IsActive and SSO Username.

**Status handling**

The active status coming from HR-Link is written to the **User Active Status** field, so somebody on leave can be told apart from somebody active. Terminated employees are inactivated automatically — nothing is deleted, so history and reporting are preserved.

After creation, the fields that continue to be updated from HR-Link are **IsActive** and **Termination Date**. Everything else can be adjusted in Skills Workflow without the next run overwriting it.

**Overriding the HR structure**

If **Department External Id** and **Typology External Id** are filled in, every imported employee is given that department and typology regardless of what HR-Link sends. This is the setting to use when the agency does not want the full HR structure reproduced in Skills Workflow.

---

### Settings the Agency Controls

The integration is configured per company, from the integration settings area in Skills Workflow:

| Setting | What it does |
| --- | --- |
| Token Url | HR-Link service that issues the access token |
| Api Key / Api Secret | Credentials used to obtain that token |
| Personal Data Url | Feed that supplies the personal data |
| Job With Compensation Url | Feed that supplies the job data |
| Code | Company code in HR-Link |
| Department External Id | Forces a single department on all imported employees |
| Typology External Id | Forces a single typology on all imported employees |
| User Active Status | Maps the HR-Link status values onto the Skills Workflow active status |
| Administrator Mail | Address that receives the error notifications for this company |
| Log Level Type | How much detail is written to the integration log |
| Log Retention Days | How long the integration log is kept |

---

### What the Agency Needs to Provide

- The HR-Link token, personal data and job data service addresses.
- A dedicated API key and secret for Skills Workflow.
- The company code in HR-Link, and the status values that should count as active.
- An administrator e-mail address to receive integration notifications.

---

### Monitoring and Error Handling

Every run writes to the integration log inside Skills Workflow, at the level of detail chosen in **Log Level Type**, and the log is kept for the number of days set in **Log Retention Days**.

A summary e-mail is sent to the address configured in **Administrator Mail**. A failure on one employee does not stop the run; the remaining employees are still processed and everything that failed is reported at the end.

---

### Good to Know

- Employees are matched by their HR-Link identifier. That identifier is what ties the HR record to the Skills Workflow user and should not be edited manually.
- Because HR-Link is the source of truth, a person removed from the HR feed will be inactivated in Skills Workflow on the next run.
- Departments are matched, not created. A department that exists in HR-Link but not in Skills Workflow needs to be created first, or the override settings used instead.
