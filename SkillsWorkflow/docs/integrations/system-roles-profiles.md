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

## Roles representing system features

- Chat - Access to chat
- Crm - Access to the Clients List
- Files - Access to files uploaded on documents
- Gantt - Access to the Gantt chart
- Assignment - Access to Team Assignments
- Timesheet - Access to Timesheets
- Vacation - Access to Leaves

## Roles representing Documents

- Contract - Access to Fees
- Deliverable - Access to Jobs
- Estimate - Access to Estimates
- Expense - Access to Expenses
- Project - Access to Projects
- Ratecard - Access to Ratecards
- Report - Access to Reports

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
- Maintenance Profile - Given to IT's who will be the administrators of the system.

## Document Access Control - General Considerations 
Document specific roles are always validated before the access control rules. For instance, in a Project read operation, if the User does not have the ProjectRead role (document or module name with the operation suffix to check) then it does not have read access to any Project and rules will not apply. Each document operation is validated by a specific type of role:

- Read Operations - *Read roles
- Create Operations - *Create roles
- Write Operations - *Write roles
- Delete Operations - *Write roles
- List Operations - *Navigate roles

Document Access can have two sets of rules. Default rules define the initial set over which the Team Access rules will apply.

## Job Access Rules 

Default Access Roles: DeliverableNavigate, DeliverableRead, DeliverableWrite, DeliverableCreate

Default Access:

- A Job is accessible if the User has access to the Job Company. A Draft Job is accessible only to the User which created it.
Team Access:

- #1 - If the User does not have AllJobsAccess Role: it will have access only to Jobs where the User is currently assigned and the assignment type allows read or write access in the Job Stage;
- #2 - If the User has AllJobsAccess Role but not AllProjectsAccess Role: it will have access to all Jobs for Projects where the User is currently assigned and the assignment type allows read or write access in the Project Stage plus all Jobs from rule #1;
- #3 - If the User has AllJobsAccess Role and AllProjectsAccess Role but not AllClientsAccess Role: it will have access to all Jobs from all Projects for Commercial Clients which the User has access plus all Jobs from rule #2 plus all Jobs from rule #1;
- #4 – If the User has AllJobsAccess Role, AllProjectsAccess Role, and AllClientsAccess Role: it has access to all Jobs;

## Project Access Rules 
Default Access Roles: ProjectNavigate, ProjectRead, ProjectWrite, ProjectCreate

Default Access:

A Project is accessible if the User has access to at least a Project Company. A Draft Project is accessible only to the User which created it.
Team Access:

- #1 - If the User does not have AllProjectsAccess Role: it will have access only to Projects where the User is currently assigned and the assignment type allows read or write access in the Project Stage;
- #2 - If the User has AllProjectsAccess Role but not AllClientsAccess Role: it will have access to all Projects for Commercial Clients which the User has access plus all Projects from rule #1;
- #3 – If the User has AllProjectsAccess Role and AllClientsAccess Role: it has access to all Projects;

## Estimate Access Rules 

Default Access Roles: EstimateNavigate, EstimateRead, EstimateWrite, EstimateCreate

Default Access:

- An Estimate is accessible if the User has access to the Estimate Company. A Draft Estimate is accessible only to the User which created it.

Team Access:

- #1 - If the User does not have AllEstimatesAccess Role: it will have access only to Estimates where the User is currently assigned and the assignment type allows read or write access in the Estimate Stage;
- #2 – If the User has AllEstimatesAccess Role: it has access to all Estimates;

## Fee Access Rules 

Default Access Roles: ContractNavigate, ContractRead, ContractWrite, ContractCreate

Default Access:

- A Fee is accessible if the User has access to at least a Fee Company. A Draft Fee is accessible only to the User which created it.
Team Access:

- #1 - If the User does not have AllContractsAccess Role: it will have access only to Fees where the User is currently assigned and the assignment type allows read or write access in the Fee Stage;
- #2 - If the User has AllContractsAccess Role but not AllClientsAccess Role: it will have access to all Fees for Commercial Clients which the User has access plus all Fees from rule #1;
- #3 – If the User has AllContractsAccess Role and AllClientsAccess Role: it has access to all Fees;

