---
id: ai-assistant
title: AI Assistant
description: "The AI Assistant panel: how to open it, pick an agent, give it context, attach files, approve what it does, and manage chat history and memories."
sidebar_label: AI Assistant
sidebar_position: 2
---

The AI Assistant is a chat panel that sits beside whatever you are working on. You type what you want in plain language, the assistant reads the screen you are on, and it answers or does the work. It does not open a separate screen and it does not lose your place.

Inside the panel you choose an **agent**. Each agent is built for one kind of work and carries its own tools. See [Agents](/docs/ai/agents) for which one to pick.

<figure>

![img](/img/ai/ai-assistant-panel.png)
<figcaption>The AI Assistant panel</figcaption>
</figure>

## Availability

The assistant is in **Preview**. The panel carries a `Preview` badge, and the product's own wording is worth repeating: *this feature is still under development, so its behaviour may change — review AI results before using them.*

Four settings in **Maintenance > Configuration > System > Artificial Intelligence (AI)** control what your users see:

| Setting | What it does |
|---|---|
| Enable AI | Master switch for every AI feature. When off, all AI features are hidden and no AI calls are made. |
| Enable chat | Shows the AI Assistant panel and enables in-context AI editing without leaving the screen. |
| Enable AI Actions | Shows the AI Actions button in rich text editors. See [AI Actions](/docs/ai/ai-actions). |
| Enable flow logging | Adds **Download Flow Log** to the panel menu. Turn it on only while diagnosing a problem. |

`Enable AI` must be on for any of the others to take effect.

The panel is also hidden while the platform is in configuration mode.

## Open the assistant

Click the floating assistant button in the bottom-right corner. It is draggable, so move it if it covers something. The panel opens on the right, and the button disappears while it is open. Collapsing the panel leaves a narrow strip you click to bring it back.

<figure>

![img-box-shadow](/img/ai/ai-assistant-panel-button.png)
<figcaption>The AI Assistant panel, with the Agent selector above the message box</figcaption>
</figure>

## Pick an agent

The **Agent** selector sits above the message box. Nothing is selected for you. Without a selection the panel refuses to send: *Select an agent before sending a message.*

Each agent contributes its own suggested prompts to the empty conversation. Clicking one fills the message box.

## Give it context

The assistant does not read your whole account. It reads what you allow it to, and the panel says what is going out. With every context switch off, the footnote reads *Sends only your message and chat history.*

Two switches live in the panel menu. Each appears only when there is something to send:

- **Workspace**: the workspace you are on, with its active filters, selection and query parameters.
- **Document**: the document open behind the panel.

When you are working inside a document, extra chips appear over the message box for that document's **content** and its **briefing**. Turn a chip off to keep that part out of the request.

## Attach files

Drop a file into the message box to send it with your request. Attachments belong to the conversation, so an agent asked to write a brief can read the file you attached two messages ago.

## Approve what it does

Nothing is written on your behalf without a step you take. There are two gates, and which one you see depends on the agent.

The [Document Agent](/docs/ai/agents/document-agent) shows an **Approval required** card naming the action and listing the arguments it is about to use: the job it will create, the stage it will move a document to, the people it will add to a team.

You have three answers:

- **Approve** runs the action. The card reads *Running*, then *Approved*.
- **Deny** changes nothing. The assistant acknowledges it and offers the specific things you might want to change, such as *Change project* or *Change the name*.
- **Make changes** lets you edit an argument on the card itself before approving.

Some fields on the card are editable in place. A greyed-out value is a placeholder showing what the platform will fill in if you type nothing.

Ignoring the card is safe. The action does not run, and nothing is lost if you type something else instead.

The [Workflow Agent](/docs/ai/agents/workflow-agent) and the [Workspace Agent](/docs/ai/agents/workspace-agent) use the other gate: they build a **proposal**, show you what it changes, and wait for you to apply it. A proposal you have not applied can be reverted.

Which actions raise an approval card is set per agent, so an agent your agency builds can gate as much or as little as you decide. See [Tools](/docs/ai/ai-tools).

## Answer a question

When a request is missing something the assistant cannot guess, such as which client or which job type, it asks with a picker. Long lists come back partially, with *Showing the first results — refine your search to narrow them down.* Type in the picker's search box to narrow them.

## Chat history

Conversations are saved per user. Open **Chat History** from the panel menu to reopen one, and delete conversations there one at a time or several at once. Deleting a conversation cannot be undone.

**New Chat** (the `+` in the panel header) starts a fresh conversation and keeps the current one in history. **Reset Chat** clears the conversation on screen.

## Memories

The assistant remembers facts you tell it: a client you work with constantly, the language you write in, a job type you always pick. It uses them to fill in later requests, and only saves something after it has told you.

Open **Manage Memories** from the panel menu to see everything it holds, delete a single memory, or clear all of them. Memories are per user, and the store holds at most 100 entries.

A memory is a suggestion, not an instruction: when the assistant fills a field from one, it says so and waits for you to confirm.

## Rules and behaviour

- The assistant acts **as you**. It can only read and write what your own permissions allow, and a request for something you cannot see comes back empty rather than elevated.
- Chat history is kept per user and per tenant. Two users never share a conversation.
- Answers are generated. Review anything before sending it to a client or acting on it.

## Related articles

- [Agents](/docs/ai/agents)
- [Tools](/docs/ai/ai-tools)
- [AI Actions](/docs/ai/ai-actions)
- [Add your own skills, agents and tools](/docs/ai/ai-extend)
