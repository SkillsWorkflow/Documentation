---
id: multi-approving-time-sheets
title: Aprovação múltipla de Timesheets
sidebar_label: 4. Aprovação múltipla de Timesheets
sidebar_position: 4
---

### Empresa

Se a aprovação for igual para todos os clientes o tipo de aprovação de timesheet pode ser selecionada na empresa.

<figure>

![img-with-border](/img/timesheets/10-setting-in-the-company.png)

<figcaption>Configuração na Empresa</figcaption>
</figure>

### Cliente

Se a aprovação de timesheet for diferente por cliente:
Ir a manutenção, selecionar o cliente e escolher que tipo de aprovação de timesheet.

<figure>

![img-with-border](/img/timesheets/11-Configuration_Customer.png)

<figcaption>Tipo de Aprovador de Timesheets</figcaption>
</figure>

### Usuário

Aceder a manutenção na lista de usuários, separador responsáveis e estabelecer vários utilizadores responsáveis, e a respetiva ordem.

<figure>

![img-with-border](/img/timesheets/12-Configuration_responsables.png)

<figcaption>Configuração de Responsáveis no Usuário</figcaption>
</figure>

### Aprovação pelo PM

Se a opção de aprovação de timesheets configurada for a do responsável do projeto, quando o usuário coloca horas e envia para aprovação o sistema vai enviar para o responsável do projeto, quando este aprova segue para o responsável hierárquico ordem 0, quando este aprova segue para o responsável hierárquico ordem 1, e por aí em diante. Se o responsável hierárquico ordem 1 rejeitar, todos os aprovadores e usuário vão ver as horas como rejeitadas e a tooltip com o respetivo motivo.

<figure>

![img-with-border](/img/timesheets/13-Every hours to Approve.png)

<figcaption>Aprovação de Timesheets</figcaption>
</figure>

Depois de o gestor de projeto ter aprovado, o gestor de nível 0 considera que chegou a altura de aprovar.

<figure>

![img-with-border](/img/timesheets/14-Timesheets_approved.png)

<figcaption>Timesheets Aprovadas</figcaption>
</figure>

Depois do responsável do projeto aprovar, o responsável hierárquico nível 0 passa a ver as horas para aprovar.

<figure>

![img-with-border](/img/timesheets/15-Hours_unapproved.png)

<figcaption>Timesheets Aprovadas</figcaption>
</figure>

Quando o aprovador de ordem 0 aprova, as horas vão para o aprovador de ordem 1 para serem aprovadas.

<figure>

![img-with-border](/img/timesheets/16-Approved_unapproved_returned.png)

<figcaption>Modulo de Timesheets</figcaption>
</figure>

As horas administrativas seguem a aprovação estabelecida para os utilizadores e respetivos níveis.
