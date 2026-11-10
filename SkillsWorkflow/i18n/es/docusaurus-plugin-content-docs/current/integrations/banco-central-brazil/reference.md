---
title: "Banco Central do Brasil: Referencia Técnica"
description: "Componentes, flujo, formato del boletín y configuración de la automatización BancoCentralBrazil-ExchangeRates."
sidebar_label: Referencia Técnica
sidebar_position: 2
---

:::info Referencia técnica
Esta página es la especificación de interfaz de la integración con el Banco Central do Brasil: componentes, flujo, formato del boletín y configuración. Está dirigida al equipo que implementa el intercambio.

Para saber qué hace esta integración y cómo se configura, consulte **[Banco Central do Brasil](./)**.
:::

### Componentes

| Nombre | Tipo | Versión | Estado | Función |
| --- | --- | --- | --- | --- |
| BancoCentralBrazil-ExchangeRates | Automatización | 4 | Activa | Diariamente a las 20:00 UTC: descarga el boletín de cierre del BCB y actualiza el tipo de compra y el tipo de venta de cada moneda coincidente |

La automatización tiene un subflujo, `UpdateCurrencyRateSW`, que se ejecuta una vez por cada moneda coincidente.

Origen: `BancoCentralBrazil-ExchangeRates - (Automation v4).json`.

---

### Cómo Funciona

1. `RateDate` lee el `date` opcional del cuerpo de la solicitud (`#HttpRequest`), quita los guiones y lo usa cuando tiene 8 caracteres. En caso contrario, usa la fecha UTC actual con el formato `yyyyMMdd`.
2. `GetBcbRates` descarga del BCB el boletín de esa fecha, un archivo CSV con el nombre de la fecha (`yyyyMMdd`). Es una llamada externa sin autenticación.
3. `BcbBulletinAvailable` se bifurca según el estado HTTP. `200` continúa. `404` pasa a `ExitNoBulletin`, que devuelve `200` y deja los tipos sin cambios. Cualquier otro estado pasa a `ExitBcbUnavailable`, que devuelve `502`.
4. `ParseBcbRates` (`CsvMap`) lee el archivo con `;` como delimitador y sin fila de encabezado.
5. `GetCurrencies` llama a `GET /api/v3/currencies`.
6. `BuildUpdates` (`ApplyTemplate`) recorre las monedas, omite la moneda por defecto, obtiene el código ISO de `IsoCode` o de `ExternalId` y busca una fila del boletín con el mismo código. Las comas decimales pasan a puntos. El resultado es un array JSON de `{ id, isoCode, buy, sell }`.
7. `UpdateCurrencies` recorre ese array y ejecuta `UpdateCurrencyRateSW` para cada elemento. Llama a `PATCH /api/v3/currencies/{id}` con `{"buy":{"value":…},"sell":{"value":…}}`.

---

### Formato del Boletín

El archivo CSV no tiene fila de encabezado y usa `;` como separador de campos. La automatización lee estas columnas:

| Columna | Contenido | Se usa para |
| --- | --- | --- |
| `Field4` | Símbolo de la moneda (código ISO) | Coincidencia con el código ISO de la moneda |
| `Field5` | Tipo de compra (*taxa de compra*), en BRL | Tipo de compra de la moneda |
| `Field6` | Tipo de venta (*taxa de venda*), en BRL | Tipo de venta de la moneda |

Las demás columnas (fecha, código de moneda del BCB, tipo y las dos paridades) no se usan.

---

### Puntos de Contacto con Sistemas Externos

- BCB: la descarga pública del boletín de cierre, un CSV por fecha. El conjunto de datos se publica como datos abiertos con el nombre *Taxas de câmbio - todos os boletins diários*.
- API de Skills Workflow: `GET /api/v3/currencies` y `PATCH /api/v3/currencies/{id}`.

---

### Configuración

- Programación: `Daily`, cada 1 día, a las 20:00 UTC.
- Cuerpo de la solicitud, solo en ejecuciones manuales: `date` opcional, como `yyyyMMdd` o `yyyy-MM-dd`.
- No se usan claves de configuración, parámetros del sistema, consultas con nombre ni webhooks.
- Al importar la automatización en un entorno, establezca el `tenantId` de la definición con el tenant de ese entorno y asigne al planificador un `userId` válido en ese tenant.
