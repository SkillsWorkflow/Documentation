# Skills Workflow — Visual Automation Workflow Builder

Portable implementation plan for the Skills Workflow repositories. Bring this file into the WebApp/API conversation where the DevExpress documentation MCP server is available.

## Objective

Replace the current JSON copy/paste authoring experience with a visual Automation Workflow Builder that lets users browse, create, edit, validate, duplicate, activate/deactivate, inspect, and safely round-trip Integration Workflows without manually authoring JSON.

The visual editor must remain an adapter over the existing Integration Workflow JSON model. It must not introduce a parallel workflow format.

## Required first step in the implementation conversation

Before editing code:

1. Read all applicable `AGENTS.md` and repository instructions.
2. Inspect the Documentation, API.Core, WebApp, IntegrationWorkflow service, Webhook proxy/client surfaces, and Marketplace automation exports.
3. Use the DevExpress documentation MCP server for DevExtreme/DevExpress guidance when available:
   - `devexpress_docs_search`
   - `devexpress_docs_get_content`
4. Report the verified current architecture and proposed workspace/UI structure first.
5. Wait for the next implementation checkpoint only if the user has not already authorized continuing.

The official DevExpress MCP endpoint is `https://api.devexpress.com/mcp/docs`.

## Repository locations inspected

- Documentation: `/Users/afonsogomescardoso/Repos/Documentation/SkillsWorkflow`
- Main application/API/WebApp: `/Users/afonsogomescardoso/Repos/SkillsWorkflow.Main`
- Integration Workflow runtime: `/Users/afonsogomescardoso/Repos/SkillsWorkflow.Services.IntegrationWorkflow`
- Marketplace examples: `/Users/afonsogomescardoso/Repos/Marketplace`

There is no separate Webhooks service source checkout in the available workspace. Verify Webhook behavior through API.Core, generated client contracts, WebApp UI, and Marketplace exports unless the implementing conversation has another checkout.

## Verified backend architecture

The Integration Workflow service is the source of truth for the workflow model, action types, execution, and validation:

- `src/IntegrationWorkflow/Models/IntegrationWorkflowDto.cs`
- `src/IntegrationWorkflow/Services/ActionFactory.cs`
- `src/IntegrationWorkflow/Services/IntegrationWorkflowValidator.cs`
- `src/IntegrationWorkflow/Services/IntegrationWorkflowActionDefinitionValidator.cs`
- `src/IntegrationWorkflow/Services/RuntimeActions/`
- `src/IntegrationWorkflow/Services/RuntimeActionValidators/`

The public API controller is:

- `SkillsWorkflow.Api.Core/Controllers/IntegrationWorkflowController.cs`

Existing public operations are authenticated list, get, create/import, update, delete, and execute operations under the `api/integration-workflows` route family. Existing permission checks include navigation, get, create, write, and delete permissions. Verify exact source contracts before changing them.

Create and import are different operations. Import preserves IDs, compares versions, and reports new imports, updates, and up-to-date records. Update replaces action collections rather than patching individual actions.

The public API models currently represent actions as `List<object>`. The current WebApp TypeScript model exposes only a small subset of the actual action properties.

## Authoritative action types

The runtime currently defines exactly these action types:

`Start`, `Rest`, `Case`, `Result`, `Email`, `Download`, `SftpListFiles`, `SftpDownload`, `ReadFileData`, `Loop`, `SftpMoveTo`, `CreateCsv`, `SftpUpload`, `ReadFileBytes`, `Map`, `Merge`, `AzureAdAuthentication`, `ReadTextFileFromUrl`, `CreatePdfFromDocument`, `ExecuteSubWorkflow`, `EnqueueBackgroundWork`, `XmlMap`, `CreateList`, `AddToList`, `RemoveFromList`, `SetParameter`, `MapFromObject`, `ConfigurationKeys`, `AzureAdCertificateAuthentication`, `ConvertFromJsonDataTable`, `OAuth2Authentication`, `ValidateJson`, `ClearContext`, `ExecuteIntegrationWorkflow`, `ApplyTemplate`, `AnalyticsNamedQuery`, `Await`, `Reduce`, and `CsvMap`.

