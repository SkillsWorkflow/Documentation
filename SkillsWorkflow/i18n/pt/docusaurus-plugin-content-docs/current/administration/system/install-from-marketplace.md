---
id: install-from-marketplace
title: Instalar componentes do Marketplace
description: "Encontrar e instalar componentes do Skills Workflow, como workspaces, automações, webhooks, queries e tipos de notificação, em Manutenção → Marketplace, incluindo componentes cuja versão não está aprovada."
sidebar_label: Instalar do Marketplace
---

O Marketplace reúne os componentes prontos que um tenant pode instalar: workspaces, automações, webhooks, queries, templates, tipos de notificação e outros. Está em **Manutenção → Marketplace**. Os exemplos desta página usam os componentes do serviço de notificações.

## Visão geral do Marketplace

Os cartões no topo resumem o catálogo para este tenant:

| Cartão | Mostra |
|---|---|
| **Total** | Components in the Marketplace |
| **Installed** | Installed in this environment |
| **Defaults** | Marked as default |
| **Not updated** | Newer version available |

Abaixo dos cartões, a lista agrupa os componentes por **Category** e depois por **Module**. Cada linha mostra o **Name** do componente, as **Changes** da sua versão, o **Ticket**, **Days Ago**, o **Stage**, a **Version** e as **Actions**. Use a caixa de pesquisa para encontrar um componente pelo nome.

<figure>

![img-box-shadow](/img/notifications/marketplace-notification-components.png)
<figcaption>Manutenção → Marketplace, com a categoria Notifications e o seu módulo Leaves</figcaption>
</figure>

## Instalar um componente

1. Vá a **Manutenção → Marketplace**.
2. Encontre o componente pelo nome, ou abra a sua categoria e módulo.
3. Em **Actions**, clique em **⊕** para o instalar.

<figure>

![img-box-shadow](/img/notifications/marketplace-install-button.png)
<figcaption>Um componente por instalar, com ⊕ em Actions</figcaption>
</figure>

Quando a versão de um componente não está aprovada, o Marketplace pede confirmação antes de o instalar. Escolha **Yes, install unapproved version** para o instalar, ou **No** para cancelar.

<figure>

![img-box-shadow-popup](/img/notifications/marketplace-unapproved-warning.png)
<figcaption>Confirmação antes de instalar uma versão não aprovada</figcaption>
</figure>

## Regras e comportamento

- Um componente instalado mostra a versão a verde e não tem ação de instalação.
- **Not updated** conta os componentes instalados que têm uma versão mais recente no Marketplace.
- Uma funcionalidade pode precisar de vários componentes. O serviço de notificações, por exemplo, precisa de todos os componentes da categoria **Notifications** e de três workspaces. Ver [Configurar as notificações](/docs/administration/notifications/set-up-notifications).

## Artigos relacionados

- [Maintenance](/docs/administration/maintenance)
- [Configurar as notificações](/docs/administration/notifications/set-up-notifications)
- [Workspaces](/docs/build-and-extend/workspaces)
- [Automações](/docs/build-and-extend/automations)
