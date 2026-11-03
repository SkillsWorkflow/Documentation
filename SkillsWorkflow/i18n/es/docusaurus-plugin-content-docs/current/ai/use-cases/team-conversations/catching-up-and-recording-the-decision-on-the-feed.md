---
id: catching-up-and-recording-the-decision-on-the-feed
title: Ponerse al Día en una Conversación y Registrar la Decisión
description: "Mira cómo una persona añadida a un grupo del Chat pide a Skilio un resumen de lo que se decidió y después hace que la decisión se publique en el Feed del Job para que no se quede solo en el chat."
sidebar_label: Ponerse al Día y Registrar la Decisión
sidebar_position: 3
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está en preview, la conversación muestra cómo se espera que el AI Assistant lo gestione, y lo que responde o hace hoy puede diferir de este ejemplo.
:::

## Descripción general

Cuando te unes a una conversación que lleva un tiempo en marcha, menciona a **@Skilio** y pregunta qué se decidió. Skilio resume la conversación: las decisiones, quién se encarga de qué y lo que sigue abierto. Las decisiones tomadas en el Chat se quedan en el Chat, así que después puedes pedir a Skilio que las publique en el Feed del Job, donde el resto del equipo y el historial del Job pueden encontrarlas. Revisas el comentario antes de que se publique.

La agencia, el cliente, las personas, el Job y los mensajes de este ejemplo son ilustrativos.

<Walkthrough
  variant="team"
  conversation="Campaña de Navidad de Velmont"
  members="3 en línea · 6 miembros"
  subtitle="Una responsable de finanzas se une a una conversación de grupo y registra la decisión en el Feed del Job."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Del chat al registro">
        Skilio convierte una conversación larga en un breve resumen para quien se une tarde, y lleva la decisión al Job, que es donde corresponde.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Menciona a @Skilio y pregunta qué se decidió.',
          'Comprueba el resumen con las personas de la conversación.',
          'Pide a Skilio que publique la decisión en el Feed del Job e indica a quién mencionar.',
          'Revisa el comentario y selecciona Publicar.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          '@Skilio ¿qué hemos decidido aquí?',
          '@Skilio ¿qué sigue abierto?',
          '@Skilio publica la decisión en el Feed del Job y menciona a Ana.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'El resumen se basa solo en los mensajes de esta conversación.',
          'El comentario se publica en el Feed del Job con tu nombre, y las personas que mencionas reciben una notificación.',
          'Selecciona Denegar para dejar el Feed como está.',
        ]}
      />
    </>
  }
>
  <Walkthrough.DateSeparator label="Hoy" />

  <Walkthrough.Message sender="member" name="Rui Santos" time="15:05" avatar="/img/ai/avatars/rui-santos.svg">
    <p>Añado a Laura, de Finanzas, para que vea el cambio.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="me" name="Laura Bennett" time="15:07" avatar="/img/ai/avatars/laura-bennett.svg">
    <p>Hola a todos. @Skilio ¿qué habéis decidido aquí?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio" time="15:09">
    <p><strong>El equipo decidió entregar la web de la campaña de Navidad de Velmont una semana antes:</strong></p>
    <ul>
      <li>El cliente adelantó la entrega del 22 al 15 de diciembre. Ana Costa lo confirmó en la llamada.</li>
      <li>Sofia Marques pasa a ser la Executor de Campaign Website. Rui Santos la añadió al equipo.</li>
      <li>Se añadió un póster para tienda como nuevo Job, Velmont Christmas 2026 – In-store Poster (1058), con entrega el 10 de diciembre.</li>
    </ul>
    <p><strong>Sigue abierto:</strong> si la entrega anticipada tiene un recargo por urgencia para el cliente. Nadie lo ha confirmado.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="me" name="Laura Bennett" time="15:11" avatar="/img/ai/avatars/laura-bennett.svg">
    <p>Gracias. Su contrato incluye un recargo por urgencia. @Skilio publica esta decisión en el Feed de Campaign Website, indica que se aplica el recargo por urgencia y menciona a Ana para que se lo comunique al cliente.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio" time="15:13">
    <Walkthrough.ApprovalCard
      title="Publicar un comentario"
      subtitle="Revisa el comentario antes de que lo publique."
      rows={[
        ['Job', 'Velmont Christmas 2026 – Campaign Website'],
        ['Menciones', 'Ana Costa'],
        ['Comentario', 'La entrega pasa del 22 al 15 de diciembre a petición del cliente. Sofia Marques es ahora la Executor. El recargo por urgencia del contrato se aplica a la entrega anticipada. Ana, ¿puedes comunicárselo a Velmont Bakery?'],
      ]}
      actions={[{ label: 'Denegar' }, { label: 'Publicar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio" time="15:15">
    <Walkthrough.StatusChip status="Publicado" label="Velmont Christmas 2026 – Campaign Website" />
    <p>El comentario está en el Feed del Job. Ana ha recibido una notificación.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artículos relacionados

- [Discutir una Notificación de Exceso de Horas](/docs/ai/use-cases/resource-management/discussing-a-resource-overrun-notification)
- [Uso del Feed](/docs/product/files-and-collaboration/using-feed)
- [Chat](/docs/product/files-and-collaboration/chat)
