---
id: 2022-06-07-RCA-Mitigated-Webhooks-Not-Firing-West-Europe
title: RCA - Mitigated - Webhooks - Not Firing - West Europe - 07-06-2022
sidebar_label: RCA - Mitigated - Webhooks - Not Firing - West Europe - 07-06-2022
---

# Impact summary

On 6 June 2022, between 14:57 UTC and 18:48 UTC, webhooks were not invoked in response to system events. 
That meant that any downstream actions that responded to webhooks were not executed during the impact period.

Upon investigation, the incident reponse team determined that an Azure Function responsible for responding to system events and evaluating Webhook subscriptions was not consuming messages from its queue and showed no activity.

After trying to manually restart the Azure Function, using several different approaches, without success and running all Azure Diagnostics on the function, the team provisioned a new function infrastructure and deployed the function code, mitigating the issue.

The new function instance quickly processed all pending event messages; by 18:48 UTC all pending webhooks were invoked and no work was lost.

# RCA

The Webhooks system on Skills Workflow uses an Azure Function whose responsibility is to determine for each event which webhooks are relevant and invoke them through HTTP REST calls. This function consumes event messages from the event queue to do its processing and during the impact period it completely stopped consuming messages.

Azure Functions are a serverless way (FaaS) to run code in the cloud in a way that's fully managed by Azure and that scales almost indefinitely. The code for these serverles functions is stored on storage accounts as there is no concept of server.

The team involved Azure Support to help identify what caused the Azure Function to stop working.

Azure Support determined that the function stopped due to its number of worker hosts being dropped down to zero in response to a restart and then not starting properly. 
This behavior was caused by an open issue on Azure Functions runtime when multiple functions share the same storage account. This issue causes the function to be restarted and may prevent the function from starting correctly due to not being able to access the storage account.

As we use a shared storage account per region for all our functions in the same region, we were affected by this issue.

# Next steps

As next steps the following actions will be taken:
- Redeploy all Azure Functions with separate storage accounts for added stability and performance as per Azure Support recommendation
- Optimize this Azure Function to perform better under high loads
- Design architectural changes to allow for automatic failover or recovery of unhealthy functions

We understand the impact these incidents have on our customers and that's why Skills Workflow is committed to continuously improving our platform.