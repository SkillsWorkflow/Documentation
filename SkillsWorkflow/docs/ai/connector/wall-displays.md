---
id: ai-connector-wall-displays
title: Put Your Agency's Numbers on a Screen
description: "A board your AI tool publishes for a TV in the studio: what is due in the next two weeks, what is waiting on the client and what is late, in large type and refreshing on its own. In preview."
sidebar_label: Numbers on a Studio Screen
sidebar_position: 9
---

:::preview
This is not available yet. The example below was built with the connector on a demo tenant to show how it is expected to work, and the finished feature may differ.
:::

Put what the team should see at a glance on the screen in the studio: what is due soon, what is waiting on the client and what is already late. Ask your AI tool for a board made for a TV, readable from across the room, that keeps itself up to date.

![img-box-shadow](/img/ai/connector/studio-board.png)
<figcaption>The studio board of the fictitious client Northwind Coffee's Christmas campaign on a demo tenant, at 1920 × 1080: due in the next 14 days, waiting on the client and late.</figcaption>

## Expected behaviour

- The board fills a 1920 × 1080 screen, with a few figures in large type and up to five deliverables under each one.
- It reads the data again every 5 minutes and shows the time of the last refresh. The clock in the corner shows the screen is alive.
- In the example, the board reads the `DE-Jobs` query for one client's open deliverables. Late deliverables appear only in the Late column.

## Rules and behaviour

- The computer behind the screen needs a signed-in Skills Workflow user, and the board shows what that user may see. Use a user who cannot see costs or salaries.
- When the session ends, the screen shows the Skills Workflow sign-in until someone signs in again.

## Related articles

- [Build a Report From Your Data](/docs/ai/connector/ai-connector-reports)
- [Add a Screen to Skills Workflow](/docs/ai/connector/ai-connector-team-screens)
- [Skills Workflow in Your AI Tool](/docs/ai/connector)
