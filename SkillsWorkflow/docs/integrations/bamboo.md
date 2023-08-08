---
id: bamboo
title: Bamboo
sidebar_label: Bamboo
---

### Bamboo

This is the documentation about the integration between Bamboo and Skills Workflow. This documentation is for Skills Workflow localised in the Cloud.

---

### Data Exchange Technology

The Automations are triggered by Bamboo HR
User changes fire Webhooks in Bamboo HR
The Automations call the system API to save data Existing Users and Absences are linked by the Bamboo ID

---

### Data Exchange (To Skills Workflow)

This section describes the Data exchanged between systems. Please see the data exchanged. 
The data is exchanged with Views available in the system.

**Employees are received by Skills Workflow:**
New Employees created Bamboo:

- User – Takes the ID frm Bamboo HR into BambooId
- UserName - Gets the user’s email from Bamboo HR 
- Name - Gets the user’s full name from Bamboo HR
- Typology – Is created if it doesn’t exist 
- Typology Group – Is created if it doesn’t exist 
- Department – Takes the ID to BambooId in Department 
- Responsible – Gets the user’s supervisor from Bamboo
- Required Hours – Takes working hours from Bamboo HR
- Email – Gets the user’s email from Bamboo HR
- Hire date - Gets the user’s Hire date from Bamboo HR

---

### Examples of places where data from Bamboo HR is Shown

User data will be shown in the User Profile and everywhere The Absence data is show in approvals, scheduling, etc. FTE & Time Sheet make use of User and Absence data Resourcing and Contracted time uses User data.

---

### Security

Automations are public but require a shared Key
The shared key is set by the agency and is unique
All data is encrypted in transit and at rest
PII (e.g., GDPR compliance) is controlled by Bamboo HR
