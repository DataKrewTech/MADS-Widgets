module.exports = {
  locales: {
    '/': {
      lang: 'en-US',
      title: 'MADS Widgets',
      description: 'Documentation for MADS Widgets'
    }
  },
  themeConfig: {
    docsDir: 'docs',
    editLinks: true,
    docsBranch: 'master',
    editLinkText: 'Help us improve this page!',
    search: false,
    sidebarDepth: 2,
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        // service worker is configured but will only register in production
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        nav: [
          { text: 'Docs', link: '/guide/' },
          {
            text: 'GitHub',
            link: 'https://github.com/DataKrewTech/MADS-Widgets'
          }
        ],
        sidebar: [
          {
            title: 'Getting Started',
            path: '/guide/',
            collapsable: false,
            children: [
              {
                title: 'Introduction',
                path: '/guide/introduction'
              },
              {
                title: 'Installation',
                path: '/guide/installation'
              }
            ]
          },
          {
            title: 'Charts',
            path: '/charts/',
            collapsable: false,
            children: [
              {
                title: 'Line',
                path: '/charts/line'
              },
              {
                title: 'Area',
                path: '/charts/area'
              }
            ]
          }
        ]
      }
    }
  }
}