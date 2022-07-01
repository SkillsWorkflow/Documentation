---
id:  adp
title: 'ADP'
sidebar_label: ADP
---

### Description

This is the Documentation of how the Integration between the ADP and `Skills Workflow`.

---

### Data Exchange Technology

ADP places files in an FTP Server that contain infformation on employee.
The files are encrypted using a PGP certificate.

---

### Data Exchange (To Skills Workflow)

This section describes the Data exchanged between systems. Please see the data exchanged.
The data is exchanged with Views available in the system.


**The following Employee fields can be mapped:** <br />

`Employees` are received by Skills Workflow. 

New Employees created in ADP are automatically created in Skills Workflow as Users and Employees.
When an Employee is modified in ADP, the fields affected are:
- IsActive 
- Termination Date

Employees Data Exchanged
The import files contains the following fields (separated by "|"):
- Matr
- Nome
- Empresa
- CR
- CRNome
- Funcao
- Chefia
- VinculoEmpregaticio
- Nascto
- EMail
- Telefone
- Contribuinte
- Pais
- Naturalidade
- Admissao
- Demissao

The fields that are populated into Users:
- Name - Generated based on the "Email" (initial part, before the "@"), replacing "." for spaces and appling proper casing 
- UserName - Generated based on the "Email"
- User Type - Is set to "VinculoEmpregaticio"
- Company - Derived from "Empresa"
- External ID - Set to "Matr"
- Department - Taken from "CR"
- Typology - Mapped using Department and "Funcao"
- E-mail - Set to "Email"
- Hire Date - Set to "Admissao"
- IsActive - Derived from "Demissao" when not empty
- SSO Username
- Responsible - The User set in "Chefia"
- Tax Payer Number - Set to "Contribuinte"

The fields that are populated into Employees:
- Name - Set to "Nome"
- Company - Derived from "Empresa"
- External ID - Set to "Matr"
- IsActive - Derived from "Demissao" when not empty

The following entities are created if they do not exist:
- Department
- Typologies
- User Types

Terminated employees will be automatically inactivated in Skills Workflow.
SSO Username will be populated with e-mail coming from ADP.

---

### Conclusion

The contents of this document create the foundation for data and process communication methodology between Skills Workflow and Customers. The current known data and process transfers are contained in this document but more may be created as additional data and process needs are discovered.
