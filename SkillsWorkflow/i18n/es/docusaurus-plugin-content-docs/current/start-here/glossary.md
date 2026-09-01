---
id: glossary
title: 'Glosario'
description: "Qué significa cada término en Skills Workflow, cómo se relacionan los conceptos, y qué palabras usan la interfaz y la API para lo mismo."
sidebar_label: Glosario
---

Las palabras de abajo se usan en toda esta documentación, en la interfaz y en la API. Algunas
tienen más de un significado según dónde las encuentres, y algunas cosas tienen un nombre en
la interfaz y otro en la API. Ambos casos se señalan explícitamente.

:::note Leer esto junto con la API
Donde la interfaz y la API no coinciden en un nombre, la entrada lo indica bajo **En la API**.
El nombre de la interfaz es el que se usa en el resto de esta documentación.
:::

---

## La forma del trabajo

Estos son los registros sobre los que se construye la plataforma, de fuera hacia dentro.

### Cliente

La organización para la que se hace el trabajo. Un cliente puede existir bajo dos formas,
relacionadas pero no intercambiables:

- **Cliente Comercial** — el cliente tal como lo tratan los equipos comerciales: la marca u
  organización para la que se entrega el trabajo.
- **Cliente de Facturación** — la entidad legal a la que efectivamente se factura. Un cliente
  comercial puede facturar a través de entidades distintas en compañías distintas.

Los dos están vinculados por compañía, así que la misma marca puede ser comercialmente de un
sitio y facturarse desde otro.

:::caution Cliente vs Customer
En estos documentos, **Cliente** significa el cliente de la agencia. **Customer** significa
una agencia que usa Skills Workflow — lo verás en la sección [Confianza](../trust/), escrita
para ellas. Si estás leyendo una guía de cómo hacer, la palabra que quieres es Cliente.
:::

### Fee

Un acuerdo con un cliente bajo el que se entrega trabajo. Un Fee puede tener montos
recurrentes o acordados, como una mensualidad fija — y los proyectos pueden asociarse a un
Fee para que las horas entregadas se descuenten de él.

### Proyecto

Un cuerpo de trabajo para un cliente. Un proyecto agrupa los jobs que lo entregan, tiene su
propia etapa, dueño y fechas, y puede vincularse a un Fee.

### Job

La unidad de trabajo a la que las personas están efectivamente asignadas y sobre la que
registran tiempo. Los jobs están dentro de un proyecto.

**En la API:** un Job es la entidad `Deliverable` — lo verás como
`Skill.Module.BusinessObjects.Deliverable` en payloads de webhook y configuración de
integración. Los endpoints REST, sin embargo, son `/api/jobs`. El mismo registro, dos
nombres, según la capa que estés mirando.

:::caution "Deliverable" significa dos cosas distintas
Ten cuidado con esta palabra — es el término con más probabilidades de llevarte a la página
equivocada.

