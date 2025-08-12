---
id:  2021-02-19-RCA-Mitigated-ApiV2-File-System-West-Europe
title: RCA - Mitigated - ApiV2 - File System - West Europe - 19-02-2021
sidebar_label: RCA - Mitigated - ApiV2 - File System - West Europe - 19-02-2021
---

### Impact summary

Starting 19 February 2021 at around 13:37 UTC until 16:05 UTC, some users experienced errors and degraded response time performing some operations on our West Europe region.

Affected operations were saving and opening some documents, viewing files, among others.

Upon investigation, the team found that one replica of a backend service responsible for managing the file system became unhealthy after an automatic infrastructure platform update. 

About 0.3% of all requests were effected.

### RCA

After investigation, the team found that a file system service upgrade rolled out on 18th of February at 9:54 contained a bad configuration parameter. Unfortunately, that bad parameter did not affect the service when it was rolled out and the new service version kept working healthy until Azure made a platform update on the 19th from 13:37 to 13:47 on one of the nodes running an instance of the file system service. That node became unhealthy and all requests to it resulted in error (about 30% of all service requests).

The team quickly mitigated the issue by manually fixing the bad configuration parameter.

### Next steps

We understand the impact these issues have on our customers and that's why Skills Workflow is committed to continuously improving our platform.
Since this incident the file system service team has already globally rolled out a fix with the correct parameter.
Service health checking was improved on the load balancer so that unhealthy nodes are removed from rotation until they recover.
Monitoring will be improved to make sure that we catch these issues earlier.