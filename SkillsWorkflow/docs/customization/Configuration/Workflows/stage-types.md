---
id: stage-types
title: Stage Types
sidebar_label: Stage Types
sidebar_position: 3
---

## What is a Stage Type?

A **stage type** is the classification attached to a [stage](stages.md). Every stage must have exactly one stage type.

Stage types are used for:
- **Reporting** — group and filter documents by stage category rather than individual stage names
- **Automation** — trigger rules based on the stage type configured on the current stage
- **Visual grouping** — each stage type has its own color, which is used as a fallback when a stage has no custom color

---

## How to Use Stage Types

Think of a **stage name** as the specific step users see, such as "Draft", "Waiting for Approval", or "Ready to Invoice".

Think of a **stage type** as the broader meaning behind that step.

For example:

- several different stages may all belong to the same business meaning
- reports can group those stages together
- automations can react to the type instead of a single stage name

This is useful when different teams or document types use slightly different stage names, but you still want the same business behavior.

---

## Default Reference List

Skills Workflow includes a default list of stage types. Not every environment will use all of them, but this list is the correct reference when you need the default system values.

If you need to confirm which stage types are actually being used in your environment, check [`DE-Stages`](../../../api/data-extraction/de-stages.md).

In that query:

| Column | Meaning |
|--------|---------|
| `StageId` | Stage identifier |
| `Stage` | Stage name |
| `TypeId` | The stage type identifier |
| `Type` | The stage type name currently used on that stage |

---

## Default Stage Types

<details>
<summary>View the default stage types</summary>

| Stage Type | Status | Default Color |
|------------|--------|---------------|
| `None` | `0` | `#D6D6D6` |
| `Draft` | `1` | `#9E9E9E` |
| `New` | `2` | `#94DF89` |
| `Assigned` | `3` | `#61B73C` |
| `InProgress` | `4` | `#8ABEF3` |
| `ToApprove` | `5` | `#446FD2` |
| `Done` | `6` | `#B5A0E8` |
| `Canceled` | `7` | `#B5A0E8` |
| `InQuotation` | `8` | `#B9519E` |
| `InternallyApproved` | `9` | `#F6DC05` |
| `Approved` | `10` | `#F88A07` |
| `Production` | `11` | `#FF5E3A` |
| `QualityControl` | `12` | `#A2845E` |
| `Returned` | `13` | `#` |
| `Expired` | `14` | `#` |
| `ToPresent` | `15` | `#` |
| `NotApproved` | `16` | `#` |
| `Hidden` | `17` | `#` |
| `Rejected` | `18` | `#` |
| `Sent` | `19` | `#` |
| `NotBilled` | `20` | `#` |
| `WaitYourReference` | `21` | `#` |
| `Billing` | `22` | `#` |
| `PartiallyBilled` | `23` | `#` |
| `Billed` | `24` | `#` |
| `Activated` | `25` | `#` |
| `Deactivated` | `26` | `#` |
| `ExternalRefused` | `27` | `#` |
| `ToIntegrate` | `28` | `#` |
| `Integrated` | `29` | `#` |
| `PartiallyApproved` | `30` | `#` |
| `Current` | `31` | `#` |
| `ToEmit` | `32` | `#` |
| `Invoiced` | `33` | `#` |
| `NotExpectingInvoice` | `34` | `#` |
| `PartiallyInvoiced` | `35` | `#` |
| `PartiallyPaid` | `36` | `#` |
| `Paid` | `37` | `#` |

</details>

:::note
Some default entries use `#` as the default color. In practice, treat these as unspecified defaults and confirm the final color in your own environment if color is important for configuration or reporting.
:::

---

## Properties

| Property | Description |
|----------|-------------|
| **TypeId** | The unique identifier of the stage type. This is mainly useful for APIs, exports, or integrations. |
| **Name** | The stage type name used in the system. |
| **Status** | The numeric reference for the stage type. This is useful when working with APIs, imports, exports, or technical mappings. |
| **Color** | The default color used for stages with this type, unless the stage has its own color. |

## Good Practice

- Keep stage names user-friendly, but keep stage types consistent.
- Reuse the same stage type for stages that have the same business meaning.
- Before creating reports or integrations, confirm the values used in your environment with [`DE-Stages`](../../../api/data-extraction/de-stages.md).
