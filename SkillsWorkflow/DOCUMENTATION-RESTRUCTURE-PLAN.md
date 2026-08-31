# Documentation restructure — execution plan

Working file. Not published; lives outside `docs/`.

> **Status: all phases complete (2026-08-31).** Phases 0–6 are done, plus a Phase 7 (navigation and
> shell) that came out of testing the built site as a reader; each section below records what
> was actually changed and what was deliberately left. Verified by a clean `npm run build` (exit 0,
> four locales) and a 47-check Playwright pass against the served production build — navigation,
> search, every product area, every new page, the deleted pages, cross-links, all three locales and
> the sidebar labels. **Open items** are listed at the end under "Remaining work".

This is the **execution plan** produced by the post-restructure audit (2026-08-30). It is written to
be picked up in a fresh session with no prior context. Companion file:
[`DOCUMENTATION-BACKLOG.md`](./DOCUMENTATION-BACKLOG.md), which holds the longer-term content
backlog. Where the two overlap, the backlog item number is cited.

Repository rules still apply in full: [`AGENTS.md`](./AGENTS.md). In particular — **do not invent
product behaviour**. Every factual claim added to a page must be verified against
`~/Repos/SkillsWorkflow.Main` (WebApp routes, `ClientApp/assets/i18n/en.json`,
`SkillsWorkflow.Api.Core` controllers) or `~/Repos/Marketplace`.

---

## Context a fresh session needs

**What happened.** Commit `41d8930` ("docs: restructure around product capabilities") moved the docs
from `customization/` + `university/` + `api/` + `sdk/` into `start-here/`, `product/`,
`administration/`, `build-and-extend/`, `integrations/`, `ai/`, `trust/`, `learning-paths/`. The
files moved; the article titles, ordering conventions and cross-links did not.

**What the audit found.** The new tree is the right shape. The content layer is still the old
lesson-based one: 50 of 58 product pages carry lesson numbers (`1.`, `2.`, `7.`, `12.`) whose
sequences are now broken, 14 subfolders have no `_category_.json` so the sidebar shows raw folder
names, no product page links to any other product page, and the restructure introduced three
correctness defects that are live on the site.

**Evidence sources used, and to re-use.**

| Question | Authoritative source |
|---|---|
| Which modules are in the main menu | `SkillsWorkflow.WebApp/src/SkillsWorkflow.WebApp/ClientApp/app/frame/menu/menu-side/menu-side-new.component.ts` → `documentTypes` array, plus `menu-side.service.ts` for Time Sheets / Leaves / Resources |
| Menu order per module | `ClientApp/app/document-model/*-document-data.ts` → `menu: { order }` |
| Which routes exist | `ClientApp/app/frame/home/home-routing.module.ts`, `ClientApp/app/core/app.routes.ts` |
| Permissions | `ClientApp/app/common/constants/system-roles-dictionary.ts` |
| **Exact UI labels** | `ClientApp/assets/i18n/en.json` (also `pt-pt`, `pt-br`, `es`) |
| Which workspaces ship as standard | ~~`~/Repos/Marketplace/Standard/Cloud/{Configuration,Document,Popup}`~~ — **do not use, see below** |
| Which workspaces are shared-but-not-standard | ~~`~/Repos/Marketplace/Non-standard/Shared/Cloud/Menu`~~ — **do not use, see below** |
| API surface | `~/Repos/SkillsWorkflow.Main/SkillsWorkflow.Api.Core/Controllers/*.cs` |

**`~/Repos/Marketplace` is retired as a source — 2026-08-30, per your explicit instruction.** Last
real commit `2023-07-19`; you confirmed it's stale from 2022 and not to be used at all, for anything.
Every claim in this plan that traces back to it is now **unverified**, not confirmed: the "standard
vs shared-but-not-standard" split for the 11 dashboard articles (0.4, Phase 5 coverage baseline) and
the Kanban/dashboard "non-standard" claim in the trap list below. Workspace definitions themselves
are DB-seeded records (opaque GUIDs in `*-document-data.ts`, e.g. `purchase-order-document-data.ts`'s
`availableWorkspaces`), not something in the WebApp git repo either — so there may be **no
git-verifiable replacement** for what Marketplace used to answer. See 0.4 below.

**Traps that cost time in the audit — do not repeat them.**

- `app/deprecated/` is a code-organisation folder, not a statement about the product. The Resources
  scheduler lives there and is actively developed (see the `Scheduler*` strings in `en.json`).
- Code existing does not mean the feature is exposed. `Budget` is commented out of the side-menu
  `documentTypes` array; `Tender` is absent from it; `Gamification` has no route. None of these are
  documentation gaps.
- ~~Kanban is **not** standard product — it lives in `Marketplace/Non-standard/`. Same for the 11
  documented dashboards, which are `Non-standard/Shared`.~~ **Retracted 2026-08-30** — this claim came
  from the now-retired Marketplace repo and is unverified. Don't repeat it until re-checked against
  the WebApp or another live source.
- Page URLs come from frontmatter `id`, not the filename. `create-a-project.md` publishes as
  `/create-projects`. Always check `id` before assuming a URL.
- `git show <ref>:docs/...` fails silently here — the git root is `~/Repos/Documentation`, so the
  path must be `<ref>:./docs/...`.

---

## Phase 0 — Decisions required before any work starts

These change the shape of later phases. **All of 0.1–0.5 are resolved (2026-08-30).** Phase 2 is
unblocked.

- [x] **0.1 Numbering — RESOLVED 2026-08-30.** Confirmed: strip the leading number from all 50
      product `sidebar_label` values, rely on `sidebar_position`. `learning-paths/` keeps its numbers
      (genuine curriculum). Ready for Phase 2.1 once Phase 2 opens.
- [x] **0.2 Dashboard vs Workspace — RESOLVED 2026-08-30.** Confirmed: rename the category to
      **Workspaces & Reporting** and the 11 article titles to "… workspace", matching `en.json`'s
      `Dashboard = 'Workspace'`. Ready for Phase 2.4 once Phase 2 opens.
