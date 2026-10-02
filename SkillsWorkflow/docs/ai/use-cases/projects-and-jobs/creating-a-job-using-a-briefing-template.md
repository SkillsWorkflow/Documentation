---
id: creating-a-job-using-a-briefing-template
title: Turn a Campaign Brief into a Job
description: "Ask the AI Assistant to turn a campaign brief into a Job, then review the created Job in chat."
sidebar_label: Turn a Campaign Brief into a Job
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Overview

Describe the work to the AI Assistant in your own words. It can find matching client and project records, suggest a department, Job Type and title, and prepare the brief with the Job Type's template. Confirm any suggested matches and review the Job before approving its creation.

The agency and Job number in this conversation are illustrative. Available records and briefing sections depend on your configuration.

<Walkthrough
  subtitle="An example conversation between an agency user and the AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="From request to Job">
        The assistant collects the Job details, prepares the brief using the selected Job Type's template and presents the creation for approval.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Describe the client, project and deliverable in your own words.',
          'Check the department, Job Type and title the assistant suggests.',
          'Review the proposed Job and brief before approving creation.',
          'Open the created Job from its card in the conversation.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Create a Job for our campaign website. I have the brief details ready.',
          'Set up a Job in this project and use the briefing template for its Job Type.',
          'Create a Job from this request: [paste the brief].',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'An exact match can be used directly. A likely match or remembered preference must be confirmed before a Job is created.',
          'The approval card lets you review the proposed details. A prepared brief is editable there when the assistant supplied one.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>We need a global website for General Motors’ 2026 electric vehicle campaign, under our “General Motors – 2026 Global EV Campaign” project. Can you set up the Job and write the full brief?</p>
    <p>The site should introduce the campaign, show the electric vehicle range, explain the main campaign message and guide visitors to the next step. I’ve attached a visual reference.</p>
    <Walkthrough.Attachment
      src="/img/ai/use-cases/ev-campaign-reference.png"
      filename="ev-campaign-reference.png"
      description="Illustrative electric vehicle campaign reference image"
      caption="Visual reference attached to the campaign request."
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>I found General Motors and the campaign project. For a website, I suggest the Digital department and Web Design Job Type. I’d call it “GM 2026 EV Campaign – Global Website”. Do those details look right?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Yes, use Digital and Web Design. Keep that title.</p>
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
        ['Title', 'GM 2026 EV Campaign – Global Website'],
        ['Description', 'A global campaign website introducing the campaign, vehicle range, key message and next steps'],
        ['Brief', 'Prepared in the selected Job Type’s briefing sections'],
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
      title="GM 2026 EV Campaign – Global Website"
      number="1042"
      rows={[
        ['Job number', '1042'],
        ['Client', 'General Motors'],
        ['Project', 'General Motors – 2026 Global EV Campaign'],
        ['Department', 'Digital'],
        ['Job type', 'Web Design'],
        ['Description', 'A global campaign website introducing the campaign, vehicle range, key message and next steps'],
      ]}
      actions={['Open popup', 'Navigate']}
    />
  </Walkthrough.Message>
</Walkthrough>

## Related articles

- [Create a Job from a Client Email](/docs/ai/use-cases/projects-and-jobs/creating-a-job-from-a-client-email)
- [AI Assistant](/docs/ai/ai-assistant)
- [AI Agents](/docs/ai/agents)
