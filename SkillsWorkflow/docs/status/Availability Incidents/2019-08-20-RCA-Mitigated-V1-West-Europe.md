---
id:  2019-08-20-RCA-Mitigated-V1-West-Europe
title: RCA - Mitigated - V1 - West Europe - 20-08-2018
sidebar_label: RCA - Mitigated - V1 - West Europe - 20-08-2018
---

### Impact summary

Starting at around 20-08-2018 2:03 UTC until 7:40 UTC a small subset or users using Skills Workflow V1 hosted on the West Europe region may have experienced errors logging in.

About 1% of all requests were affected. All affected requests were served by the same server on our West Europe V1 server farm.

The DevOps team mitigated the issue by forcing an application restart on the affected server.

### RCA

The affected node could not correctly read a configuration file stored on disk thus causing the requests that needed to read the file to fail.

The DevOps team tried to mitigate the issue by issuing "soft" restarts of the service with only partial success. The issue was fully mitigated after applying a "hard" restart to the service.

Failure to read the configuration file was caused by a race condition in certain node restart situations.

### Next steps

The team will roll out a fix to prevent the said race condition from happening.

We are deeply sorry for any inconvenience this issue might have caused.

We understand the impact these issues have on our customers and our team will be making improvements to our system in order to prevent future issues.