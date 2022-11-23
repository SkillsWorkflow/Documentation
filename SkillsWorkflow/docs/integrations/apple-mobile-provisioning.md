---
id:  apple-mobile-provisioning
title: Apple Mobile Provisioning
sidebar_label: Apple Mobile Provisioning
---

### What is a Distribution Certificate and a Provisioning profile?

A distribution certificate identifies your team/organization within a distribution provisioning profile and allows you to submit your app to the Apple App Store. A . p12 file contains the certificates Apple needs in order to build and publish apps.
A provisioning profile is a collection of information that links an App ID with signing certificates and authorized devices. It is used to control and authorize the devices on which the app can run and the Apple services it can access (such as iCloud or In-App Payment).

<figure>

![img-box-shadow](/img/integrations/Certificates.png)
<figcaption>Certificates</figcaption>
</figure>
<figure>

![img-box-shadow](/img/integrations/Identifiers.png)
<figcaption>Identifiers</figcaption>
</figure>
<figure>

![img-box-shadow](/img/integrations/MobileProfiles.png)
<figcaption>Provisioning Profiles</figcaption>
</figure>

### Certificate Renewal

#### Developer.apple.com

- Renew Certificate, Identifier and Provisioning Profile
- Download all renewed items
- Import Certificate and export .p12 file with pass

#### dev.azure.com/nextway

##### Update Secure Files [Go](https://dev.azure.com/nextway/Skill/_library?itemType=SecureFiles)
- Replace "Apple Distribution - SKILLS WORKFLOW, UNIPESSOAL, LDA (ZX6BWGQFVF).p12"
- Replace "com_SkillsWorkflow_Mobile_V2_CI.mobileprovision"
- Replace "Skills_Mobile_v2_App_Store_Distribution.mobileprovision"

##### Edit Pipeline "SkillsWorkflow MobileV2-Xamarin-CD"
- update "Install iOS Distribution Certificate"
- update "Install an Apple provisioning profile - App Center"
- update "Build Xamarin.iOS solution **/SkillsWorkflow.sln - App Center"
- Get Provisioning profile UUID from mobileProvisioning file
- Edit Pipeline "SkillsWorkflow MobileV2-Xamarin-CD-release"
- update "Install iOS Distribution Certificate"
- update "Install an Apple provisioning profile - App Center"
- update "Build Xamarin.iOS solution **/SkillsWorkflow.sln - App Center"
- Get Provisioning profile UUID from mobileProvisioning file

<figure>

![img-box-shadow](/img/integrations/apple-mobile-provisioning-01.png)
<figcaption>Install an Apple provisioning profile - App Center</figcaption>
</figure>
<figure>

![img-box-shadow](/img/integrations/apple-mobile-provisioning-02.png)
<figcaption>Install iOS Distribution Certificate</figcaption>
</figure>

#### Appcenter.ms
- Edit Build Configuration
- edit sign Builds
- Update Certificate and Provisioning Profile

<figure>

![img-box-shadow](/img/integrations/apple-mobile-provisioning-03.png)
<figcaption>Appcenter Branches</figcaption>
</figure>
<figure>

![img-box-shadow](/img/integrations/apple-mobile-provisioning-04.png)
<figcaption>Sign Builds</figcaption>
</figure>