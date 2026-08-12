---
id: box
title: Box
description: "Box is where the organisation's files live, with its own sharing, permissions, versioning and compliance controls."
sidebar_label: Box
---

### Description

This article describes the integration between **Box** and `Skills Workflow`.

Box is where the organisation's files live, with its own sharing, permissions, versioning and compliance controls. Skills Workflow is where the work those files belong to is run.

The integration means neither has to be given up. Files stay in Box — governed by Box's security, and reachable by everyone who already works there — while the people delivering the work upload, preview and find them from inside the job in Skills Workflow, without switching tools or hunting for the right folder.

Two things make that work:

- **The folder structure builds itself.** Creating a client, a project or a job in Skills Workflow creates the matching folder in Box, nested correctly, following the agency's own template. Nobody creates folders by hand, and nobody has to remember the naming convention.
- **Files are accessed as the person, not as the system.** Uploads and previews run under the individual user's own Box permissions, so what someone can see in Skills Workflow is exactly what they are entitled to see in Box.

The result is that the file is in one place, once, with one set of permissions — and it is reachable from the job without anyone maintaining a parallel folder tree.

---

### What the User Sees

- **Folders appear automatically** as clients, projects and jobs are created, following the hierarchy Client → Project → Job → the agency's job folder template.
- **Files are uploaded from inside Skills Workflow**, straight into the mapped Box folder.
- **Files are previewed in place**, without downloading them or opening Box.
- **Comments and annotations** can be made on the file, when enabled.
- **Shared links stay consistent** between the two systems.

---

### What the Agency Needs to Provide

- **A Box account and a custom Box App**, configured as described below, with the client id and secret held in Skills Workflow.
- **A job folder template** defining the folders each new job should get.
- **Matching e-mail addresses** between Skills Workflow and Box, since this is how a user is identified in order to act under their own permissions.

---

### Good to Know

- **Permissions come from Box.** Skills Workflow does not grant access to files; a user sees what their Box account allows.
- **Each record stores its Box folder reference**, which is what links the two — see the *Box Folder* field below.
- **Client folder creation is currently switched off** in this configuration; project and job folders are unaffected. See the export reference at the end of this page.

---

## 1. Overview
The **Box integration** allows automatic management of folders and files directly from the Skills Workflow platform, maintaining a synchronized hierarchy of clients, projects, and jobs with the organization’s Box environment.  
The goal is to centralize document and file management within Skills Workflow while retaining Box’s collaboration and security features.

<!-- image: general integration diagram -->

---

## 2. Authentication
The integration uses the **OAuth2 Client Credentials** flow configured in a custom **Box App**.

**Required configuration in the Box App:**
- Enable the following options:
  - “Allow as-user header”
  - “Generate user access token”

**Keys and tokens:**
- `Client ID` and `Client Secret` are obtained from the Box App and configured in the Skills Workflow **System Parameters**.
- Access tokens are generated through an **automation workflow** in Skills Workflow.
  - Application tokens are used to create global folders.
  - User tokens are used to upload and access files according to user permissions.
- The **refresh token** is automatically managed by the backend through an automation workflow.

<!-- image: Box app configuration with enabled options -->

---

## 3. Supported Flows
- Automatic folder creation based on the Skills structure:
- Client > Project > Job > Job folders template (Job folders templates are defined in the System Parameters.)
- File uploads are performed directly in Skills through the embedded **Box widget**, respecting the mapped Box folder.
- File preview directly inside Skills.
- Synchronization of shared links between Box and Skills.
- Automatic folder creation when new objects (Clients, Projects, Jobs) are created in Skills.

<!-- image: folder structure example (Skills > Box) -->

---

## 4. Folder Configuration (User Field)
Each **Job** or **Document** includes a *User Field* named `Box Folder` that stores the **Box Folder ID**.  
This ID is used by the Box uploader to associate uploaded files with the correct folder.

<!-- image: example of user field "Box Folder" -->

---

## 5. Webhooks
Webhooks are configured within **Skills Workflow** to trigger **folder creation in Box** when documents or jobs are created.  
These webhooks are internal to Skills Workflow and connect directly to automation workflows responsible for folder management.

<!-- image: webhook configuration example -->

---

## 6. Automation Workflows
**Automation workflows** can automatically create and map Box folders.

**Example:**
- **Trigger:** `Job Created`
- **Actions:**
1. `Create Box Folder`
2. Update the `Box Folder` user field in the Job.

This ensures every new job is immediately associated with its corresponding Box folder following the defined hierarchy.

<!-- image: automation workflow example -->

---

## 7. Skills Workflow Configuration

### Global Activation
Navigate to:  
`Maintenance > Configurations > System > Preview > Box Integration`  
Enable the option: **Enabled**

### Additional Options
- Enable **Box Annotations** to allow commenting directly in Box.  
- Define file **access levels** according to user roles.  
- At document level:  
`Document > Configurations > FileSystem > Enable Box`

### User Mapping
- User mapping is based on the **email address** in the user’s Skills profile.  
- The same email must exist in Box.  
- The Box App User must have access to these users to obtain their **Box User ID** and perform file operations under their permissions.

