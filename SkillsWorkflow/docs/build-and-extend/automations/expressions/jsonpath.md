---
id: jsonpath
title: JSONPath
description: "The JSONPath syntax used inside Automation Workflow expressions to reach into an action's result: operators, filters and a cheat sheet against a worked example."
sidebar_label: JSONPath
sidebar_position: 2
---

Once an expression names an action, JSONPath is how you reach into that action's result. `{{['GetClients']$.Content.documents.client[0].Name}}` is a lookup followed by a path.

Paths accept dot notation, `$.store.book[0].title`, or bracket notation, `$['store']['book'][0]['title']`. Internal and output paths are always converted to bracket notation.

## Operators

| Syntax | Description |
|---|---|
| `$` | The root object or element. |
| `@` | The current object or element. |
| `.` or `[ ]` | Child operator. |
| `..` | Recursive descent. |
| `*` | Wildcard. Every object or element, whatever its name. |
| `[ ]` | Subscript operator, the native array operator in JSON. |
| `[ , ]` | Union. Alternate names or array indices as a set. |
| `[start : end : step]` | Array slice. |
| `?()` | Applies a filter expression. |
| `()` | Script expression, using the underlying script engine. |

Filters use `?(<boolean expr>)` with `@` as the current object, as in `$.store.book[?(@.price < 10)].title`. Script expressions can stand in for an explicit name or index, as in `$.store.book[(@.length-1)].title`.

## A worked example

Every expression in the cheat sheet below runs against this result:

```json
{
  "documents": {
    "client": [
      {
        "Id": "38ed55ac-cb45-4cbb-b89e-2f3cf480cb11",
        "Name": "Allbirds",
        "Code": "ABD",
        "HasContracts": false,
        "FullTimeEmployeeTime": 1800.0
      },
      {
        "Id": "3f826c2c-96c1-4d75-82d9-c29b4e50d4ef",
        "Name": "Amazon",
        "Code": "AMZ",
        "HasContracts": false,
        "FullTimeEmployeeTime": 0.0
      },
      {
        "Id": "682823e1-0651-4e8d-a655-ab3f8bcc8f6f",
        "Name": "Americanas",
        "Code": "",
        "HasContracts": false,
        "FullTimeEmployeeTime": 0.0
      }
    ]
  }
}
```

| Expression | Result |
|---|---|
| `$.documents.client[*].Name` | The names of every client. |
| `$..Name` | Every name, at any depth. |
| `$.documents.*` | Everything under `documents`. |
| `$.documents..Code` | The code of everything under `documents`. |
| `$..client[2]` | The third client. |
| `$..client[(@.length-1)]` or `$..client[-1:]` | The last client. |
| `$..client[0,1]` or `$..client[:2]` | The first two clients. |
| `$..client[?(@.Code)]` | Clients that have a code. |
| `$..client[?(@.FullTimeEmployeeTime>1800)]` | Clients above 1800 full-time employee time. |
| `$..client[?(@.Name=='Americanas')]` | Clients named Americanas. |
| `$..client[?(@.Name=='Amazon' && @.Code=='AMZ')]` | Clients matching both conditions. |
| `$..client[?(@.Name=='Amazon' \|\| @.Code=='AMZ')]` | Clients matching either condition. |
| `$..*` | Every member of the structure. |

## Preprocessors inside a path

`#eval()` works inside a JSONPath expression, which lets a filter compare against a computed value:

```
$..client[?(@.Code=='#eval(#eval(NewDateUtc(Today) | AddDays(-1)))')]
```

## Related articles

- [Writing expressions](./index.md)
- [Functions and pipe functions](./functions.md)
