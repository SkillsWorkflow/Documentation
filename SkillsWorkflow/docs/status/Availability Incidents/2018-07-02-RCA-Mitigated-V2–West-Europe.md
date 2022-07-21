---
id:  2018-07-02-RCA-Mitigated-V2–West-Europe
title: "RCA - Mitigated V2 – West Europe -  02-07-2018"
sidebar_label: RCA - Mitigated V2 – West Europe -  02-07-2018
---

# Preliminary analysis

Starting on 02-07-2018 01:45:43 UTC some users had errors trying to access Skills Workflow V2 on tenants hosted on the West Europe data center

- About 3% of total requests to the application were affected by this issue
- The outage was due to an intermittent connectivity issue between a backend API and the Azure SQL Database
- Because of the intermittent nature of the issue, our availability probes failed to detect the outage
- Our engineers are actively working with Azure support to find the cause for the connectivity problems.


# Next steps

- Our team is analysing all available telemetry and working with Azure support to establish a full Root Cause
- Our DevOps team will improve our issue detection system to employ different probes and error telemetry to detect these kinds of issues early
- Critical backend services will be improved in order to be more resilient to database connectivity problems.

## Updates 11-07-2018

This issue is not fully mitigated. We still observed a recurrence today from 5:05 UTC to 6:35 UTC with an impact on about 3% of customer requests.

At this point we have performed the following actions:

- Our team improved our telemetry and probes and now we can effectively detect this kind of issue early
- Microsoft's Azure SQL Database Support team determined that the connectivity issues were due to database reconfiguration (cluster reconfiguration, node migration, etc.). These reconfiguration operations are normal on cloud environments and can happen occasionally, but should not take more than 60 seconds
- Microsoft's Azure SQL Database Support team is trying to determine why the reconfiguration is taking much more than 60 seconds
- In the meantime, to mitigate further the issue while we wait for Microsoft to solve the issue, we are rolling out an update to our backend services to improve their resiliency to transient errors and to improve database connection recovery.

## Next steps 19-07-2018

- We will keep working with the Azure SQL Database team to determine what is causing the reconfigurations to take a long time
- Our DevOps team will keep monitoring the system health to assess the effectiveness of the mitigations we are rolling out;

Azure SQL Database product team informed that the Root Cause, though not fully established, is related to the in-memory OLTP SQL Feature.

Based on this feedback, we applied an additional mitigation by disabling the use of in-memory OLTP database features until the full RCA is determined and the Azure SQL Database product team applies a fix for the issue.

## Next steps

- We will keep working with the Azure SQL Database product team to establish the full Root Cause and to apply a fix
- Our DevOps team will keep monitoring the system health to assess the effectiveness of the mitigations we are rolled out;

## RCA

Azure SQL Database product team at Microsoft established the root cause to be a silent failure of the internal SQL compiler and linker of the in-memory SQL Feature  causing the long delay during database reconfiguration.

Based on this feedback our team fully disabled usage of in-memory OLTP feature.

We are deeply sorry for any inconvenience this issue might have caused.

We understand the impact these issues have on our customers and we will be making improvements to our system in order to prevent future issues.