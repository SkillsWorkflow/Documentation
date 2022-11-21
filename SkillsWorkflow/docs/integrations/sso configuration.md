---
id:  sso configuration
title: SSO Configuración
sidebar_label: SSO Configuración
---


Respecto al SSO, el estándar que está en uso es en #Producción:

- El proveedor de identidad SSO del cliente debe proporcionar el protocolo SAML 2.0 (e.g. #Okta, #OnePass or #Office365) 
- Debe haber un Reclamo de Identificación de Usuario acordado entre las partes, ya sea por correo electrónico (recommended) or AD User Name

## Configuración

1. Los metadatos del sistema para #Producción están disponibles en https://auth.skillsworkflow.com/saml2/metadata
2. Configurar los metadatos en el proveedor de identidad
3. Establecer el reclamo de identidad del usuario en el proveedor de identidad - http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier
- Por lo general se envía el UPN AD
4. Obtenga los metadatos del proveedor de identidad
5. Instalar los metadatos del proveedor de identidad en el sistema
6. Asegúrese de que los usuarios estén correctamente mapeados en ambos sistemas: en el AD y en Skills Workflow 

<figure>

![img-box-shadow](/img/integrations/ssoconfiguration1.png)
<figcaption>Project created in Skills Workflow</figcaption>
</figure>

:::info
Skills Workflow's SSO El inicio de sesión no es compatible con el inicio de sesión iniciado por el proveedor de identidad. El proceso de inicio de sesión debe comenzar el Skills Workflow.
:::

## Requisitos

- SHA-1
- SP initiated only
- SAML 2.0 Protocol


## Entorno de prueba

También existe la posibilidad de establecer SSO en el entorno #Test (no confundir con #UAT que también es un entorno PROD):

El proveedor de identidad SSO del cliente debe proporcionar el protocolo SAML 2.0
Obtenga los metadatos del proveedor de identidad de su entorno #Preview (e.g. tenant in #Okta, #OnePass or #Office365)
Instale los metadatos del proveedor de identidad en el sistema en el #Test tenant
Los metadatos del sistema para #Test están disponibles en https://auth-test.skillsworkflow.com/saml2/metadata
