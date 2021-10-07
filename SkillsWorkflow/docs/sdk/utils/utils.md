---
id: utils
title: " "
sidebar_label: Introduction
sidebar_position: 1
---

# Utils

With this namespace, you can quickly access methods that perform common operations.

The namespace Utils provides to developers, methods to easily implement regularly used operations.

```javascript
//accessing to utils methods
SW.Utils.{methodName}
```

---

## convertToString

#### Description

This method can be used to convert different variable types to string.

#### Method(s)

```javascript
1    function convertToString(valueToConvert: any): string
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
            <td><code>valueToConvert</code></td>
            <td>any</td>
            <td>false</td>
            <td></td>
            <td>Variable to convert(boolean, number, function, array, object)</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Utils.convertToString(4);
SW.Utils.convertToString({first: 1, second: 2});
SW.Utils.convertToString(function () {return 2+2});
```

#### Response
```javascript
"4"
"{first: 1,second: 2}"
"function () {return 2+2}"
```

---

## copyToClipboard

#### Description

This method can be used to save text in the clipboard.

#### Method(s)

```javascript
1    function copyToClipboard(text: string): void
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
            <td><code>text</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>Text to save in clipboard</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Utils.copyToClipboard('SkillsWorkflow')
```

#### Response

The text "SkillsWorkflow" will be saved in the clipboard

---

## getDataArrayFromMultipleSelectionFieldString

#### Description

This method can be used to convert a string of data into an array of data.

#### Method(s)

```javascript
1    function getDataArrayFromMultipleSelectionFieldString(dataString: string): any[]
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
            <td><code>dataString</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>String of data to be converted to array</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Utils.getDataArrayFromMultipleSelectionFieldString("[{\"name\":\"John\"}, {\"name\":\"Arthur\"}]")
```

#### Response

```javascript
[{name: John}, {name: Arthur}]
```

---

## getEmptyGuidValue

#### Description

This method can be used to check if parameter key it's a empty guid.

#### Method(s)

```javascript
1    function getEmptyGuidValue(key: string, callback: Function): Promise
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
            <td><code>key</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>Guid value</td>
        </tr>
        <tr className="selected">
            <td><code>callback</code></td>
            <td>Function</td>
            <td>false</td>
            <td></td>
            <td>Function to be executed case is not empty guid</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Utils.getEmptyGuidValue('00000000-0000-0000-0000-000000000000', 
                           function () {
                               return "It's empty guid"
                           }
)
SW.Utils.getEmptyGuidValue('72917063-915e-4e23-a699-2a6e78804ed', 
                           function () {
                               return "It's not empty guid"
                           }
)
```

#### Response

```javascript
Promise<{Id: "00000000-0000-0000-0000-000000000000", Name: "N/A"}>
"It's not empty guid"
```

---

## isValidGuid

#### Description

This method can be used to check if a given guid is valid.

#### Method(s)

```javascript
1    function isValidGuid(id: string): boolean
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
            <td><code>id</code></td>
            <td>string</td>
            <td>false</td>
            <td></td>
            <td>Guid to check</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Utils.isValidGuid('SkillsWorkflow');
SW.Utils.isValidGuid('23814aa4-0b56-4480-8ba8-c02991a5fdca');
```

#### Response

```javascript
false
true
```

---

## setExternalImage

#### Description

This method can be used to append an image to an html element.

#### Method(s)

```javascript
1    function setExternalImage(element: HTMLElement, size: Size, url: string): HTMLElement
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
            <td><code>element</code></td>
            <td>HTMLElement</td>
            <td>true</td>
            <td></td>
            <td>Element to append image</td>
        </tr>
        <tr className="selected">
            <td><code>size</code></td>
            <td>Size</td>
            <td>true</td>
            <td>MEDIUM</td>
            <td>Image size</td>
        </tr>
        <tr className="selected">
            <td><code>url</code></td>
            <td>string</td>
            <td>true</td>
            <td></td>
            <td>Image url</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Utils.setExternalImage(element, 'small', 'https://test.com/images/logo_new_small.png');
```

#### Response

The image will be append to the given element.

---