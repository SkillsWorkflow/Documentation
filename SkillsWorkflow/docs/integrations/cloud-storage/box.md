---
id: box
title: Box
sidebar_label: Box
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