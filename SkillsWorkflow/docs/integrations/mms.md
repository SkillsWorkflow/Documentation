---
id: mms
title: 'MMS'
description: "MMS holds the agency's master data — the official list of clients, products, suppliers, services and people."
sidebar_label: MMS
---

### Description

This article describes the integration between **MMS** and `Skills Workflow`.

MMS holds the agency's master data — the official list of clients, products, suppliers, services and people. This integration takes care of loading that master data into Skills Workflow and keeping it aligned, so that teams always plan and book work against the same client, product and service catalogue that the rest of the group uses.

It is a one-way integration: MMS is the source of truth, and Skills Workflow follows it.

---

### Data Exchange Technology

MMS publishes a master-data file on an FTP server. Skills Workflow connects to that server on a schedule and looks for files whose name contains `_SKILLS`, in JSON format.

Files are processed in order, oldest first. Every file that has already been imported is recorded, so a file is never processed twice — even if it is still sitting on the server. Once a file has been handled it is moved out of the working folder.

The FTP connection details are taken from the default company configured for the integration; the contents of the file are then distributed across all the companies on the tenant.

---

### Data Exchange (To Skills Workflow)

A master-data file can carry the following blocks:

| Block | What it contains |
| --- | --- |
| Companies | The list of companies referenced by the rest of the file |
| Clients | The client catalogue |
| Client Companies | Which clients belong to which company |
| Products | The product catalogue, with the client each product belongs to |
| Suppliers | The supplier catalogue |
| Supplier Companies | Which suppliers are available to which company |
| Services | The service catalogue |
| Supplier Services | Which services each supplier provides |
| Users | The people catalogue |
| User Client Companies | Which users are assigned to which client |

From these blocks, Skills Workflow creates and maintains:

- **Billing Clients** and **Commercial Clients**, together with the companies they are linked to
- **Billing Products** and **Commercial Products**, together with the companies they are linked to
- **Suppliers**
- **Services**, and the suppliers that provide them
- **Employees and Users**, with their profiles
- **Commercial Client Users** — the assignment of people to clients

Records carry an inactivation date in the file. When that date is filled in, the corresponding record is deactivated in Skills Workflow rather than deleted, so history and reporting are preserved. Commercial clients that are deactivated are moved to the stage configured in **Commercial Client Cancel Stage**.

New users are created with the department, typology and profile configured as defaults for the company, and with an SSO user name built using the suffix configured in **SsoUserName Ends With**.

---

### Settings the Agency Controls

The integration is configured per company, from the integration settings area in Skills Workflow:

| Setting | What it does |
| --- | --- |
| Ftp Host Ip / Ftp Host Port | Address of the FTP server |
| Ftp Username / Ftp Password | Credentials the integration connects with |
| Ftp Directory | Folder that is watched for new files |
| Commercial Client Cancel Stage | Stage applied to commercial clients that MMS deactivates |
| Default User Department | Department given to users created by the integration |
| Default User Typology | Typology given to users created by the integration |
| Default User Profile | Roles given to users created by the integration |
| SsoUserName Ends With | Domain suffix used to build the SSO user name |
| Administrator Mail | Address that receives the error notifications for this company |
| Log Level Type | How much detail is written to the integration log |

---

### What the Agency Needs to Provide

- An FTP server, the folder to watch, and the credentials for it.
- The MMS master-data exports delivered into that folder, with `_SKILLS` in the file name and in JSON format.
- The default department, typology and profile to apply to imported users, and the SSO domain suffix.
- An administrator e-mail address to receive integration notifications.

---

### Monitoring and Error Handling

Every run writes to the integration log inside Skills Workflow, at the level of detail chosen in **Log Level Type**. The log is cleared at the start of each run.

Failures are reported both at file level and at record level, and a summary e-mail is sent to the address configured in **Administrator Mail**. A record that fails does not stop the file: the remaining records are still processed and everything that failed is reported at the end.

---

### Good to Know

- MMS is the source of truth for the catalogues it covers. Changes made manually in Skills Workflow to clients, products, suppliers or services will be overwritten by the next file.
- Files are imported once and only once. To reload a file, it has to be delivered under a new name.
- Nothing is deleted. Records removed from MMS are deactivated in Skills Workflow.
