---
id: data
title: " "
sidebar_label: Data
---

# Data

The namespace Data provides to developers, methods to easily manipulate data.

```javascript
//accessing to data methods
SW.Data.{methodName}
```

---

## aggregate

#### Description

This method can be used to aggregate data and perform operations, like sum, count, max or custom, when aggregating data.

It can also remove rows where a field is equal to zero (noZeros) and order them (sort).

#### Method(s)

```javascript
1    function aggregate(
        dataArray: Object[],
        aggregateBy: [{ Name: string; Field: string }],
        params?: {
            operations: [
                {
                    Name: string;
                    Field: string;
                    OperationType: "sum" | "count" | "max" | "custom";
                    CustomFunction?: Function;
                }
            ];
            sort: {
                fields: string[];
                order: "ascendent" | "descendent";
            };
            noZeros: string[];
        }
    ): any[]
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
            <td><code>dataArray</code></td>
            <td>Object[]</td>
            <td>true</td>
            <td></td>
            <td>Data array to aggregate</td>
        </tr>
        <tr className="selected">
            <td><code>aggregateBy Name</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Name of the aggregated field in the new set of data</td>
        </tr>
        <tr className="selected">
            <td><code>aggregateBy Field</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Field to use in the aggregation</td>
        </tr>
        <tr className="selected">
            <td><code>operations Name</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>Operation result field name</td>
        </tr>
        <tr className="selected">
            <td><code>operations Field</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>Field to use in the operation</td>
        </tr>
        <tr className="selected">
            <td><code>OperationType</code></td>
            <td>"sum" | "count" | "max" | "custom"</td>
            <td>false</td>
            <td></td>
            <td>Operation to perform</td>
        </tr>
        <tr className="selected">
            <td><code>CustomFunction</code></td>
            <td>Function</td>
            <td>false</td>
            <td></td>
            <td>Operation to perform when operationType is custom</td>
        </tr>
        <tr className="selected">
            <td><code>sort fields</code></td>
            <td>string[]</td>
            <td>false</td>
            <td></td>
            <td>Fields to use in the order by</td>
        </tr>
        <tr className="selected">
            <td><code>sort order</code></td>
            <td>"ascendent" | "descendent"</td>
            <td>false</td>
            <td></td>
            <td>Order type</td>
        </tr>
        <tr className="selected">
            <td><code>noZeros</code></td>
            <td>string[]</td>
            <td>false</td>
            <td></td>
            <td>To remove rows where a given field is zero</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Data.aggregate(dataArray, [{Name: 'AggregatedName', Field: 'UserName'}],
{
    operations: [
        {Name: 'SumAge', Field: 'Age', OperationType: 'sum'},
        {Name: 'MaxAge', Field: 'Age', OperationType: 'max'},
        {Name: 'CountRows', OperationType: 'count'}
    ],
    sort: {
        fields: ['AggregatedName', 'MaxAge'];
        order: "ascendent";
    },
    noZeros: ['SumAge']
});
```

#### Response

It will return a new set of data aggregated by UserName with the fields: - AggregatedName: choosen name for the aggregation field - SumAge: sum of the age where the UserName is the same - MaxAge: max age where the UserName is the same - CountRows: count of the rows where the UserName is the same

It will be sorted by the fields AggregatedName and MaxAge in an ascendent order and it will remove rows where the SumAge is equal to zero.

#### Example

<figure>

![img-box-shadow](/img/sdk/data/aggregate_method.png)

<figcaption></figcaption>
</figure>