1. **En un Presupuesto**, un *Deliverable* es una línea — un servicio que se vende al
   cliente. Ver [Ítem de Presupuesto](#item-de-presupuesto) más abajo.
2. **En la API y en la documentación de integraciones**, `Deliverable` es el nombre de
   entidad de un **Job**.

No están relacionados. Si estás presupuestando algo, quieres el sentido 1. Si estás leyendo
sobre webhooks, cambios de etapa o integraciones, quieres el sentido 2 — y el resto de esta
documentación llama a eso un Job.
:::

### Brief

Un trabajo solicitado, normalmente levantado por un cliente. Los briefs tienen sus propios
ítems y pueden convertirse en jobs.

**En la API:** la entidad `Request`. "Brief" es el nombre que usa la interfaz para este
registro.

### Brief (descripción)

La descripción escrita anexada a un documento, que explica qué se quiere. Un brief está
anexado *a* un registro (un job, un proyecto, una solicitud) en lugar de ser un registro por
derecho propio.

**En la API:** la entidad `DocumentBrief`.

:::caution "Brief" también significa dos cosas distintas
En español, las dos entradas de arriba coinciden en el mismo nombre — en inglés son palabras
distintas, **Request** y **Brief**.

1. **La solicitud de trabajo en sí** (el registro que levanta un cliente y que puede
   convertirse en un job) — en inglés, *Request*.
2. **El campo de descripción escrita anexado a cualquier documento** (`DocumentBrief` en la
   API) — en inglés, *Brief*.

Si estás leyendo sobre cómo llega el trabajo de un cliente, quieres el sentido 1. Si estás
leyendo sobre rellenar o reescribir la descripción de un job, proyecto o presupuesto, quieres
el sentido 2.
:::

---

## Dinero

### Presupuesto

Un desglose de precios del trabajo, presentado al cliente. Un presupuesto puede crearse
directamente bajo un proyecto o job, o vincularse a un **Fee**.

Un presupuesto se construye en su pestaña **Cotizaciones**, que tiene cuatro secciones:

| Sección | Qué contiene |
| --- | --- |
| **Deliverables** | Los servicios que se venden — cada línea es un deliverable (ver abajo) |
| **Costos de Terceros** | Costos de proveedores externos |
| **Gastos** | Transporte, comidas, hoteles y similares |
| **Recursos** | Personas internas y las horas que se están presupuestando |

### Ítem de Presupuesto {#item-de-presupuesto}

Una sola línea en un presupuesto que representa algo vendido al cliente. Un ítem de
presupuesto puede ser un trabajo concreto, un mes de una mensualidad fija, un servicio, o
cualquier otra forma en que la agencia quiera desglosar el presupuesto. Los costos de
terceros, gastos y recursos se presupuestan cada uno *contra* un ítem de presupuesto.

Esto **no** es lo mismo que un Job — ver el aviso bajo [Job](#job).

### Cotización

La pestaña de un Presupuesto donde se construye su detalle, y por extensión el acto de
presupuestar una línea ("cotizar este ítem"). Una cotización es parte de un presupuesto, no
un documento separado.

### Rate Card

Los precios y costos usados al presupuestar recursos, definidos por grupo de tipología y/o
por usuario. Una rate card tiene columnas, así que la misma tarjeta puede tener tarifas
distintas para situaciones distintas. Un cliente puede tener una rate card por defecto, que
un presupuesto hereda.

**En la interfaz:** el campo de un Presupuesto que selecciona la tarifa se llama **Tabla**.
Se refiere a la tarifa tomada de la Rate Card elegida.

### Factura

El documento levantado en Skills Workflow para cobrar a un cliente. Una factura es lo que la
agencia aprueba internamente.

### Invoice

El documento que el sistema financiero o de contabilidad emite a partir de una factura
aprobada. La mayoría de las [integraciones](/docs/integrations) funcionan enviando una
**Factura** aprobada hacia afuera y escribiendo de vuelta en ella la referencia del
**Invoice** resultante — así que una factura en Skills Workflow lleva el número del invoice
que produjo.

### Nota de Crédito

Un documento que reduce un monto ya facturado, emitido cuando el valor de un presupuesto
facturado baja.

### Orden de Compra / Factura de Proveedor

**Orden de Compra** — lo que la agencia le pide a un proveedor. **Factura de Proveedor** —
lo que el proveedor le factura a la agencia. Ambas fluyen hacia el sistema financiero de la
misma forma que las facturas.

### Gasto

Un costo en el que incurre una persona y que se reclama — viajes, comidas y similares. Los
gastos se agrupan en una **Hoja de Gastos** para su aprobación.

---

## Personas y estructura

### Usuario

Alguien que puede iniciar sesión y usar Skills Workflow.

### Empleado

El registro laboral detrás de una persona. Se mantiene por separado de la cuenta de usuario,
para que los datos de RR. HH. puedan mantenerse independientemente del acceso a la
plataforma.

**En la API:** `/api/users` y `/api/employees` son endpoints separados, y un usuario puede
estar vinculado a un registro de empleado.

### Tipología

El puesto de una persona — qué hace, y por tanto qué cuesta y para qué puede presupuestarse.
Las tipologías son aquello contra lo que se presupuestan y planifican los recursos.

### Grupo de Tipología

Una agrupación de tipologías, usada para rate cards, planificación e informes. Las rate
cards normalmente se definen por grupo de tipología en lugar de por tipología individual.

:::note Tipología no es Role
**Tipología** es lo que hace alguien, para costeo y planificación. **Role** es lo que alguien
tiene permitido ver y hacer en la plataforma. Cambiar una tipología afecta tarifas y
asignación de recursos; cambiar un role afecta permisos.
:::

### Role

Un perfil de acceso que controla qué puede ver y hacer un usuario. Los roles rigen los
permisos — incluyendo, en algunos sitios, qué columnas individuales de un documento son
visibles.

### Compañía, División, Departamento

La jerarquía organizacional, de mayor a menor. Una **Compañía** es una entidad legal con sus
propias configuraciones, moneda y conexión financiera. Una **División** agrupa departamentos
dentro de ella. Un **Departamento** es donde se ubican las personas, y se usa para
planificación y workflow.

Un único tenant de Skills Workflow puede contener varias compañías, cada una con su propia
configuración y sus propias credenciales de integración.

---

## Workflow

### Etapa

Dónde se encuentra actualmente un documento en su proceso — por ejemplo una factura que está
En Aprobación, o un job que está En Progreso. Cada tipo de documento tiene su propio
conjunto de etapas.

**En la API:** una etapa es un `workflowState` — lo verás como `workflowState` en payloads y
`/api/jobs/{id}/workflowstate` como endpoint. "Etapa" y "workflow state" son la misma cosa.

:::note Etapa vs Estado
Esta documentación usa **Etapa** para dónde está un documento en su workflow. Donde veas
**estado**, normalmente significa otra cosa — por ejemplo si una ejecución de integración
tuvo éxito. Si una página usa "estado" para referirse a la etapa del workflow, léelo como
Etapa.
:::

### Transition

El paso de una etapa a la siguiente, y el permiso para hacerlo. Tiene que existir una
transition entre dos etapas para que un documento pueda pasar entre ellas — lo que explica
por qué una [integración](/docs/integrations) puede reportar que no pudo aplicar un cambio
de etapa aunque la etapa de destino exista.

### Workflow

El conjunto completo de etapas y transitions para un tipo de documento, incluyendo quién
puede hacer cada paso y qué ocurre cuando lo hace.

### Acción de Workflow

Algo que la plataforma ejecuta automáticamente como parte de una transition — crear una
versión, asignar a alguien, pedir confirmación, enviar un correo, generar un presupuesto, y
así sucesivamente.

---

## Automatización e integración

### Automatización

Una secuencia configurada de pasos que la plataforma ejecuta por sí sola — llamar a un
sistema externo, ejecutar una query, crear o actualizar registros. La mayoría de las
[integraciones](/docs/integrations) se construyen a partir de automatizaciones.

### Webhook

Un disparador que se activa cuando algo le ocurre a un documento — creado, actualizado,
etapa cambiada, eliminado — e inicia una automatización. Los webhooks pueden filtrarse, así
que solo se disparan para etapas o tipos de documento concretos.

### Named Query

Una query guardada, usada por automatizaciones y workspaces para buscar o componer datos.

### Workspace

Una pantalla configurable — un dashboard o un panel en un registro — construida a partir de
componentes y fuentes de datos. Algunas integraciones incluyen workspaces que incorporan
directamente un sistema externo en un registro.

### Parámetro del Sistema / Clave de Configuración

Dónde se guardan las credenciales y ajustes de conexión de una integración, mantenidos fuera
de la propia automatización para que puedan diferir por entorno.

### Campo Personalizado

Un campo adicional añadido a un tipo de documento más allá de los estándar. Las
integraciones suelen usar un campo personalizado para guardar el identificador del registro
correspondiente en el sistema externo.

### Tabla Personalizada

Una tabla de datos guardada en Skills Workflow fuera del modelo estándar — usada para datos
de referencia, y por algunas integraciones para su propia contabilidad interna.

---

## Tiempo

### Hoja de tiempo

Un registro del tiempo trabajado, introducido contra un job por un usuario, y aprobado.

### Permiso

Tiempo libre — vacaciones, enfermedad y similares. El permiso es lo que hace que alguien no
esté disponible en la planificación y asignación de recursos, y por eso existen
[integraciones de RR. HH.](/docs/integrations) para mantenerlo actualizado.

### Planificación por tipología

Presupuestar trabajo por **tipología** en lugar de por persona nombrada, para poder
construir un plan antes de saber quién lo va a hacer.

### FTE

Full-Time Equivalent — una unidad que expresa la carga de trabajo como una proporción de una
persona a tiempo completo.

### Utilización

Cuánto del tiempo disponible de alguien se dedica a trabajo facturable.

### Burn

Cuánto de un monto presupuestado o contratado ha sido consumido por horas reales.
