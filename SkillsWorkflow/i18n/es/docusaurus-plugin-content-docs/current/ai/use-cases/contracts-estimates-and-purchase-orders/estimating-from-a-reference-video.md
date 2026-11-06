---
id: estimating-from-a-reference-video
title: Obtener una Primera Estimación a Partir de un Vídeo de Referencia
description: "Mira cómo un account manager adjunta al AI Assistant el vídeo de referencia de un cliente, obtiene una primera estimación del equipo, las horas y los costes de terceros orientativos, compara una versión más corta y crea el estimate cuando la productora envía su presupuesto."
sidebar_label: Estimate a Partir de un Vídeo de Referencia
sidebar_position: 6
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está en preview, la conversación muestra cómo se espera que el AI Assistant lo gestione, y lo que responde o hace hoy puede diferir de este ejemplo.
:::

## Descripción general

Cuando un cliente envía un vídeo y pide algo parecido, adjunta el vídeo al AI Assistant y pide una primera estimación. El asistente describe lo que ve en el vídeo, propone el equipo, las horas por grupo de cargo y los servicios de terceros que necesitaría la producción, y calcula las horas con el rate card del cliente. Los valores de terceros son orientativos hasta que un proveedor los presupueste. Compara versiones más cortas o más baratas, sustituye los valores orientativos por el presupuesto del proveedor y aprueba el estimate.

La agencia, el cliente, el vídeo, el estimate, los proveedores, las tarifas y los valores de este ejemplo son ilustrativos. Los Tipos Presupuesto, los rate cards y las etapas dependen de la configuración de tu agencia.

<Walkthrough
  subtitle="Ejemplo de conversación entre un account manager y el AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De un vídeo de referencia a una primera estimación">
        El asistente te dice lo que ve en el vídeo y lo convierte en horas del equipo y servicios de terceros, para que tengas una cifra de partida antes de hablar con los proveedores.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Adjunta el vídeo e indica para qué cliente y proyecto es.',
          'Comprueba lo que el asistente dice ver en el vídeo.',
          'Compara las versiones que el cliente puede elegir.',
          'Pasa al asistente los valores que ha presupuestado el proveedor.',
          'Revisa los detalles y selecciona Crear.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'El cliente quiere una película como esta. Dame una primera estimación.',
          'Compárala con una versión de 30 segundos sin dron.',
          'Usa el presupuesto de la productora en lugar de tus valores.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'El asistente empieza describiendo lo que ve en el vídeo. Corrígelo antes de confiar en la estimación.',
          'Las horas se calculan con el Rate Card del cliente. Los valores de terceros son orientativos hasta que un proveedor los presupueste.',
          'No se crea nada mientras comparas versiones. El asistente pide tu aprobación antes de crear el estimate.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>Solenna Energy quiere una película de marca como esta para el proyecto Brand Film 2027. Dame una primera estimación.</p>
    <p><strong>Adjunto:</strong> reference_film.mp4</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Lo que veo en el vídeo</strong></p>
    <ul>
      <li>Una película de 60 segundos rodada en tres localizaciones: una calle, un parque eólico grabado con dron y una casa familiar.</li>
      <li>Cuatro actores, locución, música original y una pantalla final animada.</li>
    </ul>
    <p><strong>Una primera estimación para una película parecida:</strong></p>
    <Walkthrough.DataTable
      columns={['Línea', 'Componente', 'Cantidad', 'Valor']}
      rows={[
        ['Concept and Script · Creative', 'Recursos', '24h', '2040 €'],
        ['Art Direction and End Card · Design', 'Recursos', '30h', '2100 €'],
        ['Script and Voice-over Text · Copywriting', 'Recursos', '10h', '650 €'],
        ['Account Management · Accounts', 'Recursos', '20h', '1200 €'],
        ['Filming Day', 'Terceros', '2 × 2800 €', '5600 €'],
        ['Drone Filming', 'Terceros', '1 × 1200 €', '1200 €'],
        ['Casting and Talent', 'Terceros', '4 × 450 €', '1800 €'],
        ['Voice-over', 'Terceros', '1 × 650 €', '650 €'],
        ['Music Licensing', 'Terceros', '1 × 1500 €', '1500 €'],
        ['Post-production and Colour Grading', 'Terceros', '1 × 2400 €', '2400 €'],
        ['Travel to Filming Location', 'Gastos', '1', '400 €'],
      ]}
      note="Horas calculadas con el rate card Solenna Energy 2027, columna Standard. Los valores de terceros son orientativos. Total 19.540 €."
    />
    <p><strong>Por confirmar</strong></p>
    <ul>
      <li>¿El cliente quiere la misma duración, y versiones cortas para redes sociales?</li>
      <li>¿Qué productora va a rodarla?</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Compárala con una versión de 30 segundos sin dron.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>La versión más corta ahorra 4000 € en costes de terceros:</strong></p>
    <Walkthrough.DataTable
      columns={['Escenario', 'Terceros', 'Total']}
      rows={[
        ['A · 60 segundos, como la referencia', '13.150 €', '19.540 €'],
        ['B · 30 segundos, un día de rodaje, sin dron', '9150 €', '15.540 €'],
      ]}
      note="Las horas del equipo y el desplazamiento son iguales en los dos."
    />
    <p><strong>Cómo he interpretado tu pregunta</strong></p>
    <ul>
      <li>Supuesto: una película de 30 segundos necesita un día de rodaje, y el reparto, la locución, la música y la postproducción se mantienen.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Vamos con la B. Lumen Studio ha presupuestado 6700 € para el rodaje, los actores y la postproducción. Mantén la locución y la música como las tienes y crea el estimate.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Crear este estimate"
      subtitle="Revisa estos detalles antes de que lo cree."
      rows={[
        ['Cliente', 'Solenna Energy'],
        ['Proyecto', 'Brand Film 2027'],
        ['Tipo Presupuesto', 'Campaign'],
        ['Nombre', 'Brand Film 2027 · 30 seconds'],
        ['Rate Card', 'Solenna Energy 2027 · Standard'],
        ['Recursos', '4 líneas, 84h, 5990 €'],
        ['Terceros', 'Production, Lumen Studio, 6700 € · Voice-over, 650 € · Music Licensing, 1500 €'],
        ['Gastos', 'Travel to Filming Location, 400 €'],
        ['Total', '15.240 €'],
      ]}
      actions={[{ label: 'Denegar' }, { label: 'Crear', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>He revisado los detalles y he seleccionado Crear.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Creado" label="2026 - 00431 · Brand Film 2027 · 30 seconds" />
    <p>El estimate se ha creado en New, con un total de 15.240 €. La locución y la música siguen con valores orientativos. Actualízalos cuando tengas los presupuestos.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artículos relacionados

- [Comparar Escenarios de Estimate Antes de Crear Uno](/docs/ai/use-cases/contracts-estimates-and-purchase-orders/discussing-estimate-scenarios-before-creation)
- [Crear un Estimate a Partir de un Archivo](/docs/ai/use-cases/contracts-estimates-and-purchase-orders/creating-an-estimate-from-files)
- [Crear un Estimate](/docs/product/commercial/estimates/create-estimate)
- [AI Assistant](/docs/ai/ai-assistant)
