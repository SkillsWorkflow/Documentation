---
id:  primavera
title: 'Primavera'
sidebar_label: Primavera
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Description

This is the Documentation of how the Integration between the ERP Primavera and Skills Workflow work. This documentation is for Skills Workflow located in the Cloud.

---

### Data Exchange Technology

Based on Views.

The ERP will be installed locally on a server.

The scope of data exchanged on this integration includes:


### From Primavera to Skills Workflow

Master data

- Clients
- Suppliers
- VAT
- Currency
- Payment Conditions
- Articles
- Reversal Reasons

### From Skills Workflow to Primavera

Financial Documents

- Expenses
- Invoices/Bills
- Purchase Orders

---

### Data Exchange (To Skills Workflow)

This section describes the Data exchanged between systems. Please see the data exchanged.
The data is exchanged with Views available in the system.

Financial Documents
- Expenses
- Invoices/Bills
- Purchase Orders

### Data Exchange (inbound)
This section describes the Data exchanged between systems. Please see the data exchanged.
The data is exchanged with Views available in the system.


<Tabs
  groupId="actions"
  defaultValue="articles"
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

<TabItem value="client">

#### Client 

Clients are received by Skills Workflow. 

* New Clients created in Primavera are automatically created in Skills Workflow.
* Any change in the Clients data is also synched with Skills Workflow.

#### Clients Data Exchanged

Fields that are populated in Skills Workflow:

* Id
* Name
* Street
* Street2
* City
* ZipPostal
* StateProvince
* TaxPayerNumber
* PaymentCondition
* Currency
* Country
* OtherDebtor
* Action

</TabItem>
<TabItem value="currency">

#### Currency 

Currencies are received by Skills Workflow. 

* New Currencies created in Primavera are automatically created in Skills Workflow.
* Any change in the Currencies data is also synched with Skills Workflow.

#### Currencies Data Exchanged

Fields that are populated into Skills:

* Id
* Name
* Buy
* Sell
* ValueRound
* VatRound
* PriceRound
* Action

</TabItem>
<TabItem value="employee">

#### Employee 

Employees are received by Skills Workflow. 

* New Employees created in Primavera are automatically created in Skills Workflow.
* Any change in the Employees data is also synched with Skills Workflow.

#### Employees Data Exchanged

The fields that are populated into Skills Workflow:

* Id
* Name
* Action

</TabItem>
<TabItem value="expenseitemtype">

#### Expense Item Type 

Expense are received by Skills Workflow. 

* New Expense Items created in Primavera are automatically created in Skills Workflow.
* Any change in the Expense Items data is also synched with Skills Workflow.

#### Expense Items Data Exchanged

The fields that will be populated into CETA:

* Id
* Company
* Name
* Value
* Vat
* VatDeductiblePercentage
* Action

</TabItem>
<TabItem value="expenseitemtype">

#### Expense Item Type 

Expense are received by Skills Workflow. 

* New Expense Items created in Primavera are automatically created in Skills Workflow.
* Any change in the Expense Items data is also synched with Skills Workflow.

#### Expense Items Data Exchanged

The fields that will be populated into CETA:

* Id
* Company
* Name
* Value
* Vat
* VatDeductiblePercentage
* Action

</TabItem>

<TabItem value="reversalreason">

#### Reversal Reason

Reversal Reasons are received by Skills Workflow. 

* New Reversal Reasons are created in Primavera are automatically created in Skills Workflow.
* Any change in the Reversal Reasons data is also synched with Skills Workflow.

#### Reversal Reasons Data Exchanged

The fields that will be populated into Skills Workflow:

* Id
* Company
* Name
* Action

</TabItem>
<TabItem value="supplier">

#### Supplier

Suppliers are received by Skills Workflow. 

* New Suppliers' created in Primavera are automatically created in Skills Workflow.
* Any change in the Suppliers' data is also synched with Skills Workflow.

#### Suppliers' Data Exchanged

The fields that will be populated into Skills Workflow:

* Id
* Name
* Company
* Street
* Street 2
* City
* ZipPostal
* StateProvince
* TaxpayerNumber
* Payment Condition
* Currency
* OtherCreditor
* Action

</TabItem>
<TabItem value="vat">

#### Vat

Vat values are received by Skills Workflow. 

* New Vat values created in Primavera are automatically created in Skills Workflow.
* Any change in the Vat data is also synched with Skills Workflow.

#### Vat Data Exchanged

The fields that will be populated into Skills Workflow:

