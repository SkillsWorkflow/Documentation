---
id: ai-extend
title: Añadir tus Propias Skills, Agents y Tools
description: "Amplía la IA con el conocimiento de tu propia forma de trabajar: skills que enseñan a un agent tus reglas, agents creados para tus procesos, y tools que alcanzan tus propios sistemas e informes."
sidebar_label: Añadir las Tuyas
sidebar_position: 6
---

Los cuatro agents que Skills Workflow incluye conocen la plataforma. No conocen tu agencia: la estructura de tus briefs, tu nomenclatura, tus hábitos de aprobación, el sistema donde guardas los presupuestos.

Tres cosas te permiten añadir eso, y se combinan entre sí. Una **skill** es conocimiento, un **agent** es una tarea que hacer con él, y una **tool** es algo que el agent puede alcanzar.

| Quieres | Añade |
|---|---|
| Enseñar a un agent una regla, un formato o un proceso tuyo | Una **skill** |
| Tener un agent para una tarea propia, con sus propias instrucciones y su propio conjunto de tools | Un **agent** |
| Dejar que un agent alcance uno de tus informes, o un sistema fuera de Skills Workflow | Una **tool** |

Trabaja con tu consultor de Skills Workflow la primera vez. Nada de esto es difícil, pero un agent es tan bueno como las tools que se le conceden, y conceder las equivocadas es cómo un agent acaba siendo inútil o demasiado libre.

## Skills

Una skill es un conjunto de instrucciones escritas que un agent puede leer cuando las necesita. Es la forma de dejar de repetirte: *"nuestros briefs siempre empiezan con el objetivo de negocio"*, escrito una vez, pasa a ser cierto para todos.

Una skill es una carpeta que contiene un archivo `SKILL.md`: un encabezado breve que nombra la skill y describe cuándo usarla, seguido de las instrucciones en Markdown simple. El material más extenso —una especificación de formato completa, una tabla de tus códigos, un ejemplo resuelto— va en una carpeta `references/` al lado, y solo se lee cuando el agent necesita ese nivel de detalle.

```
$ai-agents/skills/
  brief-house-style/
    SKILL.md
    references/
      SECTIONS.md
```

Las skills residen en el sistema de archivos de tu propio tenant, en `$ai-agents/skills/`. Eso es lo que las hace tuyas: las skills de una agencia nunca son visibles para otra, y puedes cambiar una sin esperar a una versión nueva.

**Una skill solo la usan los agents que la listan.** Cada definición de agent lleva los nombres de las skills que puede leer; una skill que nadie lista nunca se anuncia, y un agent que lista una skill que no existe simplemente no la recibe. Cuando una skill deja de surtir efecto, el nombre en la definición del agent es lo primero que hay que comprobar.

A los agents se les informa del nombre y la descripción de cada skill en cada solicitud, y solo obtienen el contenido completo cuando una solicitud lo requiere. Por eso las descripciones importan: una skill descrita vagamente es una skill que nunca se lee.

## Agentes

Un agent es una definición, no código. Lleva:

- **Nombre y descripción**, que es lo que ve el usuario en el selector de agents del panel.
- **Instrucciones**: cómo se comporta, qué hace siempre, qué rechaza.
- **Skills** que puede leer.
- **Tools**, que son lo que realmente puede hacer. Consulta [Herramientas](/docs/ai/ai-tools).
- **Tools que requieren aprobación**, las que se detienen y piden confirmación al usuario primero.
- **Prompts sugeridos** mostrados en una conversación vacía.
- **Un icono** que lo identifica en la lista.
- **Un modelo**, indicado solo cuando este agent necesita uno distinto al predeterminado de la plataforma.

Una vez guardado, aparece en el selector de agents junto a los cuatro que vienen incluidos. No hay paso de implementación.

Vale la pena nombrar un modelo cuando la tarea lo exige: un modelo de razonamiento para un agent que tiene que resolver algo, uno más económico para un agent que solo clasifica o reescribe. Sin especificarlo, el agent funciona con lo que tenga configurado la plataforma, que es lo que quieres para la mayoría de los agents.

