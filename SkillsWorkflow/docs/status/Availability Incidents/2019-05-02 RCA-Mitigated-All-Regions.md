---
id:  2019-05-02-RCA-Mitigated-All-Regions
title: RCA - Mitigated - All Regions - 02-05-2019
sidebar_label: RCA - Mitigated - All Regions - 02-05-2019
---

### Impact summary

Between 19:29 UTC and 22:35 UTC on 02 May 2019, users may have experienced errors when using Skills Workflow V1 or V2 on all our regions (West Europe, Brazil South, East US, and Southeast Asia).

Around 21:40 UTC the error rate was negligible and only observable in the East US region. All other regions were operating normally.

### RCA

Skills Workflow is a multi-service distributed system running on Microsoft Azure on multiple regions. As such, Skills Workflow internal and external services need to communicate with each other and with Azure services on which our platform relies.

The cause for this outage was due to a problem on the Azure platform that impacted network connectivity in all Azure regions which in turn impacted several services used by our platform.

More info on the Azure issue can be tracked with Azure issue number: R50C-5RZ


<figure>

![img-box-shadow](/img/status/rcas/rca1.png)
<figcaption>Azure R50C-5RZ - Asia Pacific</figcaption>
</figure>

<figure>

![img-box-shadow](/img/status/rcas/rca2.png)
<figcaption>Azure R50C-5RZ - Europe</figcaption>
</figure>

<figure>

![img-box-shadow](/img/status/rcas/rca3.png)
<figcaption>Azure R50C-5RZ - Americas</figcaption>
</figure>



# Next steps

We understand the impact these issues have on our customers that's why Skills Workflow relies on world-class Azure services and employ all industry best practices so our customers can rely on our platform 24/7.

Azure will be taking steps to avoid issues like this in the future.