---
id: build-a-quote
title: Build a quote
description: "Add deliverables and their services, expenses and resources to an estimate's quote, edit cells like a spreadsheet, and fill in the required fields."
sidebar_label: Build a quote
sidebar_position: 1
---

A quote is a list of deliverables. Each deliverable holds the services, expenses and resources that make up its cost and sell.

## Adding deliverables and lines

Every list ends with an empty row: **Type to add a deliverable…**, **Type to add a third-party service…**, **Type to add an expense…** or **Type to add a resource…**. Start typing in that row to create the deliverable or line.

A new deliverable takes the estimate's default **Tax**. Its **Start Date** and **End Date** are the estimate's date and expiration date.

In **Services**, the empty row suggests the deliverable's own service. Press `Enter` to add it. A line on the deliverable's service takes the deliverable's description.

![img-box-shadow](/img/quotes/02-lines.png)
<figcaption>A deliverable's lines, with the suggested service in the empty row</figcaption>

## Adding several roles at once

In **Resources**, the **Typology Group** list searches any part of the role, the department or the company. Tick several typology groups with their boxes or with `Ctrl`+`Enter` (`⌘`+`Enter` on macOS), then press `Enter` or click **Add**. Each one becomes a resource line.

## Editing cells

Select a cell and type, or press `Enter` or `F2`. `Enter` keeps the value and moves down. `Esc` cancels the edit.

`Shift`+`Enter` opens the description in a larger box.

In a list cell, the list opens as you type. Use `↑` and `↓` to choose and `Enter` to pick.

## Copying, pasting and filling

- `Ctrl`+`C` and `Ctrl`+`V` copy and paste cells, also to and from Excel. Pasting into the empty rows adds lines.
- `Shift` with the arrows, or `Shift`+click, selects several cells. `Ctrl`+`D` fills them down from the first selected row.
- `Alt`+`C` copies the selected rows and `Alt`+`V` pastes them as new rows, also into another estimate. The same options are in the right-click menu.
- `Delete` clears the selected cells.

On macOS, use `⌘` in place of `Ctrl`.

## Moving and removing rows

Drag a deliverable or a line by its handle, or press `Ctrl`+`Shift`+`↑` or `↓`. A new line moves once it is saved. While a list is sorted or filtered, its rows stay in place.

`Ctrl`+`Backspace` (`⌘`+`⌫` on macOS) removes the row, and pressing it again restores it. The row is deleted when you save. A deliverable that has lines, or that has been billed, cannot be removed.

## Required fields

A cell tinted light yellow is required and still empty.

When you save with a required field empty, the save stops. The page lists what is missing, turns those cells red, opens the deliverable and the section, and moves to the first one.

![img-box-shadow](/img/quotes/03-required.png)
<figcaption>A required field left empty: the cell turns red when you save</figcaption>

## Related articles

- [Prices and margins](/docs/product/commercial/estimates/quotes/prices-and-margins)
- [Columns, sorting and filters](/docs/product/commercial/estimates/quotes/columns-sorting-and-filters)
- [Keyboard shortcuts](/docs/product/commercial/estimates/quotes/keyboard-shortcuts)
