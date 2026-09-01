# Translation Glossary — Skills Workflow Documentation

**Internal working document.** Not published — `reports/` is outside `docs/`, so this is not
built into the site.

Every translation batch (see the plan for "Translate every missing article") is pointed at
this file. It exists because product nouns move between locales in ways nobody would guess,
and because guessing is exactly how the drift in `reports/i18n-inventory.md` — 13 `pt` pages
saying "Job", 9 saying the Brazilian "Atividade" inside the European Portuguese tree —
happened in the first place.

## Where these come from

Two sources, in priority order:

1. **The WebApp's own interface**, `SkillsWorkflow.Main/SkillsWorkflow.WebApp/src/
   SkillsWorkflow.WebApp/ClientApp/assets/i18n/{en,es,pt-br,pt-pt}.json`. If a reader sees a
   noun on screen in their own language, the article has to use the same word — a translation
   that says "Trabalho" for something the product itself calls "Entrega" sends the reader
   looking for a screen that isn't there.
2. **Existing translated pages**, where the WebApp has no entry for the term (mostly the AI
   section, which is newer than the WebApp's translation bundle). `docs/ai/ai-actions.md` and
   `docs/ai/agents/*.md` were translated in commit `019ae97d` (#830) with the same care this
   glossary is meant to generalize — where the WebApp is silent, that commit is the precedent.

A term with no entry here and no match in either source: ask, don't guess. Add it to this file
once decided, so the next batch doesn't have to ask again.

## Core product nouns

| English | pt-PT | pt-BR | es | Source |
| --- | --- | --- | --- | --- |
| Job / Jobs | Entrega / Entregas | Atividade / Atividades | Job / Jobs | WebApp `Job`/`Jobs` |
| Project / Projects | Projeto / Projetos | Projeto / Projetos | Proyecto / Proyectos | WebApp |
| Request / Requests | Brief / Briefs | Brief / Briefs | Brief / Briefs | WebApp `Request`/`Requests` |
| Deliverable | Entregável | Entregável | Entregable | WebApp `ContractDeliverable` |
| Estimate / Estimates | Orçamento / Orçamentos | Proposta / Propostas | Presupuesto / Presupuestos | WebApp |
| Fee / Fees | Contrato / Contratos | Contrato / Contratos | Fee / Fees | WebApp `Contract`/`Contracts` |
| Client / Clients | Cliente / Clientes | Cliente / Clientes | Cliente / Clientes | WebApp |
| Company / Companies | Empresa / Empresas | Empresa / Empresas | Compañía / Compañías | WebApp |
| Team / Teams | Equipa / Equipas | Equipe / Equipes | Equipo / Equipos | WebApp |
| Group / Groups | Grupo / Grupos | Grupo / Grupos | Grupo / Grupos | WebApp |
| Department / Departments | Departamento / Departamentos | Departamento / Departamentos | Departamento / Departamentos | WebApp |
| User / Users | Utilizador / Utilizadores | Usuário / Usuários | Usuario / Usuarios | WebApp |
| Profile / Profiles | Perfil / Perfis | Perfil / Perfis | Perfil / Perfiles | WebApp |
| Stage / Stages | Etapa / Etapas | Etapa / Etapas | Etapa / Etapas | WebApp |
| Task / Tasks | Tarefa / Tarefas | Tarefa / Tarefas | Tarea / Tareas | WebApp |
| Approval | Aprovação | Aprovação | Aprobación | WebApp |
| Leave / Leaves | Ausência / Ausências | Ausência / Ausências | Permiso / Permisos | WebApp |
| Calendar / Calendars | Calendário / Calendários | Calendário / Calendários | Calendario / Calendarios | WebApp |
| Files | Ficheiros | Arquivos | Archivos | WebApp |
| Annotation / Annotations | Anotação / Anotações | Anotação / Anotações | Anotación / Anotaciones | WebApp |
| Feed | Feed | Feed | Feed | WebApp — unchanged |
| Notification / Notifications | Notificação / Notificações | Notificação / Notificações | Notificación / Notificaciones | WebApp |
| Panel / Panels | Painel / Painéis | Painel / Painéis | Panel / Paneles | WebApp |
| Custom Table / Custom Tables | Tabela Personalizada / Tabelas Personalizadas | Tabela Personalizada / Tabelas Personalizadas | Tabla Personalizada / Tablas Personalizadas | WebApp (AI chat tool strings) |
| Automation / Automations | Automatização / Automatizações | Automatização / Automatizações | Automatización / Automatizaciones | WebApp |
| Purchase Order / Orders | Nota de Encomenda / Notas de Encomenda | Nota de Encomenda / Ordem de Compra | Orden de Compra / Ordenes de Compra | WebApp |
| Supplier / Suppliers | Fornecedor / Fornecedores | Fornecedor / Fornecedores | Proveedor / Proveedores | WebApp |
| Supplier Invoice / Invoices | Fatura de Fornecedor / Faturas de Fornecedor | Fatura de Fornecedor / Faturas de Fornecedor | Factura de Proveedor / Facturas de Proveedor | WebApp |
| Supplier Note / Notes | Nota de Fornecedor / Notas de Fornecedor | Nota de Fornecedor / Notas de Fornecedor | Nota de Proveedor / Notas de Proveedor | WebApp |
| Timesheet / Timesheets *(note the asymmetry — es translates it, pt does not)* | Time Sheet / Time Sheets | Time Sheet / Time Sheets | Hoja de tiempo / Hojas de tiempo | WebApp |
| Report / Reports | Relatório / Relatórios | Relatório / Relatórios | Informe / Informes | WebApp |
| Price Table / Tables | Tabela de Preços / Tabelas de Preços | Tabela de Preços / Tabelas de Preços | Tabla de Precios / Tablas de Precios | WebApp |
| Name, Date, Currency, Company | Nome, Data, Moeda, Empresa | Nome, Data, Moeda, Empresa | Nombre, Fecha, Moneda, Compañía | WebApp |

## Kept in English, everywhere

The product itself does not translate these — do not translate them either:

**Workspace, Rate Card, Fee** *(es only — pt/pt-br translate it as "Contrato", see table
above)*, **Workflow** (lowercase in prose: "o workflow", "el workflow"), **API, SDK, Client
API, Integration API, Gantt, CRM, Named Query** *(no WebApp precedent; treated as a technical
entity name like Rate Card)*.

**`Invoice` on its own** (the client-side AR document) **stays English in every locale** — but
`Supplier Invoice` (the AP counterpart, see table above) is fully translated ("Fatura de
Fornecedor" / "Factura de Proveedor"). These are two different WebApp entities that happen to
share the English word "Invoice"; check which one a page is actually describing before
translating it, and default to the standalone "Invoice" (English) only when the page is not
explicitly about a *Supplier* Invoice.

## The AI section

The WebApp's translation bundle predates the AI feature, so these have no WebApp precedent.
Follow `docs/ai/ai-actions.md` and `docs/ai/agents/*.md` (commit `019ae97d`), the only existing
translations:

| English | pt-PT / pt-BR | es |
| --- | --- | --- |
| AI Assistant | Assistente de IA | Asistente de IA |
| AI Actions | Ações de IA | Acciones de IA |
| Agent / Agents *(a persona in the AI Assistant, capitalized)* | Agente / Agentes | Agente / Agentes |
| Tool / Tools *(the specific roster a Server Tool config exposes to an agent — capitalized, as in `docs/ai/tools.md`)* | Tool / Tools *(kept English — see `brief-validator.md`)* | Tool / Tools |
| tool *(the generic word — "this tool helps you...")* | ferramenta | herramienta |
| skill *(the technical artifact under `$ai-agents/skills`)* | skill *(kept English — see `brief-validator.md`)* | skill |
| "your own **skills, agents and tools**" *(the fixed triplet naming the three kinds of files a developer adds under `$ai-agents/` — a set phrase, not three independent nouns)* | "as suas **skills, agents e tools**" | "tus **skills, agents y tools**" |
| Client Portal / Client Portals *(no existing-page precedent; this is the glossary's own call)* | Portal do Cliente / Portais de Cliente | Portal del Cliente / Portales de Cliente |

**Known drift, not a pattern to copy:** `docs/ai/agents/document-agent.md` itself uses "um job"
and "o brief" as English/mixed loanwords in prose despite the table above. That page is in the
terminology-drift list in `reports/i18n-inventory.md` and is out of scope for the current
translation push — new pages should use "Entrega"/"Atividade" and "Brief" per the table, not
copy that page's phrasing.

## Rules that aren't nouns

- **`## Related articles` is always translated as a heading** — confirmed convention:
  `Artigos relacionados` (pt/pt-br), `Artículos relacionados` (es). Every `##` heading gets
  translated, not just this one; it is called out because it is the one heading present on
  nearly every page, so getting it wrong repeats 260+ times instead of once.
- **Translate link text normally, using this glossary — regardless of whether the target page
  itself is translated yet.** Docusaurus resolves a doc link to whatever locale is available
  and falls back to English gracefully when it isn't; a translated link pointing at a
  still-English page is a normal, temporary, self-healing state as later phases land, not a
  defect worth hand-verifying for every one of the ~2,000 links in this project. The one
  exception is the fixed "skills, agents and tools" triplet above, which stays English because
  those are specific technical nouns, not because of the target page's translation status.
- **A literal system value stays exactly as written in the English source** — a workflow stage
  name, a status, a field name copied from real system output. `Move o SKILLS0059S1492 para
  Client Approval.` keeps `Client Approval` in English because that is a specific configured
  stage name being quoted, not the general concept of an approval step.
- **Code fences, endpoint paths, and API field names are never translated.**
- **`Role` stays English when it must be distinguished from `Profile` in the same sentence.**
  The WebApp collapses both to "Perfil"/"Perfil"/"Perfil" (checked directly — `Role`, `Roles`
  and `Profile` are three separate keys in `en.json`, all three translating to the same
  Portuguese/Spanish word in every locale). `docs/administration/roles-and-profiles.md`
  explains them as genuinely different concepts (a Role grants a permission; a Profile groups
  Roles for a user), so a translation needs two different words to keep that explanation
  legible. Use `Role`/`Roles` in English and `Perfil`/`Perfis` for `Profile`/`Profiles` — e.g.
  "Roles e Perfis", not "Perfis e Perfis" or an invented word like "papel" the product doesn't
  use.

## `start-here/glossary.md` specifically

This page defines the terms everything else uses, so getting it right matters more than any
other single page. Decisions made translating it, beyond the core table above:

- **`Customer`** (the agency using Skills Workflow, as opposed to `Client`, the agency's own
  client) **stays English in every locale.** `Client` is already "Cliente" in ~30 already-
  translated pages; `Customer` needs a genuinely different word, and it barely appears outside
  this glossary entry and the (still untranslated) Trust section. Carry this into Trust when
  Phase 7 translates it.
- **`Contract`** (the heading) and the **`Fee`** it says a contract "carries" are the same
  WebApp entity (confirmed: `fees.md` says outright "many agencies would call the same record
  a contract"). The heading translates to "Contrato"; the bolded `**Fees**` inside that one
  paragraph is kept English rather than also becoming "Contratos" — translating both would
  make "Contratos podem ter Contratos" nonsensical. This is a narrow, paragraph-local
  exception, not a change to Fee→Contrato elsewhere.
- **The Estimate-line sense of `Deliverable`** (a priced line item, *not* the Job/API sense
  the page already has a caution box for) uses the WebApp's own term for it — confirmed via
  the `EstimateItems` key — rather than "Entregável"/"Entregable" (which is the *other*
  Deliverable, `ContractDeliverable`): **Item de Orçamento** (pt) / **Item de Proposta**
  (pt-br) / **Ítem de Presupuesto** (es).
- **`Request` and `Brief` collide when translated.** WebApp confirms `Request` → "Brief" in
  every locale — but the glossary separately defines `Brief` as the written-description field
  (`DocumentBrief` in the API), a different concept the English source distinguishes with two
  different words. Translating both literally collapses them onto the same Portuguese/Spanish
  word, silently reproducing the exact ambiguity the page already has a `:::caution` box for
  under Deliverable — so the pt translation adds a matching caution box under Brief. Do the
  same in es and pt-br rather than translating the two headings as if they were unrelated.
- **The WebApp key literally named `Brief`** (internal property name) displays as
  "Description"/"Descrição" on screen — not "Brief". This documentation nonetheless calls the
  concept "Brief" consistently across hundreds of already-published pages (agency-industry
  usage, not the raw generic field label). Kept as "Brief" for consistency with that existing
  corpus; flagging here rather than silently picking one, per the source-verification rule —
  if a native speaker with product access wants to confirm which name a reader actually sees
  on screen, this is the place that needs revisiting, not any of the other 260 pages.

## Terms not yet decided

Add a term here the moment a batch needs a call this file doesn't answer, so the next batch
inherits the decision instead of re-guessing it.
