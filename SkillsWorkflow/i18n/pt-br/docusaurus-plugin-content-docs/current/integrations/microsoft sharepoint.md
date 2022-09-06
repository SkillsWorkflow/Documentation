---
id:  microsoft sharepoint
title: Microsoft Sharepoint
sidebar_label: Microsoft Sharepoint
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Skills Workflow integrates with Sharepoint.

The integration allows you to:

- Create automatically and organize a file structure in SharePoint
- Access to the folders and files available in SharePoint
- Have your team get quick and easy access to the files in Sharepoint
- Share the direct link to the files in Sharepoint in comments


<Tabs
  groupId="actions"
  defaultValue="process"
  values={[
    {label: 'Process', value: 'process'},
    {label: 'Configuration ', value: 'configuration'},
  ]
}>

<TabItem value="process">

## Files

When a file is uploaded into SharePoint, it is automatically available in Skills Workflow.

- You can share your file by going into your document and easily select the file
- It will be available to add it into the document's description
- Or to post it on the document's feed
When a file is uploaded in a comment from the Hard Drive:

- The file is uploaded to SharePoint
- A link is created and posted in the comment
- A thumbnail will be also available in the comment


## Mappings

 Sharepoint integration requires mappings between:

- Client and Sharepoint Site
- Project and Sharepoint Sub-Site
- File's Tag and Category 


<figure>

![img-box-shadow](/img/integrations/microsoftsharepoint1.png)
<figcaption>Mapping client to Sharepoint Site</figcaption>
</figure>

<figure>

![img-box-shadow](/img/integrations/microsoftsharepoint2.png)
<figcaption>Mapping Project to Sharepoint Sub-Site</figcaption>
</figure>

## Files

When a file is uploaded in Skills Workflow, it will be available on the corresponding Sharepoint Sub-Site.

<figure>

![img-box-shadow](/img/integrations/microsoftsharepoint3.png)
<figcaption>Posting file's link on the Project's feed</figcaption>
</figure>

<figure>

![img-box-shadow](/img/integrations/microsoftsharepoint4.png)
<figcaption>Image uploaded into Sharepoint Sub-Site</figcaption>
</figure>

Whenever a document is created in Skills Workflow, a folder is created under its parent document folder. The structure of the folders in Skills Workflow is:

- Root
  - Client (Sharepoint Site)
  - Project (Sharepoint Sub-Site)

<figure>

![img-box-shadow](/img/integrations/microsoftsharepoint5.png)
<figcaption>Files structure is created automatically</figcaption>
</figure>

<figure>

![img-box-shadow](/img/integrations/microsoftsharepoint6.png)
<figcaption>Access to the Sharepoint/One Drive</figcaption>
</figure>

## Synching

The synching is performed by a background process. Whenever a document is created or his folder name is changed in Skills Workflow, the process will replicate it in Sharepoint.

- The synching process is from Skills Workflow to Sharepoint
- Skills Workflow has a reference of the ID of the files and folders in SharePoint
- The users will see the same file structure (starting on the root) in both systems

</TabItem>

<TabItem value="configuration">

## Auth

The integration with SharePoint requires:

- An application registration in the Azure Active Directory
  - Application (client) ID
  - Directory (tenant) ID
  - Client secret
- API permission to the Sharepoint
Please check below step by step how to configure an App:

1. Access into the Azure AD and create a new App with the following details

<figure>

![img-box-shadow](/img/integrations/msharepoint1.jpg)
<figcaption> Register the SharePoint Skills Workflow App</figcaption>
</figure>

2. Create client secret

<figure>

![img-box-shadow](/img/integrations/msharepoint2.png)
<figcaption>Creating Client secret for the SharePoint Skills Workflow App</figcaption>
</figure>

3. Add to the App the API permission to your manage your SharePoint

<figure>

![img-box-shadow](/img/integrations/msharepoint3.jpg)
<figcaption>Add API permission to SharePoint</figcaption>
</figure>

<figure>

![img-box-shadow](/img/integrations/msharepoint4.png)
<figcaption>Select the permissions that the App will have when managing data</figcaption>
</figure>


</TabItem>


</Tabs>