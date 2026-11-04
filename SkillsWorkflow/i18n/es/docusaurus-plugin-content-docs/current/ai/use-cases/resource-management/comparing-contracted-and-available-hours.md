---
id: comparing-contracted-and-available-hours
title: Consultar Horas Contratadas y Capacidad del Equipo
description: "Mira cómo un gestor de proyectos pregunta al AI Assistant cuántas de las horas contratadas con un cliente quedan este trimestre, si el equipo tiene tiempo libre suficiente para entregarlas, qué typology groups se quedan cortos y quién está libre para cubrir la diferencia."
sidebar_label: Consultar Horas Contratadas y Capacidad del Equipo
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Descripción general

Pregunta al AI Assistant cómo se comparan las horas contratadas con un cliente con el tiempo que tu equipo tiene disponible. El asistente muestra las horas vendidas al cliente en el periodo, cuántas se han registrado y cuántas quedan, por typology group. Después puedes preguntar si el equipo tiene tiempo libre suficiente para entregar lo que queda, ver dónde no llega la capacidad y encontrar quién está libre para cubrir la diferencia.

La agencia, el cliente, las personas y las horas de este ejemplo son ilustrativos. Los estimates y las personas que ves dependen de tus accesos y de los datos que tu agencia pone a disposición del asistente.

