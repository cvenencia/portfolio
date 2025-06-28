'use client';

import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { Trans, useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';
import { firaCode } from '@/fonts';
import { cn } from '@/lib/utils';

export function Hero() {
  const { t } = useTranslation('autogas');
  return (
    <section
      id='hero'
      className='max-w-5xl mx-auto pt-48 pb-24 grid place-items-center sm:grid-cols-2'
    >
      <div className='grid gap-4'>
        <h1
          className={cn(firaCode.className, 'font-bold text-4xl sm:text-6xl')}
        >
          Autogas la 17
        </h1>
        <p className='text-xl'>
          <Trans t={t} i18nKey='hero.description'>
            placeholder
            <strong className='font-bold text-primary'>
              Barranquilla, Colombia
            </strong>
          </Trans>
        </p>
        <Button asChild className='py-8 text-lg text-wrap text-center'>
          <a href='https://autogasla17.com' target='_blank'>
            <ExternalLink />
            {t('hero.link-text')}
          </a>
        </Button>
      </div>
      <div className='relative w-full min-h-64 h-full max-w-md'>
        <Image
          src='/images/projects/autogas/logo-dark.png'
          alt={t('hero.logo-alt')}
          fill
          sizes='692px'
          className='object-contain hidden dark:block'
        />
        <Image
          src='/images/projects/autogas/logo-light.png'
          alt={t('hero.logo-alt')}
          fill
          sizes='692px'
          className='object-contain dark:hidden'
        />
      </div>
    </section>
  );
}
