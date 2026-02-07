import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  // === SITE METADATA ===
  title: 'KoreShield',
  tagline: 'Open-source security platform protecting LLM applications from prompt injection attacks',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // === DEPLOYMENT ===
  url: 'https://docs.koreshield.com',
  baseUrl: '/',
  organizationName: 'koreshield',
  projectName: 'koreshield',


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
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/orgs/koreshield/koreshield-docs',
          breadcrumbs: true,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/orgs/koreshield/koreshield-docs',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
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
    image: 'img/koreshield-social-card.jpg',
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
      title: 'KoreShield',
      logo: {
        alt: 'KoreShield Logo',
        src: 'img/Black.svg',
        srcDark: 'img/White.svg',
        href: 'https://koreshield.com/',
      },
      items: [
        {
          to: 'https://koreshield.com/',
          position: 'left',
          label: 'Product',
        },
        {
          to: 'https://blog.koreshield.com/',
          label: 'Blog',
          position: 'left',
        },
        {
          to: '/getting-started/quick-start',
          label: 'Getting Started',
          position: 'left',
          className: 'nav-link_getting-started',
        },
        {
          to: '/integrations/',
          label: 'Integrations',
          position: 'left',
        },
        {
          to: '/api/',
          label: 'API Reference',
          position: 'right',
        },
        {
          href: 'https://github.com/koreshield/koreshield',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://discord.gg/koreshield',
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
              to: '/intro/',
            },
            {
              label: 'Installation',
              to: '/getting-started/installation',
            },
            {
              label: 'Quick Start',
              to: '/getting-started/quick-start',
            },
            {
              label: 'Configuration',
              to: '/configuration/',
            },
          ],
        },
        {
          title: 'Developers',
          items: [
            {
              label: 'API Reference',
              to: '/api/',
            },
            {
              label: 'Python SDK',
              href: 'https://github.com/koreshield/koreshield/tree/main/koreshield-python-sdk',
            },
            {
              label: 'JavaScript SDK',
              href: 'https://github.com/koreshield/koreshield/tree/main/koreshield-js-sdk',
            },
            {
              label: 'Integrations',
              to: '/integrations/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/koreshield/koreshield',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/koreshield',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/koreshield',
            },
            {
              label: 'Contributing',
              href: 'https://github.com/koreshield/koreshield/blob/main/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Case Studies',
              to: '/case-studies/',
            },
            {
              label: 'Security',
              href: 'https://github.com/koreshield/koreshield/blob/main/SECURITY.md',
            },
            {
              label: 'License',
              href: 'https://github.com/koreshield/koreshield/blob/main/LICENSE',
            },
            {
              label: 'Support',
              href: 'mailto:support@koreshield.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} KoreShield. Open source under MIT License.`,
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
