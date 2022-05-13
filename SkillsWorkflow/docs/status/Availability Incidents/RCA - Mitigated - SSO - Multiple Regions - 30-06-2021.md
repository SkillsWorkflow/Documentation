---
id:  RCA - Mitigated - SSO - Multiple Regions - 30-06-2021
title: "RCA - Mitigated - SSO - Multiple Regions - 30-06-2021"
sidebar_label: 4. RCA - Mitigated - SSO - Multiple Regions - 30-06-2021
---

# Impact summary

Starting 30 June 2021 - 14:16 UTC until 1 July 10:00 UTC, some users intermittently experienced errors using Single Sign On authentication (SSO) on our Brazil South, Southeast Asia and East US regions.

Some users had to attempt the operation multiple times until it succeeded.

Upon investigation, the team found that data protection keys used in the SSO process were out of sync across worker nodes on the affected regions. Users that ended the SSO process on a different node than the one it started on would get an error as the nodes were using different keys.

The team quickly routed all SSO traffic to the healthy region (West Europe) and by 10:00 UTC the West Europe datacenter was handling all SSO traffic without any issues.

After confirming that all SSO traffic was being handled successfully on the healthy region the team forced a key sync on each affected region by manually restarting the front end services.

By 10:29 UTC, the team determined that the affected regions were healthy and started to slowly move SSO traffic to those regions while actively monitoring their behaviour. 

At 11:30 UTC SSO traffic routing was restored to the usual configuration so users would hit the closest datacenter, as usual, for reduced latency.



# RCA

While investigating this incident, the team engaged the Azure App Services Support team and Product Group to help determine why the keys became out of sync across nodes on the same server farm.

The Azure team confirmed that a platform update on the affected regions triggered this issue.

Worker nodes on the server farm use a shared storage to store all service data (code, keys, temporary data, etc). For performance and resilience reasons the SSO service is configured to locally cache the shared data.

The above mentioned Azure platform update triggered new keys to be generated, but it didn't restart the nodes in order to sync the keys.

# Next steps

We understand the impact these issues have on our customers and that's why Skills Workflow is committed to continuously improve our platform.

The SSO team will change the way data protection keys are stored to avoid this type of issue and not rely on the platform to force the nodes to sync the keys.

Service monitoring was improved to better detect and alert when the error frequency is low.