Do not rename these values or replace them with broad categories.

REST runtime methods are `GET`, `POST`, `PUT`, `PATCH`, and `DELETE`.

REST body media types are `Json`, `Raw`, `MultipartFormData`, `MultipartFormFile`, `UrlEncodedFormData`, and `File`.

Other verified runtime values and syntax include:

- Scheduler periodicity: `Minutely`, `Hourly`, `Daily`, `Weekly`, `Monthly`.
- Log levels: `Info = 1`, `Warning = 10`, `Error = 30`.
- Import/create operation values are defined by the API models; copy them from source rather than recreating them.
- Expressions use interpolation such as `{{ ... }}` and context references such as `['Key']` or `["Key"]`.
- Runtime pipe/function support must be read from `ExecutionContext.cs`; do not expose enum members whose runtime switch does not implement them.

## Verified structural rules

The current definition validator verifies or enforces the following:

- Workflow name is mandatory.
- If a scheduler is present, start date, unit, and user ID are mandatory.
- Actions must be present.
- Action names must be distinct.
- Exactly one `Start` action is required.
- At least one `Result` action is required; multiple Results are valid.
- `Start` and most non-terminal actions require `next`.
- `Result` is terminal and does not require a next connection.
- `Case` uses `nextActions`, requires one default branch, and requires branch names.
- Connection targets must resolve to action names.
- Cycles are rejected by the current validator.

Important limitation: the current definition validator and runtime validators are not fully aligned. Several newer actions perform required-field and value validation only at execution time. The builder must use the runtime service as the source of truth instead of duplicating a partial TypeScript validator.

## Verified action-specific runtime constraints to expose

Read the corresponding runtime validator/tests before finalizing field metadata. The following are already verified and must be represented accurately:

- `Start`: requires `next`.
- `Result`: requires `name`; can carry configured response fields.
- `Rest`: requires `method`, `url`, and `next`; multipart file mode requires `fileName`; request header names are validated.
- `Case`: requires `test`, branch collection, exactly one default branch, and valid branch names.
- `Email`: requires `subject`, `fromDisplayName`, `body`, and `toAddress`.
- `Download`: requires `url` and `next`.
- SFTP actions require their verified host/user/file/path fields and credentials according to their runtime validators.
- `Loop`: requires body/subworkflow fields according to its validator.
- `CreateCsv`: requires `data`, `dataColumns`, and `next`.
- `Map` and `Merge`: require their verified `values` payload.
- `AzureAdAuthentication`: requires tenant/client/secret fields.
- `CreatePdfFromDocument`: requires document type, document ID, and layout ID.
- `ExecuteSubWorkflow`: requires a subworkflow reference.
- `EnqueueBackgroundWork`: requires a target workflow ID.
- `ConfigurationKeys`: requires `value` and `next`.
- `SetParameter`: requires `parameterName`, `value`, and `next`.
- `CreateList`, `AddToList`, and `RemoveFromList`: require their list name and operation-specific values.
- `ValidateJson`: requires payload, required properties, `next`, and `nextOnError`.
- `ClearContext`: requires either `clearAll` or a non-empty list of values.
- `Await`: requires a runtime-supported wait expression such as a valid millisecond/second/minute value and `next`.
- `ApplyTemplate`: requires body, data, and `next`.
- `AnalyticsNamedQuery`: requires body, named query, and `next`.
- `ConvertFromJsonDataTable`: requires columns, rows, and `next`.
- `XmlMap`: requires XML data, values, and `next`.
- `MapFromObject`: requires body, data, and `next`.
- `OAuth2Authentication`: requires the fields enforced by its runtime validator, including next and OAuth configuration values.
- `ExecuteIntegrationWorkflow`: requires a valid target workflow ID, a non-looping target, and `next`.
- `Reduce`: requires data, grouping, operation, operation result, and a runtime-supported inner-array strategy.
- `CsvMap`: requires data and `next`; delimiter and header behavior follow runtime defaults.

