---
id: transitions
title: Transitions
description: "A transition defines a path that moves a document from one stage to another within the same workflow."
sidebar_label: Transitions
sidebar_position: 4
---

## What is a Transition?

A **transition** defines a path that moves a document from one [stage](stages.md) to another within the same workflow. For example, "Submit for Review" might move a document from *Draft* to *In Review*.

Transitions are the core mechanism for controlling **how** and **when** documents progress through their lifecycle.

---

## Properties

| Property | Description |
|----------|-------------|
| **Name** | The display name shown to users (e.g. "Approve", "Reject"). |
| **From Stage** | The stage the document must be in to execute this transition. |
| **To Stage** | The stage the document will move to after execution. |
| **Order** | Display order in the UI when multiple transitions are available. |
| **Icon** | An optional icon displayed next to the transition button. |
| **Is Default** | Whether this is the default transition (pre-selected in the UI). |
| **Request Confirmation** | If enabled, shows a confirmation dialog before executing. |
| **Message Text** | Custom message shown in the confirmation dialog. |
| **Comment Required** | The user must enter a comment to execute the transition. |
| **Hours Required** | The user must log hours before executing the transition. |
| **File Upload Required** | The user must upload a file before executing the transition. |
| **File Upload Folder** | The target folder for required file uploads. |
| **User Must Be In Team** | Only users who are in the document's team can execute the transition. |
| **Must Send Notification** | A notification is sent when the transition executes. |

---

## Transition Roles

Transitions can be **restricted by security role**. Only users who have one of the allowed roles can execute the transition.

| Property | Description |
|----------|-------------|
| **Role** | The security role allowed to execute the transition. |
| **Check Limits** | If enabled, the role is only valid within a value range. |
| **Start Value / End Value** | The value range for limit-based restrictions (e.g. approval amount limits). |

:::tip Example
You can set up a transition "Approve" that is only available to users with the "Manager" role, and a separate "Approve (Senior)" transition for amounts above €50,000 that requires the "Director" role with appropriate limit values.
:::

---

## Transition Motives

A **motive** is a reason the user must select when executing a transition. Motives are typically used for rejections or cancellations to capture structured feedback.

| Property | Description |
|----------|-------------|
| **Description** | The motive text shown to the user (e.g. "Budget exceeded", "Client request"). |
| **Active** | Whether this motive is currently available for selection. |

---

## Transition Custom Actions

**Custom actions** are scripts or plugins that execute when a transition fires. They extend the workflow with custom business logic beyond the built-in action types.

---

## Validation Query

A transition can have a **validation query** that checks whether the transition is allowed to proceed. The query receives the current document's ID and must return `1` if the transition can be executed.

This is useful for enforcing business rules that go beyond simple role and stage checks.

| Parameter | Type | Description |
|-----------|------|-------------|
| `CurrentDocumentId` | Uniqueidentifier | The ID of the document attempting the transition. |

The query should return `1` if valid. If invalid, it can return a message explaining why the transition was blocked.

:::note
Configure the validation query in the **Validate Query Name** field of the transition.
:::

---

## Transition Actions

**Actions** are automated operations that fire when a transition executes. Each action has a **type** that determines what it does. A transition can have multiple actions that run in sequence.

### How to Use

When configuring a transition action:
1. Select the **Action Type** from the list below
2. Some actions require an **Options** value (typically a query name)
3. The action fires automatically when the transition executes

### Data-Source Actions

These actions execute a query and use the results to perform operations. Configure them by setting the Options field to the name of your query.

#### Block / Unblock Documents

Blocks or unblocks a list of documents returned by a query.

**Action Types:** `BlockDocuments`, `UnblockDocuments`, `Block`, `Unblock`, `BlockChildren`, `UnblockChildren`

| Query Parameter | Type | Description |
|----------------|------|-------------|
| `CurrentDocumentId` | Uniqueidentifier | The ID of the document executing the transition. |

---

#### Change Documents Stage

Changes the stage of documents returned by a query to a specified target stage.

**Action Types:** `ChangeDocumentsStage`, `ChangeChildTaskStage`, `ChangeJobsStage`, `ChangeProjectStage`, `ChangeProjectsStage`, `ChangeEstimatesStage`, `ChangePurchaseOrderStage`, `ChangeBillStage`, `ChangeRelatedEstimateStage`, `SetChildrenStage`, `SetParentStage`, `UpdateParentStage`

The query must return these columns:

