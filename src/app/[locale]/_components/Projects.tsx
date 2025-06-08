'use client';

import { ParseKeys } from 'i18next';
import { CodeXml, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';

import { type Project as _Project, PROJECTS } from '../constants';
import { SectionTitle } from './SectionTitle';
import { SkillTag } from './SkillTag';

export function Projects() {
  const { t } = useTranslation();
  return (
    <section id='projects' className='py-16 grid place-items-center'>
      <div className='container mx-auto grid gap-8'>
        <SectionTitle>{t('projects.title')}</SectionTitle>
        <div className='grid gap-16 sm:grid-cols-2 xl:grid-cols-3'>
          {PROJECTS.map(project => (
            <Project key={project.titleKey} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Project(project: _Project) {
  const { t } = useTranslation();
  return (
    <article className='grid gap-4'>
      <ProjectImage {...project} />
      <h3 className='font-bold text-2xl'>{t(project.titleKey)}</h3>
      <p>{t(project.descriptionKey)}</p>
      <ul className='flex gap-2 flex-wrap'>
        {project.tags.map(tag => (
          <SkillTag key={tag} skill={tag} size='xs' />
        ))}
      </ul>
    </article>
  );
}

type ProjectImageProps = {
  imageUrl: string;
  imageAltKey: ParseKeys<'root'>;
  codeUrl?: string;
  detailsUrl?: string;
};
function ProjectImage({
  imageUrl,
  imageAltKey,
  codeUrl,
  detailsUrl,
}: ProjectImageProps) {
  const { t } = useTranslation();
  return (
    <div className='relative aspect-video rounded-lg overflow-hidden border'>
      <Image src={imageUrl} alt={t(imageAltKey)} fill sizes='500px' />
      <div
        className='transition-opacity group absolute inset-0 opacity-0 focus-within:opacity-100 hover:opacity-100 bg-black/80'
        tabIndex={-1}
      >
        <div className='transition-transform origin-bottom-left flex gap-2 absolute bottom-2 left-2 scale-0 group-focus-within:scale-100 group-hover:scale-100'>
          {codeUrl && (
            <Button variant='secondary' asChild>
              <a href={codeUrl}>
                <CodeXml />
              </a>
            </Button>
          )}
          {detailsUrl && (
            <Button variant='secondary' asChild>
              <a href={detailsUrl}>
                <ExternalLink />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
