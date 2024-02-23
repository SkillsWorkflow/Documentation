---
id: sage
title: "Sage"
sidebar_label: Sage
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

### Description

This is the Documentation of how the Integration between the Sage and `Skills Workflow`. This documentation is for Skills Workflow located in the Cloud.

---

### Data Exchange Technology

Based on Views.

The ERP will be installed locally on a server.

The scope of data exchanged on this integration includes:

#### From SAGE to Skills Workflow

- Master data
- Clients
- Suppliers
- VAT
- Currency
- Payment Conditions
- Articles
- Reversal Reasons

#### From Skills Workflow to SAGE

- Financial Documents
- Expenses
- Invoices/Bills
- Purchases Orders

---

### Data Exchange (To Skills Workflow)

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
{label: 'Payment Condition', value: 'paymentcondition'},
{label: 'Reversal Reason', value: 'reversalreason'},
{label: 'Supplier', value: 'supplier'},
{label: 'VAT', value: 'vat'}
]
}>

<TabItem value="articles">

#### Articles

Articles are received by Skills Workflow.

New Articles created in SAGE are automatically created in Skills Workflow.
Any change in the Articles data is also synched with Skills Workflow.

#### Articles Data Exchanged

Fields that are populated in Skills Workflow are:

- CompanyId
- CompanyCode
- Active
- Name
- ExternalId
- InternalService
- VatDeductiblePercentage

</TabItem>
<TabItem value="client">

#### Client

Clients are received by Skills Workflow.

- New Clients created in SAGE are automatically created in Skills Workflow.
- Any change in the Clients data is also synched with Skills Workflow.

#### Clients Data Exchanged

Fields that are populated in Skills Workflow:

- Name
- Street
- Street2
- City
- ZipPostal
- StateProvince
- Country
- TaxPayerNumber
- Active
- CompanyCode
- CompanyId
- PaymentConditionExternalId
- CurrencyExternalId
- ExternalId
- ApplyDefaultPaymentCondition
- SetFirstPaymentConditionIfExternalIdIsNull
- OtherDebtor

</TabItem>
<TabItem value="currency">

#### Currency

Currencies are received by Skills Workflow.

- New Currencies created in SAGE are automatically created in Skills Workflow.
- Any change in the Currencies data is also synched with Skills Workflow.

#### Currencies Data Exchanged

Fields that are populated into Skills:

- CompanyId
- Active
- Name
- Symbol
- ExternalId
- Sell
- Buy
- Default
- Value Round
- Vat Round
- Price Round

</TabItem>
<TabItem value="employee">

#### Employee

Employees are received by Skills Workflow.

- New Employees created in SAGE are automatically created in Skills Workflow.
- Any change in the Employees data is also synched with Skills Workflow.

#### Employees Data Exchanged

The fields that are populated into Skills Workflow:

- Id
- Name
- Action

</TabItem>
<TabItem value="expenseitemtype">

#### Expense Item Type

Expense are received by Skills Workflow.

- New Expense Items created in SAGE are automatically created in Skills Workflow.
- Any change in the Expense Items data is also synched with Skills Workflow.

#### Expense Items Data Exchanged

The fields that will be populated into CETA:

- Id
- Company
- Name
- Value
- Vat
- VatDeductiblePercentage
- Action

</TabItem>
<TabItem value="paymentcondition">

#### Payment Conditions

Payment Conditions are received by Skills Workflow.

- New Payment Conditions are created in SAGE are automatically created in Skills Workflow.
- Any change in the Payment Conditions data is also synched with Skills Workflow.

#### Payment Conditions Data Exchanged

The fields that will be populated into Skills Workflow:

- CompanyId
- CompanyCode
- Active
- Name
- ExternalId
- Days
- Discount
- ClientDirect
- ClientDirectUpdatable
- HasTax
- HasTaxUpdatable

</TabItem>
<TabItem value="reversalreason">

#### Reversal Reason

Reversal Reasons are received by Skills Workflow.

- New Reversal Reasons are created in SAGE are automatically created in Skills Workflow.
- Any change in the Reversal Reasons data is also synched with Skills Workflow.

#### Reversal Reasons Data Exchanged

The fields that will be populated into Skills Workflow:

- CompanyId
- CompanyCode
- Active
- Name
- ExternalId

</TabItem>
<TabItem value="supplier">

#### Supplier

Suppliers are received by Skills Workflow.

- New Suppliers' created in SAGE are automatically created in Skills Workflow.
- Any change in the Suppliers' data is also synched with Skills Workflow.

#### Suppliers' Data Exchanged

The fields that will be populated into Skills Workflow:

