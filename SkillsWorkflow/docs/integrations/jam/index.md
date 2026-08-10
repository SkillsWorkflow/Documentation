---
title: 'JAM'
sidebar_label: JAM
sidebar_position: 1
---

### Description

This article describes the integration between **JAM** and `Skills Workflow`.

JAM is the agency's job administration system. This integration makes Skills Workflow the place where the commercial structure is maintained, and JAM the place where the administrative side of the job lives — with the two kept in step automatically.

The clearest consequence for the agency: **client and product maintenance is switched off in JAM once the integration is enabled**. There is exactly one place to create a client, and it is Skills Workflow. That removes the most common source of mismatched records between the two systems.

---

### Data Exchange Technology

The exchange runs over **REST services**, using the Skills Workflow Integration API. Requests are authenticated with credentials issued by the Skills Workflow team.

Calls can optionally be made *on behalf of* a specific user, so that an action arriving from JAM is attributed to the right person in Skills Workflow and respects their permissions — rather than everything appearing to come from a generic integration account.

---

### What Goes Out To JAM

| Sent to JAM | Known in JAM as | Notes |
| --- | --- | --- |
| Clients | *Anunciante* | Created and updated automatically from Skills Workflow |
| Products | *Produto* | Created with their client, name and code |
| Projects | *Campanha* | Sent automatically on creation |
| Jobs | — | Sent when the job changes status in Skills Workflow |

**How jobs are triggered.** Jobs are not sent on a timer. They are exported when a job moves between statuses in Skills Workflow and that transition is configured with the **SendToExternal** action. This means the agency controls exactly which stage changes push a job to JAM, by configuring the workflow rather than by asking for a code change.

---

### What Comes Into Skills Workflow

| Received from JAM | Notes |
| --- | --- |
| Job status changes | A status change in JAM moves the job in Skills Workflow, and can post a comment against it |
| Team assignments | People can be added to or removed from the job team |
| Files | Uploaded into the job feed in Skills Workflow, so the conversation and the assets stay together |
| Dates | The requested date can be updated |

---

### What the Agency Needs to Provide

- Network access between JAM and Skills Workflow.
- Confirmation of which workflow transitions should carry the **SendToExternal** action.
- Agreement on the status codes used on both sides, so a status change in one system maps to the right stage in the other.

Skills Workflow issues the API credentials.

---

### Good to Know

- Clients and products cannot be edited in JAM while the integration is enabled — those modules are disabled by design.
- Projects and jobs are created in Skills Workflow. JAM changes their status and content; it does not create them.
- Because job export is driven by workflow transitions, adding a new stage to the workflow does not automatically export from it — the action has to be configured on that transition.

---

For the API calls, payloads and field mappings, see the **[Technical Reference](./reference)**.
