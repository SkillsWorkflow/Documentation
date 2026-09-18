---
id: chat
title: Chat
description: "Send direct and group messages to colleagues from any screen in Skills Workflow."
sidebar_label: Chat
sidebar_position: 4
---

Chat is the messaging panel inside Skills Workflow. It opens over the screen you are working on and holds your direct and group conversations, the people you are allowed to message, and who is online.

## Availability

The chat icon is in the top menu. It appears when chat is active for your company and your profile includes the **ChatNavigate** role. A badge on the icon counts the conversations with unread messages.

If chat is active but the service cannot be reached, the panel shows **Chat is unavailable** in place of your conversations.

## Find a conversation or a person

<figure>

![img-box-shadow](/img/chat/01-chat-panel-conversations-PLACEHOLDER.png)
<figcaption>Chat panel on the Conversations tab.</figcaption>

</figure>

The panel has two tabs.

**Conversations** lists the conversations you belong to, most recent activity first. Every row carries the participants' picture, the conversation name, when the last message arrived, a preview of it, and how many messages you have not read. The search box matches conversation names.

**Users** lists the people you can message, with their typology group and a green dot while they are online. Selecting a person opens the conversation with them.

A person's picture can also start the conversation. Where the chat action is available on a picture, such as a Feed post, a reply or a team assignment, click it and the conversation opens.

## Start a conversation

To message one person, open the **Users** tab and select them. When you have talked before, the existing conversation opens with its history. Two people always share a single conversation.

To create a group, use the new conversation button beside the tabs:

1. Select at least two people. Each one appears as a chip above the list and can be removed there.
2. Type a name if you want one.
3. Select **Start conversation**.

<figure>

![img-box-shadow](/img/chat/03-new-conversation-PLACEHOLDER.png)
<figcaption>Starting a group conversation.</figcaption>

</figure>

The name is optional and can be changed later. An unnamed group is listed under the names of its first three members in alphabetical order, followed by the number of members left.

## Write and send

<figure>

![img-box-shadow](/img/chat/02-conversation-PLACEHOLDER.png)
<figcaption>An open conversation.</figcaption>

</figure>

Write in the composer at the bottom of the conversation. **Enter** sends the message and **Shift+Enter** starts a new line. Addresses beginning with `http://` or `https://` are turned into links that open in a new tab.

Text you have not sent yet is kept for that conversation in your browser and is waiting in the composer when you come back to it.

While a message is on its way it shows **Sending...**. If it does not reach the service, it stays on screen as **Message not sent** with a **Retry** action.

The thread groups consecutive messages from the same person and prints the time once at the end of each group. Days are separated by a date, and a red rule marks the first message you have not read. Scroll to the top of a conversation to load older messages.

### Copy or edit a message

Point at a message to reveal its actions.

**Copy message** puts the message text on the clipboard.

**Edit message** appears on your own messages. It opens the text in an editable box below the thread's own composer rules: **Enter** saves, **Esc** cancels. Everyone then sees the message marked as **Edited**. System messages, such as the note recording a rename, cannot be edited, and no message can be deleted.

### While someone is writing

A line below the last message names the people currently typing and stacks their pictures. Beyond three people it counts them instead.

## Manage a group conversation

<figure>

![img-box-shadow-popup](/img/chat/04-group-menu-PLACEHOLDER.png)
<figcaption>The group conversation menu.</figcaption>

</figure>

A group header shows the conversation name and how many of its members are online. **Manage members**, the **...** button, opens the group menu.

**Rename conversation** asks for the new name, which is required. The conversation is renamed for everyone and the change is recorded as a message in the thread.

**Add member** opens the list of people you can add. The people you add are announced in the conversation.

**Leave** records that you left and takes the conversation off your list.

The member list under the menu removes someone through the action on their row. Confirm the removal and that person stops receiving the conversation's messages. Removal is offered while the group has more than two members.

## Notifications

With the chat panel closed, an incoming message arrives as a toast in the corner of the application. Select the toast to open that conversation.

While the browser tab sits in the background, the message is also raised as a desktop notification. Direct messages are titled with the sender's name. A group message is titled with the conversation name and names the sender in its body.

Desktop notifications require **Enable browser notifications** under **Notifications** in your configuration, and the browser's own permission, which is requested the first time you open chat or notifications after enabling the setting. They are available in the Modern Layout. The in-app toast is what the other layouts use.

## Rules and behaviour

- The **Users** tab never lists you, inactive users, or system administrators.
- Search in **Conversations** matches conversation names. It does not search message text.
- The composer sends text. The chat panel has no attachment control.
- Messages you send from another tab or device appear in the conversation without notifying you twice.

## Configuration

Chat is activated for your tenant by the Skills Workflow support team.

Access is granted per user through the chat roles. **ChatNavigate** is the role that puts the icon in the top menu.

Who each person can message is controlled by **Chat Visibility Restriction Enabled**, on the **Security** tab of the Configuration workspace:

- With the setting off, everyone sees every active user except system administrators.
- With the setting on, a user who has people on their chat visibility list sees only those people, together with anyone who put that user on their own list. A user whose list is empty keeps seeing everyone.

The chat visibility lists are held on the user record and are not editable in the WebApp. Ask the Skills Workflow support team to set them.

## Related articles

- [Using the Feed](/docs/product/files-and-collaboration/using-feed)
- [Roles and Profiles](/docs/administration/system-roles-profiles)
- [Notification Types](/docs/product/notifications/notification-types)
