---
id:  system-roles-profiles
title: System Roles and Profiles
sidebar_label: System Roles and Profiles
---

## User accesses are defined by Roles

- Virtually anything in Skills Workflow can be controlled by specific roles.
- That means that you can go as further as specified for every single user, what he can or cannot see or change.
- All you need to do is grant him or deny him a role

## Categories of roles
There are 7 categories of roles, which define what you can or cannot do with a certain module or document.

- Read - Gives you read-only rights, i.e you can see but cannot change
- Write - Allows you to edit or modify
- Create - Allows you to create
- Save - Includes the Read, Write and Create
- Navigate - Allows you to navigate to a certain module
- All - Grants you access to all documents/data in a certain module
- Approve - Gives you access to do approvals on a specified module.

These suffixes together with the document or module name constitute the role itself.
E.g. The role TimesheetNavigate will allow you to navigate to the Timesheet module.

## System Documents

- Client - Access to client
- Chat - Access to chat
- Crm - Access to the Clients List
- Contracts - Access to Fees
- Deliverable - Access to Jobs
- Estimate - Access to Estimates
- Expense - Access to Expenses
- Project - Access to Projects
- Ratecard - Access to Ratecards
- Report - Access to Reports
- Files - Access to files uploaded on documents
- Gantt - Access to the Gantt chart
- Assignment - Access to Team Assignments
- Timesheet - Access to Timesheets
- Vacation - Access to Leaves

## Maintenance Documents

- AccountGroup
- Account Management
- Costs
- Billing Product
- Billing Client
- Custom Views

## Creating Profiles

- You can group a set of roles into what we call a Profile.
- Instead of granting the users loose roles, you give them pre-set Profiles instead.
- Profiles make user accesses much easier to maintain and control.
- Profiles are also completely customizable in terms of roles inside and also naming.
- A typical example is the Account Profile which is comprised by the roles: DeliverableSave, ChatSave, EstimateRead, ProjectSave, VacationSave, TimesheetSave, TimesheetApprove, GanttSave.

## Standard Profiles
We have a standard list of Profiles that come by default in Skills Workflow.

- Requester Profile - Given to whoever will create Jobs and Projects. Typically all Accounts.
- Responsible Profile - Give to supervisors that will not create Projects or Jobs but will add their inputs. E.g. Department Heads.
- Executor Profile - Given to actual executors such as creatives, copywriters, producers, etc.
- Finance Profile - Given to finance users which usually have full visibility over everything.
- HR Profile - Given to anyone from Human Resources which will do the maintenance of user leaves.

- MaintenanceAccessProfile - Given to IT's who will be the administrators of the system.
- MaintenanceReadProfile - Given to IT's who will be the administrators of the system.


## Document Access Control - General Considerations 
Document specific roles are always validated before the access control rules. For instance, in a Project read operation, if the User does not have the ProjectRead role (document or module name with the operation suffix to check) then it does not have read access to any Project and rules will not apply. Each document operation is validated by a specific type of role:

- Read Operations - *Read roles
- Create Operations - *Create roles
- Write Operations - *Write roles
- Delete Operations - *Write roles
- List Operations - *Navigate roles

Document Access can have two sets of rules. Default rules define the initial set over which the Team Access rules will apply

## All Access Rules

A Document is only accessible if the User has access to at least the Document's Company. A Draft Document is accessible only to the User which created it.

If the user does not have All Access Role it will have access only to documents where the User is currently assigned and the assignment type allows read or write access in the document Stage;
If the user has All Access Role: it will have access to all documents, respecting the document's hierarchy. 


### Hierarchy All Access Examples

- #1 - If the User does not have AllProjectsAccess Role: it will have access only to Projects where the User is currently assigned and the assignment type allows read or write access in the Project Stage;
- #2 - If the User has AllProjectsAccess Role but not AllClientsAccess Role: it will have access to all Projects for Commercial Clients which the User has access plus all Projects from rule #1;
- #3 – If the User has AllProjectsAccess Role and AllClientsAccess Role: it has access to all Projects;
- #4 - If the User does not have AllJobsAccess Role: it will have access only to Jobs where the User is currently assigned and the assignment type allows read or write access in the Job Stage;
- #5 - If the User has AllJobsAccess Role but not AllProjectsAccess Role: it will have access to all Jobs for Projects where the User is currently assigned and the assignment type allows read or write access in the Project Stage plus all Jobs from rule #1;
- #6 - If the User has AllJobsAccess Role and AllProjectsAccess Role but not AllClientsAccess Role: it will have access to all Jobs from all Projects for Commercial Clients which the User has access plus all Jobs from rule #2 plus all Jobs from rule #1;
- #7 – If the User has AllJobsAccess Role, AllProjectsAccess Role, and AllClientsAccess Role: it has access to all Jobs;
### No hierarchy All Access Examples

- Price Tables
- Supplier Notes
- Client Credit Notes
- Supplier Invoices
- Rate Cards
- Purchase Orders
- Bills

- #8 - If the User does not have AllSupplierNotesAccess Role: it will have access only to Supplier Notes where the User is currently assigned and the assignment type allows read or write access in the Supplier Note Stage;
- #9 – If the User has AllSupplierNotesAccess Role: it has access to all Supplier Notes inside the User Company, as this document has no hierarchy;









