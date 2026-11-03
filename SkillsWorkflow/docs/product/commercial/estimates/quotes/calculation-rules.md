---
id: calculation-rules
title: Calculation rules
description: "How the Quotes tab prices resources, services and expenses: the estimate formulas, where each value comes from, VAT, and the deliverable and estimate totals."
sidebar_label: Calculation rules
sidebar_position: 3
---

The Quotes tab prices every line with the formula set on the company and the values on the estimate. The page shows the results as you type, and Skills Workflow recalculates the totals when you save.

## Which formula applies

The company's **Estimate Calculus Type** sets the formula for resources and expenses. **Service Estimate Calculus Type** sets it for services. A company saved without a **Service Estimate Calculus Type** takes its **Estimate Calculus Type**.

A payment condition can have its own **Service Estimate Calculus Type**. Services lines with that payment condition use it.

There are five formulas: **Default**, **Markup**, **MarkupWithVat**, **MarkupWithVatAndMargin** and **MarkupOnlyOnVat**.

## Where the values come from

| Value | Where it comes from | Used for |
|---|---|---|
| **Inflation %** | The estimate's **Info** tab | Resources, services and expenses |
| **Overheads %** | The estimate's **Info** tab | Resources |
| **Resource Margin %** | The estimate's **Info** tab | Resources |
| **Supplier Margin %** | The estimate's **Info** tab | The **Commission %** of a new services line |
| **FTE** | The estimate's **Info** tab | **Utilization** of resources |
| **Rate Card** and **Rate Card Column** | The estimate's **Info** tab | **Table Rate** and **Unit Cost** of resources |
| **Rate Card Column Sell** | The estimate's **Info** tab | **Unit Income** of resources, when the rate card has a sell value for the role |
| **Price Table** and **Price** | The estimate's **Info** tab | **Unit Cost** of services, by service |
| Agency commission | The client, by service | **Commission %** of a services line on that service |
| **Tax** | The deliverable | VAT of every line in it |

## Resources

A resource line takes its **Table Rate** and **Unit Cost** from the rate card, for its typology group, user, department and the deliverable's market.

Without a discount or a typed **Unit Income**, its **Unit Income** follows the **Unit Cost**:

| Formula | Unit Income |
|---|---|
| **Default**, **MarkupOnlyOnVat** | Unit Cost × (1 + Inflation %) × (1 + Overheads %) × (1 + Resource Margin %) |
| **Markup**, **MarkupWithVat**, **MarkupWithVatAndMargin** | Unit Cost × (1 + Inflation %) × (1 + Overheads %) ÷ (1 − Resource Margin %) |

When the rate card has a sell value for the role in the **Rate Card Column Sell**, the **Unit Income** is that value.

The totals follow the hours:

- **Total Cost** = Unit Cost × Hours
- **Total Sell** = Unit Income × Hours
- **Utilization** = Hours ÷ FTE

## Services

**Total Cost** = Unit Cost × #Cost, less the line's discount. The discount is the line's **Discount %**, or the payment condition's discount when the line has none.

When you change **#Cost**, **#Income** takes the same value.

A new services line works out its **Unit Income** from its cost and its **Commission %**:

| Formula | Unit Income |
|---|---|
| **Default**, **MarkupOnlyOnVat** | Total Cost × (1 + Inflation %) × (1 + Margin %) × (1 + Commission %) ÷ #Income |
| **Markup**, **MarkupWithVat**, **MarkupWithVatAndMargin** | Total Cost × (1 + Inflation %) × (1 + Margin %) ÷ (1 − Commission %) ÷ #Income |

**Margin %** is the line's own negotiation margin, and is usually 0. Lines on a **Client Direct** payment condition, and lines with a 100% discount, follow other rules.

The **Unit Income** is worked out again when you change the **Commission %** or the **Margin %**.

On a saved line, changing the cost or the quantity keeps the **Unit Income**, and the **Commission %** changes. On a company with **Fixed Margin Percentage**, the **Unit Income** follows the cost every time.

Typing the **Unit Income** or the **Total Sell** keeps that price and works out the **Commission %** and **Commission** from it. A typed **Total Sell** sets **Unit Income** = Total Sell ÷ #Income.

## Expenses

Expenses are sold at cost plus inflation:

- **#Income** = #
- **Unit Income** = Unit Cost × (1 + Inflation %)
- **Total Cost** = Unit Cost × #, less the line's discount

An expense line without a discount has **Total Sell** = Unit Income × #.

## VAT

VAT applies to a line with no payment condition, or with a payment condition that has **Has Tax**. The rate is the deliverable's **Tax**.

| Formula | Total Income With Tax |
|---|---|
| **Default**, **Markup** | Total Sell × (1 + VAT) |
| **MarkupWithVat**, **MarkupOnlyOnVat** | Total Sell ÷ (1 − VAT) |
| **MarkupWithVatAndMargin**, services | (Total Sell − Commission) ÷ (1 − Commission % − VAT) |
| **MarkupWithVatAndMargin**, resources | (Total Cost + overheads) ÷ (1 − Resource Margin % − VAT) |

For resources under **MarkupWithVatAndMargin**, overheads = Overheads % × Unit Cost × (1 + Inflation %) × Hours.

These rules don't cover lines on a **Client Direct** payment condition, expenses under **MarkupWithVatAndMargin**, or resources priced from the **Rate Card Column Sell** under **MarkupWithVatAndMargin**.

## Rounding

With **Apply unit price round** on the company, unit prices are rounded to the decimals of the currency's price.

## Deliverables

- **Total Cost** = the sum of the lines' Total Cost × Rep. Number
- **Total Income** = the sum of the lines' Total Sell × Rep. Number, plus the agency commission, less the deliverable's **Discount**
- **Final Margin** = Total Income − Total Cost
- **Final Margin %** = Final Margin ÷ Total Income

**Rep. Number** is shown on retainer estimates only. It starts at the number of months between the deliverable's **Start Date** and **End Date**. On other estimates it is 1.

## Estimate summary

- **Total Income** and **Total Cost** are the sums of the deliverables.
- **Final Margin %** = 1 − Total Cost ÷ Total Income.
- In **By line type**, the sell of each line type is the sum of its lines' Total Sell × Rep. Number × (1 − the deliverable's Discount %). Its cost is the sum of the lines' Total Cost × Rep. Number, and its % is 1 − cost ÷ sell.

The billing plan and buy condition rules are in [Approval and billing](/docs/product/commercial/estimates/quotes/approval-and-billing) and [Buy conditions](/docs/product/commercial/estimates/quotes/buy-conditions).

## Related articles

- [Prices and margins](/docs/product/commercial/estimates/quotes/prices-and-margins)
- [Create Rate Cards](/docs/product/commercial/rates/rate-cards)
- [Price Tables](/docs/product/commercial/rates/price-tables)
