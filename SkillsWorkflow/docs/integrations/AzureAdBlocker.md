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
SELECCIONE  ssu.Oid, ssu.UserName, u.AdUserName 
DE    SecuritySystemUser ssu, [User] u 
DÓNDE   ssu.Oid = u.Oid 
  Y   u.HasToFillTimesheets = 1 
  Y   u.AdUserName LIKE '%@%.%'
```

### Flujo de trabajo de bloques
- Automatización programada una vez al día
- Descanso - Ejecutar consulta global "GetDelinquentUsers"
    - **CORREO** [/api/analytics/globalQuery/execute?queryName=GetDelinquentUsers](https://apiv2-playground-dev-we.skillsworkflow/api/analytics/globalQuery/execute?queryName=GetDelinquentUsers])
    - Cuerpo: ```{}```
- Bucle: iterar la carga útil de GetDelinquentUsers
    - Subflujo de trabajo
        - AzureAdAuthentication using AppId and AppSecret from Azure AD App registration
        - Rest - PATCH MS Graph Api:
            - **Parche** https://graph.microsoft.com/beta/users/{email}
                - Cuerpo: ```{"accountEnabled":"false"}```

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
        - **Parche** https://graph.microsoft.com/beta/users/{{email}}
            - Cuerpo: ```{"accountEnabled":"true"}```

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


