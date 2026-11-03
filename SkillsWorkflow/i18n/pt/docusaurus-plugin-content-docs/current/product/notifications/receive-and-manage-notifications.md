---
id: receive-and-manage-notifications
title: Receber e gerir notificações
description: "Ler notificações no painel Notificações e na página Notifications, abrir o documento relacionado, marcar notificações como lidas ou não lidas, ler os emails de notificação e escolher os canais Email, Push e Web para cada tipo de notificação."
sidebar_label: Receber e gerir notificações
sidebar_position: 1
---

As notificações chegam-lhe na Web, por Email e por Push, nos canais que escolheu para cada tipo de notificação. Na Web aparecem no painel **Notificações** e na página **Notifications**, onde cada uma abre o documento a que diz respeito.

## Pré-requisitos

- O tenant usa o serviço de notificações. Ver [Configurar as notificações](/docs/administration/notifications/set-up-notifications).
- O canal está selecionado para esse tipo de notificação nas suas preferências. Ver [Escolher as notificações que recebe](#escolher-as-notificações-que-recebe).

## Painel Notificações

Clique no ícone do sino na barra de topo para abrir o painel **Notificações**.

<figure>

![img-box-shadow-sm](/img/notifications/notifications-panel.png)
<figcaption>O painel Notificações, com os filtros Todos e Não Lido</figcaption>
</figure>

Cada cartão mostra quem originou a notificação, quando, o documento a que diz respeito e o que aconteceu: o comentário, a mudança de etapa ou o resumo. Um ponto azul assinala uma notificação não lida.

- **Todos** e **Não Lido** filtram a lista pelo estado de leitura.
- **Marcar todas como lidas** marca todas as notificações como lidas.
- **Ver tudo** abre a [página Notifications](#página-notifications). Aparece quando a página está instalada e a lista não está vazia.
- **Atualizar** recarrega a lista.

## Abrir uma notificação ou marcá-la como lida

- Clique num cartão para o marcar como lido e abrir a pré-visualização do documento.
- Faça duplo clique num cartão para abrir o documento.
- Passe o rato sobre um cartão para mostrar **Navegar para**, que abre o documento, e **Marcar como lido** ou **Marcar como não lido**. Estas ações mudam o estado de leitura sem abrir nada.

<figure>

![img-box-shadow-sm](/img/notifications/notification-card-actions.png)
<figcaption>Navegar para e Marcar como lido num cartão de notificação</figcaption>
</figure>

## Página Notifications

**Ver tudo** no painel abre a página **Notifications**. Lista todas as suas notificações, com pesquisa, e abre o documento da notificação selecionada numa pré-visualização à direita.

<figure>

![img-box-shadow](/img/notifications/all-notifications.png)
<figcaption>A página Notifications, com o job da notificação selecionada na pré-visualização</figcaption>
</figure>

## Emails de notificação

Os emails de notificação chegam de notifications@skillsworkflow.com. Um email sobre um documento mostra o documento, a pessoa que agiu e quando, o que aconteceu, o comentário e um botão **Open document** que abre o documento no Skills Workflow.

<figure>

![img-box-shadow](/img/notifications/email-mention.png)
<figcaption>Email de uma menção, com o comentário e o botão Open document</figcaption>
</figure>

## Notificações push

As notificações push aparecem no telemóvel através da aplicação móvel do Skills Workflow.

## Escolher as notificações que recebe

As suas preferências estão no seu registo de utilizador.

1. Vá a **Manutenção → Users** e abra o utilizador.
2. Abra o separador **NOTIFICAÇÃO**. Se não estiver visível, abra a lista de separadores com **▾**.
3. Cada linha é um tipo de notificação, identificado pela sua descrição. Selecione **Email**, **Push** e **Web** nos canais que pretende e limpe os restantes.

<figure>

![img-box-shadow-popup](/img/notifications/user-notification-preferences.png)
<figcaption>O separador NOTIFICAÇÃO de um utilizador, com os canais selecionados por tipo de notificação</figcaption>
</figure>

O separador **NOTIFICAÇÃO** aparece quando o tenant usa o serviço de notificações e tem a role `NotificationPreferenceWrite`. Alterar as preferências de outro utilizador exige também a role `CanManageOthersPreferences`.

## Regras e comportamento

- Um tipo de notificação sem nenhum canal selecionado não lhe é entregue.
- Uma notificação enviada apenas por Email ou Push não aparece no painel Notificações. Selecione **Web** para a ver também aí.
- As notificações por email exigem um endereço de email no seu utilizador.
- Nunca é notificado sobre o seu próprio comentário.
- Quando alguém comenta um documento, as pessoas da equipa do documento são notificadas. Uma resposta a um comentário também notifica a equipa.
- Uma menção notifica a pessoa mencionada. As menções só são entregues enquanto **Receber notificações dos documentos** estiver ligado para esse utilizador.

## Artigos relacionados

- [Notificações](/docs/product/notifications)
- [Notificações disponíveis](/docs/product/notifications/available-notifications)
- [Utilizar o Feed](/docs/product/files-and-collaboration/using-feed)
- [Configurar as notificações](/docs/administration/notifications/set-up-notifications)
- [Roles e perfis](/docs/administration/system-roles-profiles)
