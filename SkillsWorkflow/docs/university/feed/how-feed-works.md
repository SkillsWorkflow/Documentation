---
id: how-feed-works
title: How the Feed Works
description: "Use the Feed to read document context, collaborate with your team, and control what client users can see."
sidebar_label: How the Feed Works
sidebar_position: 1
---

The Feed is the collaboration area for a document. It brings together the document context, messages, workflow activity, files, notifications, and conversations in one place.

## Read the document context

<!-- IMAGE: Feed document context. Capture the top of a document Feed showing the description/brief area and any attached files. Do not include client or confidential data. -->

At the top of the Feed, you can read the document description and its supporting information before reviewing the activity below. Depending on the document type and its configuration, this area can also show other descriptive fields and files attached to the document.

Use this information to understand the request or brief before adding a post. The document context is separate from the Feed timeline: update the description when the document's core context changes, and use posts to record collaboration and decisions.

## Add a post or workflow action

<!-- IMAGE: Feed composer. Capture the message field and the available actions below it, including an example of the option to move the document forward. -->

Use the composer below the document context to write a message. You can also use the available actions to add files, assign or notify people, and move the document forward in its workflow.

When you publish, the Feed records the post together with the actions performed. For example, a single Feed entry can contain a message, files, a workflow-stage change, and people who were notified or mentioned. The actions available to you depend on the document, its workflow, and your permissions.

## Follow the activity and conversations

<!-- IMAGE: Feed timeline. Capture a post that shows its author, message, workflow activity, notified or mentioned people, and attached files. -->

The timeline shows the most recent activity first. Each entry can include the author, time of publication, message, files, workflow activity, and notified or mentioned people. Use comments and replies on a post to keep the conversation and its context together.

Use the Feed search to find previous activity when it is available in your workspace. Reactions and other post options may also be available, depending on your configuration.

## Visibility for client users

<!-- IMAGE: Client visibility. Capture a client-visible post with the “Client can see” indicator. If possible, add a second capture of an internal post without this indicator for comparison. -->

A user is treated as a client when the `IsClient` flag is enabled. Whether a client can see a discussion is defined on its parent post through `IsVisibleToClient`; it is not configured separately on a comment or reply.

The system determines a post's visibility automatically from the workflow: the `IsVisibleToClient` setting of the current stage or the destination stage determines whether the post is visible to clients. Comments and replies on a post that is not visible to clients are internal, because the client does not see that parent post in the normal Feed.

### Create an internal discussion

To keep a discussion internal:

1. Confirm that the external user is marked as a client (`IsClient`).
2. Create the post while the document is in a workflow stage that is not visible to clients.
3. Add comments and replies to that post.
4. Do not include clients in notifications or `@mention` clients, as this can make the post visible to the client.

## Good practices

- Read the description and supporting information before posting, so the conversation stays aligned with the document context.
- Keep related messages, decisions, and follow-up in the same post and its replies.
- Use a workflow stage that is not visible to clients before starting an internal conversation.
- Check a post as an internal user: a post visible to clients displays the **Client can see** indicator. If this indicator is absent, the post is not visible to clients.

## Limitations and points of attention

- A client can still see posts that they created. Do not use a post created by a client for an internal discussion.
- In the current WebApp, there is no visible functional control to manually change the privacy of a post after it has been created. Set the document to the appropriate workflow stage before creating the post.
- The fields, actions, and options shown in the Feed can vary by document type, workflow configuration, and user permissions.
