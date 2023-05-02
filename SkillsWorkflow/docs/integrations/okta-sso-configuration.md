---
title: 'Okta SSO'
sidebar_label: Okta SSO
---

In this article, you'll learn how to integrate with Okta SSO. When you integrate Skills Workflow with Okta, you can:

* Control in Okta who has access to Skills Workflow.
* Enable your users to be automatically signed-in to Skills Workflow with their Okta accounts.

---
### Prerequisites

To get started, you need the following items:

* An Okta subscription.
* Skills Workflow single sign-on (SSO) enabled subscription.

:::note Currently it is only supported **SP** initiated SSO.
:::

<!-- to be added once app is available on Okta App Gallery

 ## Add Skills Workflow from the gallery

To configure the integration, you will need to access the Admin Center and configure a new App.

1. Sign in to the Okta account and access the Admin center.
2. On the left navigation pane, select the **Applications**.
3. Search for Skills Workflow.
4. In the **Add from the gallery** section, type **Skills Workflow** in the search box.
5. Select **Skills Workflow** from results panel and then add the app. Wait a few seconds while the app is added to your tenant.
6. -->

<!-- 
## Configure and test Okta SSO for Skills Workflow

Configure and test Okta SSO using a testing user. 

- For SSO to work, you need to establish a link relationship between an Okta user and the related user in the system. 
- Use the e-mail to map the SSO Username field on the user profile.

To configure and test Okta SSO, perform the following steps:

1. **[Configure Okta SSO](#configure-okta-sso)** - to enable your users to use this feature.
    1. **[Create an Azure AD test user](#create-an-azure-ad-test-user)** - to test Azure AD single sign-on with B.Simon.
    2. **[Assign the Azure AD test user](#assign-the-azure-ad-test-user)** - to enable B.Simon to use Azure AD single sign-on.
2. **[Configure Skills Workflow SSO](#configure-skills-workflow-sso)** - to configure the single sign-on settings on application side.
    1. **[Create Skills Workflow test user](#create-skills-workflow-test-user)** - to have a counterpart of B.Simon in Skills Workflow that is linked to the Azure AD representation of user.
3. **[Test SSO](#test-sso)** - to verify whether the configuration works. -->

---
### Configure Okta SSO

Follow these steps to enable Okta SSO in the Admin center.

1. In the **Admin center**, on the left pane navigate to **Applications** and click on **Create New App**.   

    ![Screenshot shows button to create a new App.](/img/integrations/okta/1-Okta-Applications.png "Create New App")
    ![Screenshot shows button to create a new App.](/img/integrations/okta/1-Okta-Create-App-Integration.png "Create New App")

2. For Sign-in method, select **SAML 2.0**, and click **Next**.   

   ![Screenshot shows sign-in method.](/img/integrations/okta/2-Okta-Create-New-App-SAML2.png "Sign-in method")

3. On the **General Settings**, configure the  **App Name** and **App Logo**.

   ![Screenshot shows button to add an App.](/img/integrations/okta/3-Okta-AppNameImage.png "App Name and Logo")

4. On the **SAML Settings** section, perform the following steps:

    - In the **Single Sign-on URL** text box, type the URL: `https://auth.skillsworkflow.com/saml2/acs`
    - In the **Audiance URI (SP Entity ID)** text box, type the URL: `https://auth.skillsworkflow.com/saml2`
    - Leave the other settings with the default values

        ![Screenshot shows button to add an App.](/img/integrations/okta/4-Okta-Configure-SAML2.png "Sign-on URL and Audiance URI")
        ![Screenshot shows button to add an App.](/img/integrations/okta/5-Okta-Complete-SAML2.png "App Name and Image")
    
    
5. On the **Are you a Customer or partner** section, select the  **I'm an Okta customer adding an internal app**, and then click on **Finish**.

	![Screenshot shows the Certificate download link.](/img/integrations/okta/6-Okta-Finish-SAML2.png "Finish")

6. Once the app is created, go to the **Assignments** tab, assign the people or groups that will have access to use the SSO App.

	![Screenshot shows how to assing people](/img/integrations/okta/7-Okta-Assign-People.png "Metadata")

7. On the **Sign On** tab, click on the **View SAML setup instructions**.

	![Screenshot shows te metadata configuration.](/img/integrations/okta/8-Okta-SignOn-Tab-View-SAML-Instructions.png "Metadata Configuration")

8. Copy the configurations to the system SSO configuration, by accessing the **Maintenance** and navigating to **SSO page**.
   
      - Okta **Identity Provider Single Sign-On URL** to the system `SSO Service Url`
      - Okta **Identity Provider Issuer** to the system `Entity ID`
      - Okta **X.509 Certificate** to the system `Certificate`

    ![Screenshot shows Okta Configuration.](/img/integrations/okta/9-Okta-SignOn-Data-Configuration.png "Metadata Configuration")
    ![Screenshot shows Skills Workflow SSO Configuration.](/img/integrations/okta/10-Okta-SkillsWorkflow-SSO-Setup.png "Metadata Configuration")

---
### Improving user experience

To provide a better user experience while using OKTA and Skills Workflow integration, it is recommended to:

   -   Not displaying the SSO app to the users
   -   But create a Bookmark App within OKTA that will provide the full SSO user experience

Please proceed with the following steps:

1. On the **General tab**, set the **application visibility** as **not visible** to the users

    ![Screenshot shows Okta App Visibility.](/img/integrations/okta/11-Okta-Hide-App-Icon.png "Do not display application icon to users")

3. Go to **Applications**, and create a **Bookmark App**. 
   
   - Set the **Application Name** as Skills Workflow
   - Set the **URL** with the Tenant URL followed by /SSOLogin
   - And assign the users to this new **Bookmark App**
   - Once it is created, go back to Bookmark App settings and under **General** tab, add a **Logo** to the Bookmark App

    ![Screenshot shows Okta App Visibility.](/img/integrations/okta/12-Okta-Create-Bookmark-App.png "Configuring Bookmark app")
    ![Screenshot shows Okta App Visibility.](/img/integrations/okta/13-Okta-Edit-Bookmark-App-Logo.png "Adding Bookmark app Logo")
    ![Screenshot shows Okta App Visibility.](/img/integrations/okta/14-Okta-End-User.png "Okta End User App")