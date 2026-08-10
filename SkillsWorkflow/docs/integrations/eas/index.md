---
title: 'EAS'
sidebar_label: EAS
sidebar_position: 1
---

### Description

This article describes the integration between **EAS** and `Skills Workflow`.

EAS holds the agency's people and commercial master data. This integration keeps Skills Workflow aligned with it, so that the platform always reflects the organisation as EAS knows it — the right people, in the right departments, working on the right clients and products — without anyone maintaining two lists.

It is the broadest of the file-based integrations, covering both the people side and the commercial side, and it carries results back so the agency can see what happened to each delivery.

---

### Data Exchange Technology

Data moves as **JSON files over an SFTP server**. The server is set up by the agency, which provides the credentials to Skills Workflow.

Files are separated by purpose:

- Files carrying data go in the **Data** directory.
- Files requesting a process go in the **Process** directory.

Every file name identifies who sent it and what it contains, so both sides can tell at a glance whether a file is inbound, outbound, data, a process command, or a result. The naming convention is part of the contract between the two systems — the exact format is in the technical reference.

---

### What Is Exchanged

| Area | What it covers |
| --- | --- |
| Users | The people who need access to Skills Workflow, with their company, department, manager and working hours |
| Leaves | Leave balances, so availability in Skills Workflow reflects entitlement |
| Time Sheets | Time data exchanged between the two systems |
| Client Groups | The grouping structure above clients |
| Clients | The client catalogue |
| Products | The product catalogue, under their clients |
| Job Jackets | The job structure |
| Data Results | The outcome of each processed file, sent back so the agency can confirm what succeeded and what did not |

The **Data Results** feed is what makes this integration auditable: rather than assuming a delivery worked, the agency gets a file back stating the result.

---

### What the Agency Needs to Provide

- An SFTP server with the **Data** and **Process** directories, and credentials for Skills Workflow.
- The EAS exports delivered into those directories, following the agreed file naming convention.
- Agreement on which identifiers link a person, client or product across the two systems.

---

### Good to Know

- Files are consumed and removed once processed, regardless of the outcome — the result is reported through the Data Results feed rather than by leaving the file in place.
- The file name suffix is a timestamp, which also determines processing order when several files of the same type are waiting.
- EAS is the source of truth for the data it sends. Manual changes in Skills Workflow to those records will be overwritten by the next file.

---

For the file naming rules, JSON templates and field-by-field descriptions, see the **[Technical Reference](./reference)**.
