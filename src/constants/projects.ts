import { ParseKeys } from 'i18next';

import { Skill } from '@/features/skills';

type Key = ParseKeys<'root'>;

export const AUTOGAS_TECHNOLOGIES: Skill[] = [
  'NextJS',
  'Prisma',
  'Typescript',
  'Tailwind',
  'Shadcn',
  'LibreOffice',
  'Docker',
  'Google Cloud',
  'Postgres',
] as const;

export type Project = {
  category?: string;
  lightImageUrl: string;
  darkImageUrl: string;
  imageAltKey: Key;

  titleKey: Key;
  descriptionKey: Key;
  tags: Skill[];

  codeUrl?: string;
  detailsUrl?: string;
  webUrl?: string;

  detailsExternal: boolean;
};
export const PROJECTS: readonly Project[] = [
  {
    lightImageUrl: '/images/projects/autogas/index-light.png',
    darkImageUrl: '/images/projects/autogas/index-dark.png',
    imageAltKey: 'projects.autogas.index-alt',
    titleKey: 'projects.autogas.title',
    descriptionKey: 'projects.autogas.description',
    tags: AUTOGAS_TECHNOLOGIES,
    detailsUrl: '/autogas-app',
    detailsExternal: false,
  },
  {
    lightImageUrl: '/images/projects/outreach-magic/logo-light.svg',
    darkImageUrl: '/images/projects/outreach-magic/logo-dark.svg',
    imageAltKey: 'projects.outreach-magic.index-alt',
    titleKey: 'projects.outreach-magic.title',
    descriptionKey: 'projects.outreach-magic.description',
    tags: ['Python', 'Flask', 'Selenium', 'MongoDB', 'Google Cloud', 'Docker'],
    detailsUrl: 'https://outreachmagic.io',
    detailsExternal: true,
  },
  {
    category: 'Frontendmentor',
    lightImageUrl: '/images/projects/todo-app/index-light.png',
    darkImageUrl: '/images/projects/todo-app/index-dark.png',
    imageAltKey: 'projects.todo.index-alt',
    titleKey: 'projects.todo.title',
    descriptionKey: 'projects.todo.description',
    tags: ['React', 'Express', 'MongoDB', 'Docker', 'Google Cloud'],
    codeUrl: 'https://github.com/cvenencia/todo-app-main',
    detailsUrl: 'https://todo-app.cvenencia.com',
    webUrl:
      'https://www.frontendmentor.io/solutions/fullstack-solution-with-user-login-and-registration-functionality-XN2AV2hWg6',
    detailsExternal: true,
  },
  {
    category: 'Frontendmentor',
    lightImageUrl: '/images/projects/countries/index-light.png',
    darkImageUrl: '/images/projects/countries/index-dark.png',
    imageAltKey: 'projects.countries.index-alt',
    titleKey: 'projects.countries.title',
    descriptionKey: 'projects.countries.description',
    tags: ['React', 'Typescript'],
    codeUrl:
      'https://github.com/cvenencia/rest-countries-api-with-color-theme-switcher',
    detailsUrl: 'https://countries.cvenencia.com',
    webUrl:
      'https://www.frontendmentor.io/solutions/rest-countries-api-with-color-theme-switcher-w2slV5AAwV',
    detailsExternal: true,
  },
];
