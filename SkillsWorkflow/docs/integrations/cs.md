---
id: cs
title: 'CS (Career Settings)'
description: "Career Settings is the HR system of record."
sidebar_label: CS
---

### Description

This article describes the integration between **CS (Career Settings)** and `Skills Workflow`.

Career Settings is the HR system of record. This integration takes care of the people side of the platform: it makes sure that every employee who exists in HR also exists in Skills Workflow, with the right company, department, job typology, manager and profile — and that everyone who leaves the organisation is deactivated on time, without HR or IT having to touch Skills Workflow at all.

It covers two distinct flows:

- **The people file** — the regular export of active employees.
- **The terminations file** — the export of leavers, used to deactivate users.

---

### Data Exchange Technology

Career Settings drops CSV files on an SFTP server. Skills Workflow connects to that server on a schedule, using key-based authentication, and processes any new files it finds.

Files are identified by what their name contains:

| Feed | File name contains | Format |
| --- | --- | --- |
| People | `PDRNon-Confidential-Skills` | `.CSV` |
| Terminations | `TerminationDetailsReport` | `.CSV` |

Files are processed in order, oldest first. Once a file has been handled it is moved out of the working folder into a **Success** or a **Failure** subfolder, so it is never processed twice and so the agency can always see what happened to a given delivery.

The terminations feed is only processed for companies where the **Import Termination Files** setting is enabled.

---

### Data Exchange (To Skills Workflow)

**Employee information received**

The people file carries the following information for each employee:

- Career Settings ID
- Preferred Name
- Business Title
- Employee Class
- Legal Entity, and Legal Entity ID
- BU Name, and Business Unit ID
- Department, and Department ID
- LOB1 and LOB2
- Most Recent Hire Date
- Email Address
- HFM Code
- Supervisor, and Supervisor Career Settings ID
- LLID

**What the integration creates and maintains**

From that file, Skills Workflow keeps the following up to date:

- **Employees and Users** — new joiners are created automatically; existing people are updated.
- **Typologies and Typology Groups** — created when they do not yet exist, and linked to the right companies and departments.
- **Responsible (manager)** — set from the employee's supervisor, so the approval chain reflects the HR hierarchy.
- **Profiles** — the roles listed in **Default User Profile** are assigned to every new user.
- **Leave entitlements** — the leave types configured for the company are attached to each new user.
- **Delegate** — when a delegate user name is configured, new users are given that delegate automatically.
- **Timesheet requirement** — users whose type appears in **User Types With Required Timesheets** are flagged as needing to fill timesheets.

**Leavers**

The terminations file inactivates users. The termination date recorded in Skills Workflow is the day before the date supplied by HR. Terminations dated in the future are deliberately left alone and will be applied on a later run, once the date has passed — so somebody leaving next month keeps working normally until they actually leave. When a user is inactivated, a post is created so the change is visible in the platform.

---

### Settings the Agency Controls

The integration is configured per company, from the integration settings area in Skills Workflow:

| Setting | What it does |
| --- | --- |
| Ftp Host Ip / Ftp Host Port | Address of the SFTP server |
| Ftp Username | User the integration connects with |
| Ftp Directory | Folder that is watched for new files |
| Ftp Key File Content | Private key used to authenticate |
| Default User Profile | Roles assigned to every new user, separated by `;` |
| User Updatable | Whether existing users are updated from later files, or only created once |
| Disable Responsible Update | Prevents the manager from being overwritten by the HR feed |
| Link Company Codes | Company codes, separated by `;`, that should be linked together |
| Delegate UserName | User automatically set as delegate for new users |
| Timesheets ToApprove Block Enabled | Whether the timesheet approval block applies to imported users |
| User Types With Required Timesheets | User types for which timesheets are mandatory |
| Import Termination Files | Enables the terminations feed for this company |
| Administrator Mail | Address that receives the error notifications for this company |
| Log Level Type | How much detail is written to the integration log |

---

### What the Agency Needs to Provide

- An SFTP server, the folder to watch, a dedicated user and the private key for that user.
- The regular Career Settings exports delivered into that folder, with the expected file names.
- The default profile, delegate and typology decisions listed above.
- An administrator e-mail address to receive integration notifications.

---

### Monitoring and Error Handling

Every run writes to the integration log inside Skills Workflow, at the level of detail chosen in **Log Level Type**. The log is cleared at the start of each run.

Problems are reported at file level as well as at record level, so it is possible to see both that a file failed and which specific rows caused it. A summary e-mail is sent to the address configured in **Administrator Mail**.

A file that could not be fully imported is moved to the **Failure** folder and can be re-delivered once the underlying issue is resolved.

---

### Good to Know

- Employees are matched by their Career Settings ID. That identifier is what ties the HR record to the Skills Workflow user.
- **User Updatable** controls whether the HR feed is authoritative after creation. With it disabled, later files will not overwrite manual changes made in Skills Workflow.
- **Disable Responsible Update** is useful when the reporting line in Skills Workflow is intentionally different from the HR hierarchy.
- Nothing is deleted. Leavers are inactivated and keep their history.
