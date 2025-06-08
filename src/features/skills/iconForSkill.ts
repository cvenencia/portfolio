import { ComponentProps, FC } from 'react';

import { Skill } from '.';
import Docker from './icons/docker.svg';
import Express from './icons/express.svg';
import Flask from './icons/flask.svg';
import GoogleCloud from './icons/gc.svg';
import LibreOffice from './icons/libreoffice.svg';
import MongoDB from './icons/mongodb.svg';
import NextJS from './icons/next-js.svg';
import Postgres from './icons/postgres.svg';
import Prisma from './icons/prisma.svg';
import Python from './icons/python.svg';
import React from './icons/react.svg';
import Selenium from './icons/selenium.svg';
import Shadcn from './icons/shadcn.svg';
import Tailwind from './icons/tailwind.svg';
import Typescript from './icons/typescript.svg';

export function iconForSkill(tag: Skill): FC<ComponentProps<'svg'>> {
  switch (tag) {
    case 'NextJS':
      return NextJS;
    case 'React':
      return React;
    case 'Typescript':
      return Typescript;
    case 'Express':
      return Express;
    case 'Python':
      return Python;
    case 'Flask':
      return Flask;
    case 'LibreOffice':
      return LibreOffice;
    case 'Tailwind':
      return Tailwind;
    case 'Selenium':
      return Selenium;
    case 'Shadcn':
      return Shadcn;
    case 'Postgres':
      return Postgres;
    case 'MongoDB':
      return MongoDB;
    case 'Prisma':
      return Prisma;
    case 'Google Cloud':
      return GoogleCloud;
    case 'Docker':
      return Docker;
    default:
      return tag satisfies never;
  }
}
