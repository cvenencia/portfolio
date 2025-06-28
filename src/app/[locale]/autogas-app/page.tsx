import { Metadata } from 'next';

import { initTranslations } from '@/i18n';
import TranslationsProvider from '@/i18n/TranslationsProvider';

import { Features } from './_components/Features';
import { Hero } from './_components/Hero';
import { ProjectDescription } from './_components/ProjectDescription';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = (await params).locale;
  const { t } = await initTranslations(locale, ['autogas']);
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function AutogasApp() {
  return (
    <TranslationsProvider namespaces='autogas'>
      <main className='px-2'>
        <Hero />
        <ProjectDescription />
        <Features />
      </main>
    </TranslationsProvider>
  );
}
