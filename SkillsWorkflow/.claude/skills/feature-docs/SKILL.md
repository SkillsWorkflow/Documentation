---
name: feature-docs
description: Document a feature that has shipped (or is about to) - from its ticket or PR to a merged-ready documentation PR in all four locales, with verified labels, real screenshots, a passing build and the link back on the ticket. Use when a feature, change or fix needs to be documented, or when asked to update the docs for a ticket or PR.
---

# Feature docs

The procedure that takes a shipped feature to a documentation PR. The rules a page must follow are in `AGENTS.md`
(source-verified content, the tree, page structure, prose style, images, locales): read it first; this skill is the
order of work around them. Paths are relative to `SkillsWorkflow/`; the git root is the folder above it, so `git add`
paths carry the `SkillsWorkflow/` prefix.

## 1. Understand what shipped

- Start from the ticket and the PR(s): what changes for the user, on which screen, for whom, behind which setting
  or permission. A ticket is the trigger, not the scope: the page documents the feature as the reader meets it.
- Verify every behaviour, label, setting and limit in the source (SkillsWorkflow.Main: the WebApp and
  `SkillsWorkflow.Api.Core`), and see it working on a dev tenant. What could not be verified does not go in the page;
  it goes in the PR summary as unverified.
- Labels come from `SkillsWorkflow.WebApp/src/SkillsWorkflow.WebApp/ClientApp/assets/i18n/<locale>.json` in Main, one
  per locale. Write exactly what each locale shows, including a label that is still in English in another locale.

## 2. Find where it belongs

- Search the docs for the feature by name and by the screen it lives on (`grep -ril "<name>" docs i18n`). If an article
  covers it, update that article, including anything around it that has gone stale.
- A new page needs a reason you can state (no article covers it, or the existing one has another audience); write
  it in the PR summary. Pick the area by audience (the tree in `AGENTS.md`).
- Read at least three neighbouring pages in the target section and match their shape.
- The URL comes from the frontmatter `id`, not the file name: read it before linking.

## 3. Write it

1. English first, in `docs/...`: frontmatter (`title`, `description`, `sidebar_label`, `sidebar_position` when the
   category is ordered), a self-contained opening, the section order from `AGENTS.md`, and `## Related articles`
   with absolute `/docs/...` links. Link to it from the pages a reader would come from.
2. Then the full equivalents in `i18n/pt/`, `i18n/pt-br/` and `i18n/es/` under
   `docusaurus-plugin-content-docs/current/` at the same path: same structure, steps, links and images, each with
   its own locale's labels. No summaries.
3. Re-read the English against "Prose Style" in `AGENTS.md` and cut: no justifying a rule with its mechanism, no
   purpose clauses, no identical bullet shapes, no em dash as a connector, no "this page covers".
4. Integration pages need their entry in `sidebars.cjs`; a moved or renamed page needs a redirect.

## 4. Screenshots

- Real screenshots from a dev tenant, with realistic data (an agency's client, campaign, deliverables), never
  customer names or real people. Images are shared by all locales and live in `static/img/<area>/...`.
- Capture at 1x (Playwright `scale: "css"`), cropped to the part the step talks about, under ~200 KB.
- Markdown alt is the CSS selector (`img-box-shadow`, `img-box-shadow-popup`, `img-box-shadow-sm`), with a
  `<figcaption>` directly below. Without the final screenshot yet: a placeholder whose file name says it is one.

## 5. Build and look at it

```bash
rm -rf .docusaurus build     # only after moving, renaming or deleting pages
npm run build                # all four locales, a few minutes; a broken link or image fails it
cd build && python3 -m http.server 8080
```
Open the page in each locale (`/docs/...`, `/pt/docs/...`, `/pt-br/docs/...`, `/es/docs/...`) and check headings,
links, images and captions. Images load lazily: an image below the fold in a full-page screenshot looks empty
without being broken; check `img.complete`.

## 6. PR

- Branch `docs/<topic>` from `origin/master`; commit message `docs(<area>): <what the reader gets>`.
- `gh pr create` with a summary: the page(s) and their URLs, in which locales; the ticket, work item and product PR
  it documents (and whether it must be live before that release, e.g. when the product links to it); new page or
  updated page and why; what was verified where; anything unverified.
- Once merged, put the page URL on the ticket (and in the release note, if the feature has one).