- CompanyId
- CompanyCode
- Active
- Name
- ExternalId
- TaxpayerNumber
- Street
- Street 2
- City
- ZipPostal
- StateProvince
- OtherCreditor
- PaymentConditionExternalId
- ApplyDefaultPaymentCondition
- CurrencyExternalId
- ApplyDefaultCurrency
- ApplyDeafultVat

</TabItem>
<TabItem value="vat">

#### Vat

Vat values are received by Skills Workflow.

- New Vat values created in SAGE are automatically created in Skills Workflow.
- Any change in the Vat data is also synched with Skills Workflow.

#### Vat Data Exchanged

The fields that will be populated into Skills Workflow:

- CompanyId
- CompanyCode
- Active
- Name
- ExternalId
- Percentage
- Default

</TabItem>
</Tabs>

---

### Data Exchange (OutBound)

This section describes the Data exchanged between systems. Please see the data exchanged.

The data is exchanged with Views available in the system.

<Tabs
groupId="actions"
defaultValue="billitem"
values={[
{label: 'Bill Item', value: 'billitem'},
{label: 'Client Credit Note Item', value: 'clientcreditnoteitem'},
{label: 'Expense Item', value: 'expenseitem'},
{label: 'Purchase Order Item', value: 'purchaseorderitem'},
{label: 'Supplier Invoice Item', value: 'supplierinvoiceitem'},
{label: 'Supplier Note Item Reason', value: 'suppliernoteitem'}
]
}>

<TabItem value="billitem">

#### Bill Item

Bill Items are sent by Skills Workflow.

- New Bills Items' created in Skills Workflow are automatically created in SAGE.
- Any change in the Bills data is also synched with SAGE.

#### Bill Item Data Exchanged

Fields that are populated in SAGE:

- Oid
- Name
- CompanyId
- EstimateId
- EstimateHasProjectId
- EstimateAccountCode
- EstimateAccountName
- EstimateAccountBeginDate
- EstimateAccountEndDate
- EstimateAccountBillingClient
- BillId
- BillingClient
- OtherDebtor
- Currency
- Exchange
- TotalValue
- PaymentCondition
- YourReference
- Date
- Due
- CommercialClientName
- ProjectNumber
- ProjectName
- ProjectSequence
- ProjectYear
- Project
- ContractNumber
- ContractName
- ContractSequence
- ContractYear
- BillItemId
- Article
- Description
- Vat
- VatPercentage
- UnitPrice
- Discount
- Quantity
- ValueWithoutVat
- VatValue
- ValueWithVat
- ExternalId
- External
- ExternalItemId
- LineNumber
- Remarks
- AttentionLine
- EstimateNumber
- SAGEDocumentType
- CostCenter
- BillItemOrder
- WorkflowStateId
- PreviousWorkflowStateId
- KeepOnError

</TabItem>
<TabItem value="clientcreditnoteitem">

#### Credit Client Note

Credit Client Notes are sent by Skills Workflow.

- New Credit Client Notes created in Skills Workflow are automatically created in SAGE.
- Any change in the Credit Client Notes data is also synched with SAGE.

#### Credit Client Notes Data Exchanged

Fields that are populated in SAGE:

- Oid
- Name
- CompanyId
- EstimateId
- EstimateHasProjectId
- EstimateAccountCode
- EstimateAccountName
- EstimateAccountBeginDate
- EstimateAccountEndDate
- EstimateAccountBillingClient
- ClientCreditNoteId
- BillingClient
- OtherDebtor
- Currency
- Exchange
- TotalValue
- PaymentCondition
- YourReference
- Date
- CommercialClientName
- ProjectNumber
- ProjectName
- ProjectSequence
- ProjectYear
- Project
- ContractNumber
- ContractName
- ContractSequence
- ContractYear
- ClientCreditNoteItemId
- Article
- Description
- Vat
- VatPercentage
- UnitPrice
- Discount
- Quantity
- ValueWithoutVat
- VatValue
- ValueWithVat
- Chargeback
- ReversalReason
- BillItem
- BillName
- ExternalId
- External
- ExternalItemId
- LineNumber
- EstimateNumber
- CostCenter
- ClientCreditNoteItemOrder
- WorkflowStateId
- PreviousWorkflowStateId
- BillNames
- KeepOnError

</TabItem>

<TabItem value="expenseitem">

#### Expense Item

Expense Items are sent by Skills Workflow.

- New Expense Items created in Skills Workflow are automatically created in SAGE.
- Any change in the Expense Items data is also synched with SAGE.

#### Expense Items Data Exchanged

Fields that are populated into SAGE:

