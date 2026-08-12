---
id: glossary
title: 'Glossary'
description: "What each term in Skills Workflow means, how the concepts relate, and which words the interface and the API use for the same thing."
sidebar_label: Glossary
---

The words below are used throughout this documentation, the interface and the API. A few
carry more than one meaning depending on where you meet them, and a few things have one
name in the interface and another in the API. Both cases are called out explicitly.

:::note Reading this alongside the API
Where the interface and the API disagree on a name, the entry says so under
**In the API**. The interface name is the one used everywhere else in this documentation.
:::

---

## The shape of the work

These are the records the platform is built around, from the outside in.

### Client

The organisation the work is for. A client can be held in two forms, which are related but
not interchangeable:

- **Commercial Client** — the client as the commercial teams deal with them: the brand or
  organisation work is delivered for.
- **Billing Client** — the legal entity that is actually invoiced. One commercial client
  can bill through different entities in different companies.

The two are linked per company, so the same brand can be commercially owned in one place
and invoiced from another.

:::caution Client vs Customer
In these documents, **Client** means the agency's client. **Customer** means an agency that
uses Skills Workflow — you will see it in the [Trust](./trust/) section, which is written
for them. If you are reading a how-to guide, the word you want is Client.
:::

### Contract

An agreement with a client that work is delivered under. Contracts can carry **Fees** —
recurring or agreed amounts, such as a monthly retainer — and projects can be associated
with a contract so that hours delivered are drawn down against it.

### Project

A body of work for a client. A project groups the jobs that deliver it, carries its own
stage, owner and dates, and can be linked to a contract.

### Job

The unit of work people are actually assigned to and record time against. Jobs sit under a
project.

**In the API:** a Job is the `Deliverable` entity — you will see
`Skill.Module.BusinessObjects.Deliverable` in webhook payloads and integration
configuration. The REST endpoints, however, are `/api/jobs`. Same record, two names,
depending on which layer you are looking at.

:::caution "Deliverable" means two different things
Be careful with this word — it is the one term most likely to send you to the wrong page.

