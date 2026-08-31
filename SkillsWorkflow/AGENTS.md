# Repo Guardrails

## Documentation Must Be Source-Verified

- Do not invent product behavior, configuration paths, permissions, labels, limitations, integrations, API fields, automation behavior, or setup steps.
- Before adding or changing product documentation, verify the behavior against the relevant source repo or another authoritative artifact. Depending on the feature, check the WebApp, API, integrations, automation-workflow, seeded configuration, generated reference data, or existing verified documentation.
- If the implementation cannot be found or the behavior is ambiguous, write that the source could not be verified in the working notes or PR summary. Do not publish guesses as documentation.
- Keep the published article focused on the intended audience. End-user/support pages should describe what users can do and how support enables/configures it; avoid implementation internals unless the page is explicitly a technical reference.
- Document integration-specific behavior in the integration page, not in generic product pages. Generic pages may link to integration docs, but should not duplicate integration setup or integration-specific controls.
- Preserve all supported locales. When adding or changing a docs page, update `docs/` and the matching `i18n/<locale>/docusaurus-plugin-content-docs/current/` pages when translations exist.
- Localized copies are full equivalents of the English source: keep the same verified content, section structure, steps, rules, links, and images. Translate the wording naturally, but do not summarize, merge, omit, or add behavior in one locale. An exception requires a verified locale-specific UI or product difference.
- Use the repo's image style convention: Markdown image alt values are CSS selectors such as `img-box-shadow`, `img-box-shadow-popup`, or `img-box-shadow-sm`. Add a `<figcaption>...</figcaption>` directly below every image.
- Product and support documentation should include images where they help the reader confirm the screen, setting, or workflow being described.
- When the final screenshot is not available while drafting, add a clearly named placeholder image under `static/img/...` and reference it in the article with the intended caption. The placeholder must make it obvious what screenshot must replace it later.
- Every referenced local image must exist under `static/img/...`; Docusaurus fails the build on broken Markdown image links.
- Run `npm run build` after documentation changes that affect pages, navigation, images, or locales.

## Documentation Architecture and Article Design

### Start From the Existing Article

- Before creating a page, search the docs for the feature by name and by the screen it lives in. If an article already covers it, update that article. A second page for the same feature splits the reader's path and leaves the page they actually open stale.
- Read at least three neighbouring pages in the target section before writing. Each section has a house style: heading shape, person, bullet length, how often a screenshot appears. Those pages are the specification for it.
- A ticket or a release is the trigger for documentation, not its scope. Document the feature as the reader meets it, not the change that prompted the work. When surrounding content in the article has gone stale, correct it in the same change.
- Creating a new page needs a reason you can state: no article covers this, or the existing article has a different audience. Record that reason in the PR summary.

Choose the article type before writing. A page must have one primary audience and one clear purpose, so it can be shared directly with a user or retrieved accurately by search and future LLM-based support.

### The tree

The documentation is organised by what the reader is trying to do, not by which team wrote it:

| Area | For | Holds |
|---|---|---|
| `docs/start-here/` | Anyone arriving | Glossary, roles and profiles, releases, favourites |
| `docs/product/` | People doing the work | Every capability the platform ships, by area |
| `docs/administration/` | Administrators | Users, workflows, calendars, custom tables, data imports |
| `docs/build-and-extend/` | Consultants and developers | Workspaces, panels, automations, SDK, API |
| `docs/integrations/` | Customers and the consultant setting one up | One page per integration |
| `docs/ai/` | The relevant user or administrator | Verified AI capabilities |
| `docs/trust/` | Customers, IT and procurement | Security, privacy, availability, incident response, service quality |
| `docs/learning-paths/` | Readers who want a route | Ordered routes that link to the pages above |

`docs/customization/`, `docs/university/`, `docs/api/` and `docs/sdk/` no longer exist. Anything that
still refers to them is stale.

### Product pages

- `docs/product/` is the product and support layer. Write for the person doing the work, and for the
  consultant configuring it for a client.
- **Pages are standalone and unordered.** A page is not a lesson in a sequence, and its title must not
  carry a number. Ordering within a category comes from `sidebar_position`; the reader's route through
  several pages lives in `docs/learning-paths/`, never in the page titles.
- Each area has an `index.md` saying what the area covers and who it is for. Each category has a
  `_category_.json` with a written `label` and a `position` — never let the sidebar fall back to a raw
  folder name.
- A feature page explains what the feature does, when it is available, how the reader works with it,
  and the verified rules or limitations that affect that work. Cover the feature end to end, not
  whichever part changed most recently.
- Put feature-specific activation and configuration in the feature article under `## Configuration`.
  Do not create a separate configuration page merely to repeat how to enable one feature.
- Put configuration that applies to several independent features in the relevant shared area under
  `docs/administration/`, then link to it from each affected feature.
- Use this section order when the information exists: `## Overview` or an introductory paragraph,
  `## Availability` or `## Prerequisites`, `## How to use`, `## Rules and behaviour`,
  `## Configuration`, and `## Related articles`.
