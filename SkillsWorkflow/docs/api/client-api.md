---
id: client-api
title: Client API
sidebar_label: Client API
sidebar_position: 0
---

## Overview

### Purpose
The Client API is designed for **creating and updating documents** in Skills Workflow. It’s **not** intended for bulk data extraction or reporting—use our Data API for that.

### Use Cases
Integrate Skills Workflow into tools such as:
- Asana, Trello, Monday, ZiFlow  
- AirTable, Notion  
- ERP systems, attendance tracking, and other external document workflows  

### Key Limitations
- **Not for data extraction**: don’t rely on this API to pull large datasets.  
- **30-second execution cap**: long-running calls will be terminated. Use filters or pagination (`skip`/`take`) on listing endpoints.

---

## Getting Started

### Authentication

Before calling any endpoint, you must obtain three credentials:

- **AppKey**  
- **AppSecret**  
- **TenantID**  

> These are provided by the support team upon request.

Include them in each request via HTTP headers:

```http
X-AppTenant:  <TenantID>
X-AppId:      <AppKey>
X-AppSecret:  <AppSecret>
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
https://apiv2-<Tenant>.skillsworkflow.com/api/v3/analytics
```

### Postman Collection

To facilitate testing of the available queries, we provide a Postman collection file with all endpoints configured. You can download it from the link below:

[Download Postman Collection - Client API](../../static/templates/client-api-postman-collention.json)

After downloading, make sure to configure the variables `{{Tenant}}`, `{{TenantId}}`, `{{AppId}}`, `{{AppSecret}}`, and `{{UserId}}` according to the credentials you have been given.

---

## Rate Limits & Pagination

- **30-second cap** on every call—avoid timeouts by filtering or paging large result sets.  
- Listing endpoints support two query parameters:  
  - `skip` (int): number of records to skip  
  - `take` (int): maximum number of records to return  

---

## Endpoints

### 1. User

#### 1.1 Duplicate User
- **Method**: `POST`  
- **URL**: `/api/v3/users`  
- **Purpose**: Create a new user by duplicating an existing one.  
- **Body**:
  ```json
  {
    "OperationType": 1,
    "DuplicateModel": {
      "UserToDuplicateId": "<GUID>",
      "Name":             "<string>",
      "UserName":         "<string>"
    }
  }
  ```

#### 1.2 Create User
- **Method**: `POST`  
- **URL**: `/api/v3/users`  
- **Purpose**: Create one or many new users.  
- **Body** (single or array depending on `Type`):
  ```json
  {
    "Type": 2,
    "CreateManyModel": [
      {
        "UserName":         "<string>",
        "Name":             "<string>",
        "ExternalId":       "<string>",
        "CompanyId":        "<GUID>",
        "DivisionId":       "<GUID>",
        "DepartmentId":     "<GUID>",
        "TypologyId":       "<GUID>",
        "Mail":             "<string>",
        "IsActive":         true,
        "SsoUserName":      "<string>",
        "RequiredHours":    8,
        "ResponsibleId":    "<GUID>",
        "UserTypeId":       "<GUID>",
        "TimesheetRequired": false,
        "AdUserName":       "<string>",
        "TaxpayerNumber":   "<string>"
      }
    ]
  }
  ```

#### 1.3 Update User
- **Method**: `PATCH`  
- **URL**: `/api/users/{userId}`  
- **Purpose**: Partially update user settings.  
- **Body**:
  ```json
  {
    "TimesheetRequired": { "value": true }
  }
  ```

#### 1.4 Add/Update User Description
- **Method**: `POST`  
- **URL**: `/api/documentBriefs`  
- **Purpose**: Attach or update rich‐text “brief” to any document.  
- **Body**:
  ```json
  {
    "DocumentId":       "<GUID>",
    "DocumentTypeName": "user",
    "Text":             "<html>",
    "PlainText":        "<string>",
    "Actions":          {}
  }
  ```

#### 1.5 Link User to Commercial Client
- **Method**: `POST`  
- **URL**: `/api/v3/commercial-client-users`  
- **Purpose**: Associate a user with a commercial client.  
- **Body**:
  ```json
  {
    "OperationType": "Create",
    "CreateModel": {
      "CommercialClientId": "<GUID>",
      "UserId":             "<GUID>",
      "Active":             true
    },
    "CreateManyModel": null
  }
  ```

#### 1.6 Users To Unblock
- **Method**: `GET`  
- **URL**: `/api/unblockuserrequests`  
- **Query**: `countryName`, `countryId`, `companyName`, `companyId`

#### 1.7 Users To Block
- **Method**: `GET`  
- **URL**: `/api/blockedloginrequests/userstoblock`  
- **Query**: `countryName`, `companyName`, `companyId`, `countryId`

---

### 2. Project

