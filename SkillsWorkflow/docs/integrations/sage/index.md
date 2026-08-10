---
title: 'Sage'
sidebar_label: Sage
sidebar_position: 1
---

### Description

This article describes the integration between the **Sage** ERP and `Skills Workflow`.

Sage is where the agency's finance team works. This integration removes the double entry between the two systems: the master data finance already maintains in Sage — clients, suppliers, VAT, currencies, payment conditions — flows into Skills Workflow so the operational teams book work against the correct records, and the financial documents produced by those teams flow back into Sage for invoicing and payment.

Neither side has to retype the other's data, and neither side has to wait for the other to catch up.

---

### Data Exchange Technology

The exchange is based on **views**. The ERP is installed locally on the agency's server, and the integration reads and writes through views made available in the system.

---

### What Comes Into Skills Workflow

Sage is the source of truth for the financial master data:

| Received from Sage | Why it matters |
| --- | --- |
| Clients | Teams book work against the same client records finance invoices |
| Suppliers | Purchase orders and supplier invoices reference real, approved suppliers |
| Articles | The billable item catalogue |
| VAT | Correct tax rates on every document |
| Currency | Multi-currency work is valued consistently in both systems |
| Payment Conditions | Payment terms travel with the client |
| Expense Item Types | Expenses are classified the way finance expects |
| Reversal Reasons | Credit notes carry a reason finance recognises |
| Employees | People records stay aligned |

New records created in Sage are created automatically in Skills Workflow, and later changes are synchronised.

---

### What Goes Out To Sage

The financial documents produced in Skills Workflow are sent to Sage:

- Bills
- Client Credit Notes
- Expenses
- Purchase Orders
- Supplier Invoices
- Supplier Notes

Documents are exported at item level, so Sage receives the detail behind each total rather than a single lump sum.

---

### What the Agency Needs to Provide

- A Sage installation reachable by the integration, with the required views available.
- Confirmation of which companies are in scope.
- Agreement on how master data records are identified on both sides, so records match rather than duplicate.

---

### Good to Know

- Sage is the source of truth for master data. Changes made manually in Skills Workflow to clients, suppliers, VAT or currencies will be overwritten.
- Skills Workflow is the source of truth for the documents it produces. They are created in Skills Workflow and sent onwards, not the other way round.
- Records are matched by their external identifier. Changing it manually on either side will cause duplicates.

---

For the field-by-field mappings, see the **[Technical Reference](./reference)**.
