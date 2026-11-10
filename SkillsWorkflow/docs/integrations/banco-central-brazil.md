---
id: banco-central-brazil
title: 'Banco Central do Brasil'
description: "Keeps the exchange rates of every registered currency up to date automatically, using the daily closing bulletin published by the Banco Central do Brasil (BCB)."
sidebar_label: Banco Central do Brasil
---

### Description

This article describes the integration between the **Banco Central do Brasil (BCB)** and `Skills Workflow`.

Agencies that bill or buy in foreign currencies need an up-to-date exchange rate against the Brazilian real (BRL). Typing those rates in by hand is slow and easy to get wrong — one mistyped digit changes the value of every document that uses the rate.

This integration removes the manual step. **Every day, Skills Workflow reads the BCB's official closing bulletin and updates the buy and sell rate of every registered currency that appears in it.**

- **Rates come from the official source.** The BCB's daily bulletin of closing rates (*boletim de fechamento*), published as open data.
- **All registered currencies are covered in one run.** Each currency is matched to the bulletin by its ISO code (USD, EUR, …); there is nothing to configure per currency.
- **Nothing is touched when there is nothing new.** On weekends, holidays or before the bulletin is published, the run ends and the rates stay as they were.

---

### Data Exchange Technology

The exchange runs over the public BCB download service. No credentials, files or locally installed application are required.

- **The update runs daily at 20:00 UTC**, after the BCB has published that day's closing bulletin.
- **A run can also be started manually** for a specific date, for example to recover a day that failed — see *Running It for a Specific Date*.

---

### Data Exchange (To Skills Workflow)

| Received from the BCB | Written to |
| --- | --- |
| **Buy rate** (*taxa de compra*), in BRL per unit of the currency | The currency's **Buy** value |
| **Sell rate** (*taxa de venda*), in BRL per unit of the currency | The currency's **Sell** value |

Only the buy and sell values are changed. The other settings of the currency are left as they are.

---

### Which Currencies Are Updated

A currency is updated when all of the following are true:

- It is **not the default currency** of its company (the BRL itself has no rate to update).
- It has an **ISO code** — taken from the currency's `IsoCode`, or from its `ExternalId` when `IsoCode` is empty.
- That code **appears in the BCB bulletin** of the day, with both a buy and a sell rate.

Currencies that do not meet these conditions are skipped without error. The same currency registered in several companies is updated in each of them.

---

### Running It for a Specific Date

By default the automation uses the bulletin of **today** (UTC date). To use the bulletin of another day, run the automation manually with a request body containing the date:

```json
{ "date": "20261109" }
```

- The date is accepted as `yyyyMMdd` or `yyyy-MM-dd`.
- If the body is empty or the date is not valid, today's date is used.

The date only selects which bulletin is read. The rates are always written onto the currency as its **current** rate, so running an older date replaces the current values with that day's rates.

---

### What the Agency Needs to Provide

- **Currencies registered with their ISO code**, either in the ISO code field or in the External Id — see *Good to Know*.
- **The automation imported and active** in the tenant, with its schedule enabled.

No BCB account or API key is needed.

---

### Monitoring and Error Handling

| Situation | What happens |
| --- | --- |
| The BCB has **no bulletin** for the date (weekend, holiday, or not yet published) | The run ends successfully with the message *No BCB bulletin available for … Rates left unchanged.* |
| The BCB returns **any other error** | The run ends with status **502** and no rate is changed |
| The currencies cannot be read, or an **update is rejected** | The run fails and the error appears in the automation's execution log |

Each run is recorded in the automation's execution log, which is the place to check which currencies were updated.

---

### Good to Know

- **Rates are not published every day.** The BCB only publishes on business days, so on weekends and holidays the rates keep the value of the last business day.
- **The ISO code is what links a currency to the bulletin.** A currency registered with a name but without an ISO code in either field will be skipped silently.
- **Buy and Sell are both in BRL per unit of the currency**, exactly as published by the BCB. No spread or margin is applied.
- **Rates are overwritten on every run.** Manual edits to the buy and sell value of a currency covered by the bulletin are replaced by the next run.

---

### Technical Reference

#### Components

| Name | Type | Version | Stage | Role |
| --- | --- | --- | --- | --- |
| BancoCentralBrazil-ExchangeRates | Automation | 4 | Active | Daily at 20:00 UTC: downloads the BCB closing bulletin and updates the buy/sell rate of every matching currency |

The automation contains one sub-workflow, `UpdateCurrencyRateSW`, executed once per matched currency.

Source: `BancoCentralBrazil-ExchangeRates - (Automation v4).json`.

#### How It Works

1. **Resolve the date** — `RateDate` reads the optional `date` from the request body (`#HttpRequest`), strips dashes and uses it when it has 8 characters; otherwise it uses today's UTC date formatted `yyyyMMdd`.
2. **Download the bulletin** — `GetBcbRates` calls `GET https://www4.bcb.gov.br/Download/fechamento/{yyyyMMdd}.csv` (external call, no authentication).
3. **Check availability** — `BcbBulletinAvailable` branches on the HTTP status: `200` continues, `404` goes to `ExitNoBulletin` (result `200`, rates unchanged), anything else goes to `ExitBcbUnavailable` (result `502`).
4. **Parse the CSV** — `ParseBcbRates` (`CsvMap`) reads the file with `;` as delimiter and no header row.
5. **Read the currencies** — `GetCurrencies` calls `GET /api/v3/currencies`.
6. **Build the updates** — `BuildUpdates` (`ApplyTemplate`) walks the currencies, skips the default one, resolves the ISO code (`IsoCode`, falling back to `ExternalId`) and looks for a bulletin row with the same code. Decimal commas are converted to dots. The output is a JSON array of `{ id, isoCode, buy, sell }`.
7. **Update each currency** — `UpdateCurrencies` loops over that array and runs `UpdateCurrencyRateSW`, which calls `PATCH /api/v3/currencies/{id}` with `{"buy":{"value":…},"sell":{"value":…}}`.

#### BCB Bulletin Layout

The CSV has no header row and uses `;` as the field separator. The columns the automation uses:

| Column | Content | Used as |
| --- | --- | --- |
| `Field4` | Currency symbol (ISO code) | Matched against the currency's ISO code |
| `Field5` | Buy rate (*taxa de compra*), BRL | Currency **Buy** |
| `Field6` | Sell rate (*taxa de venda*), BRL | Currency **Sell** |

The remaining columns (date, BCB currency code, type, and the two parities) are not used.

#### External System Contact Points

- BCB: `GET https://www4.bcb.gov.br/Download/fechamento/{yyyyMMdd}.csv`. Dataset: [Taxas de câmbio — todos os boletins diários](https://dadosabertos.bcb.gov.br/dataset/taxas-de-cambio-todos-os-boletins-diarios).
- Skills Workflow API: `GET /api/v3/currencies`, `PATCH /api/v3/currencies/{id}`.

#### Configuration

- **Schedule:** `Daily`, every 1 day, at 20:00 UTC (17:00 in Brasília, which has no daylight saving time).
- **Request body (manual runs only):** optional `date`, see *Running It for a Specific Date*.
- No configuration keys, system parameters, named queries or webhooks are used.
- When importing into an environment, the `tenantId` of the definition must be set to that environment's tenant, and the scheduler needs a valid `userId` of that tenant.

#### Open Questions

- Matching by `ExternalId` when `IsoCode` is empty assumes the tenant stores the ISO code in `ExternalId`; this was verified on the test environment only.
- The mapping Buy ← *taxa de compra* and Sell ← *taxa de venda* follows the BCB bulletin column order and has not been confirmed with the client's finance team.