- [x] **0.3 Contracts vs Fees — RESOLVED 2026-08-30, confirmed with source + industry research.**
      Verified there is **no separate `Fee` entity anywhere in the codebase** — only `Contract`
      (`ContractController.cs`, `ContractV3Controller.cs`, `Contract.cs`, plus the
      `ContractCompany`/`ContractItem`/`ContractDeliverableRateCard*`/`ContractPeriodRateCard*` family).
      `en.json`: `"Contract": "Fee"`, `"Contracts": "Fees"` — the **same** object's English/Spanish
      display label. `pt-pt.json`/`pt-br.json` display it as `Contratos`.
      **Also checked the WebApp UI layer directly, not just the API and the raw i18n JSON** (the
      first pass had skipped this): `menu-side-new.component.ts:105` places `SystemNames.contract`
      at menu order 3, route `contracts`; `AppRoutesTitle.Contracts = "Contracts"` is the *internal
      lookup key* the WebApp's own route-title mechanism passes to the translate pipeline — confirming
      the resolution to "Fees"/"Contratos" happens in the live app, not just in a static JSON file. A
      real Angular module exists (`documents/contracts/`) with list, detail and preview components;
      the detail screen has dedicated sub-tabs for **Estimates** and **Projects**
      (`contract-detail-estimates.component.ts`, `contract-detail-projects.component.ts`, matching
      `contract-document-data.ts`'s `availableWorkspaces: { estimates, projects }`). Also searched for
      a "Proposal" business object or UI concept — **none exists**; the only "Proposal" hits anywhere
      in the WebApp are unrelated AI-assistant code (the chat assistant proposing edits). This means
      the current article's title, "Contracts and Proposals," names a concept ("Proposals") with no
      verified product meaning — one more reason `contracts-and-proposals.md` needs a real content
      pass, not a mechanical rename (see below). The Estimates/Projects sub-tabs also confirm Fee and
      Estimate are genuinely separate-but-related objects (a Fee record *contains* Estimates and
      Projects as sub-resources) — reinforcing, not changing, the conflation finding below.
      One object, two locale-level
      framings, not two features.
      Checked general agency-industry usage to make sure the rename doesn't lose a real distinction:
      a "contract" is normally the formal agreement (scope, terms, duration); a "fee" is normally the
      payment/pricing structure agreed *within* that contract — related, not identical, concepts.
      Skills Workflow's `Contract` object matches both readings at once: it's tied to a client and a
      Price Table, and tracks hours sold vs. hours consumed — exactly the fee-tracking function of a
      contract. So the rename is correct, but the resulting article should say so explicitly rather
      than silently swap the word: **open with a sentence bridging both terms** (something like "in
      Skills Workflow this is called a Fee — the agreement with a client for a number of hours or
      deliverables, tracked against a Price Table"), so a reader who thinks in "contract" terms isn't
      left wondering why the sidebar says "Fees." Verify the exact wording against the live UI and
      `ContractController.cs` when 2.4 actually rewrites the page bodies, not just the labels.
      Affected, for Phase 2.4 when it runs:
      - `docs/product/commercial/contracts/` — folder name and its two articles
        (`contracts-and-proposals.md`, `projects-on-a-contract.md`). Note: `contracts-and-proposals.md`
        also has a pre-existing content bug independent of naming — it conflates Contract and Estimate
        in its own prose ("The main objective is the creation of a contract... Contracts are associated
        with a specific client, and must be associated with a Price Table" immediately followed by
        "## Create Estimate" and Estimate-field instructions). `Estimate` is a distinct, separately
        verified object (`EstimateController.cs`) — this needs a content fix, not just a terminology
        rename. Flagging for whoever does the 2.4 prose pass; may be bigger than a label swap.
      - `docs/product/dashboards-and-reporting/contract-dashboards.md` — title currently "Contract"
      - the matching i18n copies under `i18n/{es,pt,pt-br}/.../commercial/contracts/` and
        `.../contract-dashboards.md`
      - any cross-links using "Contract" wording once Phase 4 adds them
- [x] **0.4 Shared-workspace availability — RESOLVED 2026-08-30.** The "shared, not-standard"
      framing traced back to the now-retired Marketplace repo and couldn't be re-verified from the
      WebApp (workspace configs are DB-seeded, not in git). Confirmed: **drop the framing entirely.**
      Document all 11 dashboard articles as ordinary product pages — no standard/shared distinction,
      no availability caveat. Revisit only if a verifiable source turns up later.
- [x] **0.5 Localisation policy — RESOLVED 2026-08-30.** Confirmed as stated: `product/` +
      `start-here/` get i18n copies; `build-and-extend/` (API/SDK reference) stays English-only.

---

## Phase 1 — Correctness (P0). Live defects, do these first.

**Revised 2026-08-30 in a fresh session, against the actual tree.** The items below correct several
things the original audit got wrong — see the note at the end of each item.

**Scope decision (2026-08-30): redirects are out of scope for this pass.** You said not to worry about
old links breaking — this overrides `AGENTS.md`'s normal "add a redirect when a page moves" rule for
the work in this plan. Old URLs listed below as needing a redirect will simply 404; nothing in Phase 1
adds `docusaurus.config.cjs` redirect entries unless you ask for it later. What was 1.6 is kept below
only as a record of what would 404, not as a to-do.

**Two different things are both called "Marketplace" in this codebase — don't confuse them.**
`~/Repos/Marketplace` (the git repo) is **stale**: last real commit `2023-07-19`, and its
`Standard`/`Non-standard` folder split — cited by the original audit for product facts (0.2, 0.4, the
coverage baseline) — should not be trusted; verify those against the WebApp instead. Separately, **"the
Marketplace export"** cited across ~20 pages in `docs/integrations/` (ziflow.md, vbd.md, WMS.md, etc.)
is a different, current artifact — JSON package exports dated last month, used correctly in those pages
to verify integration behavior. That one's fine as-is.

### 1.1 Duplicate article published twice — ✅ DONE

`docs/product/billing-and-costs/billing/client-staff-plan-summary.md` and
`docs/product/dashboards-and-reporting/client-staff-plan-summary.md` are byte-identical apart from
`id`, `sidebar_label` and `sidebar_position` (confirmed: bodies and both image references are
identical, differing only by a trailing newline). (Backlog 1.4.)

- Keep `dashboards-and-reporting/client-staff-plan-summary.md`.
- Delete `billing-and-costs/billing/client-staff-plan-summary.md` — **English file only.**
- No redirect (see scope decision above).

**Correction:** the original wording ("delete … and the three locale copies") was wrong and
contradicts 1.2 — the three locale files at that same path are the *only* copy of the purchase-order
article and must be kept. See 1.2.

**Resolved:** don't bother re-slugging the surviving page's `id` (`client-staff-dashboard`, mismatched
with its own filename) — since redirects are out of scope, there's no URL-continuity reason to touch
it either way. Leaving it as-is.

### 1.2 Localised purchase-order content published as the wrong article

In `41d8930`, `docs/university/bills/purchase-orders.md` was renamed to
`docs/product/billing-and-costs/billing/client-staff-plan-summary.md`. In **es, pt and pt-br** that
file contains a full translated article about **issuing purchase orders**, now published under the
Client Staff Plan Summary title and URL.

Verified: image sets share zero entries with the English page in all three locales (es/pt/pt-br
reference `/img/university/bills/...`; the English page references
`/img/university/dashboards/client-staff-summary-dashboard/...`).

- Move the three locale files to `docs/…/billing/purchase-orders.md` (once 1.4 creates the English
  source) and restore their real titles.
- Do **not** delete them. They are the only purchase-order documentation that exists.

**Correction:** the working tree currently has an uncommitted change that moves the *wrong* direction
— it changes the locale files' `id:` from `purchase-orders` to `client-staff-plan-summary`, which
republishes the purchase-order content under the Client Staff Plan Summary URL (the exact defect this
item exists to fix). **That uncommitted `id:` change on the three locale files must be reverted**,
not kept, before or as part of doing 1.2. (This is one of the six uncommitted `id:` groups mentioned
under 1.6 — the other five are fine to keep.)

### 1.3 Wrong title on a live page — ✅ DONE

`docs/administration/users/upload-a-picture.md` had
`title: Password recovery via "Forgot your password" option` and the same `sidebar_label`, copied
from its sibling. The sidebar rendered two identical entries. Body was correct (uploading a profile
picture). (Backlog 1.3.)

- Set `title: Upload a profile picture`, `sidebar_label: Profile picture`, added a `description`.
  Labels verified against `en.json` (`ChangeImage: "Change Image"`, `Profile: "Profile"`).
- `id` untouched — no URL change, no locale copies exist for this page.
- Verified in the rendered build: sidebar no longer shows a duplicate entry; old redirect
  (`/docs/to-review/upload-picture`) still resolves.
- Swept the rest of `docs/` for the same copy-paste-title defect: no other instance found. (Turned up
  an unrelated issue — seven SDK pages with `title: " "` — filed under 6.2, not part of Phase 1.)

### 1.4 English Purchase Orders documentation does not exist

Purchase Orders is menu order 10, backed by `PurchaseOrderController` + `PurchaseOrderItemController`.
The pre-restructure `university/bills/purchase-orders.md` already contained a duplicated Client Staff
Plan Summary body with `id: client-staff-dashboard` — so the English article has never existed.

- Write `docs/product/billing-and-costs/billing/purchase-orders.md` from the product, using the
  surviving es/pt translations as a structural reference only, not as a source of truth.
- Verify against `PurchaseOrderController` + `PurchaseOrderItemController` and against the WebApp
  route/menu order — **not** against the `~/Repos/Marketplace` git repo (stale, see above).

**Open question:** whether Docusaurus will build a locale file with no English counterpart at the
time 1.2 runs. Every locale file in the repo currently has an English counterpart, so this couldn't
be settled by inspection alone — do 1.4 before 1.2 and let the build confirm it.

### 1.5 `querying-data.md` opens with the wrong article — ✅ DONE

`docs/product/dashboards-and-reporting/querying-data.md` line 1 of the body reads *"This article
describes how the job maintenance is done in Skills Workflow when there is an interface with iSAP in
place."* — copied verbatim from `docs/integrations/isap/job-maintenance.md:11`, which already covers
iSAP correctly. The rest of the page (lines 19–106) is built entirely around the
`analytics/query/execute` endpoint, which you've said must not be documented publicly — it lets a
caller query the database directly in an uncontrolled way. `analytics/query/execute` and
`Analytics.DatamartJob` appear **nowhere else** in the published docs.

- **Deleted the page.** Nothing in it was worth keeping: the iSAP line duplicated content already
  correctly placed in the integration area, and the rest was the endpoint you want unpublished.
  `data-extraction-api.md` (341 lines + 71 `de-*` reference pages) already covers legitimate data
  export.
- No locale copies existed for this page.

**Correction:** the original wording ("move … or merge … or rewrite the opening") assumed the page's
API content was worth keeping. It isn't — the whole page was scoped around an endpoint you don't want
public, not just its opening line.

**Important, learned the hard way:** deleting this page broke the build. `docusaurus.config.cjs:413`
had an *existing* redirect (`/docs/to-review/querying%20data` → `.../querying data`) whose target no
longer existed. This is **not** the same situation as an old URL with no redirect quietly 404ing —
`@docusaurus/plugin-client-redirects` hard-validates every redirect's `to:` against real routes at
build time, so a dangling target fails the entire build, for every locale, not just a 404 for one
visitor. **Removed that redirect entry.** The scope decision above ("redirects are out of scope, old
URLs may 404") only covers *not adding new* redirects — it does not license leaving a *stale existing*
one pointing at nothing. Check for this same failure mode in 1.1's deletion and anywhere else a page
gets removed or moved: grep `docusaurus.config.cjs` for the old path first.

### 1.6 Redirects — OUT OF SCOPE, kept as a record only

**Correction: the original 6-row table was two unrelated columns, not 6 pairs** (e.g.
`/docs/api/client-api → /docs/glossary` is not a real redirect — both sides are independent old URLs
that 404 today). Re-derived by diffing every published URL before `41d8930` against the current tree:
372 → 351 URLs, 248 old URLs no longer published, 51 with no redirect. Per the scope decision above,
**none of this gets fixed** — old URLs are allowed to 404. Kept below only so a future session doesn't
re-derive it:

```
customization/design/{color,dashboard,design-mode,document-guidelines,forms,grid,home,lists,
  login,menu,notifications,template/template,ux-rules,workspace-documentation}   (moved to internal/)
documenting/{create-articles,mdx,style-guide}                                    (moved to internal/)
to-review/{ad related/{...},gdpr-compliance,mobile app/index.md,time-sheets}      (moved to internal/)
/docs/api/{client-api,custom-tables-api,data-extraction-api,integration-api,webhooks}
/docs/customization/annotations/index
/docs/customization/automations/{automations,getting-started}
/docs/customization/automations/recipes/{recipe-email-notification,recipe-export-to-csv}
/docs/customization/configuration/workflows/stage-types
/docs/customization/gantt/index
/docs/glossary
/docs/sdk/{document/document,service/service,ui/ui,utils/utils}
/docs/university/bills/client-staff-dashboard
/docs/university/dashboards/timesheet-aprobaciones-dashboard
/docs/university/expenses/{1-approve-expenses,create-expenses}
/docs/university/maintenance/import data/{clients,products,workflows}
/docs/university/projects management/{create-projects,gantt-chart}
```

Also: the working tree has uncommitted `id:` changes on six pages. **Five are fine to keep**:
`1-approve-expenses` → `approve-expenses`, `timesheet-aprobaciones-dashboard` →
`timesheet-approvals-dashboard`, Gantt `index` → `configuration`, plus two whitespace-only locale
normalisations. **The sixth — the locale `purchase-orders` → `client-staff-plan-summary` change —
must still be reverted**, per 1.2 above; that one isn't a URL-continuity question, it republishes the
wrong article regardless of redirect policy.

### 1.7 Published stubs — correction: not actually live

`docs/administration/importing-data/{clients,products,workflows}.md` all carry `draft: true` in
frontmatter, which Docusaurus strips from the production build entirely — confirmed no
`build/docs/.../{clients,products,workflows}` route exists. **They are not live.** (Backlog 1.5 is
stale on this point.)

- Leave `draft: true` as-is (do **not** switch to `unlisted: true` — that would make them worse, since
  `unlisted` still emits and indexes the page).
- Writing real content for these three is a content gap — Phase 5 territory, not a Phase 1 fix.
- Their pre-restructure URLs 404ing is covered by the redirects-out-of-scope decision above; no action.

**Phase 1 verification — ✅ PASSED (2026-08-30).** `npm run build` exits 0, all four locales, no
warnings. No duplicate `id` from the original 1.1 defect. The three locale purchase-order pages
resolve under `purchase-orders`. (Redirect *coverage* — adding new ones — is explicitly out of scope
for this pass; see the note under Phase 1. Dangling *existing* redirects are not: see 1.5's note.)

**Debugging note for future sessions:** while chasing a build failure, a `npx docusaurus build` run
gave a *different* error than `npm run build` had, and a stashed-clean-tree test gave yet another. The
cause was a stale `.docusaurus/` cache directory carrying over route data from before file
deletions/moves. **Run `rm -rf .docusaurus build` before trusting any build result while files are
being deleted, moved, or renamed** — otherwise you'll diagnose a cache artifact instead of the real
state of the tree.

**Phase 1 is complete.** All seven items (1.1–1.7) done or resolved as not applicable. Do not start
Phase 2 — Phase 0's terminology decisions (0.1–0.5) are still open.

---

## Phase 2 — Naming, numbering and terminology

### 2.1 Strip legacy numbering (50 English pages + 167 localised) — ✅ DONE

Removed the leading `N. ` from `sidebar_label` only, across 217 files (docs/ + i18n/), excluding
`learning-paths/` (which keeps its numbers per resolved 0.1). `sidebar_position` and `id` untouched.
Handled edge cases the plan didn't call out: labels with a double space after the number
(`"1.  Crear un Estimado"`) and no space at all (`"4.Dashboard de Utilização"`) — both stripped
correctly, trailing whitespace on the remainder left as-is.

Also fixed `docs/trust/operational continuity & incident response/other issues/Log4shell.md` →
`sidebar_label: Log4Shell` (casing, not just number removal — no i18n copy exists for this page).

Sanity check passed:
```
grep -rn "^sidebar_label: *[0-9]\+\." docs/ i18n/    # zero matches (only the 3 intentionally-excluded
                                                       # learning-paths files still carry numbers)
```
Build verified: exit 0, all four locales.

### 2.2 Add the 14 missing `_category_.json` files — ✅ DONE

Added all 14, each with `label` + `position` (no `link`, matching the sibling pattern in
`product/planning-and-scheduling/gantt/_category_.json` — a subfolder category, unlike the
top-level `billing-and-costs/_category_.json` cited in the original plan text, which needs a `link`
because it has its own generated-index route). Positions are a reasonable default reading order
(e.g. commercial: CRM=1, Estimates=2, Contracts=3, Rates=4) — not verified against any authoritative
source since none exists for "correct" sidebar ordering; flagged for you to reorder if you disagree.

**Also added the matching i18n copies** (14 × 3 locales = 42 more files) per `AGENTS.md`'s locale-
preservation rule, since `product/`+`administration/` are confirmed translated (0.5). Labels are
reasonable navigational translations drawn from terms already used by sibling pages in the same
folder where possible (e.g. "CRM" kept as-is, "Timesheets" kept as the English business term already
used in-folder) — not independently re-verified against `en.json`/`es.json`/`pt-pt.json`/`pt-br.json`
per string, since these are nav labels rather than product-behavior claims. Flag any you'd want
changed.

Build verified: category folders render their written label in the sidebar, not the raw folder name
(checked `product/commercial/` — CRM, Estimates, Contracts, Rates all render correctly).

### 2.3 Align `title` with `sidebar_label` — ✅ DONE for 15 of 24; 9 deferred to 2.4

Actual count was 24 mismatches (plan estimated 23), regenerated with the same `grep`. Split them:

**9 deferred to 2.4, not touched now:** every mismatch where the difference is exactly the pending
Dashboard→Workspace or Planned Hours→Planned Time rename — fixing alignment now and rewording again
moments later in 2.4 would be double work on the same lines. List: `planned-hours.md`,
`client-staff-plan-summary.md`, `burn-and-utilization.md`, `utilization-dashboard.md`,
`leaves-dashboard.md`, `project-burn-dashboard.md`, `contract-dashboards.md` (also hits the
Contracts→Fees rename), `missing-hours-and-approvals.md`, `client-dashboards.md`. Their i18n copies
are deferred too.

**15 resolved**, across English and every locale that had a mismatch (46 files total). No mechanical
rule decided which side won — each was a judgment call against `AGENTS.md`'s "make the title self-
contained" and "avoid old lesson-style verb-sentences" rules:
- Picked the clear, filename-matching noun-phrase over a vague one-word title (`notification-types.md`:
  "Types, categories and periodicity" → "Notification Types"; `environment-workspace.md`: "Environment"
  → "Environment Workspace").
- Picked the short, current-house-style noun phrase over an old University-style verb sentence
  (`credit-notes.md`: "Generate credit notes to clients" → "Credit Notes"; same pattern for
  `invoice-authorizations.md`, `expense-sheets.md`).
- Kept the fuller phrase where the short one would drop real information
  (`transferring-hours.md`: aligned on "Transfer hours between projects or jobs", not "Transfer hours").
- Where the only difference was an article or singular/plural (`create-a-project.md`,
  `commercial-clients.md`, `activities.md`, `client-contacts.md`, `commercial-products.md`), picked
  the more grammatically natural of the two.

Locale files got the same treatment using their *own* existing title/label pair — not a translation
of the English decision — except where a locale copy is a pre-existing, out-of-scope bug (pt/pt-br
`activities.md` has literal English "Create an activity"/"Create activity" today; I aligned the two
English strings for internal consistency but did not translate them — that's a separate gap).
One minor cross-locale inconsistency worth knowing about: `expense-sheets.md` aligned to "Expense
Sheets" in English (dropping "Create"), but the es locale's two existing strings both already said
"Crear..." ("Create..."), so es aligned to "Crear Hojas de Gastos" instead of matching English's
direction — forcing an exact match would have meant inventing new Spanish wording rather than picking
between what already existed.

List regenerated with:
```
grep -rn "^title:\|^sidebar_label:" docs/product --include="*.md*"
```

### 2.4 Terminology (verified against `ClientApp/assets/i18n/en.json`)

| Docs currently | UI label | Action |
|---|---|---|
| Dashboard | `Dashboard = 'Workspace'` | ✅ **DONE** |
| Planned Hours | `PlannedHours = 'Planned Time'` | Not started |
| Timesheets / Timesheet / Time sheet / Time Sheets | `Timesheets = 'Time Sheets'` | Not started |
| Contracts | `Contracts = 'Fees'` (en, es only) | Category/2 articles not started; `contract-dashboards.md` done (see below) |
| Briefing | `Brief = 'Description'`; `BriefingTemplate = 'Briefing Template'` | Keep "Briefs & Requests"; use "Description Template" for the maintenance module, which already matches — no action needed |

Terminology that is already correct and must **not** be changed: Client, Project, Job, Deliverable,
Estimate, Rate Card, Expense Sheet, Executor, Resource, Leave, Supplier, Request, Feed, Annotation,
Workspace, Maintenance.

#### Dashboard → Workspace — ✅ DONE (2026-08-30)

Renamed across all 11 dashboard articles + the category, in **frontmatter and body prose**, across all
four locales (44 files) — not just titles, since leaving body text saying "Dashboard" while the title
said "Workspace" would recreate exactly the inconsistency 2.3 exists to fix. Mechanical word
substitution only (`Dashboard→Workspace`, `Dashboards→Workspaces`, case-preserving); `id` fields and
`/img/...` asset paths were explicitly excluded from the substitution so no URLs or images broke.

Verified the replacement word first: `en.json`, `es.json`, `pt-pt.json` and `pt-br.json` **all** map
`"Dashboard": "Workspace"` — the product itself uses the literal English word "Workspace" in every
locale, so no translation was invented; the substitution is identical across locales.

`contract-dashboards.md` got both pending renames at once (Dashboard→Workspace **and** the Contract→
Fee call from 0.3): now `Fee Workspace` (en/es) / `Contrato Workspace` (pt/pt-br). Its **body** prose
still says "contract" throughout — left alone, per 0.3's note that this needs an actual content pass
verified against `ContractController.cs`, not a mechanical rename.

New titles chosen (title = sidebar_label in every case, resolving 2.3's 9 deferred pages at the same
time): Burn and Utilization Workspace, Client Workspace, Client Staff Plan Summary Workspace, Fee
Workspace, Environment Workspace (already correct), FTE Workspace, Leaves Workspace, Leaves My
Department Workspace, Missing Time Hours and Approvals Workspace, Project Burn Workspace, Utilization
Workspace.

**Two unrelated pre-existing translation bugs found and fixed while verifying this folder** — flagging
clearly since neither is a terminology or naming issue, both are content correctness:
- `i18n/{pt,pt-br}/.../fte-dashboard.md` had "FTE" mistranslated to "Contratos" in the title,
  sidebar_label, and two sentences — but *not* consistently (the body correctly said "FTE" elsewhere,
  and legitimate uses of "Contratado"/"Contratos" translating "Hired"/"Contracted" were untouched).
  pt-br additionally had a stray "## Contratos" heading absent from both pt and the English source —
  removed. Fixed by restoring "FTE" only where the English source says "FTE", verified line by line.
- `i18n/{pt,pt-br}/.../leaves-dashboard.md` (now "Ausências Workspace") had "Leaves" mistranslated to
  "Folhas" ("sheets of paper") in the title, sidebar_label, and the instruction telling the reader
  which menu item to click — while the body correctly used "licenças" throughout. Verified the correct
  term against `pt-pt.json`/`pt-br.json`: `"Leaves": "Ausências"`. Fixed to match.

**Also fixed in passing:** an ES `leaves-dashboard.md` title/label mismatch where sidebar_label had
been left in English ("Leaves Workspace") while title correctly said "Permisos" — aligned on the
correctly-translated "Permisos Workspace".

A script bug during the body-substitution pass briefly corrupted 12 image paths in
`i18n/{es,pt,pt-br}/.../burn-and-utilization.md` (turned real `/img/university/dashboards/...` asset
paths into non-existent `/img/university/workspaces/...` ones) — caught by a full repo-wide "does
every referenced image exist on disk" sweep before considering this done, and fixed. Root cause not
fully diagnosed (isolated to this one file, out of 44 touched) but the fix is verified correct and the
sweep found nothing else broken anywhere else in the repo.

Category label renamed too: "Dashboards & Reporting" → "Workspaces & Reporting" (en), "Workspaces e
Informes" (es), "Workspaces e Relatórios" (pt/pt-br).

Build verified clean (exit 0, all four locales) after every sub-step of this rename, not just at the
end.

#### Contracts → Fees — ✅ DONE (2026-08-30), as a real content fix, not a mechanical rename

Went further than checking the API layer: also checked the WebApp UI directly (menu order 3, real
`contracts` route/module, `AppRoutesTitle.Contracts` as the live translate-pipeline key) and searched
for a "Proposals" concept — **none exists anywhere in the product**, confirming the old article title
"Contracts and Proposals" named something with no verified meaning. Full findings under 0.3.

- Moved and renamed: `docs/product/commercial/contracts/` → `docs/product/commercial/fees/`;
  `contracts-and-proposals.md` → `fees.md` (`id: fees`); `projects-on-a-contract.md` →
  `projects-on-a-fee.md` (`id: projects-on-a-fee`). Same move across all three i18n copies. Category
  label: "Fees" (en/es, matching the verified UI), "Contratos" (pt/pt-br, already correct — no change
  needed there beyond the folder move).
- Removed the two now-dangling redirects this created (`create-contracts-proposals`,
  `contracts-projects` old ids) from `docusaurus.config.cjs` — per the 1.5 lesson, a stale redirect
  target fails the whole build, it doesn't just 404.
- **`fees.md` rewritten, not just relabelled.** The old body conflated Fee and Estimate — its "Create
  Estimate" and "Estimate - Manage Quotes" sections, and both their screenshots, were verified (by
  actually viewing the images) to be about the Estimate object, not the Fee, and already duplicated
  `create-an-estimate.md`. Removed that content. Replaced with an overview verified against
  `Contract.cs` (client + Price Table association, `Estimates`/`Projects` collections),
  `contract-document-data.ts` (fields: Name, Owner, StartDate, EndDate, Stage; sub-tabs Info/
  Estimates/Projects/Files/Feed/History/User Fields) and `system-roles-dictionary.ts`
  (ContractRead/Write/Create/Navigate). Opens with the bridging sentence 0.3 called for. Reused the
  one screenshot that's actually correct (`university-contracts-projects-1.png`, showing a real "Fee"
  document named "WebSite Retainer Fee" with its Feed/Info/Projects/Estimates tabs) with an accurate
  caption instead of the old wrong one.
- **`projects-on-a-fee.md` corrected, not rewritten** — its steps were independently verified against
  the actual screenshots (the "Fee" dropdown field, the "Planned Time" tab name) and found
  substantively accurate, just mislabelled. Fixed: the four image captions, which all said "Estimate
  creation" regardless of what the screenshot actually showed; the description field, which was a
  broken sentence fragment ("Click the check icon e submit post."); "Contract" → "Fee" in prose;
  "Planned Hours" → "Planned Time" (a live screenshot happened to show this tab's real name,
  independently confirming that separate rename below); "Dashboard" → "Workspace".
- All three locale versions translated to match the new EN structure and content exactly (not just
  the old divergent translations patched) — es used "Fee"/"Fees" (verified: `es.json` also shows the
  English word untranslated), pt/pt-br used "Contrato" (verified, no English-loanword bridge needed
  there since the pt UI never shows "Fee").
- **Deferred, flagged, not done**: `contract-dashboards.md`'s body still uses "contract" throughout
  (its title is already fixed to "Fee Workspace" — see the Dashboard→Workspace section above). Body
  prose there doesn't reduce to a mechanical word-swap (e.g. "contracted hours" has no clean "Fee"
  equivalent) — needs an actual rewrite pass, not attempted here.
- Verified with a full, clean `npm run build` (exit 0, completed through llms.txt generation) plus a
  manual sweep of all 8 touched files for valid frontmatter, resolvable images, and resolvable
  internal links. The build environment became resource-constrained after many consecutive builds
  this session (OOM kills, transient filesystem errors) — the one clean pass plus the manual sweep are
  the evidence this rests on; **re-run a full build once the environment has cooled down**, before
  the next commit.

#### Planned Hours → Planned Time — ✅ DONE (2026-08-30)

Fixed everywhere it's a genuine UI-label reference: `planned-hours.md` (title/label/tab reference,
all 4 locales — es "Tiempo Planificado", pt "Tempo Planeado", pt-br "Tempo Planejado", all verified
against `es.json`/`pt-pt.json`/`pt-br.json`), the "Planned Hours" tab bullet in `create-a-project.md`
(all 4 locales — also fixed a pt/pt-br line that said "associado a Fees" where pt/pt-br should say
"Contrato", a separate pre-existing error caught in passing), the `#### Planned Hours & Workloads`
section heading in `administration/workflows/transitions.md`, and the learning-path link text in
`learning-paths/end-user.md`.

**Deliberately left untouched**: the literal system/API identifiers in `workflows/action-types.md`
and `de-projectsplannedtime.md` (`CreatePlannedHoursFromEstimateItemDetails`,
`PlannedHoursDeliverableTotal`, etc.) — real code-level values, not UI prose, must not be renamed per
`AGENTS.md`'s System Values rule. Also left the "Planned Hours" column mentions in
`burn-and-utilization.md` untouched — that's a workspace grid column, which may or may not be bound to
the same `PlannedHours` i18n key as the Project tab; not verified either way, flagging rather than
guessing.

#### Timesheets standardisation — ✅ DONE (2026-08-30)

Standardised the 5 articles in `product/time/timesheets/` + the category, across all 4 locales (24
files). Verified the target term is genuinely different per locale before touching anything:
`en.json`/`pt-pt.json`/`pt-br.json` all keep the literal English "Time Sheets"/"Time Sheet"
untranslated; only `es.json` actually translates it ("Hojas de tiempo"/"Hoja de tiempo"). So EN, PT
and PT-BR standardised on English "Time Sheets"/"Time Sheet"; ES standardised on "Hojas de
Tiempo"/"Hoja de Tiempo" — not the same word everywhere, each verified against its own locale file.

**Deliberately left untouched**: `integrations/vbs-timesheet.md` and
`integrations/gsp-dynamic-timesheet-importer.md` — third-party product names, not Skills Workflow's
own terminology. The `de-timesheets*` API reference pages under `build-and-extend/api/data-extraction/`
— literal table/endpoint names (`DE-TimeSheets`, `TimeSheetsCount`), system values that must stay
verbatim per `AGENTS.md`.

**Not done**: a body-prose pass through these 5 articles for stray "Timesheet"/"timesheets" mentions
outside the frontmatter — only title/label/category were touched. Flagging as a follow-up, same
spirit as the deferred `contract-dashboards.md` body.

### 2.5 Bad slugs — ✅ DONE (2026-08-30)

`administration/users/password-policy.md`: `id: "password policy"` → `password-policy` (matches its
own filename and its folder's existing kebab-case convention — `create-user`, `edit-profile`,
`forgot-your-password`). `build-and-extend/workspaces/definition.md`: `id: "Edit Workspace"` →
`EditWorkspace` (matches this folder's own convention of PascalCase-no-space ids — `EditLayout`,
`Roles` — rather than switching the whole folder to kebab-case for just one file).

No redirect added, per the standing scope decision — instead removed the two existing redirects that
pointed at these bad-slug URLs (`docusaurus.config.cjs`), since re-slugging would have left them
dangling and failed the build, same lesson as 1.5.

Found and fixed two internal links that were still using the broken pre-fix URLs, caught by
Docusaurus's own broken-link check on the first build attempt after the id change:
`learning-paths/administrator.md` (linked to `.../password policy` with a literal space) and
`learning-paths/consultant.md` (linked to `.../Edit%20Workspace`). No locale copies exist for either
changed file.

Verified: full clean `npm run build`, exit 0, all four locales; confirmed in the built output that
both pages now publish at clean URLs (`.../password-policy`, `.../EditWorkspace`) with no encoded
space anywhere.

**Phase 2 verification — ✅ PASSED (2026-08-30). Phase 2 is complete: all of 2.1–2.5 done.** Build
passes clean (exit 0, all four locales). The 2.1 grep returns nothing except the three intentionally-
excluded `learning-paths/` files. Every product category renders a written label in the sidebar.

---

## Phase 3 — Structural moves and merges

| Move | From | To | Why |
|---|---|---|---|
| Chrome DevTools profiling | `product/dashboards-and-reporting/measuring-performance.md` | support/troubleshooting area, or archive | Not product documentation |
| ~~Analytics query API~~ | ~~`product/dashboards-and-reporting/querying-data.md`~~ | — | **Resolved differently in 1.5**: deleted outright, not moved — the page was scoped around an endpoint that must not be public, not a relocatable reference. Nothing left to do here. |
| Description Templates | `product/briefing-and-requests/description-templates.md` | `administration/` | Body is a Maintenance task |
| Merge | `planning-and-scheduling/resourcing/resource-scheduler.md` **+** `resource-allocation.md` | one article | Same screen, two names, two styles |
| Merge | `people/teams/assign-an-executor.md` (72 words) | into a Teams and assignments article | A step, not an article |
| Merge | `planning-and-scheduling/gantt/configuration.md` **+** `using-the-gantt.md` | one Gantt article | Two pages, one feature (see backlog 4.1) |
| Delete | `integrations/cloud-storage/box_old.md` + its `sidebars.cjs` entry | — | Superseded by `box.md` |
| Rename | `integrations/adnet.md` title `AdnNet` | `Adnet` | Integrator is `SkillsWorkflow.Integrators/Adnet` |

Every move needs a redirect entry and the matching `i18n/<locale>/.../` copy moved to the same new
path.

**Phase 3 — ✅ DONE (2026-08-31), except the Adnet rename.**

- **Chrome DevTools profiling** → moved to `trust/service quality & change management/`, beside
  `support-model-sla.md`, which is where the support-facing material already lives. Retitled from the
  question-shaped "How can I measure Performance?" to "Recording a browser performance profile" and
  given a description. Its existing redirect was retargeted.
- **Description Templates** → moved to `administration/` in all four locales, `sidebar_position`
  adjusted to fit its new siblings, existing redirect retargeted.
- **Gantt merge** → `configuration.md` + `using-the-gantt.md` merged into a single
  `planning-and-scheduling/gantt.md` (`id: gantt`) in all four locales, and the now-single-page
  `gantt/` folder flattened away with its `_category_.json`. Heading levels normalised (the old page
  used `###` throughout, the new one `##`), the two pages' links to each other removed, and the
  stranded lead sentence moved to the top. Locale merges reused each locale's **existing translated
  text** rather than re-translating.
- **Resourcing merge** → `resource-allocation.md` merged into `resource-scheduler.md`. Note: the
  feature matrix it contributed describes a **Team / My / Daily Scheduler** split that **could not be
  verified** — no such components exist in the WebApp (`app/deprecated/schedulers/` holds
  `resources/` and `reservation/` only, and no `TeamScheduler`/`MyScheduler`/`DailyScheduler` symbol
  appears anywhere). The matrix was already published, so merging it neither adds nor removes an
  unverified claim, but **it should be re-checked against a live tenant before anyone relies on it.**
- **assign-an-executor merge** → folded into `teams-and-groups.md` as a "how to assign" section, in
  all four locales. That page already defined the Executor group, so the 72-word page was a step, not
  an article.
- **box_old deleted** → plus its `sidebars.cjs` entry and its two `excludeRoutes`/sitemap entries.
- **Adnet rename — NOT DONE, deliberately.** The plan justified it with "Integrator is
  `SkillsWorkflow.Integrators/Adnet`", but **no Adnet integrator exists in `SkillsWorkflow.Main`, and
  no Adnet file exists in the 2026-08-11 integrations export either.** The docs consistently say
  "AdnNet" today. Renaming on an unverifiable claim would be inventing a product name, so it was left
  alone. Resolve by checking the live integration, then rename in one pass across `adnet.md`,
  `integrations/index.md` and `AdSolutions.md`.

Three dangling redirects and two broken internal links were produced by these moves and fixed in the
same pass — the redirect plugin fails the whole build on a dangling target, so they surface
immediately.

---

## Phase 4 — Make the tree navigable

### 4.1 Cross-links — ✅ DONE (2026-08-31)

Added `## Related articles` to every product page that lacked one — **178 files** across the four
locales. Rather than hand-writing 178 sections, a registry was built from the pages themselves, so
each link carries the **target's own real title in that locale** (pt links read "Tempo Planeado", es
"Tiempo Planificado") instead of an English label or an invented translation.

