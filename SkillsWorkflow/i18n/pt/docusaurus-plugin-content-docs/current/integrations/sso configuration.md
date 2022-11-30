---
id:  sso configuration
title: SSO Configuration
sidebar_label: SSO Configuration
---

Regarding the SSO, the standard that is in use is in #Production:

- The client’s SSO Identity Provider should provide SAML 2.0 Protocol (e.g. #Okta, #OnePass or #Office365) 
- There should be a User Identification Claim agreed between the parties, either E-Mail (recommended) or AD User Name

## Configuration

1. The system’s metadata for #Production is available at https://auth.skillsworkflow.com/saml2/metadata
2. Setup the metadata in the Identity Provider
3. Set the user identity Claim in the Identity Provider - http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier
- Usually it is sent the AD UPN
4. Get the metadata of the Identity Provider 
5. Install the Identity Provider’s metadata in the system
6. Make sure that users are correctly mapped in both systems - In the AD and in Skills Workflow 

<figure>

![img-box-shadow](/img/integrations/ssoconfiguration1.png)
<figcaption>Project created in Skills Workflow</figcaption>
</figure>

:::info
Skills Workflow's SSO Login does not support identity provider-initiated login. The login process must begin on Skills Workflow.
:::

## Requirements

- SHA-1
- SP initiated only
- SAML 2.0 Protocol


## Test environment

There is also the possibility to set SSO in the #Test environment (not to be confused with #UAT that is also a PROD environment):

The client’s SSO Identity Provider should provide SAML 2.0 Protocol
Get the metadata of the Identity Provider from their #Preview environment (e.g. tenant in #Okta, #OnePass or #Office365)
Install the Identity Provider’s metadata in the system in the #Test tenant
The system’s metadata for #Test is available at https://auth-test.skillsworkflow.com/saml2/metadata