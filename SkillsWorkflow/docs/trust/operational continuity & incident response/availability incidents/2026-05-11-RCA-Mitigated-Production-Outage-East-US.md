---
id: 2026-05-11-RCA-Mitigated-Production-Outage-East-US
title: RCA - Mitigated - Production Outage East US - 11-05-2026
sidebar_label: RCA - Mitigated - Production Outage East US - 11-05-2026
-------------------------------------------------------------------

### Impact summary

On 11 May 2026, the production environment hosted in the East US (EUS) region became inaccessible for all tenants until approximately 15:30 UTC.

During the incident, several services hosted in Microsoft Azure stopped responding, resulting in a complete service outage for affected customers. The operations team was immediately engaged and started investigating the issue.

Initial troubleshooting efforts were hampered by the fact that the affected Azure services could not be restarted successfully through the Azure Management Portal. As service recovery through standard procedures was not possible, a workaround was implemented by recreating the affected services in a new Azure Kubernetes Service (AKS) cluster.

Following this recovery action, service availability was restored and all tenants regained access to the platform.

### RCA

The incident was caused by an issue within the Microsoft Azure infrastructure.

Following an investigation conducted by Microsoft, the root cause was identified as a bug in the underlying Azure Kubernetes Service (AKS) node provisioning process. The issue caused platform upgrades to enter a failure loop because newly created virtual machine instances were unable to register successfully with the node pool.

As a consequence, the affected AKS environment became stuck in an activation state, preventing services from operating normally and making standard recovery actions ineffective.

To restore service, the affected workloads were migrated to a newly created AKS environment. Microsoft subsequently developed and deployed a fix for the underlying issue.

### Next steps

Our customers rely on the continuous availability of the platform, and we understand the impact this incident had on their operations.

As next steps, we will continue to review and improve our disaster recovery and infrastructure recovery procedures to reduce service restoration times in situations where cloud provider infrastructure issues occur.

We will also continue to work closely with Microsoft Azure to monitor platform reliability and ensure that corrective actions implemented by their engineering teams are effective in preventing similar incidents.

Additionally, we are reviewing opportunities to further automate recovery procedures and improve operational visibility during infrastructure-related incidents, allowing faster diagnosis and mitigation when external platform failures occur.
