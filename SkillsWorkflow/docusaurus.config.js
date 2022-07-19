module.exports = {
  title: 'Skills Workflow’s Documentation',
  tagline: 'We are here to let you shine! Let´s get everything done',
  url: 'https://documentation.skillsworkflow.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'SkillsWorkflow', // Usually your GitHub org/user name.
  projectName: 'Documentation', // Usually your repo name.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt', 'pt-br']
  },
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true
    },
    algolia: {
      apiKey: 'dd45d8034a589d99ca6d342b4b8bc9cd',
      appId: 'KB6UV635OH',
      siteId: 'd017bb9a-2fd6-4648-8b11-d67021355c27',
      branch: 'master',
      indexName: 'netlify_d017bb9a-2fd6-4648-8b11-d67021355c27_master_all',
      contextualSearch: true,
      selector: 'div#',
      searchPagePath: false,
      customSettings: {
        attributesForFaceting: [
          "language",
          "version",
          "type",
          "docusaurus_tag"
        ]
      }
    },
    docs: {
      sidebar: {
        hideable: true
      }
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Skills Workflow',
        src: 'img/logo-blue.png'
      },
      items: [
        {
          to: 'docs',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
          className: 'navbar-item'
        },
        {
          to: 'docs/university',
          label: 'University',
          position: 'left',
          className: 'navbar-item'
        },
        {
          to: 'docs/status',
          label: 'Status',
          position: 'right',
          className: 'navbar-item'
        },
        {
          label: "API",
          position: 'right',
          className: 'navbar-item',
          to: 'https://apiv2-demo-prod-we.skillsworkflow.com/swagger'
        },
        {
          type: 'localeDropdown',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Craft',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/documenting/style-guide',
            },
            {
              label: 'Automations',
              to: 'docs/automations/introduction'
            },
            {
              label: 'SDK',
              to: 'docs/sdk/ui'
            },
            {
              label: 'Integrations',
              to: 'docs/integrations/hr-link'
            },
            {
              label: 'University',
              to: 'docs/university'
            }
          ],
        },
        {
          title: 'Learn More',
          items: [
            {
              label: 'Client API',
              to: 'https://apiv2-demo-prod-we.skillsworkflow.com/swagger'
            },
            {
              label: 'Integration API',
              to: 'https://integration-api-test.skillsworkflow.com',
            },
            {
              label: 'Website',
              to: 'https://www.skillsworkflow.com/'
            },
            {
              label: 'Status',
              to: 'https://status.skillsworkflow.com/'
            }
          ],
        },
        {
          title: 'Social Media',
          items: [
            {
              label: 'Youtube',
              to: 'https://www.youtube.com/channel/UCauqHRlHUSkS1H8KUYm4CiA'
            },
            {
              label: 'Twitter',
              to: 'https://twitter.com/skillsworkflow',
            },
            {
              label: 'LinkedIn',
              to: 'https://www.linkedin.com/company/skills-workflow/?viewAsMember=true'
            },
            {
              label: 'Instagram',
              to: 'https://www.instagram.com/skillsworkflow'
            },
            {
              label: 'Facebook',
              to: 'https://www.facebook.com/skillsworkflow'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Skills Workflow`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/SkillsWorkflow/Documentation/edit/master/SkillsWorkflow',
          editLocalizedFiles: true
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }
      }
    ]
  ]
};