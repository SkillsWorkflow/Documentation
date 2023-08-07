---
id: employees  
title: Import Employees
sidebar_label: Employees
sidebar_position: 1
---

import ReactPlayer from 'react-player';

In this article, we walk you through the simple steps required to efficiently import your employee data, ensuring a smooth onboarding process. 

The employee importation process will:
- Create an employee
- Link the employee to the User and Company

<ReactPlayer controls muted url='/video/import-employee.mp4' />

:::caution
To import the data successfully, ensure that there is no duplicated entries in the system. 

The following combination must be unique:
- Name | Company | User | External Id | Max Value | Active
:::

Preparing your data file:
- Format your employee data file correctly for seamless importing.
- Ensure the data is organized and structured in a compatible format.
- Verify that all required fields are included and accurately populated.
- Consider any specific data formatting guidelines or restrictions outlined in the system documentation.
- Double-check for any inconsistencies or errors in the data to avoid issues during the import process.

:::danger Importing Employees for Existing Users
When importing an employee for a user who is already linked to a resource, a new employee entry will be created. 

However, please note that:
- The old link between user-employee will be removed - visible on the employee list.
- The new employee will be linked to the user on the employee list.
- The new imported employee will not be automatically updated in the user's profile - field named as "Resource".
:::

### FAQ

#### How do I check for duplicated entries?

To check for duplicated employees, please follow the next steps:
1. Access the employee list.
2. Export all data to .xls.
3. Open the .xls file and search for duplicated entries.
4. Take note of the duplicated entries that need to be removed.
5. Return to the employee list.
6. Delete the duplicated entries.