- Every product page ends with `## Related articles`. Link with absolute doc paths
  (`/docs/product/...`), not relative `.md` links: a locale that has no translation of a page falls
  back to the English file, and relative links resolve against the wrong directory when it does.
- Do not add empty sections. Do not expose implementation details, internal uncertainty, source-code
  notes, or team-facing investigation notes in a customer-facing article.

### Learning paths

- `docs/learning-paths/` holds ordered routes through the documentation — one for the person using the
  platform, one for the administrator, one for the consultant.
- **A route links to canonical pages. It never restates their content.** Nothing is written twice, so
  no page can be current on one route and stale on another.
- Numbering belongs here and nowhere else. These are the only pages whose `sidebar_label` may carry a
  leading number.

### Integrations

- `docs/integrations/` is the product and support layer for integrations. Write for the customer and
  the consultant setting it up.
- The integration's `index.md` is the canonical, shareable page. It should cover the integration's
  purpose, systems and data involved, prerequisites, what the agency must provide, configuration
  steps, operational rules, and verified limitations.
- Explain system ownership and data direction whenever the implementation establishes them. This
  prevents users from changing data in the wrong system.
- Integration-specific controls, setup, and behavior belong only in that integration's page. A generic
  product article can link to it but must not duplicate it.
- Add `reference.md` only when there is a real implementation-facing interface specification to
  document, such as fields, file formats, mappings, endpoints, or templates. Keep that page separate
  from the customer-facing product page.

### Build and extend

- `docs/build-and-extend/` holds the developer-facing reference: workspaces and panels, automations,
  the SDK and the API. Technical detail is allowed only when verified from the implemented contract or
  from generated reference data.
- State authentication, inputs, outputs, errors, limits, and examples only when their exact values are
  known. Keep examples clearly hypothetical unless they are verified and runnable.
- Keep customer-facing activation instructions out of these pages; link to the relevant product or
  integration article instead.

### AI and Trust

- `docs/ai/` explains verified AI capabilities, their intended use, availability, and configuration for
  the relevant user or administrator. Put developer integration contracts in `docs/build-and-extend/`
  instead.
- `docs/trust/` is for security, privacy, availability, incident response, and service-quality
  information for customers, IT teams, and procurement. Do not duplicate product how-to guidance there.
- Incident reports live in the dated archive under
  `trust/operational continuity & incident response/availability incidents/`, kept separate from the
  policy pages so the policies stay findable.

### Article Quality and Retrieval Rules

- Make the title, description, and first paragraph self-contained: a reader opening the page from a support link must immediately understand what it covers.
- Use the product's verified labels consistently in titles, headings, steps, image captions, and cross-links. Do not use multiple names for the same screen, setting, or feature.
- Prefer one canonical page for each behavior or setup process. Link to that page from related articles instead of copying the same instructions, rules, or limitations into several places.
- Use descriptive `##` headings that identify the task, rule, or concept in that section. This supports scanning, site search, and future LLM retrieval.
- Keep one task or concept per section. State prerequisites before the steps that depend on them, and state important consequences or restrictions beside the relevant action.
- New published articles must include frontmatter with a clear `title`, `description`, and `sidebar_label`. Add `sidebar_position` when the enclosing category relies on its order.
- Before publishing, verify the page has the correct category, all required locale copies, valid internal links, existing image assets, captions for images, and a successful build.

## System Values

- Never invent system values, enum members, status codes, labels, IDs, or configuration options.
- When documentation references platform data such as stage types, action types, statuses, or field names, copy the value from an authoritative source in the repo or from verified system output.
- If the exact values are not available, say that explicitly and point to the source of truth instead of filling gaps with examples that could be mistaken for real values.

## Authoritative Sources

- Prefer source artifacts such as files under `data/de-sources/`, generated artifacts under `data/generated/`, and existing docs that quote those artifacts faithfully.
- For workflow stage types specifically, use `/Skill.Module/DatabaseUpdate/Setup.cs` or [`data/reference/workflow-state-types.json`](./data/reference/workflow-state-types.json) for the seeded system enum members.
- Use `DE-Stages` for the environment-specific `TypeId` and `Type` values actually present on stages.
- Treat `WorkflowStateType.Status` as the authoritative integer mapping for stage types. In the seed implementation, `Status = (int) WorkflowStateTypeEnum` and `Name = WorkflowStateTypeEnum.ToString()`.
- Do not invent a separate `Number` field for workflow stage types unless the implementation changes and that field is added to the code.
- Do not replace real workflow stage types with broad categories like `Initial`, `Active`, `Closed`, or `On Hold`.

## Writing Rule

- Examples are allowed only when they are clearly framed as hypothetical and cannot be confused with actual system values.
- For any system-defined or tenant-defined value list, do not provide example members unless they were verified from source data first.

## Prose Style

Documentation is instructional writing. Tell the reader what to do and what will happen. The tells below are what make a page read as machine-written, and they share one habit: explaining and justifying instead of instructing.

