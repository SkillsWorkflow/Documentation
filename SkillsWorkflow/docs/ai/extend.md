---
id: ai-extend
title: Add Your Own Skills, Agents and Tools
description: "Extend the AI with knowledge of your own way of working: skills that teach an agent your rules, agents built for your processes, and tools that reach your own systems and reports."
sidebar_label: Add Your Own
sidebar_position: 5
---

The four agents Skills Workflow ships know the platform. They do not know your agency: your brief structure, your naming, your approval habits, the system you keep budgets in.

Three things let you add that, and they stack. A **skill** is knowledge, an **agent** is a job to do with it, and a **tool** is something the agent can reach.

| You want to | Add |
|---|---|
| Teach an agent a rule, a format or a process of yours | A **skill** |
| Have an agent for a job of your own, with its own instructions and its own set of tools | An **agent** |
| Let an agent reach one of your reports, or a system outside Skills Workflow | A **tool** |

Work with your Skills Workflow consultant the first time. Nothing here is difficult, but an agent is only as good as the tools it is granted, and granting the wrong ones is how an agent becomes either useless or too free.

## Skills

A skill is a written instruction set an agent can read when it needs it. It is how you stop repeating yourself: *"our briefs always open with the business objective"*, written once, is then true for everyone.

A skill is a folder holding a `SKILL.md` file: a short header naming the skill and describing when to use it, then the instructions in plain Markdown. Longer material — a full format specification, a table of your codes, a worked example — goes in a `references/` folder beside it, and is read only when the agent needs that much detail.

```
$ai-agents/skills/
  brief-house-style/
    SKILL.md
    references/
      SECTIONS.md
```

Skills live in your tenant's own file system, under `$ai-agents/skills/`. That is what makes them yours: one agency's skills are never visible to another, and you can change one without waiting for a release.

**A skill is only used by the agents that list it.** Every agent definition carries the names of the skills it may read; a skill nobody lists is never advertised, and an agent listing a skill that is not there simply does not get it. When a skill stops taking effect, the name in the agent definition is the first thing to check.

Agents are told each skill's name and description on every request, and fetch the body only when a request calls for it. Descriptions therefore matter: a skill described vaguely is a skill that never gets read.

## Agents

An agent is a definition, not code. It carries:

- **Name and description**, which is what the user sees in the panel's agent selector.
- **Instructions**: how it behaves, what it always does, what it refuses.
- **Skills** it may read.
- **Tools**, which are what it can actually do. See [Tools](/docs/ai/ai-tools).
- **Tools requiring approval**, the ones that stop and ask the user first.
- **Suggested prompts** shown in an empty conversation.
- **An icon** marking it in the list.

Once saved, it appears in the agent selector alongside the four that ship. There is no deployment step.

Four things worth getting right:

- **Grant the smallest set of tools that does the job.** Leaving the tool list empty gives the agent the entire platform catalogue, including everything that writes.
- **Put every writing tool on the approval list.** An agent that creates jobs without asking will eventually create one you did not want.
- **Write the instructions as rules, not as encouragement.** "Never create a job without a client" holds. "Try to be careful about the client" does not.
- **One agent, one job.** An agent asked to do everything picks the wrong tool.

### Agents that are not ours

An agent can be pointed at an AI service you already run instead of at the platform's own model. The conversation is relayed to your endpoint and the reply comes back into the same chat panel, with the same history, the same attachments and the same agent selector.

This is the route for a briefing model your agency has trained, or a service a client insists on. The agent's configuration carries the address, how the request is shaped, where in the response the answer sits, and the timeout. Attachments are passed as links; nothing is sent inline. Such an agent uses no platform skills or tools: it is your service answering.

## Tools

Two ways to give agents capability beyond the built-in catalogue.

### Your own reports

Your data extraction named queries can be exposed as tools, one tool per query. This is the shortest path to an agent that answers questions about your own numbers: the query already exists, already has the right joins, and is already role-checked.

Turn analytics tools on for the agent, and list which queries it may reach. Left unlisted, it gets every query your tenant publishes — usually more than one agent needs.

Every call is executed as the asking user, so a user refused a report in the platform is refused it here. Queries are read-only.

See [Data Extraction API](/docs/build-and-extend/api/data-extraction-api) for what your tenant publishes.

### Your own systems

An agent can be connected to an **MCP server**, a standard way of exposing a system's operations as tools. If a system you use already speaks it, or you can put a small service in front of one that does not, its tools appear to the agent alongside the platform's own.

An MCP server is registered once for your tenant, with its address, and then named in each agent that should use it. Connection is per agent and explicit: an agent that does not name a server gets nothing from it. Connections are never shared between tenants.

## Rules and behaviour

- Everything here is per tenant. Your skills, agents, MCP servers and their tools are yours alone.
- Platform tools and data extraction queries always run as the signed-in user, so granting them never widens what a user can reach.
- An MCP server is your own service and carries its own access. Whatever it can reach, every agent you connect it to can reach on behalf of every user of that agent.
- A skill or agent is content, not a release. Change one and the next request uses it.
- Version your agents and skills as you change them. Nothing enforces it, and without it a bad edit is hard to trace back.

## Related articles

- [Tools](/docs/ai/ai-tools)
- [Agents](/docs/ai/agents)
- [AI Actions](/docs/ai/ai-actions)
- [Client Portals](/docs/ai/ai-portals)
- [Data Extraction API](/docs/build-and-extend/api/data-extraction-api)
