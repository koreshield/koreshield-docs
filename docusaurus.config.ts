import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  // === SITE METADATA ===
  title: 'Koreshield',
  tagline: 'Open-source security platform protecting LLM applications from prompt injection attacks',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  // === DEPLOYMENT ===
  url: 'https://docs.Koreshield.com',
  baseUrl: '/',
  organizationName: 'Koreshield',
  projectName: 'Koreshield',


  onBrokenLinks: 'throw',
  trailingSlash: true,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // === CONTENT CONFIGURATION ===
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Koreshield/Koreshield-docs/edit/main/',
          breadcrumbs: true,
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        theme: {
          customCss: './src/css/custom.scss',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    'docusaurus-plugin-sass',
  ],

  // === THEME CONFIGURATION ===
  themeConfig: {
    image: 'img/Koreshield-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    // === NAVIGATION BAR ===
    navbar: {
      hideOnScroll: false,
      title: 'Koreshield',
      logo: {
        alt: 'Koreshield Logo',
        src: 'img/Black.svg',
        srcDark: 'img/White.svg',
        href: 'https://Koreshield.com/',
      },
      items: [
        {
          to: 'https://Koreshield.com/',
          position: 'left',
          label: 'Product',
        },
        {
          to: '/docs/getting-started/quick-start',
          label: 'Getting Started',
          position: 'left',
          className: 'nav-link_getting-started',
        },
        {
          to: '/docs/integrations/',
          label: 'Integrations',
          position: 'left',
        },
        {
          to: '/docs/api/',
          label: 'API Reference',
          position: 'right',
        },
        {
          href: 'https://github.com/Koreshield/Koreshield',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://discord.gg/Koreshield',
          label: 'Community',
          position: 'right',
        },
      ],
    },
    // === FOOTER ===
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Product',
          items: [
            {
              label: 'Introduction',
              to: '/',
            },
            {
              label: 'Installation',
              to: '/docs/getting-started/installation',
            },
            {
              label: 'Quick Start',
              to: '/docs/getting-started/quick-start',
            },
            {
              label: 'Configuration',
              to: '/docs/configuration/',
            },
          ],
        },
        {
          title: 'Developers',
          items: [
            {
              label: 'API Reference',
              to: '/docs/api/',
            },
            {
              label: 'Python SDK',
              href: 'https://github.com/Koreshield/Koreshield/tree/main/Koreshield-python-sdk',
            },
            {
              label: 'JavaScript SDK',
              href: 'https://github.com/Koreshield/Koreshield/tree/main/Koreshield-js-sdk',
            },
            {
              label: 'Integrations',
              to: '/docs/integrations/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Koreshield/Koreshield',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/Koreshield',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/Koreshield',
            },
            {
              label: 'Contributing',
              href: 'https://github.com/Koreshield/Koreshield/blob/main/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Case Studies',
              to: '/docs/case-studies/',
            },
            {
              label: 'Security',
              href: 'https://github.com/Koreshield/Koreshield/blob/main/SECURITY.md',
            },
            {
              label: 'License',
              href: 'https://github.com/Koreshield/Koreshield/blob/main/LICENSE',
            },
            {
              label: 'Support',
              href: 'mailto:support@Koreshield.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Koreshield. Open source under MIT License.`,
    },
    // === CODE HIGHLIGHTING ===
    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: [
        'python',
        'javascript',
        'typescript',
        'java',
        'bash',
        'json',
        'yaml',
        'docker',
        'nginx',
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
