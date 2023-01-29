// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');




/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RBXWiki',
  tagline: 'Democratizing Tokenization For Everyone',
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
  

   stylesheets: [
    "~node_modules/font-awesome/font-awesome.min.css",
  ],

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
          {to: 'https://www.reserveblock.io/#learn', label: 'Learn', position: 'left',className:"navbar__link-large"},
          { to: 'https://www.reserveblock.io/#masternodes', label: 'Masternodes',position: 'left',className:"navbar__link-large"},
          { to: 'https://www.reserveblock.io/#wallet', label: 'Wallet',position: 'left',className:"navbar__link-large"},
          { to: 'https://www.reserveblock.io/#network', label: 'Network',position: 'left',className:"navbar__link-large"},
          { to: 'https://www.reserveblock.io/#build', label: 'Build',position: 'left',className:"navbar__link-large"},
          { to: '/docs/introduction/what-is-rbx',position: 'left',label: 'Wiki', className:"navbar__link-large"},
          { to: 'https://www.reserveblock.io/#community', label: 'Community',position: 'left',className:"navbar__link-large"},

          { to: 'https://twitter.com/ReserveBlockIO', label: 'Twitter', position: 'right', className:"navbar__link-small social-link social-link-twitter"},
          { to: 'https://discord.com/invite/PnS2HRETDh', label: 'Twitter', position: 'right', className:"navbar__link-small social-link social-link-discord"},
          { to: 'https://github.com/ReserveBlockIO', label: 'Twitter', position: 'right', className:"navbar__link-small social-link social-link-github"},
          { to: 'https://t.me/reserveblock', label: 'Twitter', position: 'right', className:"navbar__link-small social-link social-link-telegram"},

          { to: 'https://wallet.rbx.network/', label: 'Web Wallet', position: 'right', className:"navbar__link-small"},
          { to: '/docs/documents/whitepaper-v2', label: 'Whitepaper v2',position: 'right',className:"navbar__link-small"},
          { to: 'https://www.reserveblock.io/disclaimer', label: 'Disclaimer',position: 'right',className:"navbar__link-small"},
        ],
      },
      
      footer: {
        style: 'dark',
        links: [
          {
            title: 'GENERAL',
            items: [
              {label: 'Learn', to: 'https://www.reserveblock.io/#learn',},
              {label: 'Masternodes', to: 'https://www.reserveblock.io/#masternodes',},
              {label: 'Wallet', to: 'https://www.reserveblock.io/#wallet',},
            ],
          },
          {
            title: 'DEVELOP',
            items: [
              {label: 'Network', to: 'https://www.reserveblock.io/#network',},
              {label: 'Build', to: 'https://www.reserveblock.io/#build',},
              {label: 'Community', to: 'https://www.reserveblock.io/#community',},
            ],
          },
          {
            title: 'FAQS',
            items: [
              {label: 'General',to: 'https://www.reserveblock.io/faq#general',},
              {label: 'Masternodes',to: 'https://www.reserveblock.io/faq#masternodes',},
              {label: 'Datanodes',to: 'https://www.reserveblock.io/faq#datanodes',},
            ],
          },
          {
            title: 'ABOUT',
            items: [
              {label: 'Disclaimer',to: 'https://www.reserveblock.io/disclaimer'},
              {label: 'Litepaper',to: 'https://www.reserveblock.io/static/media/ReserveBlockLitePaper.f08596443b119bc51d6d.pdf',},
              {label: 'Contact',to: 'mailto:dev@reserveblock.io'},
            ]
          },
        ],
        copyright: `© ${new Date().getFullYear()} ReserveBlock`,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      prism: {
        additionalLanguages:["csharp"]
      }
      
          
    }),
};

module.exports = config;
