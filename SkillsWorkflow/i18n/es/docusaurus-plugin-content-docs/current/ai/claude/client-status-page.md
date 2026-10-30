---
id: ai-claude-client-status-page
title: Compartir una Página de Estado en Tiempo Real con un Cliente
description: "Pide a Claude una página que muestre a un cliente el estado de su campaña, sus entregables y lo que está pendiente de él, publicada en una dirección que siempre muestra los datos de hoy."
sidebar_label: Una Página de Estado para un Cliente
sidebar_position: 3
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

Da a un cliente una única dirección donde vea cómo va su trabajo: el avance de la campaña, los entregables que vencen y las aprobaciones pendientes de él. Pide la página a Claude, revísala y envía la dirección al cliente. La página lee Skills Workflow cada vez que se abre, así que nadie la actualiza a mano y nadie envía por email una presentación de estado el viernes.

## Disponibilidad

Disponible. Necesitas el [conector de Skills Workflow en Claude](/docs/ai/claude/ai-claude-connect). El cliente inicia sesión con su propio usuario de Skills Workflow y ve solo los proyectos y jobs que ese usuario tiene permitido ver.

## Cómo pedirla

1. Indica el cliente, el proyecto o la campaña, y lo que el cliente debe ver en la página.
2. Revisa lo que Claude propone para cada sección y los datos que hay detrás. Pide cambios antes de que publique.
3. Claude publica la página con el nombre del cliente y te da la dirección.
4. Abre la dirección como un usuario con los permisos del cliente y, después, envíala.

La agencia, el cliente, los números y la dirección de este ejemplo son ilustrativos.

<Walkthrough
  title="Claude"
  subtitle="Ejemplo de conversación entre un account manager y Claude."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Un informe de estado que se mantiene al día solo">
        Claude construye la página a partir de tus proyectos y jobs. Cada vez que el cliente la abre, muestra los datos de hoy.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Indica el cliente y la campaña.',
          'Di qué debe ver el cliente y qué no.',
          'Revisa las secciones antes de que Claude publique.',
          'Abre la dirección como el cliente antes de enviarla.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Crea una página de estado para la campaña de Navidad de Northwind Coffee.',
          'Pon arriba las aprobaciones pendientes del cliente.',
          'Oculta las horas, el cliente no debe verlas.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'El cliente necesita un usuario de Skills Workflow para abrir la página.',
          'Cualquier usuario con sesión iniciada que conozca la dirección puede abrirla. Restringe la carpeta por rol cuando eso importe.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>Crea una página de estado para la campaña Christmas 2026 de Northwind Coffee. Deben ver el avance, lo que vence en las próximas dos semanas y todo lo que esté pendiente de su aprobación. Sin horas ni costes.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <p>Esta es la página que voy a publicar para Northwind Coffee:</p>
    <Walkthrough.FieldTable
      rows={[
        ['Cabecera', 'Nombre de la campaña, responsable y avance general'],
        ['Pendiente de ti', 'Jobs en una etapa de aprobación del cliente, los más antiguos primero'],
        ['Vence en las próximas dos semanas', 'Entregables con su fecha de entrega y su etapa'],
        ['Entregado', 'Jobs cerrados este mes'],
        ['Excluido', 'Horas, tarifas y costes'],
      ]}
    />
    <p>La dirección será <code>/portal/northwind-coffee/christmas-2026/</code>. ¿La publico?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Sí, publícala.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <Walkthrough.StatusChip status="Publicado" label="northwind-coffee/christmas-2026" />
    <p>Está publicada. Ábrela con un usuario que tenga los permisos de Northwind Coffee antes de enviar la dirección: es exactamente lo que verá el cliente.</p>
  </Walkthrough.Message>
</Walkthrough>

## Reglas y comportamiento

- La dirección tiene dos partes, el cliente y la página: `/portal/{client}/{page}/`. Ambas usan solo letras minúsculas, números y guiones.
- Pedir un cambio vuelve a publicar la página entera en la misma dirección. El cliente conserva el mismo enlace.
- La página no tiene imágenes propias aparte de las que Claude incrusta en ella. Los logotipos y las fotos de personas y clientes vienen de Skills Workflow.
- Abrir la página sin sesión muestra el inicio de sesión de Skills Workflow y, después, vuelve a la página.

## Artículos relacionados

- [Una Dirección para Todo lo que Abre un Cliente](/docs/ai/claude/ai-claude-client-hub)
- [Construir un Informe a Partir de tus Datos](/docs/ai/claude/ai-claude-reports)
- [Portales de Cliente](/docs/ai/ai-portals)
- [Conectar Claude a Skills Workflow](/docs/ai/claude/ai-claude-connect)
