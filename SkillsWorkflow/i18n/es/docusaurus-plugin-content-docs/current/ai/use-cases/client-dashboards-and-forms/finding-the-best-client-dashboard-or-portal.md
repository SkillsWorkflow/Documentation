---
id: finding-the-best-client-dashboard-or-portal
title: Encontrar el Mejor Workspace o Portal para Compartir con un Cliente
description: "Mira cómo un account manager pregunta al AI Assistant qué workspace o portal de cliente usar para compartir con un cliente el estado de los proyectos, el burn del contrato y las peticiones pendientes, y qué muestra cada uno."
sidebar_label: Encontrar el Mejor Workspace o Portal de Cliente
sidebar_position: 3
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Descripción general

Indica al AI Assistant qué quieres compartir con un cliente: el estado de sus proyectos, el burn del contrato, los riesgos o las peticiones que están pendientes de él. El asistente lo relaciona con los workspaces y portales de cliente que tiene tu agencia, explica qué muestra cada uno y recomienda la opción más clara. También te indica qué vistas son solo para uso interno de la agencia, como la rentabilidad.

:::note Preview
Este caso de uso está en preview y aún no se ha probado de principio a fin. La conversación muestra cómo se espera que el AI Assistant lo gestione, y lo que responde o hace hoy puede diferir de este ejemplo.
:::

La agencia y el cliente de este ejemplo son ilustrativos. El asistente recomienda a partir de los workspaces y portales disponibles en tu agencia, así que los nombres que ves pueden ser distintos. Burn Workspace y Profitability Workspace, usados en este ejemplo, son workspaces de cliente.

<Walkthrough
  subtitle="Ejemplo de conversación entre un account manager y el AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De lo que pide el cliente a dónde mostrarlo">
        El asistente te indica el workspace o portal que responde a la pregunta de tu cliente y te avisa de los que deben quedarse en uso interno.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Di qué quiere seguir el cliente.',
          'Lee qué workspace o portal recomienda el asistente y por qué.',
          'Pregunta si una vista es adecuada para compartir con el cliente.',
          'Abre el workspace recomendado, o pide un portal cuando ninguno encaje.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          '¿Qué puedo mostrar a Northwind Coffee sobre el burn de su contrato?',
          '¿Ya hay un portal para este cliente?',
          '¿Qué dashboard debo usar en la reunión mensual con el cliente?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Los workspaces se abren dentro de Skills Workflow. Un portal de cliente es una página independiente que compartes como una dirección.',
          'Las vistas con márgenes, costes o tarifas son para la agencia. Comprueba lo que muestra una vista antes de compartirla.',
          'Cuando ningún workspace o portal cubre lo que necesita el cliente, pide al asistente que cree un portal.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>Northwind Coffee quiere ver cómo van sus proyectos y cuánto del contrato han consumido. ¿Qué debería compartir con ellos?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Para el <strong>burn del contrato</strong>, usa el <strong>Burn Workspace</strong> del cliente. Muestra las horas contratadas, planificadas y registradas por proyecto, y el burn mes a mes.</p>
    <p>Para el <strong>estado de los proyectos y las peticiones pendientes</strong>, hay un portal de cliente para Northwind Coffee, <strong>christmas-2026</strong>, con los jobs por etapa, los jobs en riesgo y los jobs a la espera de la aprobación del cliente.</p>
    <Walkthrough.WorkspaceCard
      title="Burn Workspace"
      subtitle="Workspace · Cliente"
      description="Horas contratadas, planificadas y registradas por proyecto, con el burn mensual de tiempo y de ingresos."
    />
    <Walkthrough.WorkspaceCard
      title="christmas-2026"
      subtitle="Portal de cliente · northwind-coffee"
      description="Estado, burn del contrato en horas, jobs en riesgo y jobs pendientes del cliente del proyecto Christmas 2026."
      actionLabel="Abrir portal"
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>¿Puedo mostrarles también el Profitability Workspace?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>No, mantenlo en uso interno. El <strong>Profitability Workspace</strong> muestra el beneficio planificado y el margen por proyecto y por tipología, calculados a partir de tus ingresos y tus costes.</p>
    <p>El Burn Workspace también muestra los ingresos frente al coste. En la reunión con el cliente, quédate en los gráficos de burn de tiempo, o comparte el portal, que solo muestra horas.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artículos relacionados

- [Workspace de Cliente](/docs/product/dashboards-and-reporting/client-dashboard)
- [Dar a un Cliente un Portal Online de Estado del Proyecto](/docs/ai/use-cases/client-dashboards-and-forms/providing-clients-with-an-online-project-status-portal)
- [Portales de Cliente](/docs/ai/ai-portals)
- [AI Assistant](/docs/ai/ai-assistant)
