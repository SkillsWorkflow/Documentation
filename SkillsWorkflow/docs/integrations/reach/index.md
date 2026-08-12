---
title: 'Reach'
description: "Reach is the agency's HR system."
sidebar_label: Reach
sidebar_position: 1
---

### Description

This article describes the integration between **Reach (SAP SuccessFactors)** and `Skills Workflow`.

Reach is the agency's HR system. This integration takes care of user provisioning: the people who exist in HR are the people who exist in Skills Workflow, kept current as they join, move and leave — without HR or IT maintaining a second list.

---

### Data Exchange Technology

Data moves as **CSV files over an SFTP server**. The server is set up by the agency, which provides the credentials to Skills Workflow.

Files are separated by purpose:

- Files carrying data go in the **Data** directory.
- Files requesting a process go in the **Process** directory.

Every file name identifies who originated it and what it contains, so both sides can tell at a glance whether a file is inbound, outbound, data, a process command, or a result. The exact format is in the technical reference.

---

### What Is Exchanged

**User Accounts** — the people record that provisions and maintains users in Skills Workflow.

Reach data is captured once per day, and the file is delivered at least once a day, sometimes more. Each delivery contains **only the users whose data changed**, which keeps the files small and the processing quick. Each new file supersedes the information in the previous ones.

---

### What the Agency Needs to Provide

- An SFTP server with the **Data** and **Process** directories, and credentials for Skills Workflow.
- The Reach user export delivered into the Data directory, following the agreed file naming convention.
- Agreement on which identifier links a person across the two systems.

---

### Good to Know

- Reach is the source of truth for the people data it sends. Manual changes in Skills Workflow to those fields will be overwritten by the next file.
- Files are consumed and removed once processed, regardless of the outcome.
- The file name suffix is a timestamp, which determines processing order when several files are waiting — so a delayed delivery still applies in the right sequence.
- Because only changed users are sent, a person missing from a file has not been removed; they simply did not change.

---

For the file naming rules, CSV templates and field-by-field descriptions, see the **[Technical Reference](./reference)**.
