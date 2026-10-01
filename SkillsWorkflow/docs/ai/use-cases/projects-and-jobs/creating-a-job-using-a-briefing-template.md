---
id: creating-a-job-using-a-briefing-template
title: Creating a Job Using a Briefing Template
description: "Create a Job from a description, with its brief written from the Job Type's configured briefing template."
sidebar_label: Creating a Job Using a Briefing Template
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Overview

Create a new Job from a description — client, Job Type, title and the brief content itself — with the brief written into the structure defined by the Job Type's briefing template, instead of a blank form.

<Walkthrough
  subtitle="A simulated conversation, so you can see the shape of a real request and its answer."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="Creating records from a description">
        Turns a plain-language description into a structured record, using the brief format already configured for that Job Type.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'A new Job is created under the right client and project.',
          'The Job Type resolves correctly even when named slightly differently (for example, "Website" resolving to "Web Design").',
          "The brief follows the structure defined in the Job Type's briefing template, not a single paragraph.",
          'Everything is proposed as a draft first, and can be reviewed and changed before it is confirmed.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Draft a new Job for General Motors using our standard briefing template.',
          "Set up a Website job for GM's EV campaign — use the usual brief format.",
          'Create a job from this brief: [pasted text]',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          "Anything that can't be inferred — like business object type or department — is asked about, with suggested options to choose from.",
          'Nothing is saved until the draft is reviewed and confirmed.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You" time="2:14 PM">
    <p>Create a new job</p>
    <p>Job Type: Website</p>
    <p>Job Title: GM 2026 EV Campaign – Global Website</p>
    <p>
      Design and develop a global campaign website for General Motors to support the 2026 electric
      vehicle campaign. The website should introduce the campaign, showcase GM's electric vehicle
      portfolio, communicate the key campaign message, and provide users with relevant information
      and calls to action.
    </p>
    <p>Use the briefing template configured for the Website Job Type to generate the job brief.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skills AI" time="2:14 PM">
    <p>I can set that up. I need two more details first:</p>
    <Walkthrough.Choices label="Business object type" options={['Job', 'Sub-Task', 'Task', 'User Story']} />
    <Walkthrough.Choices label="Department" options={['Digital', 'Creative', 'Production']} />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You" time="2:15 PM">
    <p>Job, Digital.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skills AI" time="2:15 PM">
    <p>Here's the draft — the Job Type resolved to <strong>Web Design</strong>, which is how it's configured:</p>
    <Walkthrough.FieldTable
      rows={[
        ['Client', 'General Motors'],
        ['Project', 'General Motors – 2026 Global EV Campaign'],
        ['Business object type', 'Job'],
        ['Department', 'Digital'],
        ['Job Type', 'Web Design'],
        ['Title', 'GM 2026 EV Campaign – Global Website'],
        ['Brief', 'The Role, The People, The Problem, Success Metrics, Creative Mandatories and Deliverables'],
      ]}
    />
    <p>Nothing is created yet — review the draft and confirm when it looks right.</p>
    <Walkthrough.Actions items={[{ label: 'Review draft' }, { label: 'Create Job', primary: true }]} />
  </Walkthrough.Message>
</Walkthrough>
