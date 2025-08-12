---
id:  2020-07-06-RCA-Mitigated-East-US
title: RCA - Mitigated - East US - 06-07-2020
sidebar_label: RCA - Mitigated - East US - 06-07-2020
---

### Impact summary

Starting 6 July 2020 19:22 UTC and 16 July 2020 17:22 UTC, some users intermittently experienced degraded overall system response in our East US region.

The team determined that on peak times when multiple user requests were being handled system performance degraded. These performance peaks would happen multiple times during the day and would not last more than 30 minutes.
After an investigation where the team analyzed multiple telemetry sources and profile traces, the team determined that the main service was missing a configuration that prevented lock contention under high load.

### RCA

This incident was due to contention on a lock accessing the database on the main system service when the system is under high system load.
The configuration that prevents this contention was already rolled out to one region, but it failed to be applied to the East US and the remaining regions.
Said configuration was not applied because of two reasons:

1.  It's rollout was not automated
2. It was not set as the new default configuration.

### Next steps

We understand the impact these issues have on our customers and that's why Skills Workflow is committed to continuously improving our platform.

The team has since rolled out this configuration to all regions.
A process was put into place in order to automate these configuration rollouts and to ensure that the team updates the default configuration whenever issues like these occur.