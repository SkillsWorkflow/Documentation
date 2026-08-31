---
title: 'iSAP'
description: "iSAP is the agency's SAP-based back office."
sidebar_label: iSAP
---

### Description

This article describes the integration between **iSAP** and `Skills Workflow`.

iSAP is the agency's SAP-based back office. This integration keeps the two systems working from the same book of record: the people, clients and products that finance and administration maintain in iSAP appear in Skills Workflow automatically, and the jobs the teams open in Skills Workflow flow back into iSAP for costing and billing.

The job flow works in **both directions**, which is what makes this integration different from a simple master-data feed. A job can start life in either system and still end up correctly represented in the other, with the two staying in step through its whole life — including when it is closed.

For the day-to-day detail of how jobs behave once the integration is in place, see **[Job Maintenance](job-maintenance)**.

---

### Data Exchange Technology

Data moves as **text files over FTP**, using two separate connections:

| Connection | Direction | What travels on it |
| --- | --- | --- |
| Send | Skills Workflow → iSAP | Jobs |
| Receive | iSAP → Skills Workflow | Employees, Clients and Products, Jobs |

Having a distinct send and receive server means the agency can keep the inbound and outbound exchanges on different infrastructure, with different credentials, rather than sharing one folder for both.

Files follow a fixed naming convention built from the company code, a two-letter content code and a sequence number:

| File | Contents |
| --- | --- |
| `<CompanyCode>OE<sequence>.TXT` | Employees |
| `<CompanyCode>OC<sequence>.TXT` | Clients and products |
| `<CompanyCode>OJ<sequence>.TXT` | Jobs |

The sequence number determines processing order, so files are always applied in the order iSAP produced them, even if several are waiting. Once a file has been handled it is moved into a **Success** or a **Failure** subfolder, so it is never processed twice and the agency can see what happened to any given delivery.

The integration runs on a schedule, company by company.

---

### Data Exchange (To Skills Workflow)

**Employees**

Employee records from iSAP are created and maintained as Users and Employees in Skills Workflow, carrying their employee identifier, initials, first and last name, department, title, organisational element, phone, e-mail, status and effective start date.

The file also flags each person's role in the commercial structure — **Account Manager**, **Account Executive** and **Buyer**. Those flags matter beyond the user record: a job can only be exported to iSAP if its Project Owner and Job Creator are marked as AM/AE, so this feed is what makes the outbound job flow possible.

Departments and typologies are created when they do not already exist.

**Clients and Products**

The client and product catalogue is imported from iSAP, with codes, account group, local and English names, addresses, country, postal and zip codes, phone, parent reference, payment methods and payment terms.

**Jobs**

Jobs opened in iSAP are imported into Skills Workflow, creating the project and the job. Jobs closed in iSAP are closed in Skills Workflow, and the job's end date is set to the day it was closed.

---

### Data Exchange (From Skills Workflow)

**Jobs**

Jobs created in Skills Workflow are written to a job file and sent to iSAP. Every subsequent change to the job is sent as well, so iSAP always holds the current version.

The export is optional and is switched on per company with the **Export Job** setting. It can also be limited to jobs explicitly marked for integration, rather than every job, using **Send Only To Integrate** — useful when only part of the agency's work is meant to reach the back office.

---

### Settings the Agency Controls

The integration is configured per company, from the integration settings area in Skills Workflow:

| Setting | What it does |
| --- | --- |
| Send FTP Host / Port / Username / Password / Directory | The connection jobs are sent on |
| Receive FTP Host / Port / Username / Password / Directory | The connection files are collected from |
| Export Job | Whether jobs are sent to iSAP at all |
| Send Only To Integrate | Limits the export to jobs marked for integration |
| Job File Sequence | The sequence number the next outbound job file will use |
| Project Open Workflow State Name | The stage a project is placed in when opened |
| Project Close Workflow State Name | The stage that represents a closed project |
| Job Open Workflow State Name | The stage a job is placed in when opened |
| Job Close Workflow State Name | The stage — or stages, separated by `;` — that represent a closed job |
| Account Executive Id | The field that identifies the Account Executive |
| Account Manager Id | The field that identifies the Account Manager |
| Leave Responsibles | Users, separated by `;`, whose responsible assignment the integration must not change |
| End Date Days | How far ahead a job's end date may be set |
| Continue On First Error | Whether a failing record stops the file or the run continues |
| Administrator Mail | Address that receives the error notifications for this company |
| Log Level Type | How much detail is written to the integration log |

The workflow state settings are what let each agency map its own stage names onto the open and closed concepts iSAP expects, instead of being forced into fixed stage names.

---

### What the Agency Needs to Provide

- Two FTP endpoints — one to send to, one to collect from — with directories and credentials for each.
- The iSAP exports delivered into the receive directory, following the file naming convention above.
- The company code used in iSAP.
- Confirmation of which workflow stages count as open and closed for projects and for jobs.
- Confirmation of which user fields carry the Account Manager and Account Executive.
- An administrator e-mail address to receive integration notifications.

---

### Monitoring and Error Handling

Every run writes to the integration log inside Skills Workflow, at the level of detail chosen in **Log Level Type**. The log is cleared at the start of each run.

A summary e-mail is sent to the address configured in **Administrator Mail**. Whether a failing record aborts the rest of the file is the agency's choice, through **Continue On First Error** — strict processing suits a first rollout, where a bad record should stop everything and be investigated; permissive processing suits steady state, where one malformed row should not hold up the day's work.

A file that could not be fully imported is moved to the **Failure** folder and can be re-delivered once the underlying issue is resolved.

---

### Good to Know

- A job will not export if its Project Owner and Job Creator are not marked as Account Manager / Account Executive in iSAP. This is the most common cause of integration errors on this interface.
- iSAP is the source of truth for employees, clients and products. Manual changes to those records in Skills Workflow will be overwritten.
- Jobs are shared. Either system can open one, and closing it on either side closes it on the other.
- **Job File Sequence** is part of the contract with iSAP. Changing it manually will make the files arrive out of order.
