# Repo Guardrails

## System Values

- Never invent system values, enum members, status codes, labels, IDs, or configuration options.
- When documentation references platform data such as stage types, action types, statuses, or field names, copy the value from an authoritative source in the repo or from verified system output.
- If the exact values are not available, say that explicitly and point to the source of truth instead of filling gaps with examples that could be mistaken for real values.

## Authoritative Sources

- Prefer source artifacts such as files under `data/de-sources/`, generated artifacts under `data/generated/`, and existing docs that quote those artifacts faithfully.
- For workflow stage types specifically, use `/Skill.Module/DatabaseUpdate/Setup.cs` or [`data/reference/workflow-state-types.json`](./data/reference/workflow-state-types.json) for the seeded system enum members.
- Use `DE-Stages` for the environment-specific `TypeId` and `Type` values actually present on stages.
- Treat `WorkflowStateType.Status` as the authoritative integer mapping for stage types. In the seed implementation, `Status = (int) WorkflowStateTypeEnum` and `Name = WorkflowStateTypeEnum.ToString()`.
- Do not invent a separate `Number` field for workflow stage types unless the implementation changes and that field is added to the code.
- Do not replace real workflow stage types with broad categories like `Initial`, `Active`, `Closed`, or `On Hold`.

## Writing Rule

- Examples are allowed only when they are clearly framed as hypothetical and cannot be confused with actual system values.
- For any system-defined or tenant-defined value list, do not provide example members unless they were verified from source data first.
