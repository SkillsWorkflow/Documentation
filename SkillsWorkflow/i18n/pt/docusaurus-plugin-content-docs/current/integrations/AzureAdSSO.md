---
id:  AzureAdSSO
title: Azure AD SSO
sidebar_label: Azure AD SSO
---

This article describes how the job maintenance is done in Skills Workflow when there is an interface with iSAP in place.

## Requirements

- Office 365 Subscription with Azure Active Directory

## How to configure

1. Enable Azure AD SSO Using SAML2
2. Find Directory ID for Azure AD
3. Select All Services, search for Azure Active Directory and click on it


<figure>

![img-box-shadow](/img/integrations/azureadsso1.png)
<figcaption>Azure Active Directory</figcaption>
</figure>

4. Find Directory ID and copy its value - it will be used later on the application settings URL

<figure>

![img-box-shadow](/img/integrations/azureadsso2.png)
<figcaption>Azure AD - Properties</figcaption>
</figure>

5. It is necessary to register new Application in the Azure Active Directory
6. In Manage on the side menu, select App registrations, and then click on New application Registration

<figure>

![img-box-shadow](/img/integrations/azureadsso3.png)
<figcaption>New application registration</figcaption>
</figure>

7. Sign-on URL should be filled with https://auth.skillsworkflow.com/saml2

<figure>

![img-box-shadow](/img/integrations/azureadsso4.png)
<figcaption>Creating a new application</figcaption>
</figure>

8. Go to Settings, then Properties and fill the Home Page URL with https://login.microsoftonline.com/{DirectoryID}/SAML2
9. Use the same URL to Logout URL https://login.microsoftonline.com/{DirectoryID}/SAML2

<figure>

![img-box-shadow](/img/integrations/azureadsso5.png)
<figcaption>Configuring the application settings </figcaption>
</figure>

10. Remember to replace {DirectoryId} with the directory value initially copied in Step 4 and save your changes
11. Check Reply URLs and add https://auth.skillsworkflow.com/saml2/acs

<figure>

![img-box-shadow](/img/integrations/azureadsso6.png)
<figcaption> Application Reply URLs</figcaption>
</figure>

12. Check Reply URLs and add https://auth.skillsworkflow.com/saml2/acs

<figure>

![img-box-shadow](/img/integrations/azureadsso7.png)
<figcaption>API Access permissions - Windows Azure Active Directory</figcaption>
</figure>

13. Select Sign in and Read User Profile and Save

<figure>

![img-box-shadow](/img/integrations/azureadsso8.png)
<figcaption>Windows Azure Active Directory - Sign in and Read User Profile</figcaption>
</figure>

14. Press Grant Permissions and confirm after setting the required permissions
15. Then get the Metadata, by going to App Registrations and select Endpoints

<figure>

![img-box-shadow](/img/integrations/azureadsso9.png)
<figcaption>Access to the endpoints to get the Metadata </figcaption>
</figure>


16. Copy Federation Metadata Document and send it to our team - operations@skillsworkflow.com

<figure>

![img-box-shadow](/img/integrations/azureadsso10.png)
<figcaption>Copying Federation Metadata Document</figcaption>
</figure>