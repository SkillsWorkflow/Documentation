// docusaurus.config.cjs
const fs = require('fs');
const path = require('path');
const { themes: prismThemes } = require('prism-react-renderer');

const SIDEBAR_ACRONYMS = new Map([
  ['ad', 'AD'],
  ['api', 'API'],
  ['crm', 'CRM'],
  ['fte', 'FTE'],
  ['hr', 'HR'],
  ['isap', 'iSAP'],
  ['pdf', 'PDF'],
  ['sdk', 'SDK'],
  ['sla', 'SLA'],
  ['sso', 'SSO'],
  ['ui', 'UI'],
  ['ux', 'UX'],
  ['vbs', 'VBS']
]);

function loadLocalEnv() {
  const envPath = path.resolve(__dirname, '.env');
  if (!fs.existsSync(envPath)) return;
  const contents = fs.readFileSync(envPath, 'utf8');
  for (const rawLine of contents.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;
    const eqIndex = line.indexOf('=');
    if (eqIndex === -1) continue;
    const key = line.slice(0, eqIndex).trim();
    let value = line.slice(eqIndex + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

// Load the local .env unconditionally. `docusaurus build` runs with
// NODE_ENV=production, so gating this on non-production meant a local build got
// no FONTAWESOME_KIT_ID, the kit <script> was never emitted, and every `fal fa-*`
// icon on the site rendered blank. loadLocalEnv never overwrites a variable the
// real environment already set, so this stays correct on the deploy host too.
loadLocalEnv();
const fontAwesomeKitId = process.env.FONTAWESOME_KIT_ID;

// Without the kit there is no error and no broken image — every `fal fa-*` on the
// site just renders blank, which is easy to ship without noticing. Say so.
if (!fontAwesomeKitId) {
  console.warn(
    '[icons] FONTAWESOME_KIT_ID is not set — Font Awesome icons will render blank.\n' +
    '        Local: add it to SkillsWorkflow/.env (gitignored).\n' +
    '        Deploy: set it as an environment variable on the host (Netlify > Site settings > Environment variables).'
  );
}

function humanizeSidebarLabel(label) {
  const normalized = label
    .trim()
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ');

  if (!normalized || normalized !== normalized.toLowerCase()) {
    return label;
  }

  return normalized
    .split(' ')
    .map((word) => {
      const acronym = SIDEBAR_ACRONYMS.get(word);
      if (acronym) return acronym;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

function normalizeSidebarCategories(items) {
  return items.map((item) => {
    if (item.type !== 'category') {
      return item;
    }

    const normalizedItem = {
      ...item,
      items: item.items ? normalizeSidebarCategories(item.items) : item.items
    };

    if (typeof item.label === 'string') {
      normalizedItem.label = humanizeSidebarLabel(item.label);
    }

    return normalizedItem;
  });
}

async function sidebarItemsGenerator(args) {
  const items = await args.defaultSidebarItemsGenerator(args);
  return normalizeSidebarCategories(items);
}

module.exports = {
  title: 'Skills Workflow’s Documentation',
  tagline: 'We are here to let you shine! Let´s get everything done',
  url: 'https://documentation.skillsworkflow.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  markdown: { hooks: { onBrokenMarkdownLinks: 'warn' } },
  favicon: 'img/favicon.ico',
  scripts: fontAwesomeKitId
    ? [{ src: `https://kit.fontawesome.com/${fontAwesomeKitId}.js`, crossorigin: 'anonymous' }]
    : [],
  organizationName: 'SkillsWorkflow',
  projectName: 'Documentation',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt', 'pt-br']
  },

  themeConfig: {
    image: 'img/social/skillsworkflow-docs-share.jpg',
    metadata: [
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Skills Workflow Documentation' },
      { name: 'twitter:site', content: '@skillsworkflow' }
    ],
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    },
    colorMode: { respectPrefersColorScheme: true },
    docs: { sidebar: { hideable: true } },

    navbar: {
      title: '',
      logo: { alt: 'Skills Workflow', src: 'img/logo-blue.png' },
      items: [
        // The navbar names the site's own top-level trees, so it answers "what is
        // in here?" and agrees with the sidebar instead of contradicting it.
        //
        // There is deliberately no "Docs" item: it pointed at `/`, which meant it
        // did nothing on the homepage and ejected the reader back to the marketing
        // page from anywhere else. The logo is the one Home affordance.
        //
        // `activeBaseRegex` is matched against the raw pathname, which carries the
        // locale prefix on localized builds (`/pt/docs/...`), hence `(^|/)docs`.
        // "How to" rather than "Product": this tree is where the task answers live
        // ("Create a Project", "Approving Time Sheets"), and "Product" reads as the
        // platform team describing its own product rather than addressing the reader.
        // It pairs with "Get started": look a task up here, learn the order there.
        { to: 'docs/product',          label: 'How to',        position: 'left',  className: 'navbar-item',
          activeBaseRegex: '(^|/)docs/product(/|$)' },
        { to: 'docs/administration',   label: 'Administration', position: 'left', className: 'navbar-item',
          activeBaseRegex: '(^|/)docs/administration(/|$)' },
        { to: 'docs/build-and-extend', label: 'Build & Extend', position: 'left', className: 'navbar-item',
          activeBaseRegex: '(^|/)docs/build-and-extend(/|$)' },
        { to: 'docs/integrations',     label: 'Integrations',  position: 'left',  className: 'navbar-item',
          activeBaseRegex: '(^|/)docs/integrations(/|$)' },

        // "Get started" rather than "Learning paths": behind it are three ordered
        // routes (use / administer / implement), not a task lookup. A reader with a
        // single "how do I…?" question is served by Product, not by a 20-step route.
        { to: 'docs/learning-paths', label: 'Get started', position: 'right', className: 'navbar-item',
          activeBaseRegex: '(^|/)docs/(university|learning-paths)(/|$)' },
        { to: 'docs/trust', label: 'Trust', position: 'right', className: 'navbar-item' },
        {
          label: 'API',
          position: 'right',
          className: 'navbar-item',
          to: 'https://apiv2-demo-prod-we.skillsworkflow.com/swagger'
        },
        { type: 'localeDropdown', position: 'right' }
      ]
    },

    footer: {
      links: [
        {
          title: 'Build & Extend',
          items: [
            { label: 'Workspaces', to: 'docs/build-and-extend/workspaces' },
            { label: 'Automations', to: 'docs/build-and-extend/automations' },
            { label: 'SDK', to: 'docs/build-and-extend/sdk' },
            { label: 'API', to: 'docs/build-and-extend/api/client-api' },
            { label: 'Integrations', to: 'docs/integrations' },
            { label: 'Get started', to: 'docs/learning-paths' }
          ]
        },
        {
          title: 'Learn More',
          items: [
            { label: 'Glossary', to: 'docs/start-here/glossary' },
            { label: 'Releases', to: 'docs/start-here/releases' },
            { label: 'Client API', to: 'https://apiv2-demo-prod-we.skillsworkflow.com/swagger' },
            { label: 'Integration API', to: 'https://integration-api-test.skillsworkflow.com' },
            { label: 'Website', to: 'https://www.skillsworkflow.com/' },
            { label: 'Status', to: 'https://status.skillsworkflow.com/' }
          ]
        },
        {
          title: 'Social Media',
          items: [
            { label: 'Youtube', to: 'https://www.youtube.com/channel/UCauqHRlHUSkS1H8KUYm4CiA' },
            { label: 'Twitter', to: 'https://twitter.com/skillsworkflow' },
            {
              label: 'LinkedIn',
              to: 'https://www.linkedin.com/company/skills-workflow/?viewAsMember=true'
            },
            { label: 'Instagram', to: 'https://www.instagram.com/skillsworkflow' },
            { label: 'Facebook', to: 'https://www.facebook.com/skillsworkflow' }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Skills Workflow`
    }
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.cjs'),
          sidebarItemsGenerator,
          editUrl:
            'https://github.com/SkillsWorkflow/Documentation/edit/master/SkillsWorkflow',
          editLocalizedFiles: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
        // sitemap configurado aqui, não no array plugins
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          // `to-review` holds unreviewed content migrated from the old Knowledge Base.
          // It is hidden from the sidebar via className, but that does nothing for
          // crawlers — keep it out of the sitemap so search engines and AI crawlers
          // do not surface it as current documentation.
          ignorePatterns: [
            '/tags/**',
            '/search',
            '**/to-review/**',
            '**/docs/integrations/zonza'
          ],
          filename: 'sitemap.xml'
        }
      }
    ]
  ],

  plugins: [
    [
      require.resolve('@docusaurus/plugin-client-redirects'),
      {
        // The AI section was restructured: the ten aspirational "use case" pages were folded
        // into the Roadmap, Workspace Studio was merged into the Workspace Agent, and
        // Writing Tools was renamed to its real product name, AI Actions. Every `to:` below
        // is validated against a real route at build time — retarget an entry rather than
        // deleting the page it points at. The Roadmap is currently `draft: true`, so the
        // five entries that pointed at it land on the AI overview until it is published.
        redirects: [
          { from: '/docs/ai/writing-tools', to: '/docs/ai/ai-actions' },
          { from: '/docs/ai/agents/workspace-studio', to: '/docs/ai/agents/workspace-agent' },
          { from: '/ai/ai-use-cases', to: '/docs/ai/ai-overview' },
          { from: '/docs/ai/ai-use-cases', to: '/docs/ai/ai-overview' },
          { from: '/docs/ai/use-cases/dashboards-generation', to: '/docs/ai/agents/workspace-agent' },
          { from: '/docs/ai/use-cases/document-creation', to: '/docs/ai/agents/document-agent' },
          { from: '/docs/ai/use-cases/help-on-processes', to: '/docs/ai/agents/workflow-agent' },
          { from: '/docs/ai/use-cases/user-experience', to: '/docs/ai/ai-assistant' },
          { from: '/docs/ai/use-cases/data-points', to: '/docs/ai/ai-tools' },
          { from: '/docs/ai/use-cases/files-and-contents', to: '/docs/ai/ai-overview' },
          { from: '/docs/ai/use-cases/import-and-ocr', to: '/docs/ai/ai-overview' },
          { from: '/docs/ai/use-cases/integrations', to: '/docs/ai/ai-overview' },
          { from: '/docs/ai/use-cases/problem-detection-and-alerts', to: '/docs/ai/ai-overview' },
          { from: '/docs/ai/use-cases/team-and-individual-work', to: '/docs/ai/ai-overview' }
        ]
      }
    ],
    [
      require.resolve('docusaurus-lunr-search'),
      {
        languages: ['en', 'pt', 'es'],
        indexBaseUrl: true,
        // This plugin does not honour Docusaurus `unlisted: true` — it indexes the built
        // HTML regardless of the noindex tag. Any page marked unlisted must also be listed
        // here, or it stays findable through site search. Patterns cover every locale.
        //
        // `to-review` is excluded because it holds unreviewed content migrated from the
        // old Knowledge Base. Leaving it indexed means site search — and any LLM reading
        // /search-doc.json — can quote stale material back as current documentation.
        excludeRoutes: [
          '**/docs/integrations/zonza'
        ]
      }
    ]
  ]
};
