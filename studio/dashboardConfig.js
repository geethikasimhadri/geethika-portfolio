export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5f68154e40a5fa89abf72136',
                  title: 'Sanity Studio',
                  name: 'geethika-portfolio-studio',
                  apiId: '78531b7c-698e-4611-9d85-e96f6bc97e1a'
                },
                {
                  buildHookId: '5f68154e40a5fa7debf73713',
                  title: 'Portfolio Website',
                  name: 'geethika-portfolio',
                  apiId: '79e89398-0a15-4123-b735-14228ffe237f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/geethikasimhadri/geethika-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://geethika-portfolio.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
