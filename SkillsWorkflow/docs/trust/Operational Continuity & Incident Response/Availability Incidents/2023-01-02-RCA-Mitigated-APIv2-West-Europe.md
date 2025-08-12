---
id: 2023-01-02-RCA-Mitigated-APIv2-West-Europe
title: RCA - Mitigated - APIv2 - West Europe - 02-01-2023
sidebar_label: RCA - Mitigated - APIv2 - West Europe - 02-01-2023
---

### Impact summary

On 02 January 2023, between 11:00 UTC and 12:00 UTC, some customers experienced timeout errors when moving documents to a different status or creating new documents in our West Europe region. 

After some analysis, the incident response team identified timeout errors on SQL database calls in the API v2. They were not consistent over time, and occurred in different operations.

These timeout errors, in some cases, led to incomplete operations and incoherent data, including documents with status changed but without the corresponding post entry.

### RCA

Skills Workflow is highly dependent on several data services; Azure SQL Database is our main data store technology, so any issue with this service has a high impact on our services.

After further investigation into the problem, it was found that SQL Database service had some connectivity and timeout issues during the incident time span due to Azure platform maintenance, thus resulting in less responsiveness overall.

### Next steps

Our customers rely on Skills Workflow and we understand the impact these incidents have, and that's why we are committed to continuously improving our platform.

Although there is already a retry policy when connecting to our Azure SQL database, some further actions are needed to assure more stability.

We have planned to redefine this retry policy, ensuring that all database dependent operations are resilient to transient errors, including database timeouts and connectivity issues.