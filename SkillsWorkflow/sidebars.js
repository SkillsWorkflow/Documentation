module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Craft',
      items: [
        {
          Panels: [
            'craft/panels/grid',
            'craft/panels/form',
            'craft/craft-workspaces'
          ]
        }
      ]
    },
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
                'sdk/ui-tooltip',
                'sdk/ui-workspaces'
              ]
            },
            {
              Document: [
                'sdk/document',
                'sdk/assignments',
                'sdk/holidays',
                'sdk/customTables',
                'sdk/clients',
                'sdk/users',
                'sdk/estimates'
              ]
            }
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
      items: [
        'integrations/hr-link'
      ]
    },
    {
      type: 'category',
      label: 'University',
      items: [
        {
          Expenses: [
            'university/expenses/expense-sheets',
            'university/expenses/expenses',
            'university/expenses/approve-expenses'
          ]

        },
        {
          Contracts: [
            'university/contracts/rate-cards',
            'university/contracts/contracts',
            'university/contracts/contracts-projects'
          ]
        },
        'university/time-sheets',
        {
          Bills: [
            "university/bills/bills-lesson1",
            "university/bills/bills-lesson2",
          ]
        }
      ]
    },
  ],
  api: {}
};
