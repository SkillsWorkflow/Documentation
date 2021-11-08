---
id: branding
title: " "
sidebar_label: Branding
---

# Branding

With this namespace, you can quickly provide methods to manipulate the tenant branding.

The namespace Branding provides to developers, methods to easily get and set a tenant branding.

```javascript
//accessing to Branding methods
SW.Branding.{methodName}
```

---

## get

#### Description

This method can be used to get the tenant branding.

#### Method(s)

```javascript
1   declare function get(): BrandingDto;
```

#### Basic Usage

```javascript
SW.Branding.get();
```

---

## set

#### Description

This method can be used to set the tenant branding.

#### Method(s)

```javascript
1   declare function set(brandingDto: BrandingDto): void;
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
            <td><code>url</code></td>
            <td>brandingDto</td>
            <td>true</td>
            <td></td>
            <td>New branding to set</td>
        </tr>
    </tbody>
</table>

#### Basic Usage

```javascript
SW.Branding.set({
    loginImage: {
        url: 'loginImageURL',
        style: 'width: 100px; heigth: 100px'
    }
});
```
