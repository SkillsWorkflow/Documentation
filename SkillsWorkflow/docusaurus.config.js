module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
    localeConfigs: {
      en: {
        label: 'English'
      },
      pt: {
        label: 'Português'
      }
    }
  },
  title: 'Skills Workflow’s Documentation',
  tagline: 'We are here to let you shine! Let´s get everything done',
  url: 'https://documentation.skillsworkflow.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  customFields: {
    trailingSlash: false
  },
  organizationName: 'SkillsWorkflow', // Usually your GitHub org/user name.
  projectName: 'Documentation', // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: 'dd45d8034a589d99ca6d342b4b8bc9cd',
      appId: 'KB6UV635OH',
      siteId: 'd017bb9a-2fd6-4648-8b11-d67021355c27',
      branch: 'master',
      selector: 'div#search',
      indexName: 'netlify_d017bb9a-2fd6-4648-8b11-d67021355c27_master_all',
      // Optional: see doc section bellow
      //contextualSearch: true,

      // Optional: Algolia search parameters
      // searchParameters: {},

      //... other Algolia params
      ignoreCanonicalTo: true

    },
    hideableSidebar: true,
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
          label: "API",
          position: 'right',
          className: 'navbar-item',
          href: 'https://apiv2-demo-prod-we.skillsworkflow.com/swagger',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Craft',
          items: [
            {
              label: 'Style Guide',
              to: 'docs',
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
              to: 'docs/university/Bills/invoice-authorizations'
            }
          ],
        },
        {
          title: 'Learn More',
          items: [
            {
              label: 'Client API',
              href: 'https://apiv2-demo-prod-we.skillsworkflow.com/swagger'
            },
            {
              label: 'Integration API',
              href: 'https://integration-api-test.skillsworkflow.com',
            },
            {
              label: 'Website',
              href: 'https://www.skillsworkflow.com'
            }
          ],
        },
        {
          title: 'Social Media',
          items: [
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/channel/UCauqHRlHUSkS1H8KUYm4CiA'
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/skillsworkflow',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/skills-workflow/?viewAsMember=true'
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/skillsworkflow'
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/skillsworkflow'
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
          editUrl:
            'https://github.com/SkillsWorkflow/Documentation/edit/master/SkillsWorkflow',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/SkillsWorkflow/Documentation/edit/master/SkillsWorkflow/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
