---
id: 2026-04-16-RCA-Mitigated-Document-Forms-West-Europe
title: RCA - Mitigated - Document Forms - West Europe - 16-04-2026
description: "On 16 April 2026, after a product installation, some customers experienced issues when opening document creation forms."
sidebar_label: RCA - Mitigated - Document Forms - West Europe - 16-04-2026
---

### Impact summary

On 16 April 2026, after a product installation, some customers experienced issues when opening document creation forms.
In affected scenarios, forms were displayed without content and controls were not rendered correctly, preventing users from creating or editing documents as expected.

The issue was identified shortly after the deployment by the team during the investigation process.
After analysis, it was determined that a configuration parameter had been enabled by default during the installation process.
For customers using customized document forms instead of the standard forms, this configuration prevented the forms from being rendered correctly.

The issue was corrected promptly after identification by reverting the affected configuration behaviour and validating the impacted scenarios.

### RCA

The root cause of the incident was a product installation change that enabled a configuration parameter by default.
This parameter was compatible with standard form implementations but introduced compatibility issues in environments using customized document forms.

As a result, the application failed to correctly render controls and content in the document creation forms for affected customers.

Although the issue was quickly identified and mitigated by the team, the incident exposed a gap in the validation process for non-standard customer configurations and usability scenarios.

### Next steps

Our customers rely on document workflows being consistently available and functional, and we recognize the impact this incident had on affected operations.

As next steps, we will reinforce the QA validation process with a more proactive approach focused on configuration-sensitive changes.
Additional usability and regression tests will also be introduced for critical workflows, especially for customers using customized forms and non-standard implementations.

We are also reviewing deployment validation procedures to ensure configuration defaults are properly assessed against different customer scenarios before release.