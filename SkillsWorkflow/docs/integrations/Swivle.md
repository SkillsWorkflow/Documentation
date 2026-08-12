---
id: swivle
title: 'Swivle'
description: "Swivle is the agency's Digital Asset Management system — the library where approved creative assets live, with the metadata that makes them findable."
sidebar_label: Swivle
---

### Description

This article describes the integration between **Swivle** and `Skills Workflow`.

Swivle is the agency's Digital Asset Management system — the library where approved creative assets live, with the metadata that makes them findable. Skills Workflow is where the work that uses those assets is requested and delivered.

This integration brings the library **inside the Request**. Rather than a background sync, it is a working screen: someone raising or fulfilling a request searches Swivle, filters it, picks the assets they need, and adds them to the Request as line items — without leaving Skills Workflow, and without downloading and re-uploading anything.

The value is that the asset never has to be copied to be used. The library stays the single source of the asset and its metadata; Skills Workflow references it. That means no second copy drifting out of date, no ambiguity about which version was used, and no context-switching for the person doing the work.

---

### Data Exchange Technology

The Content Library is an **interactive panel inside the Request** — it runs when someone opens the Request, not on a schedule.

When they search or filter, Skills Workflow queries Swivle live and presents the results. Assets they select are written back as Request items through Skills Workflow's own API. Nothing is copied into Skills Workflow beyond the reference and the metadata needed to display it.

---

### What the User Sees

- **Search** the library by free text, and narrow the results with filters drawn from Swivle's own metadata — including market and language.
- **Browse** results as tiles or as a list, sort them, and page through them.
- **Inspect** each asset's details: asset type, file name and format, creation date, dimensions, resolution, orientation, touch point, channel, status, retailer, brand and reference, plus who imported and last modified it.
- **Collect** assets into a cart, then add the cart's contents to the Request as items.

Supporting files are hidden by default, so the results show the assets people actually mean rather than every artefact behind them.

---

### What the Agency Needs to Provide

- **A Swivle account with API access**, and the connection configured in Skills Workflow.
- **Agreement on which Swivle metadata fields** should be shown as columns and offered as filters.

---

### Good to Know

- **This is a screen, not a sync.** No assets are imported into Skills Workflow in the background; the library is queried live when someone uses it.
- **Adding an asset creates a Request item**, which is what carries the reference forward into the work.
- **The library is the source of truth for the asset.** Metadata shown in Skills Workflow reflects what is in Swivle at that moment.

---

### Technical Reference

#### Components

| Name | Type | Version | Stage | Role |
| --- | --- | --- | --- | --- |
| Content Library | Workspace | 3 | Active | Dashboard panel embedded in a Request: search/browse Swivle assets and add them as request items |

Source: `[Swivle] [Integrations] Content Library v3 (Workspace) {Active}.json`.

#### How It Works

The Workspace is a dashboard of 12 UI components (search box, filters, tile/list views, cart, sorter, pagination, etc.) bound to a `DataSourceConfiguration` with five data sources:

- **`assets`** — the DAM search itself. Its `main` data source is inline JavaScript that calls `SW.executeAPI('POST', 'integration-workflows/7f03ffb3-8a37-45b4-951a-f8369e98ad50/execute', ...)`, passing the free-text search, pagination and any chosen filters, and maps the DAM's raw asset metadata (fields such as `cf_assetType`, `filename`, `dimension`, `cf_touchPoint`, `cf_channels`, `status`, `cf_retailers`, `cf_brand`, `thumbnailUrl`, `previewUrl`, `originalUrl`) into the grid's columns.
- **`filters`** — populates the filter list via a second automation, `integration-workflows/24737319-db17-4145-b9db-a01013f1e5fa/execute` (called with body `"GetFilters"`).
- **`request-items`** — SQL against Skills Workflow's own database (`RequestItem` / `RequestItem_Userfields`) to show what's already been added to the current Request, including fields `Zonza 4 ID`, `Zonza 5 ID` and `Zonza Reference`.
- **`markets`** / **`languages`** — plain SQL lookups (`Market`, `Idiom` tables).
- Adding/removing cart items calls Skills Workflow's own API directly: `POST v3/request-items` to add, `DELETE v3/request-items` (bulk or single) to remove.

#### External System Contact Points

- Two Skills Workflow **integration-workflow automations** (ids `7f03ffb3-8a37-45b4-951a-f8369e98ad50` for asset search and `24737319-db17-4145-b9db-a01013f1e5fa` for filters) are the actual bridge to Swivle. **Neither is included in this export** — this Workspace file only shows that the dashboard calls them by id; how they authenticate to Swivle and shape the request is not determinable from the export.
- Skills Workflow's own API: `POST /v3/request-items`, `DELETE /v3/request-items`.

#### Configuration

- Not determinable from the export — the DAM endpoint, credentials and asset-field mapping all live inside the two referenced automations, which aren't part of this export.

#### Open Questions

- The two automations the Workspace depends on (`7f03ffb3-8a37-45b4-951a-f8369e98ad50`, `24737319-db17-4145-b9db-a01013f1e5fa`) were not part of this export, so the actual Swivle API calls, authentication and error handling are not determinable.
- **This Workspace is functionally identical to the [Sitecore](./sitecore) `Content Library` Workspace** — both call the same two automation ids above. The Sitecore version additionally calls a third automation (`352a1423-6d00-4ac1-9045-ecf20d510763`) whose response it internally names `zonzaResult`, and the `Zonza 4 ID` / `Zonza 5 ID` / `Zonza Reference` fields queried alongside the request items here reinforce that lead. See the note added to `docs/integrations/zonza.md`, which currently states no Zonza integration was found — that note should be revisited against this evidence.
