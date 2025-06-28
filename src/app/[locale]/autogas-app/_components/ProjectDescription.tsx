'use client';

import { ParseKeys } from 'i18next';
import { Trans, useTranslation } from 'react-i18next';

import { SectionTitle } from '@/components/SectionTitle';

type ListItemProps = {
  _key: ParseKeys<'autogas'>;
};
function ListItem({ _key }: ListItemProps) {
  const { t } = useTranslation('autogas');
  return (
    <li>
      <Trans t={t} i18nKey={_key}>
        <span className='font-bold text-primary'>Verb</span>
        Rest
      </Trans>
    </li>
  );
}

export function ProjectDescription() {
  const { t } = useTranslation('autogas');
  const subtitleClass = 'font-bold text-lg mt-4';
  return (
    <section id='project-description' className='py-16 grid place-items-center'>
      <div className='container mx-auto grid place-items-center gap-8'>
        <SectionTitle>{t('project.title')}</SectionTitle>
        <div className='flex gap-4'>
          <div className='max-w-prose grid gap-4'>
            <h3 className={subtitleClass}>{t('project.subtitle-1')}</h3>
            <p>
              <Trans t={t} i18nKey='project.description-1'>
                First
                <span className='font-bold text-primary'>Highlight</span>
                <span className='font-bold text-primary'>Highlight</span>
              </Trans>
            </p>
            <h3 className={subtitleClass}>{t('project.subtitle-2')}</h3>
            <p>
              <Trans t={t} i18nKey='project.description-2'>
                First
                <span className='font-bold text-primary'>Highlight</span>
                <span className='font-bold text-primary'>Highlight</span>
              </Trans>
            </p>
            <ul className='pl-4 list-["✅"] grid gap-2'>
              <ListItem _key='project.list-1' />
              <ListItem _key='project.list-2' />
              <ListItem _key='project.list-3' />
              <ListItem _key='project.list-4' />
              <ListItem _key='project.list-5' />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
