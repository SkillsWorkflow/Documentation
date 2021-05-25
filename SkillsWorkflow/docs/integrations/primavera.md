---
id:  primavera
title: 'Primavera'
sidebar_label: Primavera
---

<h3>Description</h3>

This is the Documentation of how the Integration between the ERP Primavera and Skills Workflow work. This documentation is for Skills Workflow located in the Cloud.

---

<h3>Data Exchange Technology</h3>

Based on Views. The integration runs in the cloud.
The scope of data exchanged on this integration includes:

<h3>From Primavera to Skills Workflow</h3>
Master data
- Clients
- Suppliers
- VAT
- Currency
- Payment Conditions
- Articles
- Reversal Reasons

---

<h3>Data Exchange (To Skills Workflow)</h3>

This section describes the Data exchanged between systems. Please see the data exchanged.
The data is exchanged with Views available in the system.

Financial Documents
- Expenses
- Invoices/Bills
- Purchase Orders

<h3>Data Exchange (inbound)</h3>
This section describes the Data exchanged between systems. Please see the data exchanged.
The data is exchanged with Views available in the system.

<Tabs
  groupId="actions"
  defaultValue="start"
  values={[
    {label: 'Articles', value: 'articles'},
    {label: 'Client', value: 'client'},
    {label: 'Currency', value: 'currency'},
    {label: 'Employee', value: 'employee'},
    {label: 'Expense Item Type', value: 'expenseitemtype'},
    {label: 'Reversal Reason', value: 'reversalreason'},
    {label: 'Supplier', value: 'supplier'},
    {label: 'VAT', value: 'vat'}
  ]
}>
<TabItem value="articles">
Articles

#### Articles are received by Skills Workflow. 

* New Articles created in Primavera are automatically created in Skills Workflow.
* Any change in the Articles data is also synched with Skills Workflow.
Articles Data Exchanged

#### Fields that are populated in Skills Workflow are:
* Id
* Name
* VatDeductiblePercentage
* Action
* Mappings
</TabItem>

**The following Employee fields can be mapped:** <br />

`Employees` are received by Skills Workflow. 

New Employees created in Primavera are automatically created in Skills Workflow.
After creation, the only fields updated are "IsActive" and "Termination Date".
Employees Data Exchanged

The fields that are populated into Skills Workflow:

- Name
- UserName
- Company
- Company Code
- Department
- Typology
- E-mail
- Phone
- Hire Date
- IsActive
- SSO Username

Further, in the External Settings if the fields:

- Department External Id
- Typology External Id

Are filled, all the employees will have the same department and typology by default even though comes a different one on the file.

All active status coming from Primavera should be populated on the field: "User Active Status". i.e, leave status as "L" and active as "A".

Terminated employees will be automatically inactivated in Skills Workflow.
SSO Username will be populated with e-mail coming from HRLink.
External ID is populated with the user e-mail only in creation.

---

<h3>Conclusion</h3>

The contents of this document create the foundation for data and process communication methodology between Skills Workflow and Agencies. The current known data and process transfers are contained in this document but more may be created as additional data and process needs are discovered.
