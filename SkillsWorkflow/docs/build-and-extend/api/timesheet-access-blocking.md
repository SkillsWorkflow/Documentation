---
id: timesheet-access-blocking
title: Timesheet-based access blocking API
description: Use the Skills Workflow API to identify users whose timesheet status requires an external access block, and report block and unblock results.
sidebar_label: Timesheet access blocking
sidebar_position: 4
---

Skills Workflow provides lists of users to block and unblock based on timesheet status. An external system can read those lists, change access in its own identity system, and report the result to Skills Workflow. These endpoints do not themselves disable or restore access in that external system.

## Authentication and base URL

Use the Client API credentials provided by Skills Workflow Support. Send `X-AppId` and `X-AppSecret` with each request. See [Client API authentication](/docs/build-and-extend/api/client-api#authentication) for credential setup. Use the API v2 base URL assigned to your environment, shown below as `{ApiUrl}`.

## Blocking flow

1. Call `GET {ApiUrl}/api/blockedloginrequests/userstoblock` to retrieve users selected for blocking.
2. Block each account in your external identity system, using `AdUserName` to identify the account.
3. Call `POST {ApiUrl}/api/blockedloginrequests/block` with the result for each user.

| Method and path | Purpose | Response |
| --- | --- | --- |
| `GET /api/blockedloginrequests/userstoblock` | List users to block. | `200 OK`: array of user objects. |
| `POST /api/blockedloginrequests/block` | Report the outcome of a block attempt. | `200 OK`: user object. `404 Not Found` if `Oid` does not identify a user. |

The GET endpoint accepts optional `companyId`, `companyName`, `countryId`, and `countryName` query parameters. The ID parameters are GUIDs. Each returned user has `Oid` (Skills Workflow user ID), `UserName`, and `AdUserName`. The response type also defines `Name`, but the current mapper does not populate it.

Send a JSON body to the POST endpoint:

| Field | Type | Meaning |
| --- | --- | --- |
| `Oid` | GUID, required | The `Oid` returned by the GET endpoint. |
| `Success` | boolean | Whether the external block succeeded. |
| `AccountExpirationDate` | date/time or null | Account expiration date to record in Skills Workflow when `Success` is `true`. |
| `Message` | string | Result message used when a block fails. |

On success, Skills Workflow records the account expiration date and clears any block retry record for the user. On failure, it stores or updates a retry record. Failed attempts delay another attempt; after the third failed attempt, the user is excluded from the block list. The list also excludes users already marked as blocked. Timesheet approval status can affect the list when approval blocking is enabled.

## Unblocking flow

1. Call `GET {ApiUrl}/api/unblockuserrequests` to retrieve unblock requests.
2. Restore each account in your external identity system, using `AdUserName` to identify it.
3. Call `PUT {ApiUrl}/api/unblockuserrequests` with the result for each request.

| Method and path | Purpose | Response |
| --- | --- | --- |
| `GET /api/unblockuserrequests` | List recent unblock requests. | `200 OK`: array of unblock request objects. |
| `PUT /api/unblockuserrequests` | Report the outcome of an unblock attempt. | `200 OK`: request ID. `400 Bad Request` for an invalid ID; `404 Not Found` if the request does not exist. |

The GET endpoint accepts the same optional company and country filters as the block list. It returns requests from the preceding 60 minutes. Each request has `Id`, `AdUserName`, and `AccountExpirationDate` (which may be null).

Send a JSON body to the PUT endpoint:

| Field | Type | Meaning |
| --- | --- | --- |
| `Id` | string containing a GUID, required | The `Id` returned by the GET endpoint. |
| `RequestResult` | boolean, required | Whether the external unblock succeeded. |
| `RequestResultMessage` | string | Result message to record on the request. |

When `RequestResult` is `true`, Skills Workflow deletes the unblock request and updates the user's unblock state. When it is `false`, Skills Workflow retains the request with the reported result. The client remains responsible for restoring access in the external identity system.

## Related articles

- [Client API](/docs/build-and-extend/api/client-api)
- [Filling in timesheets](/docs/product/time/timesheets/filling-time-sheets)
