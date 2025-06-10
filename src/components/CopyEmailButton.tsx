'use client';

import { Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { CopyButton } from '@/components/CopyButton';
import { Separator } from '@/components/ui/separator';
import { useEnvironment } from '@/contexts/Environment';
import { cn } from '@/lib/utils';

export function CopyEmailButton() {
  const {
    i18n: { resolvedLanguage },
  } = useTranslation();
  const env = useEnvironment();

  let email: string;
  if (resolvedLanguage === 'es') email = env.SPANISH_EMAIL;
  else email = env.FALLBACK_EMAIL;
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
      <Mail />
      <Separator
        orientation='vertical'
        className='transition-colors sm:w-[2px] bg-[currentColor]'
      />
      {email}
    </CopyButton>
  );
}
