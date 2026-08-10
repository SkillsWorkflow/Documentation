---
id: vbd
title: 'VBD'
sidebar_label: VBD
---

### Description

This article describes the **VBD** integration.

Unlike the other integrations, which run on a schedule and move records between systems on their own, VBD works as a **service**: Skills Workflow publishes a secured endpoint that exposes a consolidated list of **clients and their jobs**, and the consuming system asks for the data whenever it needs it.

This is the right model when the other side wants to stay in control of when it reads, and how far back it reads — for example a reporting tool, a data warehouse load, or a back-office system that reconciles jobs on its own cycle.

---

### Data Exchange Technology

The data is made available over a single secured web endpoint. There is no file exchange, no FTP server and no application to install.

Access is controlled by an **API key**, issued by Skills Workflow and passed by the consuming system on every request. A request without a valid key is rejected.

The consumer asks for everything registered **since** a given date. This makes it straightforward to run either a full reload (by asking from a very old date) or an incremental one (by asking from the date of the last successful read).

The service is read-only. Nothing that a consumer does can change data.

---

### Data Exchange

Each record returned combines the client and the job:

**Client information**

- Tax identification number
- Registered legal name
- Trading name
- Client code

**Job information**

- Job number
- Opening date
- Job status
- Job category
- Campaign
- Job owner
- Competitive-pitch indicator

Records are returned ordered by job number, most recent first.

---

### What the Agency Needs to Provide

- Confirmation of which system will consume the service.
- The network access required for that system to reach the endpoint.

Skills Workflow issues the API key and provides the endpoint address.

---

### Monitoring and Error Handling

The service exposes a health check that reports whether it is running and whether the underlying data source is reachable. Errors are captured by the platform's monitoring, so a failing data source is visible without waiting for the consumer to report a problem.

Because the consumer drives the reads, there is no scheduled run and no notification e-mail for this integration: the responsibility for retrying a failed read sits with the consuming system.

---

### Good to Know

- The API key is the only credential. It should be treated as a secret and rotated through Skills Workflow if it is ever exposed.
- The `since` filter is applied on the date each record was registered, not on the job opening date. A job opened long ago but registered recently will still be returned.
- Since the service is read-only and stateless, it can safely be called as often as the consuming system needs.