<Walkthrough
  subtitle="Ejemplo de conversación entre un gestor de proyectos y el AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De las horas contratadas a la entrega">
        El asistente compara las horas vendidas a un cliente con las horas registradas y con el tiempo libre de tu equipo, para que sepas antes de la reunión con el cliente dónde está en riesgo la entrega.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Indica el cliente y el periodo que quieres revisar.',
          'Lee las horas contratadas, registradas y pendientes de cada typology group.',
          'Consulta Cómo he interpretado tu pregunta para ver qué estimates se han incluido.',
          'Pregunta si el equipo tiene tiempo libre suficiente para entregar las horas pendientes.',
          'Pregunta quién del typology group que se queda corto está libre para cubrir la diferencia.',
          'Usa la pestaña Burn and Utilization Per Role - Fee y el workspace FTE para seguirlo cada mes.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          '¿Cuántas horas quedan en los estimates aprobados de Northwind Coffee este trimestre?',
          'Muéstralo por typology group, con el porcentaje usado.',
          '¿Tenemos personas suficientes para entregar esas horas antes de finales de octubre?',
          'Explícame las limitaciones.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Las horas contratadas vienen del staff plan de los estimates aprobados del cliente. Los estimates que no están aprobados se quedan fuera.',
          'Si preguntas desde un estimate, el asistente puede responder solo para ese estimate. Pide todos los estimates aprobados del cliente en el periodo para incluirlos todos.',
          'Las horas registradas se cuentan a través de los proyectos asociados al fee. Cuando un estimate no está vinculado a un proyecto o job, el asistente no puede atribuirle el tiempo registrado y lo indica.',
          'Las horas que aún no se han registrado en las hojas de tiempo no se cuentan, así que las horas pendientes pueden parecer más de las que realmente son.',
          'Cada typology group se compara de forma exacta. Un typology group no se usa para cubrir otro, a menos que lo pidas.',
          'Las ausencias pendientes de aprobación no se descuentan de la capacidad disponible. El asistente las señala aparte.',
          'Preguntar por departamento o por typology group puede devolver personas distintas.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>Tengo una reunión trimestral con Northwind Coffee la próxima semana. ¿Cuántas de las horas que contratamos con ellos para este trimestre quedan todavía?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Northwind Coffee tiene 1280 horas contratadas de octubre a diciembre de 2026.</strong> Se han registrado 395 hasta ahora, quedan 885 horas (69%) por entregar:</p>
    <Walkthrough.DataTable
      columns={['Typology group', 'Contratadas', 'Registradas', 'Quedan']}
      rows={[
        ['Creative', '480h', '150h (31%)', '330h'],
        ['Design', '360h', '70h (19%)', '290h'],
        ['Copywriting', '240h', '90h (38%)', '150h'],
        ['Accounts', '200h', '85h (43%)', '115h'],
      ]}
      note="Design es el más retrasado: 19% usado, con casi dos meses y medio por delante."
    />
    <p><strong>Cómo he interpretado tu pregunta</strong></p>
    <ul>
      <li>Incluido: estimates aprobados de Northwind Coffee del 1 de octubre al 31 de diciembre de 2026.</li>
      <li>Asumido: “quedan” significa las horas contratadas menos las horas registradas en las hojas de tiempo.</li>
      <li>No incluido: estimates que no están aprobados.</li>
    </ul>
    <Walkthrough.Source label="Estimates quotes · 16 filas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>¿Tenemos personas disponibles suficientes para entregar esas horas antes de finales de diciembre?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Tres de los cuatro typology groups pueden cubrir lo que queda. A Design le faltan 74 horas:</strong></p>
    <Walkthrough.DataTable
      columns={['Typology group', 'Por planificar', 'Tiempo libre', 'Diferencia']}
      rows={[
        ['Creative', '130h', '210h', '—'],
        ['Design', '170h', '96h', 'Faltan 74h'],
        ['Copywriting', '50h', '60h', '—'],
        ['Accounts', '0h', '40h', '—'],
      ]}
      note="Copywriting solo tiene 10 horas de margen. Un copywriter tiene 24 horas de ausencia pendientes de aprobación en diciembre. Si se aprueban, a Copywriting también le faltarán horas."
    />
    <p><strong>Cómo he interpretado tu pregunta</strong></p>
    <ul>
      <li>Incluido: personas activas y planificables de cada typology group, del 14 de octubre al 31 de diciembre de 2026.</li>
      <li>Asumido: “por planificar” son las horas pendientes que aún no están asignadas en trabajo de Northwind Coffee.</li>
      <li>Asumido: el tiempo libre es el tiempo de trabajo menos las ausencias aprobadas y todo el trabajo ya asignado, en cualquier cliente.</li>
      <li>Asumido: cada typology group solo se cubre con personas de ese typology group.</li>
    </ul>
    <Walkthrough.Source label="Capacidad · 412 filas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>¿Qué diseñadores tienen tiempo libre de aquí a diciembre?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Tres personas del typology group Design tienen tiempo libre, 96 horas en total:</strong></p>
    <Walkthrough.DataTable
      columns={['Persona', 'Departamento', 'Tiempo libre']}
      rows={[
        ['Rita Almeida', 'Digital', '48h'],
        ['Ben Carter', 'Digital', '32h'],
        ['Chloe Martin', 'Digital', '16h'],
      ]}
      note="Incluso con las tres personas asignadas, a Design le siguen faltando 74 horas. Puedes planificar las horas restantes para enero, acordar una nueva fecha con el cliente o recurrir a un freelance."
    />
    <Walkthrough.Source label="Capacidad · 3 filas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>¿Dónde puedo seguir esto cada mes sin tener que preguntar?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Abre el fee del cliente y selecciona la pestaña <strong>Burn and Utilization Per Role - Fee</strong>. Compara las horas contratadas, planificadas y reales por typology group para los proyectos asociados al fee.</p>
    <p>Para la capacidad, abre el workspace <strong>FTE</strong> desde el menú <strong>Workspaces</strong>. Su sección <strong>Hired</strong> compara las horas vendidas con la capacidad de cada equipo.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artículos relacionados

- [Burn y Utilización Workspaces](/docs/product/dashboards-and-reporting/utilization-burn-dashboard)
- [FTE](/docs/product/dashboards-and-reporting/fte-dashboard)
- [Encontrar Creativos Disponibles y Asignar Uno a un Job](/docs/ai/use-cases/resource-management/checking-resource-availability)
- [AI Assistant](/docs/ai/ai-assistant)
