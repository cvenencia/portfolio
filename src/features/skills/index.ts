export { iconForSkill } from './iconForSkill';

export const SKILLS = [
  // Languages/Frameworks
  'NextJS',
  'React',
  'Typescript',
  'Express',
  'Python',
  'Flask',

  // Libraries
  'LibreOffice',
  'Tailwind',
  'Selenium',
  'Shadcn',

  // Database
  'Postgres',
  'MongoDB',
  'Prisma',

  // Deployment
  'Google Cloud',
  'Docker',
] as const;
export type Skill = (typeof SKILLS)[number];
