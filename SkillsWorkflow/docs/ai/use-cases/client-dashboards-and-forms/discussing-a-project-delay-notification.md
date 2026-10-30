---
id: discussing-a-project-delay-notification
title: Discuss a Project Delay Notification
description: "See how an account manager asks the AI Assistant why a job is late, reads a summary of its Feed, comments and files, checks the impact on the project and asks the team on the Feed to confirm a new date."
sidebar_label: Discuss a Project Delay Notification
sidebar_position: 5
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Overview

When the AI Assistant tells you that a job is late, ask it why. The assistant reads the job's Feed, its comments and replies, the description and the attached files, and summarises what held the work up. Ask what else in the project depends on it, and then ask the assistant to post a comment on the job's Feed so the team confirms the cause and a new date. You review the comment before it is posted.

:::note Preview
This use case is in preview and has not been tested end to end yet. The conversation shows how the AI Assistant is expected to handle it, and what it answers or does today may differ from this example.
:::

The agency, client, people, jobs, comments and dates in this example are illustrative. The assistant only reads documents and comments you can access.

<Walkthrough
  subtitle="An example conversation between an account manager and the AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="From a late job to a new date">
        The assistant explains the delay from what the team wrote on the job, shows what it affects in the project and starts the discussion on the job’s Feed.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Ask why the job is late.',
          'Read the summary and check the comments and files it is based on.',
          'Ask which other jobs in the project depend on it.',
          'Ask the assistant to post a comment on the job’s Feed and name who to mention.',
          'Review the comment and select Post.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Why is the Christmas Launch Event stand late?',
          'What does this delay affect in the project?',
          'Ask the producer on the Feed for a new delivery date.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'The summary is based on what was written on the job. When nobody recorded the reason, the assistant says so.',
          'The comment is posted on the job’s Feed with your name, and the people you mention are notified.',
          'Changing the job’s dates is a separate request. The assistant asks for your approval before it changes them.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Christmas Launch Event – Stand Design is 4 days late.</strong> It was due on 26 October and is still in In Progress. It belongs to the Northwind Christmas 2026 project.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>What happened?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>The stand design waited for the client’s new brand guidelines:</strong></p>
    <ul>
      <li>On 14 October, Sarah Lee asked the client for the updated logo and colour palette. The reply on the Feed says they would arrive by 18 October.</li>
      <li>The guidelines, <strong>Northwind_Brand_Guidelines_2027.pdf</strong>, were attached on 24 October, six days later than promised.</li>
      <li>On 25 October, Sarah wrote that the stand needs three more working days after the guidelines arrived.</li>
    </ul>
    <p>Nobody has set a new due date on the job.</p>
    <Walkthrough.Source label="Feed · 5 posts · 1 file" />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>What does this affect in the project?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>Two jobs in the project need the stand design before they can start:</strong></p>
    <Walkthrough.DataTable
      columns={['Job', 'Stage', 'Start', 'Due']}
      rows={[
        ['Christmas Launch Event – Stand Production', 'New', '2 November', '13 November'],
        ['Christmas Launch Event – Signage', 'New', '4 November', '11 November'],
      ]}
      note="The event is on 20 November. If the design is approved by 3 November, both jobs can still finish before it."
    />
    <p><strong>How I read your question</strong></p>
    <ul>
      <li>Included: jobs in the Northwind Christmas 2026 project whose description or Feed refers to the stand design.</li>
      <li>Assumed: a job that has not started yet depends on the late one when it uses its output.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Ask Sarah on the Feed to confirm when the design will be ready for approval.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Post a comment"
      subtitle="Review the comment before I post it."
      rows={[
        ['Job', 'Christmas Launch Event – Stand Design'],
        ['Mentions', 'Sarah Lee'],
        ['Comment', 'The guidelines arrived on 24 October. Can you confirm when the stand design will be ready for client approval? Stand Production starts on 2 November and the event is on 20 November.'],
      ]}
      actions={[{ label: 'Deny' }, { label: 'Post', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>I reviewed the comment and selected Post.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Posted" label="Christmas Launch Event – Stand Design" />
    <p>The comment is on the job’s Feed. Sarah was notified.</p>
  </Walkthrough.Message>
</Walkthrough>

## Related articles

- [Check the Delayed Projects That Need Your Attention](/docs/ai/use-cases/projects-and-jobs/identifying-project-delays)
- [Ask About a Project's Status](/docs/ai/use-cases/client-dashboards-and-forms/asking-questions-about-project-status)
- [Using the Feed](/docs/product/files-and-collaboration/using-feed)
- [AI Assistant](/docs/ai/ai-assistant)
