---
id: vbs
title: 'VBS'
sidebar_label: VBS
---

### Description

This article describes the integration between **VBS** and `Skills Workflow`.

VBS is the agency's ERP. This is the widest integration in the platform: it covers the full commercial and financial cycle in both directions, so that the operational teams work in Skills Workflow and finance keeps working in VBS, with neither side retyping the other's data.

The integration is modular — each flow can be switched on or off per company, so an agency can start with just clients and jobs and add the financial documents later.

For the separate integration that sends **time** to VBS, see [VBS Timesheet](./vbs-timesheet).

---

### Data Exchange Technology

The integration calls the VBS API directly, using the address and the authentication headers configured by the agency. No files, no FTP servers and no locally installed application are required.

It runs on a schedule, company by company, and only inside the working window the agency defines — each company chooses whether it runs on **Saturday** and **Sunday**, and between which **start** and **final** work hour. Outside that window the company is skipped, which keeps the load on VBS inside the hours the agency wants.

---

### Data Exchange (To Skills Workflow)

| What is received | Notes |
| --- | --- |
| Clients | Created and updated as Billing Clients and Commercial Clients. Clients deactivated in VBS are moved to the stage set in **Commercial Client Cancel Stage**. Rappel clients can be excluded. |
| Products | Imported on their own cadence, controlled by **Product Import Run Times**. They can be left inactive on arrival so somebody reviews them first. |
| Projects | Optional. Imported with the nature and status configured for the company. |
| Suppliers | Optional. Limited to the supplier type configured for the company. |
| Users | Optional. New employees in VBS become Users and Employees in Skills Workflow, with the roles listed in **Default User Profile**. |

**Employee fields received**

When user import is enabled, the following are populated: Name, UserName, Company, Company Code, Department, Typology, E-mail, Phone, Hire Date, IsActive and SSO Username.

The active status coming from VBS is written to the **User Active Status** field, so a person on leave can be told apart from an active one. Terminated employees are inactivated automatically. SSO Username is populated with the e-mail coming from VBS, and External ID is set from the e-mail on creation only.

If **Department External Id** and **Typology External Id** are filled in, every imported employee is given that department and typology regardless of what the source says — useful when the agency does not want the VBS structure reproduced in Skills Workflow.

---

### Data Exchange (From Skills Workflow)

| What is sent | Notes |
| --- | --- |
| Products | Optional, controlled by **Product Export** |
| Projects | The name sent can be the project name only, or a composed name, depending on **Project Name Type** |
| Jobs | Sent against the exported project |
| Contracts | Can carry a cost centre |
| Estimates | Can carry a cost centre |
| Bills | Optional, controlled by **Bill Send**. Bills already exported can be re-sent when they change, if **Update Exported Bills** is enabled. A bill can be forwarded against its project contract or against its estimate. |
| Client Credit Notes | Sent with the same rules as bills |
| Supplier Invoices | Sent as purchase orders |

Cost centres are optional and can be enabled independently for projects, jobs, contracts and estimates.

---

### Settings the Agency Controls

The integration is configured per company, from the integration settings area in Skills Workflow. The settings fall into five groups:

**Connection** — Api Link, Authorization Header, Id External System Header, System Code, User Login, Code, Id

**Which flows are active** — Product Export, Project Import, Import Users, Import Suppliers, Bill Send

**How records are built** — Project Name Type, Send Only Project Name, Project Nature, Project Status, Supplier Type, Default User Profile, Commercial Client Cancel Stage, Activate Product Manually, Exclude Rappel Clients, On Client Import Reload Product, On Project Apply Client Division

**Cost centres and forwarding** — Send Project Cost Center, Send Job Cost Center, Send Contract Cost Center, Send Estimate Cost Center, Bill Project Contract Forward, Bill Estimate Forward, Update Exported Bills

**When it runs** — Run On Saturday, Run On Sunday, Start Work Hour, Final Work Hour, Product Import Run Times

Plus **Administrator Mail** and **Log Level Type**, which control notifications and logging.

---

### What the Agency Needs to Provide

- The address of the VBS API, plus the authorization token, the external system identifier and the user the integration should operate as.
- The company code and identifier in VBS.
- A decision on which flows to enable, and the working window the integration should respect.
- An administrator e-mail address to receive integration notifications.

---

### Monitoring and Error Handling

Every run writes to the integration log inside Skills Workflow, at the level of detail chosen in **Log Level Type**. The log is cleared at the start of each run.

A record that VBS rejects is logged with the reason VBS gave, and a summary e-mail is sent to the address configured in **Administrator Mail**. A failure on one record does not stop the run — the remaining records are still processed and everything that failed is reported at the end.

---

### Good to Know

- Records are matched by their VBS identifier, stored on the Skills Workflow record. It should not be edited manually.
- Because the flows are independent, switching one on later does not backfill history — it starts from the moment it is enabled.
- Documents are exported once. **Update Exported Bills** is the exception: it deliberately re-sends bills that changed after export.
