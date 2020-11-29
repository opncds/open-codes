module.exports = {
  title: 'Open Codes',
  tagline: 'Відкриті Будівельні Норми',
  url: 'https://opencodes.info',
  baseUrl: '/',
  favicon: 'img/logo.png',
  organizationName: 'Spatialtech', 
  projectName: 'open-codes', // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: 'f8d32aec5373965abca39ae4ae0e96fc',
      indexName: 'opencodes',
      //appId: 'app-id', // Optional, if you run the DocSearch crawler on your own
      //algoliaOptions: {}, // Optional, if provided by Algolia
    },
    navbar: {
      title: 'OpenCodes',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Building Codes',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/sptch/open-codes',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/cst_echo',
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
              href: 'https://github.com/sptch/open-codes/tree/master/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Open Codes`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/sptch/open-codes/tree/master/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/sptch/open-codes/tree/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

