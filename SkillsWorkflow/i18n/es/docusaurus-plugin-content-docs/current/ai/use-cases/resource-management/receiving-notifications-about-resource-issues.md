---
id: receiving-notifications-about-resource-issues
title: Recibir Notificaciones Sobre Problemas de Recursos
description: "Mira cómo un gestor de recursos recibe un mensaje del AI Assistant sobre horas registradas por encima de lo planificado, tiempo registrado sin estar planificado y personas planificadas por encima de su capacidad, y lo acota a lo que requiere acción."
sidebar_label: Recibir Notificaciones Sobre Problemas de Recursos
sidebar_position: 7
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Descripción general

El AI Assistant te avisa de los problemas de recursos de tu equipo sin que tengas que preguntar: personas que registraron en un job más horas de las planificadas, tiempo registrado en jobs en los que la persona nunca estuvo planificada y personas planificadas por encima de su capacidad en las próximas semanas. Cada problema incluye la persona, el job y las horas implicadas. Después puedes pedir al asistente que acote la lista a un cliente, que busque quién tiene capacidad libre y que abra el workspace donde cambias la planificación.

:::note Preview
Este caso de uso está en preview y aún no se ha probado de principio a fin. La conversación muestra cómo se espera que el AI Assistant lo gestione, y lo que responde o hace hoy puede diferir de este ejemplo.
:::

La agencia, los clientes, las personas, los jobs y las horas de este ejemplo son ilustrativos. Los problemas que ves dependen de tus accesos y de los datos que tu agencia pone a disposición del asistente.

<Walkthrough
  subtitle="Ejemplo de conversación entre un gestor de recursos y el AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De señales dispersas a una sola lista">
        El asistente reúne en un solo mensaje los excesos de horas, el tiempo no planificado y la planificación por encima de la capacidad, para que puedas actuar antes del cierre del mes.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Lee los problemas que te envía el asistente.',
          'Pide un cliente o un equipo para acotar la lista.',
          'Consulta Cómo he interpretado tu pregunta para ver qué se ha contado como exceso de horas.',
          'Pregunta quién tiene capacidad libre para asumir trabajo.',
          'Abre Capacity × Workload para cambiar la planificación.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          '¿Qué jobs tienen más horas registradas que planificadas este mes?',
          '¿Quién registró tiempo en jobs en los que no estaba planificado?',
          '¿Quién de mi equipo está planificado por encima de su capacidad la próxima semana?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Un exceso de horas compara las horas que una persona registró en un job con las horas planificadas para ella en ese job.',
          'El tiempo registrado en un job en el que la persona no estaba planificada aparece como tiempo no planificado.',
          'Las ausencias y los festivos reducen la capacidad de una persona en las semanas en que caen.',
          'Solo ves las personas y los jobs a los que tienes acceso en Skills Workflow.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Buenos días. Hay cinco problemas de recursos en tu equipo que requieren atención:</strong></p>
    <Walkthrough.DataTable
      columns={['Problema', 'Persona', 'Job', 'Horas']}
      rows={[
        ['Exceso de horas', 'Anna Smith', 'Campaign Website', '46h registradas · 30h planificadas'],
        ['Exceso de horas', 'Mark Evans', 'Spring Savings – Key Visual', '22h registradas · 16h planificadas'],
        ['Tiempo no planificado', 'Julia Green', 'Holiday Packaging', '12h registradas · no planificado'],
        ['Por encima de la capacidad', 'David Brown', '3 jobs, semana del 9 de noviembre', '48h planificadas · 40h de capacidad'],
        ['Por encima de la capacidad', 'Sarah Lee', '2 jobs, semana del 16 de noviembre', '36h planificadas · 24h de capacidad'],
      ]}
      note="Sarah Lee tiene dos días de ausencia en la semana del 16 de noviembre."
    />
    <Walkthrough.Source label="Cargas de trabajo · 5 filas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Muéstrame solo los excesos de horas de Northwind Coffee, y desde cuándo.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Hay un exceso de horas en Northwind Coffee:</strong></p>
    <Walkthrough.DataTable
      columns={['Persona', 'Job', 'Planificado', 'Registrado', 'Por encima del plan desde']}
      rows={[
        ['Anna Smith', 'Campaign Website', '30h', '46h', '21 de octubre'],
      ]}
      note="El job vence el 20 de noviembre y Anna sigue planificada en él la próxima semana."
    />
    <p><strong>Cómo he interpretado tu pregunta</strong></p>
    <ul>
      <li>Incluido: jobs del cliente Northwind Coffee en los que una persona registró más horas de las planificadas para ella.</li>
      <li>Asumido: “desde cuándo” significa el primer día en que las horas registradas superaron las planificadas.</li>
    </ul>
    <Walkthrough.Source label="Cargas de trabajo · 1 fila" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>¿Quién podría asumir parte del trabajo de David en la semana del 9 de noviembre?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Dos personas del departamento de David tienen capacidad libre esa semana:</strong></p>
    <Walkthrough.DataTable
      columns={['Persona', 'Capacidad', 'Planificado', 'Libre']}
      rows={[
        ['Julia Green', '40h', '24h', '16h'],
        ['Mark Evans', '40h', '32h', '8h'],
      ]}
    />
    <p>Abre <strong>Capacity × Workload</strong> para mover el trabajo.</p>
    <Walkthrough.WorkspaceCard
      title="Capacity × Workload"
      subtitle="Workspace · Menu"
      description="Compara el Workload con la capacidad para encontrar sobreasignación e infraasignación, y dónde el trabajo planificado supera la capacidad disponible."
    />
  </Walkthrough.Message>
</Walkthrough>

## Artículos relacionados

- [Discutir una Notificación de Exceso de Horas](/docs/ai/use-cases/resource-management/discussing-a-resource-overrun-notification)
- [Consultar Horas Contratadas y Capacidad del Equipo](/docs/ai/use-cases/resource-management/comparing-contracted-and-available-hours)
- [Encontrar el Mejor Workspace para Gestión de Recursos](/docs/ai/use-cases/resource-management/finding-the-best-resource-management-dashboard)
- [AI Assistant](/docs/ai/ai-assistant)
