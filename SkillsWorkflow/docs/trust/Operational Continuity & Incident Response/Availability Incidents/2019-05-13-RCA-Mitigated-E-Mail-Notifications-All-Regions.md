---
id:  2019-05-13-RCA-Mitigated-E-Mail-Notifications-All-Regions
title: RCA - Mitigated - E-Mail Notifications - All Regions - 13-05-2019
sidebar_label: RCA - Mitigated - E-Mail Notifications - All Regions - 13-05-2019
---

### Impact summary

Between 13 May 2019 and 14 May 2019, some users failed to receive a notification via e-mail across all regions.

Upon receiving reports from our users regarding this issue our engineers identified the issue as a send quota exhausted on one of our providers and applied mitigation.

### RCA

One of our e-mail providers hit a send quota limit without firing any of the alerts in place to allow us to manage the quotas before they are hit.

We found that recent maintenance on the alerts set an invalid alert configuration that went undetected.

### Next steps

We understand the impact these issues have on our customers and that's why Skills Workflow is committed to continuously improving our platform.

The alerts have been fixed and a new process for changing the alerts has been deployed to avoid invalid configurations.