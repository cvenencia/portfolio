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

export type Credential = {
  categoryKey: Key;
  titleKey: Key;
  description: string;

  location?: string;
  periodKey: Key;

  imageUrl: string;
  imageAltKey: Key;
  detailsUrl?: string;
};
export const CREDENTIALS: readonly Credential[] = [
  {
    categoryKey: 'credentials.type.university',
    titleKey: 'credentials.university.title',
    description: 'Universidad del Norte',
    location: 'Barranquilla, Colombia',
    periodKey: 'credentials.university.period',
    imageUrl: '/images/credentials/universidad-del-norte.svg',
    imageAltKey: 'credentials.university.image-alt',
  },
  {
    categoryKey: 'credentials.type.online-course',
    titleKey: 'credentials.react-advanced.title',
    description: 'React Simplified - Advanced',
    location: 'Web Dev Simplified',
    periodKey: 'credentials.react-advanced.period',
    imageUrl: '/images/credentials/react-advanced.jpg',
    imageAltKey: 'credentials.react-advanced.image-alt',
    detailsUrl:
      'https://drive.google.com/file/d/19YOdTzfERebjFM4lo0KWc7BEuQ2TtSQZ/view?usp=sharing',
  },
  {
    categoryKey: 'credentials.type.online-course',
    titleKey: 'credentials.nextjs.title',
    description: 'React Simplified - NextJS',
    location: 'Web Dev Simplified',
    periodKey: 'credentials.nextjs.period',
    imageUrl: '/images/credentials/nextjs.jpg',
    imageAltKey: 'credentials.nextjs.image-alt',
    detailsUrl:
      'https://drive.google.com/file/d/1mMQD7Faindh67S1U6agWucc_ZCgvFLUH/view?usp=sharing',
  },
  {
    categoryKey: 'credentials.type.online-course',
    titleKey: 'credentials.typescript.title',
    description: 'Typescript Simplified',
    location: 'Web Dev Simplified',
    periodKey: 'credentials.typescript.period',
    imageUrl: '/images/credentials/typescript.jpg',
    imageAltKey: 'credentials.typescript.image-alt',
    detailsUrl:
      'https://drive.google.com/file/d/1zIRlgBQLsz-CnxdZNThwHJKZZchMd3K4/view?usp=sharing',
  },
  {
    categoryKey: 'credentials.type.certificate',
    titleKey: 'credentials.pcep.title',
    description: 'PCEP - Certified Entry-Level Python Programmer',
    location: 'Python Institute',
    periodKey: 'credentials.pcep.period',
    imageUrl: '/images/credentials/python-institute.png',
    imageAltKey: 'credentials.pcep.image-alt',
    detailsUrl:
      'https://www.credly.com/badges/00b4173e-13a3-4aff-a47d-c6390812dfa6/public_url',
  },
];
