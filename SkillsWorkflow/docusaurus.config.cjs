// docusaurus.config.cjs
const fs = require('fs');
const path = require('path');
const { themes: prismThemes } = require('prism-react-renderer');

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

loadLocalEnv();
const fontAwesomeKitId = process.env.FONTAWESOME_KIT_ID;

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
        { to: 'docs/university', label: 'University', position: 'left', className: 'navbar-item' },
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
          title: 'Customization',
          items: [
            { label: 'Style Guide', to: 'docs/documenting/style-guide' },
            { label: 'Automations', to: 'docs/customization/Automations' },
            { label: 'SDK', to: 'docs/sdk' },
            { label: 'API', to: 'docs/api/client-api' },
            { label: 'Integrations', to: 'docs/integrations/hr-link' },
            { label: 'University', to: 'docs/university' }
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
    },

    // Algolia (DocSearch hospedado)
    algolia: {
      appId: 'XB27C2B9IL',
      apiKey: '87094cef7d341d5684d9762da858c498', // chave pública
      indexName: 'documentation_skillsworkflow_com_xb27c2b9il_pages',
      contextualSearch: true,
      searchPagePath: 'search'
    }
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.cjs'),
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
          ignorePatterns: ['/tags/**', '/search'],
          filename: 'sitemap.xml'
        }
      }
    ]
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
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
