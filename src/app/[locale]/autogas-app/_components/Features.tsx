'use client';

import { ParseKeys } from 'i18next';
import { ComponentProps, ReactNode } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import { ImageCarousel } from '@/components/ImageCarousel';
import { SectionTitle } from '@/components/SectionTitle';
import { cn } from '@/lib/utils';

function Subtitle(props: ComponentProps<'h3'>) {
  return (
    <h3 {...props} className={cn(props.className, 'font-bold text-2xl')} />
  );
}

type FeatureImage = {
  darkFilename: string;
  lightFilename: string;
  altKey: ParseKeys<'autogas'>;
};
type FeatureProps = {
  inverted?: boolean;
  children: ReactNode;
  images: FeatureImage[];
};
function Feature({ inverted, images: _images, children }: FeatureProps) {
  function getImages(light: boolean) {
    return _images.map(image => ({
      src: srcPrefix + (light ? image.lightFilename : image.darkFilename),
      alt: t(image.altKey),
      sizes: '1366px',
    }));
  }
  const { t } = useTranslation('autogas');
  const srcPrefix = '/images/projects/autogas/';
  const lightImages = getImages(true);
  const darkImages = getImages(false);

  const elements = [
    <div key='description' className='grid gap-4'>
      {children}
    </div>,
    <div key='carousel' className='w-full'>
      <ImageCarousel className='dark:hidden' images={lightImages} />
      <ImageCarousel className='hidden dark:flex' images={darkImages} />
    </div>,
  ];
  return (
    <article
      className={cn(
        'grid place-items-center gap-8 w-full mt-8',
        inverted ? 'sm:grid-cols-[.6fr_.4fr]' : 'sm:grid-cols-[.4fr_.6fr]'
      )}
    >
      {inverted ? elements.toReversed() : elements}
    </article>
  );
}

export function Features() {
  const { t } = useTranslation('autogas');
  return (
    <section id='features' className='py-16 grid place-items-center'>
      <div className='container mx-auto grid place-items-center gap-8'>
        <SectionTitle>{t('features.title')}</SectionTitle>
        <Feature
          images={[
            {
              lightFilename: 'services-light.png',
              darkFilename: 'services-dark.png',
              altKey: 'features.db.services-alt',
            },
            {
              lightFilename: 'clients-light.png',
              darkFilename: 'clients-dark.png',
              altKey: 'features.db.clients-alt',
            },
            {
              lightFilename: 'vehicles-light.png',
              darkFilename: 'vehicles-dark.png',
              altKey: 'features.db.vehicles-alt',
            },
          ]}
        >
          <Subtitle>{t('features.db.title')}</Subtitle>
          <p>{t('features.db.description')}</p>
        </Feature>

        <Feature
          inverted
          images={[
            {
              lightFilename: 'template-form-light.png',
              darkFilename: 'template-form-dark.png',
              altKey: 'features.documents.template-form-alt',
            },
            {
              lightFilename: 'service-light.png',
              darkFilename: 'service-dark.png',
              altKey: 'features.documents.service-alt',
            },
            {
              lightFilename: 'service-documents-light.png',
              darkFilename: 'service-documents-dark.png',
              altKey: 'features.documents.service-documents-alt',
            },
          ]}
        >
          <Subtitle>{t('features.documents.title')}</Subtitle>
          <p>
            <Trans t={t} i18nKey='features.documents.description'>
              Placeholder
              <strong className='font-bold text-primary'>Highlight</strong>
            </Trans>
          </p>
        </Feature>

        <Feature
          images={[
            {
              lightFilename: 'user-form-light.png',
              darkFilename: 'user-form-dark.png',
              altKey: 'features.users.user-form-alt',
            },
            {
              lightFilename: 'login.png',
              darkFilename: 'login.png',
              altKey: 'features.users.login-alt',
            },
          ]}
        >
          <Subtitle>{t('features.users.title')}</Subtitle>
          <p>
            <Trans t={t} i18nKey='features.users.description'>
              Placeholder
              <strong className='font-bold text-primary'>Highlight</strong>
              Placeholder
              <strong className='font-bold text-primary'>Highlight</strong>
            </Trans>
          </p>
        </Feature>

        <Feature
          inverted
          images={[
            {
              lightFilename: 'month-light.png',
              darkFilename: 'month-dark.png',
              altKey: 'features.events.month-alt',
            },
            {
              lightFilename: 'week-light.png',
              darkFilename: 'week-dark.png',
              altKey: 'features.events.week-alt',
            },
            {
              lightFilename: 'event-light.png',
              darkFilename: 'event-dark.png',
              altKey: 'features.events.event-alt',
            },
            {
              lightFilename: 'legend-light.png',
              darkFilename: 'legend-dark.png',
              altKey: 'features.events.legend-alt',
            },
          ]}
        >
          <Subtitle>{t('features.events.title')}</Subtitle>
          <p>
            <Trans t={t} i18nKey='features.events.description'>
              Placeholder
              <strong className='font-bold text-primary'>Highlight</strong>
              Placeholder
              <strong className='font-bold text-primary'>Highlight</strong>
            </Trans>
          </p>
        </Feature>
      </div>
    </section>
  );
}
