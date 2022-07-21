---
id:  2018-07-26-RCA-Mitigated-V2-Brazil-South 
title: RCA - Mitigated - V2 - Brazil South - 26-07-2018
sidebar_label: RCA - Mitigated - V2 - Brazil South - 26-07-2018
---

# Impact summary

Starting on 26-07-2018 15:15 UTC and until 26-07-2018 15:50 UTC, some users experienced errors trying to access Skills Workflow V2 on the Brazil South region.

The issue was detected and mitigated by the team by applying a parameter change on a backend service.


# RCA

During a routine upgrade to a backend service, a service parameter was wrongly changed by the automated upgrade process causing the service to have errors accessing another backend service.

The DevOps team mitigated the issue by manually setting the parameter to its correct value.

The automated process was fixed to correctly update the parameter value.




# Next steps

We are deeply sorry for any inconvenience this issue might have caused.

We understand the impact these issues have on our customers and our team will be making improvements to our system in order to prevent future issues.