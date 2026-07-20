---
id: client-api
title: Client API
sidebar_label: Client API
sidebar_position: 0
---

## Overview

The Client API is designed for creating and updating documents in Skills Workflow. It’s not intended for bulk data extraction or reporting—use our Data API for that.

### Purpose

The Client API is intended for interacting with and managing documents and entities within Skills Workflow. It allows for the creation, update, and manipulation of items within your workflow but is not suited for large-scale data extraction.

### Use Cases

Integrate Skills Workflow into tools such as:
- Project management systems: Asana, Trello, Monday, ZiFlow
- Collaboration platforms: AirTable, Notion
- Business systems: ERP systems, attendance tracking, and other external document workflows

### Key Limitations

- Not for data extraction: Don’t rely on this API to pull large datasets; use the Data API for that purpose.
- 30-second execution cap: Long-running calls will be terminated. For optimal performance, use filters or pagination (e.g., skip/take) on listing endpoints.
- Rate limits may apply: High-frequency requests should be managed to avoid throttling.
- Limited data interactions: This API focuses on document creation and updating, not extensive data querying or analysis.
---

## Getting Started

### Authentication

Before calling any endpoint, you must obtain the following credentials from our Support team:

- **App Key** (`X-AppId`)  
- **App Secret** (`X-AppSecret`)  
- **Tenant ID** (`X-AppTenant`)

> These are provided by the support team upon request.

Include them in each request via HTTP headers:

```http
X-AppTenant:  <X-AppTenant>
X-AppId:      <X-AppId>
X-AppSecret:  <X-AppSecret>
X-AppUser:    <UserId>     # Optional, if user-scoped filtering is required
Content-Type: application/json
```

### Environments

The API is available in four environments, depending on your subscription plan:

- **Development**  
- **Test**  
- **UAT**  
- **Production**  

Each environment has its own base URL:

```
{{ApiUrl}}/api/v3/analytics
```

### Postman Collection

To facilitate testing of the available queries, we provide a Postman collection file with all endpoints configured. You can download it from the link below:

[Download Postman Collection - Client API](../../static/templates/client-api-postman-collention.json)

After downloading, make sure to configure the variables `{{ApiUrl}}`, `{{TenantId}}`, `{{AppId}}`, `{{AppSecret}}`, and `{{UserId}}` according to the credentials you have been given.

---

### Rate Limits

- **30-second cap** on every call—avoid timeouts by filtering or paging large result sets.  
- Listing endpoints support two query parameters:  
  - `skip` (int): number of records to skip  
  - `take` (int): maximum number of records to return  

---

## Endpoints

