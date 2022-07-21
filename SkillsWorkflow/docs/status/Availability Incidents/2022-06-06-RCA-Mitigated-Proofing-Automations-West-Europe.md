---
id:  2022-06-06-RCA-Mitigated-Proofing-Automations-West-Europe
title: RCA - Mitigated - Proofing Automations - West Europe - 06-06-2022
sidebar_label: RCA - Mitigated - Proofing Automations - West Europe - 06-06-2022
---

# Impact summary

Between 23 March 16:28 UTC and 31 March 15:29, users reported some tasks getting stuck at the "Proof ID Generated" stage despite of already having Proofs created.

After conducting an investigation, the team figured there was a misconfiguration in the automation responsible for generating Proof IDs and Creating new Proofs at the task level.

The cases where the issue was reported where manually dealt by the team. Later on, the fix was applied, tested and put in Production to mitigate possible future cases.

# RCA

Whenever a Proof is created, 2 automations run on the background: one to generate a proof ID and another to create the proof.

The team concluded that the automation which indicates the "ID was generated" was taking longer than the automation which indicates that the "Proof was created" (The time taken between these two events is about fraction of seconds and only occurs occasionally)

In summary, proofs were being created without an ID and the task was being kept at the "Proof ID generation" stage because the proof was already created. 

To correct the issue, the team created a dependency so that the second automation (Proof creation) would only start running after the first one (Proof ID generation) was finished.

# Next Steps

We understand the impact these issues have on our customers and that's why Skills Workflow is committed to continuously improving our platform.

Besides from fixing the bug that lead to this incident, we are on the lookout and ready to action in case this incident reoccurs. 
