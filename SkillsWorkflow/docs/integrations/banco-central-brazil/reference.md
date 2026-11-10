---
title: "Banco Central do Brasil: Technical Reference"
description: "Components, flow, bulletin layout and configuration of the BancoCentralBrazil-ExchangeRates automation."
sidebar_label: Technical Reference
sidebar_position: 2
---

:::info Technical reference
This page is the interface specification for the Banco Central do Brasil integration: components, flow, bulletin layout and configuration. It is written for the team implementing the exchange.

For what this integration does and how it is configured, see **[Banco Central do Brasil](./)**.
:::

### Components

| Name | Type | Version | Stage | Role |
| --- | --- | --- | --- | --- |
| BancoCentralBrazil-ExchangeRates | Automation | 4 | Active | Daily at 20:00 UTC: downloads the BCB closing bulletin and updates the buy and sell rate of each matching currency |

The automation has one sub-workflow, `UpdateCurrencyRateSW`, run once for each matched currency.

Source: `BancoCentralBrazil-ExchangeRates - (Automation v4).json`.

---

### How It Works

1. `RateDate` reads the optional `date` from the request body (`#HttpRequest`), removes dashes and uses it when it has 8 characters. Otherwise it uses the current UTC date formatted as `yyyyMMdd`.
2. `GetBcbRates` downloads the bulletin of that date from the BCB, a CSV file named after the date (`yyyyMMdd`). It is an external call with no authentication.
3. `BcbBulletinAvailable` branches on the HTTP status. `200` continues. `404` goes to `ExitNoBulletin`, which returns `200` and leaves the rates unchanged. Any other status goes to `ExitBcbUnavailable`, which returns `502`.
4. `ParseBcbRates` (`CsvMap`) reads the file with `;` as delimiter and no header row.
5. `GetCurrencies` calls `GET /api/v3/currencies`.
6. `BuildUpdates` (`ApplyTemplate`) goes through the currencies, skips the default one, resolves the ISO code from `IsoCode` or from `ExternalId`, and looks for a bulletin row with the same code. Decimal commas become dots. The result is a JSON array of `{ id, isoCode, buy, sell }`.
7. `UpdateCurrencies` loops over that array and runs `UpdateCurrencyRateSW` for each item. It calls `PATCH /api/v3/currencies/{id}` with `{"buy":{"value":…},"sell":{"value":…}}`.

---

### Bulletin Layout

The CSV file has no header row and uses `;` as field separator. The automation reads these columns:

| Column | Content | Used for |
| --- | --- | --- |
| `Field4` | Currency symbol (ISO code) | Matching against the ISO code of the currency |
| `Field5` | Buy rate (*taxa de compra*), in BRL | Buy rate of the currency |
| `Field6` | Sell rate (*taxa de venda*), in BRL | Sell rate of the currency |

The other columns (date, BCB currency code, type and the two parities) are not used.

---

### External System Contact Points

- BCB: the public closing-bulletin download, one CSV per date. The dataset is published as open data under the name *Taxas de câmbio - todos os boletins diários*.
- Skills Workflow API: `GET /api/v3/currencies` and `PATCH /api/v3/currencies/{id}`.

---

### Configuration

- Schedule: `Daily`, every 1 day, at 20:00 UTC.
- Request body, for manual runs only: optional `date`, as `yyyyMMdd` or `yyyy-MM-dd`.
- No configuration keys, system parameters, named queries or webhooks are used.
- When importing the automation into an environment, set the `tenantId` of the definition to the tenant of that environment, and give the scheduler a `userId` that is valid in that tenant.
