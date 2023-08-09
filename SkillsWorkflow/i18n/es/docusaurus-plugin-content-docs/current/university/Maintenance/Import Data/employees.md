---
id: employees  
title: Importación de empleados
sidebar_label: Empleados
sidebar_position: 1
---

import ReactPlayer from 'react-player';

En este artículo, le guiaremos a través de los sencillos pasos necesarios para importar de forma eficiente los datos de sus empleados, asegurando un proceso de incorporación sin problemas. 

El proceso de importación de empleados:
- Crear un empleado
- Vincular el empleado al usuario y a la empresa

<ReactPlayer controls muted url='/video/import-employee.mp4' />

:::precaución
Para importar los datos correctamente, asegúrese de que no hay entradas duplicadas en el sistema. 

La siguiente combinación debe ser única:
- Nombre | Empresa | Usuario | Id. externo| Valor máximo | Activo
:::

Preparar su fichero de datos:
- Formate correctamente su fichero de datos de empleados para una importación sin problemas.
- Asegúrese de que los datos están organizados y estructurados en un formato compatible.
- Compruebe que todos los campos obligatorios están incluidos y rellenados correctamente.
- Tenga en cuenta las directrices o restricciones específicas de formato de datos que se indican en la documentación del sistema.
- Compruebe que no haya incoherencias o errores en los datos para evitar problemas durante el proceso de importación.

:::danger Importar empleados para usuarios existentes
Al importar un empleado para un usuario que ya está vinculado a un recurso, se creará una nueva entrada de empleado. 

Sin embargo, tenga en cuenta que:
- Se eliminará el antiguo vínculo entre usuario-empleado - visible en la lista de empleados.
- El nuevo empleado se vinculará al usuario en la lista de empleados.
- El nuevo empleado importado no se actualizará automáticamente en el perfil del usuario - campo denominado como "Recurso".
:::

### FAQ

#### ¿Cómo puedo comprobar si hay entradas duplicadas?

Para comprobar si hay empleados duplicados, siga los pasos que se indican a continuación:
1. Acceda a la lista de empleados.
2. Exporte todos los datos a .xls.
3. Abra el archivo .xls y busque las entradas duplicadas.
4. Tome nota de las entradas duplicadas que deban eliminarse.
5. Vuelva a la lista de empleados.
6. Elimine las entradas duplicadas.
