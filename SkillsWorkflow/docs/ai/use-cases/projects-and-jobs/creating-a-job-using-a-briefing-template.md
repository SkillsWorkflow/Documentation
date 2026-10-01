---
id: creating-a-job-using-a-briefing-template
title: Turn a Campaign Brief into a Job
description: "Ask the AI Assistant to turn a campaign brief into a Job, then review the created Job in chat."
sidebar_label: Turn a Campaign Brief into a Job
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Overview

Ask the AI Assistant for a Job in your own words. Give it the client, project, deliverable and any brief details you already know. It uses the selected Job Type's briefing template and asks you to choose any required details it cannot resolve. Review the proposed Job before approving its creation.

The conversation uses an illustrative agency setup. The chips in your account show the projects, departments and Job Types available to you. The sample Job number is illustrative.

<Walkthrough
  subtitle="An example conversation between an agency user and the AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="From request to Job">
        The assistant collects the Job details, prepares the brief using the selected Job Type's template and presents the creation for approval.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Name the client and project, or select them when asked.',
          'Describe the deliverable and what the brief should cover.',
          'Choose any remaining details from the options shown for your agency.',
          'Review the proposed Job and approve it to create the record.',
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
          'The assistant shows selectable chips when it needs you to choose a project, business object type, department or Job Type.',
          'The approval card lets you review the proposed details. A prepared brief is editable there when the assistant supplied one.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>We need a Job for General Motors' 2026 electric vehicle campaign. It's the global campaign website. Please call it “GM 2026 EV Campaign – Global Website” and use the briefing template for the website Job Type to write the full brief.</p>
    <p>The site should introduce the campaign, show the electric vehicle range, explain the main campaign message and guide visitors to the next step. This is for the campaign project we already have under General Motors. I’ve attached a visual reference for the campaign.</p>
    <Walkthrough.Attachment
      src="/img/ai/use-cases/ev-campaign-reference.png"
      filename="ev-campaign-reference.png"
      description="Illustrative electric vehicle campaign reference image"
      caption="Visual reference attached to the campaign request."
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>I found the client.</p>
    <Walkthrough.Choices label="Choose a project:" options={['General Motors – 2026 Global EV Campaign', 'General Motors – Corporate Website']} />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>I select the project “General Motors – 2026 Global EV Campaign”.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Choose the business object type for this work.</p>
    <Walkthrough.Choices label="Choose a business object type:" options={['Job', 'Task']} />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>I select the business object type “Job”.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Choose the department for this Job.</p>
    <Walkthrough.Choices label="Choose a department:" options={['Digital', 'Creative', 'Production']} />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>I select the department “Digital”.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Choose the Job Type for the website.</p>
    <Walkthrough.Choices label="Choose a job type:" options={['Web Design', 'Digital Campaign']} />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>I select the job type “Web Design”.</p>
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

- [AI Assistant](/docs/ai/ai-assistant)
- [AI Agents](/docs/ai/agents)
