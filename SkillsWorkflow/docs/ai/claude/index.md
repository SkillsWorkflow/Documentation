---
id: ai-claude
title: Skills Workflow in Claude
description: "Connect Claude to Skills Workflow and create what your agency hands to clients and teams: status pages, reports, screens inside the platform, printable reports, forms and wall displays, all reading live data."
sidebar_label: Overview
sidebar_position: 1
---

Connect Claude to your Skills Workflow tenant and describe what you need in plain language. Claude builds it, publishes it to your tenant and gives you its address. What it builds reads live Skills Workflow data, and each person who opens it sees only what their own permissions allow.

The connection is a connector you add to Claude once, with credentials the Skills Workflow team sends you. Read [Connect Claude to Skills Workflow](/docs/ai/claude/ai-claude-connect) to set it up.

## What you can create

| What your agency needs | Typical example | Status |
|---|---|---|
| [A live status page for a client](/docs/ai/claude/ai-claude-client-status-page) | The state of a campaign, its deliverables and what is waiting on the client, at one address | Available |
| [One address for everything a client opens](/docs/ai/claude/ai-claude-client-hub) | A client's home page linking to each of their status pages and reports | Available |
| [A report from your data](/docs/ai/claude/ai-claude-reports) | Hours and burn of a retainer, billing by month, jobs by stage | Available |
| [A screen inside Skills Workflow](/docs/ai/claude/ai-claude-team-screens) | A traffic board in the menu, a tab on every job, the team's home page | Available |
| [A report to print or send](/docs/ai/claude/ai-claude-printable-reports) | The monthly status report as it stands today, saved as PDF and emailed | Preview |
| [A form that creates work](/docs/ai/claude/ai-claude-forms) | A request form that opens a job, a short feedback form after a delivery | Preview |
| [Numbers on a screen in the studio](/docs/ai/claude/ai-claude-wall-displays) | Today's deadlines and the week's capacity on a TV in the studio | Preview |

**Available** means the platform supports it today. **Preview** means it can be built with what the platform offers today but has not been tested end to end yet; check the result before handing it to anyone.

Other things agencies ask for, built the same way:

- A new business tracker with the pitches in progress and the estimates waiting on approval
- A welcome page for a new client, with the team, the contacts and how to ask for work
- The end-of-campaign summary: what was delivered, the hours spent against the estimate and the approvals on record
- A page per account director listing their clients, ordered by what needs attention

## Planned: work in Skills Workflow from Claude

Today the connector creates and publishes. A second connector is planned for working on your data directly from Claude: finding documents, moving a job to its next stage, updating records. It is not available yet and has no date.

## Rules and behaviour

- Everything Claude publishes is stored in your tenant's file system and served from your tenant's own address.
- Nobody opens what Claude publishes without signing in to Skills Workflow. Clients who are to open a page need a Skills Workflow user.
- What Claude publishes reads data with the permissions of the person viewing it, and never shows someone data they could not see in Skills Workflow.
- Claude can make mistakes. Open what it publishes as the people who will use it before sharing the address. See [AI Can Make Mistakes](/docs/ai/ai-can-make-mistakes).

## Related articles

- [Connect Claude to Skills Workflow](/docs/ai/claude/ai-claude-connect)
- [Client Portals](/docs/ai/ai-portals)
- [Data Extraction API](/docs/build-and-extend/api/data-extraction-api)
- [AI Can Make Mistakes](/docs/ai/ai-can-make-mistakes)
