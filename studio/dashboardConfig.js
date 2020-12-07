export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fcdfd1326e26c310f6fd985',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-hgafgx85',
                  apiId: 'c4287d62-d78b-4553-945b-b5d3fe2c9f05'
                },
                {
                  buildHookId: '5fcdfd14f6e0b4cdc80b6285',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ar26ax9m',
                  apiId: 'b5d37164-7d35-4a6a-ab3e-e942c063af68'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pixendrit/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ar26ax9m.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
