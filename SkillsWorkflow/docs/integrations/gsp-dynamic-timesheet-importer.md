---
id: gsp-dynamic-timesheet-importer
title: 'GSP Dynamics Timesheet Importer'
description: "Where timesheets are recorded in Dynamics rather than in Skills Workflow, the agency still needs that time visible inside the platform — next to the projects,…"
sidebar_label: GSP Timesheet Importer
---

### Description

This article describes the **GSP Dynamics Timesheet Importer**.

Where timesheets are recorded in Dynamics rather than in Skills Workflow, the agency still needs that time visible inside the platform — next to the projects, the clients and the financials — in order to report on utilisation, billability and delivered hours.

This importer takes care of that. It collects the Dynamics timesheet report and loads it into a [Custom Table](../administration/custom-tables) in Skills Workflow, where it can be used by views, reports and dashboards like any other data in the platform.

It is a reporting feed. It does not create timesheets in Skills Workflow and does not affect approvals or billing.

---

### Data Exchange Technology

The importer runs automatically, **once a day**.

On each run it:

1. Connects to the SFTP server where the Dynamics report is published, and looks for the timesheet report file.
2. Reads the year from the file name.
3. Empties the corresponding custom table and loads the file into it.
4. Moves the processed file into a **Success** or a **Failure** folder.
5. Sends a run summary by e-mail.

Rows are uploaded in batches, so a full year of timesheet data is loaded without timing out.

---

### How the Data Lands in Skills Workflow

**One table per year.** The year is taken from the file name and appended to the table name, so each year of timesheet data lives in its own custom table. This keeps the tables at a manageable size and lets a single year be reloaded without touching the others.

**Each load replaces the year.** The table for that year is emptied before the file is loaded, so it always reflects the latest report rather than accumulating duplicates. The report therefore has to be complete for the year it covers.

**What each row contains:**

| Group | Fields |
| --- | --- |
| Employee | Employee Name, Employee ID, Reach ID, Title, Employee Division, Department, Division Code |
| Client and work | Client, Company, Product, Project Code, Project Name, Project Group Name |
| Period | Transaction Month/Year, Week Number, Period Type, Time Sheet Date, Posting Date, Timesheet Status |
| Category | Category Code, Category Name, Line Property, Transaction Text |
| Hours and value | Hours, Client Hours, Non Client Hours, Billing Rate, Billable Amount, Actuals |
| Totals | Total Hours, Total Hours Client, Total Hours Non Client, Total Billable Amount, Total Billing Value |

---

### Settings the Agency Controls

| Setting | What it does |
| --- | --- |
| Host / Port | Address of the SFTP server where the report is published |
| Username / Password | Credentials the importer connects with |
| Path | Folder that holds the report |
| Filename Contains | Identifies the timesheet report among the files in that folder |
| File Extension | Which files are picked up |
| Custom Table Name | Base name of the custom table; the year is appended to it |
| Administrator Mail | Address that receives the run summary |

---

### What the Agency Needs to Provide

- The SFTP server, folder and credentials where the Dynamics report is published.
- A daily report export delivered into that folder, with the year in the file name.
- An e-mail address to receive the run summaries.

---

### Monitoring and Error Handling

Every run sends a summary e-mail containing how many rows were removed, how many were loaded, any warnings or errors, and the total running time.

A file that could not be fully imported is moved to the **Failure** folder and can be corrected and re-delivered. A file that imported successfully is moved to **Success**, which keeps the working folder clean and gives the agency a record of what has been processed.

---

### Good to Know

- This is a read-only reporting feed. Nothing in Skills Workflow is created, approved or billed from it.
- The year in the file name determines which table is replaced. A file with the wrong year in its name will overwrite the wrong year of data.
- The report must be complete for its year, because the table is emptied before every load.
- The importer runs once a day, so the data in Skills Workflow is as fresh as the most recent report delivered.
