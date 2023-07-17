---
id: 2022-07-21-RCA-Mitigated-APIv2-West-Europe
title: RCA - Mitigated - APIv2 - West Europe - 21-07-2022
sidebar_label: RCA - Mitigated - APIv2 - West Europe - 21-07-2022
---

### Impact summary

On 21 July 2022, between 03:48 UTC and 08:15 UTC, many customers experienced errors or extreme delays accessing the Web Application, APIv2, and other APIs on our West Europe region.
During the peak of the incident, Skills Workflow was practically unusable on the affected region with multiple systems failing.

The incident response team quickly noticed that we had multiple errors connecting to SQL Databases from our backend services, in particular the APIv2 service.
The team was also unable to access the affected services on the Azure Management Portal, thus posing an added difficulty in diagnosing the situation.

This led to the suspicion of a major Azure issue on this data center. At that point the team engaged Azure Support and it was confirmed that Azure was investigating two incidents on the West Europe region; one for SQL Database (tracking ID: 3TBL-PD8) and another for App Service (tracking ID: 3TFH-PZ0).

The SQL Database issue was preventing services from connecting to SQL Databases on the affected region, so the team confirmed that this was the cause for the errors connecting to SQL Databases.
As the majority of data on our platform is stored on multiple SQL Databases, this Azure issue had a severe impact on our services.

As the Azure team started rolling out a mitigation we began to see an improvement on our error rates, and by 8:15 UTC we had no errors, despite the Azure mitigation just being completed by 13:30 UTC. 

### RCA

Skills Workflow is highly dependant on several data services, being Azure SQL Database our main data store technology, so any issue with this service has a high impact on our services.

SQL Database is highly dependable, but, as any service, it can have issues and on this occasion it had an impact on our system availability. 
Azure is tracking this incident (tracking ID: 3TBL-PD8) and will, eventually, provide a full RCA on their side. 

### Next steps

Our costumers rely on Skills Workflow and we understand the impact these incidents have and that's why we are committed to continuously improve our platform.

As next steps we will try to find ways to reduce the impact these kinds of issues have on our system as well as continue to rely on Azure to continually improve their services' reliability. 