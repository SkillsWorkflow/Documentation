---
id: timesheet-access-blocking
title: Timesheet access blocking and unblocking
description: Use the Client API to block and restore external account access according to timesheet status.
sidebar_label: Timesheet access blocking
sidebar_position: 1
---

Skills Workflow identifies users whose timesheet status calls for an access block or unblock. Your integration reads those lists, changes access in its identity system, and reports each result to Skills Workflow. The API does not change access in the external system.

For standard hosted API v2 URLs, use `https://apiv2-{tenantName}.skillsworkflow.com`. Replace `{tenantName}` with the **full assigned hostname segment** between `apiv2-` and `.skillsworkflow.com`; it may include an environment or region suffix. Use the API v2 hostname supplied for your environment if it differs from this pattern. Send `X-AppId` and `X-AppSecret` with every request; see [Client API authentication](/docs/build-and-extend/api/client-api#authentication).

<figure>

![img-box-shadow](/img/api/timesheet-access-blocking-flow.svg)
<figcaption>For each block or unblock request, apply the access change in your identity system before reporting the result to Skills Workflow.</figcaption>

</figure>

## Block users

1. Call `GET https://apiv2-{tenantName}.skillsworkflow.com/api/blockedloginrequests/userstoblock` to get users selected for blocking.
2. Block each account in your identity system, using `AdUserName` to identify the account.
3. Call `POST https://apiv2-{tenantName}.skillsworkflow.com/api/blockedloginrequests/block` for each result.

| Endpoint | Response |
| --- | --- |
| `GET /api/blockedloginrequests/userstoblock` | `200 OK`: array of user objects. |
| `POST /api/blockedloginrequests/block` | `200 OK`: user object. `404 Not Found` if `Oid` does not identify a user. |

The GET endpoint accepts optional `companyId`, `companyName`, `countryId`, and `countryName` query parameters. The ID parameters are GUIDs. Each returned user has `Oid` (Skills Workflow user ID), `UserName`, and `AdUserName`. The response type also defines `Name`, but the current mapper does not populate it.

<details>
<summary>GET users to block: request and response</summary>

The request has no body. Add any optional company or country filters to the URL.

```http
GET https://apiv2-{tenantName}.skillsworkflow.com/api/blockedloginrequests/userstoblock
X-AppId: <AppId>
X-AppSecret: <AppSecret>
```

`200 OK` response shape:

```json
[
  {
    "Oid": "<Skills Workflow user ID>",
    "UserName": "<Skills Workflow username>",
    "AdUserName": "<external identity username>"
  }
]
```

</details>

Send a JSON body to the POST endpoint:

| Field | Type | Meaning |
| --- | --- | --- |
| `Oid` | GUID, required | The `Oid` returned by the GET endpoint. |
| `Success` | boolean | Whether the external block succeeded. |
| `AccountExpirationDate` | date/time or null | Account expiration date to record in Skills Workflow when `Success` is `true`. |
| `Message` | string | Result message used when a block fails. |

<details>
<summary>POST block result: request and response</summary>

Replace the placeholders before sending the request:

```http
POST https://apiv2-{tenantName}.skillsworkflow.com/api/blockedloginrequests/block
X-AppId: <AppId>
X-AppSecret: <AppSecret>
Content-Type: application/json

{
  "Oid": "<Oid from the users-to-block response>",
  "Success": true,
  "AccountExpirationDate": "<account expiration date>"
}
```

`200 OK` response shape:

```json
{
  "Oid": "<Skills Workflow user ID>",
  "UserName": "<Skills Workflow username>",
  "AdUserName": "<external identity username>"
}
```

If the external block fails, send `"Success": false` and include `"Message"` with the failure result.

</details>

On success, Skills Workflow records the account expiration date and clears any block retry record for the user. On failure, it stores or updates a retry record. Failed attempts delay another attempt; after the third failed attempt, the user is excluded from the block list. The list also excludes users already marked as blocked. Timesheet approval status can affect the list when approval blocking is enabled.

## Unblock users

1. Call `GET https://apiv2-{tenantName}.skillsworkflow.com/api/unblockuserrequests` to get unblock requests.
2. Restore each account in your identity system, using `AdUserName` to identify it.
3. Call `PUT https://apiv2-{tenantName}.skillsworkflow.com/api/unblockuserrequests` for each result.

| Endpoint | Response |
| --- | --- |
| `GET /api/unblockuserrequests` | `200 OK`: array of unblock request objects. |
| `PUT /api/unblockuserrequests` | `200 OK`: request ID. `400 Bad Request` for an invalid ID; `404 Not Found` if the request does not exist. |

The GET endpoint accepts the same optional company and country filters as the block list. It returns requests from the preceding 60 minutes. Each request has `Id`, `AdUserName`, and `AccountExpirationDate` (which may be null).

<details>
<summary>GET unblock requests: request and response</summary>

The request has no body. Add any optional company or country filters to the URL.

```http
GET https://apiv2-{tenantName}.skillsworkflow.com/api/unblockuserrequests
X-AppId: <AppId>
X-AppSecret: <AppSecret>
```

`200 OK` response shape:

```json
[
  {
    "Id": "<unblock request ID>",
    "AdUserName": "<external identity username>",
    "AccountExpirationDate": null
  }
]
```

</details>

Send a JSON body to the PUT endpoint:

| Field | Type | Meaning |
| --- | --- | --- |
| `Id` | string containing a GUID, required | The `Id` returned by the GET endpoint. |
| `RequestResult` | boolean, required | Whether the external unblock succeeded. |
| `RequestResultMessage` | string | Result message to record on the request. |

<details>
<summary>PUT unblock result: request and response</summary>

Replace the placeholder with the `Id` from the unblock request before sending the request:

```http
PUT https://apiv2-{tenantName}.skillsworkflow.com/api/unblockuserrequests
X-AppId: <AppId>
X-AppSecret: <AppSecret>
Content-Type: application/json

{
  "Id": "<Id from the unblock request>",
  "RequestResult": true,
  "RequestResultMessage": ""
}
```

`200 OK` response shape (the updated request ID):

```json
"<Id from the unblock request>"
```

If the external unblock fails, send `"RequestResult": false` and put the failure result in `"RequestResultMessage"`.

</details>

When `RequestResult` is `true`, Skills Workflow deletes the unblock request and updates the user's unblock state. When it is `false`, Skills Workflow retains the request with the reported result. The client remains responsible for restoring access in the external identity system.


## Related articles

- [Client API](/docs/build-and-extend/api/client-api)
- [Filling in timesheets](/docs/product/time/timesheets/filling-time-sheets)
