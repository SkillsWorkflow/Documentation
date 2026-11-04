---
id: setting-up-a-new-joiner-as-a-copy-of-a-colleague
title: Configurar a una Persona Nueva como Copia de un Compañero
description: "Vea cómo un responsable de operaciones pide al AI Assistant que cree el usuario de alguien que entra en la agencia como copia de un compañero, revisa el nuevo usuario antes de crearlo y define los clientes y perfiles de acceso que la persona necesita."
sidebar_label: Configurar a una Persona Nueva
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Descripción general

Diga al AI Assistant quién entra, qué día empieza y como qué compañero debe configurarse. El asistente duplica el usuario de ese compañero y termina la configuración en el mismo paso: el nombre, el usuario, el correo y la fecha de entrada de la persona nueva, y la tipología, las horas, los perfiles de acceso, los festivos y los tipos de ausencia de este año del compañero. Revisa todo en una tarjeta antes de que se cree el usuario.

Cuando el usuario ya existe, el asistente muestra cómo quedó configurada la persona y le pide que confirme los clientes y departamentos en los que trabaja. Después compara sus perfiles de acceso con los de los compañeros en la misma función y sugiere los que faltan.

La agencia, las personas, los clientes y los perfiles de acceso de este ejemplo son ilustrativos.

<Walkthrough
  subtitle="Ejemplo de conversación entre un responsable de operaciones y el AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="De “Tom entra el lunes” a un usuario listo">
        El asistente copia lo que la persona nueva comparte con un compañero, corrige lo que es personal del compañero y le deja revisarlo todo antes de crear nada.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Indique el nombre completo de la persona nueva, su fecha de entrada y el compañero a copiar.',
          'Revise el usuario, el correo y el usuario SSO que el asistente sugiere a partir de los del compañero.',
          'Revise las horas, la tipología y los perfiles de acceso, y cambie los que sean distintos para esta persona.',
          'Cambie los días en Tipos de ausencia si la persona debe tener menos días este año.',
          'Seleccione Crear usuario y después confirme los clientes y departamentos en los que trabaja la persona.',
          'Lea la comparación con los compañeros y apruebe o deniegue el perfil de acceso sugerido.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Tom Carter entra el lunes como Senior Designer. Configúralo igual que Ana Lopes.',
          'Duplica a Ana Lopes para Tom Carter, empezando el 2 de noviembre, a media jornada.',
          'Crea un usuario para Tom Carter como Ana Lopes, con el perfil Tráfico y sin Account.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'Necesita permiso para crear y editar usuarios.',
          'El asistente siempre pide el nombre completo y la fecha de entrada de la persona nueva. Sus timesheets empiezan ese día.',
          'Los tipos de ausencia empiezan con los días que el compañero tiene este año. Cámbielos en la tarjeta antes de crear el usuario.',
          'La fecha de nacimiento y el teléfono no se copian. La zona horaria, los valores mensuales de coste y tarifa y las etiquetas tampoco: defínalos en la ficha del nuevo usuario.',
          'Si la persona nueva entra con contraseña, se le pide que la cambie en el primer acceso.',
          'No se crea nada hasta que seleccione Crear usuario. Seleccione Denegar para parar y diga al asistente qué cambiar.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="Tú">
    <p>Tom Carter entra en el equipo de Design el lunes 2 de noviembre como Senior Designer. Configúralo igual que Ana Lopes.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Voy a crear a Tom Carter como copia de Ana Lopes, con entrada el 2 nov 2026. Sus timesheets empiezan ese día, con las horas, la tipología y los perfiles de acceso de Ana. Revisa los detalles abajo.</p>
    <Walkthrough.ApprovalCard
      title="Configurar a Tom Carter"
      subtitle="Revisa el nuevo usuario antes de crearlo."
      rows={[
        ['Copia de:', 'Ana Lopes'],
        ['Nombre', 'Tom Carter'],
        ['Usuario', 'tom.carter'],
        ['Correo', 'tom.carter@brightlane.com'],
        ['Usuario SSO', 'tom.carter@brightlane.com'],
        ['Entra (timesheets desde)', '2 nov 2026'],
        ['Horas mínimas por día', '8'],
        ['Horas mínimas por semana', '40'],
        ['Grupo de tipología', 'Creative'],
        ['Tipología', 'Senior Designer'],
        ['Perfiles de acceso', 'Designer, Timesheets, Leaves'],
        ['Tipos de ausencia', 'Vacation 25, Training 3'],
        ['Configurado como el compañero', 'Perfiles de acceso, empresa, departamento, división, acceso a clientes, responsable, horario y festivos'],
      ]}
      actions={[{ label: 'Editar detalles' }, { label: 'Denegar' }, { label: 'Crear usuario', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>He seleccionado Editar detalles, he cambiado Vacation a 4 días para este año y he seleccionado Crear usuario.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Cómo quedó configurado Tom Carter</strong></p>
    <Walkthrough.FieldTable
      rows={[
        ['Empresa', 'Brightlane Lisbon'],
        ['Departamento', 'Design'],
        ['Tipología', 'Senior Designer (Creative)'],
        ['Responsable', 'Marta Silva'],
        ['Timesheets desde', '2 nov 2026'],
        ['Horas mínimas', '8 por día, 40 por semana'],
        ['SSO', 'tom.carter@brightlane.com'],
        ['Perfiles de acceso', 'Designer, Timesheets, Leaves'],
        ['Clientes', 'Contoso Foods, Northwind Coffee'],
        ['Festivos', '14 en 2026, los mismos que Ana'],
        ['Tipos de ausencia en 2026', 'Vacation 4 días, Training 3 días'],
      ]}
    />
    <p>Confirma abajo los clientes y departamentos de Tom.</p>
    <Walkthrough.ApprovalCard
      title="Acceso de Tom Carter"
      subtitle="Revisa esto antes de continuar."
      rows={[
        ['Usuario', 'Tom Carter'],
        ['Añadir clientes', 'Ninguno'],
        ['Quitar clientes', 'Ninguno'],
        ['Añadir departamentos', 'Ninguno'],
        ['Quitar departamentos', 'Ninguno'],
      ]}
      actions={[{ label: 'Editar detalles' }, { label: 'Denegar' }, { label: 'Aprobar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>Tom va a trabajar en Fabrikam Retail y no en Contoso Foods. He añadido Fabrikam Retail, he quitado Contoso Foods en la tarjeta y he seleccionado Aprobar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Tom ya tiene acceso a Fabrikam Retail y ya no tiene acceso a Contoso Foods. Todo lo demás queda como se copió de Ana.</p>
    <p>He comparado los perfiles de acceso de Tom con los de los otros Senior Designers de Design. <strong>8 de 9 tienen Creative Review</strong> y Tom no. Sugiero añadirlo.</p>
    <Walkthrough.ApprovalCard
      title="Cambiar perfiles de Tom Carter"
      subtitle="Revisa el cambio de accesos antes de aplicarlo."
      rows={[
        ['Usuario', 'Tom Carter'],
        ['Añadir', 'Creative Review'],
      ]}
      actions={[{ label: 'Denegar' }, { label: 'Aprobar', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="Tú">
    <p>He seleccionado Aprobar.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Tom Carter ya tiene el perfil de acceso Creative Review y está listo para empezar el 2 nov 2026.</p>
    <Walkthrough.Choices
      options={['Comparar los accesos de Tom con el equipo de Design', 'Configurar a otra persona']}
    />
  </Walkthrough.Message>
</Walkthrough>

## Artículos relacionados

- [Crear Usuario](/docs/administration/users/create-user)
- [System Roles and Profiles](/docs/administration/system-roles-profiles)
- [Crear Tipologias](/docs/administration/create-typologies)
- [Crear Tipos de Vacaciones](/docs/administration/calendars/create-leave-type)
- [Vacaciones](/docs/administration/calendars/create-holidays)
- [Asistente de IA](/docs/ai/ai-assistant)
