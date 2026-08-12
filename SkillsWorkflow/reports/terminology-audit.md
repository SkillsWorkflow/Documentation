# Terminology Audit — Skills Workflow Documentation

**Internal working document.** Not published — `reports/` is outside `docs/`, so this
is not built into the site.

Scope: all 350 published pages (`docs/`, excluding `to-review/` and `_partials/`).
Counts are prose occurrences with frontmatter and fenced code blocks stripped.

---

## Why this matters

Two audiences depend on consistent terms, and one of them can't ask for clarification:

1. **People.** A user reading "stage" on one page and "status" on the next has to work
   out whether those are the same thing.
2. **Retrieval / LLMs.** Search is largely lexical. When one word carries two unrelated
   meanings, a retriever returns pages for both senses and the model blends them into a
   single confident, wrong answer.

The second is why **Finding 1 below is the priority** — it is the only case that can
actively produce a wrong answer rather than merely a confusing read.

---

## Findings, by severity

### 1. `Deliverable` — one word, three meanings — **HIGH**

| Sense | Where | Evidence |
| --- | --- | --- |
| **(a)** A line on an Estimate — a service sold to the client | `university/estimates`, `university/crm` | *"**Deliverables** — these are the services sold to the client (each line can represent actual deliverables, i.e. projects/jobs; a monthly fee…)"* |
| **(b)** The Job entity in the data model | `api/`, `integrations/` | `Skill.Module.BusinessObjects.Deliverable` (9 refs) while the REST endpoint is `/api/jobs` |
| **(c)** A document type listed *separately from* Job | `university/home/favorites.md` | *"Open any document (Project, Job, Deliverable, etc.)"* |

Totals: `job` 758 across 94 files; `deliverable` 175 across 47 files.

**Why it's dangerous:** a user asking *"how do I create a deliverable"* is asking about
sense (a). A retriever will also surface sense (b) — job creation, stage transitions,
webhook payloads — and the two procedures have nothing to do with each other.

**Recommended resolution**
- Sense (a) → keep **Deliverable**; it is the established UI term on an Estimate.
- Sense (b) → user-facing text says **Job**. Where the API name must appear, write it as
  the API name (`Deliverable` entity / `Skill.Module.BusinessObjects.Deliverable`), not as
  a synonym in prose.
- Sense (c) → **verify with product.** If the UI really has a Deliverable document type
  distinct from Job, it needs its own definition. If not, `favorites.md` should say
  "Project, Job, Estimate, etc."

**Open question for product:** is (c) real, or loose writing? This audit cannot tell.

---

### 2. `Table Rate` vs `Rate Card` — same thing, two names — **MEDIUM**

The docs equate them explicitly, in a parenthetical:

> *"Used only if you want to use a different rate that the one from the chosen Rate Card (table rate)."*

| Term | Uses | Files |
| --- | --- | --- |
| rate card | 52 | 12 |
| table rate | 13 | 7 |

**Recommended resolution:** **Rate Card** is canonical. `Table Rate` appears to be a field
label inside the Estimate screen — if the UI label genuinely reads "Table Rate", keep it
when naming that specific field, and say so once in the glossary. Otherwise align to Rate
Card everywhere.

**Open question for product:** does the UI field actually read "Table Rate"?

---

### 3. `Stage` vs `Status` vs `Workflow State` — **MEDIUM**

| Term | Uses | Concentrated in |
| --- | --- | --- |
| stage | 535 | integrations 283, customization 169 |
| status | 155 | integrations 89, university 25 |
| transition | 140 | customization 54, integrations 50 |
| workflow state | 35 | **api 21** |

**Assessment:** `stage` is clearly canonical. `workflow state` is the API/data-model name
(`workflowState`, `/api/jobs/{id}/workflowstate`) — that is structural, not drift, and
should be documented rather than removed. `transition` is a **different concept** (the
move between stages, and the permission to make it) and is used correctly.

`status` is the genuine drift, and it is ambiguous: sometimes it means the workflow stage,
sometimes an unrelated state (e.g. an integration run's success/failure).

**Recommended resolution:** align workflow-stage uses of `status` → **Stage**. Leave
`status` where it means something else, and define both in the glossary.

---

### 4. `Customer` — two distinct senses, mostly fine — **LOW**

| Sense | Where | Uses |
| --- | --- | --- |
| Skills Workflow's own customers (the agencies) | `trust/` | 47 |
| Loosely, the agency's client | `university/` | 21 |

The `trust/` usage is correct and should stay — those are incident and compliance
documents addressed to Skills Workflow's customers.

**Recommended resolution:** in `university/`, align `customer` → **Client**, so the word
`customer` unambiguously means "an agency that uses Skills Workflow".

---

### 5. `Typology` — used constantly, never defined — **MEDIUM**

168 uses across 42 files (university 80, integrations 47, api 37) — and no definition
anywhere. The closest is a parenthetical aside:

> *"The person's typology (i.e. position) will appear automatically on the Typology column."*

`Typology Group` is a separate, related concept (a grouping of typologies) and is also
undefined. `Role` (125 uses) is a **different** thing again — access/security roles.

**Recommended resolution:** no renaming needed; the term is used consistently. It needs a
**definition**, plus an explicit note that Typology ≠ Role.

---

### 6. Terms that look like conflicts but are not

Recorded so nobody "fixes" them later:

| Pair | Verdict |
| --- | --- |
| `Estimate` vs `Quote` | **Distinct.** Quote is a *tab within* an Estimate, holding Deliverables, Third Party, Expenses and Resources. Not a synonym. |
| `Commercial Client` vs `Billing Client` | **Distinct entities.** Separate API endpoints, linked per company. |
| `User` vs `Employee` | **Distinct entities.** `/api/users` and `/api/employees` are separate. |
| `Bill` vs `Invoice` | **Distinct.** Bill is the Skills Workflow document; Invoice is what the ERP issues from it. |
| `Request` vs `Brief` | **Distinct entities.** `Request` and `DocumentBrief` both exist in the data model. |
| `Company` / `Division` / `Department` | **Distinct levels** of the org hierarchy. |

---

## Recommended sequence

1. **Publish the glossary** (`docs/glossary.md`) — done alongside this audit. It resolves
   findings 1, 3 and 5 for readers and for retrieval immediately, without touching any
   existing page.
2. **Resolve the two open questions** with product: is there a Deliverable document type
   distinct from Job? Does the UI field read "Table Rate"?
3. **Alignment sweep**, using the glossary as the spec — `status`→`Stage`,
   `customer`→`Client` in `university/`, `table rate`→`Rate Card`. Mechanical, but touches
   many files, so worth doing as its own reviewable change.

Step 1 delivers most of the benefit. Step 3 is polish, and is safe to defer.

---

## Reproducing this audit

The counts came from ad-hoc scripts, not committed tooling. To re-run, count prose
occurrences per `docs/` subtree with frontmatter and fenced code blocks stripped, for the
term groups listed above.
