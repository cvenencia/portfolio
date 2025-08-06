import { ParseKeys } from 'i18next';

type Key = ParseKeys<'root'>;

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
    categoryKey: 'credentials.type.certificate',
    titleKey: 'credentials.ef-set.title',
    description: 'EF SET',
    location: 'EF (Education First)',
    periodKey: 'credentials.ef-set.period',
    imageUrl: '/images/credentials/ef.jpg',
    imageAltKey: 'credentials.ef-set.image-alt',
    detailsUrl:
      'https://drive.google.com/file/d/1ku6kbqt1K-KddLrbzDlDT10NywjOv0Ef/view?usp=sharing',
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
