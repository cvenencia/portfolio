export { iconForSkill as iconForTag } from '@/features/skills';

import { ParseKeys } from 'i18next';

import { Skill } from '@/features/skills';

type Key = ParseKeys<'root'>;
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
};
export const PROJECTS: readonly Project[] = [
  {
    lightImageUrl: '/images/projects/autogas/light-index.png',
    darkImageUrl: '/images/projects/autogas/dark-index.png',
    imageAltKey: 'projects.autogas.index-alt',
    titleKey: 'projects.autogas.title',
    descriptionKey: 'projects.autogas.description',
    tags: [
      'NextJS',
      'Prisma',
      'Typescript',
      'Tailwind',
      'Shadcn',
      'LibreOffice',
      'Docker',
      'Google Cloud',
      'Postgres',
    ],
    detailsUrl: '/autogas-app',
  },
  {
    category: 'Frontendmentor',
    lightImageUrl: '/images/projects/todo-app/light-index.png',
    darkImageUrl: '/images/projects/todo-app/dark-index.png',
    imageAltKey: 'projects.todo.index-alt',
    titleKey: 'projects.todo.title',
    descriptionKey: 'projects.todo.description',
    tags: ['React', 'Express', 'MongoDB', 'Docker', 'Google Cloud'],
    codeUrl: 'https://github.com/cvenencia/todo-app-main',
    detailsUrl: 'https://todo-app.cvenencia.com',
    webUrl:
      'https://www.frontendmentor.io/solutions/fullstack-solution-with-user-login-and-registration-functionality-XN2AV2hWg6',
  },
  {
    category: 'Frontendmentor',
    lightImageUrl: '/images/projects/countries/light-index.png',
    darkImageUrl: '/images/projects/countries/dark-index.png',
    imageAltKey: 'projects.countries.index-alt',
    titleKey: 'projects.countries.title',
    descriptionKey: 'projects.countries.description',
    tags: ['React', 'Typescript'],
    codeUrl:
      'https://github.com/cvenencia/rest-countries-api-with-color-theme-switcher',
    detailsUrl: 'https://countries.cvenencia.com',
    webUrl:
      'https://www.frontendmentor.io/solutions/rest-countries-api-with-color-theme-switcher-w2slV5AAwV',
  },
];
