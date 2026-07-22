---
title: Workspace Studio
sidebar_label: Workspace Studio
sidebar_position: 6
---

## What it helps with

Workspace Studio gives technical users direct, code-level access to a workspace's underlying files — components, data sources, and configuration — instead of working through panels and settings screens.

It is useful for tasks such as:

- fixing a bug in a specific component
- writing or editing a function used by a grid, form, or board
- adding a column, field, or data transform that needs custom logic
- reviewing exactly what changed in a workspace before saving it

## When to use it

Use this assistant when a change goes beyond what panels and settings can do, and needs custom code.

Good examples include:

- fixing a component that behaves incorrectly
- adding custom logic to how data loads or displays
- building a feature that isn't covered by standard widget options
- reviewing the underlying files of a workspace to understand how it works

## Example requests

- `Fix the bug in this grid's column setup`
- `Add a new column to this component`
- `Help me edit this function so it filters by status`
- `Show me what changed in this workspace since I opened it`

## What to have ready

- the workspace you are working in
- the specific component or file, if you already know it
- a clear description of the bug or behavior you want to change
- any error message you are seeing

## When not to use it

- If you want to add or resize a panel, or change a filter or widget setting, use the [Workspace Assistant](workspace-agent.md) — it works without touching code.
- If you only want help with text, use the [Writing Assistant](writing-agent.md).

## What to expect

Workspace Studio reads the relevant files first, explains what it plans to change, and then applies the change directly. It is built for users comfortable working close to the code, such as studio leads or technical admins — for everyday layout and widget changes, the [Workspace Assistant](workspace-agent.md) is the faster path.
