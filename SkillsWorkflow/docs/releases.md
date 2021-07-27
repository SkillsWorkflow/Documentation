---
id: releases
title: Releases
sidebar_label: Releases
---

We have new versions releases of the system every week. 

Find bellow all developments and corrections made by our team.

---

## 21

### 21.0

---

## 20

### 20.21

#### 26731 - The Division in Users is showing an error

Acceptance Criteria

Entrar no workspace de um User e navegar para as suas divisões. 
Devem aparecer correctamente as divisões do User e não dar qualquer tipo de erro.
Evidência em attachment
#### 27183 - Add filters navigation to Search

Acceptance Criteria


#### 27184 - Add Auto-Complete to Search

Acceptance Criteria


#### 27203 - Bulk export of Jobs to Vantage should store the Vantage Number

Acceptance Criteria

Ao enviar o job para Vantage, passamos a validar a resposta mesmo que seja válida.
É somente exe

#### 27258 - Add User access to Job in VBS

Acceptance Criteria

Ao enviar o job para vbs passou a chamar os endpoints pretendidos no ticket
É somente exe

#### 27288 - Upgrade the authentication method with Send Grid

Acceptance Criteria

Os clientes devem continuar a receber emails
#### 27296 - Improve Time Sheet Approval performance

Acceptance Criteria

Testar:
- Aprovação de timesheets
- Calendário de timesheets
- Leaves com timesheets
#### 27361 - Creation forms should have no resizing

Acceptance Criteria

Será necessário configurar para que se verifique a alteração (done2.png) Só alterei agora na hogart-test quando se está em um cliente e se cria um contract (done.png)

#### 27363 - Add Department Type to Department when creating Users

Acceptance Criteria

The department field is now showing it's departmenttype
#### 27371 - Automated deliverable creation via workflow action should fill document Custom Fields accordingly

Acceptance Criteria

Passou a gravar os usersfields que vêm no template no formato abaixoNumber: Task 1,.....<b>UserFields: [  Name Folder Create, Value: true]</b>

#### 27372 - In MullenLowe Longview, get the Company Code from the User

Acceptance Criteria

Passou a devolver a empresa do utilizador e não a empresa da timesheet.

É somente exe

#### 27378 - Billing to Entity in Configuration is not saving the data edited

Acceptance Criteria

Verificar que já salva correctamente.

#### 27381 - Display 9h on the daily view of the Resource Scheduler

Acceptance Criteria

- Improved visibility even when several columns are visible
- Affected areas
    1. Toggle between day, week and month views; headers should be correctly formatted with no errors.
    2. Toggle between 24h and 12h and confirm it's working as expected

#### 27384 - The Workflow Action to move the Parent Stage when the children move, is not setting the 

Acceptance Criteria

Quando a documento não tem irmãos muda de etapa automáticamente do pai.

#### 27388 - On EAS, deleted Leave days must be removed from the Leaves in use

Acceptance Criteria

No calculo dos totais das leaves passou a ter em conta quando não tem leaves de modo a ficar a 0s

#### 27391 - Navigating through Documents in the Home, should show the Info of the different Documents

Acceptance Criteria

Verificar que já está corrigido
<ul><li>carregar na lista para lançar o preview de um 'job' e ir para a tab 'Info' e verificar que tem os dados do 'job'</li><li>fechar esse preview</li><li>carregar na lista para lançar o preview de uma 'task' e verificar que tem a tab 'Info' com os dados da 'task'</li></ul>

#### 27392 - Add support for Named Queries in the Store in Workspaces

Acceptance Criteria

Workspaces com Store agora usam Named Queries. Verificar que continuam a carregar correctamente e que funcionam sem problemas com roles de cada user

#### 27397 - Search should not show Documents or Entities that the User has no access to

Acceptance Criteria

Passou a validar o acesso aos clientes no search e search/lookup

#### 27399 - While changing studio location from AE the task should be locked

Acceptance Criteria

A api de integração passou a suportar a gravação de campos de utilizador.

#### 27403 - Add support for Search for Users with set as Client

Acceptance Criteria

Config: User as IsClient Checked
Evidence: In Attachment
Tests:

Verificar o uso do Search antigo para users que não sejam clientes, para userss que sejam clientes e users com acesso ou sem a contrcatos e briefs

#### 27406 - Send the Bill entries in the same order to Primavera

Acceptance Criteria

Passou a enviar a bil para Primavera ordenada pela ordem dos itens.

Somente exe.

#### 27437 - Adds support for time zones in the Jobs creation from Estimates

Acceptance Criteria

Corrigida a data local dos jobs criados, assim consegue ativar os documentos.

#### 27438 - Add support for updating the Master Estimate on the Actions to Buy, Copy Team and Request Custom Fields

Acceptance Criteria

O orçamento master fica Integrated de modo a fazer os recalculos das linhas.

#### 27439 - Users are able to view HogarthHubs/Studios/ Departments that don't have access to

Acceptance Criteria