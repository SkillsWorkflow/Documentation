---
id: finding-who-has-overdue-hours
title: Encontrar Quién Está Bloqueado por Horas Pendientes
description: "Mira cómo un gestor de proyectos pregunta al AI Assistant quién del equipo está bloqueado por horas pendientes, quién quedará bloqueado en los próximos días, qué jobs se ven afectados y dónde seguir la situación cada semana."
sidebar_label: Encontrar Quién Tiene Horas Atrasadas
sidebar_position: 10
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Descripción general

Pregunta al AI Assistant, con tus propias palabras, quién de tu equipo tiene horas atrasadas. El asistente lista las personas que están bloqueadas porque a sus hojas de tiempo les faltan horas, con las horas que cada una aún tiene que registrar. Después puedes preguntar quién quedará bloqueado en los próximos días si no registra su tiempo, en qué jobs estaban planificadas esas personas y registraron menos tiempo del planificado, y dónde seguir la situación cada semana.

La agencia, las personas y las horas de este ejemplo son ilustrativas. Las personas que ves dependen de tus accesos y de los datos que tu agencia pone a disposición del asistente.

<Walkthrough
  subtitle="Ejemplo de conversación entre un gestor de proyectos y el AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De las horas pendientes a la acción">
        El asistente muestra quién ya está bloqueado por horas pendientes y quién está a punto de estarlo, para que puedas actuar antes del cierre del mes y antes de que el trabajo se detenga.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Pregunta quién de tu equipo está bloqueado por horas pendientes.',
          'Lee las horas pendientes de cada persona para ver cuánto retraso tiene.',
          'Consulta Cómo he interpretado tu pregunta para ver a quién se incluyó y qué se asumió.',
          'Pregunta quién quedará bloqueado en los próximos días y habla con esas personas.',
          'Pregunta en qué jobs estaban planificadas para ver dónde va atrasado el tiempo registrado.',
          'Usa el workspace Missing Time Hours and Approvals para seguirlo cada semana.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          '¿Quién de mi equipo está bloqueado por horas pendientes?',
          '¿Quién quedará bloqueado en los próximos días?',
          '¿Qué proyectos míos se ven afectados?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Una persona bloqueada por horas pendientes no puede trabajar en la plataforma hasta que registre las horas que le faltan.',
          'Los días hasta el bloqueo se actualizan una vez al día. Quien fue bloqueado después de la última actualización, por ejemplo justo después de activar su usuario, aparece como bloqueado sin recuento.',
          'Una vez que alguien está bloqueado, el recuento ya no muestra cuánto tiempo lleva bloqueado. Usa las horas pendientes para ver cuánto retraso tiene.',
          'Las horas pendientes no están vinculadas a ningún job hasta que se registran. El asistente compara el tiempo planificado con el registrado para mostrar qué jobs se ven probablemente afectados.',
          'Mientras no se registren las horas pendientes, esos jobs muestran menos tiempo del trabajado y el burn del contrato queda por debajo del real.',
          'Solo se incluyen las personas obligadas a rellenar hojas de tiempo.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>Estoy cerrando el mes en la cuenta de Northwind Coffee. ¿Quién de mi equipo está bloqueado por horas pendientes?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Tres personas de tu equipo están bloqueadas ahora mismo por horas pendientes:</strong></p>
    <Walkthrough.DataTable
      columns={['Persona', 'Horas pendientes', 'Días hasta el bloqueo']}
      rows={[
        ['Anna Smith', '24h', 'Bloqueada'],
        ['David Brown', '16h', 'Bloqueado'],
        ['Sarah Lee', '40h', 'Aún no actualizado'],
      ]}
      note="Sarah Lee fue bloqueada hoy, después de que su usuario se activara sin horas registradas. Sus días hasta el bloqueo aparecerán tras la próxima actualización diaria."
    />
    <p><strong>Cómo he interpretado tu pregunta</strong></p>
    <ul>
      <li>Incluido: personas activas de tu equipo, obligadas a rellenar hojas de tiempo y bloqueadas ahora mismo por horas pendientes.</li>
      <li>Asumido: “horas pendientes” son las horas aún por registrar hasta hoy.</li>
      <li>No incluido: personas bloqueadas por otro motivo, como una cuenta de usuario caducada.</li>
    </ul>
    <Walkthrough.Source label="Horas pendientes · 3 filas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>¿Y quién quedará bloqueado en los próximos días si no registra su tiempo?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Dos personas quedarán bloqueadas pronto si no registran sus horas pendientes:</strong></p>
    <Walkthrough.DataTable
      columns={['Persona', 'Horas pendientes', 'Días hasta el bloqueo']}
      rows={[
        ['Mark Evans', '16h', '1'],
        ['Julia Green', '8h', '2'],
      ]}
    />
    <p><strong>Cómo he interpretado tu pregunta</strong></p>
    <ul>
      <li>Incluido: personas de tu equipo que aún no están bloqueadas y tienen un recuento de días hasta el bloqueo.</li>
      <li>Asumido: “los próximos días” abarca a todas las personas con recuento, fijado en la actualización diaria de hoy.</li>
    </ul>
    <Walkthrough.Source label="Horas pendientes · 2 filas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>¿Qué proyectos míos se ven afectados?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Las tres personas bloqueadas estaban planificadas en estos jobs este mes y registraron menos tiempo del planificado:</strong></p>
    <Walkthrough.DataTable
      columns={['Persona', 'Job', 'Planificado', 'Registrado']}
      rows={[
        ['Anna Smith', 'Campaign Website', '24h', '0h'],
        ['David Brown', 'Social Media Calendar', '20h', '4h'],
        ['Sarah Lee', 'Christmas Launch Event', '40h', '0h'],
      ]}
      note="Los tres jobs pertenecen al proyecto Northwind Christmas 2026. El burn del contrato quedará por debajo del real hasta que se registren estas horas."
    />
    <p><strong>Cómo he interpretado tu pregunta</strong></p>
    <ul>
      <li>Incluido: los jobs en los que las personas bloqueadas estaban planificadas desde el 1 de octubre hasta hoy, comparados con el tiempo que registraron en cada uno.</li>
      <li>Asumido: el tiempo planificado que no se registró indica trabajo hecho pero aún no registrado. Las horas pendientes no están vinculadas a ningún job hasta que se registran.</li>
    </ul>
    <Walkthrough.Source label="Cargas de trabajo · 3 filas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>¿Dónde puedo seguir esto cada semana sin tener que preguntar?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Usa el workspace <strong>Missing Time Hours and Approvals</strong>. Ábrelo desde el menú <strong>Timesheet</strong>. Muestra los usuarios bloqueados y las horas pendientes por departamento, y una lista de los usuarios bloqueados con sus horas pendientes y los días restantes.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artículos relacionados

- [Horas de Tiempo en Falta y Aprobaciones Workspace](/docs/product/dashboards-and-reporting/timesheet-approvals-dashboard)
- [Llenar Hojas de Tiempo](/docs/product/time/timesheets/filling-time-sheets)
- [Consultar el Burn del Contrato](/docs/ai/use-cases/resource-management/checking-contract-burn)
- [AI Assistant](/docs/ai/ai-assistant)
