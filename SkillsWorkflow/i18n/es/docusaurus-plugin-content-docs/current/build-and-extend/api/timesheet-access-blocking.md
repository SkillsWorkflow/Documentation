---
id: timesheet-access-blocking
title: API de bloqueo de acceso por partes de horas
description: Utiliza la API de Skills Workflow para identificar usuarios que deben bloquearse o desbloquearse según el estado de sus partes de horas y comunicar el resultado.
sidebar_label: Bloqueo por partes de horas
sidebar_position: 4
---

Skills Workflow ofrece listas de usuarios que deben bloquearse y desbloquearse según el estado de sus partes de horas. Un sistema externo puede consultar esas listas, modificar el acceso en su sistema de identidad y comunicar el resultado a Skills Workflow. Estos endpoints no desactivan ni restablecen por sí mismos el acceso en ese sistema externo.

## Autenticación y URL base

Utiliza las credenciales de la Client API facilitadas por el equipo de Soporte de Skills Workflow. Envía `X-AppId` y `X-AppSecret` en cada solicitud. Consulta la [autenticación de la Client API](/docs/build-and-extend/api/client-api#authentication) para obtener las credenciales. Utiliza la URL base de la API v2 asignada a tu entorno, representada a continuación como `{ApiUrl}`.

## Proceso de bloqueo

1. Llama a `GET {ApiUrl}/api/blockedloginrequests/userstoblock` para obtener los usuarios seleccionados para el bloqueo.
2. Bloquea cada cuenta en tu sistema de identidad externo, identificándola mediante `AdUserName`.
3. Llama a `POST {ApiUrl}/api/blockedloginrequests/block` con el resultado de cada usuario.

| Método y ruta | Finalidad | Respuesta |
| --- | --- | --- |
| `GET /api/blockedloginrequests/userstoblock` | Listar los usuarios que deben bloquearse. | `200 OK`: lista de objetos de usuario. |
| `POST /api/blockedloginrequests/block` | Comunicar el resultado de un intento de bloqueo. | `200 OK`: objeto de usuario. `404 Not Found` si `Oid` no identifica a un usuario. |

El GET acepta los parámetros de consulta opcionales `companyId`, `companyName`, `countryId` y `countryName`. Los parámetros de ID son GUID. Cada usuario devuelto tiene `Oid` (ID del usuario en Skills Workflow), `UserName` y `AdUserName`. El tipo de respuesta también define `Name`, pero el mapeo actual no lo rellena.

Envía un cuerpo JSON al endpoint POST:

| Campo | Tipo | Significado |
| --- | --- | --- |
| `Oid` | GUID, obligatorio | El `Oid` devuelto por el GET. |
| `Success` | booleano | Indica si el bloqueo externo se realizó correctamente. |
| `AccountExpirationDate` | fecha/hora o null | Fecha de caducidad de la cuenta que se registrará en Skills Workflow cuando `Success` sea `true`. |
| `Message` | string | Mensaje de resultado utilizado cuando falla el bloqueo. |

Si el bloqueo se realiza correctamente, Skills Workflow registra la fecha de caducidad de la cuenta y elimina el registro de reintentos de bloqueo del usuario. Si falla, guarda o actualiza ese registro. Los fallos retrasan un nuevo intento; después del tercer fallo, el usuario queda excluido de la lista de bloqueo. La lista también excluye a los usuarios ya marcados como bloqueados. El estado de aprobación de partes de horas puede afectar a la lista cuando está activado el bloqueo por aprobación.

## Proceso de desbloqueo

1. Llama a `GET {ApiUrl}/api/unblockuserrequests` para obtener las solicitudes de desbloqueo.
2. Restablece el acceso de cada cuenta en tu sistema de identidad externo, identificándola mediante `AdUserName`.
3. Llama a `PUT {ApiUrl}/api/unblockuserrequests` con el resultado de cada solicitud.

| Método y ruta | Finalidad | Respuesta |
| --- | --- | --- |
| `GET /api/unblockuserrequests` | Listar las solicitudes de desbloqueo recientes. | `200 OK`: lista de objetos de solicitud de desbloqueo. |
| `PUT /api/unblockuserrequests` | Comunicar el resultado de un intento de desbloqueo. | `200 OK`: ID de la solicitud. `400 Bad Request` para un ID inválido; `404 Not Found` si la solicitud no existe. |

El GET acepta los mismos filtros opcionales de empresa y país que la lista de bloqueo. Devuelve solicitudes de los 60 minutos anteriores. Cada solicitud tiene `Id`, `AdUserName` y `AccountExpirationDate` (que puede ser null).

Envía un cuerpo JSON al endpoint PUT:

| Campo | Tipo | Significado |
| --- | --- | --- |
| `Id` | string que contiene un GUID, obligatorio | El `Id` devuelto por el GET. |
| `RequestResult` | booleano, obligatorio | Indica si el desbloqueo externo se realizó correctamente. |
| `RequestResultMessage` | string | Mensaje de resultado que se registrará en la solicitud. |

Cuando `RequestResult` es `true`, Skills Workflow elimina la solicitud de desbloqueo y actualiza el estado de desbloqueo del usuario. Cuando es `false`, conserva la solicitud con el resultado comunicado. El cliente es responsable de restablecer el acceso en el sistema de identidad externo.

## Artículos relacionados

- [Client API](/docs/build-and-extend/api/client-api)
- [Rellenar partes de horas](/docs/product/time/timesheets/filling-time-sheets)
