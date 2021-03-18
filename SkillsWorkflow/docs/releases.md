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

<div>Entrar no workspace de um User e navegar para as suas divisões. Devem aparecer correctamente as divisões do User e não dar qualquer tipo de erro.</div><div></div><div>Evidência em attachment</div>

#### 27183 - Add filters navigation to Search

Acceptance Criteria


#### 27184 - Add Auto-Complete to Search

Acceptance Criteria


#### 27203 - Bulk export of Jobs to Vantage should store the Vantage Number

Acceptance Criteria

<div>Ao enviar o job para Vantage, passamos a validar a resposta mesmo que seja válida.</div><div></div><div>É somente exe</div>

#### 27258 - Add User access to Job in VBS

Acceptance Criteria

<div>Ao enviar o job para vbs passou a chamar os endpoints pretendidos no ticket</div><div></div><div>É somente exe</div>

#### 27288 - Upgrade the authentication method with Send Grid

Acceptance Criteria

<div>Os clientes devem continuar a receber emails</div>

#### 27296 - Improve Time Sheet Approval performance

Acceptance Criteria

<div>Testar:</div><div><ul><li>Aprovação de timesheets</li><li>Calendário de timesheets</li><li>Leaves com timesheets</li></ul></div><div></div>

#### 27361 - Creation forms should have no resizing

Acceptance Criteria

<div>Será necessário configurar para que se verifique a alteração (done2.png) Só alterei agora na hogart-test quando se está em um cliente e se cria um contract (done.png)</div>

#### 27363 - Add Department Type to Department when creating Users

Acceptance Criteria

<div>The department field is now showing it's departmenttype</div>

#### 27371 - Automated deliverable creation via workflow action should fill document Custom Fields accordingly

Acceptance Criteria

<div>Passou a gravar os usersfields que vêm no template no formato abaixoNumber: Task 1,.....<b>UserFields: [  Name Folder Create, Value: true]</b></div>

#### 27372 - In MullenLowe Longview, get the Company Code from the User

Acceptance Criteria

<div>Passou a devolver a empresa do utilizador e não a empresa da timesheet.</div><div></div><div>É somente exe</div>

#### 27378 - Billing to Entity in Configuration is not saving the data edited

Acceptance Criteria

<div>Verificar que já salva correctamente.</div>

#### 27381 - Display 9h on the daily view of the Resource Scheduler

Acceptance Criteria

<div>-Improved visibility even when several columns are visible</div><div>-<b>Affected areas</b></div><div><ol><li>Toggle between day, week and month views -&gt; headers should be correctly formatted with no errors.</li><li>Toggle between 24h and 12h and confirm it's working as expected</li></ol><div></div><div></div></div><div></div>

#### 27384 - The Workflow Action to move the Parent Stage when the children move, is not setting the 

Acceptance Criteria

<div>Quando a documento não tem irmãos muda de etapa automáticamente do pai.</div>

#### 27388 - On EAS, deleted Leave days must be removed from the Leaves in use

Acceptance Criteria

<div>No calculo dos totais das leaves passou a ter em conta quando não tem leaves de modo a ficar a 0s</div>

#### 27391 - Navigating through Documents in the Home, should show the Info of the different Documents

Acceptance Criteria

<div>Verificar que já está corrigido</div><div><ul><li>carregar na lista para lançar o preview de um 'job' e ir para a tab 'Info' e verificar que tem os dados do 'job'</li><li>fechar esse preview</li><li>carregar na lista para lançar o preview de uma 'task' e verificar que tem a tab 'Info' com os dados da 'task'</li></ul></div>

#### 27392 - Add support for Named Queries in the Store in Workspaces

Acceptance Criteria

<div>Workspaces com Store agora usam Named Queries. Verificar que continuam a carregar correctamente e que funcionam sem problemas com roles de cada user</div>

#### 27397 - Search should not show Documents or Entities that the User has no access to

Acceptance Criteria

<div>Passou a validar o acesso aos clientes no search e search/lookup</div>

#### 27399 - While changing studio location from AE the task should be locked

Acceptance Criteria

<div>A api de integração passou a suportar a gravação de campos de utilizador.</div>

#### 27403 - Add support for Search for Users with set as Client

Acceptance Criteria

<div>Config: User as IsClient Checked</div><div>Evidence: In Attachment</div><div>Tests:</div><div></div><div>Verificar o uso do Search antigo para users que não sejam clientes, para userss que sejam clientes e users com acesso ou sem a contrcatos e briefs</div>

#### 27406 - Send the Bill entries in the same order to Primavera

Acceptance Criteria

<div>Passou a enviar a bil para Primavera ordenada pela ordem dos itens.</div><div></div><div>Somente exe.</div>

#### 27437 - Adds support for time zones in the Jobs creation from Estimates

Acceptance Criteria

<div>Corrigida a data local dos jobs criados, assim consegue ativar os documentos.</div>

#### 27438 - Add support for updating the Master Estimate on the Actions to Buy, Copy Team and Request Custom Fields

Acceptance Criteria

<div>O orçamento master fica Integrated de modo a fazer os recalculos das linhas.</div>

#### 27439 - Users are able to view HogarthHubs/Studios/ Departments that don't have access to

Acceptance Criteria