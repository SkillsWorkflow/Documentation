---
id: monitoring-critical-activities-across-accounts
title: Revisar los Jobs Críticos de tus Clientes
description: "Mira cómo un director de cuentas pregunta al AI Assistant qué clientes tienen más Jobs retrasados, qué Jobs se retrasaron recientemente y qué vence en los próximos siete días."
sidebar_label: Revisar los Jobs Críticos de tus Clientes
sidebar_position: 2
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Visión general

Pregunta al AI Assistant, con tus propias palabras, qué clientes tienen más Jobs retrasados. Elige los clientes a los que quieres hacer seguimiento y pregunta qué Jobs suyos se retrasaron en los últimos 30 días y cuáles vencen la próxima semana. Cada respuesta muestra los Jobs con su proyecto y departamento, agrupados por cliente.

La agencia, los clientes, los proyectos, los números de Job, los departamentos y los workspaces de este ejemplo son ilustrativos. Los Jobs que ves dependen de los Jobs a los que tienes acceso.

<Walkthrough
  subtitle="Ejemplo de conversación entre un director de cuentas y el AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Jobs críticos por cliente">
        El asistente cuenta los Jobs retrasados por cliente y, después, muestra los Jobs retrasados y próximos de los clientes que indiques, con su proyecto y departamento.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Pregunta qué clientes tienen más Jobs retrasados.',
          'Elige los clientes a los que quieres hacer seguimiento.',
          'Pregunta qué Jobs suyos se retrasaron en un periodo reciente, como los últimos 30 días.',
          'Pregunta qué Jobs suyos vencen en los próximos siete días.',
          'Consulta Cómo he interpretado tu pregunta para ver las fechas y los clientes que ha usado el asistente.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          '¿Qué clientes tienen más Jobs retrasados ahora mismo?',
          '¿Qué Jobs de estos clientes se retrasaron en los últimos 30 días?',
          '¿Qué Jobs de estos clientes vencen en los próximos 7 días?',
          'Agrúpalos por cliente e incluye el proyecto y el departamento.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Una respuesta lee hasta 200 Jobs, salvo que pidas más. Cuando se alcanza el límite, el asistente indica que la lista es parcial.',
          'Pide un periodo, como los últimos 30 días. Sin él, los Jobs retrasados de años anteriores pueden llenar la lista.',
          'El asistente no puede mostrar qué Jobs están bloqueados ni ordenar los Jobs por prioridad.',
          'Consultar Jobs no los modifica, así que no se necesita aprobación.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>¿Qué clientes tienen más Jobs retrasados ahora mismo?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Orbit Telecom tiene la mayor parte de los Jobs retrasados entre los 200 Jobs obtenidos</strong>, pero no puedo confirmar qué clientes lideran en total: los resultados alcanzaron el límite de 200 Jobs. Por eso, el desglose por cliente es parcial y no es una clasificación completa.</p>
    <Walkthrough.DataTable
      columns={['Cliente', 'Jobs retrasados']}
      rows={[
        ['Orbit Telecom', '31'],
        ['Northwind Coffee', '18'],
        ['Lumen Bank', '14'],
        ['Atlas Motors', '11'],
        ['Otros', '126'],
      ]}
      note="Primeras 200 filas. La consulta se limitó, así que no se muestran los porcentajes."
    />
    <p>Puedes seguir la carga de trabajo y los plazos de los clientes en el workspace siguiente.</p>
    <Walkthrough.WorkspaceCard
      title="Global Planning"
      subtitle="Workspace · Menu"
    />
    <p><strong>Cómo he interpretado tu pregunta</strong></p>
    <ul>
      <li>Incluido: Jobs visibles para ti que están marcados como retrasados, agrupados por cliente.</li>
      <li>Asumido: “retrasados ahora mismo” se refiere al indicador de retraso actual del Job.</li>
      <li>Límite: solo se obtuvieron 200 Jobs retrasados. Acotar a menos clientes o a un periodo puede permitir una comparación completa.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>¿Qué Jobs de Orbit Telecom, Northwind Coffee y Lumen Bank se retrasaron en los últimos 30 días? Agrúpalos por cliente e incluye el proyecto y el departamento.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>He encontrado <strong>6 Jobs que se retrasaron en los últimos 30 días</strong>: 3 de Orbit Telecom, 2 de Northwind Coffee y 1 de Lumen Bank.</p>
    <p><strong>Orbit Telecom</strong></p>
    <Walkthrough.DataTable
      columns={['Job', 'Proyecto', 'Departamento']}
      rows={[
        ['ORB0018ACC002 · Media Plan', 'Orbit 5G Launch', 'Account Management'],
        ['ORB0018CR004 · Key Visual Adaptations', 'Orbit 5G Launch', 'Creative'],
        ['ORB0019DIGI001 · Landing Page', 'Orbit Black Friday 2026', 'Digital'],
      ]}
    />
    <p><strong>Northwind Coffee</strong></p>
    <Walkthrough.DataTable
      columns={['Job', 'Proyecto', 'Departamento']}
      rows={[
        ['NWC0021ACC001 · Client Presentation', 'Northwind Holiday Menu 2026', 'Account Management'],
        ['NWC0021PROD002 · In-Store Posters', 'Northwind Holiday Menu 2026', 'Production'],
      ]}
    />
    <p><strong>Lumen Bank</strong></p>
    <Walkthrough.DataTable
      columns={['Job', 'Proyecto', 'Departamento']}
      rows={[
        ['LUM0033CR001 · Social Templates', 'Lumen Bank Savings Campaign', 'Creative'],
      ]}
    />
    <p><strong>Cómo he interpretado tu pregunta</strong></p>
    <ul>
      <li>Incluido: Jobs de Orbit Telecom, Northwind Coffee y Lumen Bank que están marcados como retrasados, con fecha de entrega del 27 de septiembre al 26 de octubre de 2026.</li>
      <li>Asumido: “se retrasaron” significa que la fecha de entrega pasó durante ese periodo. No se incluyen los Jobs que estuvieron retrasados pero ya no están marcados así.</li>
      <li>Agrupados por cliente y ordenados por fecha de entrega y, después, por número de Job. Se incluyen los 6 Jobs que coinciden.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>¿Y qué Jobs de estos tres clientes vencen en los próximos 7 días?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Northwind Coffee tiene 4 Jobs que vencen entre hoy y el 3 de noviembre</strong> y Lumen Bank tiene 1. Orbit Telecom no tiene Jobs que venzan en ese periodo.</p>
    <p><strong>Northwind Coffee</strong></p>
    <Walkthrough.DataTable
      columns={['Job', 'Departamento', 'Entrega']}
      rows={[
        ['NWC0021ACC003 · Status Meeting', 'Account Management', '29/10/2026'],
        ['NWC0021CR002 · Menu Board Design', 'Creative', '30/10/2026'],
        ['NWC0022CR001 · Concept Development', 'Creative', '02/11/2026'],
        ['NWC0021PROD003 · Print Proofs', 'Production', '03/11/2026'],
      ]}
    />
    <p><strong>Lumen Bank</strong></p>
    <Walkthrough.DataTable
      columns={['Job', 'Departamento', 'Entrega']}
      rows={[
        ['LUM0033DIGI002 · Display Banners', 'Digital', '03/11/2026'],
      ]}
    />
    <p><strong>Cómo he interpretado tu pregunta</strong></p>
    <ul>
      <li>Incluido: Jobs de Orbit Telecom, Northwind Coffee y Lumen Bank con fecha de entrega del 27 de octubre al 3 de noviembre de 2026.</li>
      <li>Agrupados por cliente y ordenados por fecha de entrega y, después, por número de Job.</li>
    </ul>
  </Walkthrough.Message>
</Walkthrough>

## Artículos relacionados

- [Revisar los Proyectos Retrasados que Necesitan tu Atención](/docs/ai/use-cases/projects-and-jobs/identifying-project-delays)
- [Ver los Jobs en los que Trabajas](/docs/ai/use-cases/projects-and-jobs/finding-pending-tasks-and-actions)
- [AI Assistant](/docs/ai/ai-assistant)
