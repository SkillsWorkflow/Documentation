---
id: setting-up-a-new-joiner-as-a-copy-of-a-colleague
title: Set Up a New Joiner as a Copy of a Colleague
description: "See how an operations manager asks the AI Assistant to create a user for someone joining the agency as a copy of a colleague, reviews the new user before it is created, and sets the clients and access profiles the person needs."
sidebar_label: Set Up a New Joiner
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Overview

Tell the AI Assistant who is joining, when they start and which colleague they should be set up like. The assistant duplicates that colleague's user and finishes the setup in the same step: the new person's name, username, email and start date, the colleague's typology, hours, access profiles, public holidays and leave types for this year. You review everything on a card before the user is created.

Once the user exists, the assistant shows how the person was set up and asks you to confirm the clients and departments they work on. It then compares their access profiles with colleagues in the same role and suggests any that are missing.

The agency, people, clients and access profiles in this example are illustrative.

<Walkthrough
  subtitle="An example conversation between an operations manager and the AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="From “Tom starts Monday” to a working user">
        The assistant copies what the new person shares with a colleague, corrects what is personal to the colleague, and lets you review it all before anything is created.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Give the new person’s full name, their start date and the colleague to copy.',
          'Check the username, email and SSO username the assistant suggests from the colleague’s.',
          'Check the hours, typology and access profiles, and change any that differ for this person.',
          'Change the leave days in Leave types if the person should have fewer days this year.',
          'Select Create user, then confirm the clients and departments the person works on.',
          'Read the comparison with colleagues and approve or deny the suggested access profile.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Tom Carter joins on Monday as a Senior Designer. Set Tom up like Ana Lopes.',
          'Duplicate Ana Lopes for Tom Carter, starting 2 November, part-time.',
          'Create a user for Tom Carter like Ana Lopes, with the Traffic profile and without Account.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'You need permission to create and edit users.',
          'The assistant always asks for the new person’s full name and start date. Their timesheets start on that day.',
          'Leave types start with the colleague’s days for this year. Change them on the card before you create the user.',
          'Birth date and phone are not copied. Time zone, monthly cost and rate values, and tags are not copied either: set them in the new user’s record.',
          'If the new person signs in with a password, they are asked to change it the first time they sign in.',
          'Nothing is created until you select Create user. Select Deny to stop and tell the assistant what to change.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>Tom Carter is joining the Design team on Monday, 2 November, as a Senior Designer. Set Tom up like Ana Lopes.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>I’ll create Tom Carter as a copy of Ana Lopes, starting on 2 Nov 2026. Tom’s timesheets start that day, with Ana’s hours, typology and access profiles. Review the details below.</p>
    <Walkthrough.ApprovalCard
      title="Set up Tom Carter"
      subtitle="Review the new user before I create them."
      rows={[
        ['Copy of:', 'Ana Lopes'],
        ['Name', 'Tom Carter'],
        ['Username', 'tom.carter'],
        ['Email', 'tom.carter@brightlane.com'],
        ['SSO username', 'tom.carter@brightlane.com'],
        ['Starts (timesheets from)', '2 Nov 2026'],
        ['Minimum hours per day', '8'],
        ['Minimum hours per week', '40'],
        ['Typology group', 'Creative'],
        ['Typology', 'Senior Designer'],
        ['Access profiles', 'Designer, Timesheets, Leaves'],
        ['Leave types', 'Vacation 25, Training 3'],
        ['Set up like the colleague', 'Access profiles, company, department, division, client access, responsible, working hours and holidays'],
      ]}
      actions={[{ label: 'Edit details' }, { label: 'Deny' }, { label: 'Create user', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>I selected Edit details, changed Vacation to 4 days for this year and selected Create user.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p><strong>How Tom Carter was set up</strong></p>
    <Walkthrough.FieldTable
      rows={[
        ['Company', 'Brightlane Lisbon'],
        ['Department', 'Design'],
        ['Typology', 'Senior Designer (Creative)'],
        ['Responsible', 'Marta Silva'],
        ['Timesheets from', '2 Nov 2026'],
        ['Minimum hours', '8 per day, 40 per week'],
        ['SSO', 'tom.carter@brightlane.com'],
        ['Access profiles', 'Designer, Timesheets, Leaves'],
        ['Clients', 'Contoso Foods, Northwind Coffee'],
        ['Public holidays', '14 in 2026, as Ana’s'],
        ['Leave types in 2026', 'Vacation 4 days, Training 3 days'],
      ]}
    />
    <p>Confirm Tom’s clients and departments below.</p>
    <Walkthrough.ApprovalCard
      title="Access for Tom Carter"
      subtitle="Review this before I continue."
      rows={[
        ['User', 'Tom Carter'],
        ['Add clients', 'None'],
        ['Remove clients', 'None'],
        ['Add departments', 'None'],
        ['Remove departments', 'None'],
      ]}
      actions={[{ label: 'Edit details' }, { label: 'Deny' }, { label: 'Approve', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Tom will work on Fabrikam Retail, not on Contoso Foods. I added Fabrikam Retail, removed Contoso Foods on the card and selected Approve.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Tom now has access to Fabrikam Retail and no longer to Contoso Foods. Everything else stays as copied from Ana.</p>
    <p>I compared Tom’s access profiles with the other Senior Designers in Design. <strong>8 of 9 have Creative Review</strong>, and Tom doesn’t. I suggest adding it.</p>
    <Walkthrough.ApprovalCard
      title="Change Tom Carter's access profiles"
      subtitle="Review the access change before I apply it."
      rows={[
        ['User', 'Tom Carter'],
        ['Add', 'Creative Review'],
      ]}
      actions={[{ label: 'Deny' }, { label: 'Approve', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>I selected Approve.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Tom Carter now has the Creative Review access profile and is ready to start on 2 Nov 2026.</p>
    <Walkthrough.Choices
      options={['Check Tom’s access against the Design team', 'Onboard another person']}
    />
  </Walkthrough.Message>
</Walkthrough>

## Related articles

- [Create User](/docs/administration/users/create-user)
- [System Roles and Profiles](/docs/administration/system-roles-profiles)
- [Create Typologies](/docs/administration/create-typologies)
- [Create Leave Types](/docs/administration/calendars/create-leave-type)
- [Holidays](/docs/administration/calendars/create-holidays)
- [AI Assistant](/docs/ai/ai-assistant)
