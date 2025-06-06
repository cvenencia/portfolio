'use client';

import Image from 'next/image';
import { Trans, useTranslation } from 'react-i18next';

import { firaCode } from '@/fonts';
import { cn } from '@/lib/utils';

export function Hero() {
  const { t } = useTranslation();
  return (
    <section id='hero' className='h-screen grid place-items-center'>
      <div className='grid gap-4'>
        <h1
          className={cn(
            firaCode.className,
            'font-bold text-4xl sm:text-6xl lg:text-8xl'
          )}
        >
          Carlos Venencia<span className='text-primary'>.</span>
        </h1>
        <div className='flex gap-2 items-center'>
          <Image
            className='w-8 h-6'
            priority
            src='/icons/flag_of_colombia.svg'
            alt={t('hero.flag-alt')}
            width={32}
            height={24}
          />
          <div className='lg:text-3xl sm:text-xl'>
            <Trans i18nKey='hero.subtitle' t={t}>
              <strong className='font-bold text-primary'>
                Full-Stack Developer
              </strong>{' '}
              from Colombia
            </Trans>
          </div>
        </div>
      </div>
    </section>
  );
}
