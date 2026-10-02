---
id: creating-a-job-from-a-client-email
title: Crear un Job a Partir de un Correo del Cliente
description: "Pega una petición del cliente en el AI Assistant, comprueba el Job propuesto y revisa el Job creado en el chat."
sidebar_label: Crear un Job a Partir de un Correo del Cliente
sidebar_position: 2
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visión general

Copia la petición de un cliente en el AI Assistant y pídele que cree un Job. El asistente puede usar los nombres y el alcance indicados en el correo para encontrar el cliente y el proyecto, sugerir un título, departamento y Job Type, y preparar un briefing. Confirma las coincidencias sugeridas y aprueba el Job después de revisar sus datos.

Este ejemplo comienza con texto pegado en el chat. El correo, los registros de la agencia y el número de Job siguientes son ilustrativos.

<Walkthrough
  subtitle="Un gestor de cuentas convierte un correo del cliente en un Job sin volver a rellenar la petición en un formulario."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De la petición del cliente al Job">
        El asistente lee la petición pegada, propone dónde encaja el trabajo y prepara el Job para su aprobación.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Pega el texto relevante del correo y pide un Job.',
          'Comprueba el cliente, el proyecto, el título, el departamento y el Job Type propuestos por el asistente.',
          'Corrige o añade detalles antes de aprobar la creación.',
          'Abre el Job creado desde su tarjeta en la conversación.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Crea un Job a partir de este correo del cliente: [pegar correo].',
          'Convierte esta petición en un Job para el cliente y proyecto indicados abajo.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Una dirección de correo, por sí sola, no identifica el cliente ni el proyecto. Incluye los nombres pertinentes o confirma las coincidencias sugeridas por el asistente.',
          'Pegar el texto del correo en el chat no adjunta un archivo de correo al Job.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>He recibido esto de nuestro contacto en General Motors. ¿Puedes crear un Job y un briefing completo a partir del correo?</p>
    <blockquote>
      <p><strong>De:</strong> Sofía, General Motors<br /><strong>Asunto:</strong> Página para buscar concesionarios en la campaña EV</p>
      <p>Hola equipo, para el proyecto General Motors – 2026 Global EV Campaign necesitamos una página que ayude a los visitantes a encontrar un concesionario cercano. Presentad la gama de vehículos eléctricos, destacad la búsqueda de concesionarios como acción principal e incluid la posibilidad de reservar una prueba de conducción. Seguid la dirección visual de la campaña. ¿Podéis empezar este trabajo?</p>
    </blockquote>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>He encontrado General Motors y el proyecto de campaña indicado en el correo. Sugiero un Job en el departamento Digital, con el Job Type Web Design y el título «GM EV Campaign – Dealer Locator Page». Usaré el alcance del correo en el briefing. ¿Es este el trabajo que quieres crear?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Sí. Mantén la búsqueda de concesionarios como acción principal e incluye la reserva de una prueba de conducción.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Los datos del Job están listos para su revisión.</p>
    <Walkthrough.FieldTable
      rows={[
        ['Cliente', 'General Motors'],
        ['Proyecto', 'General Motors – 2026 Global EV Campaign'],
        ['Tipo de objeto de negocio', 'Job'],
        ['Departamento', 'Digital'],
        ['Job Type', 'Web Design'],
        ['Título', 'GM EV Campaign – Dealer Locator Page'],
        ['Descripción', 'Una página de campaña que presenta la gama EV, con la búsqueda de concesionarios como acción principal y la reserva de una prueba de conducción'],
        ['Briefing', 'Preparado a partir del correo en las secciones de la plantilla de Web Design'],
      ]}
    />
    <p>Revisa los datos y el briefing propuestos en la tarjeta de aprobación antes de crear el Job.</p>
    <Walkthrough.Actions items={[{ label: 'Hacer cambios' }, { label: 'Aprobar', primary: true }]} />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>He revisado la propuesta y he seleccionado Aprobar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>El Job se ha creado.</p>
    <Walkthrough.CreatedJobCard
      label="Job creado"
      title="GM EV Campaign – Dealer Locator Page"
      number="1043"
      rows={[
        ['Numero Job', '1043'],
        ['Cliente', 'General Motors'],
        ['Proyecto', 'General Motors – 2026 Global EV Campaign'],
        ['Departamento', 'Digital'],
        ['Tipo de job', 'Web Design'],
        ['Descripción', 'Una página de campaña que presenta la gama EV, con la búsqueda de concesionarios como acción principal y la reserva de una prueba de conducción'],
      ]}
      actions={['Abrir popup', 'Navegar']}
    />
  </Walkthrough.Message>
</Walkthrough>

## Artículos relacionados

- [Convertir un Briefing de Campaña en un Job](/docs/ai/use-cases/projects-and-jobs/creating-a-job-using-a-briefing-template)
- [AI Assistant](/docs/ai/ai-assistant)
- [AI Agents](/docs/ai/agents)
