---
id:  2022-07-20-RCA-Mitigated-Views-West-Europe
title: RCA - Mitigated - Views - West Europe - 20-07-2022
sidebar_label: RCA - Mitigated - Views - West Europe - 20-07-2022
---

### Impact summary

On 20 July 2022, between 08:50 UTC and 09:30 UTC, several users reported issues when logging on with Single Sign-On or accessing different pages in Skills Workflow.

Upon investigation it was verified that the deployment of a Custom Views service was originating errors in our backend. The incident response team decided to revert this service rollout to the previous version.

This action mitigated this issue.

### RCA

After some investigation, engineering team discovered that the service rollout had originated an API breaking change. 

Due to this fact every endpoint with communication with the Custom Views service would fail to respond successfully. Service was refactored and fixed to work with older versions of the API.

Our team has already rolled out this version. Service deployment was changed including the required steps needed for code reviewing, changing the number of reviewers to include one more person, and enforcing service responsibles as mandatory.

### Next steps

Our costumers rely on Skills Workflow and we understand the impact these incidents have and that's why we are committed to continuously improve our platform.

As next steps we will try to find ways to reduce the impact these kinds of issues have on our system, this will include an evaluation of our current deployment lifecycle and redefining new testing functions over Skills Workflow.