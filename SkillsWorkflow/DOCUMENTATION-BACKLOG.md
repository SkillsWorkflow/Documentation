# Documentation backlog

Working list for the documentation restructure. Not published — this file lives outside `docs/`.

The **Missing capabilities** section is derived from the public feature taxonomy on
[skillsworkflow.com/all-features](https://www.skillsworkflow.com/all-features/) checked against what
`docs/` actually contains. A capability is listed as missing only when a search of the corpus
returned no page documenting it. Nothing here is a feature request: every line is something the
company already sells and the documentation does not yet explain.

---

## 1. Fix what the restructure exposed

- [ ] 1.1 &nbsp;20 SDK pages have `title: " "` — blank in navigation, search and browser tab.
      `docs/build-and-extend/sdk/**`
- [ ] 1.2 &nbsp;`administration/workflows/action-types.md` lists 108 workflow actions whose every
      description cell is the literal word `text`. Fill it, or delete it and point to
      `administration/workflows/transitions.md`, which documents the same actions properly.
- [ ] 1.3 &nbsp;`administration/users/upload-a-picture.md` is titled *"Password recovery via Forgot
      your password option"* — wrong title, copied from the sibling page.
- [ ] 1.4 &nbsp;`bill-and-learn` → `product/billing-and-costs/billing/client-staff-plan-summary.md`
      was named `purchase-orders.md` but titled *Client Staff Plan Summary*, and duplicates
      `product/dashboards-and-reporting/client-staff-plan-summary.md`. Decide which survives.
- [ ] 1.5 &nbsp;3 pages are `unlisted: true` but absent from `excludeRoutes`
      (`administration/importing-data/` clients, products, workflows), so they stay findable in
      site search.
- [ ] 1.6 &nbsp;`start-here/releases.md` promises weekly release notes and has no content behind it.
      Publish it or delete it.
- [ ] 1.7 &nbsp;Two pages have locale-specific `id` values (`timesheet-aprobaciones-dashboard` in es,
      `create-projects`/`1-approve-expenses` in pt-br), which prevented a redirect from being
      generated for them. Align the ids across locales.

## 2. Missing capabilities — Brief & Scope

The whole briefing stage is the least documented part of the platform.

- [ ] 2.1 &nbsp;**Brief Queue / Tracker** — no page. Where briefs arrive and how they are triaged.
- [ ] 2.2 &nbsp;**Content Library** — mentioned only inside two integration pages
      (`integrations/Sitecore.md`, `integrations/Swivle.md`), never documented as a capability.
- [ ] 2.3 &nbsp;**Asset Ordering** — no page.
- [ ] 2.4 &nbsp;**Personalized Client Portal** — no page, although the implementation exists in the
      WebApp (`Controllers/PortalsController.cs`, `Services/Portals/**`, and an authoring skill at
      `portals/skills/client-portal/SKILL.md`).
- [ ] 2.5 &nbsp;**Client Access with granular permissions** — no page.
- [ ] 2.6 &nbsp;**Price Tables, Markets, Brands, Time Rates** — only `rates/rate-cards.md` exists.
- [ ] 2.7 &nbsp;**Supplier Access** — no page.

## 3. Missing capabilities — the rest of the chain

- [ ] 3.1 &nbsp;**Kanban view** — no page. Mentioned only in AI pages.
- [ ] 3.2 &nbsp;**Calendar view** — no page.
- [ ] 3.3 &nbsp;**Checklists, Reactions, Mentions** — no pages.
- [ ] 3.4 &nbsp;**Delay detection and rework tracking** — no pages.
- [ ] 3.5 &nbsp;**Marketplace & Templates** (off-the-shelf workspaces, versions) — no page; the
      word appears only in integration pages.
- [ ] 3.6 &nbsp;**Gamification** — no page.
- [ ] 3.7 &nbsp;**Attendance** — no page.
- [ ] 3.8 &nbsp;**Closing periods** — no page.
- [ ] 3.9 &nbsp;**Delegates**, **Multi-currency**, **Versions**, **Tags** — no pages.
- [ ] 3.10 &nbsp;**SOX reporting**, **Email reporting and reply** — no pages.
- [ ] 3.11 &nbsp;**Cash advances and reimbursements** — expenses pages cover creation and approval
      only.
- [ ] 3.12 &nbsp;**Production Finance** — the entire *Bill & Learn* stage is three pages
      (`invoice-authorizations`, `credit-notes`, one dashboard). Supplier invoices, third-party cost
      control and billing forecast have none.

## 4. Deepen what exists

- [ ] 4.1 &nbsp;**Gantt** — `using-the-gantt.md` still describes an older toolbar and covers a
      fraction of the view. Columns, filters, dependencies, baselines, critical path, copy/paste and
      cross-project paste are all undocumented.
- [ ] 4.2 &nbsp;Replace the three placeholder screenshots in `static/img/gantt/` with real captures.
- [ ] 4.3 &nbsp;**Roles and profiles** — `start-here/roles-and-profiles.md` was rescued from
      `to-review` and has not been verified against the product.
- [ ] 4.4 &nbsp;Each product area needs an index page saying what the area covers. They are bare
      categories today.
- [ ] 4.5 &nbsp;**Learning paths** — `learning-paths/` currently holds only the old University
      landing page. Build the End user / Administrator / Consultant routes as links into the
      canonical pages, with no content of their own.

## 5. Localisation

- [ ] 5.1 &nbsp;Translation currently follows the old University boundary: ~97% of those pages are
      translated, against ~5% of everything else. Decide the policy for the new tree — most likely
      `product/` and `start-here/` translated, `build-and-extend/` English-only.
- [ ] 5.2 &nbsp;68 orphaned locale files were deleted during the restructure. Check whether any of
      them documented something the English tree never had.

## 6. Verification still owed

- [ ] 6.1 &nbsp;`internal/to-review/` — 8 pages parked out of the site. Triage each: publish, merge
      or delete. Some duplicate live pages (GDPR, Azure AD blocking, timesheets).
- [ ] 6.2 &nbsp;`internal/design/` — 14 pages of guidelines, now internal. Confirm none of it was
      customer-facing.
- [ ] 6.3 &nbsp;`internal/documenting/` — the style guide is referenced from `AGENTS.md`. Confirm
      the new location does not break that workflow.
- [ ] 6.4 &nbsp;30 RCA incident reports (2018–2026) still sit inside `trust/`. Split them into a
      dated archive so the 10 policy pages are findable.
