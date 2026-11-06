---
id: estimating-from-a-reference-video
title: Get a First Estimate From a Reference Video
description: "See how an account manager attaches a client's reference video to the AI Assistant, gets a first estimate of the team, hours and indicative third-party costs, compares a shorter version and creates the estimate once the production company has quoted."
sidebar_label: Estimate From a Reference Video
sidebar_position: 6
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

:::preview
This use case is in preview, the conversation shows how the AI Assistant is expected to handle it, and what it answers or does today may differ from this example.
:::

## Overview

When a client sends a video and asks for something like it, attach the video to the AI Assistant and ask for a first estimate. The assistant describes what it sees in the video, proposes the team, the hours per typology group and the third-party services the production would need, and prices the hours from the rate card on the client. Third-party values are indicative until a supplier quotes them. Compare shorter or cheaper versions, replace the indicative values with the quote and approve the estimate.

The agency, client, video, estimate, suppliers, rates and values in this example are illustrative. Estimate Types, rate cards and stages depend on your agency's configuration.

<Walkthrough
  subtitle="An example conversation between an account manager and the AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="From a reference video to a first estimate">
        The assistant tells you what it sees in the video and turns it into team hours and third-party services, so you have a starting figure before you talk to suppliers.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Attach the video and say which client and project it is for.',
          'Check what the assistant says it sees in the video.',
          'Compare the versions the client could choose.',
          'Give the assistant the values the supplier quoted.',
          'Review the details and select Create.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'The client wants a film like this one. Give me a first estimate.',
          'Compare it with a 30-second version without the drone.',
          'Use the production company’s quote instead of your values.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'The assistant describes what it sees in the video first. Correct it before you rely on the estimate.',
          'Hours are priced from the client’s Rate Card. Third-party values are indicative until a supplier quotes them.',
          'Nothing is created while you compare versions. The assistant asks for your approval before it creates the estimate.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>Solenna Energy wants a brand film like this one for the Brand Film 2027 project. Give me a first estimate.</p>
    <p><strong>Attached:</strong> reference_film.mp4</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>What I see in the video</strong></p>
    <ul>
      <li>A 60-second film shot in three locations: a street, a wind farm filmed from a drone and a family home.</li>
      <li>Four actors, a voice-over, original music and an animated end card.</li>
    </ul>
    <p><strong>A first estimate for a film like it:</strong></p>
    <Walkthrough.DataTable
      columns={['Line', 'Component', 'Quantity', 'Value']}
      rows={[
        ['Concept and Script · Creative', 'Resources', '24h', '€2,040'],
        ['Art Direction and End Card · Design', 'Resources', '30h', '€2,100'],
        ['Script and Voice-over Text · Copywriting', 'Resources', '10h', '€650'],
        ['Account Management · Accounts', 'Resources', '20h', '€1,200'],
        ['Filming Day', 'Third Party Costs', '2 × €2,800', '€5,600'],
        ['Drone Filming', 'Third Party Costs', '1 × €1,200', '€1,200'],
        ['Casting and Talent', 'Third Party Costs', '4 × €450', '€1,800'],
        ['Voice-over', 'Third Party Costs', '1 × €650', '€650'],
        ['Music Licensing', 'Third Party Costs', '1 × €1,500', '€1,500'],
        ['Post-production and Colour Grading', 'Third Party Costs', '1 × €2,400', '€2,400'],
        ['Travel to Filming Location', 'Expenses', '1', '€400'],
      ]}
      note="Hours priced with the Solenna Energy 2027 rate card, Standard column. Third-party values are indicative. Total €19,540."
    />
    <p><strong>To confirm</strong></p>
    <ul>
      <li>Does the client want the same length, and cut-downs for social media?</li>
      <li>Which production company will film it?</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Compare it with a 30-second version without the drone.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>The shorter version saves €4,000 in third-party costs:</strong></p>
    <Walkthrough.DataTable
      columns={['Scenario', 'Third Party Costs', 'Total']}
      rows={[
        ['A · 60 seconds, as the reference', '€13,150', '€19,540'],
        ['B · 30 seconds, one filming day, no drone', '€9,150', '€15,540'],
      ]}
      note="Team hours and travel are the same in both."
    />
    <p><strong>How I read your question</strong></p>
    <ul>
      <li>Assumed: a 30-second film needs one filming day, and the cast, voice-over, music and post-production stay the same.</li>
    </ul>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Go with B. Lumen Studio quoted €6,700 for filming, talent and post-production. Keep the voice-over and music as you have them, and create the estimate.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.ApprovalCard
      title="Create this estimate"
      subtitle="Review these details before I create it."
      rows={[
        ['Client', 'Solenna Energy'],
        ['Project', 'Brand Film 2027'],
        ['Estimate Type', 'Campaign'],
        ['Name', 'Brand Film 2027 · 30 seconds'],
        ['Rate Card', 'Solenna Energy 2027 · Standard'],
        ['Resources', '4 lines, 84h, €5,990'],
        ['Third Party Costs', 'Production, Lumen Studio, €6,700 · Voice-over, €650 · Music Licensing, €1,500'],
        ['Expenses', 'Travel to Filming Location, €400'],
        ['Total', '€15,240'],
      ]}
      actions={[{ label: 'Deny' }, { label: 'Create', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>I reviewed the details and selected Create.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <Walkthrough.StatusChip status="Created" label="2026 - 00431 · Brand Film 2027 · 30 seconds" />
    <p>The estimate was created in New, with a total of €15,240. The voice-over and music are still indicative values. Update them when you have the quotes.</p>
  </Walkthrough.Message>
</Walkthrough>

## Related articles

- [Compare Estimate Scenarios Before Creating One](/docs/ai/use-cases/contracts-estimates-and-purchase-orders/discussing-estimate-scenarios-before-creation)
- [Create an Estimate From a File](/docs/ai/use-cases/contracts-estimates-and-purchase-orders/creating-an-estimate-from-files)
- [Create Estimate](/docs/product/commercial/estimates/create-estimate)
- [AI Assistant](/docs/ai/ai-assistant)
