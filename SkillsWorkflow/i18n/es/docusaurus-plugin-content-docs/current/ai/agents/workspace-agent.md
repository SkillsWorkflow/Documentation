---
id: workspace-agent
title: Agente de Workspaces
description: "Construir y cambiar workspaces y dashboards describiendo lo que quieres — componentes, layout, filtros y fuentes de datos — y editar los ficheros que hay detrás cuando el cambio necesita código."
sidebar_label: Agente de Workspaces
sidebar_position: 4
---

El Agente de Workspaces construye y cambia workspaces y dashboards. Describes la vista que quieres y produce un cambio que revisas antes de aplicarlo — un panel nuevo, otro filtro, un gráfico leyendo de otro sitio, un workspace entero desde cero.

Trabaja a dos niveles, y pasa de uno a otro por su cuenta:

- **La definición del workspace** — componentes, layout, fuentes de datos, filtros, y cómo reaccionan los componentes entre sí. Es la mayor parte del trabajo.
- **Los ficheros detrás de un workspace** — las funciones JavaScript y la configuración JSON con las que está hecho un workspace. Aquí acaba un cambio cuando ningún ajuste lo expresa: un formateador de columna a medida, una función que filtra por estado, un fallo en la configuración de un componente.

## Qué puede hacer

- Crear un workspace, o añadirle un componente — rejillas, formularios, gráficos, indicadores, tableros
- Cambiar la configuración de un componente, sus filtros y su layout
- Conectar un componente a una fuente de datos, y conectar componentes entre sí
- Leer el esquema de una custom table o un integration workflow, y validar un cambio en cualquiera de los dos
- Leer y editar los ficheros JavaScript y JSON que hay detrás de un workspace
- Mostrarte exactamente qué cambió antes de guardar

## Cómo usarlo

1. Abre el workspace que quieres cambiar, para que el agente lo tenga en contexto.
2. Abre el [Asistente de IA](/docs/ai/ai-assistant), selecciona **Agente de Workspaces**, y deja activado el interruptor de contexto **Workspace**.
3. Describe un cambio.
4. Revisa la propuesta y aplícala. Puedes revertir una vista previa que no sea lo que querías.

Mantén las peticiones a un panel, widget o área de layout cada vez. Una petición amplia vuelve como sugerencia de empezar por algo concreto.

```
Añade un panel kanban con los deliverables de esta semana, agrupados por stage.
```

```
Cambia esta rejilla para que muestre fila de filtros, y por defecto filtra por mi departamento.
```

Para un cambio en código, nombra el componente y el comportamiento:

```
Corrige la configuración de columnas de la rejilla de estimates — la columna de total sale vacía en las filas sin líneas.
```

El agente lee primero los ficheros relevantes, te dice qué piensa cambiar, y después lo cambia.

## Reglas y comportamiento

- Nada se guarda hasta que lo aplicas. Una propuesta se puede revertir mientras la estás mirando.
- El agente valida un cambio en el workspace antes de aplicarlo e informa de un rechazo en vez de aplicarlo a medias.
- Editar los ficheros detrás de un workspace es trabajar cerca del código. Sirve a studio leads y administradores técnicos; para layout, filtros y ajustes de widgets, quédate con la vía en lenguaje corriente de arriba.
- El agente trabaja con tus permisos, así que solo alcanza workspaces que ya puedes abrir.

## Artículos relacionados

- [Asistente de IA](/docs/ai/ai-assistant)
- [Herramientas](/docs/ai/ai-tools)
- [Workspaces](/docs/build-and-extend/workspaces)