- Oid
- Name
- CompanyId
- ExpenseId
- Emission
- Due
- Employee
- Supplier
- OtherCreditor
- Currency
- Exchange
- TotalValue
- PaymentCondition
- ExpenseItemId
- CommercialClientName
- ProjectId
- ProjectBillingClient
- ProjectBeginDate
- ProjectEndDate
- ProjectNumber
- ProjectName
- ProjectSequence
- ProjectYear
- ContractNumber
- ContractName
- ContractSequence
- ContractYear
- ExpenseItemType
- Motive
- ValueWithoutVat
- VatValue
- Vat
- VatPercentage
- ValueWithVat
- CorrectionValue
- ExternalId
- ExternalName
- ExternalItemId
- LineNumber
- CostCenter
- SAGEDocumentType
- DocumentNumber
- ExpenseItemOrder
- WorkflowStateId
- PreviousWorkflowStateId
- KeepOnError

</TabItem>
<TabItem value="purchaseorderitem">

#### Purchase Order Item

Purchase Orders are sent by Skills Workflow.

New Purchase Orders created in Skills Workflow are automatically created in SAGE.
Any change in the Purchase Orders data is also synched with SAGE.

#### Purchase Orders Data Exchanged

The fields that are populated into SAGE:

- Oid
- Name
- EstimateId
- EstimateHasProjectId
- EstimateAccountCode
- EstimateAccountName
- EstimateAccountBeginDate
- EstimateAccountEndDate
- EstimateAccountBillingClient
- PurchaseOrderId
- Supplier
- OtherCreditor
- Currency
- Exchange
- TotalValue
- PaymentCondition
- YourReference
- Date
- CommercialClientName
- ProjectNumber
- ProjectName
- ProjectSequence
- ProjectYear
- ContractNumber
- ContractName
- ContractSequence
- ContractYear
- PurchaseOrderItemId
- Article
- Description
- Vat
- VatPercentage
- UnitPrice
- Discount
- Quantity
- ValueWithoutVat
- VatValue
- ValueWithVat
- ExternalId
- External
- ExternalItemId
- LineNumber
- EstimateNumber
- CostCenter
- Billed
- CompanyId
- PurchaseOrderItemOrder
- WorkflowStateId
- PreviousWorkflowStateId
- KeepOnError

</TabItem>
<TabItem value="supplierinvoiceitem">

#### Supplier Invoice Item

Supplier Invoices are sent by Skills Workflow.

- New Supplier Invoices created in Skills Workflow are automatically created in SAGE.
- Any change in the Supplier Invoices data is also synched with SAGE.

#### Supplier Invoices Data Exchanged

The fields that will be populated into SAGE:

- Oid
- Name
- SupplierInvoiceId
- CompanyId
- Emission
- Due
- Supplier
- OtherCreditor
- Currency
- Exchange
- TotalValue
- PaymentCondition
- SupplierInvoiceItemId
- CommercialClientName
- ProjectId
- ProjectBillingClient
- ProjectBeginDate
- ProjectEndDate
- ProjectNumber
- ProjectName
- ProjectSequence
- ProjectYear
- ContractNumber
- ContractName
- ContractSequence
- ContractYear
- Article
- Description
- ValueWithoutVat
- VatValue
- Vat
- VatPercentage
- ValueWithVat
- ExternalId
- External
- ExternalItemId
- LineNumber
- CostCenter
- SAGEDocumentType
- SupplierInvoiceItemOrder
- WorkflowStateId
- PreviousWorkflowStateId
- KeepOnError

</TabItem>
<TabItem value="suppliernoteitem">

#### Supplier Note Item

Supplier Note Items are sent by Skills Workflow.

- New Supplier Noye Items created in Skills Workflow are automatically created in SAGE.
- Any change in the Supplier Note Items data is also synched with SAGE.

#### Supplier Note Data Exchanged

The fields that will be populated into SAGE:

- Oid
- Name
- SupplierNoteId
- CompanyId
- Emission
- Due
- Supplier
- OtherCreditor
- Currency
- Exchange
- TotalValue
- PaymentCondition
- SupplierNoteItemId
- CommercialClientName
- ProjectId
- ProjectBillingClient
- ProjectBeginDate
- ProjectEndDate
- ProjectNumber
- ProjectName
- ProjectSequence
- ProjectYear
- ContractNumber
- ContractName
- ContractSequence
- ContractYear
- Article
- Description
- ValueWithoutVat
- VatValue
- Vat
- VatPercentage
- ValueWithVat
- ExternalId
- External
- ExternalItemId
- LineNumber
- CostCenter
- SAGEDocumentType
- SupplierNoteItemOrder
- WorkflowStateId
- PreviousWorkflowStateId
- KeepOnError

</TabItem>

</Tabs>

---

### Conclusion

The contents of this document create the foundation for data and process communication methodology between Skills Workflow and Agencies. The current known data and process transfers are contained in this document but more may be created as additional data and process needs are discovered.
