---
id: multi-approving-time-sheets
title: Time sheet Approval levels
sidebar_label: 4. Time sheet Approval levels
sidebar_position: 4
---

### Company

If the approval type is the same for all clients, the timesheet approval type should be selected at the company level.

<figure>

![img-with-border](/img/timesheets/10-setting-in-the-company.png)

<figcaption>Company Configuration</figcaption>
</figure>

### Client

If the timesheet approval is different per customer:
Go to maintenance, select the client, choose the timesheet approval type and hit save.

<figure>

![img-with-border](/img/timesheets/11-Configuration_Customer.png)

<figcaption>Timesheet Approver Type</figcaption>
</figure>

### User

Maintenance – Users – responsible – you can set up 1 or several responsible for timesheet approval, you should also set their respective order.

<figure>

![img-with-border](/img/timesheets/12-Configuration_responsables.png)

<figcaption>Configuration of Responsibles in the User</figcaption>
</figure>

### PM Approval

If the timesheet approval process is set to be approved by the project manager, every time that a user fills in hours and send it to be approved it flows to the project PM, after the PM approves it flows to the user responsibles. If you set up different approval responsibilities (different orders) the system will always check that hierarchy.

<figure>

![img-with-border](/img/timesheets/13-Every_hours_Approve.png)

<figcaption>Approval of Timesheets</figcaption>
</figure>

If one of the responsible reject the hours, all the hierarchy will see them as rejected, and will be able to see the tool tip with the motive.

<figure>

![img-with-border](/img/timesheets/14-Timesheets_approved.png)

<figcaption>Approved Timesheets</figcaption>
</figure>

Once the PM approves the hours will flow to the responsible order 0 to be approved.


<figure>

![img-with-border](/img/timesheets/15-Hours_unapproved.png)

<figcaption>Approved Time sheets</figcaption>
</figure>

Once the user responsible order 0 approves, the hours flow to the responsible order 1 to be approved.


<figure>

![img-with-border](/img/timesheets/16-Approved_unapproved_returned.png)

<figcaption>Timesheets</figcaption>
</figure>

Administrative hours are sent to the user responsible set on the user info.
