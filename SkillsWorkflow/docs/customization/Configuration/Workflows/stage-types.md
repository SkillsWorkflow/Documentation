---
id: stage-types
title: Stage Types
sidebar_label: Stage Types
sidebar_position: 3
---

## What is a Stage Type?

A **stage type** classifies [stages](stages.md) into categories. Every stage must have exactly one stage type.

Stage types are used for:
- **Reporting** — group and filter documents by stage category rather than individual stage names
- **Automation** — trigger rules based on whether a document is in an "Active", "Closed", or other category
- **Visual grouping** — each stage type has its own color, which is used as a fallback when a stage has no custom color

---

## Standard Stage Types

Most tenants use stage types similar to these:

| Stage Type | Typical Use |
|------------|-------------|
| **Initial** | First stage in a workflow (e.g. Draft, New) |
| **Active** | Document is being worked on (e.g. In Progress, In Review) |
| **Closed** | Document has reached a terminal state (e.g. Completed, Cancelled) |
| **On Hold** | Document is paused or waiting for input |

:::note
Stage types are tenant-level configuration — your system may have additional or different types depending on your setup.
:::

---

## Properties

| Property | Description |
|----------|-------------|
| **Name** | The display name (e.g. "Active"). |
| **Color** | A color used as the default stage color for all stages of this type. |
| **Status** | An integer status code used internally. |