#### 2.1 Update Additional Information
- **Method**: `PATCH`  
- **URL**: `/api/projects/{projectId}`  
- **Body**:
  ```json
  {
    "DocumentUserFieldValues": {
      "value": {
        "FieldKey1": true,
        "FieldKey2": "Value"
      }
    }
  }
  ```

#### 2.2 Generate Project from Contract
- **Method**: `GET`  
- **URL**: `/api/contracts/{contractId}/projects/new`  

#### 2.3 Post Project
- **Method**: `POST`  
- **URL**: `/api/posts`  
- **Body** (simplified):
  ```json
  {
    "DocumentId":       "<GUID>",
    "DocumentTypeName": "Project",
    "Text":             "Initial comment",
    "Actions": {
      "Transition": {
        "StatusId":     "<GUID>",
        "TransitionId": "<GUID>"
      },
      "Document": {
        "Project": { /* all required project fields */ },
        "DocumentBrief": {
          "DocumentTypeName": "Project",
          "Text":             ""
        }
      }
    }
  }
  ```

---

### 3. Workflow

#### 3.1 Get Workflows by Document Type
- **Method**: `GET`  
- **URL**: `/api/v3/document-types/{docTypeId}/workflows?expandTransitions=true`

---

### 4. Assignments

#### 4.1 Batch Assignments
- **Method**: `POST`  
- **URL**: `/api/assignments/batch`  
- **Body**:
  ```json
  {
    "AssignmentPostModels": [
      {
        "User":           "<GUID>",
        "DocumentType":   "<string>",
        "DocumentOid":    "<GUID>",
        "AssignmentType": "<string>"
      }
    ],
    "AssignmentDeleteModels": [
      {
        "User":             "<GUID>",
        "DocumentId":       "<GUID>",
        "AssignmentTypeId": "<GUID>"
      }
    ]
  }
  ```

---

### 5. Commercial Client

#### 5.1 Create Commercial Client
- **Method**: `POST`  
- **URL**: `/api/v3/commercial-clients`  
- **Body**:
  ```json
  {
    "Type": 2,
    "CreateManyModel": [
      {
        "Name":                       "<string>",
        "ExternalId":                 "",
        "Code":                       "",
        /* ... all other string/int/GUID fields ... */
      }
    ]
  }
  ```

---

### 6. Expense

#### 6.1 Create Expense Item
- **Method**: `POST`  
- **URL**: `/api/expenses/{ExpenseSheetId}/items`  
- **Body**:
  ```json
  {
    "ExpenseItemTypeId": "<GUID>",
    "ExpenseItemGroup":  0,
    "ExpenseSheetId":    "<GUID>",
    "EmployeeId":        "<GUID>",
    /* ... other fields ... */
    "Motive":            "<string>"
  }
  ```

---

### 7. Expense Sheet

#### 7.1 Create Expense Sheet
- **Method**: `POST`  
- **URL**: `/api/expenses`  
- **Body**:
  ```json
  {
    "CompanyId":           "<GUID>",
    "DepartmentId":        "<GUID>",
    "CurrencyId":          "<GUID>",
    "PaymentConditionId":  "<GUID>",
    "SupplierId":          "<GUID>",
    "EmployeeId":          "<GUID>",
    "TypeId":              "<GUID>",
    "Emission":            "2025-04-29T00:00:00Z",
    "Due":                 "2025-05-29T00:00:00Z",
    "EntryDate":           "2025-04-29T00:00:00Z",
    "Exchange":            1,
    "ExternalDocumentType": "",
    "DocumentNumber":       ""
  }
  ```

---

### 8. Typology

#### 8.1 Update Typology History
- **Method**: `PATCH`  
- **URL**: `/api/v3/user-typology-histories/{historyId}`  
- **Body**:
  ```json
  {
    "UserId":          { "Value": "<GUID>" },
    "DepartmentId":    { "Value": "<GUID>" },
    "TypologyGroupId": { "Value": "<GUID>" },
    "TypologyId":      { "Value": "<GUID>" },
    "UserTypeId":      { "Value": "<GUID>" },
    "StartDate":       { "Value": "2025-01-01T00:00:00" },
    "EndDate":         { "Value": "2025-12-31T00:00:00" }
  }
  ```

#### 8.2 Create Typology History
- **Method**: `POST`  
- **URL**: `/api/v3/user-typology-histories`  
- **Body**:
  ```json
  {
    "OperationType": 0,
    "CreateModel": {
      "UserId":           "<GUID>",
      "DepartmentId":     "<GUID>",
      "TypologyGroupId":  "<GUID>",
      "TypologyId":       "<GUID>",
      "UserTypeId":       "<GUID>",
      "StartDate":        "2025-01-01T00:00:00",
      "EndDate":          "2025-12-31T00:00:00"
    }
  }
  ```
