---
id:  sso configuration
title: SSO Configuração 
sidebar_label: SSO Configuração 
---

Em relação ao SSO, o padrão que está em uso está em #Produção:

- O provedor de identidade SSO do cliente deve fornecer o protocolo SAML 2.0 (e.g. #Okta, #OnePass or #Office365) 
- Deve haver uma Reivindicação de Identificação do Usuário acordada entre as partes, seja E-Mail (recommended) ou nome de usuário AD

## Configuração 

1. Os metadados do sistema para #Produção estão disponíveis em https://auth.skillsworkflow.com/saml2/metadata
2. Configure os metadados no provedor de identidade
3. Definir a declaração de identidade do usuário no provedor de identidade - http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier
- Normalmente é enviado o AD UPN
4. Obtenha os metadados do provedor de identidade 
5. Instale os metadados do provedor de identidade no sistema
6. Certifique-se de que os usuários estejam mapeados corretamente em ambos os sistemas - no AD e no Skills Workflow 

<figure>

![img-box-shadow](/img/integrations/ssoconfiguration1.png)
<figcaption>Project created in Skills Workflow</figcaption>
</figure>

:::info
Skills Workflow's SSO Login não suporta login iniciado pelo provedor de identidade. O processo de login deve começar em Skills Workflow.
:::

## Requisitos

- SHA-1
- SP initiated only
- SAML 2.0 Protocol


## Ambiente de teste

Há também a possibilidade de definir SSO no ambiente #Test (não confundir com #UAT que também é um ambiente PROD):

O provedor de identidade SSO do cliente deve fornecer o protocolo SAML 2.0
Obtenha os metadados do provedor de identidade de seu ambiente #Preview (por exemplo, locatário em #Okta, #OnePass ou #Office365)
Instale os metadados do provedor de identidade no sistema no locatário #Test
Os metadados do sistema para #Test estão disponíveis em https://auth-test.skillsworkflow.com/saml2/metadata
