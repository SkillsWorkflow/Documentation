---
id: transferring-hours-between-projects
title: Transfer hours between projects or jobs
description: Move selected timesheet entries to another project or job.
sidebar_label: Transfer hours between projects or jobs
sidebar_position: 6
---

Use **Transfer Hours** to correct timesheets that were recorded against the wrong project or job. The transfer moves each selected timesheet entry in full to one destination; it does not copy the hours or split an entry between destinations.

## Before you start

- You need access to the **Transfer Hours** action. If the pencil icon is not available in the Time Sheets workspace, ask your administrator to confirm that your profile has the `TransferWrite` role.
- Check the dates, users and destination before saving. A transfer changes the selected entries' project or job.
- The destination must be valid for the whole period of the selected timesheets. For example, if the selected entries run from 3 to 7 June, the destination project's or job's start date must be on or before 3 June and its end date must be on or after 7 June.

## Transfer the hours

1. Open the source **Project** or **Job**, then open its **Time Sheets** workspace.
2. Filter the grid to the timesheets you need to move. Filter by **Date** and **User** as needed.

<figure>
  <img src="/img/university/timesheets/transfer-hours-timesheets-list.png" alt="Time Sheets workspace with timesheet rows selected for transfer" />
  <figcaption>Select the timesheets to transfer.</figcaption>
</figure>

3. Select the relevant timesheet rows.
4. Select the pencil icon, **Transfer Hours**.
5. In the popup, search for and select one destination. You can select either a **Project** or a **Job**. The results show the company, client, fee, project, job, and start and end dates to help you confirm the destination.

<figure>
  <img src="/img/university/timesheets/transfer-hours-popup.png" alt="Transfer Hours popup with a destination project or job selected" />
  <figcaption>Choose the destination, then save the transfer.</figcaption>
</figure>

6. Select **Save**.

The Time Sheets grid refreshes when the popup closes. Confirm that the selected entries now show the intended project or job.

:::tip
When transferring more than one timesheet, select entries that share the intended destination and whose full date range is covered by that destination. Run separate transfers when the entries need different destinations or date ranges.
:::

## Why a destination may not appear

The transfer popup only returns eligible destinations whose period covers the earliest and latest date among the timesheets you selected. If you cannot find a project or job, check its start and end dates first, then reduce the selected date range or choose a destination that covers it.

## Related articles

- [Filling in Time Sheets](/docs/product/time/timesheets/filling-time-sheets)
