---
id: turning-a-team-conversation-into-a-job
title: Convertir una Conversación de Equipo en un Job
description: "Mira cómo un equipo acuerda una petición del cliente en el Chat y pide a Skilio que cree el Job a partir de lo que se dijo, sin que nadie tenga que volver a escribirlo en un formulario."
sidebar_label: Convertir una Conversación en un Job
sidebar_position: 2
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está en preview, la conversación muestra cómo se espera que el AI Assistant lo gestione, y lo que responde o hace hoy puede diferir de este ejemplo.
:::

## Descripción general

Las peticiones de los clientes suelen tomar forma en una conversación rápida: alguien transmite lo que pidió el cliente, otra persona añade el alcance y una tercera fija el plazo. Cuando el equipo se ha puesto de acuerdo, menciona a **@Skilio** y pídele que cree el Job. Skilio lee la conversación, encuentra el cliente y el proyecto, y propone los datos y el briefing del Job. Quien lo pidió los revisa y los aprueba.

La agencia, el cliente, las personas y el Job de este ejemplo son ilustrativos.

<Walkthrough
  variant="team"
  conversation="Campaña de Navidad de Velmont"
  members="4 en línea · 5 miembros"
  subtitle="Un equipo de cuentas acuerda una nueva petición en el Chat y pide a Skilio que cree el Job."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Del acuerdo al Job">
        Lo que el equipo acordó en la conversación se convierte en el título, la descripción y el briefing del Job, así que no se pierde nada entre el chat y el formulario.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Acuerda con el equipo la petición en la conversación: cliente, alcance y plazo.',
          'Menciona a @Skilio y pídele que cree el Job.',
          'Comprueba el cliente, el proyecto, el departamento y el Job Type que propone.',
          'Revisa los datos y selecciona Aprobar.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          '@Skilio crea el Job a partir de lo que hemos acordado arriba.',
          '@Skilio créalo en el proyecto Velmont Christmas 2026.',
          '@Skilio cambia el plazo al 12 de diciembre antes de crearlo.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Skilio usa los mensajes de esta conversación. Di en la conversación todo lo que deba incluir.',
          'Cuando el nombre de un cliente o de un proyecto coincide con más de un registro, Skilio pregunta cuál es.',
          'Solo la persona que mencionó a Skilio puede aprobar el Job.',
        ]}
      />
    </>
  }
>
  <Walkthrough.DateSeparator label="Hoy" />

  <Walkthrough.Message sender="me" name="Ana Costa" time="11:40" avatar="/img/ai/avatars/ana-costa.svg">
    <p>Acabo de salir de una llamada con Velmont. Quieren un póster para tienda para la gama de regalos de Navidad, en A2 y A3, con el mismo estilo que la web.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="member" name="Sofia Marques" time="11:42" avatar="/img/ai/avatars/sofia-marques.svg">
    <p>Es fácil adaptarlo del banner principal. Con dos rondas de cambios debería bastar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="member" name="Rui Santos" time="11:44" avatar="/img/ai/avatars/rui-santos.svg">
    <p>Imprenta necesita los archivos finales antes del 10 de diciembre. Ana, ¿puedes abrirlo tú?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="me" name="Ana Costa" time="11:46" avatar="/img/ai/avatars/ana-costa.svg">
    <p>@Skilio crea el Job a partir de lo que hemos acordado arriba.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio" time="11:48">
    <p>Los datos del Job están listos para revisar.</p>
    <Walkthrough.FieldTable
      rows={[
        ['Cliente', 'Velmont Bakery'],
        ['Proyecto', 'Velmont Christmas 2026'],
        ['Tipo de objeto de negocio', 'Job'],
        ['Departamento', 'Creative'],
        ['Job Type', 'Print Design'],
        ['Título', 'Velmont Christmas 2026 – In-store Poster'],
        ['Descripción', 'Póster para tienda de la gama de regalos de Navidad en A2 y A3, adaptado del banner principal de la web de la campaña, con dos rondas de cambios'],
        ['Fecha límite', '10 de diciembre de 2026'],
        ['Briefing', 'Preparado a partir de esta conversación en las secciones del briefing de Print Design'],
      ]}
    />
    <Walkthrough.Actions items={[{ label: 'Hacer cambios' }, { label: 'Aprobar', primary: true }]} />
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio" time="11:50">
    <p>El Job se ha creado.</p>
    <Walkthrough.CreatedJobCard
      label="Job creado"
      title="Velmont Christmas 2026 – In-store Poster"
      number="1058"
      rows={[
        ['Numero Job', '1058'],
        ['Cliente', 'Velmont Bakery'],
        ['Proyecto', 'Velmont Christmas 2026'],
        ['Departamento', 'Creative'],
        ['Tipo de job', 'Print Design'],
        ['Fecha límite', '10 de diciembre de 2026'],
      ]}
      actions={['Abrir popup', 'Navegar']}
    />
  </Walkthrough.Message>
</Walkthrough>

## Artículos relacionados

- [Crear un Job a Partir de un Correo del Cliente](/docs/ai/use-cases/projects-and-jobs/creating-a-job-from-a-client-email)
- [Chat](/docs/product/files-and-collaboration/chat)
- [AI Assistant](/docs/ai/ai-assistant)
