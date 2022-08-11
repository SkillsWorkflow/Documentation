---
title: Power BI
sidebar_label: Power BI
---

### Description

This is the documentation of the integration with `Power BI`.

---

### Data Exchange

Data is extracted from a Query installed in the Tenant.
The Analytics service runs de Query and sends it to a CSV file.
The CSV File is then added as a Data Source in the Power BI Workspace.

---

**Setup** <br />

Go into the tenant in Configuration and create a `Query`.
- Name the Query with the prefix "Power BI - " (e.g., Power BI - Active Jobs)
- Set the Categoty to "Power BI"

Create a new Schedule to run the Query using the Configuration.
- Set the running times of the File generation based on the Query that is run
- Set the name of the File to generate (no spaces are allowed)


**Running** <br />

The Query can be forced to be run manually.
Go into the Configuration and run the specified Schedule.
This will execute the Query and generate the File.

---

### Power BI

The Workspaces in Power BI will have Data Sources pointing to the URL of the Files.
The URL of the Files is shown in the Schedules that are created in Configuration.
The data refresh (i.e., when Power BI reads the data from the Files) can be set to a minimum of every 30 minutes.

**Setup** <br />

In Power BI, create a Workspace.
Go into the Data Source section and add a new Web data source.
Get the URL for the generated file from the Schedule generation and paste it here.
The data will be available in the Report pages for use.
