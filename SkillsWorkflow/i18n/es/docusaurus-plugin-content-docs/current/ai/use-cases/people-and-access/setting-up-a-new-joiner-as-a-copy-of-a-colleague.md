---
id: setting-up-a-new-joiner-as-a-copy-of-a-colleague
title: Configurar a una Persona Nueva como Copia de un Compañero
description: "Vea cómo un responsable de operaciones pide al AI Assistant que cree el usuario de alguien que entra en la agencia como copia de un compañero, completa el nuevo usuario en una tarjeta antes de crearlo y compara sus perfiles de acceso con los de los compañeros con la misma tipología."
sidebar_label: Configurar a una Persona Nueva
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Descripción general

Diga al AI Assistant quién entra, qué día empieza y como qué compañero debe configurarse. El asistente prepara una copia del usuario de ese compañero con el nombre de la persona nueva, un usuario y la fecha de entrada, y mantiene la tipología, las horas, los perfiles de acceso, los clientes y el departamento del compañero. Revisa todo en una tarjeta, añade lo que es personal de la persona nueva, elige sus tipos de ausencia y crea el usuario.

Cuando el usuario ya existe, el asistente muestra cómo quedó configurada la persona. Después puede pedirle que compare los perfiles de acceso de la persona con los de los compañeros que tienen la misma tipología.

La agencia, las personas, los clientes y los perfiles de acceso de este ejemplo son ilustrativos.

