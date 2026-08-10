---
id: ziflow
title: 'ZiFlow'
sidebar_label: ZiFlow
---

### Description

This article describes the integration between **ZiFlow** and `Skills Workflow`.

ZiFlow is the online proofing tool where creative work is reviewed and approved. This integration closes the loop between the review and the job: when a proof moves in ZiFlow, the corresponding deliverable moves in Skills Workflow, automatically.

Without it, someone has to watch ZiFlow and manually drag jobs through their stages — which is exactly the kind of double bookkeeping that makes job status untrustworthy. With it, the stage a job is in reflects what the reviewers actually did.

---

### Data Exchange Technology

The integration is delivered as a **Marketplace automation**, not as a scheduled job. It is event-driven:

1. A reviewer acts on a proof in ZiFlow.
2. ZiFlow fires a webhook into Skills Workflow.
3. The automation reads the proof back from the ZiFlow API to confirm what happened.
4. The matching deliverable is transitioned to the corresponding stage.

Because it is event-driven, the update is effectively immediate — there is no waiting for a nightly run.

---

### What Triggers a Stage Change

| Event in ZiFlow | Stage applied in Skills Workflow |
| --- | --- |
| The proof finishes processing and is ready for review | **Proofing** |
| A reviewer returns a decision of *changes required* | **Changes Required** |

Any other proof event is ignored, so unrelated ZiFlow activity does not create noise in the job history.

The automation also checks the deliverable's current stage before acting. If the job is already in the target stage, nothing happens — so a proof that generates several events does not produce a string of duplicate transitions.

---

### How Proofs and Deliverables Are Linked

The link lives on the ZiFlow side. Each proof carries a **custom property group named "Skills Workflow"** containing a **DeliverableId** property, which holds the identifier of the deliverable in Skills Workflow.

That property is what the automation uses to find the right job. A proof created without it cannot be matched, and the event is ignored.

---

### What the Agency Needs to Provide

- A ZiFlow account with API access, and an API token. The token is stored in Skills Workflow as a configuration key and is never held in the automation itself.
- A webhook configured in ZiFlow pointing at the Skills Workflow automation.
- The **Skills Workflow → DeliverableId** custom property configured on the proofs, so proofs can be matched to jobs.
- Confirmation of which stages in the agency's workflow correspond to *Proofing* and *Changes Required*.

---

### Package Contents

To enable this integration, install the automation from the Marketplace. It ships as a single automation workflow, plus the configuration key that holds the ZiFlow token.

---

### Monitoring and Error Handling

The automation records each execution, including the last time it ran and whether it succeeded. Failures are visible in the automation's log inside Skills Workflow.

Because the flow is triggered by ZiFlow, an event that arrives while Skills Workflow is unavailable is not retried by the platform — ZiFlow's own webhook retry policy applies.

---

### Good to Know

- Stage names are configurable. If the agency renames the *Proofing* or *Changes Required* stages, the automation has to be updated to match.
- The integration is one-way: ZiFlow drives Skills Workflow. Moving a job by hand in Skills Workflow does not change the proof in ZiFlow.
- Only the two events above are handled today. Other proof decisions — approved, approved with changes — can be added by extending the automation.
