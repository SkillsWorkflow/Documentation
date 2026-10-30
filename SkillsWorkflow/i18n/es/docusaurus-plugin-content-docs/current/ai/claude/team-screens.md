---
id: ai-claude-team-screens
title: Añadir una Pantalla a Skills Workflow
description: "Pide a Claude Code, Codex o GitHub Copilot una pantalla propia dentro de Skills Workflow: en el menú, como pestaña en cada job o proyecto, como página de inicio de tu equipo o como mosaico en Maintenance, visible solo para los roles que elijas."
sidebar_label: Una Pantalla Dentro de Skills Workflow
sidebar_position: 6
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

Cuando un equipo trabaja con una vista que las pantallas estándar no le dan, pídesela a Claude. Un tablero de tráfico para el estudio, una pestaña en cada job con lo que aprobó el cliente, una página de inicio para los account managers con las prioridades del día. Claude construye la pantalla y la publica dentro de Skills Workflow, donde tu equipo ya trabaja.

## Disponibilidad

Disponible cuando las pantallas están activadas para tu tenant; pregunta al equipo de Skills Workflow. La pantalla se construye como un pequeño proyecto de código, así que pídela en una herramienta que trabaje con código, como Claude Code, Codex o GitHub Copilot, con el [conector de Skills Workflow](/docs/ai/claude/ai-claude-connect) añadido.

## Dónde puede aparecer una pantalla

| Lugar | Lo que ve el usuario |
|---|---|
| Menú | Una entrada en el grupo Pages, o en el grupo de menú de un tipo de documento como Job o Project. Se abre como pantalla propia o en un popup. |
| Documento | Una pestaña en el detalle y en la preview de todos los documentos de un tipo. La pantalla sabe en qué documento está. |
| Home | La página de inicio del usuario. Ocupa el lugar de los workspaces de Home; si hay varias, gana la de orden más bajo. |
| Maintenance | Un mosaico en Maintenance, que abre la pantalla dentro de él. |

Dile a Claude dónde va la pantalla, su título en cada idioma que usa tu equipo y qué roles la ven. Sin roles, la ven todos. Los roles marcados como obligatorios se exigen todos; de los demás, basta con uno.

La agencia, los nombres y los números de este ejemplo son ilustrativos.

<Walkthrough
  title="Claude"
  subtitle="Ejemplo de conversación entre un studio manager y Claude Code."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Tu pantalla, donde el equipo ya trabaja">
        Claude construye la pantalla, la publica como una versión nueva y la convierte en la que recibe tu equipo.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Di dónde va la pantalla y quién la ve.',
          'Da su título en los idiomas de tu equipo.',
          'Comprueba la pantalla en Skills Workflow antes de avisar al equipo.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Añade al menú un tablero de tráfico para el rol Studio.',
          'Pon una pestaña en cada job con las aprobaciones del cliente.',
          'Vuelve a la versión anterior del tablero de tráfico.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>Construye un tablero de tráfico para el estudio: los jobs que vencen esta semana, agrupados por la persona asignada, con los atrasados primero. Ponlo en el menú, solo para el rol Studio, con el título “Traffic board” y “Quadro de tráfego” en portugués.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <p>El tablero está construido. Lo publiqué como versión 1.0.0 y lo activé:</p>
    <Walkthrough.FieldTable
      rows={[
        ['Aparece en', 'Menú, grupo Pages'],
        ['Lo ve', 'Rol Studio'],
        ['Título', 'Traffic board · Quadro de tráfego'],
        ['Versión activa', '1.0.0'],
      ]}
    />
    <p>Abre Skills Workflow con un usuario de Studio y lo encontrarás en el menú.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Los jobs atrasados deberían estar en rojo. Cámbialo.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Claude">
    <Walkthrough.StatusChip status="Activa" label="traffic-board 1.0.1" />
    <p>La versión 1.0.1 está activa con los jobs atrasados en rojo. La versión 1.0.0 sigue ahí si quieres volver atrás.</p>
  </Walkthrough.Message>
</Walkthrough>

## Reglas y comportamiento

- Cada publicación es una versión nueva. Una versión publicada nunca cambia, y una corrección es siempre la versión siguiente.
- Solo hay una versión activa a la vez. Volver a activar una versión anterior es la forma de volver atrás.
- Las versiones publicadas no se pueden eliminar. Para retirar una pantalla a todos, pide a Claude que publique una versión marcada como inactiva.
- La pantalla lee los datos con los permisos del usuario que la ve.
- Los usuarios bloqueados por timesheets en falta no ven la pantalla, salvo que pidas que se les muestre.

## Artículos relacionados

- [Conectar Claude, Codex o GitHub Copilot a Skills Workflow](/docs/ai/claude/ai-claude-connect)
- [Skills Workflow en Claude](/docs/ai/claude)
- [Construir un Informe a Partir de tus Datos](/docs/ai/claude/ai-claude-reports)
