---
id: expressions
title: Expressions
description: "How actions in an Automation Workflow read each other's results: the double-brace syntax, action content, the request that triggered the run, parameters, and the #eval preprocessor."
sidebar_label: Writing expressions
sidebar_position: 0
---

Actions do not receive arguments from each other directly. Each one writes its result into the run's context under its own name, and later actions read from that context with an expression.

An expression is written between double braces:

```
{{['ActionName']}}
```

## Reading an action's result

Every action produces a result, available under the action's `name`. Add a [JSONPath](./jsonpath.md) expression to reach inside it.

```json title="Using the Uri from an earlier GetProjectFile action"
{
  "actionType": "Download",
  "name": "DownloadFile",
  "next": "UploadFile",
  "url": "{{['GetProjectFile']$.Content.Uri}}"
}
```

`$` is the root of the referenced result. `.Content` is where most actions put what they produced, so `{{['ActionName']$.Content}}` is the shape you will write most often.

## Reading the triggering request

`{{['#HttpRequest']}}` holds the request that started the run: scheme, host, path, method, query, headers and body. It is the one context entry that is not an action.

```
{{['#HttpRequest'].Body.Name}}
{{['#HttpRequest'].Query.TenantName}}
```

Scheduled runs have no inbound request, so there is nothing useful in it. See [How automations start](../triggers.md).

## Reading parameters

[`SetParameter`](../actions-reference.md#setparameter) stores a value under a name you choose, and it is read back exactly like an action result:

```
{{['SupplierCode']}}
```

Use it to compute something once and quote it in several later actions, rather than repeating the same long expression.

## Preprocessors

`#eval(<expression>)` evaluates its argument first and substitutes the value, which lets you build an expression whose *shape* depends on data. It can appear anywhere in an expression, including inside a JSONPath filter.

```json title="Examples"
{
  "example1": "{{['#eval(['MapCustomDatabaseForm'].Name)'].Content}}",
  "example2": "{{['RecordsList'].Content..#eval(['MapCustomDatabaseForm'].Id)}}",
  "example3": "{{['RecordsList'].Content..#eval(['MapCustomDatabaseForm'].name).#eval(['MapCustomDatabaseForm'].Id)}}"
}
```

Reach for it only when a plain expression cannot express what you need. Nested preprocessors are hard to read and harder to debug.

## Related articles

- [Functions and pipe functions](./functions.md)
- [JSONPath](./jsonpath.md)
- [Actions](../actions-reference.md)