<Walkthrough
  subtitle="Ejemplo de conversación entre un responsable de operaciones y el AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De “Tom entra el lunes” a un usuario listo">
        El asistente copia lo que la persona nueva comparte con un compañero y le deja revisarlo y completarlo todo en una sola tarjeta antes de crear nada.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Indique el nombre completo de la persona nueva, su fecha de entrada y el compañero a copiar.',
          'Si menciona un puesto, diga si mantiene la tipología del compañero.',
          'En Cuenta, revise el usuario y añada el correo y el usuario SSO. Empiezan vacíos.',
          'En Trabajo, revise la fecha de entrada, las horas, la tipología y los perfiles de acceso copiados del compañero.',
          'En Ausencias, seleccione los tipos de ausencia que debe tener la persona y cambie los días de este año.',
          'Seleccione Crear usuario y lea cómo quedó configurada la persona.',
          'Pida al asistente que compare los perfiles de acceso de la persona con los de los compañeros con la misma tipología.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Tom Carter entra el lunes como Senior Designer. Configúralo igual que Ana Lopes.',
          'Duplica a Ana Lopes para Tom Carter, empezando el 7 de diciembre.',
          'Compara los perfiles de acceso de Tom Carter con los de los otros Art Directors de Design.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Necesita permiso para crear y editar usuarios.',
          'El asistente siempre pide el nombre completo y la fecha de entrada de la persona nueva. Sus timesheets empiezan ese día.',
          'No hay un campo de puesto. La tipología viene del compañero que copia, salvo que la cambie en la tarjeta.',
          'Las horas se copian tal como están en el usuario del compañero. Si aparecen a 0, cámbielas en la tarjeta.',
          'En Ausencias aparecen todos los tipos de ausencia del compañero, incluidos los caducados. Solo se dan a la persona nueva los que seleccione.',
          'El usuario debe ser único. Si ya está en uso, el asistente pide otro. No avisa si ya existe alguien con el mismo nombre.',
          'No se crea nada hasta que seleccione Crear usuario. Seleccione Descartar para parar.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>Tom Carter entra en el equipo de Design el lunes 7 de diciembre como Senior Designer. Configúralo igual que Ana Lopes.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>La tipología registrada de Ana es Art Director. ¿Mantengo esa tipología para Tom o uso como plantilla a un compañero Senior Designer?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Mantén la tipología de Ana.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Voy a crear a Tom Carter como copia de Ana Lopes, con timesheets desde el 7 dic 2026. Mantengo la tipología de Ana, como confirmaste, y también sus perfiles de acceso, clientes, departamento y horas registradas.</p>
    <Walkthrough.ApprovalCard
      title="Configurar a Tom Carter"
      sections={[
        { title: 'Origen', rows: [
            ['Copia de', 'Ana Lopes'],
        ] },
        { title: 'Detalles', tabs: [
          { label: 'Cuenta', rows: [
              ['Nombre', 'Tom Carter'],
              ['Usuario', 'tom.carter'],
              ['Correo', '—'],
              ['Usuario SSO', '—'],
          ] },
          { label: 'Trabajo', rows: [
              ['Entra (timesheets desde)', '07/dic/2026'],
              ['Horas mínimas por día', '8'],
              ['Horas mínimas por semana', '40'],
              ['Tipología', 'Art Director'],
              ['Perfiles de acceso', 'Designer, Timesheets, Leaves'],
          ] },
          { label: 'Clientes', rows: [
              ['Clientes', 'Contoso Foods, Northwind Coffee'],
          ] },
          { label: 'Departamentos', rows: [
              ['Departamentos', 'Design'],
          ] },
          { label: 'Ausencias', rows: [
              ['Tipos de ausencia', 'Vacation 25 (hasta 31/dic/2026), Training 3, Special day off 1 (hasta 01/oct/2025)'],
          ] },
        ] },
        { title: 'Incluye', rows: [
            ['Configurado como el compañero', 'Perfiles de acceso, empresa, departamento, división, acceso a clientes, responsable, horario y festivos'],
        ] },
      ]}
      actions={[{ label: 'Editar detalles', link: true }, { label: 'Descartar' }, { label: 'Crear usuario', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Seleccioné Editar detalles, añadí el correo de Tom, seleccioné Vacation y Training en Ausencias, cambié Vacation a 2 días este año y seleccioné Crear usuario.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>La cuenta de Tom Carter se creó como <strong>tom.carter</strong>, a partir de la configuración de Ana Lopes.</p>
    <ul>
      <li><strong>Empresa:</strong> Brightlane Lisbon</li>
      <li><strong>Departamento / división:</strong> Design / Lisbon</li>
      <li><strong>Tipología:</strong> Art Director, como confirmaste</li>
      <li><strong>Timesheets desde:</strong> 7 dic 2026</li>
      <li><strong>Horas mínimas:</strong> 8 por día / 40 por semana</li>
      <li><strong>Perfiles de acceso:</strong> Designer, Timesheets, Leaves</li>
      <li><strong>Acceso a clientes:</strong> <span style={{whiteSpace: 'nowrap'}}><img src="/img/ai/clients/contoso-foods.svg" alt="" width="18" height="18" style={{verticalAlign: '-3px', marginRight: '4px'}} /><span style={{borderBottom: '1px dotted currentColor'}}>Contoso Foods</span></span>, <span style={{whiteSpace: 'nowrap'}}><img src="/img/ai/clients/northwind-coffee.svg" alt="" width="18" height="18" style={{verticalAlign: '-3px', marginRight: '4px'}} /><span style={{borderBottom: '1px dotted currentColor'}}>Northwind Coffee</span></span></li>
      <li><strong>Festivos:</strong> 14 en 2026, iguales a los de Ana</li>
      <li><strong>Ausencias en 2026:</strong> Vacation 2 días, Training 3 días</li>
      <li><strong>Responsable de:</strong> Nadie</li>
      <li><strong>SSO:</strong> No configurado</li>
    </ul>
    <p>La cuenta y los pasos de configuración se completaron sin nada pendiente.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Compara los perfiles de acceso de Tom con los de los otros Art Directors de Design. ¿Falta algún perfil?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Tom tiene los mismos perfiles de acceso que los otros 4 Art Directors de Design. No falta ninguno.</p>
  </Walkthrough.Message>
</Walkthrough>

## Artículos relacionados

- [Crear Usuario](/docs/administration/users/create-user)
- [System Roles and Profiles](/docs/administration/system-roles-profiles)
- [Crear Tipologias](/docs/administration/create-typologies)
- [Crear Tipos de Vacaciones](/docs/administration/calendars/create-leave-type)
- [Vacaciones](/docs/administration/calendars/create-holidays)
- [Asistente de IA](/docs/ai/ai-assistant)
