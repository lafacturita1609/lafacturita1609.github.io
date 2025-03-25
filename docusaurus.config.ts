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
  url: 'https://manual.uio.la',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fastura',
  projectName: 'documentacion',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  trailingSlash: false,
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
          routeBasePath: '/',
          includeCurrentVersion: false,
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/fastura/documentacion/tree/master/',
            
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    'plugin-image-zoom',
    './synonyms-plugin.js',

    [
      require.resolve('docusaurus-lunr-search'),
      {
        // Habilitar el idioma español
        languages: ['es', 'en'],
        
        // Personalizar campos para mejorar la relevancia
        fields: {
          title: { boost: 200 },
          content: { boost: 2 },
          keywords: { boost: 150 }, // Aumentado para darle más peso a keywords
          headings: { boost: 100 }  // Asegurar que los encabezados tengan buen peso
        },
        
        // Palabras a excluir (stop words en español)
        stopWords: [
          'a', 'al', 'algo', 'algunas', 'algunos', 'ante', 'antes', 'como',
          'con', 'contra', 'cual', 'cuando', 'de', 'del', 'desde', 'donde',
          'durante', 'e', 'el', 'ella', 'ellas', 'ellos', 'en', 'entre',
          'era', 'erais', 'eran', 'eras', 'eres', 'es', 'esa', 'esas',
          'ese', 'eso', 'esos', 'esta', 'estaba', 'estabais', 'estaban',
          'estabas', 'estad', 'estada', 'estadas', 'estado', 'estados',
          'estamos', 'estando', 'estar', 'estaremos', 'estará', 'estarán',
          'estarás', 'estaré', 'estaréis', 'estaría', 'estaríais',
          'estaríamos', 'estarían', 'estarías', 'estas', 'este', 'estemos',
          'esto', 'estos', 'estoy', 'estuve', 'estuviera', 'estuvierais',
          'estuvieran', 'estuvieras', 'estuvieron', 'estuviese', 'estuvieseis',
          'estuviesen', 'estuvieses', 'estuvimos', 'estuviste', 'estuvisteis',
          'estuviéramos', 'estuviésemos', 'estuvo', 'está', 'estábamos',
          'estáis', 'están', 'estás', 'esté', 'estéis', 'estén', 'estés',
          'fue', 'fuera', 'fuerais', 'fueran', 'fueras', 'fueron', 'fuese',
          'fueseis', 'fuesen', 'fueses', 'fui', 'fuimos', 'fuiste', 'fuisteis',
          'fuéramos', 'fuésemos', 'ha', 'habéis', 'había', 'habíais', 'habíamos',
          'habían', 'habías', 'han', 'has', 'hasta', 'hay', 'haya', 'hayáis',
          'hayamos', 'hayan', 'hayas', 'he', 'hemos', 'hube', 'hubiera',
          'hubierais', 'hubieran', 'hubieras', 'hubieron', 'hubiese', 'hubieseis',
          'hubiesen', 'hubieses', 'hubimos', 'hubiste', 'hubisteis', 'hubiéramos',
          'hubiésemos', 'hubo', 'la', 'las', 'le', 'les', 'lo', 'los', 'me', 'mi',
          'mis', 'mucho', 'muchos', 'muy', 'más', 'mí', 'mía', 'mías', 'mío',
          'míos', 'nada', 'ni', 'no', 'nos', 'nosotras', 'nosotros', 'nuestra',
          'nuestras', 'nuestro', 'nuestros', 'o', 'os', 'otra', 'otras', 'otro',
          'otros', 'para', 'pero', 'poco', 'por', 'porque', 'que', 'quien',
          'quienes', 'qué', 'se', 'sea', 'seamos', 'sean', 'seas', 'sentid',
          'sentida', 'sentidas', 'sentido', 'sentidos', 'seremos', 'será',
          'serán', 'serás', 'seré', 'seréis', 'sería', 'seríais', 'seríamos',
          'serían', 'serías', 'seáis', 'si', 'sido', 'siendo', 'sin', 'sobre',
          'sois', 'somos', 'son', 'soy', 'su', 'sus', 'suya', 'suyas', 'suyo',
          'suyos', 'sí', 'también', 'tanto', 'te', 'tendremos', 'tendrá',
          'tendrán', 'tendrás', 'tendré', 'tendréis', 'tendría', 'tendríais',
          'tendríamos', 'tendrían', 'tendrías', 'tened', 'tenemos', 'tenga',
          'tengamos', 'tengan', 'tengas', 'tengo', 'tengáis', 'tenida', 'tenidas',
          'tenido', 'tenidos', 'teniendo', 'tenéis', 'tenía', 'teníais',
          'teníamos', 'tenían', 'tenías', 'ti', 'tiene', 'tienen', 'tienes',
          'todo', 'todos', 'tu', 'tus', 'tuve', 'tuviera', 'tuvierais',
          'tuvieran', 'tuvieras', 'tuvieron', 'tuviese', 'tuvieseis', 'tuviesen',
          'tuvieses', 'tuvimos', 'tuviste', 'tuvisteis', 'tuviéramos',
          'tuviésemos', 'tuvo', 'tuya', 'tuyas', 'tuyo', 'tuyos', 'tú', 'un',
          'una', 'uno', 'unos', 'vosotras', 'vosotros', 'vuestra', 'vuestras',
          'vuestro', 'vuestros', 'y', 'ya', 'yo', 'él', 'éramos'
        ],

        searchResultLimits: 15, 
        searchResultContextMaxLength: 100, // Más contexto en los resultados
        highlightSearchTermsOnTargetPage: true, // Resaltar términos de búsqueda
        
        // Activar resaltado en los resultados
        highlightResult: true
      }
    ],
  


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

    'docusaurus-theme-openapi-docs',

    /*
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // Configuraciones para búsqueda global
        hashed: true,
        indexDocs: true,
        indexPages: true,
        docsRouteBasePath: '/', // Importante: cambia esto para buscar en todas las rutas de docs
        language: ["es", "en"], // Idiomas que quieres indexar
        searchContextByPaths: ["docs"], // Asegura búsqueda global en docs
        useAllContextsWithNoSearchContext: true, // Compartir índices entre contextos
        
        // Opcional: Buscar en todas las versiones
        docsPluginIdForPreferredVersion: "classic", // Si tienes múltiples instancias de docs
        
        // Límites y configuraciones de búsqueda
        searchResultLimits: 15, // Aumenta el número de resultados
        searchResultContextMaxLength: 100, // Más contexto en los resultados
        highlightSearchTermsOnTargetPage: true, // Resaltar términos de búsqueda
      },
    ],
  ]
    */
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/logo_buho.png',
      navbar: {
        title: 'Fastura',
        logo: {
          alt: 'Documentación de facturación',
          src: 'img/fastura.svg',
      },
      items: [
        //{
        //  type: 'docSidebar',
        //  sidebarId: 'tutorialSidebar',
        //  position: 'left',
        //  label: 'Documentacion',
        //},
        {type: 'docsVersionDropdown', position: 'right'},
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
      //{
      // Script to reload the page on version change
      //  src: '/js/reload-on-version-change.js',
      //  async: true,
      //},
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
