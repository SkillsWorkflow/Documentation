---
id: ai-connector-team-screens
title: Add a Screen to Skills Workflow
description: "Ask Claude Code, Codex or GitHub Copilot for a screen of your own inside Skills Workflow: in the menu, as a tab on every job or project, as your team's home page or as a tile in Maintenance, shown only to the roles you choose."
sidebar_label: A Screen Inside Skills Workflow
sidebar_position: 6
---

When a team works from a view the standard screens do not give them, ask your AI tool for it: the team's home page, a tab on every job, an entry in the menu. The AI tool builds the screen and publishes it inside Skills Workflow, where your team already works.

![img-box-shadow](/img/ai/connector/screen-home-page.jpg)
<figcaption>A home page published with the connector on a demo tenant. It is the users' home page and has an entry in the menu; the counters and departments are live data.</figcaption>

## Availability

Available when screens are turned on for your tenant; ask the Skills Workflow team. The screen is built as a small code project, so ask for it in a tool that works on code, such as Claude Code, Codex or GitHub Copilot, with the [Skills Workflow connector](/docs/ai/connector/ai-connector-setup) added.

## Where a screen can show

| Place | What the user sees |
|---|---|
| Menu | An entry in the Pages group, or in the menu group of a document type such as Job or Project. It opens as its own screen or in a popup. |
| Document | A tab on the detail and on the preview of every document of one type. The screen knows which document it is on. |
| Home | The user's home page. It takes the place of Home workspaces; with several, the lowest order wins. |
| Maintenance | A tile in Maintenance, opening the screen inside it. |

Tell the AI tool where the screen goes, its title in each language your team uses, and which roles see it. With no roles, everyone sees it. Roles marked mandatory are all required; of the others, any one is enough.

## Rules and behaviour

- Every publish is a new version. A published version never changes, and a fix is always the next version.
- One version is live at a time, and users get a newly live version within about a minute. Making an older version live again is the way back.
- Published versions cannot be deleted. To take a screen away from everyone, ask your AI tool to publish a version marked inactive.
- The screen reads data with the permissions of the user viewing it.
- Users blocked by missing timesheets do not see the screen unless you ask for it to show to them.

## Related articles

- [Connect Claude, Codex or GitHub Copilot to Skills Workflow](/docs/ai/connector/ai-connector-setup)
- [Skills Workflow in Your AI Tool](/docs/ai/connector)
- [Build a Report From Your Data](/docs/ai/connector/ai-connector-reports)
