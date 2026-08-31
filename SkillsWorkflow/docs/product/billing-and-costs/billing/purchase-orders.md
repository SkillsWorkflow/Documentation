---
id: purchase-orders
title: Purchase Orders
description: "Recording a commitment to buy from a supplier, tracking it against an estimate, and generating a Supplier Invoice or Supplier Note from it."
sidebar_label: Purchase Orders
---

# Purchase Orders

A Purchase Order records a commitment to buy goods or a service from a supplier. It carries a name, a start date and a delivery date, a currency, and a stage that tracks it through your workflow.

## Availability

Purchase Orders is its own area in the main menu. Opening it needs the **PurchaseOrderNavigate** permission; viewing a purchase order needs **PurchaseOrderRead**, creating one needs **PurchaseOrderCreate**, and editing one needs **PurchaseOrderWrite**.

A purchase order can also be tied to an estimate, and shows up in that estimate's own Purchase Orders list.

## Working with a purchase order

The **Info** section holds the purchase order's own fields: Name, Start Date, Delivery Date, Currency, and whether it has been marked Invoiced. The **Items** section holds what is actually being bought, as separate lines.

A purchase order also has **Files** and **Feed** sections, like other documents in Skills Workflow.

![img-box-shadow](/img/product/billing/purchase-orders/PLACEHOLDER-detail-view.png)
<figcaption>Placeholder — replace with a screenshot of the Purchase Order detail screen (Info and Items sections).</figcaption>

## Stage

A purchase order moves through the stages configured for its workflow. Available stage types include `Draft`, `New`, `Sent`, `ToEmit`, `Invoiced`, `NotExpectingInvoice` and `PartiallyInvoiced`. Which of these a workflow uses, and in what order, is set up per workflow.

## Invoicing a purchase order

From the Purchase Orders list, select one or more purchase orders and click **Invoice**. Skills Workflow generates a Supplier Invoice or a Supplier Note from each one and marks the purchase order Invoiced.

![img-box-shadow](/img/product/billing/purchase-orders/PLACEHOLDER-list-view.png)
<figcaption>Placeholder — replace with a screenshot of the Purchase Orders list with the Invoice action.</figcaption>

## Related articles

- [Create an estimate](../../commercial/estimates/create-an-estimate.md)
