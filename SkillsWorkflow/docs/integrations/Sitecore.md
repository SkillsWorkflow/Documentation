---
id: sitecore
title: 'Sitecore'
description: "These are not a background data exchange — they are two working screens built into the Request itself, for teams whose job is placing advertising orders…"
sidebar_label: Sitecore
---

### Description

This article describes the **Assets & Orders** and **Content Library** workspaces in `Skills Workflow`.

These are not a background data exchange — they are two working screens built into the Request itself, for teams whose job is placing advertising orders against publications and re-using approved assets to do it.

- **Assets & Orders** is where an advertising order is specified: the order type (print, video, digital banner or master assets), the publication and section it runs in, and the exact production specification that section demands — ad size, bleed and safety margins. It also controls when the brief can be submitted.
- **Content Library** is where the assets to fulfil that order are found: a searchable, filterable library of the organisation's approved assets, browsed as a grid or a list, collected into a cart, and added to the Request as order items.

The value is that the whole order is specified in one place. Traditionally the specification lives in a publication's spec sheet, the assets live in a digital asset management system, and the order lives in a third place — so producing one order means three tools and a lot of copying. Here the specification, the asset selection and the order are the same screen, and what is selected becomes the Request's own line items directly.

---

### Data Exchange Technology

Both workspaces are **interactive panels inside the Request** — they run when someone opens the Request, not on a schedule.

The **Assets & Orders** panel is served entirely from Skills Workflow's own data: publications, sections, specifications and the Request's own items.

The **Content Library** panel reaches out to the organisation's asset library to search, to fetch the available filters, and to resolve users. Assets selected there are written back as Request items through Skills Workflow's own API.

---

### What the User Sees

**Assets & Orders**

- Choose the order type: Print, Video, Digital Banner, Master Assets — or view all.
- See the publication's delivery details and the section's production specification (ad size, bleed height and width, safety height and width).
- Add orders to the brief, and submit it.

The **Submit** control is only enabled when there is something new to submit — it compares when the Request was last changed against when its status last changed, so a brief cannot be submitted twice over with nothing altered in between.

**Content Library**

- Search the asset library by free text, and narrow with filters, including market and language.
- Switch between a tile view and a list view, sort, and page through the results.
- Add assets to a cart, then add the cart's contents to the Request as order items.

---

### What the Agency Needs to Provide

- **A connection to the organisation's asset library**, configured so the library can be searched and its filters listed.
- **Publications and sections** registered in Skills Workflow with their production specifications, since the order screen presents these.
- **The order types** the agency uses, mapped to the panel's options.

---

### Good to Know

- **These are screens, not a sync.** Nothing happens in the background; the panels act when someone uses them.
- **What is selected becomes Request items.** Removing an asset from the cart removes the corresponding line.
- **The Submit control is deliberately conditional** — if it appears disabled, it usually means nothing has changed since the last submission.

---

### Technical Reference

#### Components

| Name | Type | Version | Stage | Role |
| --- | --- | --- | --- | --- |
| Assets & Orders | Workspace | 43 | Active | Order-type selection and brief submission panel for a Request, backed entirely by Skills Workflow's own database |
| Content Library | Workspace | 2 | Active | Asset search/browse/cart panel embedded in a Request |

Source: `[Sitecore] [Integrations] Assets & Orders v43 (Workspace) {Active}.json`, `[Sitecore] [Integrations] Content Library v2 (Workspace) {Active}.json`.

#### How It Works

**Assets & Orders** — every data source is plain SQL against Skills Workflow's own tables, no external calls:
- `request-items` / `request-detail` — the Request's items and order details (language, market, sizes, dates), including custom fields `Zonza Reference` / `Zonza 5 ID` (see Open Questions).
- `submit-button-status` — compares the latest modification time on the Request/RequestDetail against the latest status-change `Post`, to decide whether the Submit button should be enabled (there's unsaved changes since the last submission).
- `publication-data` / `section-data` — publication delivery details and section specs (bleed/safety sizes, ad size) used to lay out the order.
- `deliverable-userfields` — the allowed "Media Type" values for a Deliverable.

**Content Library** — a dashboard of 12 UI components (search, filters, tile/list views, cart) whose `assets`, `filters` and `users` data sources are inline JavaScript calling three Skills Workflow integration-workflow automations by id (none included in this export):
- `integration-workflows/7f03ffb3-8a37-45b4-951a-f8369e98ad50/execute` — asset search.
- `integration-workflows/24737319-db17-4145-b9db-a01013f1e5fa/execute` — filter list.
- `integration-workflows/352a1423-6d00-4ac1-9045-ecf20d510763/execute` — user list; its JavaScript names the response variable `zonzaResult`.

Adding/removing items uses Skills Workflow's own API (`POST`/`DELETE v3/request-items`), same pattern as the [Swivle](./swivle) Content Library.

#### External System Contact Points

- Three Skills Workflow integration-workflow automations (ids above) are the actual bridge to the external asset library. **None are included in this export.**
- Skills Workflow's own API: `POST /v3/request-items`, `DELETE /v3/request-items`.

#### Configuration

- Not determinable from the export — the asset library's endpoint, credentials and field mapping live inside the three referenced automations, none of which are part of this export.

#### Open Questions

- **This Workspace is functionally identical to the [Swivle](./swivle) `Content Library` Workspace** — both call the same automation ids `7f03ffb3-8a37-45b4-951a-f8369e98ad50` and `24737319-db17-4145-b9db-a01013f1e5fa`, and this version additionally calls `352a1423-6d00-4ac1-9045-ecf20d510763` for a user list whose result is internally named `zonzaResult` in the JavaScript. This is a concrete lead that the DAM behind "Swivle"/"Sitecore" may in fact be **Zonza** — see the note added to `docs/integrations/zonza.md`, which currently states no Zonza integration was found in the platform. That note should be revisited against this evidence.
- Nothing in either exported file references the Sitecore CMS product (no `sitecore`-domain URL, API, or field). "Sitecore" here is most likely a client/tenant name rather than the CMS product; not determinable from the export.
- The three integration-workflow automations that do the real work are not part of this export, so their authentication and the external system(s) they call are not determinable.
