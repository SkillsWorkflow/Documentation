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

You can also start a conversation from a person's picture wherever it appears with the chat option — for example, in a Feed post, a reply, or a team assignment.

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

Write in the composer at the bottom of the conversation. **Enter** sends the message and **Shift+Enter** starts a new line. Any link you paste becomes clickable and opens in a new tab.

If you start writing a message and don't send it, it's still there the next time you open that conversation — but only on this device.

While a message is on its way it shows **Sending...**. If it does not reach the service, it stays on screen as **Message not sent** with a **Retry** action.

Messages sent one after another by the same person are grouped together, with the time shown once at the end of the group. Days are separated by a date, and a red rule marks the first message you have not read. Scroll to the top of a conversation to load older messages.

### Copy or edit a message

Hover over a message to see the available actions.

**Copy message** puts the message text on the clipboard.

**Edit message** appears on your own messages. It opens the text in an editable box, where **Enter** saves your change and **Esc** cancels it. Everyone then sees the message marked as **Edited**. System messages, such as the note recording a rename, can't be edited, and no message can be deleted.

### While someone is writing

A line below the last message names the people currently typing and stacks their pictures. Beyond three people it counts them instead.

## Manage a group conversation

<figure>

![img-box-shadow-popup](/img/chat/04-group-menu-PLACEHOLDER.png)
<figcaption>The group conversation menu.</figcaption>

</figure>

The group header shows the conversation name and how many members are online. Select **Manage members** (the **...** button) to open the group menu.

**Rename conversation** asks for the new name, which is required. The conversation is renamed for everyone and the change is recorded as a message in the thread.

**Add member** opens the list of people you can add. The people you add are announced in the conversation.

**Leave** records that you left and takes the conversation off your list.

To remove someone, use the remove action next to their name in the member list below the menu. Confirm the removal, and that person will no longer receive the conversation's messages. You can remove a member only while the group has more than two people.

## Notifications

With the chat panel closed, an incoming message arrives as a toast in the corner of the application. Select the toast to open that conversation.

While the browser tab sits in the background, the message is also raised as a desktop notification. A direct message shows the sender's name. A group message shows the conversation name, with the sender's name in the message text.

Desktop notifications require **Enable browser notifications** under **Notifications** in your configuration, and the browser's own permission, which is requested the first time you open chat or notifications after enabling the setting. They are available in the Modern Layout. The in-app toast is what the other layouts use.

## Rules and behaviour

- The **Users** tab never lists you, inactive users, or system administrators.
- Search in **Conversations** matches conversation names. It does not search message text.
- Chat only sends text messages. You can't attach files.
- If you use Chat in more than one browser tab or on more than one device at once, your conversations stay in sync across all of them.

## Configuration

Chat is activated for your tenant by the Skills Workflow support team.

Access is granted per user through the chat roles. **ChatNavigate** is the role that puts the icon in the top menu.

Who each person can message is controlled by **Chat Visibility Restriction Enabled**, on the **Security** tab of the Configuration workspace:

- With the setting off, everyone sees every active user except system administrators.
- With the setting on, a user who has people on their chat visibility list sees only those people, together with anyone who put that user on their own list. A user whose list is empty keeps seeing everyone.

These lists can't be edited from the WebApp. Ask the Skills Workflow support team to set them up.

## Related articles

- [Using the Feed](/docs/product/files-and-collaboration/using-feed)
- [Roles and Profiles](/docs/administration/system-roles-profiles)
- [Notification Types](/docs/product/notifications/notification-types)
