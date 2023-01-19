// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RBXWiki',
  tagline: 'Your Block Your Data YOUR NFT',
  url: 'https://reserveblock.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ReserveBlockIO', // Usually your GitHub org/user name.
  projectName: 'rbx-wiki', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ReserveBlockIO/rbx-wiki/tree/main',
        },
     
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {

        logo: {
          alt: 'RBXWiki',
          src: 'img/rbxwiki.png',
        },
        items: [
          {to: 'https://www.reserveblock.io/#learn', label: 'Learn', position: 'left'},
          { to: 'https://www.reserveblock.io/#masternodes', label: 'Masternodes',position: 'left',},
          { to: 'https://www.reserveblock.io/#wallet', label: 'Wallet',position: 'left',},
          { to: 'https://www.reserveblock.io/#network', label: 'Network',position: 'left',},
          { to: 'https://www.reserveblock.io/#build', label: 'Build',position: 'left',},
          { to: 'https://www.reserveblock.io/#community', label: 'Community',position: 'left',},
          { to: 'https://www.reserveblock.io/#press', label: 'Press',position: 'left',},
          {type: 'doc', docId: 'intro',position: 'left',label: 'Wiki',},
          { to: 'https://wallet.rbx.network/#./', label: 'Web Wallet',position: 'right',},
          { to: 'https://www.reserveblock.io/static/media/ReserveBlockLitePaper.f08596443b119bc51d6d.pdf', label: 'Litepaper',position: 'right',},
          { to: 'https://www.reserveblock.io/static/media/RBX_Blockchain_Whitepaper.b1e396cdd4fc51f5a2e6.pdf', label: 'Whitepaper',position: 'right',},
          { to: 'https://www.reserveblock.io/disclaimer', label: 'Disclaimer',position: 'right',},
          { href: 'https://github.com/ReserveBlockIO', label: 'GitHub',position: 'right',},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Telegram',
                to: 'https://t.me/reserveblock',
              },
              {
                label: 'Discord',
                to: 'https://discord.com/invite/PnS2HRETDh',
              },
              {
                label: 'Twitter',
                to: 'https://twitter.com/ReserveBlockIO',
              },
            ],
          },
          {
            title: 'More',
            items: [
             
              {
                label: 'GitHub',
                to: 'https://github.com/ReserveBlockIO',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} ReserveBlock`,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
          
    }),
};

module.exports = config;
