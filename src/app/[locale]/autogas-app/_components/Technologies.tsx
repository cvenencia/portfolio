'use client';

import { useTranslation } from 'react-i18next';

import { SectionTitle } from '@/components/SectionTitle';
import { AUTOGAS_TECHNOLOGIES } from '@/constants/projects';
import { SkillTag } from '@/features/skills';

export function Technologies() {
  const { t } = useTranslation('autogas');
  return (
    <section id='technologies' className='py-16 grid place-items-center'>
      <div className='container mx-auto grid gap-8'>
        <SectionTitle>{t('technologies.title')}</SectionTitle>
        <ul className='flex gap-4 flex-wrap justify-center'>
          {AUTOGAS_TECHNOLOGIES.map(skill => (
            <SkillTag key={skill} skill={skill} size='lg' />
          ))}
        </ul>
      </div>
    </section>
  );
}
