// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');




/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'VerifiedX Docs',
  tagline: 'The Financial Operating System for Bitcoin',
  url: 'https://docs.verifiedx.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'VerifiedXBlockchain', // Usually your GitHub org/user name.
  projectName: 'VerifiedX-Docs', // Usually your repo name.

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
            'https://github.com/VerifiedXBlockchain/VerifiedX-Docs/tree/main',
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
          alt: 'VFX Docs',
          src: 'img/vfx-docs.png',
        },
        items: [],
      },

      footer: {
        style: 'dark',
        links: [],
        copyright: `© ${new Date().getFullYear()} VerifiedX`,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      prism: {
        additionalLanguages: ["csharp"]
      }


    }),
  scripts: [
    {
      src: "/scripts/links.js?v=3",
      async: true,
    }

  ]
};

module.exports = config;