Links use **absolute doc paths**, not relative `.md`. That is not cosmetic: a locale with no
translation of a page falls back to the English source file, and a relative link then resolves
against the wrong directory and fails the build. Two real cases were caught this way — the `pt`
resourcing page, and the localized learning-path index, whose `slug: /university` moves the
resolution base out from under relative links.

Also corrected: `fees/fees.md` publishes as `/commercial/fees`, not `/commercial/fees/fees` —
Docusaurus treats `<folder>/<foldername>.md` as the folder index, same as `index.md`.

The spine used:

- Projects ↔ Jobs ↔ Gantt ↔ Planned time ↔ Time sheets
- Estimates ↔ Rate cards ↔ Fees ↔ Invoice authorizations ↔ Credit notes
- Requests ↔ Projects ↔ Briefing templates
- Every dashboard article ↔ the capability it reports on

### 4.2 Area index pages — ✅ DONE (2026-08-31)

All 11 product categories had `link: {type: 'generated-index'}` — an auto-listing with no prose.
Each now has a written `index.md` (`sidebar_label: Overview`, `sidebar_position: 0`) saying what the
area covers and who it is for, in **all four locales — 44 pages**. The `generated-index` link was
removed from each `_category_.json` so Docusaurus picks up `index.md` as the category page, which
keeps the same URL.

