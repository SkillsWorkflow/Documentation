---
title: Power BI
sidebar_label: Power BI
---

### Description

This is the documentation of the integration with `Power BI`. <br />
It has 2 parts:
- Configuration
- Power BI

---

### Maintenance

Data is extracted from a Query installed in the Tenant.
The Analytics service runs de Query and sends it to a CSV file.
The CSV File is then added as a Data Source in the Power BI Workspace.

---

**Setup** <br />

Go into the tenant in Maintenance and create a `Query`.
- Name the Query with the prefix "Power BI - " (e.g., Power BI - Active Jobs)
- Set the Categoty to "Power BI"

Create a new Schedule to run the Query using the Configuration.
- Set the running times of the File generation based on the Query that is run
- Set the name of the File to generate. No spaces are allowed (e.g., PowerBI-ActiveJobs)

The Schedule will generate an URL for the File that is generated.


**Running** <br />

The Query can be forced to be run manually.
- Go into the Configuration and run the specified Schedule.
- This will execute the Query and generate the File.

---

### Workspaces

The `Workspaces` in Power BI will have Data Sources pointing to the URL of the Files. <br />
The URL of the Files is shown in the Schedules that are created in Configuration.  <br />
The data refresh (i.e., when Power BI reads the data from the Files) can be set to a minimum of every 30 minutes.

**Setup** <br />

In Power BI, create a Workspace.
- Go into the Data Source section and add a new Web data source.
- Get the URL for the generated file from the Schedule generation and paste it here.
- The data will be available in the Report pages for use.
