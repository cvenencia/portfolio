'use client';

import { useTranslation } from 'react-i18next';

import CopyEmailButton from './CopyEmailButton';
import { SectionTitle } from './SectionTitle';

export function Contact() {
  const { t } = useTranslation();

  return (
    <section id='contact' className='py-16 grid place-items-center'>
      <div className='container mx-auto grid gap-8'>
        <SectionTitle>{t('contact.title')}</SectionTitle>
        <CopyEmailButton />
      </div>
    </section>
  );
}
