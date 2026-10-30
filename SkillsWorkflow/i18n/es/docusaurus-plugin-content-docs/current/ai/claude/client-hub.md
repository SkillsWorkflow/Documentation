---
id: ai-claude-client-hub
title: Una Dirección para Todo lo que Abre un Cliente
description: "Pide a Claude la página de inicio de un cliente: una dirección que enlaza a cada página de estado e informe que publicas para él, con un breve resumen de cada uno."
sidebar_label: Una Dirección por Cliente
sidebar_position: 4
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

Da a cada cliente una única dirección para guardar en favoritos. Claude construye una página de inicio para el cliente que enlaza a las páginas de estado y a los informes que publicaste para él, y muestra una línea de datos en tiempo real junto a cada enlace: cuántas aprobaciones están pendientes, cuánto del retainer se ha consumido. Cuando publiques algo nuevo para el cliente, pide a Claude que lo añada a la página de inicio.

## Disponibilidad

Disponible. Necesitas el [conector de Skills Workflow en Claude](/docs/ai/claude/ai-claude-connect) y al menos una página ya publicada para el cliente.

## Cómo pedirla

1. Pide a Claude una página de inicio para el cliente e indica las páginas a las que debe enlazar. Claude puede volver a leer lo que está publicado para el cliente cuando le das los nombres de las páginas.
2. Di qué cifra, si alguna, debe mostrar cada enlace.
3. Revisa la página y deja que Claude la publique en la dirección principal del cliente, por ejemplo `/portal/{client}/home/`.

La agencia, el cliente, los números y la dirección de este ejemplo son ilustrativos.

<Walkthrough
  title="Claude"
  subtitle="Ejemplo de conversación entre un account director y Claude."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Un enlace que se envía una sola vez">
        El cliente conserva una única dirección. Las páginas nuevas aparecen en ella cuando pides a Claude que las añada.
      </Walkthrough.CapabilityCard>
      <Walkthrough.PhrasingCard
        items={[
          'Crea una página de inicio para Contoso Bank con enlaces a su página de estado y a su informe del retainer.',
          'Añade la página de la nueva campaña a la página de inicio de Contoso.',
          'Muestra cuántas aprobaciones están pendientes junto al enlace de la página de estado.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Cada página enlazada aplica sus propios permisos de datos cuando se abre.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>Contoso Bank tiene una página de estado y un informe del retainer. Hazles una página de inicio que enlace a las dos, con el número de aprobaciones pendientes junto a la página de estado.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <p>He encontrado las dos páginas en <code>contoso-bank</code>. La página de inicio tendrá:</p>
    <Walkthrough.DataTable
      columns={['Enlace', 'Lo que se muestra al lado']}
      rows={[
        ['Estado de la campaña', 'Aprobaciones pendientes de ti'],
        ['Informe del retainer', 'Porcentaje de las horas de este mes consumidas'],
        ['Tu equipo', 'El equipo de la cuenta, con sus fotos'],
      ]}
    />
    <p>La publicaré en <code>/portal/contoso-bank/home/</code>.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Adelante.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <Walkthrough.StatusChip status="Publicado" label="contoso-bank/home" />
    <p>Publicada. Envía a Contoso solo esta dirección; las otras dos se abren desde ella.</p>
  </Walkthrough.Message>
</Walkthrough>

## Reglas y comportamiento

- Un enlace de la página de inicio abre la otra página en su propia dirección. Cada página comprueba por su cuenta los permisos de quien la ve.
- La página de inicio no encuentra páginas nuevas por sí sola. Pide a Claude que añada cada una.

## Artículos relacionados

- [Compartir una Página de Estado en Tiempo Real con un Cliente](/docs/ai/claude/ai-claude-client-status-page)
- [Construir un Informe a Partir de tus Datos](/docs/ai/claude/ai-claude-reports)
- [Portales de Cliente](/docs/ai/ai-portals)
