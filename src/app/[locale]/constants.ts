export { iconForSkill as iconForTag } from '@/features/skills';

import { ParseKeys } from 'i18next';

import { Skill } from '@/features/skills';

type Key = ParseKeys<'root'>;
export type Project = {
  imageUrl: string;
  imageAltKey: Key;

  titleKey: Key;
  descriptionKey: Key;
  tags: Skill[];

  codeUrl?: string;
  detailsUrl?: string;
};
export const PROJECTS: readonly Project[] = [
  {
    imageUrl: '/images/projects/autogas/index.png',
    imageAltKey: 'projects.autogas.index-alt',
    titleKey: 'projects.autogas.title',
    descriptionKey: 'projects.autogas.description',
    tags: [
      'NextJS',
      'Prisma',
      'Typescript',
      'Tailwind',
      'LibreOffice',
      'Docker',
      'Google Cloud',
      'Postgres',
    ],
    detailsUrl: '/autogas-app',
  },
];
