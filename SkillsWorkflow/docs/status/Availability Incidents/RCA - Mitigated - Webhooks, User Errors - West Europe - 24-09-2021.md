---
id:  RCA - Mitigated - Webhooks, User Errors - West Europe - 24-09-2021
title: "RCA - Mitigated - Webhooks, User Errors - West Europe - 24-09-2021"
sidebar_label: 2. RCA - Mitigated - Webhooks, User Errors - West Europe - 24-09-2021
sidebar_position: 2
---

# Impact summary

Between 24 September 2021 - 12:29 UTC and 12:55 UTC, a very small subset of customers have experienced failures and extremely high latency on webhook and automation execution as well as intermittent errors logging in and saving documents on our West Europe region.  

Upon investigation, the team found that the backend service responsible for storing internal events for distribution across all system services had reached an operational limit on one of its partitions due to extremely high number of events (actually, several millions). Due to this fact some events were not saved -- thus the intermittent errors -- and event distribution began taking a long time due to the extremely high number of events to process, leading to high latency firing webhooks and executing automations. 

At 12:55 UTC the team mitigated this issue by reducing the event time to live on the initial storage.

# RCA

After investigating all the telemetry and logs leading to the incident and reviewing code on the core API, the team determined that a bug on the high performance code responsible for writing events to the event store was responsible for exponentially generating the same events. This was mainly triggered by bulk operations.

After determining the issue, the team rolled out a fix for the event writing code on the core API.

# Next steps

We understand the impact these issues have on our customers and that's why Skills Workflow is committed to continuously improving our platform.

Besides from fixing the bug that lead to this incident, the team is also working on changing the event partitioning strategy to ensure better performance and scalability in the presence of extremely high number of events.