Content is derived from what each folder actually contains, so it describes the real tree rather than
an aspirational one. Site page count went 344 → 355.

### 4.3 Documentation home — RESOLVED 2026-08-30

Not rewritten, removed. The site had two documentation landing pages: `/` (the React homepage in
`src/pages/index.js`) and `/docs` (`docs/start-here/index.md`, the old *"Wanna learn more?"* page in
the University voice). `/` is now the single canonical entry point:

- `docs/start-here/index.md` and its three locale copies are deleted, along with the only asset they
  used, `static/img/homefeat01.svg`.
- `/docs` redirects to `/` through `@docusaurus/plugin-client-redirects`. Only the exact path; the
  `/docs/...` namespace is unchanged.
- The **Docs** navbar item points at `/` and carries an `activeBaseRegex` so it still highlights
  while reading `/docs/...`, minus the `university`, `learning-paths` and `trust` subtrees, which
  belong to their own navbar items.
- The hero carries a real search field. There is still exactly one search index.

#### Hero search — rebuilt 2026-08-30 (it did not work)

The first version was a *button* dressed as a field: clicking it called `.focus()` on the navbar's
`#search_input_react`. Verified in a real browser (production build, headless Chrome over CDP) that
this was broken from the reader's point of view — mechanically it focused the navbar input and the
index returned hits, but:

