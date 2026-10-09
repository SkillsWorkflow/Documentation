---
id: checking-resource-availability
title: Find Available Creatives and Assign One to a Job
description: "See how a project manager asks the AI Assistant which creatives are free next week, checks what one person is booked on, narrows the search by typology group and assigns the available creative to a Job as Executor."
sidebar_label: Find Available Creatives for a Job
sidebar_position: 2
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Overview

Ask the AI Assistant, in your own words, who is free to work on a deadline. It checks the capacity, bookings and leave of the people you can plan, and lists who is available for the period with their free time. You can ask what one person is booked on, narrow the search to a typology group, and then ask the assistant to add the person you choose to a Job's team. You approve the change before it is made.

The agency, clients, projects, Jobs, people and hours in this example are illustrative. The people and projects you see depend on your access and on how your agency plans its resources.

<Walkthrough
  subtitle="An example conversation between a project manager and the AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="From availability to assignment">
        The assistant compares capacity with booked work and leave, shows who is free for the period you need, and adds the person you choose to the Job's team with your approval.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Describe the work, the deadline and the kind of people you need.',
          'Read the free time and current bookings for each person.',
          'Check How I read your question to see the period, the people included and what was assumed.',
          'Ask what one person is booked on before you decide.',
          'Name the Job and the role, review the team change and select Approve.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Who in the Creative department has 40 hours free next week?',
          'What is Daniel booked on between 12 and 16 October?',
          'Add Lucas to the Campaign Website job as Executor.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Leave that is still awaiting approval is not deducted from free time. The assistant flags it separately.',
          'Asking for a department and asking for a typology group can return different people.',
          'Being on a project’s team is not the same as being booked on it. Ask about bookings to see where a person’s hours go.',
          'The assistant asks for your approval before it changes a Job’s team. Select Deny to leave the team as it is.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>I have the Christmas campaign for Northwind Coffee, and I need to develop the creative campaign by the end of next week. Which creatives are available to work full-time?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Five Creative team members are fully available for a 40-hour week, Monday 12–Friday 16 October:</strong></p>
    <Walkthrough.DataTable
      columns={['Person', 'Department', 'Role', 'Free time', 'Current bookings']}
      rows={[
        ['Sofia Marques', 'Creative', 'Associate Creative Director', '40h', '0h'],
        ['Daniel Reed', 'Creative', 'Brand Manager', '40h', '0h'],
        ['Priya Shah', 'Creative', 'Associate Creative Director', '40h', '0h'],
        ['Tom Walsh', 'Creative', 'Creative Director', '40h', '0h'],
        ['Inês Costa', 'Creative', 'Associate Creative Director', '40h', '0h'],
      ]}
      note="Laura Bennett also has 40h free, but has 32h of leave awaiting approval from Tuesday to Friday. If it is approved, she would have only 8h free. Maya Collins has 30h free, with 2h booked each day."
    />
    <p><strong>How I read your question</strong></p>
    <ul>
      <li>Included: active, plannable people in the Creative department for Monday 12 to Sunday 18 October 2026.</li>
      <li>Assumed: “full-time” means a completely free 40-hour working week, Monday to Friday, with no existing bookings.</li>
      <li>Pending leave is not deducted from available time, but Laura Bennett’s four pending leave days could change her availability.</li>
    </ul>
    <Walkthrough.Source label="Leaves · 4 rows" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Maya has 30 hours free. What is she booked on next week?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Maya’s only booking next week is <strong>2 hours per day, Monday 12–Friday 16 October, 10 hours in total</strong>, on a Lumen Bank press-release job. She has <strong>30 hours free</strong> that week.</p>
    <p><strong>How I read your question</strong></p>
    <ul>
      <li>Included: Maya’s scheduled workload from Monday 12 through Sunday 18 October 2026.</li>
      <li>Assumed: “booked” means scheduled work, not only being listed on a project team.</li>
    </ul>
    <Walkthrough.Source label="Workloads · 5 rows" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Give me the capacity of creatives who are fully available next week. I only need those who have the Creative typology group.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Lucas Ferreira</strong> is the only person in the <strong>Creative</strong> typology group who is fully available next week: <strong>40 hours free</strong> across Monday 12–Friday 16 October, with no booked work or leave. The other person in that typology group, <strong>Emma Clarke</strong>, has only <strong>16 hours</strong> of working capacity next week (Monday and Tuesday).</p>
    <p><strong>How I read your question</strong></p>
    <ul>
      <li>Included: plannable people whose typology group is exactly Creative, for Monday 12 through Sunday 18 October 2026.</li>
      <li>Assumed: “fully available” means 40 free working hours across Monday to Friday.</li>
      <li>Capacity includes booked work and recorded leave; neither reduces Lucas Ferreira’s 40 available hours.</li>
    </ul>
    <Walkthrough.Source label="Capacity · 14 rows" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Okay, I need to start the Northwind Christmas 2026 – Campaign Website job, so assign it to Lucas as the executor.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Add to this document’s team"
      subtitle="NWC0021DIGI001 · Northwind Christmas 2026 – Campaign Website"
      rows={[['Adding', 'Lucas Ferreira as Executor']]}
      actions={[{ label: 'Deny' }, { label: 'Approve', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>I reviewed the team change and selected Approve.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Updated" label="NWC0021DIGI001 · Northwind Christmas 2026 – Campaign Website" />
    <p>Lucas Ferreira has been assigned as the Executor on Northwind Christmas 2026 – Campaign Website (NWC0021DIGI001).</p>
  </Walkthrough.Message>
</Walkthrough>

## Related articles

- [Identifying Resource Scarcity](/docs/ai/use-cases/resource-management/identifying-resource-scarcity)
- [Turn a Campaign Brief into a Job](/docs/ai/use-cases/projects-and-jobs/creating-a-job-using-a-briefing-template)
- [AI Assistant](/docs/ai/ai-assistant)
