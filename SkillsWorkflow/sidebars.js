module.exports = {
  docs: [
    {
      type: 'category',
      label: '✍🏽 Craft',
      items: [
        'workspaces',
        'widgets'
      ]
    },
    {
      type: 'category',
      label: 'Advanced',
      items: [
        {
          SDK: [
            'sdk/introduction', 'sdk/utils', 'sdk/git', 'sdk/toastr', 'sdk/alerts'
          ]
        }, 'automations', 'queries'
      ]
    },
    {
      type: 'category',
      label: 'Integrations',
      items: ['integrations/introduction']
    },
    {
      type: 'category',
      label: 'University',
      items: [
        'university/introduction',
        'university/time-sheets'
      ]
    },
    {
      type: 'category',
      label: 'Documenting',
      items: ['documenting/style-guide', 'documenting/mdx']
    },
  ],
  api: {}
};
