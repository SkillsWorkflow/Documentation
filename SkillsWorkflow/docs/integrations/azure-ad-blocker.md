---
id:  azure-ad-blocker
title: Azure AD Blocker
sidebar_label: Azure AD Blocker
---

# Azure AD Blocker

## Azure Portal Configuration

Using Microsoft Entra ID it is necessary to create a app registration to enable Integration authentication with AD allowing to update users:

### Create New App Registration

- Navigate to **App Registration**
- Press **New Registration**
- Set name as Shown Below
- Press **Register**

![App Registration](/img/integrations/azure-ad-blocker/adblocker-app-registrations.png)

![Register](/img/integrations/azure-ad-blocker/adblocker-register.png)

### Api Permissions for Graph Api

- Navigate to **Api permissions**
- Add the following permission for Graph Api:
  - User.ManageIdentities.All
  - User.ReadWrite.All
- Grant admin consent for "Tenant Name"

![Api Permissions](/img/integrations/azure-ad-blocker/adblocker-api-permissions.png)
>Note that all the permissions should have a green **Status**.

### Client Secret

- Navigate to **Certificates & secrets**
- Navigate to **Client Secrets** tab
- Add new Client Secret with the greatest expiration date

![Client Secret](/img/integrations/azure-ad-blocker/adblocker-client-secret.png)
> Copy right after creation the value key as it only shows one time

### Definitions
The creation of the App Registration should have a combination of the following:
- TenantID
- ClientId
- Client Secret (created on step above)

![Definition](/img/integrations/azure-ad-blocker/adblocker-definitions.png)

## Installation

To Install the Azure AD Blocker integration please go to the Marketplace and install the Azure AD Blocker Package

### Package Content

The package consists in the following elements
- 2 Automations
- 1 Query
- 1 Webhook

### Configuration

In both Automations is necessary to set the Azure AD parameters obtained in the **AzureAdAuthentication** Action:

- tenantId
- clientId
- clientSecret

