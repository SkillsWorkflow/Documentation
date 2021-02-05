module.exports = {
  title: 'Skills Workflow’s Documentation',
  tagline: 'We are here to let you shine! Let´s get everything done ✅',
  url: 'https://documentation.skillsworkflow.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'SkillsWorkflow', // Usually your GitHub org/user name.
  projectName: 'Documentation-v2', // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: '79575dae0d56516960fc0bfe8f137e39',
      indexName: 'prod_documentation',

      // Optional: see doc section bellow
      contextualSearch: true,

      // Optional: Algolia search parameters
      // searchParameters: {},

      //... other Algolia params
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
          href: 'https://github.com/SkillsWorkflow/Documentation-v2',
          label: 'GitHub',
          position: 'right',
          className: 'navbar-item'
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
              href: 'https://github.com/SkillsWorkflow/Documentation-v2',
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
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
