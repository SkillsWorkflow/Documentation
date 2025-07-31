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
