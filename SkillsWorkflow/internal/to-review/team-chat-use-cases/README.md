# Team chat use cases (draft)

Use cases for calling the AI Assistant (Skilio) from a Chat conversation between people, by mentioning `@Skilio`.

**Status:** not in the product yet. Neither the Chat code (`frame/chat/chat-v2`) nor the Chat page mentions the AI. Do not merge until there is a ticket or spec and the behaviour has been checked against it.

## What is on this branch

- `docs/ai/use-cases/team-conversations/`: a new **Team Conversations** category with three use cases, each marked `:::preview`:
  - `deciding-who-takes-a-job-in-a-team-conversation.md`
  - `turning-a-team-conversation-into-a-job.md`
  - `catching-up-and-recording-the-decision-on-the-feed.md`
- `src/components/UseCaseWalkthrough`: `variant="team"` draws the people-to-people Chat panel (Chat header, conversation name and members, "Write a message..." composer). Messages take `sender="me" | "member" | "assistant"`, a `time` and an `avatar`. `Walkthrough.DateSeparator` adds the "Today" chip. The existing AI Assistant walkthroughs are unchanged.
- `static/img/ai/avatars/`: illustrated avatars for Ana Costa, Rui Santos, Sofia Marques and Laura Bennett.

## Still to do before merging

- Translate the three use cases and the category into es, pt and pt-br.
- Add a short section to `docs/product/files-and-collaboration/chat.md` ("Ask Skilio in a conversation") that links to the category.
- Check the Font Awesome icons in the Chat header on a build with `FONTAWESOME_KIT_ID` set.

## Product questions to confirm

1. **Whose permissions?** The answer is visible to every member. If Skilio uses the caller's access, it can show data (hours, margins) to people who cannot see it. The use cases assume Skilio only answers with what **every member** of the conversation can see.
2. **Who approves** a write action: only the person who mentioned Skilio (assumed) or any member?
3. **What Skilio reads:** only the message that mentions it, or the conversation history? Two of the use cases assume it reads the conversation.
4. **Name and trigger:** `@Skilio`, `@AI`, or both? Is the approval card shown to everyone or only to the caller?
5. **Roles:** does it need ChatNavigate plus the AI Assistant role, and the AI Assistant enabled for the tenant?
6. **Files:** Chat only sends text today, so no use case relies on attachments.
