'use client';

import { Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { CopyButton } from '@/components/CopyEmailButton';
import { Separator } from '@/components/ui/separator';
import { useEnvironment } from '@/contexts/Environment';

export default function CopyEmailButton() {
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
      className='w-fit mx-auto text-xl [&_svg]:size-8 flex gap-4 h-auto py-4 hocus-visible:bg-background hocus-visible:text-foreground'
    >
      <Mail />
      <Separator
        orientation='vertical'
        className='transition-colors w-[2px] bg-[currentColor]'
      />
      {email}
    </CopyButton>
  );
}
