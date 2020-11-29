module.exports = {
    title: 'OpenCodes',
    tagline: 'Відкриті будівельні норми',
    url: 'https://opencodes.info',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    favicon: 'img/favicon.png',
    organizationName: 'opncds', // Usually your GitHub org/user name.
    projectName: 'open-codes', // Usually your repo name.
    themeConfig: {
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