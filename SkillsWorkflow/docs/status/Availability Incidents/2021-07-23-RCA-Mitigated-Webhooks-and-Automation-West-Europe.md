---
id:  2021-07-23-RCA-Mitigated-Webhooks-and-Automation-West-Europe
title: "RCA - Mitigated - Webhooks and Automation - West Europe - 23-07-2021"
sidebar_label: RCA - Mitigated - Search - Intermittent Errors - All Regions - 28-02-2022
---

# Impact summary

Starting 23 July 2021 - 09:56 UTC until 16:25 UTC, customers have experienced failures on webhook and automation execution on our West Europe region. 

Impact was mainly felt by customers with automations triggered by webhooks. During this period some automations were not executed.

Upon investigation, the team found that the backend queue responsible for broadcasting events had reached it's maximum size limit. This caused that all incoming event messages were refused during the affected period thus leading to the webhook service -- which relies on internal events -- not executing. 

At 16:20 UTC the backend service was restored successfully.

At 16:25 UTC the team determined that all affected services were healthy and automations were being triggered correctly.
# RCA

After investigation, the team determined that a service that subscribes from event message queue started to fail. All messages that caused the service to error were then piled in an internal dead lettering queue. This queue is part of the queue service itself. This behavior led to the queue service reaching its maximum size limit quota after some time. This led to all new event messages being refused which then caused downstream subscribers -- webhook service -- to not receive events.

No alarms were triggered for this incident due to several reasons. No errors were logged during the impact period. An alert should have been triggered in the backend service that was consuming messages but due to administrative changes in resources in Azure the alert was left in an invalid state without any warning.

After determining the issue, the team quickly mitigated the problem increasing the queue service maximum size quota and draining the dead letter queue.


# Next steps

We understand the impact these issues have on our customers and that's why Skills Workflow is committed to continuously improving our platform.

The team has improved the queue monitoring creating new alarms for the maximum size quota.

Affected consumer service alarm was fixed. This alarm fires on an unexpected error ratio.

Broadcasting dead lettering queue process will be reviewed to prevent future incidents. This review will focus on management rules and automatic cleanup after a certain amount of time.

Event consumption process will be reviewed. It will be discussed to have a dead letter approach over the event processing to allow replaying lost events.

The team will also focus on finding ways to test alerting and overall system resilience like injecting failures, simulating failures, etc.
