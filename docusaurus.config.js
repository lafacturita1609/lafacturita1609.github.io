// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentación Facturador electrónico',
  tagline: 'Guia oficial completa y definitiva del facturador Pro 5 y Pro X',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://documentacion.fastura.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/documentacion/',

  // GitHub pages deployment config.
  organizationName: 'fastura',
  projectName: 'documentacion',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          includeCurrentVersion: false,
          lastVersion: 'prox',
          versions: {
            prox: {
              label: 'Pro X',
              path: 'prox',
            },
            pro6: {
              label: 'Pro 6',
              path: 'pro6',
            }
          },
        },
        // blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [  
    // Plugin para la documentación "Prox"  
    /*[  
      '@docusaurus/plugin-content-docs',  
      {  
        id: 'Prox', // ID único  
        path: 'Prox',  
        routeBasePath: 'Prox',  
        sidebarPath: require.resolve('./proxsidebar.js'),   
      },  
    ],  
    
    // Plugin para la documentación "Pro 6"  
    [  
      '@docusaurus/plugin-content-docs',  
      {  
        id: 'Pro6', // ID único  
        path: 'Pro6',  
        routeBasePath: 'Pro6',  
        sidebarPath: require.resolve('./pro6sidebar.js'),  
      },  
    ],*/
    [  
      'plugin-image-zoom',   
      {   
      },  
    ],  
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        hashed: true,
      }),
    ],  
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Documentación',
        logo: {
          alt: 'Documentación de facturación',
          src: 'img/fastura.svg',
        },
        items: [
          {type: 'docsVersionDropdown',},
          //{to: '/pro6', label: 'Pro 6', position: 'left'},
          //{to: '/prox', label: 'Pro X', position: 'left'},
          //{
          // href: 'https://github.com/facebook/docusaurus',
          // label: 'GitHub',
          // position: 'right',
          //},
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: themes.dracula,
        darkTheme: themes.dracula,
      },
      theme: {
        customCss: require.resolve('./src/css/custom.css'),
        
      },
      imageZoom: {
        selector: '.markdown img',
      },
    }),
    scripts: [
      {
        src: 'https://static.buho.la/fastura/documentacion.js',
        async: true,
      },
    ],
};

module.exports = config;
