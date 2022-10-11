---
id:  ad-user-blocked
title: Usuário de AD bloqueado no sistema
sidebar_label: Usuário de AD bloqueado no sistema
---

Todos os usuários que estão no Active Directory (AD) serão bloqueados se tiverem horas do timesheet por preencher.

O usuário tem um período de tolerância para preenchimento de timesheets no Skills Workflow definido pela empresa. Durante este período de tolerância, o usuário receberá notificações push/por email.

- Se o usuário está associado com um AD e ultrapassou o período de tolerância de preenchimento de timesheets, todas as funcionalidades integradas com o AD ficarão inacessíveis (exemplo: e-mail, internet).
- Caso o usuário não esteja associado a um AD, ele apenas será bloqueado nas funcionalidades do Skills Workflow, dando acesso ao usuário apenas à tela de timesheets/ausências para que possa preencher todas as horas em falta.

:::note
Se o usuário está bloqueado no AD, o usuário deverá acessar o Skills utilizando o computador de outra pessoa (com uma conta de AD diferente).
:::


Para desbloquear, o usuário deve navegar para a tela de login do Skills Workflow e clicar na opção "Você Está Bloqueado?".


<figure>

![img-box-shadow](/img/integrations/ad-user1.png)
<figcaption> Tela de Login so Skills Workflow com a Opção "Você Está Bloqueado?"</figcaption>
</figure>

Depois de clicar na opção "Você Está Bloqueado?", você poderá ver uma tela para fazer de novo o login. O sistema irá solicitar suas credenciais de usuário de AD*.

<figure>

![img-box-shadow](/img/integrations/ad-user2.png)
<figcaption>Tela de Solicitação de Login</figcaption>
</figure>

Quando o pedido está processado, o usuário ficará temporariamente desbloqueado, permitindo que ele preencha as horas que estão e falta.

O usuário poderá depois voltar a ter acesso a todas as funcionalidades do sistema, com uma duração de espera de aproximadamente 20 minutos.

- O AD será solicitado para que o sistema valide que as credenciais do usuário são válidas.
- Quando o usuário está bloqueado no AD, o procedimento é o seguinte:

1. O usuário está bloqueado no AD
2. As credenciais do usuário (login e senha) são validados no AD
3. O usuário fica de novo bloqueado no AD