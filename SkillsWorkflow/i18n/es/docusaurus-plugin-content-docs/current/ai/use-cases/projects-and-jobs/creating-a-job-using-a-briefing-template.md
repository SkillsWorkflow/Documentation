---
id: creating-a-job-using-a-briefing-template
title: Convertir un Briefing de Campaña en un Job
description: "Pide al AI Assistant que convierta un briefing de campaña en un Job y revisa el Job creado en el chat."
sidebar_label: Convertir un Briefing de Campaña en un Job
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visión general

Describe el trabajo al AI Assistant con tus propias palabras. El asistente puede encontrar el cliente y el proyecto, sugerir el departamento, el Job Type y el título, y preparar el briefing con la plantilla del Job Type. Confirma las sugerencias y revisa el Job antes de aprobar su creación.

La agencia y el número de Job de esta conversación son ilustrativos. Los registros y secciones del briefing disponibles dependen de tu configuración.

<Walkthrough
  subtitle="Ejemplo de conversación entre alguien de la agencia y el AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De la petición al Job">
        El asistente reúne los datos del Job, prepara el briefing con la plantilla del Job Type seleccionado y presenta la creación para su aprobación.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Describe el cliente, el proyecto y el trabajo con tus propias palabras.',
          'Comprueba el departamento, el Job Type y el título que sugiere el asistente.',
          'Revisa el Job y el briefing propuestos antes de aprobar la creación.',
          'Abre el Job creado desde su tarjeta en la conversación.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Crea un Job para la web de nuestra campaña. Ya tengo los detalles del briefing.',
          'Crea un Job en este proyecto y usa la plantilla de briefing de su Job Type.',
          'Crea un Job a partir de esta petición: [pegar el briefing].',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Una coincidencia exacta puede utilizarse directamente. Una coincidencia probable o una preferencia guardada debe confirmarse antes de crear el Job.',
          'La tarjeta de aprobación permite revisar los datos propuestos. Si el asistente ha preparado un briefing, también puedes editarlo allí.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>Necesitamos una web global para la campaña de vehículos eléctricos de General Motors de 2026, en el proyecto «General Motors – 2026 Global EV Campaign». ¿Puedes crear el Job y redactar el briefing completo?</p>
    <p>La web debe presentar la campaña, mostrar la gama de vehículos eléctricos, explicar el mensaje principal y guiar a los visitantes hacia el siguiente paso. He adjuntado una referencia visual.</p>
    <Walkthrough.Attachment
      src="/img/ai/use-cases/ev-campaign-reference.png"
      filename="ev-campaign-reference.png"
      description="Imagen ilustrativa de referencia para una campaña de vehículos eléctricos"
      caption="Referencia visual adjunta a la petición de la campaña."
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>He encontrado General Motors y el proyecto de la campaña. Para una web, sugiero el departamento Digital y el Job Type Web Design. Le pondría el título «GM 2026 EV Campaign – Global Website». ¿Son correctos estos datos?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Sí, usa Digital y Web Design. Mantén ese título.</p>
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
        ['Título', 'GM 2026 EV Campaign – Global Website'],
        ['Descripción', 'Una web global que presenta la campaña, la gama de vehículos, el mensaje principal y los siguientes pasos'],
        ['Briefing', 'Preparado en las secciones de la plantilla del Job Type seleccionado'],
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
      title="GM 2026 EV Campaign – Global Website"
      number="1042"
      rows={[
        ['Numero Job', '1042'],
        ['Cliente', 'General Motors'],
        ['Proyecto', 'General Motors – 2026 Global EV Campaign'],
        ['Departamento', 'Digital'],
        ['Tipo de job', 'Web Design'],
        ['Descripción', 'Una web global que presenta la campaña, la gama de vehículos, el mensaje principal y los siguientes pasos'],
      ]}
      actions={['Abrir popup', 'Navegar']}
    />
  </Walkthrough.Message>
</Walkthrough>

## Artículos relacionados

- [Crear un Job a Partir de un Correo del Cliente](/docs/ai/use-cases/projects-and-jobs/creating-a-job-from-a-client-email)
- [AI Assistant](/docs/ai/ai-assistant)
- [AI Agents](/docs/ai/agents)
