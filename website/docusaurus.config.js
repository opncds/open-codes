module.exports = {
    title: 'OpenCodes',
    tagline: 'Відкриті будівельні норми',
    url: 'https://opencodes.netlify.com', // Url to your site with no trailing slash
    baseUrl: '/', // Base directory of your site relative to your repo
    onBrokenLinks: 'ignore',
    favicon: 'img/favicon.png',
    organizationName: 'opncds', // Usually your GitHub org/user name.
    projectName: 'open-codes', // Usually your repo name.
    themeConfig: {
        algolia: {
            apiKey: 'f8d32aec5373965abca39ae4ae0e96fc',
            indexName: 'opencodes',
            contextualSearch: false,
            //appId: 'app-id', // Optional, if you run the DocSearch crawler on your own
            //algoliaOptions: {}, // Optional, if provided by Algolia
          },
        navbar: {
            title: 'Opencodes',
            logo: {
                alt: 'My Site Logo',
                src: 'img/logo.png',
            },
            items: [{
                    to: 'docs/',
                    activeBasePath: 'docs',
                    label: 'Docs',
                    position: 'left',
                },
                { to: 'blog', label: 'Blog', position: 'left' },
                {
                    href: 'https://github.com/opncds/open-codes',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Docs',
                    items: [{
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
                    items: [{
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/opencodes',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/cst_echo',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [{
                            label: 'Blog',
                            to: 'blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/opncds/open-codes',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Spatialtech.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/opncds/open-codes/edit/master/website/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/opncds/open-codes/edit/master/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};