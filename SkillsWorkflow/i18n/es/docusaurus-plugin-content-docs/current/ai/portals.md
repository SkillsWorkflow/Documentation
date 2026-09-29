---
id: ai-portals
title: Portales de Cliente
description: "Un portal de cliente es una página propia, generada con IA, servida desde Skills Workflow tras la sesión de tus usuarios y que lee datos de la plataforma en tiempo real a través de sus propios permisos."
sidebar_label: Portales de Cliente
sidebar_position: 7
---

Un portal de cliente es una página web propia, servida desde Skills Workflow en `/portal/{client}/{portal}/`. Con su propio layout, sus propios gráficos, sus propias palabras. No es un workspace ni una dashboard: la interfaz de la plataforma no se carga a su alrededor, así que la página puede tener el aspecto que quieras.

También vive **dentro de tu sesión**. Quien abre un portal inicia sesión como él mismo, y la página lee datos en tiempo real de Skills Workflow a través de sus propios permisos. No se exporta, copia ni sincroniza nada.

Los portales se escriben con IA. Describe la página que quieres, y la plataforma entrega una skill que le indica al agent todo lo que necesita saber sobre el entorno: a qué datos puede acceder, cómo llamarlos y qué prohíbe el sandbox.

:::note
Los portales son nuevos y todavía se están desarrollando. Lee [Lo que todavía no está](#what-is-not-there-yet) antes de planear un despliegue a usuarios clientes.
:::

## Para qué sirve un portal

- Una vista para un cliente que no encaja en ningún workspace: su propia página de informes, con sus propias palabras
- Una pantalla pensada para una única tarea, en un layout que los componentes de la plataforma no producen
- Una página que le entregas a alguien como un enlace, sin tener que enseñarle la plataforma

## Cómo funciona

Cada portal vive en una carpeta, y la estructura de carpetas *es* el registro. Publicar un portal es colocar sus archivos en algún sitio; eliminarlo es borrarlos. No hay ninguna lista que mantener sincronizada.

La dirección tiene exactamente dos segmentos: el cliente y, después, el portal. Ambos solo pueden contener letras minúsculas, números y guiones, y deben empezar por una letra o un número.

```
/portal/{client}/{portal}/
```

Los portales se almacenan en el sistema de archivos propio de tu tenant, dentro de una carpeta `Portals`, como `{client}/{portal}/index.html` más todo lo demás que la página necesite. Se aplican los permisos propios del sistema de archivos: quien no puede leer la carpeta no obtiene el portal.

### Iniciar sesión

Una solicitud de portal sin sesión se envía a una pantalla de inicio de sesión y se devuelve al portal después. A partir de ahí, la página se sirve bajo esa sesión.

La propia página nunca recibe un token de acceso. Cuando llama a la API, la llamada va a la propia dirección de Skills Workflow y el servidor adjunta las credenciales. El portal lee los datos como el usuario con sesión iniciada, y no puede leer nada que ese usuario tampoco pudiera.

### A qué puede acceder la página

A cada portal se le da un pequeño SDK. A través de él, la página puede:

- Llamar a la API v2 y v3 de Skills Workflow como el usuario con sesión iniciada
- Leer el perfil del usuario con sesión iniciada, disponible ya en el primer renderizado sin necesidad de ninguna llamada
- Ejecutar tus **named queries de extracción de datos**, las mismas que hay detrás de tus informes, que es lo que rellena una tabla o un gráfico
- Dibujar los avatares propios de la plataforma para un usuario, cliente, grupo de clientes o empresa
- Cerrar la sesión

Las named queries se filtran, ordenan y paginan en la base de datos antes de devolver cualquier fila, y son de solo lectura. Cada una se verifica según el rol, así que a un usuario al que no se le ha concedido un informe también se le deniega en un portal.

### El sandbox

Un portal se ejecuta bajo una content security policy (política de seguridad de contenido) deliberadamente estricta:

- Ningún script de ningún otro origen. Todo lo que la página necesita está dentro de la carpeta del portal.
- Ninguna llamada a nada que no sea Skills Workflow.
- Las imágenes deben provenir de Skills Workflow, o estar incrustadas en la página.
- Google Fonts es la única fuente externa permitida, para sus hojas de estilo y archivos de fuentes.

Por eso, los gráficos se dibujan en la propia página.

## Cómo pedir un portal

1. **Di para qué es la página y quién la abre.** Un cliente, un público, una pregunta que la página responde.
2. **Identifica los datos.** Qué informe, qué cifras, qué registros. Un portal lee lo que publican tus queries de extracción de datos, así que una pregunta que ninguna query responde necesita primero la query.
3. **El portal se genera.** La skill `client-portal` le da al agent todo el contrato: el SDK, el sandbox, la gramática de las queries y la regla de que no se puede inventar ningún endpoint ni columna. Cuando un hecho no se puede confirmar, el agent lo dice.
4. **Revísalo frente a los distintos estados, no solo el camino ideal.** Un portal debe mostrar una respuesta vacía, una denegada y un servicio inalcanzable como tres cosas distintas. Ábrelo como un usuario al que *no* se le ha concedido el informe y comprueba qué ve.
5. **Publícalo** en la carpeta `Portals` del sistema de archivos de tu tenant, en `{client}/{portal}/`.

## Reglas y comportamiento

- Toda solicitud está autorizada. No existe ningún portal anónimo.
- Un portal perteneciente a otro tenant es indistinguible de uno que nunca existió. Los portales y los clientes no se pueden enumerar entre tenants.
- Cerrar sesión elimina la cookie de sesión. Como en el resto de la plataforma, esto no invalida el token en sí.
- Volver a publicar un archivo que ya existe debe sustituirlo como una nueva versión. Volver a subirlo crea un segundo archivo con el mismo nombre, y el portal puede seguir sirviendo el antiguo.
- Un portal se sirve solo en modo lectura. No tiene almacenamiento propio; todo lo que guarde pasa por la API.

## Lo que todavía no está

Esto es lo que se sabe y vale la pena decidir antes de llevar los portales a usuarios clientes:

- **No hay ninguna herramienta de publicación.** Un portal se publica creando sus carpetas y subiendo sus archivos.
- **Un portal no está delimitado a su cliente.** Hoy, el acceso es "tiene una sesión, y la carpeta existe". El segmento del cliente en la URL no restringe quién puede abrirlo, así que cualquier usuario con sesión iniciada puede abrir el portal de cualquier cliente si conoce su dirección. Restringir las carpetas de los portales por rol es el mecanismo a usar mientras tanto.
- **Quién puede escribir en la carpeta `Portals` es un límite de seguridad.** Un portal ejecuta script en el navegador de todos los que lo abren. Trata el acceso de escritura a esa carpeta como tratarías el despliegue de código.
- **Un build que genere rutas absolutas no funcionará.** Un portal se sirve bajo su propia ruta; una página cuyos assets se referencien desde la raíz del sitio los pierde todos. Genera rutas relativas, o configura la ruta base en el momento del build.

## Artículos relacionados

- [Añadir tus propias skills, agents y tools](/docs/ai/ai-extend)
- [Data Extraction API](/docs/build-and-extend/api/data-extraction-api)
- [Asistente de IA](/docs/ai/ai-assistant)
