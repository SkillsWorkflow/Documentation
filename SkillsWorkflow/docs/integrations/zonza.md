---
id:  zonza
title: 'Zonza'
sidebar_label: Zonza
---

###Description

This is the Documentation of how the Integration between the Zonza and `Skills Workflow`. This documentation is for Skills Workflow located in the Cloud.

---

###Data Exchange Technology

On Skills Workflow only the employees from one company will be received based on the Company's code.
An additional application must be installed locally in order to allow the information exchange.
The scope of data exchanged on this integration is the User's Data.

---

###Data Exchange (To Skills Workflow)

This section describes the Data exchanged between systems. Please see the data exchanged.
The data is exchanged with Views available in the system.


**The following Employee fields can be mapped:** <br />

`Employees` are received by Skills Workflow. 

New Employees created in Zonza are automatically created in Skills Workflow.
After creation, the only fields updated are "IsActive" and "Termination Date".
Employees Data Exchanged

The fields that are populated into Skills Workflow:

- Name
- UserName
- Company
- Company Code
- Department
- Typology
- E-mail
- Phone
- Hire Date
- IsActive
- SSO Username

Further, in the External Settings if the fields:

- Department External Id
- Typology External Id

Are filled, all the employees will have the same department and typology by default even though comes a different one on the file.

All active status coming from HRLink should be populated on the field: "User Active Status". i.e, leave status as "L" and active as "A".

Terminated employees will be automatically inactivated in Skills Workflow.
SSO Username will be populated with e-mail coming from Zonza.
External ID is populated with the user e-mail only in creation.

---

###Conclusion

The contents of this document create the foundation for data and process communication methodology between Skills Workflow and Agencies. The current known data and process transfers are contained in this document but more may be created as additional data and process needs are discovered.
