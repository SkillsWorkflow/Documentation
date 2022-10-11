---
id:  ad-user-blocked
title: Ad User blocked in the system
sidebar_label: Ad User blocked in the system
---

Todos los usuarios que se encuentren en el Active Directory (AD) con horas por llenar en el sistema seran bloquearn.

El usuario tiene un periodo de tolerancia definido por la propia compañía, durante el cuál el usuario será notificado por correo electrónico / notificaciones push.

- Si el usuario está vinculado a la AD y tiene horas por llenar, todas las funcionalidades integradas con la AD quedarán inaccesibles (por ejemplo, correo electrónico, Internet)
- En el caso de que el usuario no esté vinculado a la AD, el usuario sólo será bloqueado en las funcionalidades del sistema, permitiendo sólo el acceso en el dónde el usuario está en falta (por ejemplo, aprovación de horas, hojas).

:::note
Si está bloqueado en el AD, el usuario debe ingresar en el ordenador de otra persona (una cuenta diferente de AD) y realizar los siguientes pasos:
:::



1. Para desbloquear, el usuario debe ir a la página de inicio de SkillsWorkflow y hacer clic en el botón "Estás Bloqueado?".

<figure>

![img-box-shadow](/img/integrations/ad-user1.png)
<figcaption>Login Page "Are you blocked" button</figcaption>
</figure>

2. Después de hacer clic en el botón, el usuario entrará en una página de solicitud del inicio de sesión que deberá ser llenado con las credenciales de la AD*.

<figure>

![img-box-shadow](/img/integrations/ad-user2.png)
<figcaption>Log in Request page</figcaption>
</figure>

Después de procesar la solicitud, el usuario se desbloqueará temporariamente, permitiendo ingresar las horas en donde el usuario está en mora. Después de este último paso el usuario volverá a tener acceso a todas las funcionalidades del sistema, con un período de espera de alrededor de 20 minutos.

- El AD será consultado para determinar si las credenciales de usuario son válidas. Dado que el Usuario está bloqueado en la AD, el procedimiento se ejecutará de la siguiente manera:

1. El usuario está desbloqueado en la ADUser is unblocked in the AD
2. Las credenciales de acceso del usuario (nombre y contraseña) son verificados en la AD.
3. El usuario se bloquea de nuevo en la AD.
