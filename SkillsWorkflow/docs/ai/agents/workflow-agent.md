---
id: workflow-agent
title: Workflow Agent
description: "Inspect and configure workflows — stages, transitions, actions, roles, motives, teams and mappings — by describing the change you want."
sidebar_label: Workflow Agent
sidebar_position: 3
---

The Workflow Agent is for the lifecycle itself: how a document moves from one stage to the next, who may move it, and what has to happen on the way. Use it to understand a workflow you inherited, or to change one without walking through the configuration screens.

It configures workflows. Moving one particular document through its stages is the [Document Agent](/docs/ai/agents/document-agent).

## What it can do

- Explain an existing workflow — its stages, the transitions between them, and what each transition requires
- Add, change or reorder stages
- Create transitions between stages, and set what a transition asks for
- Adjust approval paths and who is allowed to perform a transition
- Change the reasons and actions attached to a transition
- Read and set the teams and mappings a workflow uses

## How to use it

1. Open the [AI Assistant](/docs/ai/ai-assistant) and select **Workflow Agent**.
2. Name the workflow, or the document type it belongs to.
3. Ask it to show you the workflow first when you are changing one you did not build.
4. Describe the change as an outcome — *"nobody outside Legal can approve this"* rather than a list of fields.

Start by reading before writing:

```
Show me the workflow for Deliverables.
```

Then change one thing at a time:

```
Add a legal review step before Approved, and only Legal can move it out.
```

## Rules and behaviour

- Ask for one change at a time. A broad request comes back as a proposal to work through, not as a stack of applied edits.
- The agent validates a change before applying it, and tells you when a change is refused rather than applying part of it.
- A workflow change affects every document already in that workflow. Read what it proposes before approving.
- Stage types are system-defined. See [Workflow stage types](/docs/administration/workflows/stage-types) for what each one means.

## Related articles

- [AI Assistant](/docs/ai/ai-assistant)
- [Document Agent](/docs/ai/agents/document-agent)
- [Tools](/docs/ai/ai-tools)
