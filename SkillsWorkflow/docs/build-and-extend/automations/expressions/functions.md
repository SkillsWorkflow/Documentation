---
id: functions
title: Functions and pipe functions
description: "The functions that generate a value inside an Automation Workflow expression, and the pipe functions that transform one — converters, string, arithmetic, date and boolean operators."
sidebar_label: Functions and pipes
sidebar_position: 1
---

Two things can appear inside an expression besides a lookup. A **function** produces a value out of nothing. A **pipe function** transforms a value you already have.

## Functions

Written on their own, with no value in front of them.

| Function | Returns |
|---|---|
| `{{NewGuid}}` | A new GUID. |
| `{{EmptyGuid}}` | The empty GUID, `00000000-0000-0000-0000-000000000000`. |
| `{{NewDateUtc(value)}}` | A UTC date and time. The argument is required. |

`NewDateUtc` accepts:

| Argument | Returns |
|---|---|
| `Now` | The current UTC date and time. |
| `Today` | Today at midnight. |
| `Yesterday` | Yesterday at midnight. |
| `FirstDayOfYear` | 1 January of the current year, at midnight. |
| `LastDayOfYear` | 31 December of the current year, at midnight. |

```
{{NewDateUtc(Now)}}
{{NewDateUtc(FirstDayOfYear)}}
```

## Pipe functions

A pipe function goes after a value, separated by `|`. Some take an argument in parentheses. They chain, left to right.

```
{{['GetProjectFile']$.Content.Url | UrlEncode}}
{{['StartDate'] | AddDays(-1) | ToDateUtc}}
```

### Converters

| Pipe | Effect |
|---|---|
| `ToBase64` | Encodes the value as Base64. |
| `FromBase64` | Decodes a Base64 value. |
| `UrlEncode` | Escapes the value for use in a URL. |
| `ToJson` | Parses the value into JSON. |
| `ToJsonString` | Serialises the value to a JSON string. |
| `ToDateUtc` | Reads the value as a UTC date and time. |
| `FromUnixTimeSeconds` | Converts a Unix timestamp in seconds to a date. |
| `FromUnixTimeMilliSeconds` | Converts a Unix timestamp in milliseconds to a date. |

```
{{['CreateCsv']$ | ToBase64}}
{{['GetProjectFile']$.Content | ToJsonString}}
```

### Strings

| Pipe | Effect |
|---|---|
| `Trim` | Removes surrounding whitespace. |
| `ToLowerCase` | Lowercases the value. |
| `ToUpperCase` | Uppercases the value. |
| `ToLowerCamelCase` | Converts the value to lowerCamelCase. |
| `ToUpperCamelCase` | Converts the value to UpperCamelCase. |
| `RemoveLeading('value')` | Removes `value` from the start. |
| `RemoveTrailing('value')` | Removes `value` from the end. |
| `Join('value')` | Appends `value`, or joins an array with it as separator. |
| `Split('value')` | Splits on `value`. |

```
{{['MyText'] | RemoveLeading('DRAFT-') | Trim}}
{{['Codes']$ | Join(',')}}
```

### Tests

| Pipe | Effect |
|---|---|
| `IsNullOrEmpty` | True when the value is null or empty. |
| `Contains('value')` | True when the value contains `value`. |

These are what a [`Case`](../actions-reference.md#case) action's `test` is usually built from.

### Arithmetic

| Pipe | Effect |
|---|---|
| `AddDecimal(value)` | Adds `value` to a number. |
| `Sum` | Sums an array. |
| `Min` | Smallest value in an array. |
| `Max` | Largest value in an array. |
| `Avg` | Mean of an array. |

```
{{['ArrayOfValues']$ | Sum}}
```

### Dates

| Pipe | Effect |
|---|---|
| `AddMonths(value)` | Shifts a date by whole months. |
| `AddDays(value)` | Shifts a date by whole days. |
| `AddHours(value)` | Shifts a date by hours. |
| `AddMinutes(value)` | Shifts a date by minutes. |

Negative arguments move backwards.

```
{{NewDateUtc(Today) | AddDays(-1)}}
```

## Related articles

- [Writing expressions](./index.md)
- [JSONPath](./jsonpath.md)
