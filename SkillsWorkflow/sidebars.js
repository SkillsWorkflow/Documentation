module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Craft',
      items: [
        'workspaces',
        'widgets'
      ]
    },
    // {
    //   type: 'category',
    //   label: 'Advanced',
    //   items: [
    //     {
    //       SDK: [
    //         'sdk/introduction', 'sdk/ui', 'sdk/alerts'
    //       ]
    //     }, 
    //     'automations', 
    //         'queries',
    //         'types'
    //   ]
    // },
    {
      type: 'category',
      label: 'Advanced',
      items: [
        {
          SDK: [
            'sdk/introduction', 
            {
              UI: [
                'sdk/ui',
                'sdk/ui-grid',
                'sdk/ui-selectBox',
                'sdk/ui-buttons',
                'sdk/ui-alert',
                'sdk/ui-tooltip'
              ]
            },
            // 'sdk/alerts'
          ]
        }, 
        'automations', 
            'queries',
            'types'
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
