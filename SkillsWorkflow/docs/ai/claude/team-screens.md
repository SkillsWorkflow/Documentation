---
id: ai-claude-team-screens
title: Add a Screen to Skills Workflow
description: "Ask Claude Code, Codex or GitHub Copilot for a screen of your own inside Skills Workflow: in the menu, as a tab on every job or project, as your team's home page or as a tile in Maintenance, shown only to the roles you choose."
sidebar_label: A Screen Inside Skills Workflow
sidebar_position: 6
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

When a team works from a view the standard screens do not give them, ask Claude for it. A traffic board for the studio, a tab on every job with what the client approved, a home page for account managers with their day's priorities. Claude builds the screen and publishes it inside Skills Workflow, where your team already works.

## Availability

Available when screens are turned on for your tenant; ask the Skills Workflow team. The screen is built as a small code project, so ask for it in a tool that works on code, such as Claude Code, Codex or GitHub Copilot, with the [Skills Workflow connector](/docs/ai/claude/ai-claude-connect) added.

## Where a screen can show

| Place | What the user sees |
|---|---|
| Menu | An entry in the Pages group, or in the menu group of a document type such as Job or Project. It opens as its own screen or in a popup. |
| Document | A tab on the detail and on the preview of every document of one type. The screen knows which document it is on. |
| Home | The user's home page. It takes the place of Home workspaces; with several, the lowest order wins. |
| Maintenance | A tile in Maintenance, opening the screen inside it. |

Tell Claude where the screen goes, its title in each language your team uses, and which roles see it. With no roles, everyone sees it. Roles marked mandatory are all required; of the others, any one is enough.

The agency, names and numbers in this example are illustrative.

<Walkthrough
  title="Claude"
  subtitle="An example conversation between a studio manager and Claude Code."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Your screen, where the team already works">
        Claude builds the screen, publishes it as a new version and makes it the one your team gets.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Say where the screen goes and who sees it.',
          'Give its title in your team’s languages.',
          'Check the screen in Skills Workflow before telling the team.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Add a traffic board to the menu for the Studio role.',
          'Put a tab on every job with the client’s approvals.',
          'Go back to the previous version of the traffic board.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>Build a traffic board for the studio: the jobs due this week, grouped by who is assigned, with the late ones first. Put it in the menu, only for the Studio role, titled “Traffic board” and “Quadro de tráfego” in Portuguese.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <p>The board is built. I published it as version 1.0.0 and made it live:</p>
    <Walkthrough.FieldTable
      rows={[
        ['Shows in', 'Menu, Pages group'],
        ['Seen by', 'Studio role'],
        ['Title', 'Traffic board · Quadro de tráfego'],
        ['Live version', '1.0.0'],
      ]}
    />
    <p>Open Skills Workflow with a Studio user and you will find it in the menu.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>The late jobs should be red. Change it.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <Walkthrough.StatusChip status="Live" label="traffic-board 1.0.1" />
    <p>Version 1.0.1 is live with the late jobs in red. Version 1.0.0 is still there if you want to go back.</p>
  </Walkthrough.Message>
</Walkthrough>

## Rules and behaviour

- Every publish is a new version. A published version never changes, and a fix is always the next version.
- One version is live at a time. Making an older version live again is the way back.
- Published versions cannot be deleted. To take a screen away from everyone, ask Claude to publish a version marked inactive.
- The screen reads data with the permissions of the user viewing it.
- Users blocked by missing timesheets do not see the screen unless you ask for it to show to them.

## Related articles

- [Connect Claude, Codex or GitHub Copilot to Skills Workflow](/docs/ai/claude/ai-claude-connect)
- [Skills Workflow in Claude](/docs/ai/claude)
- [Build a Report From Your Data](/docs/ai/claude/ai-claude-reports)
