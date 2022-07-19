---
id:  AzureAdBlocker
title: 'AzureAdBlocker'
sidebar_label: AzureAdBlocker
---

# Bloqueador/desbloqueador de usuarios de Office 365 AD

## Habilitar y deshabilitar la cuenta de usuario usando hojas de horas faltantes
### Requisitos:

- Azure AD
- Azure AD Registro de aplicaciones con permisos de Microsoft Graph:
    - User.ManageIdentities.All
    - User.ReadWrite.All
- Usuario con adusername = dirección de correo electrónico
- usuario con parte de horas requerida
- Clave de configuración "AzureADKeys"
```
{
    "TenantId": "*",
    "ClientId": "*",
    "ClientSecret": "*"
}
```
- Consulta global "GetDelinquentUsers"
``` 
SELECT  ssu.Oid, ssu.UserName, u.AdUserName 
FROM    SecuritySystemUser ssu, [User] u 
WHERE   ssu.Oid = u.Oid 
  AND   u.HasToFillTimesheets = 1 
  AND   u.AdUserName LIKE '%@%.%'
```

### Flujo de trabajo de bloques
- Automatización programada una vez al día
- Rest - Execute Global Query "GetDelinquentUsers"
    - **POST** [/api/analytics/globalQuery/execute?queryName=GetDelinquentUsers](https://apiv2-playground-dev-we.skillsworkflow/api/analytics/globalQuery/execute?queryName=GetDelinquentUsers])
    - Body: ```{}```
- Loop - Iterate GetDelinquentUsers Payload
    - Subworkflow
        - AzureAdAuthentication using AppId and AppSecret from Azure AD App registration
        - Rest - PATCH MS Graph Api:
            - **Patch** https://graph.microsoft.com/beta/users/{email}
                - Body: ```{"accountEnabled":"false"}```

#### Carga útil de la consulta global GetDelinquentUsers:
```
{
  "Data": [
    {
        "Oid": "7744be77-4370-4936-8d3d-61cb772ba545",
        "UserName": "Adam",
        "AdUserName":"adam@aduserdomain.org"
    }
}
```



### Desbloquear flujo de trabajo
- Webhook para documento Tipo Skill.Module.BusinessObjects.UnblockUserRequest apuntando a Automatización
- Automatización:
    - Utilice la carga útil de Webhook:
        - event.details.username
    - AzureAdAuthentication usando AppId y AppSecret desde el registro de aplicaciones de Azure AD
    - Resto - Parche MS Graph Api:
        - **Patch** https://graph.microsoft.com/beta/users/{{email}}
            - Body: ```{"accountEnabled":"true"}```

#### Carga útil del ejemplo de WebHook:
```
{
  "secret": null,
  "event": {
    "id": "7744be77-4370-4936-8d3d-61cb772ba545",
    ...
    },
    "details": {
      "userName": "adam@aduserdomain.org",
      "requestUtcDate": "2021-08-03T14:11:37.2064188Z",
      ...
    }
  }
}
```