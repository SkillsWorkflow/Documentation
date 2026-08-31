---
id: ai-portals
title: Client Portals
description: "A client portal is a page of its own, generated with AI, served from Skills Workflow behind your users' session and reading live platform data through their own permissions."
sidebar_label: Client Portals
sidebar_position: 6
---

A client portal is a web page of its own, served from Skills Workflow at `/portal/{client}/{portal}/`. Its own layout, its own charts, its own words. It is not a workspace and not a dashboard: the platform's interface is not loaded around it, so the page can look like anything.

It also sits **inside your session**. Someone opening a portal signs in as themselves, and the page reads live Skills Workflow data through their own permissions. Nothing is exported, copied or kept in sync.

Portals are written with AI. You describe the page you want, and the platform ships a skill that tells the agent everything it needs about the environment: what data it can reach, how to call it, and what the sandbox forbids.

:::note
Portals are new and still being built out. Read [What is not there yet](#what-is-not-there-yet) before planning a rollout to client users.
:::

## What a portal is for

- A view for one client that does not fit any workspace: their own reporting page, in their own words
- A screen shaped around one job, in a layout the platform's components do not produce
- A page you hand someone as a link, without teaching them the platform

## How it works

Each portal lives in a folder, and the folder structure *is* the registry. Publishing a portal is putting its files somewhere; removing it is deleting them. There is no list to keep in step.

The address has exactly two segments: the client, then the portal. Both may contain only lowercase letters, numbers and hyphens, and must start with a letter or number.

```
/portal/{client}/{portal}/
```

Portals are stored in your tenant's own file system, under a `Portals` folder, as `{client}/{portal}/index.html` plus whatever else the page needs. The file system's own permissions apply: someone who cannot read the folder does not get the portal.

### Signing in

A portal request without a session is sent to a sign-in screen and returned to the portal afterwards. From then on the page is served under that session.

The page itself never receives an access token. When it calls the API, the call goes to Skills Workflow's own address and the server attaches the credentials. The portal reads data as the signed-in user, and cannot read anything they could not.

### What the page can reach

A portal is given a small SDK. Through it the page can:

- Call the Skills Workflow API v2 and v3 as the signed-in user
- Read the signed-in user's profile, available on the very first paint with no call
- Run your **data extraction named queries**, the same ones behind your reports, which is what fills a table or a chart
- Draw the platform's own avatars for a user, client, client group or company
- End the session

Named queries are filtered, sorted and paged in the database before a row is returned, and are read-only. Each one is role-checked, so a user who is not granted a report is refused it in a portal too.

### The sandbox

A portal runs under a content security policy that is deliberately tight:

- No scripts from anywhere else. Everything the page needs is inside the portal folder.
- No calls to anywhere but Skills Workflow.
- Images must come from Skills Workflow, or be embedded in the page.
- Google Fonts is the one external source allowed, for its stylesheets and font files.

Charts are therefore drawn in the page itself.

## Getting a portal built

1. **Say what the page is for and who opens it.** One client, one audience, one question the page answers.
2. **Name the data.** Which report, which figures, which records. A portal reads what your data extraction queries publish, so a question no query answers needs the query first.
3. **The portal is generated.** The `client-portal` skill gives the agent the whole contract: the SDK, the sandbox, the query grammar, and the rule that no endpoint or column may be invented. Where a fact cannot be established, the agent says so.
4. **Review it against the states, not just the happy path.** A portal must render an empty answer, a refused one and an unreachable service as three different things. Open it as a user who is *not* granted the report and check what they see.
5. **Publish it** to the `Portals` folder in your tenant's file system, under `{client}/{portal}/`.

## Rules and behaviour

- Every request is authorised. There is no anonymous portal.
- A portal belonging to another tenant is indistinguishable from one that never existed. Portals and clients cannot be enumerated across tenants.
- Signing out deletes the session cookie. As on the rest of the platform, it does not invalidate the token itself.
- Republishing a file that already exists must replace it as a new version. Uploading it again creates a second file of the same name, and the portal may keep serving the old one.
- A portal is served read-only. It has no storage of its own; anything it saves goes through the API.

## What is not there yet

These are known and worth deciding on before portals go to client users:

- **There is no publishing tool.** A portal is published by creating its folders and uploading its files.
- **A portal is not scoped to its client.** Access today is "has a session, and the folder exists". The client segment in the URL does not restrict who may open it, so any signed-in user can open any client's portal if they know its address. Restricting the portal folders by role is the mechanism to use in the meantime.
- **Who may write to the `Portals` folder is a security boundary.** A portal runs script in the browser of everyone who opens it. Treat write access to that folder as you would treat deploying code.
- **A build that emits absolute paths will not work.** A portal is served under its own path; a page whose assets are addressed from the site root loses all of them. Generate relative paths, or configure the base path at build time.

## Related articles

- [Add your own skills, agents and tools](/docs/ai/ai-extend)
- [Data Extraction API](/docs/build-and-extend/api/data-extraction-api)
- [AI Assistant](/docs/ai/ai-assistant)
