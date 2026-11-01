---
id: set-up-notifications
title: Configurar as notificações
description: "Ligar o serviço de notificações do Skills Workflow num tenant: ativar Use Notifications Service, instalar do Marketplace os componentes e workspaces das notificações, verificar os webhooks e os agendamentos das automações, e definir as preferências dos utilizadores."
sidebar_label: Configurar as notificações
sidebar_position: 1
---

Configurar as notificações num tenant é ligar o serviço de notificações, instalar os tipos de notificação e as automações que os enviam, e selecionar os canais que cada utilizador recebe. Os passos abaixo são para o Suporte e o IT da agência. A forma como as pessoas recebem as notificações está em [Receber e gerir notificações](/docs/product/notifications/receive-and-manage-notifications).

## Pré-requisitos

- Acesso à **Manutenção**, incluindo **Configuration**, **Marketplace**, **Webhooks**, **Automations** e **Users**.
- Os utilizadores que devem receber notificações por email têm um endereço de email no seu utilizador.

## Ligar o serviço de notificações

1. Vá a **Manutenção → Configuration**.
2. Abra o separador **Notification**.
3. Ligue **Use Notifications Service** e grave.

<figure>

![img-box-shadow](/img/notifications/configuration-use-notifications-service.png)
<figcaption>Use Notifications Service no separador Notification de Manutenção → Configuration</figcaption>
</figure>

Enquanto a opção estiver desligada, o tenant usa as [notificações antigas](/docs/product/notifications/notification-types).

## Definir o domínio da empresa

O domínio da empresa é o endereço que as notificações usam nos links para o tenant. A **Leaves To Approve** só é enviada a aprovadores cuja empresa tem domínio.

1. Vá a **Manutenção → Companies** e abra a empresa.
2. Abra o separador **Outros**.
3. No grupo **Website**, selecione o tenant em **Domínio** e guarde.

Repita para todas as empresas cujos utilizadores recebem notificações.

<figure>

![img-box-shadow](/img/notifications/company-domain.png)
<figcaption>Domínio no grupo Website do separador Outros de uma empresa</figcaption>
</figure>

## Instalar os componentes das notificações

Em **Manutenção → Marketplace**, instale:

- todos os componentes da categoria **Notifications**: tipos de notificação, templates de email, queries, automações e webhooks;
- o workspace **Notification**, que acrescenta o separador **NOTIFICAÇÃO** aos utilizadores;
- o workspace **Notifications**, a página que lista todas as notificações;
- o workspace **Notification Types**.

O Marketplace agrupa os componentes por categoria e depois por módulo. Instale cada um com **⊕**. O procedimento completo, incluindo componentes não aprovados, está em [Instalar componentes do Marketplace](/docs/administration/system/install-from-marketplace).

<figure>

![img-box-shadow](/img/notifications/marketplace-notification-components.png)
<figcaption>Componentes da categoria Notifications, módulo Leaves, em Manutenção → Marketplace</figcaption>
</figure>

Depois da instalação, os tipos de notificação aparecem em **Manutenção → Notification Types**. Cada um tem um nome e uma descrição por língua, que pode editar. A descrição é o que os utilizadores veem nas suas preferências.

## Verificar os webhooks

As notificações enviadas por um evento começam num webhook. Em **Manutenção → Webhooks**, abra cada webhook das notificações e verifique que:

- **Active** está ligado.
- **Event** e **Document** correspondem ao evento que deve enviar a notificação, por exemplo **Updated** em **Leave**.
- **Automation** está ligado e **Automation Workflow** indica a automação da notificação.

<figure>

![img-box-shadow-popup](/img/notifications/webhook-form.png)
<figcaption>Um webhook de notificação: Updated em Leave corre a automação Notification-LeaveRejected</figcaption>
</figure>

Alguns webhooks têm também **Filters**, que restringem os eventos que correm a automação. Um filtro combina **Business Object Type Name** com condições sobre uma **Detail Path Expression**, uma **Condition** e um **Value**, ligadas por **And** ou **Or**. **Add filter** acrescenta uma condição.

<figure>

![img-box-shadow-popup](/img/notifications/webhook-filters.png)
<figcaption>A secção Filters de um webhook</figcaption>
</figure>

Cada campo do formulário do webhook está descrito em [Webhooks](/docs/build-and-extend/api/webhooks).

## Verificar os agendamentos das automações

As notificações enviadas por agendamento, como **Team Birthdays** ou **Leaves To Approve**, só correm quando a sua automação tem um agendamento ativo. Em **Manutenção → Automations**, a coluna **Scheduler** mostra o agendamento de cada automação e **Active** mostra se a automação corre. Os agendamentos estão explicados em [How automations start](/docs/build-and-extend/automations/triggers).

<figure>

![img-box-shadow](/img/notifications/automations-list.png)
<figcaption>Automações das notificações em Manutenção → Automations</figcaption>
</figure>

## Definir as preferências dos utilizadores

Um utilizador só recebe um tipo de notificação nos canais selecionados para ele. Enquanto nenhum canal estiver selecionado, o utilizador não recebe nada desse tipo.

1. Vá a **Manutenção → Users** e abra o utilizador.
2. Abra o separador **NOTIFICAÇÃO**, através de **▾** se não estiver visível.
3. Selecione **Email**, **Push** e **Web** para cada tipo de notificação.

<figure>

![img-box-shadow-popup](/img/notifications/user-notification-preferences.png)
<figcaption>Canais por tipo de notificação no separador NOTIFICAÇÃO de um utilizador</figcaption>
</figure>

Definir as preferências de outros utilizadores exige a role `CanManageOthersPreferences`, e o próprio separador exige `NotificationPreferenceWrite`. Para as **Mentions**, ligue também **Receber notificações dos documentos** no utilizador.

## Artigos relacionados

- [Notificações](/docs/product/notifications)
- [Notificações disponíveis](/docs/product/notifications/available-notifications)
- [Monitorizar e resolver problemas das notificações](/docs/administration/notifications/monitor-and-troubleshoot-notifications)
- [Instalar componentes do Marketplace](/docs/administration/system/install-from-marketplace)
- [Webhooks](/docs/build-and-extend/api/webhooks)
- [Automações](/docs/build-and-extend/automations)