| Column | Type | Description |
|--------|------|-------------|
| `DocumentTypeName` | String | The document type (e.g. "Deliverable", "Project"). |
| `DocumentId` | Uniqueidentifier | The ID of the document to update. |
| `WorkflowStageId` | Uniqueidentifier | The target stage ID. |

<details>
<summary>SQL Example — Cancel child deliverables when parent is cancelled</summary>

```sql
SELECT 'Deliverable' AS DocumentTypeName,
       sd.Oid AS DocumentId,
       ws.Oid AS WorkflowStageId
FROM   Deliverable d
       JOIN WorkflowState dws ON dws.Oid = d.WorkflowState
       JOIN Deliverable sd ON sd.Parent = d.Oid
       JOIN WorkflowState sdws ON sdws.Oid = sd.WorkflowState
       JOIN Document doc ON doc.TypeName = 'Skill.Module.BusinessObjects.Deliverable'
       JOIN WorkflowState ws ON ws.Document = doc.Oid AND ws.Name = 'Cancelled'
WHERE  d.Oid = @CurrentDocumentId
       AND sdws.Name NOT IN ('Delivered', 'Completed', 'Cancelled')
```

</details>

---

#### Assign Team

Assigns users to teams on the current document based on query results.

**Action Types:** `AssignTeam`, `Assign`, `RequiredAssign`, `AssignDepartmentTeam`, `AssignJobTypeTeam`, `AssignCreatedByTeam`, `AssignCommercialClientProjectManagerTeam`, `AssignTeamFromClientMarkets`, `AssignTeamFromClientBrands`, `AssignAdminResponsible`

| Query Parameter | Type | Required | Description |
|----------------|------|----------|-------------|
| `CurrentDocumentId` | Uniqueidentifier | Yes | The document executing the transition. |
| `CurrentUserId` | Uniqueidentifier | No | The user triggering the transition. |

The query must return:

| Column | Type | Description |
|--------|------|-------------|
| `UserId` | Uniqueidentifier | The user to assign. |
| `TeamId` | Uniqueidentifier | The assignment type (team) to place the user in. |

---

### All Action Types Reference

Below is the complete list of action types available for transitions, organized by category.

:::info Options Conventions
- Multiple values are separated by **semicolons** (`;`)
- Stage names, team names, and query names are **case-sensitive**
- A dash (—) in the Options column means no configuration is needed
:::

#### Stage & Status Changes

