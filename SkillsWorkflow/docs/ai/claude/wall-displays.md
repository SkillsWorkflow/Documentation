---
id: ai-claude-wall-displays
title: Put Your Agency's Numbers on a Screen
description: "Ask Claude for a view made for a TV in the studio or the office: today's deadlines, the week's capacity, the approvals waiting, refreshing on its own."
sidebar_label: Numbers on a Studio Screen
sidebar_position: 9
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
This is in preview and has not been tested end to end yet. It is built with what Skills Workflow offers today; leave it running on the screen for a day before relying on it.
:::

Put what the team should see at a glance on a screen on the wall: the deadlines of the day, who is over capacity this week, the jobs waiting on clients. Ask Claude for a view made for a TV, readable from across the room and refreshing on its own.

## Availability

Preview. You need the [Skills Workflow connector in Claude](/docs/ai/claude/ai-claude-connect) and a Skills Workflow user signed in on the computer behind the screen. The screen shows what that user is allowed to see.

## How to ask for it

1. Say it is for a TV, its size and how far away people read it.
2. Name the figures, at most a handful, and how often they refresh.
3. Sign in on the screen's computer with a user that sees only what the room should see, and open the address in full screen.

The agency, people and numbers in this example are illustrative.

<Walkthrough
  title="Claude"
  subtitle="An example conversation between a studio manager and Claude."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="The studio board, always current">
        Large type, few figures and a refresh every few minutes.
      </Walkthrough.CapabilityCard>
      <Walkthrough.NoteCard
        items={[
          'Choose the signed-in user with care: everyone in the room sees what that user sees.',
          'When the session ends, the screen shows the Skills Workflow sign-in until someone signs in again.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>Make a board for the TV in the studio: today’s deadlines, the jobs waiting on clients, and who is over 100% this week. Refresh every five minutes.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <p>The board has three columns, in type readable from a few metres:</p>
    <Walkthrough.DataTable
      columns={['Today’s deadlines', 'Waiting on clients', 'Over capacity']}
      rows={[
        ['7 jobs, 2 late', '11 jobs, oldest 9 days', 'Anna 112%, Rui 104%'],
      ]}
      note="It refreshes every five minutes and shows the time of the last refresh in a corner."
    />
    <Walkthrough.StatusChip status="Published" label="studio/board" />
  </Walkthrough.Message>
</Walkthrough>

## Rules and behaviour

- The view reads the data again at each refresh. It never changes data.
- A screen in a shared room shows what the signed-in user sees. Do not sign in with a user who can see costs or salaries.

## Related articles

- [Build a Report From Your Data](/docs/ai/claude/ai-claude-reports)
- [Add a Screen to Skills Workflow](/docs/ai/claude/ai-claude-team-screens)
- [Skills Workflow in Claude](/docs/ai/claude)
