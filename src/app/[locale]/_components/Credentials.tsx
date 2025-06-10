'use client';

import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

import { Credential as _Credential, CREDENTIALS } from '../constants';
import { SectionTitle } from './SectionTitle';

export function Credentials() {
  const { t } = useTranslation();
  return (
    <section id='credentials' className='py-16 grid place-items-center'>
      <div className='container mx-auto grid gap-8'>
        <SectionTitle>{t('credentials.title')}</SectionTitle>
        <div className='grid gap-4 items-stretch sm:grid-cols-2 xl:grid-cols-3'>
          {CREDENTIALS.map(credential => (
            <Credential key={credential.titleKey} {...credential} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Credential(credential: _Credential) {
  const { t } = useTranslation();
  return (
    <Card className='relative overflow-hidden flex justify-between items-center'>
      <div
        className={cn(
          'absolute w-3/4 h-full right-0 flex justify-end items-center pointer-events-none',
          '[mask-image:linear-gradient(90deg,_transparent_20%,black)]',
          'opacity-20 dark:opacity-10'
        )}
      >
        <Image
          src={credential.imageUrl}
          alt={t(credential.imageAltKey)}
          fill
          sizes='300px'
          className='object-cover'
        />
      </div>
      <div className='relative'>
        <CardHeader>
          <CardTitle className='grid justify-items-start gap-2'>
            <div className='text-xs rounded-full px-1 py-0.5 bg-accent text-accent-foreground'>
              {t(credential.categoryKey)}
            </div>
            <div className='text-xl'>{t(credential.titleKey)}</div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>
            <p className='text-card-foreground text-base italic'>
              {credential.description}
            </p>
          </CardDescription>
        </CardContent>
        <CardFooter className='block text-sm'>
          {credential.location && <p>{credential.location}</p>}
          <p className='text-muted-foreground'>{t(credential.periodKey)}</p>
        </CardFooter>
      </div>
      {credential.detailsUrl && (
        <Button asChild className='mr-4' variant='ghost'>
          <a href={credential.detailsUrl} target='_blank'>
            <ExternalLink />
          </a>
        </Button>
      )}
    </Card>
  );
}
