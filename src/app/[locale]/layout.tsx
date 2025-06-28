import './globals.css';

import { dir } from 'i18next';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';

import { inter } from '@/fonts';
import { i18nConfig, initTranslations, TranslationsProvider } from '@/i18n';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = (await params).locale;
  const { t } = await initTranslations(locale, ['root']);
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    authors: [{ name: 'Carlos Venencia' }],
    keywords: [
      'Web developer',
      'Desarrollador web',
      'Portfolio',
      'Portafolio',
      'Programmer',
      'Programador',
      'Carlos Venencia',
    ],
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default async function RootLayout(props: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  const { children } = props;

  if (!i18nConfig.locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale} dir={dir(locale)} suppressHydrationWarning>
      <body className={inter.className}>
        <TranslationsProvider namespaces='autogas'>
          <ThemeProvider attribute='class' disableTransitionOnChange>
            <div vaul-drawer-wrapper=''>
              <div className='relative flex min-h-screen flex-col bg-background'>
                <div>{children}</div>
              </div>
            </div>
            <Toaster
              richColors
              duration={15000}
              closeButton
              position='bottom-center'
            />
          </ThemeProvider>
        </TranslationsProvider>
      </body>
    </html>
  );
}