- you clicked a 544px field at x=184, y=473 and your text appeared in a 200px field at x=1220, y=14;
- the results panel opened at the **top-right of the window**, ~1000px from where you clicked;
- the field you actually clicked stayed empty, still showing its placeholder.

So it read as "the search box does nothing." Rebuilt as a real `<input id="hero_search_input">` with
its own DocSearch instance. The old code's stated reason for not doing this — that a second instance
"would fight the first over the same selector" — was wrong: only the plugin's `<SearchBar>` component
hard-codes `id="search_input_react"`; its `DocSearch` class takes `inputSelector` as an argument, so
a second instance bound to a different input is not a collision. Both read the same published index,
so there is still one index and one set of results.

Three layout defects found and fixed while verifying, each confirmed by measuring the live DOM rather
than by eye:

- The dropdown was clipped: `.hero` had `overflow: hidden` to contain its decorative gradient wash.
  Moved that wash into its own `.heroWash` clipping box so the header no longer clips its children,
  leaving the gradient geometry untouched.
- The input collapsed to 173px: autocomplete.js wraps the input in a span at runtime, and that span
  needed the flex sizing.
- The dropdown was 451px (the input's width) instead of 544px (the field's). Cause: autocomplete.js
  writes `position: relative` as an **inline style** on its wrapper span, making the span the
  dropdown's containing block; a stylesheet rule cannot beat an inline style, so this one genuinely
  needs `position: static !important`.

