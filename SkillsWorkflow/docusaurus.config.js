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
  organizationName: 'SkillsWorkflow', // Usually your GitHub org/user name.
  projectName: 'Documentation', // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: 'dd45d8034a589d99ca6d342b4b8bc9cd',
      appId: 'KB6UV635OH',
      indexName: 'netlify_d017bb9a-2fd6-4648-8b11-d67021355c27_master_all',
      siteId: 'd017bb9a-2fd6-4648-8b11-d67021355c27',
      branch: 'master',
      selector: 'div#search',
      // Optional: see doc section bellow
      contextualSearch: true,

      // Optional: Algolia search parameters
      // searchParameters: {},

      //... other Algolia params
      ignoreCanonicalTo: false
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
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
          className: 'navbar-item'
        },
        { to: 'blog', label: 'Blog', position: 'left', className: 'navbar-item' },
        {
          label: "API",
          position: 'right',
          className: 'navbar-item',
          href: 'https://apiv2-demo-prod-we.skillsworkflow.com/',
        },
        {
          href: 'https://github.com/SkillsWorkflow/Documentation',
          label: 'GitHub',
          position: 'right',
          className: 'navbar-item'
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
              to: 'docs/',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Help Desk',
              href: 'https://helpdesk.skillsworkflow.com',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/skillsworkflow',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/SkillsWorkflow/Documentation',
            },
            {
              label: 'Releases',
              to: 'docs/releases'
            }
          ],
        },
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
            'https://github.com/SkillsWorkflow/Documentation/edit/master/SkillsWorkflow/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/SkillsWorkflow/Documentation/edit/master/SkillsWorkflow/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
