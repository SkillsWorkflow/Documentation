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
  url: 'https://skillsworkflow-preview.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'SkillsWorkflow', // Usually your GitHub org/user name.
  projectName: 'Documentation', // Usually your repo name.
  themeConfig: {
    algolia: {
      appId: '3P5IUMI5WG',
      apiKey: '67fb60c2ca588e1e6316e4499ee0e6ba',
      siteId: 'b6757571-cd82-43be-84b8-985bd74f9e66',
      branch: 'preview',
      selector: 'div#search',

      // Optional: see doc section bellow
      //contextualSearch: true,

      // Optional: Algolia search parameters
      // searchParameters: {},

      //... other Algolia params
      //ignoreCanonicalTo: false
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
