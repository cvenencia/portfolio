'use client';

import { Braces } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { SectionTitle } from '@/components/SectionTitle';

export function AboutMe() {
  const { t } = useTranslation();
  return (
    <section id='about-me' className='py-16 grid place-items-center'>
      <div className='container mx-auto grid place-items-center gap-8'>
        <SectionTitle>{t('about-me.title')}</SectionTitle>
        <div className='flex gap-12 items-center'>
          <p className='text-lg max-w-prose'>{t('about-me.description')}</p>
          <Braces className='hidden sm:block shrink-0 size-32 text-primary' />
        </div>
      </div>
    </section>
  );
}
