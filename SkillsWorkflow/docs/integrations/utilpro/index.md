---
title: 'UtilPro'
sidebar_label: UtilPro
sidebar_position: 1
---

### Description

This article describes the integration between **UtilPro** and `Skills Workflow`.

UtilPro is the agency's HR and payroll system. This integration takes care of user provisioning: the people who exist in HR are the people who exist in Skills Workflow, with the department, typology and reporting line HR already maintains — so nobody has to keep a second list current.

It also carries the working-time rules — required daily and weekly hours, maximum hours, overtime thresholds — which is what allows timesheets, capacity and resourcing in Skills Workflow to be measured against each person's real contract rather than an assumed standard.

---

### Data Exchange Technology

Data moves as **CSV files over an SFTP server**. The server is set up by the agency, which provides the credentials to Skills Workflow.

Files are separated by purpose:

- Files carrying data go in the **Data** directory.
- Files requesting a process go in the **Process** directory.

Once a file has been handled it is moved into a **Success** or a **Failure** folder, so it is never processed twice and the agency can always see what happened to a given delivery.

---

### What Is Exchanged

**Users** — delivered at least once a day, based on UtilPro data. Each file supersedes the information in the previous ones.

The record carries three kinds of information:

| Group | What it covers |
| --- | --- |
| Identity and access | Username, e-mail, SSO account, external identifiers, active status |
| Organisation | Company, department, division, typology and typology group, user type, and the person's responsible |
| Working time | Maximum hours, required daily and weekly hours, overtime threshold and paid-overtime flag, hire date, start date and expiration date |

The **start date** is distinct from the hire date: it is the date from which the person is expected to fill in timesheets in Skills Workflow, which is often later than the day they joined.

---

### What the Agency Needs to Provide

- An SFTP server with the **Data** and **Process** directories, and credentials for Skills Workflow.
- The UtilPro user export delivered into the Data directory, following the agreed file naming convention.
- Agreement on which identifiers link a person, department and typology across the two systems.

---

### Good to Know

- UtilPro is the source of truth for the people data it sends. Manual changes in Skills Workflow to those fields will be overwritten by the next file.
- The file name suffix is a timestamp, which determines processing order when several files are waiting.
- A file that fails is moved to the **Failure** folder and can be corrected and re-delivered.

---

For the file naming rules, CSV template and field-by-field descriptions, see the **[Technical Reference](./reference)**.
