---
id:  ad-user-blocked
title: Ad User blocked in the system
sidebar_label: Ad User blocked in the system
---

All users that are on the Active Directory (AD) will be blocked if delinquent in the system.

The user has a tolerance period defined by the company, during which the user will be notified by email/push notifications.

- If the user is bound to AD and is delinquent, all of the functionalities integrated with AD will be unaccessible (e.g. email, internet)
- In the case that the user is not bound to AD, the user will only be blocked in the system functionalities, only allowing access where the user is delinquent (e.g. Timesheets, Leaves).

:::note
If blocked in the AD, the user should enter in another persons computer (a different AD account).
:::



To unblock, the user should go to SkillsWorkflow Login Page and click on the "Are you Blocked" button.


<figure>

![img-box-shadow](/img/integrations/ad-user1.png)
<figcaption>Login Page "Are you blocked" button</figcaption>
</figure>

After clicking on the button, the user will go to a login request page which will be filled with the user's AD Credentials*

<figure>

![img-box-shadow](/img/integrations/ad-user2.png)
<figcaption>Log in Request page</figcaption>
</figure>

After the request being processed the user will be temporarily unblocked, enabling to fill in where the user is delinquent. After this last step the user will regain access to all the system functionalities, with a waiting period being around 20 minutes.


- The AD will be queried in order to determine if the user credentials are valid. Since the User is blocked in the AD, this procedure will be executed as follows:
1. The User is unblocked in the AD
2. The User's credentials (login and password) are checked in the AD
3. The User is blocked again in the AD.