<!-- image: configuration screen showing Enable Box and user mapping -->

---

## 8. Common Errors and Debugging

| Issue | Probable Cause | Solution |
|--------|----------------|-----------|
| “BoxNoFolderConfigured” | Missing *Box Folder* field value | Verify if the automation workflow created the folder correctly |
| Token expired | Session expired or refresh token error | Trigger new OAuth2 authentication |
| Upload not visible in Box | Folder creation automation failed | Check automation workflow logs |
| User cannot access file | Incorrect email mapping | Confirm user email in Box matches Skills profile |
| Webhook not triggering | Incorrect configuration | Review webhook or automation trigger setup |

<!-- image: example of automation or integration log output -->

---

## 9. Marketplace Export Reference

### Components

| Name | Type | Version | Stage | Role |
| --- | --- | --- | --- | --- |
| Box - Create client folder | Webhook | 1 | Active | Fires on Commercial Client creation |
| Box - Create client folder | Automation | 2 | **Disabled** (`active: false` in the export) | Would create the client's Box folder — currently switched off |
| Box - Create job folder | Webhook | 1 | Active | Fires on Deliverable (job) creation |
| Box - Create job folder | Automation | 3 | Active | Creates the job's Box folder |
| Box - Create project folder | Webhook | 1 | Active | Fires on Project creation |
| Box - Create project folder | Automation | 4 | Active | Creates the project's Box folder |
| Box - Get access token | Automation | 5 | Active | Shared helper: gets an enterprise (app) or per-user Box access token |
| Box - Ziflow - Create temporary shared link | Automation | 1 | Active | Creates temporary Box shared links for a list of files, for use by [Ziflow](../ziflow) |
| Box | System Parameter | 1 | Active | Box app credentials (Developer Token, Client Id/Secret, Box Subject Id/Type, Grant Type, Root Folder) |
| Box | Workspace | 1 (Job) / 2 (Project) / 2 (Commercial Client) | Active | The embedded Box panel shown on Job, Project and Commercial Client records |
| GetParentBoxFolderId | Query | 1 | Active | Looks up a Deliverable's parent folder id, to nest a job folder under its project |

Source: `[Box] [Integrations] Box - Create client folder v1 (Webhook) {Active}.json`, `[Box] [Integrations] Box - Create client folder v2 (Automation) {Active}.json`, `[Box] [Integrations] Box - Create job folder v1 (Webhook) {Active}.json`, `[Box] [Integrations] Box - Create job folder v3 (Automation) {Active}.json`, `[Box] [Integrations] Box - Create project folder v1 (Webhook) {Active}.json`, `[Box] [Integrations] Box - Create project folder v4 (Automation) {Active}.json` (exported 3 times, same content), `[Box] [Integrations] Box - Get access token v5 (Automation) {Active}.json`, `[Box] [Integrations] Box - Ziflow - Create temporary shared link v1 (Automation) {Active}.json`, `[Box] [Integrations] Box v1 (System Parameter) {Active}.json`, `[Box] [Integrations] Box v1 (Workspace) {Active}.json`, `[Box] [Integrations] Box v2 (Workspace) {Active}.json` (job/project/client variants), `[Box] [Integrations] GetParentBoxFolderId v1 (Query) {Active}.json`.

:::caution Client folder creation is switched off
Unlike the job and project folder automations, `Box - Create client folder` (v2) is exported with `"active": false` — its webhook is still Active and will fire, but the automation it calls will not create a folder. As exported, new clients do not get an automatic Box folder; only projects and jobs do.
:::

### How It Works

- Each of the three "Create ... folder" automations calls `Box - Get access token` (via `ExecuteIntegrationWorkflow`) for an app-level token, then `POST https://api.box.com/2.0/folders` to create the folder (job folders look up their parent project's folder id via `GetParentBoxFolderId` so they nest correctly), and writes the new folder id back onto the record's `Box Folder` custom field (`PUT /api/v3/documentUserFieldValues`).
- `Box - Get access token` exchanges the app credentials from the `Box` System Parameter for an enterprise access token (`POST https://api.box.com/oauth2/token`, `grant_type` from the parameter). If the caller passes an `x-userid` header, it additionally looks up that Skills Workflow user's e-mail and resolves the matching Box user (`GET https://api.box.com/2.0/users?filter_term=`), for operations that should run as that person rather than the app.
- `Box - Ziflow - Create temporary shared link` gets an access token the same way, then loops over a list of files and creates a temporary shared link for each (`PUT https://api.box.com/2.0/files/{id}?fields=shared_link`) — this is what feeds Box file previews into [Ziflow](../ziflow) proofing.

### Configuration

- System Parameter **`Box`** — `DeveloperAccessToken`, `ClientId`, `ClientSecret`, `BoxSubjectId`, `BoxSubjectType`, `GrantType`, `RootFolder`. Values are redacted in the export.
- Custom field **`Box Folder`** on Job/Project/Commercial Client — stores the Box folder id.

### Open Questions

- Whether client-folder auto-creation being disabled is intentional (e.g. client folders are created some other way) or an oversight is not determinable from the export.