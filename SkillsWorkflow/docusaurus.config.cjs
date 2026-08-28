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

if (process.env.NODE_ENV !== 'production') {
  loadLocalEnv();
}
const fontAwesomeKitId = process.env.FONTAWESOME_KIT_ID;

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
        { to: 'docs', label: 'Docs', position: 'left', className: 'navbar-item' },
        { to: 'docs/university', label: 'Learning', position: 'left', className: 'navbar-item' },
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
            { label: 'Learning paths', to: 'docs/university' }
          ]
        },
        {
          title: 'Learn More',
          items: [
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
            '**/docs/integrations/zonza',
            '**/docs/integrations/cloud-storage/box_old'
          ],
          filename: 'sitemap.xml'
        }
      }
    ]
  ],

  plugins: [
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
          '**/docs/integrations/zonza',
          '**/docs/integrations/cloud-storage/box_old'
        ]
      }
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
            { from: '/docs/university/maintenance/create-assign-type', to: '/docs/administration/calendars/create-assign-type' },
            { from: '/docs/university/maintenance/create-holidays', to: '/docs/administration/calendars/create-holidays' },
            { from: '/docs/university/maintenance/create-leave-type', to: '/docs/administration/calendars/create-leave-type' },
            { from: '/docs/university/maintenance/import%20data/departments', to: '/docs/administration/importing-data/departments' },
            { from: '/docs/university/maintenance/import%20data/employees', to: '/docs/administration/importing-data/employees' },
            { from: '/docs/university/maintenance/import%20data/projects', to: '/docs/administration/importing-data/projects' },
            { from: '/docs/university/maintenance/import%20data/typologies', to: '/docs/administration/importing-data/typologies' },
            { from: '/docs/university/maintenance/import%20data/typology-groups', to: '/docs/administration/importing-data/typology-groups' },
            { from: '/docs/university/maintenance/import%20data/users', to: '/docs/administration/importing-data/users' },
            { from: '/docs/customization/configuration/document/customstyle', to: '/docs/administration/system/customstyle' },
            { from: '/docs/customization/configuration/system/menu', to: '/docs/administration/system/menu' },
            { from: '/docs/customization/configuration/system/queryMentions', to: '/docs/administration/system/queryMentions' },
            { from: '/docs/customization/configuration/team/query', to: '/docs/administration/system/query' },
            { from: '/docs/university/maintenance/create-typologies', to: '/docs/administration/create-typologies' },
            { from: '/docs/university/maintenance/create-user', to: '/docs/administration/users/create-user' },
            { from: '/docs/university/maintenance/edit-profile', to: '/docs/administration/users/edit-profile' },
            { from: '/docs/to-review/password%20policy', to: '/docs/administration/users/password policy' },
            { from: '/docs/to-review/forgot-your-password', to: '/docs/administration/users/forgot-your-password' },
            { from: '/docs/to-review/upload-picture', to: '/docs/administration/users/upload-picture' },
            { from: '/docs/university/maintenance/workflow-actions', to: '/docs/administration/workflows/workflow-actions' },
            { from: '/docs/customization/configuration/workflows/workflow-entities', to: '/docs/administration/workflows' },
            { from: '/docs/customization/configuration/workflows/stage-mappings', to: '/docs/administration/workflows/stage-mappings' },
            { from: '/docs/customization/configuration/workflows/stages', to: '/docs/administration/workflows/stages' },
            { from: '/docs/customization/configuration/workflows/transitions', to: '/docs/administration/workflows/transitions' },
            { from: '/docs/university/ai/writing-tools', to: '/docs/ai/writing-tools' },
            { from: '/docs/api/data-extraction/de-assignments', to: '/docs/build-and-extend/api/data-extraction/de-assignments' },
            { from: '/docs/api/data-extraction/de-attendances', to: '/docs/build-and-extend/api/data-extraction/de-attendances' },
            { from: '/docs/api/data-extraction/de-bills', to: '/docs/build-and-extend/api/data-extraction/de-bills' },
            { from: '/docs/api/data-extraction/de-brands', to: '/docs/build-and-extend/api/data-extraction/de-brands' },
            { from: '/docs/api/data-extraction/de-businessobjecttypes', to: '/docs/build-and-extend/api/data-extraction/de-businessobjecttypes' },
            { from: '/docs/api/data-extraction/de-cities', to: '/docs/build-and-extend/api/data-extraction/de-cities' },
            { from: '/docs/api/data-extraction/de-clients', to: '/docs/build-and-extend/api/data-extraction/de-clients' },
            { from: '/docs/api/data-extraction/de-clientscompanies', to: '/docs/build-and-extend/api/data-extraction/de-clientscompanies' },
            { from: '/docs/api/data-extraction/de-comments', to: '/docs/build-and-extend/api/data-extraction/de-comments' },
            { from: '/docs/api/data-extraction/de-commentsreplies', to: '/docs/build-and-extend/api/data-extraction/de-commentsreplies' },
            { from: '/docs/api/data-extraction/de-companies', to: '/docs/build-and-extend/api/data-extraction/de-companies' },
            { from: '/docs/api/data-extraction/de-companiesadditionalinformation', to: '/docs/build-and-extend/api/data-extraction/de-companiesadditionalinformation' },
            { from: '/docs/api/data-extraction/de-contracts', to: '/docs/build-and-extend/api/data-extraction/de-contracts' },
            { from: '/docs/api/data-extraction/de-countries', to: '/docs/build-and-extend/api/data-extraction/de-countries' },
            { from: '/docs/api/data-extraction/de-currencies', to: '/docs/build-and-extend/api/data-extraction/de-currencies' },
            { from: '/docs/api/data-extraction/de-departments', to: '/docs/build-and-extend/api/data-extraction/de-departments' },
            { from: '/docs/api/data-extraction/de-descriptions', to: '/docs/build-and-extend/api/data-extraction/de-descriptions' },
            { from: '/docs/api/data-extraction/de-divisions', to: '/docs/build-and-extend/api/data-extraction/de-divisions' },
            { from: '/docs/api/data-extraction/de-employees', to: '/docs/build-and-extend/api/data-extraction/de-employees' },
            { from: '/docs/api/data-extraction/de-estimates', to: '/docs/build-and-extend/api/data-extraction/de-estimates' },
            { from: '/docs/api/data-extraction/de-estimatesbillingconditions', to: '/docs/build-and-extend/api/data-extraction/de-estimatesbillingconditions' },
            { from: '/docs/api/data-extraction/de-estimatescount', to: '/docs/build-and-extend/api/data-extraction/de-estimatescount' },
            { from: '/docs/api/data-extraction/de-estimatesquotes', to: '/docs/build-and-extend/api/data-extraction/de-estimatesquotes' },
            { from: '/docs/api/data-extraction/de-estimatesquotescount', to: '/docs/build-and-extend/api/data-extraction/de-estimatesquotescount' },
            { from: '/docs/api/data-extraction/de-estimatesquotesmonth', to: '/docs/build-and-extend/api/data-extraction/de-estimatesquotesmonth' },
            { from: '/docs/api/data-extraction/de-estimatesquotesmonthcount', to: '/docs/build-and-extend/api/data-extraction/de-estimatesquotesmonthcount' },
            { from: '/docs/api/data-extraction/de-expenses', to: '/docs/build-and-extend/api/data-extraction/de-expenses' },
            { from: '/docs/api/data-extraction/de-expensesheets', to: '/docs/build-and-extend/api/data-extraction/de-expensesheets' },
            { from: '/docs/api/data-extraction/de-expensetype', to: '/docs/build-and-extend/api/data-extraction/de-expensetype' },
            { from: '/docs/api/data-extraction/de-history', to: '/docs/build-and-extend/api/data-extraction/de-history' },
            { from: '/docs/api/data-extraction/de-holidays', to: '/docs/build-and-extend/api/data-extraction/de-holidays' },
            { from: '/docs/api/data-extraction/de-jobs', to: '/docs/build-and-extend/api/data-extraction/de-jobs' },
            { from: '/docs/api/data-extraction/de-jobscount', to: '/docs/build-and-extend/api/data-extraction/de-jobscount' },
            { from: '/docs/api/data-extraction/de-leaves', to: '/docs/build-and-extend/api/data-extraction/de-leaves' },
            { from: '/docs/api/data-extraction/de-leavescount', to: '/docs/build-and-extend/api/data-extraction/de-leavescount' },
            { from: '/docs/api/data-extraction/de-leavesdeleted', to: '/docs/build-and-extend/api/data-extraction/de-leavesdeleted' },
            { from: '/docs/api/data-extraction/de-leavesdeletedcount', to: '/docs/build-and-extend/api/data-extraction/de-leavesdeletedcount' },
            { from: '/docs/api/data-extraction/de-products', to: '/docs/build-and-extend/api/data-extraction/de-products' },
            { from: '/docs/api/data-extraction/de-projects', to: '/docs/build-and-extend/api/data-extraction/de-projects' },
            { from: '/docs/api/data-extraction/de-projectsadditionalinformation', to: '/docs/build-and-extend/api/data-extraction/de-projectsadditionalinformation' },
            { from: '/docs/api/data-extraction/de-projectsclassifications', to: '/docs/build-and-extend/api/data-extraction/de-projectsclassifications' },
            { from: '/docs/api/data-extraction/de-projectscount', to: '/docs/build-and-extend/api/data-extraction/de-projectscount' },
            { from: '/docs/api/data-extraction/de-projectsplannedtime', to: '/docs/build-and-extend/api/data-extraction/de-projectsplannedtime' },
            { from: '/docs/api/data-extraction/de-projectsplannedtimecount', to: '/docs/build-and-extend/api/data-extraction/de-projectsplannedtimecount' },
            { from: '/docs/api/data-extraction/de-projectstypes', to: '/docs/build-and-extend/api/data-extraction/de-projectstypes' },
            { from: '/docs/api/data-extraction/de-purchaseorders', to: '/docs/build-and-extend/api/data-extraction/de-purchaseorders' },
            { from: '/docs/api/data-extraction/de-ratecardscolumns', to: '/docs/build-and-extend/api/data-extraction/de-ratecardscolumns' },
            { from: '/docs/api/data-extraction/de-requests', to: '/docs/build-and-extend/api/data-extraction/de-requests' },
            { from: '/docs/api/data-extraction/de-services', to: '/docs/build-and-extend/api/data-extraction/de-services' },
            { from: '/docs/api/data-extraction/de-servicesgroups', to: '/docs/build-and-extend/api/data-extraction/de-servicesgroups' },
            { from: '/docs/api/data-extraction/de-stages', to: '/docs/build-and-extend/api/data-extraction/de-stages' },
            { from: '/docs/api/data-extraction/de-suppliers', to: '/docs/build-and-extend/api/data-extraction/de-suppliers' },
            { from: '/docs/api/data-extraction/de-taxes', to: '/docs/build-and-extend/api/data-extraction/de-taxes' },
            { from: '/docs/api/data-extraction/de-timesheets', to: '/docs/build-and-extend/api/data-extraction/de-timesheets' },
            { from: '/docs/api/data-extraction/de-timesheetscount', to: '/docs/build-and-extend/api/data-extraction/de-timesheetscount' },
            { from: '/docs/api/data-extraction/de-timesheetsdeleted', to: '/docs/build-and-extend/api/data-extraction/de-timesheetsdeleted' },
            { from: '/docs/api/data-extraction/de-timesheetsdeletedcount', to: '/docs/build-and-extend/api/data-extraction/de-timesheetsdeletedcount' },
            { from: '/docs/api/data-extraction/de-transitions', to: '/docs/build-and-extend/api/data-extraction/de-transitions' },
            { from: '/docs/api/data-extraction/de-types', to: '/docs/build-and-extend/api/data-extraction/de-types' },
            { from: '/docs/api/data-extraction/de-typologies', to: '/docs/build-and-extend/api/data-extraction/de-typologies' },
            { from: '/docs/api/data-extraction/de-typologygroups', to: '/docs/build-and-extend/api/data-extraction/de-typologygroups' },
            { from: '/docs/api/data-extraction/de-typologygroupscompanies', to: '/docs/build-and-extend/api/data-extraction/de-typologygroupscompanies' },
            { from: '/docs/api/data-extraction/de-typologygroupsdepartments', to: '/docs/build-and-extend/api/data-extraction/de-typologygroupsdepartments' },
            { from: '/docs/api/data-extraction/de-usercosts', to: '/docs/build-and-extend/api/data-extraction/de-usercosts' },
            { from: '/docs/api/data-extraction/de-users', to: '/docs/build-and-extend/api/data-extraction/de-users' },
            { from: '/docs/api/data-extraction/de-usersadditionalinformation', to: '/docs/build-and-extend/api/data-extraction/de-usersadditionalinformation' },
            { from: '/docs/api/data-extraction/de-usertypes', to: '/docs/build-and-extend/api/data-extraction/de-usertypes' },
            { from: '/docs/api/data-extraction/de-workloads', to: '/docs/build-and-extend/api/data-extraction/de-workloads' },
            { from: '/docs/api/data-extraction/de-worktypes', to: '/docs/build-and-extend/api/data-extraction/de-worktypes' },
            { from: '/docs/api/data-extraction/estimatedplannedactualmonthly', to: '/docs/build-and-extend/api/data-extraction/estimatedplannedactualmonthly' },
            { from: '/docs/customization/automations/actions', to: '/docs/build-and-extend/automations/actions' },
            { from: '/docs/sdk/application/application-configuration', to: '/docs/build-and-extend/sdk/application/application-configuration' },
            { from: '/docs/sdk/application/application-navigate', to: '/docs/build-and-extend/sdk/application/application-navigate' },
            { from: '/docs/sdk/application/application-panel', to: '/docs/build-and-extend/sdk/application/application-panel' },
            { from: '/docs/sdk/application/application-popup', to: '/docs/build-and-extend/sdk/application/application-popup' },
            { from: '/docs/sdk/application/application-translation', to: '/docs/build-and-extend/sdk/application/application-translation' },
            { from: '/docs/sdk/application/application-workspace', to: '/docs/build-and-extend/sdk/application/application-workspace' },
            { from: '/docs/sdk/branding', to: '/docs/build-and-extend/sdk/branding' },
            { from: '/docs/sdk/data', to: '/docs/build-and-extend/sdk/data' },
            { from: '/docs/sdk/document/assignment', to: '/docs/build-and-extend/sdk/document/assignment' },
            { from: '/docs/sdk/document/client', to: '/docs/build-and-extend/sdk/document/client' },
            { from: '/docs/sdk/document/currentUser', to: '/docs/build-and-extend/sdk/document/currentUser' },
            { from: '/docs/sdk/document/estimate', to: '/docs/build-and-extend/sdk/document/estimate' },
            { from: '/docs/sdk/document/holiday', to: '/docs/build-and-extend/sdk/document/holiday' },
            { from: '/docs/sdk/document/user', to: '/docs/build-and-extend/sdk/document/user' },
            { from: '/docs/sdk/document', to: '/docs/build-and-extend/sdk/document' },
            { from: '/docs/sdk/execute-api', to: '/docs/build-and-extend/sdk/execute-api' },
            { from: '/docs/sdk/filesystem', to: '/docs/build-and-extend/sdk/filesystem' },
            { from: '/docs/sdk', to: '/docs/build-and-extend/sdk' },
            { from: '/docs/sdk/markAsSaved', to: '/docs/build-and-extend/sdk/markAsSaved' },
            { from: '/docs/sdk/realtime', to: '/docs/build-and-extend/sdk/realtime' },
            { from: '/docs/sdk/service', to: '/docs/build-and-extend/sdk/service' },
            { from: '/docs/sdk/service/service-notification', to: '/docs/build-and-extend/sdk/service/service-notification' },
            { from: '/docs/sdk/state-storing', to: '/docs/build-and-extend/sdk/state-storing' },
            { from: '/docs/sdk/storage', to: '/docs/build-and-extend/sdk/storage' },
            { from: '/docs/sdk/store', to: '/docs/build-and-extend/sdk/store' },
            { from: '/docs/sdk/ui', to: '/docs/build-and-extend/sdk/ui' },
            { from: '/docs/sdk/ui/ui-alert', to: '/docs/build-and-extend/sdk/ui/ui-alert' },
            { from: '/docs/sdk/ui/ui-buttons', to: '/docs/build-and-extend/sdk/ui/ui-buttons' },
            { from: '/docs/sdk/ui/ui-grid', to: '/docs/build-and-extend/sdk/ui/ui-grid' },
            { from: '/docs/sdk/ui/ui-icons', to: '/docs/build-and-extend/sdk/ui/ui-icons' },
            { from: '/docs/sdk/ui/ui-selectBox', to: '/docs/build-and-extend/sdk/ui/ui-selectBox' },
            { from: '/docs/sdk/ui/ui-tooltip', to: '/docs/build-and-extend/sdk/ui/ui-tooltip' },
            { from: '/docs/sdk/utils', to: '/docs/build-and-extend/sdk/utils' },
            { from: '/docs/sdk/utils/utils-datetime', to: '/docs/build-and-extend/sdk/utils/utils-datetime' },
            { from: '/docs/sdk/utils/utils-export', to: '/docs/build-and-extend/sdk/utils/utils-export' },
            { from: '/docs/sdk/ui-workspaces', to: '/docs/build-and-extend/sdk/ui-workspaces' },
            { from: '/docs/customization/workspaces/Edit%20Workspace', to: '/docs/build-and-extend/workspaces/Edit Workspace' },
            { from: '/docs/customization/workspaces/EditLayout', to: '/docs/build-and-extend/workspaces/EditLayout' },
            { from: '/docs/customization/workspaces/craft-workspaces', to: '/docs/build-and-extend/workspaces' },
            { from: '/docs/customization/panels/chart/argument-axis-label', to: '/docs/build-and-extend/workspaces/panels/argument-axis-label' },
            { from: '/docs/customization/panels/definition/datasource/endpoint', to: '/docs/build-and-extend/workspaces/panels/endpoint' },
            { from: '/docs/customization/panels/definition/datasource/store', to: '/docs/build-and-extend/workspaces/panels/store' },
            { from: '/docs/customization/panels/form/set-items', to: '/docs/build-and-extend/workspaces/panels/set-items' },
            { from: '/docs/customization/panels/form/tagbox', to: '/docs/build-and-extend/workspaces/panels/tagbox' },
            { from: '/docs/customization/panels/grid/allow-inline', to: '/docs/build-and-extend/workspaces/panels/allow-inline' },
            { from: '/docs/customization/panels/grid/set-columns', to: '/docs/build-and-extend/workspaces/panels/set-columns' },
            { from: '/docs/customization/panels/workspace-context', to: '/docs/build-and-extend/workspaces/panels/workspace-context' },
            { from: '/docs/customization/workspaces/Roles', to: '/docs/build-and-extend/workspaces/Roles' },
            { from: '/docs/university/home/home', to: '/docs/university' },
            { from: '/docs/university/bills/credit-notes', to: '/docs/product/billing-and-costs/billing/credit-notes' },
            { from: '/docs/university/bills/invoice-authorizations', to: '/docs/product/billing-and-costs/billing/invoice-authorizations' },
            { from: '/docs/university/expenses/expense-sheets', to: '/docs/product/billing-and-costs/expenses/expense-sheets' },
            { from: '/docs/university/projects%20management/create-client-requests', to: '/docs/product/briefing-and-requests/create-client-requests' },
            { from: '/docs/university/maintenance/description-templates', to: '/docs/product/briefing-and-requests/description-templates' },
            { from: '/docs/university/contracts/create-contracts-proposals', to: '/docs/product/commercial/contracts/create-contracts-proposals' },
            { from: '/docs/university/contracts/contracts-projects', to: '/docs/product/commercial/contracts/contracts-projects' },
            { from: '/docs/university/crm/create-activity', to: '/docs/product/commercial/crm/create-activity' },
            { from: '/docs/university/crm/create-client-contact', to: '/docs/product/commercial/crm/create-client-contact' },
            { from: '/docs/university/crm/create-commercial-client', to: '/docs/product/commercial/crm/create-commercial-client' },
            { from: '/docs/university/crm/create-commercial-product', to: '/docs/product/commercial/crm/create-commercial-product' },
            { from: '/docs/university/crm/create-estimate', to: '/docs/product/commercial/crm/create-estimate' },
            { from: '/docs/university/crm/create-lead', to: '/docs/product/commercial/crm/create-lead' },
            { from: '/docs/university/estimates/create-estimate', to: '/docs/product/commercial/estimates/create-estimate' },
            { from: '/docs/university/estimates/invoice-estimate', to: '/docs/product/commercial/estimates/invoice-estimate' },
            { from: '/docs/university/contracts/rate-cards', to: '/docs/product/commercial/rates/rate-cards' },
            { from: '/docs/university/dashboards/utilization-burn-dashboard', to: '/docs/product/dashboards-and-reporting/utilization-burn-dashboard' },
            { from: '/docs/university/dashboards/client-dashboard', to: '/docs/product/dashboards-and-reporting/client-dashboard' },
            { from: '/docs/university/dashboards/client-staff-dashboard', to: '/docs/product/dashboards-and-reporting/client-staff-dashboard' },
            { from: '/docs/university/dashboards/contract-dashboard', to: '/docs/product/dashboards-and-reporting/contract-dashboard' },
            { from: '/docs/university/dashboards/environment-dashboard', to: '/docs/product/dashboards-and-reporting/environment-dashboard' },
            { from: '/docs/university/dashboards/fte-dashboard', to: '/docs/product/dashboards-and-reporting/fte-dashboard' },
            { from: '/docs/university/dashboards/leave-dashboard', to: '/docs/product/dashboards-and-reporting/leave-dashboard' },
            { from: '/docs/university/dashboards/leave-department-dashboard', to: '/docs/product/dashboards-and-reporting/leave-department-dashboard' },
            { from: '/docs/to-review/measure-performance', to: '/docs/product/dashboards-and-reporting/measure-performance' },
            { from: '/docs/university/dashboards/project-burn-dashboard', to: '/docs/product/dashboards-and-reporting/project-burn-dashboard' },
            { from: '/docs/to-review/querying%20data', to: '/docs/product/dashboards-and-reporting/querying data' },
            { from: '/docs/university/dashboards/utilization-dashboard', to: '/docs/product/dashboards-and-reporting/utilization-dashboard' },
            { from: '/docs/customization/annotations', to: '/docs/product/files-and-collaboration/index' },
            { from: '/docs/university/feed/using-feed', to: '/docs/product/files-and-collaboration/using-feed' },
            { from: '/docs/to-review/mobile%20app/android-app-config', to: '/docs/product/mobile/android-app-config' },
            { from: '/docs/to-review/mobile%20app/ios-app-config', to: '/docs/product/mobile/ios-app-config' },
            { from: '/docs/university/mobile/mobile-features', to: '/docs/product/mobile/mobile-features' },
            { from: '/docs/university/notifications/notification-types', to: '/docs/product/notifications/notification-types' },
            { from: '/docs/university/leaves/approving-leaves', to: '/docs/product/people/leaves/approving-leaves' },
            { from: '/docs/university/leaves/scheduling-leaves', to: '/docs/product/people/leaves/scheduling-leaves' },
            { from: '/docs/university/projects%20management/assign-executor', to: '/docs/product/people/teams/assign-executor' },
            { from: '/docs/university/projects%20management/assign-users', to: '/docs/product/people/teams/assign-users' },
            { from: '/docs/university/projects%20management/what-is-a-team', to: '/docs/product/people/teams/what-is-a-team' },
            { from: '/docs/university/projects%20management/planned-hours', to: '/docs/product/planning-and-scheduling/resourcing/planned-hours' },
            { from: '/docs/university/projects%20management/resource-allocation', to: '/docs/product/planning-and-scheduling/resourcing/resource-allocation' },
            { from: '/docs/university/projects%20management/resource-scheduler', to: '/docs/product/planning-and-scheduling/resourcing/resource-scheduler' },
            { from: '/docs/university/projects%20management/create-jobs', to: '/docs/product/projects-and-jobs/create-jobs' },
            { from: '/docs/university/projects%20management/list-view', to: '/docs/product/projects-and-jobs/list-view' },
            { from: '/docs/university/projects%20management/my-tasks', to: '/docs/product/projects-and-jobs/my-tasks' },
            { from: '/docs/university/time%20sheets/multi-approving-time-sheets', to: '/docs/product/time/timesheets/multi-approving-time-sheets' },
            { from: '/docs/university/time%20sheets/approving-time-sheets', to: '/docs/product/time/timesheets/approving-time-sheets' },
            { from: '/docs/university/time%20sheets/filling-time-sheets', to: '/docs/product/time/timesheets/filling-time-sheets' },
            { from: '/docs/university/time%20sheets/rejecting-time-sheets', to: '/docs/product/time/timesheets/rejecting-time-sheets' },
            { from: '/docs/university/time%20sheets/timesheet-timer', to: '/docs/product/time/timesheets/timesheet-timer' },
            { from: '/docs/university/time%20sheets/transferring-hours-between-projects', to: '/docs/product/time/timesheets/transferring-hours-between-projects' },
            { from: '/docs/university/home/favorites', to: '/docs/start-here/favorites' },
            { from: '/docs/home/home', to: '/docs' },
            { from: '/docs/releases', to: '/docs/start-here/releases' },
            { from: '/docs/to-review/system-roles-profiles', to: '/docs/start-here/system-roles-profiles' },
            { from: '/docs/university/maintenance/custom-tables', to: '/docs/administration/custom-tables' },
            { from: '/docs/sdk/document/customTable', to: '/docs/build-and-extend/sdk/document/customTable' },
        ],
        createRedirects(existingPath) {
          if (existingPath.endsWith('/index')) {
            return [existingPath.replace(/\/index$/, '')];
          }
          return [];
        }
      }
    ]
  ]
};
