'use client';

import { useTranslation } from 'react-i18next';

import { SectionTitle } from '@/components/SectionTitle';
import { SKILLS } from '@/features/skills';

import { SkillTag } from './SkillTag';

export function Skills() {
  const { t } = useTranslation();
  return (
    <section id='skills' className='py-16 grid place-items-center'>
      <div className='container mx-auto grid gap-8'>
        <SectionTitle>{t('skills.title')}</SectionTitle>
        <ul className='flex gap-4 flex-wrap justify-center'>
          {SKILLS.map(skill => (
            <SkillTag key={skill} skill={skill} size='lg' />
          ))}
        </ul>
      </div>
    </section>
  );
}
