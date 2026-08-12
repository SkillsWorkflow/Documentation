# Website

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## Documentation Guardrails

Authoring rules for system values and verified documentation live in [`AGENTS.md`](./AGENTS.md).

## Backoffice (Decap CMS)

An initial contributor backoffice is available at `/admin/` after deploy.

### Included in this first implementation

- Browser editing for English docs in `SkillsWorkflow/docs`
- Browser editing for localized docs in:
	- `SkillsWorkflow/i18n/es/docusaurus-plugin-content-docs/current`
	- `SkillsWorkflow/i18n/pt/docusaurus-plugin-content-docs/current`
	- `SkillsWorkflow/i18n/pt-br/docusaurus-plugin-content-docs/current`
- Image upload support in `SkillsWorkflow/static/img/backoffice`
- Editorial workflow mode enabled (`draft -> review -> publish`)

### Files

- Admin entrypoint: `SkillsWorkflow/static/admin/index.html`
- CMS config: `SkillsWorkflow/static/admin/config.yml`

### Authentication setup required

The CMS config uses Netlify Git Gateway for repository writes.

To make this production-ready for non-technical contributors and internal SSO,
configure an auth gateway that maps internal identity to GitHub repository access,
then point Decap backend settings to that gateway.

### If you do not have GitHub Enterprise

Use Netlify Identity + Git Gateway (already aligned with this repo config):

1. In Netlify project settings, enable Identity.
2. Set registration to invite-only.
3. Enable Git Gateway in Netlify Identity settings.
4. Invite contributors using company email addresses.
5. Keep `/admin` as the authoring entrypoint.

This lets contributors edit and publish from the backoffice without GitHub PR workflow.

### Quick test checklist

1. Open `/admin` in an incognito window.
2. Login with an invited account.
3. Create a draft page in `Docs (EN)`.
4. Publish through editorial workflow.
5. Confirm commit appears in `master` and Netlify deploy runs.
6. Confirm a non-invited user cannot access the admin flow.

### Notes

- Content changes still go through repository history (no manual PR flow required for editors).
- Netlify preview and production behavior stays controlled by your site/deploy settings.
