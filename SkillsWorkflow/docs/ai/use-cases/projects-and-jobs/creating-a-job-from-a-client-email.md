---
id: creating-a-job-from-a-client-email
title: Create a Job from a Client Email
description: "Paste a client request into the AI Assistant, check the Job it proposes, and review the created Job in chat."
sidebar_label: Create a Job from a Client Email
sidebar_position: 2
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Overview

Copy a client's request into the AI Assistant and ask it to create a Job. The assistant can use the names and scope in the email to find the client and project, suggest a title, department and Job Type, and prepare a brief. Confirm any suggested matches and approve the Job after reviewing its details.

This example starts with text pasted into chat. The email, agency records and Job number below are illustrative.

<Walkthrough
  subtitle="An account manager turns a client email into a Job without retyping it as a form."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="From client request to Job">
        The assistant reads the pasted request, proposes where the work belongs and prepares the Job for approval.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Paste the relevant email text and ask for a Job.',
          'Check the client, project, title, department and Job Type the assistant proposes.',
          'Correct or add details before approving creation.',
          'Open the created Job from its card in the conversation.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Please create a Job from this client email: [paste email].',
          'Turn this request into a Job for the client and project named below.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'An email address alone does not establish a client or project. Include the relevant names or confirm the assistant’s suggested matches.',
          'Pasting email text into chat does not attach an email file to the Job.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>I received this from our General Motors contact. Can you create a Job and full brief from it?</p>
    <blockquote>
      <p><strong>From:</strong> Sofia, General Motors<br /><strong>Subject:</strong> Dealer locator page for the EV campaign</p>
      <p>Hi team, for the General Motors – 2026 Global EV Campaign project, we need a page that helps visitors find a nearby dealer. Please introduce the electric vehicle range, make the dealer locator the main call to action, and include a way to book a test drive. Follow the campaign visual direction. Can you start this work?</p>
    </blockquote>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>I found General Motors and the named campaign project. I suggest a Job in Digital with the Web Design Job Type, titled “GM EV Campaign – Dealer Locator Page”. I’ll use the email’s scope in the brief. Is that the work you want to create?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Yes. Keep the dealer locator as the main call to action, and include the test-drive booking.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>The Job details are ready for review.</p>
    <Walkthrough.FieldTable
      rows={[
        ['Client', 'General Motors'],
        ['Project', 'General Motors – 2026 Global EV Campaign'],
        ['Business object type', 'Job'],
        ['Department', 'Digital'],
        ['Job Type', 'Web Design'],
        ['Title', 'GM EV Campaign – Dealer Locator Page'],
        ['Description', 'A campaign page introducing the EV range, with a dealer locator as the main call to action and test-drive booking'],
        ['Brief', 'Prepared from the pasted email in the Web Design briefing sections'],
      ]}
    />
    <p>Review the proposed details and brief in the approval card before creating the Job.</p>
    <Walkthrough.Actions items={[{ label: 'Make changes' }, { label: 'Approve', primary: true }]} />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>I reviewed the proposal and selected Approve.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>The Job has been created.</p>
    <Walkthrough.CreatedJobCard
      label="Created Job"
      title="GM EV Campaign – Dealer Locator Page"
      number="1043"
      rows={[
        ['Job number', '1043'],
        ['Client', 'General Motors'],
        ['Project', 'General Motors – 2026 Global EV Campaign'],
        ['Department', 'Digital'],
        ['Job type', 'Web Design'],
        ['Description', 'A campaign page introducing the EV range, with a dealer locator as the main call to action and test-drive booking'],
      ]}
      actions={['Open popup', 'Navigate']}
    />
  </Walkthrough.Message>
</Walkthrough>

## Related articles

- [Turn a Campaign Brief into a Job](/docs/ai/use-cases/projects-and-jobs/creating-a-job-using-a-briefing-template)
- [AI Assistant](/docs/ai/ai-assistant)
- [AI Agents](/docs/ai/agents)
