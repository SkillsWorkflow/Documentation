---
name: automation-integration-docs
description: Document an IntegrationWorkflow automation (a JSON file in the Automations repo) as an integration page in this docs repo - product page, reference page, sidebar and index entries, four locales, build and PR. Use when asked to add, document or "install" a new automation/integration in the Documentation repo.
---

# Automation integration docs

Turns an automation from the Automations repo into a documentation PR. The generic rules are in `AGENTS.md`
(source verification, tree, integration layout, prose style, locales) and the generic procedure is in
`.claude/skills/feature-docs/SKILL.md`; this skill covers what is specific to automations. Paths are relative
to `SkillsWorkflow/`; the git root is the folder above, so `git add` paths carry the `SkillsWorkflow/` prefix.
The default branch is `master`, not `main`.

## 1. Read the automation, not the ticket

The automation file is the source of truth, `<Repos>/SkillsWorkflow.Services.IntegrationWorkflow.Automations/<Name>/<Name> - (Automation vN).json`.
Take the facts from it and nothing else:

- `name`, `version`, `active`, and `scheduler` (`periodicity`, `unit`, `startDateUtc`). The time is UTC; state it as
  UTC and convert only when the conversion is certain.
- The actions in order, and for each `Case` the status values it branches on and what each branch returns.
- Request body fields read from `#HttpRequest`, which are the parameters of a manual run.
- External URLs (`isApiCall: false`) and Skills Workflow endpoints (`isApiCall: true`).
- Configuration keys, named queries and webhooks it uses. If none, say none.
- Which fields are matched, skipped or overwritten, read from templates and mappings, not guessed.

Run history and behaviour come from the execution log of a real run (`GET /api/v3/logger?operationName=<name>`
in the environment), never from memory. Labels shown in the UI come from the WebApp i18n files in Main, one per
locale; a field name from the API (`IsoCode`) is not a UI label. If a label is not verified, name the API field or
say it was not verified. Do not invent it.

## 2. Where it goes

- One page per integration at `docs/integrations/<kebab-name>/index.md` (the customer-facing product page) and
  `docs/integrations/<kebab-name>/reference.md` (components, flow, endpoints, mappings, configuration). Flat
  `<Name>.md` files are older pages; do not copy that shape.
- Frontmatter: `id` (the URL comes from it), `title`, `description` (a full sentence, not truncated),
  `sidebar_label`.
- Add the page to `sidebars.cjs` in the right category (explicit list; a page not listed there does not appear),
  and a row to the matching table in `docs/integrations/index.md` with the direction (In, Out, Both) and an
  absolute `/docs/integrations/<id>` link.
- Read three neighbouring integration pages first and match their section shape.

## 3. Product page rules (what the first attempt got wrong)

- **No hostnames, URLs, tokens or tenant/customer names** in the product page. Name the setting and say the agency
  supplies the value. Endpoints and URLs belong in `reference.md`, and a customer name never goes in either.
- **No "Open Questions" or internal uncertainty** in a customer-facing page. Unverified points go in the PR summary.
- End with `## Related articles` using absolute `/docs/...` links.
- Sections: purpose and data direction, what the agency must provide, how it runs (schedule, manual run
  parameters), rules (which records are updated or skipped), errors and where to check them, limitations.
- Prose: instruct, do not justify. No em dash as connector, no `**Bold claim.** explanation` bullets all in one
  shape, no `so that` / `rather than` / `instead of` clauses, no "this page covers". Prefer the shorter draft.
- Examples are fine only when framed as hypothetical. A value list (currency codes, stage types) needs verified
  members or none.

## 4. Locales

Write English, then full equivalents in `i18n/pt/`, `i18n/pt-br/` and `i18n/es/` under
`docusaurus-plugin-content-docs/current/integrations/...` at the same path: same structure, links and
code blocks, no summaries. Keep identifiers, field names and JSON as they are.

## 5. Build

```bash
npm ci                    # node_modules go stale: docusaurus-lunr-search and core versions were missing once
rm -rf .docusaurus build  # after any move/rename
npm run build             # all locales; broken links and images fail it (onBrokenLinks: throw)
git status                # the build runs `npm run releases` and rewrites src/data/releases.json
```

`src/data/releases.json` is a build side effect. Do not commit it with the page. A change to `sidebars.cjs` or
`index.md` made by an IDE or another process while you work is the user's; re-read before editing.

## 6. Commit and PR

- Branch `docs/<topic>` or the ticket branch, from `origin/master`.
- Commits by type: `docs(integrations): add <Name> integration` (page, reference, index), `docs(integrations):
  add <Name> to the sidebar`, locales in their own commit if large. No `Co-Authored-By` or other
  attribution line on commits or PRs.
- Push and PR only when asked. PR summary: page URLs and locales, the automation file and version documented,
  what was verified against a real run, and anything unverified.
