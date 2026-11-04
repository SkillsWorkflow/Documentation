---
id: consolidated-portals-across-multiple-clients
title: Seguir Varios Clientes Desde un Portal
description: "Mira cómo un account director pide al AI Assistant un único portal que muestre el estado, las peticiones pendientes y los problemas críticos de varias cuentas de cliente, con enlaces al portal propio de cada cliente."
sidebar_label: Seguir Varios Clientes Desde un Portal
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está en preview, la conversación muestra cómo se espera que el AI Assistant lo gestione, y lo que responde o hace hoy puede diferir de este ejemplo.
:::

## Descripción general

Pide al AI Assistant una sola página que muestre todas las cuentas de las que eres responsable. El asistente propone un portal con una fila por cliente: proyectos activos, jobs con retraso, jobs pendientes del cliente y el burn del contrato, con las cuentas que requieren atención arriba y un enlace al portal propio de cada cliente cuando existe. Revisas la página y el asistente la publica.

Un portal de cliente es una página independiente, servida desde Skills Workflow y que lee datos en directo con los permisos de quien la abre. Consulta [Portales de Cliente](/docs/ai/ai-portals) para saber cómo funcionan los portales y qué falta todavía.

La agencia, los clientes, los números y las direcciones de este ejemplo son ilustrativos.

<Walkthrough
  subtitle="Ejemplo de conversación entre un account director y el AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Todas las cuentas en una página">
        El asistente crea un único portal con todos tus clientes, ordenado por lo que requiere atención, y enlaza al portal propio de cada cliente.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Indica los clientes que debe cubrir el portal.',
          'Revisa las columnas y el orden que propone el asistente.',
          'Revisa la dirección y selecciona Publicar.',
          'Abre el portal y entra en el portal propio de un cliente.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Crea una página con todas mis cuentas.',
          'Añade Tailspin Toys a mi portal de cuentas.',
          'Pon primero los clientes con jobs con retraso.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Cada persona que abre el portal solo ve los clientes y proyectos que le permiten sus permisos.',
          'Un portal todavía no está limitado a un cliente. Cualquier usuario con sesión iniciada que conozca la dirección puede abrirlo, así que restringe la carpeta del portal por rol.',
          'El asistente pide tu aprobación antes de publicar. Selecciona Denegar para dejar la página sin publicar.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>Llevo Northwind Coffee, Contoso Bank y Fabrikam Motors. Crea un portal donde pueda ver cómo van los tres.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Voy a crear un portal de cuentas con una fila por cliente, ordenado por jobs con retraso:</p>
    <Walkthrough.DataTable
      columns={['Cliente', 'Proyectos activos', 'Jobs con retraso', 'Pendiente del cliente', 'Burn del contrato', 'Portal']}
      rows={[
        ['Contoso Bank', '4', '3', '2', '81%', '—'],
        ['Northwind Coffee', '2', '1', '3', '62%', 'christmas-2026'],
        ['Fabrikam Motors', '3', '0', '1', '44%', '—'],
      ]}
      note="Contoso Bank tiene registrado el 81% de sus horas contratadas y le quedan dos meses de fee."
    />
    <p><strong>Cómo he interpretado tu pregunta</strong></p>
    <ul>
      <li>Incluido: proyectos de los tres clientes que no están en una etapa de cierre, y sus jobs.</li>
      <li>Asumido: el burn del contrato es la parte de las horas contratadas ya registrada en los fees activos de cada cliente.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Bien. Publícalo.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Publicar este portal"
      subtitle="Revisa el portal antes de que lo publique."
      rows={[
        ['Clientes', 'Northwind Coffee, Contoso Bank, Fabrikam Motors'],
        ['Dirección', '/portal/accounts/anna-smith/'],
        ['Columnas', 'Proyectos activos, Jobs con retraso, Pendiente del cliente, Burn del contrato, Portal'],
        ['Orden', 'Jobs con retraso, de más a menos'],
      ]}
      actions={[{ label: 'Denegar' }, { label: 'Publicar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>He revisado los detalles y he seleccionado Publicar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Publicado" label="accounts/anna-smith" />
    <p>El portal está publicado. Selecciona la fila de un cliente para ver sus jobs con retraso, o el nombre del portal para abrir el portal propio de Northwind Coffee.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artículos relacionados

- [Portales de Cliente](/docs/ai/ai-portals)
- [Dar a un Cliente un Portal Online de Estado del Proyecto](/docs/ai/use-cases/client-dashboards-and-forms/providing-clients-with-an-online-project-status-portal)
- [Revisar los Jobs Críticos de tus Clientes](/docs/ai/use-cases/accounts-status/monitoring-critical-activities-across-accounts)
- [AI Assistant](/docs/ai/ai-assistant)
