'use client';

import { Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import useSWRImmutable from 'swr/immutable';

import { CopyButton } from '@/components/CopyButton';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

import { LoadingSpinner } from './LoadingSpinner';

async function fetcher(url: string) {
  return await fetch(url).then(res => res.text());
}
export function CopyEmailButton() {
  const {
    i18n: { resolvedLanguage },
  } = useTranslation();
  const { data: email, isLoading } = useSWRImmutable(
    `/api/email?language=${resolvedLanguage}`,
    fetcher
  );
  return (
    <CopyButton
      size='lg'
      variant='outline'
      copyValue={email}
      className={cn(
        'w-fit mx-auto flex h-auto hocus-visible:bg-background hocus-visible:text-foreground',
        'sm:text-xl sm:[&_svg]:size-8 sm:gap-4 sm:py-4',
        'gap-2 py-2 max-sm:px-4'
      )}
    >
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Mail />
          <Separator
            orientation='vertical'
            className='transition-colors sm:w-[2px] bg-[currentColor]'
          />
          {email}
        </>
      )}
    </CopyButton>
  );
}
