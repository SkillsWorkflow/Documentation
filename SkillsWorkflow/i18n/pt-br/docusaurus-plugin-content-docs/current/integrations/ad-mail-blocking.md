---
id:  ad-mail-blocking
title: Bloqueo de correo AD
sidebar_label: Bloqueo de correo AD
---

Todos los usuarios que están en el Active Directory (AD) tendrán su acceso de correo bloqueado si es infractor en el sistema.

El usuario tiene un período de tolerancia definido por la compañía, durante el cual el usuario será notificado por correo electrónico / notificaciones push.

Si el usuario está vinculado a AD y es infractor, se revocará el acceso al correo electrónico
Los usuarios no podrán enviar o recibir correos electrónicos
Sin embargo, la cuenta de AD no se bloqueará, pudiendo acceder a Skills Workflow.
En Skills Workflow, los usuarios solo tendrán acceso a los módulos Horas de tiempo y Permisos.
Si se bloquea el acceso al correo electrónico, el usuario debe completar su tiempo.

Para hacerlo, el usuario debe ir a la página de inicio de sesión del Skills Workflow iniciar sesión con SSO.



<figure>

![img-box-shadow](/img/integrations/ad-mail-blocking1.png)
<figcaption>Iniciar sesión con el botón SSO</figcaption>
</figure>

Después de hacer clic en el botón, el usuario irá a la página de inicio de sesión de AD que se completará con las credenciales de AD del usuario.

<figure>

![img-box-shadow](/img/integrations/ad-mail-blocking2.png)
<figcaption>Usuario bloqueado debido a la falta de hojas de tiempo</figcaption>
</figure>

Luego, los usuarios podrán completar su tiempo y recuperar el acceso al correo y las funcionalidades del sistema, con un período de espera de alrededor de 20 minutos.

<figure>

![img-box-shadow](/img/integrations/ad-mail-blocking3.png)
<figcaption>Usuario desbloqueado después de completar su tiempo</figcaption>
</figure>