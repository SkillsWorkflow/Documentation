---
id: custom-table-importer
title: 'Custom Table Importer'
description: "Agencies regularly need data inside Skills Workflow that does not come from any connected system — a rate card, a media plan, a budget breakdown, a list from…"
sidebar_label: Custom Table Importer
---

### Description

This article describes the **Custom Table Importer**.

Agencies regularly need data inside Skills Workflow that does not come from any connected system — a rate card, a media plan, a budget breakdown, a list from a client, a report exported from another tool. Building a dedicated integration for each of those is rarely worth it, but retyping them is worse.

The Custom Table Importer solves that. It watches a folder, and every Excel file dropped there becomes a [Custom Table](../administration/custom-tables) inside Skills Workflow — available to views, reports and dashboards like any other data in the platform. No integration project, no development: the agency exports a spreadsheet and drops it in a folder.

---

### Data Exchange Technology

The importer runs automatically, **once an hour**, on a folder agreed with the agency.

On each run it:

1. Looks in the folder for files matching the configured extension and file-name filter.
2. Reads the first worksheet of each file, using the configured header row to name the columns.
3. Creates the custom table in Skills Workflow — the table name comes from the file name, up to the first digit — and loads the rows into it.
4. Moves the processed file into a **Success** or a **Failure** subfolder.
5. Sends a run summary by e-mail.

Rows are uploaded in batches, so large spreadsheets are handled without timing out.

---

### How the Data Lands in Skills Workflow

**The file name decides the table name.** Everything up to the first digit in the file name becomes the custom table name. This is what allows the agency to deliver the same table repeatedly — for instance a dated export — and always have it land in the same place.

**The header row decides the columns.** The row configured as the header supplies the column names; the rows beneath it become the table rows.

**Each load replaces the previous one.** The custom table is recreated on every import, so the table always reflects the latest file rather than accumulating older versions. This also means the file has to be complete: it is a full replacement, not an update of individual rows.

**Text is capped.** Values longer than 100 characters are truncated when stored.

---

### Settings the Agency Controls

| Setting | What it does |
| --- | --- |
| Directory Path | The folder that is watched |
| File Extension | Which files are picked up |
| Filename Contains | Optional filter, so only matching files are imported |
| File Row Header | Which row of the worksheet holds the column names |
| Chunk Size | How many rows are sent per batch |
| Administrator Mail | Address that receives the run summary |

---

### What the Agency Needs to Provide

- The folder where the files will be dropped, reachable by the importer.
- Agreement on the file naming, so that each file lands in the intended custom table.
- The row that contains the column headers, if it is not the first one.
- An e-mail address to receive the run summaries.

---

### Monitoring and Error Handling

Every run sends a summary e-mail containing the number of rows loaded, any warnings, any errors, and the total running time.

A file that could not be fully imported is moved to the **Failure** subfolder and can be corrected and dropped again. A file that imported successfully is moved to **Success**, which keeps the working folder clean and gives the agency a record of what has been processed.

---

### Good to Know

- Only the **first worksheet** of each file is read. Additional sheets are ignored.
- The import is a full replacement of the table. Anything removed from the file disappears from the custom table on the next run.
- Because the table structure is derived from the file, changing the columns in the spreadsheet changes the columns in Skills Workflow — which will affect any view or report built on top of it.
- The importer runs hourly, so a file dropped just after a run will be picked up on the next one.
