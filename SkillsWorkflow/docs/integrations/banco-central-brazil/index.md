---
title: 'Banco Central do Brasil'
description: "The Banco Central do Brasil publishes the official exchange rates against the Brazilian real. This integration updates the buy and sell rate of the registered currencies from its daily bulletin."
sidebar_label: Banco Central do Brasil
sidebar_position: 1
---

### Description

This article describes the integration between the **Banco Central do Brasil (BCB)** and `Skills Workflow`.

The BCB publishes the official exchange rates against the Brazilian real (BRL) every business day. This integration reads that bulletin and updates the buy rate and sell rate of the registered currencies, so exchange rates no longer have to be typed in by hand.

The BCB is the source of truth for these rates. Skills Workflow follows it.

---

### Data Exchange Technology

The rates come from the BCB's public daily closing bulletin. No account, key or locally installed application is needed.

The update runs automatically once a day at 20:00 UTC, after the bulletin has been published. It can also be started manually for a specific date.

---

### What Is Exchanged

| Received from the BCB | Written to the currency |
| --- | --- |
| Buy rate (*taxa de compra*), in BRL per unit of the currency | Buy rate |
| Sell rate (*taxa de venda*), in BRL per unit of the currency | Sell rate |

Only the buy and sell rates change. The other settings of the currency stay as they are.

---

### Which Currencies Are Updated

A currency is updated when it meets all of these conditions:

- It is not the default currency of its company.
- It has an ISO code, taken from the `IsoCode` field or, when that is empty, from the `ExternalId` field.
- That code appears in the bulletin of the day with both a buy and a sell rate.

Any other currency is skipped without an error. A currency registered in several companies is updated in each of them.

---

### Running It for a Specific Date

By default the automation reads the bulletin of the current UTC date. To read another day's bulletin, run the automation manually with this request body:

```json
{ "date": "20261109" }
```

The date is accepted as `yyyyMMdd` or `yyyy-MM-dd`. With an empty body, or a date that is not valid, the current date is used.

The date only chooses which bulletin is read. The rates are written as the current rates of the currencies, so running an older date replaces them with the values of that day.

---

### What the Agency Needs to Provide

- Currencies registered with their ISO code, for example `USD` or `EUR`, in the ISO code or in the external id.
- The automation imported and active, with its schedule enabled.

---

### Monitoring and Error Handling

| Situation | Result |
| --- | --- |
| The BCB has no bulletin for the date (weekend, holiday, or not yet published) | The run ends successfully and the rates stay unchanged. |
| The BCB returns any other error | The run ends with status 502 and no rate is changed. |
| The currencies cannot be read, or an update is rejected | The run fails and the error appears in the execution log of the automation. |

The execution log of each run shows which currencies were updated.

---

### Good to Know

- The BCB publishes on business days only. On weekends and holidays the currencies keep the rates of the last business day.
- A currency without an ISO code in either field is skipped silently.
- The rates are exactly the ones published by the BCB, in BRL per unit of the currency. No margin is added.
- Every run overwrites the buy and sell rates of the matching currencies. A manual change to those two values lasts until the next run.

---

For the components, the flow and the layout of the bulletin, see the **[Technical Reference](./reference)**.

### Related articles

- [Automations](/docs/build-and-extend/automations)
- [How automations start](/docs/build-and-extend/automations/triggers)
