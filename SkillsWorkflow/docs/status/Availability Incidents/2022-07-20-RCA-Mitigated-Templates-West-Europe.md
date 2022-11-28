---
id: 2022-07-20-RCA-Mitigated-Templates-West-Europe
title: RCA - Mitigated - Templates - West Europe - 20-07-2022
sidebar_label: RCA - Mitigated - Templates - West Europe - 20-07-2022
---

# Impact summary

On 20 July 2022, between 09:30 UTC and 11:30 UTC, several users reported that when creating Jobs, some actions responsible for task creation based in templates were not working.

Upon investigation it was verified that Template service configuration was changed during a deployment process. This change led to the service not responding correctly to requests from production environments because it was configured to work with test environments only.

A corrective patch was deployed with the mitigation and it was verified by the incident response team that task creation actions started to work properly.

# RCA

After the corrective patch deployment, development team has updated the required steps needed in code reviewing, changing the number of reviewers to include one more person, and enforcing service responsibles as mandatory.

# Next steps

Our costumers rely on Skills Workflow and we understand the impact these incidents have and that's why we are committed to continuously improve our platform.

As next steps we will try to find ways to reduce the impact these kinds of issues have on our system, this will include an evaluation of our current deployment lifecycle and redefining new testing functions over Skills Workflow.

