export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
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
                  buildHookId: '5f9cf25f36a675baa7d113c0',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-2-studio-b3rbh4ka',
                  apiId: 'f61dd9ac-8f02-4c28-890b-24b2205998e3'
                },
                {
                  buildHookId: '5f9cf25f6a9468b07043e132',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-2-web-h4wn6e4f',
                  apiId: '4b9c0afa-9a6a-4984-a5f0-367082d8eef4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tomrishworth/sanity-gridsome-blog2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-2-web-h4wn6e4f.netlify.app', category: 'apps'}
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
