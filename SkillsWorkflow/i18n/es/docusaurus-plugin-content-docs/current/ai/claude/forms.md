---
id: ai-claude-forms
title: Recoger Peticiones con un Formulario
description: "Pide a Claude un formulario que crea trabajo en Skills Workflow: un formulario de petición que abre un job, o un breve formulario de feedback que un cliente rellena tras una entrega."
sidebar_label: Un Formulario que Crea Trabajo
sidebar_position: 8
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Esto está en preview y todavía no se ha probado de principio a fin. Se construye con lo que Skills Workflow ofrece hoy; pruébalo con una petición real antes de compartirlo.
:::

Sustituye los emails de petición por un formulario. Pide a Claude una página donde un cliente o un compañero describe lo que necesita, y la petición llega a Skills Workflow como un job, con los campos que necesita tu equipo ya rellenados. Lo mismo vale para un formulario de feedback tras una entrega, o para un breve brief de un trabajo nuevo.

## Disponibilidad

Preview. Necesitas el [conector de Skills Workflow en Claude](/docs/ai/claude/ai-claude-connect). Quien rellena el formulario inicia sesión en Skills Workflow, y lo que envía se crea en su nombre, con sus permisos. Un formulario para personas sin usuario de Skills Workflow no está disponible.

## Cómo pedirlo

1. Di qué crea el formulario, para qué cliente y con qué job type.
2. Enumera las preguntas y a qué campo de Skills Workflow va cada respuesta.
3. Di qué ve la persona después de enviar: el número del job, un agradecimiento, un enlace a la página de estado.
4. Envía tú mismo una petición de prueba y abre el job que creó.

La agencia, el cliente y el job de este ejemplo son ilustrativos.

<Walkthrough
  title="Claude"
  subtitle="Ejemplo de conversación entre un traffic manager y Claude."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Las peticiones llegan como trabajo, no como email">
        Cada formulario crea el job con las respuestas en los campos correctos, en nombre de la persona que lo envió.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Indica el job type y el cliente.',
          'Asigna cada pregunta a un campo.',
          'Envía una petición de prueba y abre el job.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Quienes no tienen permitido crear el job reciben un mensaje que lo indica.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>El equipo de marketing de Northwind nos envía sus peticiones por email. Hazles un formulario que cree un job en el cliente Northwind Coffee: qué necesitan, la fecha límite, el canal y los archivos que tengan.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <p>Esto es en lo que se convierte cada respuesta:</p>
    <Walkthrough.DataTable
      columns={['Pregunta', 'Va a']}
      rows={[
        ['¿Qué necesitas?', 'Nombre y descripción del job'],
        ['¿Para cuándo lo necesitas?', 'Fecha de entrega'],
        ['¿Qué canal?', 'El campo de canal del job'],
        ['Archivos', 'Adjuntos al job'],
      ]}
      note="Después de enviar, la persona ve el número del job y un enlace a la página de estado de Northwind."
    />
  </Walkthrough.Message>
</Walkthrough>

## Reglas y comportamiento

- Un formulario crea y actualiza registros en nombre de la persona con sesión iniciada. Lo que esa persona no puede hacer en Skills Workflow, el formulario tampoco puede hacerlo por ella.

## Artículos relacionados

- [Compartir una Página de Estado en Tiempo Real con un Cliente](/docs/ai/claude/ai-claude-client-status-page)
- [Skills Workflow en Claude](/docs/ai/claude)
- [Conectar Claude a Skills Workflow](/docs/ai/claude/ai-claude-connect)
