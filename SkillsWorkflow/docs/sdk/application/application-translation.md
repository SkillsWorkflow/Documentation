---
id: application-translation
title: " "
sidebar_label: Translation
---

## get

#### Description

This method can be used to get the translation of some words or sentences.

#### Method(s)

```javascript
1   declare function get(value: string): string;
```

<table className="custom-table">
    <thead>
        <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Required</th>
            <th>Defaults</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr className="selected">
            <td><code>value</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Word or sentence to translate</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Application.Translation.get('Hello');
```