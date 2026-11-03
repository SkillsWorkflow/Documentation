# Team chat use cases

Use cases for calling the AI Assistant (Skilio) into a Chat conversation between people, by mentioning `@Skilio`.

**Status:** published in preview (SkillsWorkflow/Documentation#887). The feature is not in the product yet. Neither the Chat code (`frame/chat/chat-v2`) nor the Chat page described it before these docs. When a ticket or spec arrives, check the use cases and the Chat page section against it, and remove the `:::preview` blocks once the behaviour has shipped.

## Where it lives

- `docs/ai/use-cases/team-conversations/` and its es, pt and pt-br translations: the **Team Conversations** category with three use cases, each marked `:::preview`.
- `docs/product/files-and-collaboration/chat.md` (and translations): the **Ask Skilio in a conversation** section, also marked preview, linking to the category.
- `src/components/UseCaseWalkthrough`: `variant="team"` draws the people-to-people Chat panel (Chat header, conversation name and members, "Write a message..." composer). Messages take `sender="me" | "member" | "assistant"`, a `time` and an `avatar`. `Walkthrough.DateSeparator` adds the "Today" chip.
- `static/img/ai/avatars/`: illustrated avatars for Ana Costa, Rui Santos, Sofia Marques and Laura Bennett.

## Still to check

- The Font Awesome icons in the Chat header on a build with `FONTAWESOME_KIT_ID` set.

## Product questions to confirm

1. **Whose permissions?** The answer is visible to every member. If Skilio uses the caller's access, it can show data (hours, margins) to people who cannot see it. The use cases assume Skilio only answers with what **every member** of the conversation can see.
2. **Who approves** a write action: only the person who mentioned Skilio (assumed) or any member?
3. **What Skilio reads:** only the message that mentions it, or the conversation history? Two of the use cases assume it reads the conversation.
4. **Name and trigger:** `@Skilio`, `@AI`, or both? Is the approval card shown to everyone or only to the caller?
5. **Roles:** does it need ChatNavigate plus the AI Assistant role, and the AI Assistant enabled for the tenant?
6. **Files:** Chat only sends text today, so no use case relies on attachments.
