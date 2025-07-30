import { Metadata } from 'next';

import { FadeInWrapper } from '@/components/FadeInWrapper';
import { Footer } from '@/components/Footer';
import { LinkData, Navbar } from '@/components/Navbar';
import { initTranslations } from '@/i18n';
import { generateMetadataAlternates } from '@/utils/metadata';

import { Features } from './_components/Features';
import { Hero } from './_components/Hero';
import { Project } from './_components/Project';
import { Technologies } from './_components/Technologies';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = (await params).locale;
  const { t } = await initTranslations(locale, ['autogas']);
  return {
    title: t('autogas:meta.title'),
    description: t('autogas:meta.description'),
    alternates: generateMetadataAlternates(locale, '/autogas-app'),
  };
}

const LINKS: LinkData<'autogas'>[] = [
  { href: '#hero', translationKey: 'nav.hero' },
  { href: '#project', translationKey: 'nav.project' },
  { href: '#features', translationKey: 'nav.features' },
  { href: '#technologies', translationKey: 'nav.technologies' },
];
export default async function AutogasApp() {
  return (
    <FadeInWrapper>
      <Navbar links={LINKS} namespace='autogas' />
      <main className='px-2'>
        <Hero />
        <Project />
        <Features />
        <Technologies />
      </main>
      <Footer />
    </FadeInWrapper>
  );
}
