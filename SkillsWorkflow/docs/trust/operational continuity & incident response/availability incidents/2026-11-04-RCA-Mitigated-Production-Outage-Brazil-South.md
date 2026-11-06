---
id: 2026-11-04-RCA-Mitigated-Production-Outage-Brazil-South
title: RCA - Mitigated - Production Outage Brazil South - 04-11-2026
description: "On 4 and 5 November 2026, the production environment hosted in the Brazil South region was unavailable for all tenants during two outages caused by an Azure Storage incident in the region."
sidebar_label: RCA - Mitigated - Production Outage Brazil South - 04-11-2026
---

### Impact summary

On 4 and 5 November 2026, the production environment hosted in the Brazil South region was unavailable for all tenants during two outages caused by an Azure Storage incident in the region:

- On 4 November 2026, between approximately 20:18 UTC and 22:02 UTC.
- On 5 November 2026, between approximately 11:21 UTC and 13:20 UTC.

During both periods, users were unable to reach the login page or load the application. API requests returned a high rate of server errors, and response times increased from normal levels to between 4 and 15 seconds.

On 4 November, the operations team was immediately engaged and started investigating the issue.
At 21:42 UTC, the team confirmed that the outage was caused by an incident affecting the Azure Storage service in the Brazil South region, on which our services depend (Azure Tracking ID: MZTM-6L0).
Error rates and response times returned to normal at approximately 22:02 UTC, without any intervention on our side, and Microsoft closed the Azure incident shortly after.

On 5 November, starting at approximately 11:21 UTC, the same issue reoccurred (Azure Tracking ID: 7PZM-X10). The team identified it as a recurrence of the previous night's incident and kept customers informed while Microsoft worked on the recovery.
Error rates and response times returned to normal at approximately 13:20 UTC. The team continued to monitor the region until Microsoft confirmed the incident as fully mitigated.

### RCA

Both outages were caused by an issue within the Microsoft Azure infrastructure in the Brazil South region.

According to Microsoft, an automated maintenance process in Azure Storage caused part of the storage infrastructure in the region to stop processing requests. As our services in Brazil South depend on Azure Storage, they were unable to process requests during this period. Several other Azure services in the region were also affected.

The outage on 5 November was a recurrence of the same issue. Microsoft has since stopped the process that caused it and confirmed the issue as fully mitigated.

### Next steps

Our customers rely on the continuous availability of the platform, and we understand the impact these outages had on their operations, particularly for customers performing month-end closing activities.

As next steps, we will continue to improve our monitoring and alerting, allowing faster diagnosis and mitigation when regional Azure services are degraded.

We will continue to work closely with Microsoft Azure to follow up on the corrective actions identified in their investigation and ensure they are effective in preventing similar incidents.
