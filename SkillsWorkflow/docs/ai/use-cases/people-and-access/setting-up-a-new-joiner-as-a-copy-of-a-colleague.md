---
id: setting-up-a-new-joiner-as-a-copy-of-a-colleague
title: Set Up a New Joiner as a Copy of a Colleague
description: "See how an operations manager asks the AI Assistant to create a user for someone joining the agency as a copy of a colleague, completes the new user on a card before it is created, and checks their access profiles against colleagues with the same typology."
sidebar_label: Set Up a New Joiner
sidebar_position: 1
---

import Walkthrough from '@site/src/components/UseCaseWalkthrough';

## Overview

Tell the AI Assistant who is joining, when they start and which colleague they should be set up like. The assistant prepares a copy of that colleague's user with the new person's name, a username and the start date, and keeps the colleague's typology, hours, access profiles, clients and department. You review everything on a card, add what is personal to the new person, choose their leave types and create the user.

Once the user exists, the assistant shows how the person was set up. You can then ask it to compare the person's access profiles with colleagues who have the same typology.

The agency, people, clients and access profiles in this example are illustrative.

<Walkthrough
  subtitle="An example conversation between an operations manager and the AI Assistant."
  sidebar={
    <>
      <Walkthrough.CapabilityCard title="From “Tom starts Monday” to a working user">
        The assistant copies what the new person shares with a colleague and lets you review and complete it on one card before anything is created.
      </Walkthrough.CapabilityCard>
      <Walkthrough.ChecklistCard
        items={[
          'Give the new person’s full name, their start date and the colleague to copy.',
          'If you mention a job title, say whether to keep the colleague’s typology.',
          'In Account, check the username and add the email and SSO username. They start empty.',
          'In Work, check the start date, hours, typology and access profiles copied from the colleague.',
          'In Leave, select the leave types the person should have and change the days for this year.',
          'Select Create user and read how the person was set up.',
          'Ask the assistant to compare the person’s access profiles with colleagues who have the same typology.',
        ]}
      />
      <Walkthrough.PhrasingCard
        items={[
          'Tom Carter joins on Monday as a Senior Designer. Set Tom up like Ana Lopes.',
          'Duplicate Ana Lopes for Tom Carter, starting 7 December.',
          'Compare Tom Carter’s access profiles with the other Art Directors in Design.',
        ]}
      />
      <Walkthrough.NoteCard
        items={[
          'You need permission to create and edit users.',
          'The assistant always asks for the new person’s full name and start date. Their timesheets start on that day.',
          'There is no job title field. The typology comes from the colleague you copy, unless you change it on the card.',
          'Hours are copied as they are on the colleague’s user. If they show 0, change them on the card.',
          'Leave lists all of the colleague’s leave types, including expired ones. Only the ones you select are given to the new person.',
          'Usernames must be unique. If the username is taken, the assistant asks for another one. It does not warn you that someone with the same name exists.',
          'Nothing is created until you select Create user. Select Discard to stop.',
        ]}
      />
    </>
  }
>
  <Walkthrough.Message sender="you" name="You">
    <p>Tom Carter is joining the Design team on Monday, 7 December, as a Senior Designer. Set Tom up like Ana Lopes.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Ana’s recorded typology is Art Director. Should I keep that typology for Tom, or use a Senior Designer colleague as the template instead?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Keep Ana’s typology.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>I’ll create Tom Carter as a copy of Ana Lopes, with timesheets starting 7 Dec 2026. I’ll keep Ana’s typology as you confirmed, along with Ana’s access profiles, clients, department and recorded hours.</p>
    <Walkthrough.ApprovalCard
      title="Set up Tom Carter"
      sections={[
        { title: 'Source', rows: [
            ['Copy of', 'Ana Lopes'],
        ] },
        { title: 'Details', tabs: [
          { label: 'Account', rows: [
              ['Name', 'Tom Carter'],
              ['Username', 'tom.carter'],
              ['Email', '—'],
              ['SSO username', '—'],
          ] },
          { label: 'Work', rows: [
              ['Starts (timesheets from)', '07/Dec/2026'],
              ['Minimum hours per day', '8'],
              ['Minimum hours per week', '40'],
              ['Typology', 'Art Director'],
              ['Access profiles', 'Designer, Timesheets, Leaves'],
          ] },
          { label: 'Clients', rows: [
              ['Clients', 'Contoso Foods, Northwind Coffee'],
          ] },
          { label: 'Departments', rows: [
              ['Departments', 'Design'],
          ] },
          { label: 'Leave', rows: [
              ['Leave types', 'Vacation 25 (until 31/Dec/2026), Training 3, Special day off 1 (until 01/Oct/2025)'],
          ] },
        ] },
        { title: 'Includes', rows: [
            ['Set up like the colleague', 'Access profiles, company, department, division, client access, responsible, working hours and holidays'],
        ] },
      ]}
      actions={[{ label: 'Edit details', link: true }, { label: 'Discard' }, { label: 'Create user', primary: true }]}
    />
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>I selected Edit details, added Tom’s email, selected Vacation and Training in Leave, changed Vacation to 2 days for this year and selected Create user.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Tom Carter’s account was created as <strong>tom.carter</strong>, based on Ana Lopes’s setup.</p>
    <ul>
      <li><strong>Company:</strong> Brightlane Lisbon</li>
      <li><strong>Department / division:</strong> Design / Lisbon</li>
      <li><strong>Typology:</strong> Art Director, as you confirmed</li>
      <li><strong>Timesheets start:</strong> 7 Dec 2026</li>
      <li><strong>Minimum hours:</strong> 8 per day / 40 per week</li>
      <li><strong>Access profiles:</strong> Designer, Timesheets, Leaves</li>
      <li><strong>Client access:</strong> <span style={{whiteSpace: 'nowrap'}}><img src="/img/ai/clients/contoso-foods.svg" alt="" width="18" height="18" style={{verticalAlign: '-3px', marginRight: '4px'}} /><span style={{borderBottom: '1px dotted currentColor'}}>Contoso Foods</span></span>, <span style={{whiteSpace: 'nowrap'}}><img src="/img/ai/clients/northwind-coffee.svg" alt="" width="18" height="18" style={{verticalAlign: '-3px', marginRight: '4px'}} /><span style={{borderBottom: '1px dotted currentColor'}}>Northwind Coffee</span></span></li>
      <li><strong>Public holidays:</strong> 14 in 2026, as Ana’s</li>
      <li><strong>2026 leave:</strong> Vacation 2 days, Training 3 days</li>
      <li><strong>Responsible for:</strong> No one</li>
      <li><strong>SSO:</strong> Not configured</li>
    </ul>
    <p>The account and setup steps completed with no outstanding items.</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="you" name="You">
    <p>Compare Tom’s access profiles with the other Art Directors in Design. Is any profile missing?</p>
  </Walkthrough.Message>

  <Walkthrough.Message sender="assistant" name="Skilio">
    <p>Tom has the same access profiles as the other 4 Art Directors in Design. None is missing.</p>
  </Walkthrough.Message>
</Walkthrough>

## Related articles

- [Create User](/docs/administration/users/create-user)
- [System Roles and Profiles](/docs/administration/system-roles-profiles)
- [Create Typologies](/docs/administration/create-typologies)
- [Create Leave Types](/docs/administration/calendars/create-leave-type)
- [Holidays](/docs/administration/calendars/create-holidays)
- [AI Assistant](/docs/ai/ai-assistant)
