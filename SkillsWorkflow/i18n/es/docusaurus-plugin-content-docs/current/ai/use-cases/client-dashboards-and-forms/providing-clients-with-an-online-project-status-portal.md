---
id: providing-clients-with-an-online-project-status-portal
title: Dar a un Cliente un Portal Online de Estado del Proyecto
description: "Mira cómo un account manager pide al AI Assistant un portal de cliente con el estado, el burn del contrato, los riesgos y las peticiones pendientes de un proyecto, revisa lo que muestra la página y la publica."
sidebar_label: Dar a un Cliente un Portal de Estado del Proyecto
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está en preview, la conversación muestra cómo se espera que el AI Assistant lo gestione, y lo que responde o hace hoy puede diferir de este ejemplo.
:::

## Descripción general

Indica al AI Assistant para qué cliente y proyecto es el portal y qué debe mostrar. El asistente propone las secciones de la página y los datos de cada una: el estado del proyecto, el burn del contrato, los jobs en riesgo y las peticiones que siguen pendientes de alguien. Revisas la página y el asistente la publica como portal de cliente con su propia dirección, lista para compartir.

Un portal de cliente es una página independiente, servida desde Skills Workflow y que lee datos en directo. Quien lo abre inicia sesión y ve los datos que le permiten sus propios permisos. Consulta [Portales de Cliente](/docs/ai/ai-portals) para saber cómo funcionan los portales y qué falta todavía.

La agencia, el cliente, el proyecto, los números y la dirección de este ejemplo son ilustrativos.

<Walkthrough
  subtitle="Ejemplo de conversación entre un account manager y el AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De una petición a una página que abre el cliente">
        El asistente crea un portal en torno al proyecto que le importa al cliente, con el estado, el burn, los riesgos y las peticiones pendientes en directo.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Indica el cliente, el proyecto y qué debe mostrar el portal.',
          'Revisa las secciones y los datos que propone el asistente.',
          'Pide cambios en las secciones antes de publicar.',
          'Revisa la dirección y selecciona Publicar.',
          'Abre el portal y compruébalo como un usuario que debe verlo.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Crea una página de estado para Northwind Coffee con su proyecto de Navidad.',
          'Da a Contoso Bank una vista online del burn del contrato y de las aprobaciones pendientes.',
          'Añade los jobs en riesgo al portal de Northwind.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Un portal lee los datos con los permisos de la persona que lo abre. Quien no puede ver un proyecto en Skills Workflow tampoco lo ve en el portal.',
          'Un portal todavía no está limitado a su cliente. Cualquier usuario con sesión iniciada que conozca la dirección puede abrirlo, así que restringe las carpetas del portal por rol.',
          'La dirección tiene dos partes, el cliente y el portal, en minúsculas, números y guiones.',
          'El asistente pide tu aprobación antes de publicar. Selecciona Denegar para dejar la página sin publicar.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>Northwind Coffee quiere seguir online el proyecto Christmas 2026. Crea un portal con el estado del proyecto, el burn del contrato, los riesgos y las peticiones que están pendientes de ellos.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Voy a crear un portal para <strong>Northwind Christmas 2026</strong> con cuatro secciones:</p>
    <Walkthrough.DataTable
      columns={['Sección', 'Qué muestra']}
      rows={[
        ['Estado del proyecto', 'Jobs por etapa, entregados este mes y que vencen en las próximas dos semanas'],
        ['Burn del contrato', 'Horas contratadas, planificadas y registradas, y el porcentaje de burn'],
        ['En riesgo', 'Jobs con retraso y jobs que vencen esta semana y aún no están en producción'],
        ['Pendiente de ti', 'Jobs a la espera de la aprobación o los comentarios del cliente, con los días de espera'],
      ]}
    />
    <p>¿El burn debe mostrar solo horas, o horas y valores?</p>
    <Walkthrough.Choices label="Burn del contrato" options={['Solo horas', 'Horas y valores']} />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Solo horas. Y añade el logotipo del cliente en la parte superior.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Publicar este portal"
      subtitle="Revisa el portal antes de que lo publique."
      rows={[
        ['Cliente', 'Northwind Coffee'],
        ['Proyecto', 'Northwind Christmas 2026'],
        ['Dirección', '/portal/northwind-coffee/christmas-2026/'],
        ['Secciones', 'Estado del proyecto, Burn del contrato (horas), En riesgo, Pendiente de ti'],
        ['Cabecera', 'Logotipo de Northwind Coffee'],
      ]}
      actions={[{ label: 'Denegar' }, { label: 'Publicar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>He revisado los detalles y he seleccionado Publicar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Publicado" label="northwind-coffee/christmas-2026" />
    <p>El portal está publicado. Hoy muestra 14 jobs, 9 entregados, el 62% de las horas contratadas registradas, 2 jobs en riesgo y 3 jobs a la espera de la aprobación del cliente.</p>
    <p>Antes de compartir la dirección, restringe la carpeta <strong>northwind-coffee</strong> a los roles que deben abrirlo.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artículos relacionados

- [Portales de Cliente](/docs/ai/ai-portals)
- [Encontrar el Mejor Workspace o Portal para Compartir con un Cliente](/docs/ai/use-cases/client-dashboards-and-forms/finding-the-best-client-dashboard-or-portal)
- [Seguir Varios Clientes Desde un Portal](/docs/ai/use-cases/accounts-status/consolidated-portals-across-multiple-clients)
- [AI Assistant](/docs/ai/ai-assistant)
