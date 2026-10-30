---
id: discussing-a-resource-overrun-notification
title: Discutir una Notificación de Exceso de Horas
description: "Mira cómo un gestor de proyectos pregunta al AI Assistant por qué un job superó sus horas planificadas, lee un resumen del Feed, los comentarios y los archivos del job, y pide al equipo en el Feed que confirme la causa y los próximos pasos."
sidebar_label: Discutir una Notificación de Exceso de Horas
sidebar_position: 8
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está en preview, la conversación muestra cómo se espera que el AI Assistant lo gestione, y lo que responde o hace hoy puede diferir de este ejemplo.
:::

## Descripción general

Cuando el AI Assistant te avisa de que alguien registró en un job más horas de las planificadas, pregúntale por qué. El asistente lee el Feed del job, sus comentarios y respuestas, la descripción y los archivos adjuntos, y resume qué explica las horas de más. Después puedes pedirle que publique un comentario en el Feed del job, mencionando a las personas que tienen que confirmar la causa y decidir qué pasa a continuación. Revisas el comentario antes de que se publique.

La agencia, el cliente, las personas, el job, los comentarios y las horas de este ejemplo son ilustrativos. El asistente solo lee los documentos y comentarios a los que tienes acceso.

<Walkthrough
  subtitle="Ejemplo de conversación entre un gestor de proyectos y el AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De un exceso de horas a una conversación">
        El asistente convierte el historial del job en una breve explicación del exceso de horas e inicia la conversación con las personas adecuadas en el Feed del job.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Pregunta por qué el job superó sus horas planificadas.',
          'Lee el resumen y revisa los comentarios y archivos en los que se basa.',
          'Pide al asistente que publique un comentario en el Feed del job e indica a quién mencionar.',
          'Revisa el comentario y selecciona Publicar.',
          'Sigue las respuestas en el Feed del job.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          '¿Por qué Anna superó las horas planificadas en Campaign Website?',
          '¿Qué ha cambiado en este job desde que se planificó?',
          'Pregunta al equipo en el Feed si necesitamos más horas.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'El resumen se basa en lo que se escribió en el job. Cuando nadie registró el motivo, el asistente lo indica.',
          'El comentario se publica en el Feed del job con tu nombre, y las personas que mencionas reciben una notificación.',
          'El asistente pide tu aprobación antes de publicar. Selecciona Denegar para dejar el Feed como está.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Anna Smith ha registrado 46 horas en Campaign Website, 16 horas más que las 30 planificadas.</strong> El job pertenece al proyecto Northwind Christmas 2026 y vence el 20 de noviembre.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>¿Por qué ha pasado esto?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Las horas de más vienen de un cambio de alcance que no se añadió a la planificación:</strong></p>
    <ul>
      <li>El 19 de octubre, el cliente pidió dos landing pages más para la gama de regalos de Navidad. David Brown publicó la petición en el Feed.</li>
      <li>El 20 de octubre, Anna respondió que las nuevas páginas necesitaban unas 15 horas más de diseño.</li>
      <li>El mapa del sitio revisado, <strong>Northwind_Christmas_sitemap_v2.pdf</strong>, se adjuntó el mismo día y muestra las dos páginas nuevas.</li>
      <li>La planificación y la descripción del job no se actualizaron tras el cambio.</li>
    </ul>
    <p>Nadie ha confirmado si las páginas adicionales se facturan al cliente.</p>
    <Walkthrough.Source label="Feed · 6 publicaciones · 1 archivo" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Publica en el Feed del job pidiendo a David y a Anna que confirmen el nuevo alcance, si se factura y cuántas horas más necesita Anna hasta el final.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Publicar un comentario"
      subtitle="Revisa el comentario antes de que lo publique."
      rows={[
        ['Job', 'Campaign Website'],
        ['Menciones', 'David Brown, Anna Smith'],
        ['Comentario', 'Anna ha registrado 46h frente a las 30h planificadas, después de las dos landing pages añadidas el 19 de octubre. ¿Podéis confirmar el nuevo alcance, si se factura a Northwind Coffee y cuántas horas más necesita Anna para terminar el job?'],
      ]}
      actions={[{ label: 'Denegar' }, { label: 'Publicar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>He revisado el comentario y he seleccionado Publicar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Publicado" label="Campaign Website" />
    <p>El comentario está en el Feed del job. David y Anna han recibido una notificación.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artículos relacionados

- [Recibir Notificaciones Sobre Problemas de Recursos](/docs/ai/use-cases/resource-management/receiving-notifications-about-resource-issues)
- [Uso del Feed](/docs/product/files-and-collaboration/using-feed)
- [Tipos de notificación](/docs/product/notifications/notification-types)
- [AI Assistant](/docs/ai/ai-assistant)
