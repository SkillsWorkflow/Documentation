---
title: 'Banco Central do Brasil'
description: "El Banco Central do Brasil publica los tipos de cambio oficiales frente al real brasileño. Esta integración actualiza el tipo de compra y el tipo de venta de las monedas registradas a partir de su boletín diario."
sidebar_label: Banco Central do Brasil
sidebar_position: 1
---

### Descripción

Este artículo describe la integración entre el **Banco Central do Brasil (BCB)** y `Skills Workflow`.

El BCB publica los tipos de cambio oficiales frente al real brasileño (BRL) todos los días hábiles. Esta integración lee ese boletín y actualiza el tipo de compra y el tipo de venta de las monedas registradas, de modo que los tipos de cambio ya no se introducen a mano.

El BCB es la fuente de verdad de estos tipos. Skills Workflow lo sigue.

---

### Tecnología de Intercambio de Datos

Los tipos proceden del boletín público de cierre diario del BCB. No hace falta ninguna cuenta, clave ni aplicación instalada localmente.

La actualización se ejecuta automáticamente una vez al día a las 20:00 UTC, después de que se publique el boletín. También puede iniciarse manualmente para una fecha concreta.

---

### Qué se Intercambia

| Recibido del BCB | Escrito en la moneda |
| --- | --- |
| Tipo de compra (*taxa de compra*), en BRL por unidad de la moneda | Tipo de compra |
| Tipo de venta (*taxa de venda*), en BRL por unidad de la moneda | Tipo de venta |

Solo cambian el tipo de compra y el tipo de venta. El resto de los ajustes de la moneda se mantienen.

---

### Qué Monedas se Actualizan

Una moneda se actualiza cuando cumple todas estas condiciones:

- No es la moneda por defecto de su empresa.
- Tiene un código ISO, tomado del campo `IsoCode` o, cuando este está vacío, del campo `ExternalId`.
- Ese código figura en el boletín del día con tipo de compra y tipo de venta.

Cualquier otra moneda se omite sin error. Una moneda registrada en varias empresas se actualiza en todas ellas.

---

### Ejecutar para una Fecha Concreta

Por defecto, la automatización lee el boletín de la fecha UTC actual. Para leer el boletín de otro día, ejecute la automatización manualmente con este cuerpo de la solicitud:

```json
{ "date": "20261109" }
```

La fecha se acepta como `yyyyMMdd` o `yyyy-MM-dd`. Con el cuerpo vacío, o con una fecha no válida, se usa la fecha actual.

La fecha solo elige el boletín que se lee. Los tipos se escriben como los tipos actuales de las monedas, por lo que ejecutar una fecha anterior los sustituye por los valores de ese día.

---

### Qué Debe Proporcionar la Agencia

- Monedas registradas con su código ISO, por ejemplo `USD` o `EUR`, en el código ISO o en el id externo.
- La automatización importada y activa, con su programación habilitada.

---

### Supervisión y Gestión de Errores

| Situación | Resultado |
| --- | --- |
| El BCB no tiene boletín para la fecha (fin de semana, festivo o aún no publicado) | La ejecución termina correctamente y los tipos no cambian. |
| El BCB devuelve cualquier otro error | La ejecución termina con el estado 502 y no se modifica ningún tipo. |
| No se pueden leer las monedas, o se rechaza una actualización | La ejecución falla y el error aparece en el registro de ejecución de la automatización. |

El registro de ejecución de cada ejecución muestra qué monedas se actualizaron.

---

### Conviene Saber

- El BCB solo publica en días hábiles. En fines de semana y festivos, las monedas conservan los tipos del último día hábil.
- Una moneda sin código ISO en ninguno de los dos campos se omite sin aviso.
- Los tipos son exactamente los publicados por el BCB, en BRL por unidad de la moneda. No se añade ningún margen.
- Cada ejecución sobrescribe el tipo de compra y el tipo de venta de las monedas coincidentes. Un cambio manual en esos dos valores dura hasta la siguiente ejecución.

---

Para los componentes, el flujo y el formato del boletín, consulte la **[Referencia Técnica](./reference)**.

### Artículos relacionados

- [Automatizaciones](/docs/build-and-extend/automations)
- [Cómo se inician las automatizaciones](/docs/build-and-extend/automations/triggers)
