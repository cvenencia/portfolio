'use client';

import { ParseKeys } from 'i18next';
import { CodeXml, Earth, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

import { LocaleLink } from '@/components/LocaleLink';
import { SectionTitle } from '@/components/SectionTitle';
import { Button } from '@/components/ui/button';
import { type Project as _Project, PROJECTS } from '@/constants/projects';
import { SkillTag } from '@/features/skills';

export function Projects() {
  const { t } = useTranslation();
  return (
    <section id='projects' className='py-16 grid place-items-center'>
      <div className='container mx-auto grid gap-8'>
        <SectionTitle>{t('projects.title')}</SectionTitle>
        <div className='grid gap-16 items-start sm:grid-cols-2 xl:grid-cols-3'>
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
      <h3 className='font-bold text-2xl'>
        {t(project.titleKey)}{' '}
        {project.category && (
          <span className='text-xs bg-accent text-accent-foreground rounded-full p-1'>
            {project.category}
          </span>
        )}
      </h3>
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
  lightImageUrl: string;
  darkImageUrl: string;
  imageAltKey: ParseKeys<'root'>;
  codeUrl?: string;
  detailsUrl?: string;
  webUrl?: string;
  detailsExternal: boolean;
};
function ProjectImage({
  lightImageUrl,
  darkImageUrl,
  imageAltKey,
  codeUrl,
  detailsUrl,
  webUrl,
  detailsExternal,
}: ProjectImageProps) {
  const { t } = useTranslation();
  return (
    <div className='relative aspect-video rounded-lg overflow-hidden border'>
      <Image
        src={lightImageUrl}
        alt={t(imageAltKey)}
        fill
        sizes='500px'
        className='dark:hidden'
      />
      <Image
        src={darkImageUrl}
        alt={t(imageAltKey)}
        fill
        sizes='500px'
        className='hidden dark:block'
      />
      <div
        className='transition-opacity group absolute inset-0 opacity-0 focus-within:opacity-100 hover:opacity-100 bg-black/80'
        tabIndex={-1}
      >
        <div className='transition-transform origin-bottom-left flex gap-2 absolute bottom-2 left-2 scale-0 group-focus-within:scale-100 group-hover:scale-100'>
          {codeUrl && (
            <LinkButton href={codeUrl} external>
              <CodeXml />
            </LinkButton>
          )}
          {detailsUrl && (
            <LinkButton href={detailsUrl} external={detailsExternal}>
              <ExternalLink />
            </LinkButton>
          )}
          {webUrl && (
            <LinkButton href={webUrl} external>
              <Earth />
            </LinkButton>
          )}
        </div>
      </div>
    </div>
  );
}

type LinkButtonProps = {
  children: ReactNode;
  href: string;
  external?: boolean;
};
function LinkButton({ children, href, external }: LinkButtonProps) {
  const Element = external ? 'a' : LocaleLink;
  return (
    <Button variant='secondary' asChild>
      <Element href={href} target={external ? '_blank' : undefined}>
        {children}
      </Element>
    </Button>
  );
}