This list is a starting index, not permission to invent a schema. Confirm exact field names, casing, errors, and supported values directly from runtime code and tests.

## Existing WebApp behavior

Relevant files include:

- `SkillsWorkflow.WebApp/src/SkillsWorkflow.WebApp/ClientApp/app/core/document-data/automation-document-data.ts`
- `SkillsWorkflow.WebApp/src/SkillsWorkflow.WebApp/ClientApp/app/core/document-data/webhook-document-data.ts`
- `SkillsWorkflow.WebApp/src/SkillsWorkflow.WebApp/ClientApp/app/services/integrations.service.ts`
- Existing dashboard Diagram, Form, Grid, Tabs, Popup, and Monaco editor components.

The current Automation UI is a generic document CRUD shell that creates a minimal Start-to-Result workflow. The current Webhook UI supports associating a webhook with an automation via `IsAutomation` and `AutomationId`. It should be reused as the destination for a “Configure webhook trigger” guidance action.

Do not copy deprecated workspace APIs such as `SW.saveComponent`, `SW.getComponent("data")`, or `SW.executeAPI` into new work.

Use the existing Angular module architecture, NGXS patterns, DevExtreme components, SCSS conventions, ngx-translate localization, and accessibility conventions. Do not introduce a new frontend framework.

## Proposed backend changes

Add a service-owned action specification provider. It should describe, from verified runtime behavior:

- Action type and display metadata.
- Managed fields and JSON property names.
- Field types and editors.
- Requiredness and conditional requiredness.
- Supported enum/value sets.
- Help text and expression guidance.
- Connection behavior (`next`, `nextOnError`, `nextActions`, terminal).
- Sensitive-field handling.

Expose the specification through API.Core using a new, clearly documented read-only contract. Add draft validation through the same Integration Workflow validator/runtime rule source. Do not claim either endpoint exists until implemented and tested.

Where serialization allows it, add explicit extension-data preservation for unknown workflow/action fields. The API mapper and service must be tested for fields that the visual editor does not expose.

Add tests that ensure every `IntegrationWorkflowActionType` has a specification and that specification requirements remain consistent with runtime validator behavior.

## Proposed visual architecture

Implement a reusable native Angular builder component hosted by Workspace Studio.

Core layout:

- Top toolbar: workflow name, active state, validation status, save, duplicate, JSON preview, webhook guidance.
- Left action palette: search and grouped action picker.
- Center canvas: DevExtreme Diagram with pan, zoom, fit-to-content, insert controls, and labeled connections.
- Right properties panel: generated from the real action specification.
- Bottom or side validation panel: grouped errors/warnings linked to nodes and fields.
- Optional JSON preview: read-only Monaco view with copy/export.

Accessibility requirements:

- Every action is reachable from the keyboard.
- Provide an action outline/list for users who cannot reliably operate a graph with a pointer.
- Do not make drag-and-drop the only way to insert or connect actions.
- Use visible focus, descriptive labels, and localized validation messages.

## Graph/JSON adapter requirements

Create a dedicated mapper/adapter layer with tests.

The adapter must:

- Build graph nodes from action definitions.
- Build normal edges from `next`.
- Build error edges from `nextOnError` where applicable.
- Build labeled branch edges from `Case.nextActions`.
- Preserve the original action array order unless the user explicitly changes structure.
- Retain raw action/top-level JSON and overlay only managed fields during edits.
- Preserve fields that the current inspector does not expose.
- Support multiple Result nodes.
- Detect unresolved connections and present them before save.
- Avoid silently deleting unknown fields during duplicate/import/edit round trips.

