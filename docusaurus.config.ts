import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Documentación Facturador electrónico',
  tagline: 'Guía Absoluta del Facturador Pro: Pro 6, Pro X y Pro 7 para Todos',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://documentacion.fastura.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/documentacion/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fastura',
  projectName: 'documentacion',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          includeCurrentVersion: false,
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    'plugin-image-zoom',

    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "facturador", // plugin id
        docsPluginId: "classic", // configured for preset-classic
        config: {
          anulacion_boleta : {
            specPath: "apifacturador/AnulacionBoletas",
            outputDir: "docs/facturador/Anulacion-Boletas",
            baseUrl: "/facturador",
            sidebarOptions: {
              // groupPathsBy: "anulacion-boletas",
            },
          },
          anulacion_facturas: {
            specPath: "apifacturador/AnulaciónFacturasNotas",
            outputDir: "docs/facturador/Anulacion-facturas",
            baseUrl: "/facturador",
            sidebarOptions: {
              // groupPathsBy: "anulacion-facturas",
            },
          },
          generar_boleta: {
            specPath: "apifacturador/GenerarBoleta",
            outputDir: "docs/facturador/Generar-boleta",
            baseUrl: "/facturador",
            sidebarOptions: {
              // groupPathsBy: "generar-boleta",
            },
          },
          generar_cotización: {
            specPath: "apifacturador/GenerarCotizacion",
            outputDir: "docs/facturador/Generar-cotizacion",
            baseUrl: "/facturador",
            sidebarOptions: {
              // groupPathsBy: "generar-cotizacion",
            },
          },
          generar_factura: {
            specPath: "apifacturador/GenerarFactura",
            outputDir: "docs/facturador/Generar-factura",
            baseUrl: "/facturador",
            sidebarOptions: {
              // groupPathsBy: "generar-factura",
            },
          },
          generar_notas: {
            specPath: "apifacturador/GenerarNotas",
            outputDir: "docs/facturador/Generar-notas",
            baseUrl: "/facturador",
            sidebarOptions: {
              // groupPathsBy: "generar-notas",
            },
          },
          generar_resumenes: {
            specPath: "apifacturador/GenerarResúmenes",
            outputDir: "docs/facturador/Generar-resumenes",
            baseUrl: "/facturador",
            sidebarOptions: {
              // groupPathsBy: "generar-resumenes",
            },
          },
          guia_remision: {
            specPath: "apifacturador/GuiaDeRemision",
            outputDir: "docs/facturador/Guia-remision",
            baseUrl: "/facturador",
            sidebarOptions: {
              // groupPathsBy: "guia-remision",
            },
          },
          inventario: {
            specPath: "apifacturador/Inventario",
            outputDir: "docs/facturador/inventario",
            baseUrl: "/facturador",
            sidebarOptions: {
              // groupPathsBy: "inventario",
            },
          },
          productos: {
            specPath: "apifacturador/Productos",
            outputDir: "docs/facturador/productos",
            baseUrl: "/facturador",
            sidebarOptions: {
              // groupPathsBy: "productos",
            },
          },
          retencion: {
            specPath: "apifacturador/Retencion",
            outputDir: "docs/facturador/retencion",
            baseUrl: "/facturador",
            sidebarOptions: {
              // groupPathsBy: "retencion",
            },
          },
          Clientes: {
            specPath: "apifacturador/Clientes",
            outputDir: "docs/facturador/clientes",
            baseUrl: "/facturador",
            sidebarOptions: {
              // groupPathsBy: "retencion",
            },
          },
        }
      },
    ]
  ],

  themes: [
    // ... Your other themes.
    'docusaurus-theme-openapi-docs',
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      }),
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Fastura',
        logo: {
          alt: 'Documentación de facturación',
          src: 'img/fastura.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentacion',
        },
        {type: 'docsVersionDropdown', position: 'right'},
        //{to: '/blog', label: 'Blog', position: 'left'},
        //{to: 'prox', label: 'Pro X', position: 'left'},
        //{
        //  href: 'https://github.com/facebook/docusaurus',
        //  label: 'GitHub',
        //  position: 'right',
        //},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
        //  title: 'Docs',
        //  items: [
        //    {
        //      label: 'Tutorial',
        //      to: '/docs/intro',
        //    },
        //  ],
        //},
        /*{
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],*/
        },
      ],
      //copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['php', 'bash', 'yaml', 'nginx'],
    },
    imageZoom: {
      // CSS selector to apply the plugin to, defaults to '.markdown img'
      selector: '.markdown img',
    },
    scripts: [
      {
        src: 'https://static.buho.la/fastura/documentacion.js',
        async: true,
      },
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
