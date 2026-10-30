---
id: ai-claude-wall-displays
title: Poner las Cifras de tu Agencia en una Pantalla
description: "Pide a Claude una vista pensada para una TV en el estudio o en la oficina: los plazos de hoy, la capacidad de la semana, las aprobaciones pendientes, actualizándose sola."
sidebar_label: Cifras en una Pantalla del Estudio
sidebar_position: 9
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Esto está en preview y todavía no se ha probado de principio a fin. Se construye con lo que Skills Workflow ofrece hoy; déjalo funcionando en la pantalla un día antes de confiar en él.
:::

Pon en una pantalla en la pared lo que el equipo debe ver de un vistazo: los plazos del día, quién está por encima de su capacidad esta semana, los jobs pendientes de los clientes. Pide a Claude una vista pensada para una TV, legible desde el otro lado de la sala y que se actualiza sola.

## Disponibilidad

Preview. Necesitas el [conector de Skills Workflow en Claude](/docs/ai/claude/ai-claude-connect) y un usuario de Skills Workflow con sesión iniciada en el ordenador conectado a la pantalla. La pantalla muestra lo que ese usuario tiene permitido ver.

## Cómo pedirlo

1. Di que es para una TV, su tamaño y a qué distancia se lee.
2. Indica las cifras, como mucho unas pocas, y cada cuánto se actualizan.
3. Inicia sesión en el ordenador de la pantalla con un usuario que vea solo lo que la sala debe ver, y abre la dirección en pantalla completa.

La agencia, las personas y los números de este ejemplo son ilustrativos.

<Walkthrough
  title="Claude"
  subtitle="Ejemplo de conversación entre un studio manager y Claude."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="El tablero del estudio, siempre al día">
        Letra grande, pocas cifras y una actualización cada pocos minutos.
      </Walkthrough.CapabilityCard>
      <Walkthrough.NoteCard
        items={[
          'Elige con cuidado el usuario con sesión iniciada: todos en la sala ven lo que ve ese usuario.',
          'Cuando termina la sesión, la pantalla muestra el inicio de sesión de Skills Workflow hasta que alguien vuelve a iniciar sesión.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>Haz un tablero para la TV del estudio: los plazos de hoy, los jobs pendientes de los clientes y quién está por encima del 100% esta semana. Que se actualice cada cinco minutos.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <p>El tablero tiene tres columnas, con letra legible a unos metros:</p>
    <Walkthrough.DataTable
      columns={['Plazos de hoy', 'Pendiente de clientes', 'Por encima de la capacidad']}
      rows={[
        ['7 jobs, 2 atrasados', '11 jobs, el más antiguo de hace 9 días', 'Anna 112%, Rui 104%'],
      ]}
      note="Se actualiza cada cinco minutos y muestra en una esquina la hora de la última actualización."
    />
    <Walkthrough.StatusChip status="Publicado" label="studio/board" />
  </Walkthrough.Message>
</Walkthrough>

## Reglas y comportamiento

- La vista vuelve a leer los datos en cada actualización. Nunca cambia datos.
- Una pantalla en una sala compartida muestra lo que ve el usuario con sesión iniciada. No inicies sesión con un usuario que pueda ver costes o salarios.

## Artículos relacionados

- [Construir un Informe a Partir de tus Datos](/docs/ai/claude/ai-claude-reports)
- [Añadir una Pantalla a Skills Workflow](/docs/ai/claude/ai-claude-team-screens)
- [Skills Workflow en Claude](/docs/ai/claude)
