---
id: comparing-contracted-and-available-hours
title: Check Contracted Hours and Team Capacity
description: "See how a project manager asks the AI Assistant how many of a client's contracted hours are left this quarter, whether the team has enough free time to deliver them, which typology groups fall short, and who is free to cover the gap."
sidebar_label: Check Contracted Hours and Team Capacity
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Overview

Ask the AI Assistant how a client's contracted hours compare with the time your team has available. It shows the hours sold to the client for the period, how many have been recorded and how many are left, by typology group. You can then ask whether the team has enough free time to deliver what is left, see where capacity falls short, and find who is free to cover the gap.

The agency, client, people and hours in this example are illustrative. The estimates and people you see depend on your access and on the data your agency makes available to the assistant.

<Walkthrough
  subtitle="An example conversation between a project manager and the AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="From contracted hours to delivery">
        The assistant compares the hours sold to a client with the hours recorded and with your team's free time, so you know before the client review where delivery is at risk.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Name the client and the period you want to review.',
          'Read the contracted, recorded and remaining hours for each typology group.',
          'Check How I read your question to see which estimates were included.',
          'Ask whether the team has enough free time to deliver the remaining hours.',
          'Ask who in the short typology group is free to cover the gap.',
          'Use the Burn and Utilization Per Role - Fee tab and the FTE workspace to follow it every month.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'How many hours are left on our approved Northwind Coffee estimates this quarter?',
          'Show it by typology group, with the percentage used.',
          'Do we have enough people to deliver those hours by the end of October?',
          'Explain the limitations to me.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Contracted hours come from the staff plan of the client’s approved estimates. Estimates that are not approved are left out.',
          'If you ask from inside an estimate, the assistant may answer for that estimate only. Ask for all the client’s approved estimates in the period to include every one.',
          'Recorded hours are counted through the projects mapped to the fee. When an estimate is not linked to a project or job, the assistant cannot attribute recorded time to it and says so.',
          'Hours not yet recorded on timesheets are not counted, so remaining hours can read higher than they really are.',
          'Each typology group is matched exactly. One typology group is not used to cover another unless you ask.',
          'Leave awaiting approval is not deducted from available capacity. The assistant flags it separately.',
          'Asking by department or by typology group can return different people.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>I have a quarterly review with Northwind Coffee next week. How many of the hours we contracted with them for this quarter are still left?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Northwind Coffee has 1,280 contracted hours for October to December 2026.</strong> 395 have been recorded so far, leaving 885 hours (69%) to deliver:</p>
    <Walkthrough.DataTable
      columns={['Typology group', 'Contracted', 'Recorded', 'Left']}
      rows={[
        ['Creative', '480h', '150h (31%)', '330h'],
        ['Design', '360h', '70h (19%)', '290h'],
        ['Copywriting', '240h', '90h (38%)', '150h'],
        ['Accounts', '200h', '85h (43%)', '115h'],
      ]}
      note="Design is the furthest behind: 19% used with almost two and a half months left."
    />
    <p><strong>How I read your question</strong></p>
    <ul>
      <li>Included: approved Northwind Coffee estimates from 1 October to 31 December 2026.</li>
      <li>Assumed: “left” means contracted hours minus the hours recorded on timesheets.</li>
      <li>Not included: estimates that are not approved.</li>
    </ul>
    <Walkthrough.Source label="Estimates quotes · 16 rows" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Do we have enough people available to deliver those hours by the end of December?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Three of the four typology groups can cover what is left. Design is 74 hours short:</strong></p>
    <Walkthrough.DataTable
      columns={['Typology group', 'Still to plan', 'Free time', 'Gap']}
      rows={[
        ['Creative', '130h', '210h', '—'],
        ['Design', '170h', '96h', '74h short'],
        ['Copywriting', '50h', '60h', '—'],
        ['Accounts', '0h', '40h', '—'],
      ]}
      note="Copywriting has only 10 hours to spare. One copywriter has 24 hours of leave awaiting approval in December. If it is approved, Copywriting would also be short."
    />
    <p><strong>How I read your question</strong></p>
    <ul>
      <li>Included: active, plannable people in each typology group, from 14 October to 31 December 2026.</li>
      <li>Assumed: “still to plan” is the remaining hours not yet booked on Northwind Coffee work.</li>
      <li>Assumed: free time is working time minus approved leave and all existing bookings, on any client.</li>
      <li>Assumed: each typology group is covered only by people in that typology group.</li>
    </ul>
    <Walkthrough.Source label="Capacity · 412 rows" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Which designers have free time between now and December?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Three people in the Design typology group have free time, 96 hours in total:</strong></p>
    <Walkthrough.DataTable
      columns={['Person', 'Department', 'Free time']}
      rows={[
        ['Rita Almeida', 'Digital', '48h'],
        ['Ben Carter', 'Digital', '32h'],
        ['Chloe Martin', 'Digital', '16h'],
      ]}
      note="Even with all three booked, Design would still be 74 hours short. You could plan the remaining hours into January, agree a new date with the client, or bring in a freelancer."
    />
    <Walkthrough.Source label="Capacity · 3 rows" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Where can I follow this every month without asking?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Open the client's fee and select the <strong>Burn and Utilization Per Role - Fee</strong> tab. It compares contracted, planned and actual hours by typology group for the projects mapped to the fee.</p>
    <p>For capacity, open the <strong>FTE</strong> workspace from the <strong>Workspaces</strong> menu. Its <strong>Hired</strong> section compares the hours sold with each team's capacity.</p>
  </Walkthrough.Message>
</Walkthrough>

## Related articles

- [Burn and Utilization Workspace](/docs/product/dashboards-and-reporting/utilization-burn-dashboard)
- [FTE Workspace](/docs/product/dashboards-and-reporting/fte-dashboard)
- [Find Available Creatives and Assign One to a Job](/docs/ai/use-cases/resource-management/checking-resource-availability)
- [AI Assistant](/docs/ai/ai-assistant)
