---
title: Example API Endpoint
description: Reference for the Example API endpoint, including usage, parameters, and response schema.
tags: [api, reference, ai-friendly]
---

# Example API Endpoint

## Overview

This endpoint allows you to retrieve information about an example resource. Designed for both human and AI agent consumption.

## Endpoint

```
GET /api/example/{id}
```

## Parameters

| Name   | Type   | Required | Description                |
|--------|--------|----------|----------------------------|
| id     | string | Yes      | Unique identifier of item. |

## Request Example

```json
{
  "id": "12345"
}
```

## Response Example

```json
{
  "id": "12345",
  "name": "Sample Item",
  "status": "active"
}
```

## Response Schema

```json
{
  "type": "object",
  "properties": {
    "id": { "type": "string" },
    "name": { "type": "string" },
    "status": { "type": "string", "enum": ["active", "inactive"] }
  },
  "required": ["id", "name", "status"]
}
```

## Notes

- All responses are in JSON.
- For machine parsing, see the [OpenAPI spec](./openapi.yaml).

---
