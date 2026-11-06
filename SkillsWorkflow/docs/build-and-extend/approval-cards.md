---
id: approval-cards
title: Approval Cards (A2UI)
description: "The contract behind the AI Assistant's approval cards: the A2UI v0.9.1 messages the agent server sends, the Skills Workflow catalog they use, and how a client returns the user's edits and decision."
sidebar_label: Approval cards
sidebar_position: 5
---

When an agent is about to run an action that needs approval, the agent server describes the approval card as [A2UI v0.9.1](https://a2ui.org/specification/v0.9.1-a2ui/) messages, Google's open format for agent-generated interfaces. The client draws them from a catalog of known components. The agent never sends HTML, and the same messages can be drawn by the WebApp, a mobile app or any other client that implements the catalog.

The user sees this as the **approval card** described in [AI Assistant](/docs/ai/ai-assistant#approve-what-it-does).

## Where the card travels

The card rides on the AG-UI run that stops for approval. The run ends with a `RUN_FINISHED` event whose `outcome.type` is `interrupt`, and each entry of `outcome.interrupts` describes one pending action:

| Field | Holds |
|---|---|
| `id` | The interrupt id, sent back with the decision |
| `toolCallId` | The tool call waiting for approval |
| `metadata.toolName` | The tool that will run |
| `metadata.arguments` | The arguments it will run with |
| `metadata.a2ui` | The card: the list of A2UI messages |

The card is never part of the conversation history and never reaches the model.

## Ask for the cards

A client receives cards only when it declares the catalogs it can draw. Send this object in `forwardedProps` on every run, including the run that resumes after a decision:

```json
{
  "a2uiClientCapabilities": {
    "v0.9": {
      "supportedCatalogIds": [
        "https://skillsworkflow.com/a2ui/v0_9/catalogs/approval/catalog.json",
        "https://a2ui.org/specification/v0_9/catalogs/basic/catalog.json"
      ]
    }
  }
}
```

The key stays `v0.9` in v0.9.1.

A client that does not send it gets no `metadata.a2ui`, and draws the approval from `metadata.toolName` and `metadata.arguments` on its own.

## The messages

`metadata.a2ui` holds three messages, applied in order. Each carries `"version": "v0.9.1"`.

| Message | What it does |
|---|---|
| `createSurface` | Opens the card. `surfaceId` is `approval-` followed by the interrupt id. `catalogId` names the Skills Workflow catalog. |
| `updateComponents` | The components, as a flat list. Each has an `id` and a `component` type, and containers list their children by id. |
| `updateDataModel` | The values the inputs edit, under `/args`. |

Two component ids are fixed:

- `root` is the top of the card.
- `title` is the card's heading. A client with a header of its own can show it there and leave it out of the body.

## The catalog

The cards use the Skills Workflow approval catalog, `https://skillsworkflow.com/a2ui/v0_9/catalogs/approval/catalog.json`. It is the A2UI basic catalog, unchanged, plus one component and one function. [Download the catalog](/files/a2ui-approval-catalog.json) (JSON Schema).

### Components

Every component of the basic catalog: `Text`, `Image`, `Icon`, `Video`, `AudioPlayer`, `Row`, `Column`, `List`, `Card`, `Tabs`, `Modal`, `Divider`, `Button`, `TextField`, `CheckBox`, `ChoicePicker`, `Slider` and `DateTimeInput`.

`EntityPicker` picks platform records from a list too long to send. The server names the entity, and the client searches the platform the way it already does.

| Property | Holds |
|---|---|
| `label` | What is being picked |
| `entity` | `user`, `client`, `project`, `department`, `jobType`, `company`, `role`, `documentType` or `typology` |
| `filter` | Parameters that narrow the search, such as `companyId` |
| `multiple` | `true` for a list of records, `false` for one |
| `value` | The picked ids, bound to the argument they edit |
| `display` | The names of those ids, in the same order |

The cards use `client`, `department`, `role` and `typology`. The WebApp searches them with these lookups:

| Entity | Lookup |
|---|---|
| `client` | `commercialclients/lookup` with `getAllClients=true` |
| `department` | `departments/lookup` with `filterByCurrentUser=false` and `filterByPlannable=false` |
| `role` | `v3/roles/lookup` |
| `typology` | `v3/user-typologies/lookup`, with the `companyId` the card sends in `filter` |

### Functions

The basic catalog's functions (`formatDate`, `formatNumber`, `formatString`, `and`, `or`, `not` and the rest), plus `translate`.

`translate` returns a text in the user's language. Its arguments:

- `key`: a Skills Workflow translation key.
- `fallback`: the English text, shown when the client has no translation for the key.
- `params`: values for the `{{name}}` placeholders of the key and of the fallback.

A client without the Skills Workflow translations still shows readable text by using `fallback`.

## Card layout

The cards follow a few patterns from the basic catalog:

- A `Row` whose first child is a `caption` `Text` is a field: that text is the label, the next child is the value.
- A `Row` of `Column`s, each a caption and a value, puts two short fields on one line.
- A `Text` with the `h5` variant is a section heading.
- A `caption` `Text` directly under `root` is a note, such as where the proposed values came from.

## Return the decision

Every input the user can correct is bound to `/args/<argument>`, the tool argument it edits, and `updateDataModel` fills it with the value the agent proposed. The approval card's `EntityPicker` binds `value` to the ids argument and `display` to the names argument, and the client writes both when the user picks.

To decide, resume the run with one entry per interrupt:

```json
{
  "interruptId": "<interrupt id>",
  "status": "resolved",
  "payload": {
    "approved": true,
    "toolCall": {
      "callId": "<toolCallId>",
      "name": "<metadata.toolName>",
      "arguments": { }
    }
  }
}
```

- `arguments` is `metadata.arguments`, with the values the user changed under `/args` written over it. Send every other argument unchanged.
- A list edited row by row has an `include` flag on each row. Send only the rows with `include` set to `true`, without the flag.
- To decline, set `approved` to `false`. Add `reason` to tell the agent why.

## Example

The card for changing a user's hire date, as the agent server sends it. The components are cut down to the heading, one field and one input:

```json
[
  {
    "version": "v0.9.1",
    "createSurface": {
      "surfaceId": "approval-8b1e",
      "catalogId": "https://skillsworkflow.com/a2ui/v0_9/catalogs/approval/catalog.json"
    }
  },
  {
    "version": "v0.9.1",
    "updateComponents": {
      "surfaceId": "approval-8b1e",
      "components": [
        { "id": "root", "component": "Column", "children": ["title", "c3", "c6"] },
        {
          "id": "title", "component": "Text", "variant": "h4",
          "text": {
            "call": "translate",
            "args": {
              "key": "AiChatApprovalUserDetailsTitle",
              "fallback": "Change {{name}}'s dates and hours",
              "params": { "name": "Joana Reis" }
            }
          }
        },
        { "id": "c1", "component": "Text", "variant": "body", "text": "Joana Reis" },
        {
          "id": "c2", "component": "Text", "variant": "caption",
          "text": { "call": "translate", "args": { "key": "AiChatApprovalUserRolesUser", "fallback": "User" } }
        },
        { "id": "c3", "component": "Row", "children": ["c2", "c1"] },
        {
          "id": "c4", "component": "DateTimeInput", "enableDate": true, "enableTime": false,
          "label": { "call": "translate", "args": { "key": "AiChatApprovalUserDetailsHireDate", "fallback": "Hire date" } },
          "value": { "path": "/args/hireDate" }
        },
        {
          "id": "c5", "component": "Text", "variant": "caption",
          "text": { "call": "translate", "args": { "key": "AiChatApprovalUserDetailsHireDate", "fallback": "Hire date" } }
        },
        { "id": "c6", "component": "Row", "children": ["c5", "c4"] }
      ]
    }
  },
  {
    "version": "v0.9.1",
    "updateDataModel": {
      "surfaceId": "approval-8b1e",
      "path": "/",
      "value": { "args": { "hireDate": "2026-03-01" } }
    }
  }
]
```

If the user changes the date to 15 March before approving, the resume sends `"hireDate": "2026-03-15"` in `toolCall.arguments`.

## Rules and limitations

- The buttons that approve or decline are not components. The client draws them and sends the decision as the resume above.
- The cards contain no `Button`, `Modal`, `Video` or `AudioPlayer`. A client that cannot draw a component should show its `text` or `label`.
- A brief or a comment is shown as text and cannot be edited on the card. The user asks the agent for the change in the conversation.
- An action without a server-described card arrives with no `metadata.a2ui`.
- Agents connected through an external endpoint return text only and cannot send approval cards yet.

## Related articles

- [AI Assistant](/docs/ai/ai-assistant)
- [Tools](/docs/ai/ai-tools)
- [Add Your Own Skills, Agents and Tools](/docs/ai/ai-extend)
