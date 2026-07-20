---
id: client-api
title: Client API
sidebar_label: Client API
sidebar_position: 0
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

### Creating a Document

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

#### Payload Reference

These fields make up the common request envelope, regardless of which document type is being created:

| Field | Type | Description |
|---|---|---|
| `DocumentId` | `guid` | ID of the document the post/comment/transition applies to. When `Actions.Document` is included, a new document of that type is always created and this field is ignored for that purpose — it can simply be omitted, as in the examples below. To add a comment or run a transition on an **existing** document without creating one, omit `Actions.Document` and set this to that document's ID instead. |
| `DocumentTypeName` | `string` | The document type being created or updated — see [Supported Document Types](#supported-document-types) below. |
| `Text` | `string` | Comment added to the document's feed. |
| `Actions.Transition` | `object` | Optional. Runs a workflow stage transition on the document as part of the same call. |
| `Actions.Transition.StatusId` | `guid` | ID of the workflow status/stage the document is in. |
| `Actions.Transition.TransitionId` | `guid` | ID of the workflow transition to execute. |
| `Actions.Document` | `object` | Optional. Present only when creating a new document (or, for Deliverable, updating one — see below). |
| `Actions.Document.DocumentType` | `string` | Same value as `DocumentTypeName`. |
| `Actions.Document.DocumentActionType` | `string` | Required whenever `Actions.Document` is present. Use `"Post"` to create a document. **Deliverable** is the only type that also supports `"Put"`, to update an existing Deliverable instead of creating one (using a `JobPutModel` object in place of `Job` — not covered in detail here). |
| `Actions.Document.<nested property>` | `object` | The document's own fields. The property name and shape depend on the document type — see [Supported Document Types](#supported-document-types) and the tabs below. |
| `Actions.Document.<nested property>.DocumentBrief` | `object` | Optional, only for document types that support it (see below). Creates an initial Brief linked to the document — see [Document Brief](#document-brief) below. |

:::note
Unlike the other fields above, `DocumentBrief` is nested **inside** the type-specific object (e.g. `Actions.Document.Project.DocumentBrief`), not as a sibling of it.
:::

#### Supported Document Types

| `DocumentType` value | Nested property under `Actions.Document` | Supports `DocumentBrief`? |
|---|---|---|
| `Project` | `Project` | Yes |
| `Deliverable` | `Job` (create) / `JobPutModel` (update) | Yes, create only |
| `Contract` | `Contract` | Yes |
| `Estimate` | `Estimate` | Yes |
| `Expense` | `Expense` | Yes |
| `ExpenseItem` | `ExpenseItem` | Yes |
| `RateCard` | `RateCard` | No |
| `PriceTable` | `PriceTable` | No |
| `Request` | `Request` | Yes |
| `Tender` | `Tender` | No |

:::note
`Deliverable` is the only type where the nested property name doesn't match `DocumentType` — it's `Job`, not `Deliverable`.
:::

#### Examples by Document Type

Each tab below shows a minimal creation payload and the fields table for that document type. Fields lists are not exhaustive — see [Swagger](#endpoints) for the full schema of each type. `Text` and `Actions.Transition` (shown in the **Project** tab) can be combined with any document type the same way.

<Tabs groupId="post-document-type" defaultValue="project" values={[
  {label: 'Project', value: 'project'},
  {label: 'Deliverable', value: 'deliverable'},
  {label: 'Contract', value: 'contract'},
  {label: 'Estimate', value: 'estimate'},
  {label: 'Expense', value: 'expense'},
  {label: 'Expense Item', value: 'expenseitem'},
  {label: 'Rate Card', value: 'ratecard'},
  {label: 'Price Table', value: 'pricetable'},
  {label: 'Request', value: 'request'},
  {label: 'Tender', value: 'tender'}
]}>

<TabItem value="project">

The example below creates a new **Project** document, adds a comment to its feed, and runs a workflow transition on it in the same call.

```json
{
    "DocumentTypeName": "Project",
    "Text": "Comment to be added initially to the newly created project's feed.",
    "Actions": {
        "Transition": {
            "StatusId": "e8e4651f-f6e2-4053-918b-1fb25ac7b6f6",
            "TransitionId": "2a0f65ab-408c-4696-8454-757a444dea9e"
        },
        "Document": {
            "DocumentType": "Project",
            "DocumentActionType": "Post",
            "Project": {
                "ClassificationId": "7d16465d-b535-44f1-822a-3ab449dab77b",
                "ClientId": "94177d4d-670b-47b9-a3ff-f05bb4deaf6e",
                "ContractId": "eee0c262-abbe-4ccf-9e44-a126402586bc",
                "CurrencyId": "12bb8ac2-1729-4be3-a587-0705c4888211",
                "BeginDateUtc": "2024-05-31T23:22:07.3520703Z",
                "EndDateUtc": "2024-12-01T00:22:07.3520703Z",
                "Investment": 0.0,
                "IsDraft": true,
                "ProductId": "8f77ad60-228d-4d07-a3f5-ff5ee2e64d8e",
                "ProjectNatureId": "c3d4e5f6-a7b8-49c0-8d1e-2f3a4b5c6d7e",
                "ProjectOwnerId": "d4e5f6a7-b8c9-4ad0-9e1f-3a4b5c6d7e8f",
                "AllowsTimesheet": true,
                "IsDeliverable": true,
                "DocumentBrief": {
                    "DocumentTypeName": "Project",
                    "Text": ""
                }
            }
        }
    }
}
```

Fields under `Actions.Document.Project`:

| Field | Type | Description |
|---|---|---|
| `ClassificationId` | `guid` | Project classification. |
| `ClientId` | `guid` | Client the project belongs to. |
| `ContractId` | `guid` | Associated contract. |
| `CurrencyId` | `guid` | Currency used for the project's financials. |
| `BeginDateUtc` | `datetime` | Project start date (UTC). |
| `EndDateUtc` | `datetime` | Project end date (UTC). |
| `Investment` | `number` | Planned investment amount. |
| `IsDraft` | `boolean` | Whether the project is created as a draft. |
| `ProductId` | `guid` | Associated product. |
| `ProjectNatureId` | `guid` | Project nature/category. Use the empty GUID if not applicable. |
| `ProjectOwnerId` | `guid` | Project owner (user). Use the empty GUID if not set. |
| `AllowsTimesheet` | `boolean` | Whether timesheets can be logged against the project. |
| `IsDeliverable` | `boolean` | Whether the project itself acts as a deliverable. |

:::note
`CompanyId`, `ProjectManagerId`, `BusinessObjectTypeId`, and `IsActivated` are deliberately left out here — they have no effect when creating a Project (they only apply when updating one through the client update endpoints). There's also no `ProjectType` field: the server always derives it from whether `ContractId` is set, so any submitted value would be discarded.
:::

</TabItem>

<TabItem value="deliverable">

Creates a new **Deliverable** under an existing Project.

```json
{
    "DocumentTypeName": "Deliverable",
    "Actions": {
        "Document": {
            "DocumentType": "Deliverable",
            "DocumentActionType": "Post",
            "Job": {
                "Name": "New landing page copy",
                "ProjectId": "3d9c1b3a-1a2b-4c3d-9e0f-1a2b3c4d5e6f",
                "ClientId": "94177d4d-670b-47b9-a3ff-f05bb4deaf6e",
                "ProductId": "8f77ad60-228d-4d07-a3f5-ff5ee2e64d8e",
                "DepartmentId": "5b2e1f6a-3c4d-4e5f-8a9b-1c2d3e4f5a6b",
                "JobTypeId": "a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d",
                "AgreedDateUtc": "2024-12-01T00:00:00Z",
                "IsDraft": true,
                "AllowsTimesheet": true,
                "IsDeliverable": true,
                "DocumentBrief": {
                    "DocumentTypeName": "Deliverable",
                    "Text": ""
                }
            }
        }
    }
}
```

Fields under `Actions.Document.Job` (create):

| Field | Type | Description |
|---|---|---|
| `Name` | `string` | Deliverable title. |
| `ProjectId` | `guid` | Parent project. **Required** — the Deliverable can't be created without it, even as a draft. |
| `ParentJobId` | `guid` | Optional parent Deliverable, for sub-deliverables. |
| `ClientId` | `guid` | Client the Deliverable belongs to. |
| `ProductId` | `guid` | Associated product. |
| `ContractId` | `guid` | Associated contract. |
| `DepartmentId` | `guid` | Owning department. |
| `JobTypeId` | `guid` | Deliverable type. |
| `JobClassificationId` | `guid` | Deliverable classification. |
| `BusinessObjectTypeId` | `guid` | Business object type. |
| `AgreedDateUtc` | `datetime` | Agreed delivery date (UTC). |
| `IsDraft` | `boolean` | Whether the Deliverable is created as a draft. |
| `WorkflowStateId` | `guid` | Initial workflow stage. |
| `Priority` | `int` | Priority code. |
| `AllowsTimesheet` | `boolean` | Whether timesheets can be logged against it. |
| `IsDeliverable` | `boolean` | Whether this Deliverable counts as a deliverable in reporting (as opposed to an internal task). |
| `MarketId` | `guid` | Associated market. |

:::note
A few fields are accepted but have no effect on **creation**: `RequestedDateUtc` (always derived from `AgreedDateUtc`), and `WorkflowId`/`DocymentTypeId` (the workflow is always computed from `DepartmentId` + `JobTypeId`). If `ProductId` belongs to a different client than `ClientId`, the server silently drops it instead of erroring. Updating an existing Deliverable uses `DocumentActionType: "Put"` with a `JobPutModel` object (in place of `Job`) — a distinct model not covered in full here.
:::

</TabItem>

<TabItem value="contract">

```json
{
    "DocumentTypeName": "Contract",
    "Actions": {
        "Document": {
            "DocumentType": "Contract",
            "DocumentActionType": "Post",
            "Contract": {
                "Name": "Annual retainer 2025",
                "ClientId": "94177d4d-670b-47b9-a3ff-f05bb4deaf6e",
                "ProductId": "8f77ad60-228d-4d07-a3f5-ff5ee2e64d8e",
                "JobTypeId": "a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d",
                "Value": 50000.0,
                "StartDateUtc": "2025-01-01T00:00:00Z",
                "EndDateUtc": "2025-12-31T00:00:00Z",
                "IsDraft": true,
                "DocumentBrief": {
                    "DocumentTypeName": "Contract",
                    "Text": ""
                }
            }
        }
    }
}
```

Fields under `Actions.Document.Contract`:

| Field | Type | Description |
|---|---|---|
| `Name` | `string` | Contract name. |
| `ClientId` | `guid` | Client the contract belongs to. **Required.** |
| `ProductId` | `guid` | Associated product. |
| `JobTypeId` | `guid` | Deliverable type covered by the contract. |
| `Value` | `number` | Contract value. |
| `StartDateUtc` | `datetime` | Contract start date (UTC). |
| `EndDateUtc` | `datetime` | Contract end date (UTC). |
| `OwnerId` | `guid` | Contract owner (user). |
| `IsDraft` | `boolean` | Whether the contract is created as a draft. |
| `WorkflowStateId` | `guid` | Initial workflow stage. |
| `IsActivated` | `boolean` | Whether the contract is active. |
| `BrandId` | `guid` | Brand, used only as a fallback when the associated Product has none of its own. |

:::note
`RateCardTypeNumber` isn't listed above on purpose — it's accepted by the payload but has no effect at all; on the server it's a read-only value computed from other contract data, not something that can be set.
:::

</TabItem>

<TabItem value="estimate">

```json
{
    "DocumentTypeName": "Estimate",
    "Actions": {
        "Document": {
            "DocumentType": "Estimate",
            "DocumentActionType": "Post",
            "Estimate": {
                "Name": "Q1 campaign estimate",
                "JobTypeId": "a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d",
                "ProjectId": "3d9c1b3a-1a2b-4c3d-9e0f-1a2b3c4d5e6f",
                "ClientId": "94177d4d-670b-47b9-a3ff-f05bb4deaf6e",
                "CompanyId": "92768571-b454-4cdc-8b68-6f7c6aa8e386",
                "DepartmentId": "5b2e1f6a-3c4d-4e5f-8a9b-1c2d3e4f5a6b",
                "ProductId": "8f77ad60-228d-4d07-a3f5-ff5ee2e64d8e",
                "CurrencyId": "12bb8ac2-1729-4be3-a587-0705c4888211",
                "IsDraft": true,
                "DocumentBrief": {
                    "DocumentTypeName": "Estimate",
                    "Text": ""
                }
            }
        }
    }
}
```

Fields under `Actions.Document.Estimate`:

| Field | Type | Description |
|---|---|---|
| `Name` | `string` | Estimate name. |
| `JobTypeId` | `guid` | Deliverable type the estimate is for. |
| `ProjectId` | `guid` | Parent project. |
| `ContractId` | `guid` | Associated contract. |
| `DeliverableId` | `guid` | Associated Deliverable. |
| `ClientId` | `guid` | Client the estimate belongs to. |
| `CompanyId` | `guid` | Owning company. |
| `DepartmentId` | `guid` | Owning department. |
| `ProductId` | `guid` | Associated product. |
| `CurrencyId` | `guid` | Currency used for the estimate's financials. |
| `PaymentConditionId` | `guid` | Payment condition. |
| `WorkflowStateId` | `guid` | Initial workflow stage. |
| `IsDraft` | `boolean` | Whether the estimate is created as a draft. |
| `IsActivated` | `boolean` | Whether the estimate is active. |
| `BusinessObjectTypeId` | `guid` | Business object type. |
| `AllowsTimesheet` | `boolean` | Whether timesheets can be logged against it. |
| `EstimateCopyId` | `guid` | Optional. Copies the items from another existing estimate into this one after creation. |

:::note
`CreatedOn` and `Exchange` are accepted but always recomputed by the server on creation (current timestamp, and the currency's own sell rate) — any submitted value is discarded.
:::

</TabItem>

<TabItem value="expense">

```json
{
    "DocumentTypeName": "Expense",
    "Actions": {
        "Document": {
            "DocumentType": "Expense",
            "DocumentActionType": "Post",
            "Expense": {
                "DocumentNumber": "EXP-2025-001",
                "CompanyId": "92768571-b454-4cdc-8b68-6f7c6aa8e386",
                "DepartmentId": "5b2e1f6a-3c4d-4e5f-8a9b-1c2d3e4f5a6b",
                "CurrencyId": "12bb8ac2-1729-4be3-a587-0705c4888211",
                "PaymentConditionId": "e5f6a7b8-c9d0-4be1-8f2a-4b5c6d7e8f9a",
                "SupplierId": "f6a7b8c9-d0e1-4cf2-903b-5c6d7e8f9a0b",
                "TypeId": "a7b8c9d0-e1f2-4d03-914c-6d7e8f9a0b1c",
                "Emission": "2025-01-15T00:00:00Z",
                "Due": "2025-02-15T00:00:00Z",
                "Remarks": "Supplier invoice for January services",
                "DocumentBrief": {
                    "DocumentTypeName": "Expense",
                    "Text": ""
                }
            }
        }
    }
}
```

Fields under `Actions.Document.Expense`:

| Field | Type | Description |
|---|---|---|
| `DocumentNumber` | `string` | External/reference document number. |
| `CompanyId` | `guid` | Owning company. |
| `DepartmentId` | `guid` | Owning department. |
| `CurrencyId` | `guid` | Currency used for the expense. |
| `PaymentConditionId` | `guid` | Payment condition. |
| `SupplierId` | `guid` | Supplier the expense is billed from. |
| `EmployeeId` | `guid` | Employee associated with the expense. |
| `TypeId` | `guid` | Expense type. |
| `Emission` | `datetime` | Emission date. |
| `Due` | `datetime` | Due date. |
| `Exchange` | `number` | Exchange rate applied. |
| `Remarks` | `string` | Free-text remarks. |
| `ExpenseCopyId` | `guid` | Optional. Copies the items from another existing expense into this one (and attempts to activate each copied item) after creation. |

:::note
`ExpensePostModel` has no `WorkflowStateId` field — an Expense's initial workflow state is derived automatically from the **creating user's own** company/department defaults, computed before `CompanyId`/`DepartmentId` from the payload are applied. If those differ from the calling user's own defaults, the resulting workflow state may not match what you submitted.
:::

</TabItem>

<TabItem value="expenseitem">

```json
{
    "DocumentTypeName": "ExpenseItem",
    "Actions": {
        "Document": {
            "DocumentType": "ExpenseItem",
            "DocumentActionType": "Post",
            "ExpenseItem": {
                "ExpenseItemTypeId": "b8c9d0e1-f2a3-4e14-9257-7d8e9f0a1b2c",
                "ExpenseItemGroup": "Travel",
                "ExpenseSheetId": "6f5e4d3c-2b1a-4c3d-9e0f-1a2b3c4d5e6f",
                "ClientId": "94177d4d-670b-47b9-a3ff-f05bb4deaf6e",
                "ProjectId": "3d9c1b3a-1a2b-4c3d-9e0f-1a2b3c4d5e6f",
                "ValueWithVat": 120.0,
                "ValueWithoutVat": 100.0,
                "VatId": "c9d0e1f2-a3b4-4f25-9368-8e9f0a1b2c3d",
                "Billable": true,
                "DocumentBrief": {
                    "DocumentTypeName": "ExpenseItem",
                    "Text": ""
                }
            }
        }
    }
}
```

Fields under `Actions.Document.ExpenseItem`:

| Field | Type | Description |
|---|---|---|
| `ExpenseItemTypeId` | `guid` | Expense item type. **Required.** |
| `ExpenseItemGroup` | `string` | Expense item group/category. **Required.** |
| `ExpenseSheetId` | `guid` | Parent Expense this item belongs to. Required in practice — creation fails without it. |
| `ClientId` | `guid` | Client associated with the item. |
| `ProjectId` | `guid` | Project associated with the item. |
| `DeliverableId` | `guid` | Deliverable associated with the item. |
| `EstimateId` | `guid` | Estimate associated with the item. |
| `ProductId` | `guid` | Product associated with the item. |
| `SupplierId` | `guid` | Supplier for the expense item. |
| `JobTypeId` | `guid` | Deliverable type. |
| `DepartmentId` | `guid` | Owning department. |
| `ValueWithVat` | `number` | Item value including VAT. |
| `ValueWithoutVat` | `number` | Item value excluding VAT. |
| `VatId` | `guid` | VAT rate applied. |
| `Billable` | `boolean` | Whether the item is billable to the client. Defaults to `true` if omitted. |
| `Paid` | `boolean` | Whether the item is already marked as paid. |

:::note
Use `ExpenseSheetId`, not `ExpenseId` — the latter is never read anywhere in the codebase and has no effect regardless of what's submitted. `EmployeeId` is also ignored on creation: the server always attributes the item to the calling user's own employee record. If `Document` (a document-search reference, not shown above) is supplied, it overrides `ClientId`/`ProjectId`/`DeliverableId`/`EstimateId`/`ProductId` based on its own type.
:::

</TabItem>

<TabItem value="ratecard">

```json
{
    "DocumentTypeName": "RateCard",
    "Actions": {
        "Document": {
            "DocumentType": "RateCard",
            "DocumentActionType": "Post",
            "RateCard": {
                "Name": "Standard 2025 Rate Card",
                "Number": "RC-2025-001",
                "CompanyId": "92768571-b454-4cdc-8b68-6f7c6aa8e386",
                "CurrencyId": "12bb8ac2-1729-4be3-a587-0705c4888211",
                "JobTypeId": "a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d",
                "Active": true,
                "BeginDate": "2025-01-01T00:00:00Z",
                "EndDate": "2025-12-31T00:00:00Z"
            }
        }
    }
}
```

Fields under `Actions.Document.RateCard`:

| Field | Type | Description |
|---|---|---|
| `Name` | `string` | Rate card name. **Required.** |
| `Number` | `string` | Rate card number. **Required.** |
| `CompanyId` | `guid` | Owning company. **Required.** |
| `CurrencyId` | `guid` | Currency used. **Required.** |
| `JobTypeId` | `guid` | Deliverable type. **Required.** |
| `Active` | `boolean` | Whether the rate card is active. |
| `BeginDate` | `datetime` | Start date. **Required**, must be earlier than `EndDate`. |
| `EndDate` | `datetime` | End date. **Required.** |

:::note
`RateCard` doesn't support `DocumentBrief` — there's no such field on this document type.
:::

</TabItem>

<TabItem value="pricetable">

```json
{
    "DocumentTypeName": "PriceTable",
    "Actions": {
        "Document": {
            "DocumentType": "PriceTable",
            "DocumentActionType": "Post",
            "PriceTable": {
                "Name": "Standard 2025 Price Table",
                "Number": "PT-2025-001",
                "CompanyId": "92768571-b454-4cdc-8b68-6f7c6aa8e386",
                "CurrencyId": "12bb8ac2-1729-4be3-a587-0705c4888211",
                "JobTypeId": "a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d",
                "Active": true,
                "BeginDate": "2025-01-01T00:00:00Z",
                "EndDate": "2025-12-31T00:00:00Z"
            }
        }
    }
}
```

Fields under `Actions.Document.PriceTable` — identical shape to `RateCard`:

| Field | Type | Description |
|---|---|---|
| `Name` | `string` | Price table name. **Required.** |
| `Number` | `string` | Price table number. **Required.** |
| `CompanyId` | `guid` | Owning company. **Required.** |
| `CurrencyId` | `guid` | Currency used. **Required.** |
| `JobTypeId` | `guid` | Deliverable type. **Required.** |
| `Active` | `boolean` | Whether the price table is active. |
| `BeginDate` | `datetime` | Start date. **Required**, must be earlier than `EndDate`. |
| `EndDate` | `datetime` | End date. **Required.** |

:::note
`PriceTable` doesn't support `DocumentBrief` — there's no such field on this document type.
:::

</TabItem>

<TabItem value="request">

```json
{
    "DocumentTypeName": "Request",
    "Actions": {
        "Document": {
            "DocumentType": "Request",
            "DocumentActionType": "Post",
            "Request": {
                "Name": "New product request",
                "ClientId": "94177d4d-670b-47b9-a3ff-f05bb4deaf6e",
                "CompanyId": "92768571-b454-4cdc-8b68-6f7c6aa8e386",
                "JobTypeId": "a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d",
                "ProductId": "8f77ad60-228d-4d07-a3f5-ff5ee2e64d8e",
                "BeginDateUtc": "2025-01-01T00:00:00Z",
                "EndDateUtc": "2025-03-01T00:00:00Z",
                "IsDraft": true,
                "DocumentBrief": {
                    "DocumentTypeName": "Request",
                    "Text": ""
                }
            }
        }
    }
}
```

Fields under `Actions.Document.Request`:

| Field | Type | Description |
|---|---|---|
| `Name` | `string` | Request name. |
| `ClientId` | `guid` | Client the request belongs to. |
| `CompanyId` | `guid` | Owning company. |
| `ContractId` | `guid` | Associated contract. |
| `JobTypeId` | `guid` | Deliverable type being requested. |
| `ProductId` | `guid` | Associated product. |
| `BrandId` | `guid` | Brand, used only as a fallback when the associated Product has none of its own. |
| `OwnerId` | `guid` | Request owner (user). |
| `BeginDateUtc` | `datetime` | Start date (UTC). |
| `EndDateUtc` | `datetime` | End date (UTC). |
| `IsDraft` | `boolean` | Whether the request is created as a draft. |
| `IsActivated` | `boolean` | Whether the request is active. |
| `WorkflowStateId` | `guid` | Initial workflow stage. |
| `BusinessObjectTypeId` | `guid` | Business object type. |
| `Priority` | `int` | Priority code. |
| `Markets` | `guid[]` | Associated market IDs. |

</TabItem>

<TabItem value="tender">

```json
{
    "DocumentTypeName": "Tender",
    "Actions": {
        "Document": {
            "DocumentType": "Tender",
            "DocumentActionType": "Post",
            "Tender": {
                "Name": "Media buying tender 2025",
                "DepartmentId": "5b2e1f6a-3c4d-4e5f-8a9b-1c2d3e4f5a6b",
                "CommercialClientId": "94177d4d-670b-47b9-a3ff-f05bb4deaf6e",
                "JobTypeId": "a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d",
                "CommercialProductId": "8f77ad60-228d-4d07-a3f5-ff5ee2e64d8e",
                "EndDate": "2025-06-30T00:00:00Z",
                "TotalPrice": 25000.0
            }
        }
    }
}
```

Fields under `Actions.Document.Tender`:

| Field | Type | Description |
|---|---|---|
| `Name` | `string` | Tender name. **Required.** |
| `Description` | `string` | Free-text description. |
| `DepartmentId` | `guid` | Owning department. **Required** — Company and Division are derived from it, not submitted directly. |
| `CommercialClientId` | `guid` | Client the tender is for. **Required.** |
| `JobTypeId` | `guid` | Deliverable type. **Required.** |
| `CommercialProductId` | `guid` | Associated product. |
| `ProjectId` | `guid` | Associated project. |
| `BrandId` | `guid` | Brand. |
| `ContractId` | `guid` | Associated contract. |
| `CurrencyId` | `guid` | Currency. Falls back to the department's company currency if omitted. |
| `BusinessObjectTypeId` | `guid` | Business object type. Falls back to the Deliverable type's own business object type if omitted. |
| `EndDate` | `datetime` | Tender end date. If omitted, the server substitutes a default a few months out rather than rejecting the request. |
| `TotalPrice` | `number` | Total tender value. |

:::note
`Tender` doesn't support `DocumentBrief` — there's no such field on this document type. Unlike the other document types above, creating a Tender through this endpoint also doesn't generate a history/audit entry.
:::

</TabItem>

</Tabs>

#### Document Brief

Where supported (see the [Supported Document Types](#supported-document-types) table above), `DocumentBrief` is nested inside the type-specific object and has the same shape for every type:

| Field | Type | Description |
|---|---|---|
| `DocumentTypeName` | `string` | Document type the brief belongs to — same value as the outer `DocumentTypeName`. |
| `Text` | `string` | Content of the brief. |

#### Response

`201 Created` — the created **Post** (feed entry), not the document itself. Its `DocumentId` field holds the ID of the newly created document.

:::tip
Most `Id` fields across the tabs above reference records that already exist in your tenant (clients, companies, products, etc.). The [Data Extraction](../api/data-extraction-api.md) queries under `docs/api/data-extraction` are available to look up the correct GUID for each of these before building a payload — don't hardcode IDs from another tenant or environment.
:::

#### Testing with Postman

The same requests can be sent from the [Postman collection](#postman-collection):

| Field | Value |
|---|---|
| Method | `POST` |
| URL | `https://apiv2-{{Tenant}}.skillsworkflow.com/api/posts` |
| Body | `raw` / `JSON` — paste any of the payloads above |
