---
id: cloud-storage
title: Cloud Storage
sidebar_label: Cloud Storage
---

Skills Workflow supports integrations with several cloud-based file storage platforms, allowing users to access, preview, and attach documents directly within the platform.

These integrations aim to streamline document management processes, enabling real-time access to files stored externally, while maintaining permissions and access control managed by your identity provider.

Currently supported providers include:

- [Box](./box)
- [Google Drive](./google-drive)
- [Microsoft SharePoint](./microsoft-sharepoint)

---
### General Configuration Guidelines

1. The integration must be enabled by the Skills Workflow support team for your tenant.
2. An application (client) may need to be registered in the respective platform (e.g. Box, Google Drive or Microsoft SharePoint).
3. The system must be provided with access credentials (client ID, client secret or token) depending on the provider.
4. Permissions should be configured to allow file access, read-only or read-write depending on the intended use.
5. Users must be authenticated in the identity provider that grants access to the external file storage.

<figure>

![img-box-shadow](/img/integrations/cloudstorage.png)
<figcaption>External file picker embedded in Skills Workflow</figcaption>
</figure>

:::info
Skills Workflow does not store external files. All documents remain stored and secured in your cloud provider and are only referenced within the platform.
:::

:::tip
You can control which users have access to each storage provider through role-based permissions or custom rules in your identity provider.
:::

---
### Requirements

- Internet access to the storage provider’s API endpoints
- Valid credentials (OAuth or token-based)
- User mapping between Skills Workflow and the provider (typically via email or UPN)

---
### Support

If you need help with the setup or want to enable any of these integrations, please contact the Skills Workflow support team or your technical account manager.