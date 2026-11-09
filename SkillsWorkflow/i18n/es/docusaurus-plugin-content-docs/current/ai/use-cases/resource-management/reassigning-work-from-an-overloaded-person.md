---
id: reassigning-work-from-an-overloaded-person
title: Reasignar Trabajo de una Persona Sobrecargada
description: "Mira cómo el AI Assistant avisa a un gestor de proyectos de que la persona que está asignando a tres Jobs ya está sobrecargada, sugiere personas disponibles con el Typology Group adecuado y reparte el trabajo entre ellas con la aprobación del gestor."
sidebar_label: Reasignar Trabajo de una Persona Sobrecargada
sidebar_position: 3
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
Este caso de uso está en preview, la conversación muestra cómo se espera que el AI Assistant lo gestione, y lo que responde o hace hoy puede diferir de este ejemplo.
:::

## Descripción general

Cuando pides al AI Assistant que asigne trabajo a alguien, el asistente comprueba si esa persona tiene tiempo para ello en el periodo. Si la persona ya está sobrecargada, te dice en cuánto, sugiere personas del mismo Typology Group que están libres y propone cómo repartir el trabajo entre ellas. La decisión es tuya: mantener tu elección inicial, aceptar la sugerencia o cambiarla. El asistente solo cambia los equipos de los Jobs después de que lo apruebes.

La agencia, el cliente, el proyecto, los Jobs, las personas y las horas de este ejemplo son ilustrativos. Las personas que ves dependen de tus accesos y de cómo planifica tu agencia los recursos.

<Walkthrough
  subtitle="Ejemplo de conversación entre un gestor de proyectos y el AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Un aviso antes de sobrecargar a alguien">
        El asistente compara las horas del trabajo con el tiempo libre de la persona y, cuando no cabe, encuentra quién más puede hacerlo.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Pide al asistente que asigne el trabajo a la persona.',
          'Lee cuántas horas supera la persona su capacidad en el periodo.',
          'Revisa las alternativas y cómo reparte el asistente el trabajo.',
          'Mantén tu elección, acepta la sugerencia o cámbiala.',
          'Revisa los cambios en los equipos y selecciona Aprobar.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Asigna a Artur a estos tres Jobs como Executor.',
          '¿Quién más en Design puede hacer el key visual?',
          'Sí, asigna el trabajo a Lucas y Emma.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'El aviso compara las horas del trabajo con el tiempo libre de la persona en el mismo periodo, después de sus asignaciones y ausencias.',
          'Las alternativas son personas del mismo Typology Group con suficiente tiempo libre. Pide otro grupo o departamento si lo necesitas.',
          'El aviso no te impide continuar. Pide al asistente que asigne a la persona de todos modos si esa es tu decisión.',
          'El asistente pide tu aprobación antes de cambiar el equipo de un Job. Selecciona Denegar para dejar los equipos como están.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>Asigna a Artur Lima como Executor a los Jobs Key Visual, Social Posts y Banner Set de la Solenna Energy Winter Campaign. Se entregan el próximo viernes.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Artur ya está sobrecargado la próxima semana.</strong> Con estos tres Jobs superaría su capacidad en 36 horas:</p>
    <Walkthrough.DataTable
      columns={['Artur Lima · Design', 'Horas']}
      rows={[
        ['Capacidad, del lunes 9 al viernes 13 de noviembre', '40h'],
        ['Ya asignado', '46h'],
        ['Key Visual, Social Posts y Banner Set', '30h'],
        ['Total', '76h · 36h por encima'],
      ]}
    />
    <p><strong>He encontrado estas personas del Typology Group Design como alternativa:</strong></p>
    <Walkthrough.DataTable
      columns={['Persona', 'Typology Group', 'Tiempo libre la próxima semana', 'Trabajo sugerido']}
      rows={[
        ['Lucas Ferreira', 'Design', '40h', 'Key Visual (16h) y Banner Set (6h)'],
        ['Emma Clarke', 'Design', '24h', 'Social Posts (8h)'],
        ['Sofia Marques', 'Design', '16h', 'No hace falta'],
      ]}
      note="Con este reparto, Lucas mantiene 18h libres y Emma 16h libres la próxima semana."
    />
    <p>¿Quieres que les asigne el trabajo?</p>
    <p><strong>Cómo he interpretado tu pregunta</strong></p>
    <ul>
      <li>Incluido: personas activas y planificables del Typology Group Design, del lunes 9 al viernes 13 de noviembre de 2026.</li>
      <li>Supuesto: las horas de cada Job son las horas planificadas en él.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Sí, asígnales el trabajo.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Añadir a los equipos de estos documentos"
      subtitle="Solenna Energy Winter Campaign · 3 Jobs"
      rows={[
        ['SOL0007DESI001 · Key Visual', 'Lucas Ferreira como Executor'],
        ['SOL0007DESI002 · Social Posts', 'Emma Clarke como Executor'],
        ['SOL0007DESI003 · Banner Set', 'Lucas Ferreira como Executor'],
      ]}
      actions={[{ label: 'Denegar' }, { label: 'Aprobar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>He revisado los cambios en los equipos y he seleccionado Aprobar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Actualizado" label="3 Jobs · Solenna Energy Winter Campaign" />
    <p>Lucas Ferreira es el Executor de Key Visual y Banner Set, y Emma Clarke de Social Posts. La semana de Artur Lima sigue como estaba, con 46 horas asignadas.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artículos relacionados

- [Encontrar Personas Disponibles y Asignar Una a un Job](/docs/ai/use-cases/resource-management/checking-resource-availability)
- [Consultar Horas Contratadas y Capacidad del Equipo](/docs/ai/use-cases/resource-management/comparing-contracted-and-available-hours)
- [Recibir Notificaciones Sobre Problemas de Recursos](/docs/ai/use-cases/resource-management/receiving-notifications-about-resource-issues)
- [AI Assistant](/docs/ai/ai-assistant)