1. **On an Estimate**, a *Deliverable* is a line item — a service being sold to the
   client. See [Deliverable (Estimate line)](#deliverable-estimate-line) below.
2. **In the API and integration documentation**, `Deliverable` is the entity name for a
   **Job**.

They are unrelated. If you are pricing something, you want sense 1. If you are reading
about webhooks, stage changes or integrations, you want sense 2 — and the rest of this
documentation calls that a Job.
:::

### Request

A piece of work asked for, typically raised by a client. Requests carry their own items and
can become jobs.

### Brief

The written description attached to a document, explaining what is wanted. A brief is
attached *to* a record (a job, a project, a request) rather than being a record in its own
right.

**In the API:** the `DocumentBrief` entity.

---

## Money

### Estimate

A priced breakdown of work, presented to the client. An estimate can be created directly
under a project or job, or linked to a **Fee** on a contract.

An estimate is built on its **Quotes** tab, which has four sections:

| Section | What it holds |
| --- | --- |
| **Deliverables** | The services being sold — each line is a deliverable (see below) |
| **Third Party Costs** | Costs from external suppliers |
| **Expenses** | Transport, meals, hotels and similar |
| **Resources** | Internal people and the hours being scoped |

### Deliverable (Estimate line) {#deliverable-estimate-line}

A single line on an estimate representing something sold to the client. A deliverable can
be an actual piece of work, a month of a retainer, a service, or any other way the agency
wants to break the estimate down. Third party costs, expenses and resources are each quoted
*against* a deliverable.

This is **not** the same as a Job — see the caution under [Job](#job).

### Quote

The tab on an Estimate where its detail is built, and by extension the act of pricing a
line ("quote for this deliverable"). A quote is part of an estimate, not a separate
document.

### Rate Card

The prices and costs used when quoting resources, defined per typology group and/or per
user. A rate card has columns, so the same card can carry different rates for different
situations. A client can have a default rate card, which an estimate inherits.

**In the interface:** the field on an Estimate that selects the rate is labelled
**Table Rate**. It refers to the rate taken from the chosen Rate Card.

### Bill

The document raised in Skills Workflow to charge a client. A bill is what the agency
approves internally.

### Invoice

The document the finance or accounting system issues from an approved bill. Most
[integrations](./integrations/) work by sending an approved **Bill** out and writing the
resulting **Invoice** reference back onto it — so a bill in Skills Workflow carries the
number of the invoice it produced.

### Credit Note

A document reducing an amount already invoiced, issued when the value of an invoiced
estimate goes down.

### Purchase Order / Supplier Invoice

**Purchase Order** — what the agency orders from a supplier. **Supplier Invoice** — what
the supplier bills the agency. Both flow out to the finance system in the same way bills
do.

### Expense

A cost incurred by a person and reclaimed — travel, meals, and similar. Expenses are
grouped into an **Expense Sheet** for approval.

---

## People and structure

### User

Someone who can sign in and use Skills Workflow.

### Employee

The employment record behind a person. Kept separately from the user account, so HR data
can be maintained independently of platform access.

**In the API:** `/api/users` and `/api/employees` are separate endpoints, and a user can be
linked to an employee record.

### Typology

A person's position — what they do, and therefore what they cost and what they can be
scoped as. Typologies are what resources are estimated and planned against.

### Typology Group

A grouping of typologies, used for rate cards, planning and reporting. Rate cards are
usually defined per typology group rather than per individual typology.

:::note Typology is not Role
**Typology** is what someone does, for costing and planning. **Role** is what someone is
allowed to see and do in the platform. Changing a typology affects rates and resourcing;
changing a role affects permissions.
:::

### Role

An access profile controlling what a user can see and do. Roles govern permissions —
including, in places, which individual columns of a document are visible.

### Company, Division, Department

The organisational hierarchy, from largest to smallest. A **Company** is a legal entity
with its own settings, currency and finance connection. A **Division** groups departments
within it. A **Department** is where people sit, and is used for planning and workflow.

A single Skills Workflow tenant can hold several companies, each with its own configuration
and its own integration credentials.

---

## Workflow

### Stage

Where a document currently sits in its process — for example a bill that is Under Approval,
or a job that is In Progress. Every document type has its own set of stages.

**In the API:** a stage is a `workflowState` — you will see it as `workflowState` in
payloads and `/api/jobs/{id}/workflowstate` as an endpoint. "Stage" and "workflow state"
are the same thing.

:::note Stage vs Status
This documentation uses **Stage** for where a document is in its workflow. Where you see
**status**, it usually means something else — for instance whether an integration run
succeeded. If a page uses "status" to mean the workflow stage, read it as Stage.
:::

### Transition

The move from one stage to the next, and the permission to make it. A transition has to
exist between two stages for a document to move between them — which is why an
[integration](./integrations/) may report that it could not apply a stage change even
though the target stage exists.

### Workflow

The full set of stages and transitions for a document type, including who may make each
move and what happens when they do.

### Workflow Action

Something the platform performs automatically as part of a transition — creating a version,
assigning someone, requesting confirmation, sending an e-mail, generating an estimate, and
so on.

---

## Automation and integration

### Automation

A configured sequence of steps the platform runs on its own — calling an external system,
running a query, creating or updating records. Most [integrations](./integrations/) are
built from automations.

### Webhook

A trigger that fires when something happens to a document — created, updated, stage
changed, deleted — and starts an automation. Webhooks can be filtered, so they only fire
for particular stages or document types.

### Named Query

A saved query used by automations and workspaces to look up or assemble data.

### Workspace

A configurable screen — a dashboard or a panel on a record — built from components and data
sources. Some integrations ship workspaces that embed an external system directly into a
record.

### System Parameter / Configuration Key

Where connection settings and credentials for an integration are stored, kept out of the
automation itself so they can differ per environment.

### Custom Field

An additional field added to a document type beyond the standard ones. Integrations
commonly use a custom field to store the matching record's identifier in the external
system.

### Custom Table

A table of data held in Skills Workflow outside the standard model — used for reference
data, and by some integrations for their own bookkeeping.

---

## Time

### Timesheet

A record of time worked, entered against a job by a user, and approved.

### Leave

Time off — holiday, sickness and similar. Leave is what makes someone unavailable in
resourcing and scheduling, which is why [HR integrations](./integrations/) exist to keep it
current.

### Typology-based planning

Scoping work by **typology** rather than by named person, so a plan can be built before it
is known who will do it.

### FTE

Full-Time Equivalent — a unit expressing workload as a proportion of a full-time person.

### Utilisation

How much of someone's available time is spent on billable work.

### Burn

How much of an estimated or contracted amount has been consumed by actual hours.
