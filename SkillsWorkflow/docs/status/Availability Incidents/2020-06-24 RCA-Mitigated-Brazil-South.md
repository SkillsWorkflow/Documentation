---
id:  2020-06-24-RCA-Mitigated-Brazil-South
title: RCA - Mitigated - Brazil South - 24-06-2020
sidebar_label: RCA - Mitigated - Brazil South - 24-06-2020
---

# Impact summary

Between 24 June 2020 18:45 UTC and 24 June 2020 22:50 UTC, some users experienced errors and slow response times on our Brazil South region.

The team determined that one of Skills Workflow's main services was experiencing connectivity failures accessing the database on Azure SQL.

The team opened an urgent support request on Azure Support and worked with the Azure team to solve the issues. The issue was mitigated by performing a service tier upgrade on the affected databases.

# RCA

After working with the Azure Support team, the Azure team determined the root cause of this incident as being a series of unrelated events and infrastructure issues that led to multiple database failovers.



# Next steps

We understand the impact these issues have on our customers and that's why Skills Workflow is committed to continuously improving our platform.

We rely on world-class services provided by Azure, but even those services sometimes fail. Azure is continually improving its platform to prevent issues like these from happening.
Skills Workflow will also work to improve our platform resilience by automating mitigation actions when incidents like these happen on Azure services.