## Expense Sheet Access Rules
Default Access Roles: ExpenseSheetNavigate, ExpenseSheetRead, ExpenseSheetWrite, ExpenseSheetCreate

Default Access:

N/A
Team Access:

- #1 - If the User does not have AllExpenseSheetsAccess Role: it will have access only to Expense Sheets where the User is currently assigned and the assignment type allows read or write access in the Expense Sheet Stage;
- #2 – If the User has AllExpenseSheetsAccess Role: it has access to all Expense Sheets;

## Expense Access Rules 
Default Access Roles: ExpenseNavigate, ExpenseRead, ExpenseWrite, ExpenseCreate

Default Access:

N/A
Team Access:

- #1: User will have access only to Expenses where the User is currently assigned and the assignment type allows read or write access in the Expense Stage;

## Rate Cards Access Rules 

Default Access Roles: RateCardNavigate, RateCardRead, RateCardWrite, RateCardCreate

Default Access:

- A Rate Card is accessible if the User has access to the Rate Card Company.

Team Access:
- N/A

## Price Tables Access Rules 
Default Access Roles: PriceTableNavigate, PriceTableRead, PriceTableWrite, PriceTableCreate

Default Access:

- A Price Table is accessible if the User has access to the Price Table Company.

Team Access:

- N/A

## Purchase Order Access Rules

Default Access Roles: PurchaseOrderNavigate, PurchaseOrderRead, PurchaseOrderWrite, PurchaseOrderCreate

Default Access:

- A Purchase Order is accessible if the User has access to the Purchase Order Company.

Team Access:

- #1 - If the User does not have AllPurchaseOrdersAccess Role: it will have access only to Purchase Orders where the User is currently assigned and the assignment type allows read or write access in the Purchase Order Stage;
- #2 – If the User has AllPurchaseOrdersAccess Role: it has access to all Purchase Orders;

## Bill Access Rules
Default Access Roles: BillNavigate, BillRead, BillWrite, BillCreate

Default Access:

- A Bill is accessible if the User has access to the Bill Company.

Team Access:

- #1 - If the User does not have AllBillsAccess Role: it will have access only to Bills where the User is currently assigned and the assignment type allows read or write access in the Bill Stage;
- #2 – If the User has AllBillsAccess Role: it has access to all Bills;

## Supplier Invoice Access Rules
Default Access Roles: SupplierInvoiceNavigate, SupplierInvoiceRead, SupplierInvoiceWrite, SupplierInvoiceCreate

Default Access:

- A Supplier Invoice is accessible if the User has access to the Supplier Invoice Company.

Team Access:

- #1 - If the User does not have AllSupplierInvoicesAccess Role: it will have access only to Supplier Invoices where the User is currently assigned and the assignment type allows read or write access in the Supplier Invoice Stage;
- #2 – If the User has AllSupplierInvoicesAccess Role: it has access to all Supplier Invoices;

## Credit Client Note Access Rules
Default Access Roles: ClientCreditNoteNavigate, ClientCreditNoteRead, ClientCreditNoteWrite, ClientCreditNoteCreate

Default Access:

- A Client Credit Note is accessible if the User has access to the Client Credit Note Company.

Team Access:

- #1 - If the User does not have AllClientCreditNotesAccess Role: it will have access only to Client Credit Notes where the User is currently assigned and the assignment type allows read or write access in the Client Credit Note Stage;
- #2 – If the User has AllClientCreditNotesAccess Role: it has access to all Client Credit Notes;

## Supplier Note Access Rules

Default Access Roles: SupplierNoteNavigate, SupplierNoteRead, SupplierNoteWrite, SupplierNoteCreate

Default Access:

- A Supplier Note is accessible if the User has access to the Supplier Note Company.

Team Access:

- #1 - If the User does not have AllSupplierNotesAccess Role: it will have access only to Supplier Notes where the User is currently assigned and the assignment type allows read or write access in the Supplier Note Stage;
- #2 – If the User has AllSupplierNotesAccess Role: it has access to all Supplier Notes;