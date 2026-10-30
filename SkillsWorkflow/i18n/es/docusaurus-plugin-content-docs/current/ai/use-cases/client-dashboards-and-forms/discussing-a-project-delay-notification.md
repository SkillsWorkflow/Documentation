---
id: discussing-a-project-delay-notification
title: Discutir una Notificación de Retraso de Proyecto
description: "Mira cómo un account manager pregunta al AI Assistant por qué un job va con retraso, lee un resumen de su Feed, sus comentarios y archivos, comprueba el impacto en el proyecto y pide al equipo en el Feed que confirme una nueva fecha."
sidebar_label: Discutir una Notificación de Retraso de Proyecto
sidebar_position: 5
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Descripción general

Cuando el AI Assistant te avisa de que un job va con retraso, pregúntale por qué. El asistente lee el Feed del job, sus comentarios y respuestas, la descripción y los archivos adjuntos, y resume qué frenó el trabajo. Pregunta qué más depende de él en el proyecto y, después, pide al asistente que publique un comentario en el Feed del job para que el equipo confirme la causa y una nueva fecha. Revisas el comentario antes de que se publique.

:::note Preview
Este caso de uso está en preview y aún no se ha probado de principio a fin. La conversación muestra cómo se espera que el AI Assistant lo gestione, y lo que responde o hace hoy puede diferir de este ejemplo.
:::

La agencia, el cliente, las personas, los jobs, los comentarios y las fechas de este ejemplo son ilustrativos. El asistente solo lee los documentos y comentarios a los que tienes acceso.

<Walkthrough
  subtitle="Ejemplo de conversación entre un account manager y el AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De un job con retraso a una nueva fecha">
        El asistente explica el retraso a partir de lo que el equipo escribió en el job, muestra a qué afecta en el proyecto e inicia la conversación en el Feed del job.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Pregunta por qué el job va con retraso.',
          'Lee el resumen y revisa los comentarios y archivos en los que se basa.',
          'Pregunta qué otros jobs del proyecto dependen de él.',
          'Pide al asistente que publique un comentario en el Feed del job e indica a quién mencionar.',
          'Revisa el comentario y selecciona Publicar.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          '¿Por qué va con retraso el stand del Christmas Launch Event?',
          '¿A qué afecta este retraso en el proyecto?',
          'Pide al productor en el Feed una nueva fecha de entrega.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'El resumen se basa en lo que se escribió en el job. Cuando nadie registró el motivo, el asistente lo indica.',
          'El comentario se publica en el Feed del job con tu nombre, y las personas que mencionas reciben una notificación.',
          'Cambiar las fechas del job es una petición aparte. El asistente pide tu aprobación antes de cambiarlas.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Christmas Launch Event – Stand Design lleva 4 días de retraso.</strong> Vencía el 26 de octubre y sigue en In Progress. Pertenece al proyecto Northwind Christmas 2026.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>¿Qué ha pasado?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>El diseño del stand estuvo esperando las nuevas guías de marca del cliente:</strong></p>
    <ul>
      <li>El 14 de octubre, Sarah Lee pidió al cliente el logotipo y la paleta de colores actualizados. La respuesta en el Feed dice que llegarían antes del 18 de octubre.</li>
      <li>Las guías, <strong>Northwind_Brand_Guidelines_2027.pdf</strong>, se adjuntaron el 24 de octubre, seis días más tarde de lo prometido.</li>
      <li>El 25 de octubre, Sarah escribió que el stand necesita tres días laborables más desde la llegada de las guías.</li>
    </ul>
    <p>Nadie ha definido una nueva fecha de vencimiento en el job.</p>
    <Walkthrough.Source label="Feed · 5 publicaciones · 1 archivo" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>¿A qué afecta esto en el proyecto?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Dos jobs del proyecto necesitan el diseño del stand para poder empezar:</strong></p>
    <Walkthrough.DataTable
      columns={['Job', 'Etapa', 'Inicio', 'Vencimiento']}
      rows={[
        ['Christmas Launch Event – Stand Production', 'New', '2 de noviembre', '13 de noviembre'],
        ['Christmas Launch Event – Signage', 'New', '4 de noviembre', '11 de noviembre'],
      ]}
      note="El evento es el 20 de noviembre. Si el diseño se aprueba antes del 3 de noviembre, los dos jobs aún pueden terminar a tiempo."
    />
    <p><strong>Cómo he interpretado tu pregunta</strong></p>
    <ul>
      <li>Incluido: jobs del proyecto Northwind Christmas 2026 cuya descripción o Feed hace referencia al diseño del stand.</li>
      <li>Asumido: un job que aún no ha empezado depende del que va con retraso cuando usa su resultado.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Pide a Sarah en el Feed que confirme cuándo estará el diseño listo para aprobación.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Publicar un comentario"
      subtitle="Revisa el comentario antes de que lo publique."
      rows={[
        ['Job', 'Christmas Launch Event – Stand Design'],
        ['Menciones', 'Sarah Lee'],
        ['Comentario', 'Las guías llegaron el 24 de octubre. ¿Puedes confirmar cuándo estará el diseño del stand listo para la aprobación del cliente? Stand Production empieza el 2 de noviembre y el evento es el 20 de noviembre.'],
      ]}
      actions={[{ label: 'Denegar' }, { label: 'Publicar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>He revisado el comentario y he seleccionado Publicar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Publicado" label="Christmas Launch Event – Stand Design" />
    <p>El comentario está en el Feed del job. Sarah ha recibido una notificación.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artículos relacionados

- [Revisar los Proyectos Retrasados que Necesitan tu Atención](/docs/ai/use-cases/projects-and-jobs/identifying-project-delays)
- [Preguntar por el Estado de un Proyecto](/docs/ai/use-cases/client-dashboards-and-forms/asking-questions-about-project-status)
- [Uso del Feed](/docs/product/files-and-collaboration/using-feed)
- [AI Assistant](/docs/ai/ai-assistant)