| Action Type | Description | Options |
|-------------|-------------|---------|
| `CompleteState` | Marks the current state as complete. | — |
| `ChangeDependentTaskStatusTo` | Changes the status of dependent tasks. | `StageName` — target stage name. Defaults to `Ready` if empty. |
| `ChangeChildTaskStage` | Changes the stage of child tasks. | — (uses the transition's target stage) |
| `ChangeJobsStage` | Changes the stage of related jobs. | `ToStageName;IgnoreStage1;IgnoreStage2;...` — first value is the target stage; remaining values are stages to skip. **Required.** |
| `ChangeProjectStage` | Changes the stage of the parent project. | `StageName` — target project stage. |
| `ChangeProjectsStage` | Changes the stage of multiple projects. | `ToStageName;IgnoreStage1;IgnoreStage2;...` — same pattern as ChangeJobsStage. |
| `ChangeEstimatesStage` | Changes the stage of related estimates. | `ToStageName;IgnoreStage1;IgnoreStage2;...` — same pattern as ChangeJobsStage. |
| `ChangePurchaseOrderStage` | Changes the stage of related purchase orders. | `ToStageName;IgnoreStage1;IgnoreStage2;...` — same pattern as ChangeJobsStage. |
| `ChangeBillStage` | Changes the stage of related bills. | `ToStageName;IgnoreStage1;IgnoreStage2;...` — same pattern as ChangeJobsStage. **Required.** |
| `UpdateParentStage` | Updates the parent document's stage. | `ToStageName;IgnoreStage1;IgnoreStage2;...` — same pattern as ChangeJobsStage. **Required.** |
| `ChildrenStageIn` | **Validation only** — blocks the transition if any child is NOT in one of the listed stages. | `StageName1;StageName2;...` — allowed stage names. **Required.** |
| `SetChildrenStage` | Sets all children to a specific stage. | `ToStageName;IgnoreStage1;IgnoreStage2;...` — same pattern as ChangeJobsStage. **Required.** |
| `SetParentStage` | Sets the parent document to a specific stage. | `ToStageName;IgnoreStage1;IgnoreStage2;...` — same pattern as ChangeJobsStage. |
| `ChangeDocumentsStage` | Changes the stage of documents returned by a query. | `QueryName1;QueryName2;...` — semicolon-separated query names. Each query must return `DocumentTypeName`, `DocumentId`, `ToWorkflowStageName`. |
| `ChangeRelatedEstimateStage` | Changes the stage of the related estimate. | `ExternalId` — the ExternalId on the stage transition to match. |
| `ChangeRelatedQuoteStatus` | Changes the status of related quotes. | `true` or `false` — `true` approves, `false` disapproves quote items. |
| `ChangeEstimateExternalStatusTo` | Updates the external status of an estimate. | `StatusValue` — the external status value to set. |
| `ChangeDeliverableExternalStatusTo` | Updates the external status of a deliverable. | `StatusValue` — the external status value to set. |
| `ChangeDeliverableOrEstimateExternalStatusTo` | Updates the external status of a deliverable or estimate. | `StatusValue` — the external status value to set. |

#### Team & Assignment

| Action Type | Description | Options |
|-------------|-------------|---------|
| `Assign` | Assigns users to teams (handled in the UI). | — |
| `RequiredAssign` | Validates that team assignments exist — blocks the transition if not. | — |
| `AssignAdminResponsible` | Assigns the admin responsible user. | `TeamName1;TeamName2;...` — teams to assign admin responsibles into. |
| `UpdateProjectAssignments` | Synchronizes project team assignments. | — |
| `CopyTeamFromRequest` | Copies the team from the linked request. | `TeamName1;TeamName2;...` — team names to copy. **Required.** |
| `CopyTeamFromParent` | Copies the team from the parent document. | `TeamName1;TeamName2;...` — team names to copy. **Required.** |
| `AssignTeamFromClientMarkets` | Assigns teams based on client market configuration. | `ColumnName;TeamName1;TeamName2;...` — first value is the column name on the client markets table; remaining are team names. **Required.** |
| `CopyFromTeamToTeam` | Copies members from one team to another. | `FromTeam;ToTeam;RemoveFrom;RemoveTo` — first two **required**; `RemoveFrom` / `RemoveTo` are optional booleans (`true`/`false`). |
| `MoveFromTeamToTeam` | Moves members from one team to another. | `FromTeam;ToTeam` — both **required**. |
| `RemoveTeam` | Removes all members from a team. | `TeamName` — the team to clear. **Required.** |
| `CopyTeamToFinancialCreatedDocuments` | Copies the team to newly created financial documents. | `FromTeam;ToTeam` — used as companion to Invoice/InvoiceJob. |
| `CopyTeamToCreatedPurchaseOrders` | Copies the team to newly created purchase orders. | `FromTeam;ToTeam` — used as companion to Buy. |
| `AssignTeamFromClientBrands` | Assigns teams based on client brand configuration. | `ColumnName;TeamName1;TeamName2;...` — same pattern as AssignTeamFromClientMarkets. **Required.** |
| `AssignTeam` | Assigns users to teams via query (data-source action). | `QueryName1;QueryName2;...` — queries must return `UserId`, `TeamId`. |
| `CopyFromTeamToTeamByQuery` | Copies team members using a query to determine source/target. | `QueryName;FromTeam;ToTeam;RemoveFrom;RemoveTo` — QueryName and FromTeam **required**; ToTeam, RemoveFrom (bool), RemoveTo (bool) optional. |
| `AssignDepartmentTeam` | Auto-assigns the department's default team. | `QueryName;TeamName1;TeamName2;...` — query returning `UserId`, `TeamId`, plus optional team names. |
| `AssignJobTypeTeam` | Auto-assigns the job type's default team. | `QueryName;TeamName1;TeamName2;...` — same as AssignDepartmentTeam. |
| `AssignCreatedByTeam` | Assigns the document creator to a team. | `QueryName;TeamName1;TeamName2;...` — same as AssignDepartmentTeam. |
| `AssignCommercialClientProjectManagerTeam` | Assigns the commercial client's project manager. | `QueryName;TeamName1;TeamName2;...` — same as AssignDepartmentTeam. |

#### Block & Unblock

| Action Type | Description | Options |
|-------------|-------------|---------|
| `Block` | Blocks the current document. | `type1;type2;...` — block types: `document`, `team`, `workflow`, `comment`. Defaults to `document` if empty. |
| `Unblock` | Unblocks the current document. | `type1;type2;...` — same as Block. |
| `BlockChildren` | Blocks all child documents. | `type1;type2;...` — same as Block. |
| `UnblockChildren` | Unblocks all child documents. | `type1;type2;...` — same as Block. |
| `BlockDocuments` | Blocks documents returned by a query. | `QueryName;type1;type2;...` — first value is the query name; remaining are block types. Defaults to `document` if no types specified. |
| `UnblockDocuments` | Unblocks documents returned by a query. | `QueryName;type1;type2;...` — same as BlockDocuments. |

#### Estimates & Financial

| Action Type | Description | Options |
|-------------|-------------|---------|
| `CreateEstimate` | Creates an estimate from the current document. | — |
| `Buy` | Triggers a buy/purchase operation. | `CancelWorkflowStageName` — stage name for cancelling existing POs before re-purchasing. Optional. |
| `Invoice` | Triggers an invoice generation. | — |
| `InvoiceJob` | Generates an invoice for a specific job. | `CanInvoiceQueryName;InvoiceSeveral` — optional query name to validate; `InvoiceSeveral` is a boolean to allow multiple invoices. |
| `Credit` | Creates a credit note. | — |
| `ApproveItems` | Approves estimate line items. | — |
| `DisapproveItems` | Rejects (disapproves) estimate line items. | — |
| `SynchronizeEstimateStageAndHistory` | Syncs the estimate stage with its history. | — |
| `CreateEstimateVersion` | Creates a new version of the estimate. | — |
| `CloseProjectEstimates` | Closes all estimates under the project. | — |
| `EstimateMerge` | Merges multiple estimates. | `DeleteOnCancel;IgnoreStage1;...` — first element can be `DeleteOnCancel` (case-insensitive) or a stage name; remaining are stages to ignore. Optional. |
| `EstimateUnmerge` | Reverses an estimate merge. | — |
| `CreateEstimatesFromRequest` | Creates estimates from a request document. | `QueryName;UpdateValuesQueryName` — first = query name (defaults to `CreateEstimatesFromRequest`); second = optional query for updating field values. |
| `ExceedsBudget` | Checks if the document exceeds the budget. | `QueryName;RoleName` — query returning a boolean + error message; optional role name for permission bypass. |
| `UpdateRealPlannedCost` | Recalculates real vs. planned costs. | — |

#### Planned Hours & Workloads

| Action Type | Description | Options |
|-------------|-------------|---------|
| `CreatePlannedHoursFromEstimateItemDetails` | Creates planned hours from estimate items. | — |
| `DeletePlannedHoursFromEstimateItemDetails` | Removes planned hours from estimate items. | — |
| `CreatePlannedCostsFromEstimateItemDetails` | Creates planned costs from estimate items. | — |
| `DeletePlannedCostsFromEstimateItemDetails` | Removes planned costs from estimate items. | — |
| `CreatePlannedDeliverables` | Creates planned deliverables from the estimate. | `JobSubjectAs` — controls the job subject format. Defaults to `EstimateItemDescription` if empty. |
| `AddHoursToTimesheet` | Adds hours to the user's timesheet. | `FromWorkflowStateName` — the workflow stage name to calculate hours from. **Required.** |
| `CreatePlannedHoursDeliverableFromEstimateItemDetails` | Creates deliverable-level planned hours. | — |
| `DeletePlannedHoursDeliverableFromEstimateItemDetails` | Removes deliverable-level planned hours. | — |
| `DeleteDailyWorkloads` | Deletes daily workload entries. | — |
| `CreateJobPlannedHoursFromEstimateItemDetails` | Creates job-level planned hours from estimate items. | — |
| `DeleteJobPlannedHoursFromEstimateItemDetails` | Removes job-level planned hours from estimate items. | — |

#### User Interaction & Popups

| Action Type | Description | Options |
|-------------|-------------|---------|
| `RequestMotive` | Shows a motive selection popup. | `MotiveId1;MotiveId2;...` — (optional) restricts selectable motives to the listed IDs. If empty, all motives are available. |
| `RequestReference` | Prompts the user to enter a reference. | — |
| `RequestMotiveWithRequestedDate` | Shows a motive popup that also asks for a requested date. | — |
| `RequestComment` | Prompts the user to enter a comment. | — |
| `RequestFlaggedAssignment` | Prompts for a flagged assignment selection. | `AssignmentType1;AssignmentType2;...` — (optional) restricts selectable assignment types. |
| `RemoveFlaggedAssignments` | Removes existing flagged assignments. | — |
| `RequestClientUserFields` | Shows a popup with client-specific user fields. | `FieldName1;FieldName2;...` — list user field names to make them **required** in the popup. If empty, all user fields are optional. |
| `RequestUserFields` | Shows a popup with user-defined fields. | `FieldName1;FieldName2;...` — list user field names to make them **required** in the popup. If empty, all user fields are optional. |

#### Document & Field Management

| Action Type | Description | Options |
|-------------|-------------|---------|
| `CreateVersion` | Creates a new version of the document. | `IncrementParent` — if set to `IncrementParent` on estimates, versions the parent estimate instead. Optional. |
| `FileUpload` | Triggers a file upload dialog. | — |
| `Returned` | Marks the document as returned. | — |
| `Request` | Creates a request from the current document. | — |
| `ActivateDocument` | Activates a deactivated document. | — |
| `Canceled` | Marks the document as cancelled. | — |
| `ResetUserFields` | Resets all user-defined fields to their defaults. | — |
| `ChangeClassification` | Changes the document's classification. | `ClassificationName` — the target classification name. **Required.** |
| `SyncApprovalStatus` | Synchronizes the approval status. | — |
| `ChangeEndDateToCurrentDay` | Sets the document's end date to today. | — |
| `IncreaseVersionDigit` | Increments the version number. | `Digit;UserFieldColumnName` — `Digit` is the 1-based position; `UserFieldColumnName` is the user field to update (e.g. `uf_version`). **Required.** |
| `DecreaseVersionDigit` | Decrements the version number. | `Digit;UserFieldColumnName` — same as IncreaseVersionDigit. **Required.** |
| `UnlinkRequest` | Removes the link to the originating request. | — |
| `CustomTableWrite` | Writes data to a custom table. | `CustomTableName;QueryName` — both **required**. First = custom table name; second = query returning rows to write. |
| `UpdateUserFields` | Updates user-defined fields via query. | `QueryName1;QueryName2;...` — queries must return `ColumnName`, `Value`, `DataTypeId`, and optionally `DocumentId` + `DocumentTypeName`. |
| `UpdateFields` | Updates document fields via query. | `QueryName` — query must return `DocumentId`, `DocumentTypeName`, `FieldName`, `FieldValue`. |
| `UpdateFieldsValues` | Updates specific field values. | `QueryName1;QueryName2;...` — queries must return column names, values, `ActionType`, and `DocumentTypeName`. |

#### Document Creation & Automation

| Action Type | Description | Options |
|-------------|-------------|---------|
| `CreateJobsFromEstimateDeliverableQuantity` | Creates jobs based on estimate deliverable quantities. | `FromTeam;ToTeam;UpdateValuesQueryName` — optional. FromTeam/ToTeam for copying assignments; query name for updating field values on created jobs. |
| `CreateTasksFromJobType` | Creates tasks based on the job type template. | `TemplateName;FromTeam;ToTeam;CheckQuery;CreateQuery` — first value is the template name (**required**); remaining are optional. |
| `CreateDeliverablesFromRequest` | Creates deliverables from a request. | `QueryName` — defaults to `CreateDeliverablesFromRequest` if empty. |
| `CreateProjectFrom` | Creates a project from the current document. | `QueryName` — defaults to `CreateProjectFromRequestWorkflowAction` if empty. |
| `CopyDescriptionFrom` | Copies the description from a related document. | `QueryName` — query must return `DocumentId`, `DocumentTypeName`. **Required.** |
| `Automation` | Runs an automation rule. | `AutomationId;QueryName` — first = GUID of the automation (**required**); second = optional query name providing payload JSON. |
| `SetCompanies` | Sets the companies on the document. | `QueryName` — query returning `CompanyId` rows. |

#### External Integration

| Action Type | Description | Options |
|-------------|-------------|---------|
| `SendToExternal` | Sends data to an external integration. | — |
| `ToIntegrate` | Marks the document for integration processing. | — |
| `SendToExternalKeepOnError` | Sends to external but keeps the document on error (does not roll back). | — |

#### SAP Integration

| Action Type | Description | Options |
|-------------|-------------|---------|
| `SendToSap` | Sends the document to SAP. | — |
| `ApproveOnSap` | Approves the document on SAP. | — |
| `RejectOnSap` | Rejects the document on SAP. | — |
| `SendApproveOnSap` | Sends and approves on SAP in one step. | — |
| `ApproveProductionOnSap` | Approves production on SAP. | — |
| `CancelOnSap` | Cancels the document on SAP. | — |
| `ActivateOnSap` | Activates the document on SAP. | — |