Verified in a real browser after the fix: typing lands in the hero field, the navbar field stays
empty, 5 results render in a panel anchored under the hero field, and clicking a result navigates
(`/` → `/docs/product/planning-and-scheduling/gantt/configuration`). Checked in **dark and light
mode**, at **1440px and 390px**, and on the **pt, es and pt-br** homepages — all return results with
no console errors. Confirmed no regression to the navbar search on `/docs/...` pages, where the hero
input correctly does not exist.

Two pre-existing issues found and deliberately **not** changed: a React hydration warning (#418) that
occurs on `/docs/...` pages and *not* on the homepage, so it is unrelated to this work; and the fact
that no homepage string is translated in any locale — `i18n/*/code.json` holds only Docusaurus's own
`theme.*` keys, so the headline, buttons and search placeholder all fall back to English. That is a
separate localisation task, not a regression from this change.

### 4.4 Learning paths — ✅ DONE (2026-08-31)

- The three localized `learning-paths/index.md` files still carried the old University landing page
  ("Bienvenido a la Universidad" / "Bem vindo à Universidade"). All three rewritten to match the
  English structure — the same three-route table, translated per locale.
- The **three route pages themselves are not translated**; the locales fall back to the English
  source. That is a deliberate scope call, not an oversight: the routes are almost entirely links to
  canonical pages, and translating them would duplicate titles that already exist in each locale's own
  pages. Flagging so nobody reads the English fallback as a bug.
- Every link re-verified after Phases 2 and 3 moved things. Three needed fixing: `assign-executor`
  (merged away), `gantt/gantt-chart` (merged into `/gantt`, also linked from the homepage's quick
  links), and `Edit%20Workspace` (re-slugged in 2.5).

---

## Phase 5 — Write the missing articles

Ordered by confirmed user impact. Each is a menu-visible module with no English page.

| Order | Article | Verify against |
|---|---|---|
| 1 | **Purchase Orders** | `PurchaseOrderController`, `PurchaseOrderItemController`; menu order 10; es/pt translations |
| 2 | **Files** | `FilesModule` + `FilesGuard`, `FileSystemV3Controller`; menu order 21 |
| 3 | **Using workspaces** | `workspace-engine/`, `WorkspacesGuard`, `AppRoutes.Dashboards = "workspaces"` |
| 4 | **Reports** | `ReportsModule` + `ReportsGuard`, `ReportV3Controller`; menu order 20 |
| 5 | **Bills** | `BillController`, `BillItemController`; menu order 13 |
| 6 | **Supplier Invoices** | `SupplierInvoiceV3Controller`; menu order 14 |
| 7 | **Supplier Notes** | `SupplierNoteController`; menu order 12 |
| 8 | **Price Tables** | `PriceTableV3Controller`; menu order 7; `PriceTables = 'Price Tables'` |

Second tier, lower confidence — confirm exposure first: Search (`SearchV3Controller`, top menu),
Planned Costs (`PlannedCostsController`), Job checklists (`JobItemController`,
`AppRoutes.JobItems = "checklist"`), Notification preferences
(`NotificationPreferencesV3Controller`).

**Do not write** without validating exposure: Chat (gated on `enableChatV2`), Budgets, Tenders,
Kanban, Gamification, Attendance, Closing periods. These are backlog items 3.1, 3.6, 3.7, 3.8 and
remain **Needs Validation**, not confirmed gaps.

**Phase 5 — ✅ DONE (2026-08-31). All 8 written.**

| # | Article | Verified against |
|---|---|---|
| 1 | Purchase Orders | done 2026-08-30 (see 1.4) |
| 2 | Files | `FilesGuard` → `SystemRoles.fileSystemObject` = **FilesRead/Write/Create/Navigate/Delete**; route `files`; menu order 21 |
| 3 | Using workspaces | `AppRoutes.Dashboards = "workspaces"`; `workspace-engine/`; `availableWorkspaces` on the document-data files |
| 4 | Reports | `ReportsGuard` → `SystemRoles.report.navigate`; route `reports`; menu order 20; `Reports = 'Reports'` |
| 5 | Bills | `bill-document-data.ts` menu order 13; fields Name / Date / **Management Date** / **Due** / Stage; `BillRead/Write/Create/Navigate` |
| 6 | Supplier Invoices | menu order 14; emission + due date + Stage; `SupplierInvoiceRead/Write/Create/Navigate` |
| 7 | Supplier Notes | menu order 12; emission + due + **Entry Date** + Stage; `SupplierNoteRead/Write/Create/Navigate` |
| 8 | Price Tables | menu order 7; Name / Company / Currency / **Start Date** / End Date / Stage; `PriceTableRead/Write/Create/Navigate` |

Every field name and permission above was read out of the WebApp — `*-document-data.ts` for the form
fields and menu order, `system-roles-dictionary.ts` for the permissions, `en.json` for the display
labels (`ManagementDate = 'Management Date'`, `EntryDate = 'Entry Date'`, `BeginDate = 'Start Date'`).
Nothing was inferred from the module name.

**Deliberately kept short.** Each page states what the document is, its verified fields, its
permissions and its real relationships — and stops. The screen-by-screen detail (grid columns, the
order of work) lives in DB-seeded workspace configuration that is not in any git repo, so writing it
would have meant inventing. These are honest stubs that will not mislead, not finished lessons.

**English only.** Per decision 0.5 `product/` is translated, so these eight need translating before
the locales are complete — the locales currently fall back to English. Flagged, not done.

---

## Phase 6 — Governance

### 6.1 `AGENTS.md` is out of date and actively harmful — ✅ DONE (2026-08-31)

Rewrote the whole "Documentation Architecture and Article Design" section around the real tree:
a table of the eight areas and who each is for, plus an explicit line that
`docs/customization/`, `docs/university/`, `docs/api/` and `docs/sdk/` **no longer exist**.

The University subsection is replaced by the learning-paths model: **product pages are standalone and
unordered, and a title never carries a number**; sequence lives only in `learning-paths/`, which is
now the one place a numbered `sidebar_label` is allowed. Without that inversion the next agent to read
the file would have recreated exactly the numbering Phase 2.1 removed.

Three hard-won rules from this session were added so they are not rediscovered:

- **A URL comes from `id`, not the filename** — and `<folder>/<foldername>.md` and
  `<folder>/index.md` both publish as the folder itself.
- **Grep `docusaurus.config.cjs` before deleting or re-slugging a page.** A redirect left pointing at
  a page you removed fails the *entire build in every locale*; it does not degrade to a 404. This bit
  three times in this session.
- **`rm -rf .docusaurus build` before trusting a build while files are moving** — a stale cache
  reports errors from pages that no longer exist and sends you after the wrong bug.

Also corrected a rule that was wrong as written: "**Do not use `draft: true`**" only holds for pages
referenced from `sidebars.cjs` (the Integrations tree). For a page in an *autogenerated* sidebar,
`draft` is the better choice — the page is never emitted, so it cannot be indexed or crawled, whereas
`unlisted` still emits and indexes it.

#### Original finding


It still describes `docs/customization/`, `docs/university/`, `docs/api/`, `docs/sdk/` as the tree,
and states: *"University is an ordered curriculum. Pages are numbered lessons inside a track
(`sidebar_label: "5. Gantt Chart"`, `sidebar_position: 5`)."* Any agent following it will recreate
exactly the numbering Phase 2 removes.

Rewrite the "Documentation Architecture and Article Design" section around the new tree, and replace
the University subsection with the learning-paths model: canonical pages are unordered and
standalone; sequence lives only in `learning-paths/`.

### 6.2 Frontmatter hygiene — ✅ DONE for the scoped areas (2026-08-31)

Actual count was 42, not 45. **`product/`, `administration/` and `start-here/` are now complete** —
10 descriptions added, each written from the page's own opening prose rather than invented.

Also fixed here, carried over from the Phase 1 sweep: **15 SDK pages had `title: " "`** — a literal
space. Each now takes its own `sidebar_label` as its title. Four of them needed a second pass because
their `description` text itself contains `---`, which breaks naive frontmatter splitting; worth
knowing before writing any script that parses frontmatter in this repo.

**32 pages still have no description**, all in `build-and-extend/` (24) and `trust/` (8). Out of the
scope the plan set, left deliberately.

### 6.3 Trust archive — ✅ DONE (2026-08-31)

The split already existed physically — the 28 RCA reports sit in their own
`availability incidents/` folder, apart from the policy pages. What was missing was that
**none of the `trust/` folders had a `_category_.json` at all**, so the sidebar fell back to raw
folder names — the same defect Phase 2.2 fixed for `product/` and `administration/`.

All six now have a written label and a position, and the archive is named for what it is:
**"Availability Incident Archive"** (position 90) and **"Other Incident Reports"** (91), pushed below
the policy pages (positions 2–5) so the policies stay findable instead of being buried under 28 dated
incident reports.

---

## Coverage baseline

Re-measure after Phase 5 against the same denominators.

```
Main navigation modules      13/20   (65%)   menu-side-new.component.ts documentTypes
Standard Configuration       ~12/95  (~13%)  Marketplace/Standard/Cloud/Configuration
Cross-cutting platform         8/15  (53%)   routed features + top menu
Shared workspace catalogue    11/65  (17%)   Marketplace/Non-standard/Shared/Cloud/Menu
                                             (low by design — mostly tenant-specific)
```

---

## Suggested commit sequence

One phase per PR keeps each reviewable and each redirect verifiable.

1. `docs: fix duplicated and mis-mapped articles` — Phase 1
2. `docs: remove legacy lesson numbering and name every category` — Phase 2
3. `docs: move misfiled articles and merge duplicated coverage` — Phase 3
4. `docs: link the product tree together` — Phase 4
5. `docs: document <module>` — one per article, Phase 5
6. `docs: update repository guidance to the new structure` — Phase 6

Run `npm run build` before every commit. It catches broken image links, invalid redirect targets and
duplicate ids, and it builds all four locales.

---

## Phase 7 — Navigation and shell (2026-08-31)

Not in the original plan; came out of walking the built site as a reader, with Playwright.

### 7.1 The navbar did not navigate

Measured, not guessed:

- **"Docs" was a Home button wearing the wrong label.** It pointed at `/`. From the homepage clicking
  it did *nothing*; from any documentation page it **ejected the reader back to the marketing
  homepage**, losing their place. The logo already did that job.
- **Three of the five trees were unreachable from the navbar.** From inside a doc page the bar offered
  Home, Learning, Trust and an external API link — **Administration, Build & Extend and Integrations
  had no navbar route at all**, only the sidebar, and only after scrolling past a fully expanded
  Product tree.
- **"Docs vs Learning" is not a distinction a reader can act on.** Learning paths *are* docs.

The navbar now names the site's own trees, so it answers "what is in here?" and agrees with the
sidebar instead of contradicting it:

```
[logo]  How to   Administration   Build & Extend   Integrations
                        Get started   Trust   API   [locale] [theme] [search]
```

Left is where you read; right is cross-cutting. There is no "Docs" item — the logo is the one Home.
Active state follows the tree being read, which also replaced the previous exclusion-regex gymnastics.

### 7.2 Naming, for the reader rather than the team

- **"Product" → "How to".** "Product" reads as the platform team describing its own product. The tree
  is overwhelmingly task pages ("Create a Project", "Approving Time Sheets"), so "How to" describes
  what is actually in there. The sidebar category was renamed to match — a navbar and a sidebar
  disagreeing about the same tree is worse than either name alone.
- **"Learning paths" → "Get started".** Considered "How to?" here first and rejected it: behind this
  item are three *ordered 20-step routes*, not task lookup, and the answer to "how do I approve a time
  sheet" lives in the other tree. Labelling it "How to?" would have pulled task-seekers away from
  where the answer is. "How to" ended up on the tree that genuinely holds task answers, and this one
  promises what it delivers: a guided start.
- The landing pages were retitled to match their nav labels, in all four locales
  (`Get started` / `Empezar` / `Começar`).
- **The `/university` slug is gone.** The routes publish at `/docs/learning-paths`, so the label and
  the URL finally say the same thing.
- Fixed in passing: `docs/trust/index.md` was titled **"Home"** — the same leftover the learning-paths
  index had. Now "Trust", with a description naming its audience.

### 7.3 All redirects removed

Per your instruction — assume nobody holds a link to this documentation. **All 199 redirect entries
and the `@docusaurus/plugin-client-redirects` block are deleted**, and the now-unused dependency is
dropped from `package.json`. Old URLs 404.

This also retires the trap that bit three times during Phases 1–3 (a redirect left pointing at a
removed page fails the whole build). The `AGENTS.md` note about it is kept as history, but there is no
redirect map left to break.

### 7.4 The icons were invisible in every build

`.env` was only loaded when `NODE_ENV !== 'production'`, and `docusaurus build` runs as production —
so `FONTAWESOME_KIT_ID` was empty, the kit `<script>` was never emitted, and **every `fal fa-*` icon
on the site rendered blank**. Not a localhost artifact: `netlify.toml` sets only `NODE_VERSION`, so
unless the variable is set in the Netlify UI, production had the same blank icons.

`loadLocalEnv()` is now called unconditionally. It never overwrites a variable the real environment
already set, so the deploy host is unaffected. Verified by tracing the network in a real browser: kit
200, kit CSS 200, webfonts 200, icons drawn.

**Verified:** 24 navigation checks (every item resolves, correct highlight per tree, fits at 1440 /
1280 / 1024px, every tree reachable from a deep page) plus the 47-check suite — **71/71 passing**.

---

## Remaining work

Everything below was found during execution and deliberately **not** done, each for a stated reason.

**Needs a person to verify, then a small change**

1. **Adnet vs AdnNet** (Phase 3). The rename could not be verified — no Adnet integrator exists in
   `SkillsWorkflow.Main` and no Adnet file is in the 2026-08-11 integrations export. Check the live
   integration, then rename across `adnet.md`, `integrations/index.md` and `AdSolutions.md`.
2. **The Team / My / Daily Scheduler feature matrix** in `resource-scheduler.md` describes three
   schedulers that do not appear anywhere in the WebApp. It was already published, so merging it
   changed nothing, but it should be checked against a live tenant.
3. **`contract-dashboards.md` body** still says "contract" throughout; only its title became
   "Fee Workspace". The prose does not reduce to a word-swap ("contracted hours" has no clean Fee
   equivalent) and needs a real rewrite.
4. **`create-estimate` is a duplicate `id`**, used by both `crm/estimates-from-crm.md` and
   `estimates/create-an-estimate.md`. It builds, because an `id` only sets the last URL segment, but
   two pages answering to the same name is confusing and one should be re-slugged.

**Translation backlog**

5. The **eight Phase 5 articles are English-only**; the locales fall back to English. Per decision 0.5
   `product/` is translated, so these need translating for the locales to be complete.
6. **No homepage string is translated in any locale** — `i18n/*/code.json` holds only Docusaurus's own
   `theme.*` keys, so the headline, buttons and search placeholder fall back to English.
7. The **three learning-path route pages** are English-only (deliberate — see 4.4).

**Resolved since, by Phase 7**

- Redirect coverage is no longer an open question: every redirect is gone by decision, and old URLs
  404 by design.

**Lower priority**

8. **32 pages still lack a `description`**: 24 in `build-and-extend/`, 8 in `trust/`. Outside 6.2's
   stated scope.
9. A **React hydration warning (#418)** fires on `/docs/...` pages but not on the homepage. Predates
   this work; unrelated to any change here.
10. The three `importing-data` stubs (`clients`, `products`, `workflows`) still have `draft: true` and
    one-word bodies. Correctly excluded from the build; they need real content, which is Phase 5-style
    work nobody has scoped.
