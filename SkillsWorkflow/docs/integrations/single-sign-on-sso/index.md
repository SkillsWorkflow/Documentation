---
id: sso-configuration
title: SSO Configuration
description: "Skills Workflow supports SSO using the SAML 2."
sidebar_label: SSO Configuration
---

Skills Workflow supports SSO using the **SAML 2.0 protocol**. This allows users to authenticate via an external Identity Provider (IdP) such as Okta, OneLogin, or Microsoft Entra.

To ensure a successful integration in the **Production environment**, the following conditions must be met:

- The Identity Provider must support **SAML 2.0**
- A **User Identification Claim** must be agreed upon (preferably **Email**, or alternatively **AD Username**)

Currently supported providers include:

- [Google Suite](google-suite)
- [Microsoft Entra](microsoft-entra)
- [Okta](okta)

---
### Configuration Steps

1. Access the system’s SAML metadata at:  
   [https://auth.skillsworkflow.com/saml2/metadata](https://auth.skillsworkflow.com/saml2/metadata)

2. Import this metadata into your Identity Provider.

3. Define the User Identification Claim in the Identity Provider as:  
   `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier`  
   - In most cases, this corresponds to the user's AD UPN (User Principal Name)

4. Export the Identity Provider’s metadata file.

5. Provide this metadata to the Skills Workflow support team so it can be installed in your tenant.

6. Ensure that users are mapped correctly between both systems (AD and Skills Workflow).

<figure>

![img-box-shadow](/img/integrations/ssoconfiguration1.png)
<figcaption>SSO-enabled Login Page</figcaption>
</figure>

:::info
Skills Workflow **does not support Identity Provider-initiated login**. The login flow must begin on the Skills Workflow platform.
:::

:::tip
To simplify user access, you can create a custom bookmark or button in your Identity Provider dashboard (or internal portal) pointing to:

**`https://{tenant-name}.skillsworkflow.com/ssologin`**

This ensures the login process starts correctly from the Service Provider side.
:::

---
### Requirements Summary

- **SAML 2.0** protocol
- **SHA-1** signing algorithm
- **Service Provider-initiated login only**

---
### Test Environment Setup

SSO can also be configured for the **Test environment** (not to be confused with UAT, which is also a Production environment):

- Use your Identity Provider's **preview environment** (e.g. test tenant in Okta, OneLogin, or Office 365)
- Export the IdP metadata from that test environment
- Provide the metadata to Skills Workflow for installation in your **Test tenant**
- The SAML metadata for the Test environment is available at:  
  [https://auth-test.skillsworkflow.com/saml2/metadata](https://auth-test.skillsworkflow.com/saml2/metadata)