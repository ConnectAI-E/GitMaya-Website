import React from 'react';
import { useRouter } from 'next/router';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';

import { tvs } from '@components';

import pkg from './package.json';
import { ifInIndex } from '@utils';
import { LogoDark, LogoLight } from '@components/logo/logo';
import {Footer} from '@components/footer';

const DEFAULT_VERSION = '0.0.1';

const getVersion = () => {
  return pkg?.version?.replace('^', '') ?? DEFAULT_VERSION;
};

const config: DocsThemeConfig = {
  darkMode: true,
  themeSwitch: {
    component: undefined
  },
  nextThemes: {
    defaultTheme: 'dark',
    forcedTheme: 'dark'
  },
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'zh', text: '中文' }
  ],
  logo: function useHead() {
    const { route } = useRouter();
    const { darkMode } = useConfig();
    return (
      <div className="flex items-center">
        <LogoDark height={32} />
        {ifInIndex(route) ? null : (
          <>
            <b className="ml-1.5 hidden text-sm font-semibold sm:block sm:text-base">
              GitMaya
            </b>
            <span className={tvs.badge({ class: 'hidden sm:flex' })}>
              v{getVersion()}
            </span>
          </>
        )}
      </div>
    );
  },
  head: function useHead() {
    const config = useConfig();
    const description =
      config.frontMatter.description || 'Make Git Flow In Chat ';
    const image = config.frontMatter.image || '/banner.png';
    return (
      <>
        <title>{`GitMaya - ${description}`}</title>
        {/* Favicons, meta */}
        <link
          href="/favicon/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/favicon/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/favicon/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link href="/favicon/site.webmanifest" rel="manifest" />
        <link
          color="#000000"
          href="/favicon/safari-pinned-tab.svg"
          rel="mask-icon"
        />
        <meta content="#ffffff" name="msapplication-TileColor" />
        <meta content="en" httpEquiv="Content-Language" />
        <meta content={description} name="description" />
        <meta content={description} name="og:description" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="@nextui-org" name="twitter:site" />
        <meta content={image} name="twitter:image" />
        <meta content={`${config.title} – gitmaya`} name="og:title" />
        <meta content={image} name="og:image" />
        <meta content="gitmaya" name="apple-mobile-web-app-title" />
      </>
    );
  },
  useNextSeoProps: function SEO() {
    const router = useRouter();
    const { frontMatter } = useConfig();
    console.log(frontMatter);
    const defaultTitle = '';

    return {
      description: frontMatter.description,
      defaultTitle,
      titleTemplate: router.pathname !== '/' ? `${defaultTitle}` : ''
    };
  },
  project: {
    link: 'https://github.com/connectai-e/gitmaya'
  },
  // chat: {
  //   link: 'https://discord.gg/9b6yyZKmH4'
  // },
  docsRepositoryBase:
    'https://github.com/connectai-e/gitmaya-website/blob/main',
  gitTimestamp: '',
  sidebar: {
    defaultMenuCollapseLevel: 1
  },
  footer: {
    text: (
        <Footer />
    )
  }
};

export default config;
