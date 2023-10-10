---
id: 2023-09-15-RCA-Mitigated-APIv2-West-Europe
title: RCA - Mitigated - APIv2 - West Europe - 15-09-2023
sidebar_label: RCA - Mitigated - APIv2 - West Europe - 15-09-2023
---

### Impact summary

On 15 September 2023, between 00:43 UTC and 10:05 UTC, approximately, many customers experienced errors or extreme delays accessing the Web Application, APIv2, and other APIs in our West Europe region.
Timeout errors and high latency between client applications and the API would occur during a certain amount of time, and several times in the incident timespan.

The incident response team quickly noticed that we had multiple errors related mainly to SQL connectivity.
During the incident, the Azure Management Portal was not working properly, giving errors when accessing several resources in the West Europe region.

The team engaged Azure Support, and it was confirmed that Azure was investigating a major incident in the West Europe region regarding the networking infrastructure (tracking ID: YKS4-9PZ).
This incident started on the 14th September, 23:05 UTC, and impacted several services, including connectivity between services like SQL Databases and App services.

As the majority of data on our platform is stored on multiple SQL Databases, this Azure issue had a severe impact on our services.

Azure team started rolling out a mitigation just after the problem was acknowledged but service connectivity remained unstable until around 9:00 UTC, when full mitigation occurred. 

### RCA

Skills Workflow is highly dependent on several data services, being Azure SQL Database our main data store technology, so any issue with this service or its connectivity with other services has a high impact on our services.

On this occasion, this Azure infrastructure issue had a big impact on our system availability.
Azure tracked this incident (tracking ID: YKS4-9PZ) and has already provided a full RCA on their side (https://app.azure.com/h/YKS4-9PZ/f8e20a). 

### Next steps

Our  customers rely on Skills Workflow and we understand the impact these incidents have and that's why we are committed to continuously improve our platform.

As next steps, we will try to find ways to reduce the impact these kinds of issues have on our system as well as continue to rely on Azure to continually improve their services' reliability.
We believe an effort to improve communication with our clients regarding the impact of failures of this nature and the consequent recovery process is needed.
A review of the process on this matter is already in progress.