**Do not justify a rule with its mechanism.** The reader needs the rule, not the reason the software behaves that way. Internal cause belongs in the commit message, not the article.

- Avoid: "Because a bulk action reloads the Gantt when it closes, it cannot run while there are unsaved changes."
- Prefer: "Save your changes before running a bulk action."

**Do not write every bullet in the same syntactic shape.** A list where each item is `**Bolded claim.** Explanation, so consequence.` is the clearest signature of generated text. Vary the construction, or drop the bolded lead-ins and write plain sentences.

**Cut purpose and contrast clauses.** `, so ...`, `so that ...`, `instead of ...`, `rather than ...`, `not X but Y`. State the behaviour and stop. If half a sentence explains why the behaviour is desirable, delete that half.

- Avoid: "The button is not shown at all rather than shown disabled."
- Prefer: "The button is hidden."

**Do not answer objections nobody raised.** Sentences defending a design ("so it cannot be pressed with no effect", "which reduces confusion") are arguing, not documenting.

**Name the setting.** Abstract paraphrase used to avoid committing to a name reads as evasion. If the exact name is not verified, verify it or say plainly that it could not be verified. Do not write around it.

- Avoid: "The maximum number of jobs a single bulk action may cover is configurable on the component."
- Prefer the real setting name, or state that it was not verified.

**Vary section shape.** If every section is one intro sentence, one numbered list, one explanatory paragraph and one captioned image, the page reads as a template being filled. Some behaviour needs three steps and no picture.

**Avoid the em dash as a default connector**, and avoid meta-commentary about the page itself ("This page covers...", "In this section we will..."). Say the thing.

**Prefer the shorter draft.** If a rewrite is not noticeably shorter than the original, the padding was moved rather than removed.

## Integrations: Product Pages and Technical References

- `docs/integrations/` is the **product layer**: what an integration takes care of, what the agency must provide, what is configurable. Written for the customer, not the implementer.
- Interface specifications — file naming conventions, templates, field-by-field mappings — go in a `reference.md` beside the product page, as `docs/integrations/<name>/reference.md`. The product page stays at `index.md` so the integration keeps a single, shareable URL.
- Never put credentials, tokens, connection strings, hostnames or customer/tenant names in these pages. Name the **setting**, and state that the agency supplies the value.

## Adding or Hiding a Page

The Integrations sidebar in `sidebars.cjs` is an **explicit list**, not autogenerated. This is deliberate: it groups integrations by category (ERP, HR, Time, and so on) without moving files into category folders, which would have changed every published URL.

The consequence: **a new page does not appear until it is added to `sidebars.cjs`.**

To hide a page that is not ready, or whose content is not trusted:

1. Add `unlisted: true` to its frontmatter **if the page is referenced from `sidebars.cjs`** — that is,
   anything in the Integrations tree. Draft pages are removed from the production build, so an explicit
   `sidebars.cjs` reference to a `draft: true` page fails the build.
   For a page in an **autogenerated** sidebar (`product/`, `administration/`, `build-and-extend/`,
   `trust/`), `draft: true` is the better choice: the page is never emitted at all, so it cannot be
   reached, indexed or crawled. `unlisted` still emits and indexes it.
2. Add its route to `excludeRoutes` in the `docusaurus-lunr-search` plugin options in `docusaurus.config.cjs`, using a `**/docs/...` pattern so every locale is covered.

Step 2 is not optional. The search plugin is third-party and **does not honour `unlisted`** — it indexes the built HTML regardless of the `noindex` tag, so a page hidden from the sidebar is still findable through site search without it.

An unlisted page may stay referenced in `sidebars.cjs`; Docusaurus filters it out of the rendered navigation. Publishing it later is then two deletions — the `unlisted` line and the `excludeRoutes` entry — with no sidebar edit.

## Renaming or Moving a Page

Published URLs are shared with customers. When a page moves, add an entry to `redirects` in the
`@docusaurus/plugin-client-redirects` options in `docusaurus.config.cjs`, and move the
`i18n/<locale>/.../` copies to the matching new path so the localized builds keep working.

**A URL comes from frontmatter `id`, not from the filename.** `create-a-project.md` publishes as
`/create-projects`. Always read the `id` before assuming a URL. Two further cases to know:
`<folder>/<foldername>.md` and `<folder>/index.md` both publish as the folder itself — `fees/fees.md`
is `/commercial/fees`, not `/commercial/fees/fees`.

**Before deleting or re-slugging a page, grep `docusaurus.config.cjs` for its old URL.** The redirect
plugin validates every `to:` against a real route at build time, so a redirect left pointing at a page
you removed **fails the whole build, in every locale** — it does not degrade to a 404. Retarget it at
the surviving page, or delete the entry.

**Clear the cache before trusting a build while files are moving.** Run `rm -rf .docusaurus build`
after any delete, move or rename. A stale `.docusaurus/` carries the old route data and will report an
error from a page that no longer exists, sending you after the wrong bug.