* Id
* Company
* Name
* Percentage
* Action

</TabItem>
</Tabs>

### Data Exchange (To Skills Workflow)

This section describes the Data exchanged between systems. Please see the data exchanged.

The data is exchanged with Views available in the system.

<Tabs
  groupId="actions"
  defaultValue="billitem"
  values={[
    {label: 'Bill Item', value: 'billitem'},
    {label: 'Client Credit Note Item', value: 'clientcreditnoteitem'},
    {label: 'Expense Item Type', value: 'expenseitem'},
    {label: 'Purchase Order Item', value: 'purchaseorderitem'},
    {label: 'Supplier Invoice Item', value: 'supplierinvoiceitem'},
    {label: 'Supplier Note Item Reason', value: 'suppliernoteitem'}
  ]
}>
<TabItem value="billitem">

#### Bill Item

Bill Items are sent by Skills Workflow. 

* New Bills Items' created in Skills Workflow are automatically created in Primavera.
* Any change in the Bills data is also synched with Primavera.
#### Bill Item Data Exchanged

Fields that are populated in Primavera:

* Oid
* Name
* CompanyId
* EstimateId
* EstimateHasProjectId
* EstimateAccountCode
* EstimateAccountName
* EstimateAccountBeginDate
* EstimateAccountEndDate
* EstimateAccountBillingClient
* BillId
* BillingClient
* OtherDebtor
* Currency
* Exchange
* TotalValue
* PaymentCondition
* YourReference
* Date
* Due
* CommercialClientName
* ProjectNumber
* ProjectName
* ProjectSequence
* ProjectYear
* Project
* ContractNumber
* ContractName
* ContractSequence
* ContractYear
* BillItemId
* Article
* Description
* Vat
* VatPercentage
* UnitPrice
* Discount
* Quantity
* ValueWithoutVat
* VatValue
* ValueWithVat
* ExternalId
* External
* ExternalItemId
* LineNumber
* Remarks
* AttentionLine
* EstimateNumber
* PrimaveraDocumentType
* CostCenter
* BillItemOrder
* WorkflowStateId
* PreviousWorkflowStateId
* KeepOnError

</TabItem>
<TabItem value="clientcreditnoteitem">

#### Client Credit Note Item

Credit Client Notes are sent by Skills Workflow.

* New Credit Client Notes created in Skills Workflow are automatically created in Primavera.
* Any change in the Credit Client Notes data is also synched with Primavera.

#### Credit Client Notes Data Exchanged

Fields that are populated in Primavera:

* Oid
* Name
* CompanyId
* EstimateId
* EstimateHasProjectId
* EstimateAccountCode
* EstimateAccountName
* EstimateAccountBeginDate
* EstimateAccountEndDate
* EstimateAccountBillingClient
* ClientCreditNoteId
* BillingClient
* OtherDebtor
* Currency
* Exchange
* TotalValue
* PaymentCondition
* YourReference
* Date
* CommercialClientName
* ProjectNumber
* ProjectName
* ProjectSequence
* ProjectYear
* Project 
* ContractNumber
* ContractName
* ContractSequence
* ContractYear
* ClientCreditNoteItemId
* Article
* Description
* Vat
* VatPercentage
* UnitPrice
* Discount
* Quantity
* ValueWithoutVat
* VatValue
* ValueWithVat
* Chargeback
* ReversalReason
* BillItem
* BillName
* ExternalId
* External
* ExternalItemId
* LineNumber
* EstimateNumber
* CostCenter
* ClientCreditNoteItemOrder
* WorkflowStateId
* PreviousWorkflowStateId
* BillNames
* KeepOnError

</TabItem>
<TabItem value="expenseitem">

#### Expense Item

Expense Items are sent by Skills Workflow.

* New Expense Items created in Skills Workflow are automatically created in Primavera.
* Any change in the Expense Items data is also synched with Primavera.

#### Expense Items Data Exchanged

Fields that are populated into Primavera:

* Oid
* Name
* CompanyId
* ExpenseId
* Emission
* Due
* Employee
* Supplier
* OtherCreditor
* Currency
* Exchange
* TotalValue
* PaymentCondition
* ExpenseItemId
* CommercialClientName
* ProjectId
* ProjectBillingClient
* ProjectBeginDate
* ProjectEndDate
* ProjectNumber
* ProjectName
* ProjectSequence
* ProjectYear
* ContractNumber
* ContractName
* ContractSequence
* ContractYear
* ExpenseItemType
* Motive
* ValueWithoutVat
* VatValue
* Vat
* VatPercentage
* ValueWithVat
* CorrectionValue
* ExternalId
* ExternalName
* ExternalItemId
* LineNumber
* CostCenter
* PrimaveraDocumentType
* DocumentNumber
* ExpenseItemOrder
* WorkflowStateId
* PreviousWorkflowStateId
* KeepOnError

