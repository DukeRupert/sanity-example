export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '6152083509f047ae2b7abf15',
                  title: 'Sanity Studio',
                  name: 'sanity-example-studio-gs56ko7k',
                  apiId: '1bbcbb5d-0b16-4c2d-a164-634ead695cd3'
                },
                {
                  buildHookId: '615208346188b50a9fe162cf',
                  title: 'Landing pages Website',
                  name: 'sanity-example-web',
                  apiId: '04ea11b1-5116-4fb9-bf0b-45483fbdc8c3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DukeRupert/sanity-example',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-example-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