[Swagger](https://apiv2-demo-prod-we.skillsworkflow.com/swagger/index.html)

---

## Examples

### Creating a Document (`/api/posts`)

The `/api/posts` endpoint is the main way client integrations create documents in Skills Workflow. A single call can:

- Create a new document (when `Actions.Document` is supplied)
- Add a comment to a document's feed
- Run a workflow stage transition on a document
- Attach an initial Document Brief

:::note
`DocumentId` does not select an existing document to update when `Actions.Document` is present — see the [Payload Reference](#payload-reference) below for how document creation and comment/transition-only calls differ.
:::

#### Request

```http
POST https://apiv2-{{Tenant}}.skillsworkflow.com/api/posts
```

Include the standard [authentication headers](#authentication) and set `Content-Type: application/json`.

#### Example: Creating a Project

The example below creates a new **Project** document, adds a comment to its feed, and runs a workflow transition on it in the same call.

```json
{
    "DocumentId": "00000000-0000-0000-0000-000000000000",
    "DocumentTypeName": "Project",
    "Text": "Comment to be added initially to the newly created project's feed.",
    "Actions": {
        "Transition": {
            "StatusId": "e8e4651f-f6e2-4053-918b-1fb25ac7b6f6",
            "TransitionId": "2a0f65ab-408c-4696-8454-757a444dea9e"
        },
        "Document": {
            "DocumentType": "Project",
            "Project": {
                "ClassificationId": "7d16465d-b535-44f1-822a-3ab449dab77b",
                "ClientId": "94177d4d-670b-47b9-a3ff-f05bb4deaf6e",
                "CompanyId": "92768571-b454-4cdc-8b68-6f7c6aa8e386",
                "ContractId": "eee0c262-abbe-4ccf-9e44-a126402586bc",
                "CurrencyId": "12bb8ac2-1729-4be3-a587-0705c4888211",
                "BeginDateUtc": "2024-05-31T23:22:07.3520703Z",
                "EndDateUtc": "2024-12-01T00:22:07.3520703Z",
                "Investment": 0.0,
                "IsDraft": true,
                "ProductId": "8f77ad60-228d-4d07-a3f5-ff5ee2e64d8e",
                "ProjectNatureId": "00000000-0000-0000-0000-000000000000",
                "ProjectOwnerId": "00000000-0000-0000-0000-000000000000",
                "ProjectManagerId": "00000000-0000-0000-0000-000000000000",
                "ProjectType": 0,
                "AllowsTimesheet": true,
                "IsDeliverable": true,
                "IsActivated": false,
                "BusinessObjectTypeId": "0649680b-3f6c-4329-95b4-92e213bc3dcd"
            },
            "DocumentBrief": {
                "DocumentTypeName": "Project",
                "Text": ""
            }
        }
    }
}
```

**Response:** `201 Created` — the created **Post** (feed entry), not the Project itself. Its `DocumentId` field holds the ID of the newly created Project.

#### Payload Reference

| Field | Type | Description |
|---|---|---|
| `DocumentId` | `guid` | ID of the document the post/comment/transition applies to. When `Actions.Document` is included (as in the example below), a new document of that type is always created and this field is ignored for that purpose — use the empty GUID (`00000000-0000-0000-0000-000000000000`). To add a comment or run a transition on an **existing** document without creating one, omit `Actions.Document` and set this to that document's ID instead. |
| `DocumentTypeName` | `string` | The document type being created or updated, e.g. `Project`. |
| `Text` | `string` | Comment added to the document's feed. |
| `Actions.Transition` | `object` | Optional. Runs a workflow stage transition on the document as part of the same call. |
| `Actions.Transition.StatusId` | `guid` | ID of the workflow status/stage the document is in. |
| `Actions.Transition.TransitionId` | `guid` | ID of the workflow transition to execute. |
| `Actions.Document` | `object` | The document data itself. |
| `Actions.Document.DocumentType` | `string` | Same value as `DocumentTypeName`. |
| `Actions.Document.<DocumentType>` | `object` | The document's own fields, keyed by the document type name (`Project` in this example). The shape of this object depends on the document type — see [Project fields](#project-fields) below. |
| `Actions.Document.DocumentBrief` | `object` | Optional. Creates an initial Brief linked to the document. |
| `Actions.Document.DocumentBrief.DocumentTypeName` | `string` | Document type the brief belongs to — same value as `DocumentTypeName`. |
| `Actions.Document.DocumentBrief.Text` | `string` | Content of the brief. |

:::note
`Actions.Document.<DocumentType>` changes name and shape depending on the document type being created. The `Project` fields below apply only when `DocumentType` is `Project`; creating a `Deliverable` or other document type uses that type's own field set in its place.
:::

#### Project Fields

Fields available under `Actions.Document.Project`:

| Field | Type | Description |
|---|---|---|
| `ClassificationId` | `guid` | Project classification. |
| `ClientId` | `guid` | Client the project belongs to. |
| `CompanyId` | `guid` | Owning company. |
| `ContractId` | `guid` | Associated contract. |
| `CurrencyId` | `guid` | Currency used for the project's financials. |
| `BeginDateUtc` | `datetime` | Project start date (UTC). |
| `EndDateUtc` | `datetime` | Project end date (UTC). |
| `Investment` | `number` | Planned investment amount. |
| `IsDraft` | `boolean` | Whether the project is created as a draft. |
| `ProductId` | `guid` | Associated product. |
| `ProjectNatureId` | `guid` | Project nature/category. Use the empty GUID if not applicable. |
| `ProjectOwnerId` | `guid` | Project owner (user). Use the empty GUID if not set. |
| `ProjectManagerId` | `guid` | Project manager (user). Use the empty GUID if not set. |
| `ProjectType` | `int` | Numeric project type code. |
| `AllowsTimesheet` | `boolean` | Whether timesheets can be logged against the project. |
| `IsDeliverable` | `boolean` | Whether the project itself acts as a deliverable. |
| `IsActivated` | `boolean` | Whether the project is active. |
| `BusinessObjectTypeId` | `guid` | Business object type ID for the project. |

:::tip
Most `Id` fields above reference records that already exist in your tenant (clients, companies, products, etc.). The [Data Extraction](../api/data-extraction-api.md) queries under `docs/api/data-extraction` are available to look up the correct GUID for each of these before building the payload — don't hardcode IDs from another tenant or environment.
:::

#### Testing with Postman

The same request can be sent from the [Postman collection](#postman-collection):

| Field | Value |
|---|---|
| Method | `POST` |
| URL | `https://apiv2-{{Tenant}}.skillsworkflow.com/api/posts` |
| Body | `raw` / `JSON` — paste the payload above |
