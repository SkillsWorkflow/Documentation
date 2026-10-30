---
id: ai-connector
title: Skills Workflow in Your AI Tool
description: "Connect Claude, Codex or GitHub Copilot to Skills Workflow and create what your agency hands to clients and teams: status pages, reports and screens inside the platform, all reading live data."
sidebar_label: Overview
sidebar_position: 1
---

Connect your AI tool to your Skills Workflow tenant and describe what you need in plain language. It builds it, publishes it to your tenant and gives you its address. What it builds reads live Skills Workflow data, and each person who opens it sees only what their own permissions allow.

The connection is a connector you add once, with credentials the Skills Workflow team sends you. The same connector works in Claude, Claude Code, Codex and GitHub Copilot. Read [Connect Claude, Codex or GitHub Copilot to Skills Workflow](/docs/ai/connector/ai-connector-setup) to set it up.

## What you can create

| What your agency needs | The example on its page |
|---|---|
| [A live status page for a client](/docs/ai/connector/ai-connector-client-status-page) | A campaign's progress, its deliverables and what is waiting on the client's approval |
| [One address for everything a client opens](/docs/ai/connector/ai-connector-client-hub) | A client's home page linking to their status page and their report, with a live figure beside each |
| [A report from your data](/docs/ai/connector/ai-connector-reports) | A campaign's deliverables by stage and due per week, from the DE-Jobs query |
| [A screen inside Skills Workflow](/docs/ai/connector/ai-connector-team-screens) | The team's home page with live counters, which also has an entry in the menu |

## Planned

These are not available yet and have no date. The behaviour below is what is expected, and may change.

| What your agency needs | Expected behaviour |
|---|---|
| A report to print or send | A report laid out for paper. You open it, print it or save it as PDF, and the copy keeps the figures and the date of that moment, ready to email to someone outside Skills Workflow. |
| A form that creates work | A form a client or a colleague fills in, which creates the job in Skills Workflow with the answers in its fields, as the person who sent it. |
| Numbers on a screen in the studio | A view made for a TV: few figures in large type, such as the day's deadlines and the jobs waiting on clients, refreshing on its own. |

### Work in Skills Workflow from your AI tool

Today the connector creates and publishes. A second connector is planned for working on your data directly from your AI tool: finding documents, moving a job to its next stage, updating records. It is not available yet and has no date.

## Rules and behaviour

- Everything your AI tool publishes is stored in your tenant's file system and served from your tenant's own address.
- Nobody opens what your AI tool publishes without signing in to Skills Workflow. Clients who are to open a page need a Skills Workflow user.
- What your AI tool publishes reads data with the permissions of the person viewing it, and never shows someone data they could not see in Skills Workflow.
- AI tools can make mistakes. Open what it publishes as the people who will use it before sharing the address. See [AI Can Make Mistakes](/docs/ai/ai-can-make-mistakes).

## Related articles

- [Connect Claude, Codex or GitHub Copilot to Skills Workflow](/docs/ai/connector/ai-connector-setup)
- [Client Portals](/docs/ai/ai-portals)
- [Data Extraction API](/docs/build-and-extend/api/data-extraction-api)
- [AI Can Make Mistakes](/docs/ai/ai-can-make-mistakes)