</TabItem>
<TabItem value="purchaseorderitem">

#### Purchase Order Item

Purchase Orders are sent by Skills Workflow.

* New Purchase Orders created in Skills Workflow are automatically created in Primavera.
* Any change in the Purchase Orders data is also synched with Primavera.

#### Purchase Orders Data Exchanged

The fields that are populated into Primavera:

* Oid
* Name
* EstimateId
* EstimateHasProjectId
* EstimateAccountCode
* EstimateAccountName
* EstimateAccountBeginDate
* EstimateAccountEndDate
* EstimateAccountBillingClient
* PurchaseOrderId
* Supplier
* OtherCreditor
* Currency
* Exchange
* TotalValue
* PaymentCondition
* YourReference
* Date
* CommercialClientName
* ProjectNumber
* ProjectName
* ProjectSequence
* ProjectYear
* ContractNumber
* ContractName
* ContractSequence
* ContractYear
* PurchaseOrderItemId
* Article
* Description
* Vat
* VatPercentage
* UnitPrice
* Discount
* Quantity
* ValueWithoutVat
* VatValue
* ValueWithVat
* ExternalId
* External
* ExternalItemId
* LineNumber
* EstimateNumber
* CostCenter
* Billed
* CompanyId
* PurchaseOrderItemOrder
* WorkflowStateId
* PreviousWorkflowStateId
* KeepOnError

</TabItem>
<TabItem value="supplierinvoiceitem">

#### Supplier Invoice Item

Supplier Invoices are sent by Skills Workflow.

* New Supplier Invoices created in Skills Workflow are automatically created in Primavera.
* Any change in the Supplier Invoices data is also synched with Primavera.

#### Supplier Invoices Data Exchanged

The fields that will be populated into Primavera:

* Oid
* Name
* SupplierInvoiceId
* CompanyId
* Emission
* Due
* Supplier
* OtherCreditor
* Currency
* Exchange
* TotalValue
* PaymentCondition
* SupplierInvoiceItemId
* CommercialClientName
* ProjectId
* ProjectBillingClient
* ProjectBeginDate
* ProjectEndDate
* ProjectNumber
* ProjectName
* ProjectSequence
* ProjectYear
* ContractNumber
* ContractName
* ContractSequence
* ContractYear
* Article
* Description
* ValueWithoutVat
* VatValue
* Vat
* VatPercentage
* ValueWithVat
* ExternalId
* External
* ExternalItemId
* LineNumber
* CostCenter
* PrimaveraDocumentType
* SupplierInvoiceItemOrder
* WorkflowStateId
* PreviousWorkflowStateId
* KeepOnError

</TabItem>
<TabItem value="suppliernoteitem">

#### Supplier Note Item 

Supplier Note Items are sent by Skills Workflow.

* New Supplier Noye Items created in Skills Workflow are automatically created in Primavera.
* Any change in the Supplier Note Items data is also synched with Primavera.

#### Supplier Note Data Exchanged

The fields that will be populated into Primavera:

* Oid
* Name
* SupplierNoteId
* CompanyId
* Emission
* Due
* Supplier
* OtherCreditor
* Currency
* Exchange
* TotalValue
* PaymentCondition
* SupplierNoteItemId
* CommercialClientName
* ProjectId
* ProjectBillingClient
* ProjectBeginDate
* ProjectEndDate
* ProjectNumber
* ProjectName
* ProjectSequence
* ProjectYear
* ContractNumber
* ContractName
* ContractSequence
* ContractYear
* Article
* Description
* ValueWithoutVat
* VatValue
* Vat
* VatPercentage
* ValueWithVat
* ExternalId
* External
* ExternalItemId
* LineNumber
* CostCenter
* PrimaveraDocumentType
* SupplierNoteItemOrder
* WorkflowStateId
* PreviousWorkflowStateId
* KeepOnError

</TabItem>
</Tabs>

---

### Conclusion

The contents of this document create the foundation for data and process communication methodology between Skills Workflow and Agencies.
The current known data and process transfers are contained in this document but more may be created as additional data and process needs are discovered.