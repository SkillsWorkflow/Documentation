---
id: reassigning-work-from-an-overloaded-person
title: Reassign Work From an Overloaded Person
description: "See how the AI Assistant warns a project manager that the person they are assigning to three Jobs is already overloaded, suggests available people with the right typology group and splits the work between them with the manager's approval."
sidebar_label: Reassign Work From an Overloaded Person
sidebar_position: 3
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
This use case is in preview, the conversation shows how the AI Assistant is expected to handle it, and what it answers or does today may differ from this example.
:::

## Overview

When you ask the AI Assistant to assign someone to work, it checks whether that person has time for it in the period. If the person is already overloaded, the assistant tells you by how much, suggests people in the same typology group who are free, and proposes how to split the work between them. You choose: keep your original choice, take the suggestion or change it. The assistant changes the Jobs' teams only after you approve.

The agency, client, project, Jobs, people and hours in this example are illustrative. The people you see depend on your access and on how your agency plans its resources.

<Walkthrough
  subtitle="An example conversation between a project manager and the AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="A warning before you overload someone">
        The assistant compares the hours of the work with the person’s free time, and when it does not fit, it finds who else can take it.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Ask the assistant to assign the person to the work.',
          'Read how many hours the person is over in the period.',
          'Check the alternatives and how the assistant splits the work.',
          'Keep your choice, accept the suggestion or change it.',
          'Review the team changes and select Approve.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Assign Artur to these three Jobs as Executor.',
          'Who else in Design could take the key visual?',
          'Yes, assign the work to Lucas and Emma.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'The warning compares the hours of the work with the person’s free time in the same period, after their bookings and leave.',
          'Alternatives are people in the same typology group with enough free time. Ask for another group or department if you need it.',
          'The warning does not stop you. Ask the assistant to assign the person anyway if that is your decision.',
          'The assistant asks for your approval before it changes a Job’s team. Select Deny to leave the teams as they are.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>Assign Artur Lima as Executor to the Key Visual, Social Posts and Banner Set Jobs of the Solenna Energy Winter Campaign. They are due next Friday.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Artur is already overloaded next week.</strong> With these three Jobs he would be 36 hours over his capacity:</p>
    <Walkthrough.DataTable
      columns={['Artur Lima · Design', 'Hours']}
      rows={[
        ['Capacity, Monday 9 to Friday 13 November', '40h'],
        ['Already booked', '46h'],
        ['Key Visual, Social Posts and Banner Set', '30h'],
        ['Total', '76h · 36h over'],
      ]}
    />
    <p><strong>I found these people in the Design typology group as an alternative:</strong></p>
    <Walkthrough.DataTable
      columns={['Person', 'Typology group', 'Free time next week', 'Suggested work']}
      rows={[
        ['Lucas Ferreira', 'Design', '40h', 'Key Visual (16h) and Banner Set (6h)'],
        ['Emma Clarke', 'Design', '24h', 'Social Posts (8h)'],
        ['Sofia Marques', 'Design', '16h', 'Not needed'],
      ]}
      note="With this split, Lucas keeps 18h free and Emma 16h free next week."
    />
    <p>Do you want me to assign the work to Lucas and Emma?</p>
    <p><strong>How I read your question</strong></p>
    <ul>
      <li>Included: active, plannable people in the Design typology group, Monday 9 to Friday 13 November 2026.</li>
      <li>Assumed: the hours of each Job are the hours planned on it.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Yes, assign the work to them.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Add to these documents’ teams"
      subtitle="Solenna Energy Winter Campaign · 3 Jobs"
      rows={[
        ['SOL0007DESI001 · Key Visual', 'Lucas Ferreira as Executor'],
        ['SOL0007DESI002 · Social Posts', 'Emma Clarke as Executor'],
        ['SOL0007DESI003 · Banner Set', 'Lucas Ferreira as Executor'],
      ]}
      actions={[{ label: 'Deny' }, { label: 'Approve', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>I reviewed the team changes and selected Approve.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Updated" label="3 Jobs · Solenna Energy Winter Campaign" />
    <p>Lucas Ferreira is the Executor on Key Visual and Banner Set, and Emma Clarke on Social Posts. Artur Lima’s week stays as it was, with 46 hours booked.</p>
  </Walkthrough.Message>
</Walkthrough>

## Related articles

- [Find Available People and Assign One to a Job](/docs/ai/use-cases/resource-management/checking-resource-availability)
- [Check Contracted Hours and Team Capacity](/docs/ai/use-cases/resource-management/comparing-contracted-and-available-hours)
- [Get Notified About Resource Issues](/docs/ai/use-cases/resource-management/receiving-notifications-about-resource-issues)
- [AI Assistant](/docs/ai/ai-assistant)
