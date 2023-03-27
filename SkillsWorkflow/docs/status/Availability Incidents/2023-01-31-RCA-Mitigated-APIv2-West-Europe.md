---
id: 2023-01-31-RCA-Mitigated-APIv2-West-Europe
title: RCA - Mitigated - APIv2 - West Europe - 31-01-2023
sidebar_label: RCA - Mitigated - APIv2 - West Europe - 31-01-2023
---

# Impact summary

On 31 January 2023, between 08:10 UTC and 08:22 UTC, some customers experienced errors or delays accessing the Web Application or API v2 in our West Europe region. 
This was during a rollout operation in this region.

The process was being monitored, but after some failures, the incident response team identified timeout errors on SQL database calls in the API v2.

In total, 3 issues were logged, including one that relates to a bulk operation that may have led to an incomplete transaction.

# RCA

Skills Workflow is highly dependent on several data services; Azure SQL Database is our main data store technology, so any issue with this service has a high impact on our services.

After further investigation into the problem, it was found that the rollout process contributed to a greater load on the sql Database service, thus resulting in less responsiveness overall.

# Next steps

Our customers rely on Skills Workflow and we understand the impact these incidents have, and that's why we are committed to continuously improving our platform.

Although there is already a retry policy when connecting to our Azure SQL database, some further actions are needed to assure more stability.

We have planned to redefine this retry policy, ensuring that all database dependent operations are resilient to transient errors, including database timeouts and connectivity issues.

