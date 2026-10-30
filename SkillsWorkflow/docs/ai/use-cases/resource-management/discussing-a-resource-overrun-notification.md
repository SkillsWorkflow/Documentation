---
id: discussing-a-resource-overrun-notification
title: Discuss a Resource Overrun Notification
description: "See how a project manager asks the AI Assistant why a job went over its planned hours, reads a summary of the job's Feed, comments and files, and asks the team on the Feed to confirm the cause and the next steps."
sidebar_label: Discuss a Resource Overrun Notification
sidebar_position: 8
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
This use case is in preview, the conversation shows how the AI Assistant is expected to handle it, and what it answers or does today may differ from this example.
:::

## Overview

When the AI Assistant tells you that someone recorded more hours on a job than were planned, ask it why. The assistant reads the job's Feed, its comments and replies, the description and the files attached to it, and summarises what explains the extra hours. You can then ask it to post a comment on the job's Feed, mentioning the people who need to confirm the cause and decide what happens next. You review the comment before it is posted.

The agency, client, people, job, comments and hours in this example are illustrative. The assistant only reads documents and comments you can access.

<Walkthrough
  subtitle="An example conversation between a project manager and the AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="From an overrun to a conversation">
        The assistant turns the job’s history into a short explanation of the overrun and starts the discussion with the right people on the job’s Feed.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Ask why the job went over its planned hours.',
          'Read the summary and check the comments and files it is based on.',
          'Ask the assistant to post a comment on the job’s Feed and name who to mention.',
          'Review the comment and select Post.',
          'Follow the replies on the job’s Feed.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Why did Anna go over the planned hours on Campaign Website?',
          'What changed on this job since it was planned?',
          'Ask the team on the Feed whether we need more hours.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'The summary is based on what was written on the job. When nobody recorded the reason, the assistant says so.',
          'The comment is posted on the job’s Feed with your name, and the people you mention are notified.',
          'The assistant asks for your approval before it posts. Select Deny to leave the Feed as it is.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Anna Smith has recorded 46 hours on Campaign Website, 16 hours more than the 30 planned.</strong> The job belongs to the Northwind Christmas 2026 project and is due on 20 November.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Why did this happen?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>The extra hours come from a scope change that was not added to the planning:</strong></p>
    <ul>
      <li>On 19 October, the client asked for two more landing pages for the Christmas gift range. David Brown posted the request on the Feed.</li>
      <li>On 20 October, Anna replied that the new pages needed about 15 more hours of design.</li>
      <li>The revised sitemap, <strong>Northwind_Christmas_sitemap_v2.pdf</strong>, was attached the same day and shows the two new pages.</li>
      <li>The job’s planning and description were not updated after the change.</li>
    </ul>
    <p>Nobody has confirmed whether the extra pages are billable to the client.</p>
    <Walkthrough.Source label="Feed · 6 posts · 1 file" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Post on the job’s Feed asking David and Anna to confirm the new scope, whether it is billable, and how many more hours Anna needs until the end.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Post a comment"
      subtitle="Review the comment before I post it."
      rows={[
        ['Job', 'Campaign Website'],
        ['Mentions', 'David Brown, Anna Smith'],
        ['Comment', 'Anna has recorded 46h against 30h planned, after the two landing pages added on 19 October. Can you confirm the new scope, whether it is billable to Northwind Coffee, and how many more hours Anna needs to finish the job?'],
      ]}
      actions={[{ label: 'Deny' }, { label: 'Post', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>I reviewed the comment and selected Post.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Posted" label="Campaign Website" />
    <p>The comment is on the job’s Feed. David and Anna were notified.</p>
  </Walkthrough.Message>
</Walkthrough>

## Related articles

- [Get Notified About Resource Issues](/docs/ai/use-cases/resource-management/receiving-notifications-about-resource-issues)
- [Using the Feed](/docs/product/files-and-collaboration/using-feed)
- [Notification Types](/docs/product/notifications/notification-types)
- [AI Assistant](/docs/ai/ai-assistant)
