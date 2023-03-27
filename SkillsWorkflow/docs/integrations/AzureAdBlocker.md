---
id:  AzureAdBlocker
title: 'AzureAdBlocker'
sidebar_label: AzureAdBlocker
---

# Office 365 AD User Blocker/Unblocker

## Enable and Disable User Account using Missing TimeSheets
### Requirements:

- Azure AD
- Azure AD App registration with Microsoft Graph Permissions:
    - User.ManageIdentities.All
    - User.ReadWrite.All
- User With adusername = email address
- user With Timesheet Required
- Configuration Key "AzureADKeys"
```
{
    "TenantId": "*",
    "ClientId": "*",
    "ClientSecret": "*"
}
```
- Global Query "GetDelinquentUsers"

### Block Workflow
- Scheduled Automation once a Day
- Rest - Execute Global Query "GetDelinquentUsers"
    - **POST** [/api/analytics/globalQuery/execute?queryName=GetDelinquentUsers](https://apiv2-playground-dev-we.skillsworkflow/api/analytics/globalQuery/execute?queryName=GetDelinquentUsers])
    - Body: ```{}```
- Loop - Iterate GetDelinquentUsers Payload
    - Subworkflow
        - AzureAdAuthentication using AppId and AppSecret from Azure AD App registration
        - Rest - PATCH MS Graph Api:
            - **Patch** https://graph.microsoft.com/beta/users/{email}
                - Body: ```{"accountEnabled":"false"}```

#### Payload from GetDelinquentUsers Global Query:
```
{
  "Data": [
    {
        "Oid": "7744be77-4370-4936-8d3d-61cb772ba545",
        "UserName": "Adam",
        "AdUserName":"adam@aduserdomain.org"
    }
}
```

### Unblock Workflow
- Webhook for document Type Skill.Module.BusinessObjects.UnblockUserRequest pointing to Automation
- Automation:
    - Use Payload from Webhook:
        - event.details.username
    - AzureAdAuthentication using AppId and AppSecret from Azure AD App registration
    - Rest - Patch MS Graph Api:
        - **Patch** https://graph.microsoft.com/beta/users/{{email}}
            - Body: ```{"accountEnabled":"true"}```

#### Payload from WebHook Example:
```
{
  "secret": null,
  "event": {
    "id": "7744be77-4370-4936-8d3d-61cb772ba545",
    ...
    },
    "details": {
      "userName": "adam@aduserdomain.org",
      "requestUtcDate": "2021-08-03T14:11:37.2064188Z",
      ...
    }
  }
}
```