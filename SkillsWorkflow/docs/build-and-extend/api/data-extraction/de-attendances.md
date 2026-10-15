---
id: de-attendances
title: DE-Attendances
sidebar_label: Attendances
sidebar_position: 1
---

Extracts data on attendances.

## Endpoint

```
POST /api/v3/analytics/named-query/DE-Attendances/dynamic-execute
```

## Parameters

Send every parameter below in the `parameters` object of the request body. Use `null` for a parameter you do not want to set.

| Parameter | Used in |
|-----------|---------|
| From | `where (@From is null or atc.Day >= @From) and` |
| To | `(@To is null or atc.Day <= @To)` |

## Output Columns

| Column | Source Table | Source Column |
|--------|-------------|---------------|
| Day | — | Day |
| UserId | usl | Id |
| User | usl | Name |
| Hours | — | Hours |
| Minutes | — | Minutes |
| OffSetTotalMinutes | — | OffSetTotalMinutes |
| TardinessTotalMinutes | — | TardinessTotalMinutes |
| BreakTotalMinutes | — | BreakTotalMinutes |
| HomeOffice | — | HomeOffice |
| HalfDay | — | HalfDay |
| Time | — | Time |
| Type | — | Type |
| AdjustedTime | — | AdjustedTime |
| Motive | — | Motive |
| Offset | — | Offset |
| OffsetMinutes | — | OffsetMinutes |

## Source Tables

| Table | Alias | Join |
|-------|-------|------|
| Attendance | atc | FROM |
| AttendanceDetail | atd | JOIN |
| UserLookup | usl | JOIN |

## Access

| Role | Administrative |
|------|---------------|
| AttendanceRead | No |

*Version: 3 · Category: Data Extraction · System: No*
