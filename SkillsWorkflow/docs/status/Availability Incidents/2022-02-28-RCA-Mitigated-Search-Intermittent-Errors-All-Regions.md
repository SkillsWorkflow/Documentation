---
id:  2022-02-28-RCA-Mitigated-Search-Intermittent-Errors-All-Regions
title: RCA - Mitigated - Search - Intermittent Errors - All Regions - 28-02-2022
sidebar_label: RCA - Mitigated - Search - Intermittent Errors - All Regions - 28-02-2022
---

### Impact summary

Between 28 February 2022 0:00 UTC and 3 March 2022 12:00 UTC, some users experienced intermittent errors while using the search feature.

While investigating, the team determined that the errors were "502 Bad Gateway" and happened intermittently on all regions.

After ruling out several components, the team determined that the issue was caused by a large amount of diagnostics data being included on the service response.

The team mitigated this issue by disabling diagnostics data on the search service.

### RCA

The search feature includes the possibility of returning diagnostics data to help debug issues such as documents not showing up to the user, etc. This information was returned on HTTP response headers.

On certain situations this data was very large (more than 8KB), and the Azure Load Balancer would drop the connection and issue a 502 Bad Gateway response to the client due to exceeding the maximum header size, leading to the error experienced by the affected users.

After determining the issue, the team changed the way diagnostics data is returned to the client to avoid header size issues with the Azure Load Balancer.

### Next steps

We understand the impact these issues have on our customers and that's why Skills Workflow is committed to continuously improving our platform.