---
id: creating-a-job-using-a-briefing-template
title: Convertir un Briefing de Campaña en un Job
description: "Descubre cómo el AI Assistant convierte una petición de campaña en un Job y organiza su briefing con la plantilla del Job Type."
sidebar_label: Convertir un Briefing de Campaña en un Job
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visión general

Describe el trabajo al AI Assistant con tus propias palabras. El asistente puede encontrar el cliente y el proyecto, inferir el departamento, el Job Type y el título a partir de la petición, y organizar el briefing con la plantilla del Job Type. Revisa el Job propuesto antes de aprobar su creación.

La agencia, el número de Job y la plantilla de Web Design de este ejemplo son ilustrativos. Los registros y secciones del briefing disponibles dependen de tu configuración.

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
          'Revisa el Job propuesto antes de aprobar la creación.',
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
          'La tarjeta de aprobación permite revisar los datos propuestos para el Job antes de crearlo.',
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
    <p>He encontrado General Motors y el proyecto de campaña que indicaste. Como has pedido una web, sugiero Digital, el Job Type Web Design y el título «GM 2026 EV Campaign – Global Website». Puedo organizar los requisitos en su plantilla de briefing. ¿Son correctos estos datos del Job?</p>
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
      ]}
    />
    <p>Revisa los datos propuestos para el Job en la tarjeta de aprobación antes de crearlo.</p>
    <Walkthrough.Actions items={[{ label: 'Hacer cambios' }, { label: 'Aprobar', primary: true }]} />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>He revisado la propuesta y he seleccionado Aprobar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>El Job se ha creado con un briefing organizado en la plantilla de Web Design. He conservado el contenido solicitado para la campaña y la referencia visual. Aún falta proporcionar la redacción final del mensaje de la campaña.</p>
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

## Cómo se convierte la petición en un briefing estructurado

Esta comparación ilustra cómo la petición puede rellenar la plantilla de briefing de Web Design de una agencia. Los nombres de las secciones son un ejemplo, no campos fijos de Skills Workflow. El asistente conserva la información proporcionada y deja pendiente la redacción del mensaje de la campaña.

<Walkthrough.BriefComparison
  templateTitle="Ejemplo de plantilla de Web Design"
  resultTitle="Briefing en el Job creado"
  note="Secciones ilustrativas configuradas por la agencia"
  sections={[
    ['Objetivo', '¿Qué debe conseguir esta web?', 'Presentar la campaña de vehículos eléctricos de 2026 y guiar a los visitantes hacia el siguiente paso.'],
    ['Público objetivo', '¿A quién va dirigida la web?', 'Visitantes que exploran la gama de vehículos eléctricos.'],
    ['Mensaje principal', '¿Qué debe entender el visitante?', 'Explicar el mensaje principal de la campaña. Falta proporcionar la redacción final aprobada.'],
    ['Contenido de la página', '¿Qué debe incluir la web?', 'Presentación de la campaña, gama de vehículos eléctricos y un siguiente paso claro.'],
    ['Dirección visual', '¿Qué dirección creativa debe seguir el equipo?', 'Usar la referencia visual adjunta a la petición.'],
  ]}
/>

## Artículos relacionados

- [Crear un Job a Partir de un Correo del Cliente](/docs/ai/use-cases/projects-and-jobs/creating-a-job-from-a-client-email)
- [AI Assistant](/docs/ai/ai-assistant)
- [AI Agents](/docs/ai/agents)
