---
id: users
title: Usuarios
sidebar_label: Usuarios
sidebar_position: 6
---

import ReactPlayer from 'react-player';

En este artículo, te guiaremos a través de los simples pasos necesarios para importar eficientemente los datos de tus usuarios, asegurando un proceso de integración sin problemas.

El proceso de importación de usuarios incluirá:

- Crear un usuario
- Asociar al usuario con la empresa, división, departamento y tipología.

<ReactPlayer controls muted url='/video/Import_Users.mov' />

:::caution
Para importar los datos con éxito, asegúrate de que no haya entradas duplicadas en el sistema.

La siguiente combinación debe ser única:

- Username | Name | IsActive | Company | Division | Department | DepartmentType| Typology
  :::

Preparando tu archivo de datos:

- Formatea correctamente tu archivo de datos de usuarios para una importación sin problemas.
- Asegúrate de que los datos estén organizados y estructurados en un formato compatible.
- Verifica que todos los campos obligatorios estén incluidos y completados correctamente.
- Considera cualquier guía específica de formato de datos o restricciones mencionadas en la documentación del sistema.
- Revisa cuidadosamente la existencia de inconsistencias o errores en los datos para evitar problemas durante el proceso de importación.

### FAQ

#### ¿Cómo puedo verificar entradas duplicadas?

Para verificar usuarios duplicados, siga los pasos a continuación:

1. Accede a la lista de usuarios.
2. Exporta todos los datos a un archivo .xls.
3. Abre el archivo .xls y busca entradas duplicadas.
4. Haz una nota de las entradas duplicadas que deben ser eliminadas.
5. Regresa a la lista de usuarios
6. Elimina las entradas duplicadas.
