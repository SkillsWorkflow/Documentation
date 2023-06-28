---
id:  google-drive
title: Google Drive
sidebar_label: Google Drive
---

### Description

The integration allows you to:

- Create automatically and organize a file structure in Google Drive
- Access to the folders and files available in Google Drive
- Let you team get quick and easy access to the files
- Share the direct link to the files

---

### Files

When a file is uploaded into Google Drive, it is automatically available in Skills Workflow.

- You can share your file by going into your document and easily select the file
- It will be available to add it into the document's description
- Or to post it on document's feed

<figure>

![img-box-shadow](/img/integrations/box1.png)
<figcaption>Posting file's link on the Project's feed</figcaption>
</figure>

---

### Folders

Not all folders are synched between the two systems:
- To launch Google Drive, click on the Cloud icon

<figure>

![img-box-shadow](/img/integrations/box2.png)
<figcaption>Cloud button to open Google Drive</figcaption>
</figure>

- There's a root folder setup in Skills Workflow and in Google Drive

<figure>

![img-box-shadow](/img/integrations/box3.png)
<figcaption>Root folder in Google Drive</figcaption>
</figure>

- Projects must be active and marked as "Deliverable" in the tab "Info"

<figure>

![img-box-shadow](/img/integrations/box4.png)
<figcaption>Mark as Deliverable in the option available in the "Info" tab</figcaption>
</figure>

- Jobs must be active, marked as "Deliverable" and his parent as well
- To automatically create the Template Sub-Folders, it is necessary to mark both options in the Additional Information tab of Job

<figure>

![img-box-shadow](/img/integrations/google-drive-userfields.png)
<figcaption>Automate job's folder creation in Google Drive</figcaption>
</figure>


Google Drive Folder field available in the Additional Information tab of each document:
- Will let you map to an existent folder's name
- Or to change the respective folder's name

Whenever a document is created in Skills Workflow, a folder is created under its parent document folder. The structure of the folders in Skills Workflow is:

- Root
    - Client
    -   Project
        -   Jobs
        -   Sub-Jobs template
    -   Estimate
    -   Expense
-   User
    
<figure>

![img-box-shadow](/img/integrations/box7.png)
<figcaption>Files structure is created automatically</figcaption>
</figure>

When a folder is created in Skills Workflow, it is created automatically in Google Drive.

<figure>

![img-box-shadow](/img/integrations/box8.png)
<figcaption>Folder structure in Google Drive</figcaption>
</figure>

---

### Synching
The synching is performed by a background process. Whenever a document is created or his folder name is changed in Skills Workflow, the process will replicate it in Google Drive.

- The synching process is bi-directional
- Skills Workflow has a reference of the ID of the files and folders in Google Drive
- The users will see the same file structure (starting on the root) in both systems