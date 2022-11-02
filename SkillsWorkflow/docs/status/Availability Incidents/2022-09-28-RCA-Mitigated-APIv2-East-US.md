---
id: 2022-09-28-RCA-Mitigated-APIv2-East-US
title: RCA - Mitigated - APIv2 - East US - 28-09-2022
sidebar_label: RCA - Mitigated - APIv2 - East US - 28-09-2022
---

# Impact summary

On 28 September 2022, between 20:25 UTC and 22:46 UTC, many customers experienced errors or extreme delays accessing the Web Application, APIv2, and other APIs on our East US region.

The incident response team noticed that SQL Database resource usage was extremely high and that was causing the API to respond very slowly.

The extreme resource usage on the database was caused by a customer workload and the response team started to restart backend services in an attempt to abort the faulty workload, but without success.

As the next measure a SQL Database resource tier upgrade was initiated which lasted for about 30 minutes. After that the faulty workload was aborted and response times started getting back no normal.

# RCA

In the course of the investigation to the causes of this incident, the engineering team identified several operations related to user notifications and leave updates that could, in some occasions, consume extremely high database resources.

During this incident a bulk import forced a very high number of these operations leading to exhausting SQL Database resources, thus causing extremely high response times and errors.

# Next steps

Our costumers rely on Skills Workflow and we understand the impact these incidents have and that's why we are committed to continuously improve our platform.

The team has already improved database resource consumption on the identified operations and is continuously working to find more resource consumption issues to improve the platform performance and reliability.

Additionally, measures were put in place to avoid a single workload to consume all database resources.