For newly created actions, initialize only fields verified by the action specification. Do not generate tenant IDs, credentials, URLs, webhook URLs, or other tenant-specific values.

## Workspace Studio delivery

Recommended workspaces:

1. **Automation Workflow Library** — menu/list workspace
   - Browse, search, create, duplicate, activate/deactivate, inspect, delete, and open workflows.

2. **Automation Workflow Builder** — document/editor workspace
   - Hosts the reusable builder component and workflow settings.

Follow the canonical workspace process:

- Create/edit exploded files under `SkillsWorkflow.WebApp/.workspaces/.dev/<slug>/`.
- Do not hand-edit escaped JavaScript inside assembled exports.
- Assemble with `node scripts/workspace-dev.js assemble ... --out ...`.
- Validate with `npm run ws:validate -- ...`.
- Validate SDK usage with `npm run sdk:validate -- dev export`.
- Run `npm run agents:schema:check` if component configuration keys change.

Read the canonical workspace skill and generated component schema before creating exports. Do not invent widget types or configuration keys.

## Webhook guidance

The workflow schema has no event-trigger action. A webhook trigger is configured separately through Webhook Subscriptions. The builder should:

- Explain that an event trigger is configured externally.
- Link/open the existing webhook configuration flow.
- Offer to select or create a webhook subscription associated with the current automation where permissions allow.
- Never write tenant-specific webhook URLs or credentials into source, docs, fixtures, or workspace exports.

## Tests to add

### Backend/API

- Action specification completeness against the runtime enum/action factory.
- Draft validation responses for structural and action-specific errors.
- API.Core permission and contract tests.
- Unknown field preservation.
- Import/update version behavior.

### WebApp

- Start/Result and normal edge mapping.
- Case branch mapping and default branch handling.
- `nextOnError` mapping.
- Multiple Result nodes.
- Unknown/unexposed field round trips.
- Duplicate action-name detection.
- Missing connection detection.
- Save blocking when backend validation reports errors.
- JSON preview matches the persisted request model.

### Workspace

- `ws:validate` on every assembled workspace.
- `sdk:validate` on every exploded and assembled export.
- Component schema check when configuration keys or component registration changes.

## Documentation to add/update

Add end-user documentation explaining:

- How to create and edit a workflow visually.
- How actions and connections work.
- How to configure Case branches.
- How to use expressions and configuration keys.
- How to configure a webhook trigger.
- How validation and JSON preview work.
- Which fields remain advanced/raw JSON-only, if any.

Add maintainer documentation explaining:

- The action specification source of truth.
- Graph/JSON adapter behavior.
- Unknown-field preservation.
- API validation flow.
- Workspace assembly and validation.

Respect Documentation repository rules: integration product pages describe customer-facing behavior; technical field mappings belong in a neighboring `reference.md`; do not include credentials, tokens, hostnames, or tenant names; hidden pages require both `unlisted: true` and a search-plugin `excludeRoutes` entry.

## Verification checklist

Before reporting completion:

- Backend builds and focused tests pass.
- API.Core builds and controller tests pass.
- WebApp lint/build and focused Jasmine tests pass.
- Mapping/validation/round-trip tests pass.
- Workspace exports assemble and pass `ws:validate` and `sdk:validate`.
- Schema check passes if required.
- Existing dirty worktree changes are preserved.
- No invented action types, routes, properties, status values, tenant values, or validation rules remain.
- Final report lists workspaces, files changed, supported actions, known limitations, and follow-up work.

## Known limitations to resolve explicitly

- The current public API does not expose an action-specification or draft-validation contract; those are proposed additions.
- The current WebApp workflow TypeScript model is incomplete.
- Current definition and execution validators are not fully aligned.
- Truly unknown fields may currently be lost by typed runtime deserialization unless extension-data support is added.
- The separate Webhooks service source is not available in the original checkout.
- DevExpress MCP availability depends on the destination Codex/WebApp conversation and workspace settings.
