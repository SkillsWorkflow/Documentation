---
id:  adblocking interface
title: ADBlocker
sidebar_label: ADBlocking interface API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

On-premises agent to block and unblock users on the Active Directory based on missing timesheets in Skills Workflow

## Framework/Tools/Dependencies

- .NET Framework 4.5.2
- Visual Studio 2015 or later


## Running Instructions - Windows

- Download the source code and open the solution in Visual Studio.
- Open app.config file and change the app settings accordingly. These settings are explained further below.
- Run the application


## Scheduling Instructions - Windows

- ADBlocker application should be run as a Scheduled Task. Create a new Scheduled Task in Task Scheduler.
- Manage the created Task. Choose a user with permissions to run the task and set a trigger to run the task in repeat mode.
- The ADBlocker task should run with a recurring short period of time.
- Set the task to run the ADBlocker.exe file. No entry parameters are required

## ADBlocker Settings


<Tabs
  groupId="actions"
  defaultValue="active directory"
  values={[
    {label: 'Active Directory', value: 'active directory'},
    {label: 'Skills Workflow', value: 'skills workflow'},
    {label: 'Skills Workflow Assistant', value: 'skills workflow assistant'},
    {label: 'Raygun', value: 'raygun'},
  ]
}>

<TabItem value="active directory">

This are the credentials for the Active Directory you're accessing.

- AD:Domain 
  - This setting should be parametrized with the Active Directory domain.

- AD:User
  - Active Directory User Username. This user should have permissions to block/unblock users from the Active Directory.

- AD:Password
  - Active Directory User password.

</TabItem>

<TabItem value="skills workflow">

Skills:ApiUrl - SkillsWorkflow Api base url

- It depends on the Environment and Tenant being used. It has the following structure https://api-tenant-environment-we.skillsworkflow.com. Use the name of the company provided to you for the parameter "tenant". For "environment" use "prod", "test" or "dev" for one of Skills Workflow's Environments: Production, Testing, Development.
Skills:AppId - SkillsWorkflow Tenant application id

- This id must be requested to SkillsWorkflow team. It will be used to ensure communication with SkillsWorkflow API.
Skills:AppSecret - SkillsWorkflow Tenant application secret

- It is used with Tenant application id.
Skills:SSLPublicKey - SkillsWorkflow SSL certificate public key

- It is used to validate requests to SkillsWorkflow Api. This key must be requested to SkillsWorkflow team.
Skills:Environment - AdBlocker application environment settings

- When set to "Local" it will disable SSL certificate validations and application errors will be registered accordingly. To use SSL certificate validation use "Production" mode. Use "Production", "Test", "Development" or "Local" depending on the environment the application is being deployed.

</TabItem>

<TabItem value="skills workflow assistant">

ManageNetworkBlock

- TRUE - For On-Premises clients this setting must be set as TRUE
- FALSE - On Cloud clients this setting must be set as FALSE

</TabItem>

<TabItem value="raygun">

- Raygun:JobName
  - Parameter used to group information in Raygun logging platform. The default value is "ADBlocker".

- Raygun:AppKey
  - Raygun platform access key. This key must be requested to SkillsWorkflow team.

</TabItem>


</Tabs>