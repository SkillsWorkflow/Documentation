---
id: utils-datetime
title: " "
sidebar_label: Datetime
---

# Datetime

A sub namespace of Utils, exclusive for date operations

---

## convertMinToDate

#### Description

This method can be used to convert minutes into a date.

#### Method(s)

```javascript
function convertMinToDate(totalMinutes: number): Date
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
            <td><code>totalMinutes</code></td>
            <td>number</td>
            <td>true</td>
            <td></td>
            <td>Minutes to convert to date</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Utils.Datetime.convertMinToDate(63984503);
```

#### Response
```javascript
"Thu Aug 26 2021 16:23:00 GMT+0100 (Western European Summer Time)"
```

---

## convertToUtc

#### Description

This method can be used to convert a local date to utc date.

#### Method(s)

```javascript
function convertToUtc(date: Date): Date
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
            <td><code>date</code></td>
            <td>Date</td>
            <td>true</td>
            <td></td>
            <td>Date to convert to utc</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Utils.Datetime.convertToUtc("Thu Aug 26 2021 16:23:00 GMT+0100 (Western European Summer Time)");
```

#### Response
```javascript
"Thu Aug 26 2021 15:23:00 GMT+0100 (Western European Summer Time)"
```
---

## convertUtcToLocal

#### Description

This method can be used to convert utc date to a local date.

#### Method(s)

```javascript
function convertUtcToLocal(utcDate: Date): Date
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
            <td><code>utcDate</code></td>
            <td>Date</td>
            <td>true</td>
            <td></td>
            <td>Date to convert to local</td>
        </tr>
    </tbody>
</table>

### Basic Usage

```javascript
SW.Utils.Datetime.convertUtcToLocal("2021-08-25T15:23:26.222Z")
```

### Response
```javascript
"Wed Aug 25 2021 16:23:26 GMT+0100 (Western European Summer Time)"
```
### Example

```javascript {13}
{
    colCount: 2,
    dataField: "CreatedOnUtc",
    editorType: "dxDateBox",
    label: {
        text: "Created On"
    },
    editorOptions: {
        type: "datetime",
        displayFormat: "dd/MMM/yyyy HH:mm",
        onInitialized: function onInit(e) {
            var context = workspaceContext;
            var date = SW.Utils.Datetime.convertUtcToLocal(context.currentDocument.Dto.Request.CreatedOnUtc);
            e.component.option('value', date);
        }
    }
}
```

<figure>

![img-box-shadow-200](/img/responses/convertUtcToLocal_example.png)

</figure>

---

## formatDateToString

#### Description

This method can be used to convert date to string format "yyyy-MM-dd" or "yyyy-MMMM-dd, hh:mm".

#### Method(s)

```javascript
function formatDateToString(date: Date, params: { includeTime?: boolean } = { includeTime: false }): string
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
            <td><code>utcDate</code></td>
            <td>Date</td>
            <td>true</td>
            <td></td>
            <td>Date to convert to local</td>
        </tr>
        <tr className="selected">
            <td><code>includeTime</code></td>
            <td>boolean</td>
            <td>false</td>
            <td>false</td>
            <td>If to convert with or without time</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
var date = "Wed Aug 25 2021 16:23:26 GMT+0100 (Western European Summer Time)";
SW.Utils.Datetime.formatDateToString(date);
SW.Utils.Datetime.formatDateToString(date, {includeTime: true});
```

#### Response
```javascript
"2021-08-25"
"25 August 2021, 16:23"
```

---

## getDateTimeFormat

#### Description

This method can be used to get the default datetime format.

#### Method(s)

```javascript
function getDateTimeFormat(): string
```

#### Basic Usage

```javascript
SW.Utils.Datetime.getDateTimeFormat();
```

#### Response
```javascript
"dd/MMM/yyyy HH:mm"
```

---

## getMinutesInHHMMformat

#### Description

This method can be used to convert minutes to format HH:mm.

#### Method(s)

```javascript
function getMinutesInHHMMformat(minutes: number): string
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
            <td><code>minutes</code></td>
            <td>number</td>
            <td>true</td>
            <td></td>
            <td>Minutes to convert to HH:mm</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Utils.Datetime.getMinutesInHHMMformat(1234)
```

#### Response
```javascript
"20:34"
```

---

## getTimeRange

#### Description

This method can be used to get a end date by giving a start date and a range.

#### Method(s)

```javascript
1   function getTimeRange(value: Date, shift: DateShift, 
        params: { 
            centerAroundValue?: boolean 
        } = { 
            centerAroundValue: false 
        }
    ): { startDate: Date, endDate: Date }
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
            <td>Date</td>
            <td>true</td>
            <td></td>
            <td>Start date in range</td>
        </tr>
        <tr className="selected">
            <td><code>shift</code></td>
            <td>DateShift</td>
            <td>true</td>
            <td></td>
            <td>Range</td>
        </tr>
        <tr className="selected">
            <td><code>centerAroundValue</code></td>
            <td>boolean</td>
            <td>false</td>
            <td></td>
            <td>If returns exact minutes and seconds</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
var date = "Wed Aug 25 2021 16:23:26 GMT+0100 (Western European Summer Time)";
SW.Utils.Datetime.getTimeRange(date, {unit: "HOUR", value: 1, id: "HOUR"});
SW.Utils.Datetime.getTimeRange(date, {unit: "HOUR", value: 1, id: "HOUR"}, {centerAroundValue: true});
```

#### Response
```javascript
{
   startDate: "Wed Aug 25 2021 16:00:00 GMT+0100 (Western European Summer Time)",
   endDate: "Wed Aug 25 2021 17:00:00 GMT+0100 (Western European Summer Time)"
}
{
   startDate: "Wed Aug 25 2021 16:23:26 GMT+0100 (Western European Summer Time)",
   endDate: "Wed Aug 25 2021 17:23:26 GMT+0100 (Western European Summer Time)"
}
```

---

## timeAgo

#### Description

This method can be used to get how much time has passed since a given date.

#### Method(s)

```javascript
1   function timeAgo(dateString: string,
        params: {
            unitOfTime?: "seconds" | "minutes" | "hours" | "days" | "months" | "years"
        } = {}
    ): string | number
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
            <td><code>dateString</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Date in string</td>
        </tr>
        <tr className="selected">
            <td><code>unitOfTime</code></td>
            <td>"seconds" | "minutes" | "hours" | "days" | "months" | "years"</td>
            <td>false</td>
            <td></td>
            <td>Unit of the result</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
var date = "Wed Aug 25 2021 16:23:26 GMT+0100 (Western European Summer Time)";
SW.Utils.Datetime.timeAgo(date);
SW.Utils.Datetime.timeAgo(date, {unitOfTime: 'minutes'});
```

#### Response
```javascript
"a minute ago"
1
```