Todos los agents que crees respetan las memorias del usuario que los invoca. Eso no es una tool que se concede y no se puede desactivar por agent; es una configuración propia del usuario. Conceder las tools de memoria decide únicamente si tu agent puede añadir a ese almacén. Consulta [Memorias de IA](/docs/ai/ai-memories).

Cuatro cosas que vale la pena hacer bien:

- **Concede el conjunto mínimo de tools que cumple la tarea.** Dejar la lista de tools vacía le da al agent todo el catálogo de la plataforma, incluido todo lo que escribe.
- **Pon todas las tools de escritura en la lista de aprobación.** Un agent que crea jobs sin preguntar acabará creando uno que no querías.
- **Escribe las instrucciones como reglas, no como sugerencias.** "Nunca crear un job sin cliente" se cumple. "Intentar tener cuidado con el cliente" no.
- **Un agent, una tarea.** Un agent al que se le pide todo elige la tool equivocada.

### Agentes que no son nuestros

Un agent puede apuntar a un servicio de IA que ya utilices en lugar de al modelo propio de la plataforma. La conversación se retransmite a tu endpoint y la respuesta vuelve al mismo panel de chat, con el mismo historial, los mismos adjuntos y el mismo selector de agents.

Este es el camino para un modelo de briefing que tu agencia haya entrenado, o un servicio que un cliente exija. La configuración del agent lleva la dirección, cómo se construye la solicitud, dónde en la respuesta se encuentra la respuesta, y el tiempo de espera. Los adjuntos se pasan como enlaces; nada se envía en línea. Un agent así no usa ninguna skill ni tool de la plataforma: es tu servicio el que responde.

## Tools

Dos formas de dar a los agents capacidades más allá del catálogo integrado.

### Tus propios informes

Tus named queries de data extraction pueden exponerse como tools, una tool por query. Este es el camino más corto hacia un agent que responde preguntas sobre tus propios números: la query ya existe, ya tiene los joins correctos, y ya está verificada por perfil.

Activa las analytics tools para el agent, y lista qué queries puede alcanzar. Si no se listan, obtiene todas las queries que tu tenant publica, normalmente más de las que un agent necesita.

Cada llamada se ejecuta como el usuario que la solicita, así que a un usuario al que se le niega un informe en la plataforma también se le niega aquí. Las queries son de solo lectura.

Consulta [Data Extraction API](/docs/build-and-extend/api/data-extraction-api) para ver lo que publica tu tenant.

### Tus propios sistemas

Un agent puede conectarse a un **servidor MCP**, una forma estándar de exponer las operaciones de un sistema como tools. Si un sistema que usas ya lo admite, o puedes poner un pequeño servicio delante de uno que no, sus tools aparecen ante el agent junto a las propias de la plataforma.

Un servidor MCP se registra una vez para tu tenant, con su dirección, y luego se indica en cada agent que deba usarlo. La conexión es por agent y explícita: un agent que no indica un servidor no obtiene nada de él. Las conexiones nunca se comparten entre tenants.

## Reglas y comportamiento

- Todo esto es por tenant. Tus skills, agents, servidores MCP y sus tools son solo tuyos.
- Las tools de la plataforma y las queries de data extraction siempre se ejecutan como el usuario con sesión iniciada, así que concederlas nunca amplía lo que un usuario puede alcanzar.
- Un servidor MCP es tu propio servicio y tiene su propio acceso. Todo lo que pueda alcanzar, cada agent al que lo conectes puede alcanzarlo en nombre de cada usuario de ese agent.
- Una skill o un agent es contenido, no una versión. Cambia uno y la siguiente solicitud ya lo usa.
- Versiona tus agents y skills a medida que los cambias. Nada lo obliga, y sin ello una mala edición es difícil de rastrear.

## Artículos relacionados

- [Herramientas](/docs/ai/ai-tools)
- [Agentes](/docs/ai/agents)
- [Memorias de IA](/docs/ai/ai-memories)
- [Acciones de IA](/docs/ai/ai-actions)
- [Portales de Cliente](/docs/ai/ai-portals)
- [Data Extraction API](/docs/build-and-extend/api/data-extraction-api)
