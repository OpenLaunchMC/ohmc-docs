// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenLaunch',
  tagline: 'A part of Minecraft ecosystem',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ohmc.unili.eu.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'OpenLaunchMC', // Usually your GitHub org/user name.
  projectName: 'ohmc-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
        },
        blog: {
          showReadingTime: true,
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'OpenLaunch',
        logo: {
          alt: 'OpenLaunch Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro/intro',
            position: 'left',
            label: 'Introduction',
          },
          {
            type: 'doc',
            docId: 'crebit/intro',
            position: 'left',
            label: 'Crebit',
          },
          {
            type: 'doc',
            docId: 'fraxinus/intro',
            position: 'left',
            label: 'Fraxinus',
          },
          {
            type: 'doc',
            docId: 'ragnarok/intro',
            position: 'left',
            label: 'Ragnarok',
          },
          {
            type: 'doc',
            docId: 'modhashlib/intro',
            position: 'left',
            label: 'ModHashlib',
          },
          {
            type: 'doc',
            docId: 'jar-rs/intro',
            position: 'left',
            label: 'JAR-RS',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/OpenLaunchMC',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/OpenLaunchMC',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OpenLaunchMC. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
