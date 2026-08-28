---
id: service
title: Service
description: "The SW. Service namespace provides grouped access to business-level services in the Skills Workflow SDK."
sidebar_label: Service
---

The `SW.Service` namespace provides grouped access to **business-level services** in the Skills Workflow SDK.

Each service is exposed as a sub-namespace under `SW.Service`, for example:

```ts
SW.Service.Notification
```

## Description

`SW.Service` acts as a central point for service-oriented SDK functionality.  
It simplifies access to specific platform capabilities by grouping related service methods together.

This namespace provides:
- A unified entry point for all service APIs.
- Simplified interaction with platform features.
- A consistent structure for integrating new services.

## Structure

```ts
SW.Service = {
  Notification: SW.Service.Notification
  // ...
};
```

Each sub-namespace contains its own set of methods and data types.

## Example Usage

```ts
// Accessing the Notification Service
await SW.Service.Notification.send(
  "New comment added",
  "Job",
  "JOB-12345",
  ["USR-0001", "USR-0002"]
);
```

## Purpose

The `SW.Service` namespace is designed to:

- Group available SDK services in a single access point.  
- Simplify common service operations.  
- Provide a clear and consistent API surface for developers.  

> See each subpage under `SW.Service.{ServiceName}` for specific details and examples.
