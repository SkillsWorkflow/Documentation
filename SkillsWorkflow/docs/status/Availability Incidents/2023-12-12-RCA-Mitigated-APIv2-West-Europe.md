---
id: 2023-12-12-RCA-Mitigated-APIv2-West-Europe
title: RCA - Mitigated - APIv2 - West Europe - 12-12-2023
sidebar_label: RCA - Mitigated - APIv2 - West Europe - 12-12-2023
---

### Impact summary

On 12 December 2023, between 09:10 UTC and 09:50 UTC, approximately, some customers experienced delays and missing executions in some services over the system in our West Europe region.
Search, analytics and automations experienced timeout errors and high latency when executing.
The incident response team was quickly notified due to several alerts over these services. 
After some investigation, it was verified that some services were not responding correctly in our Azure infrastructure due to connectivity issues.
During the incident, the Azure Management Portal was not working properly, giving errors when accessing some resources in the West Europe region. 
Some alerts were also lost during the incident.

The team engaged Azure Support, and it was confirmed that Azure was investigating an incident in the West Europe region regarding the networking infrastructure.

After approximately an hour with errors, connectivity between services improved significantly without any adjustment on our behalf, and all services started to resume working properly.

### RCA

Skills Workflow is highly dependent on several data and networking services from Azure, so any issue with Azure and its service connectivity has a high impact on our service as well.

On this occasion, this Azure infrastructure issue had a big impact on our system availability.

### Next steps

Our customers rely on Skills Workflow and we understand the impact these incidents have. That's why we are committed to continuously improving our platform.

As next steps, we will try to find ways to reduce the impact these kinds of issues have on our system as well as continue to rely on Azure to continually improve their services' reliability.
We believe an effort to improve communication with our clients regarding the impact of failures of this nature and the consequent recovery process is needed.
A review of the process on this matter is already in progress.
This review aims to improve incident response time in a more proactive way, also providing better communication with our customers.