---
id: tracking-pending-proposals-and-approvals
title: Seguir los Estimates Pendientes de Aprobación
description: "Mira cómo un account director pregunta al AI Assistant qué estimates están pendientes de la aprobación del cliente, desde cuándo y por qué, y pide al account manager en el Feed que haga el seguimiento."
sidebar_label: Seguir los Estimates Pendientes de Aprobación
sidebar_position: 5
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está en preview, la conversación muestra cómo se espera que el AI Assistant lo gestione, y lo que responde o hace hoy puede diferir de este ejemplo.
:::

## Descripción general

Pregunta al AI Assistant qué estimates enviados a clientes siguen pendientes de aprobación. Los lista con su valor, el día en que se enviaron, cuánto tiempo llevan en espera y quién es el responsable. Pregunta por qué uno está parado y el asistente resume lo que se escribió en el estimate y en su Feed. Después puedes pedirle que publique un comentario en el Feed del estimate para que el responsable haga el seguimiento. Revisas el comentario antes de que se publique.

La agencia, los clientes, los estimates, los valores y las etapas de este ejemplo son ilustrativos. Las etapas dependen del workflow de cada estimate, y los estimates que ves dependen de tus accesos.

<Walkthrough
  subtitle="Ejemplo de conversación entre un account director y el AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De los estimates pendientes al seguimiento">
        El asistente muestra qué propuestas están paradas, desde cuándo y por qué, e inicia el seguimiento con el responsable.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Pregunta qué estimates están pendientes de la aprobación del cliente.',
          'Lee el valor, los días en espera y el responsable.',
          'Pregunta por qué un estimate está parado.',
          'Pide al asistente que publique un comentario en el Feed del estimate.',
          'Revisa el comentario y selecciona Publicar.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          '¿Qué propuestas siguen pendientes de aprobación?',
          '¿Cuál es el estimate más antiguo pendiente de Contoso Bank?',
          '¿Cuánto está pendiente de la aprobación del cliente este mes?',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Pendiente de aprobación significa que el estimate está en una etapa que tu agencia usa para la aprobación del cliente. El nombre de la etapa depende de su workflow.',
          'Los días en espera se cuentan desde el día en que el estimate entró en esa etapa.',
          'Los motivos vienen de lo que se escribió en el estimate y en su Feed. Cuando nadie registró ninguno, el asistente lo indica.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>¿Cuáles de nuestros estimates siguen esperando a que el cliente los apruebe?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Cuatro estimates están pendientes de la aprobación del cliente, por un total de 148.500 €:</strong></p>
    <Walkthrough.DataTable
      columns={['Estimate', 'Cliente', 'Valor', 'Enviado', 'Días en espera', 'Responsable']}
      rows={[
        ['2026 - 00377 · Mobile App Phase 2', 'Contoso Bank', '86.000 €', '1 de octubre', '29', 'David Brown'],
        ['2026 - 00395 · Dealer Kit Q1', 'Fabrikam Motors', '38.500 €', '15 de octubre', '15', 'Anna Smith'],
        ['2026 - 00401 · Spring Shoot', 'Contoso Bank', '16.000 €', '22 de octubre', '8', 'David Brown'],
        ['2026 - 00409 · Gift Card Design', 'Northwind Coffee', '8000 €', '27 de octubre', '3', 'Sarah Lee'],
      ]}
    />
    <p><strong>Cómo he interpretado tu pregunta</strong></p>
    <ul>
      <li>Incluido: estimates en la etapa Awaiting Client Approval.</li>
      <li>Asumido: “enviado” es el día en que el estimate entró en esa etapa.</li>
    </ul>
    <Walkthrough.Source label="Estimates · 4 filas" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>¿Por qué está tardando tanto Mobile App Phase 2?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <ul>
      <li>El 8 de octubre, el cliente pidió en el Feed el precio de un alcance más reducido, sin la versión de Android.</li>
      <li>David respondió el 9 de octubre que enviaría una alternativa. Desde entonces no se ha creado ningún estimate revisado.</li>
      <li>El último comentario en el Feed es del 9 de octubre.</li>
    </ul>
    <p>Probablemente el cliente está esperando la opción reducida.</p>
    <Walkthrough.Source label="Feed · 4 publicaciones" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Pide a David en el Feed que envíe la opción reducida esta semana.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Publicar un comentario"
      subtitle="Revisa el comentario antes de que lo publique."
      rows={[
        ['Estimate', '2026 - 00377 · Mobile App Phase 2'],
        ['Menciones', 'David Brown'],
        ['Comentario', 'Contoso Bank pidió una versión sin Android el 8 de octubre y sigue esperando. ¿Puedes enviarles la opción reducida esta semana?'],
      ]}
      actions={[{ label: 'Denegar' }, { label: 'Publicar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>He revisado el comentario y he seleccionado Publicar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Publicado" label="2026 - 00377 · Mobile App Phase 2" />
    <p>El comentario está en el Feed del estimate. David ha recibido una notificación.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artículos relacionados

- [Crear un Estimate](/docs/product/commercial/estimates/create-estimate)
- [Uso del Feed](/docs/product/files-and-collaboration/using-feed)
- [Comparar Escenarios de Estimate Antes de Crear Uno](/docs/ai/use-cases/contracts-estimates-and-purchase-orders/discussing-estimate-scenarios-before-creation)
- [AI Assistant](/docs/ai/ai-assistant)
