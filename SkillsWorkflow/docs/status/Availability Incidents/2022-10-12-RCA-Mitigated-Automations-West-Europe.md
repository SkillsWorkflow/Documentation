---
id: 2022-10-12-RCA-Mitigated-Automations-West-Europe
title: RCA - Mitigated - Automations - West Europe - 12-10-2022
sidebar_label: RCA - Mitigated - Automations - West Europe - 12-10-2022
---

### Impact summary

On 12 October 2022, between 08:30 UTC and 09:55 UTC, some customers reported failures on automation execution on our West Europe region. This was during a rollout operation in this region.

The incident response team verified that automations were not executing correctly due to errors when calling the integration API.

After some more investigation it was found that some configuration keys were missing in the integration API. The incident team immediately added the missing configuration mitigating the situation.

### RCA

In the course of the investigation to the causes of this incident, engineering team identified an issue in the integration API deployment task.

A configuration key changed is name between versions. When the integration API rollout started, the new code was pushed to a new slot and the new configuration added to it.

In this process, the configuration already in place in production changed as well leading to the incident. This was due to the fact that the new configuration was not bound exclusivelly to the new slot but to every slot.

The engineering team changed the way integration API deployment is done. Configuration is now slot specific. Configuration changes only takes place when swapping is done between a staging slot and the production slot.

### Next steps

Our costumers rely on Skills Workflow and we understand the impact these incidents have and that's why we are committed to continuously improve our platform.

After the changes already made in the integration API deployment task, new measures were put in place to assure services rollout is always followed by the service responsible.

The team will also focus in adding more deployment tests and more alerts with value to identify possible failures.