'use client';

import { Languages } from 'lucide-react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { i18nConfig } from '@/i18n';
import { capitalize } from '@/utils/strings';

import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

function LanguageLink({ locale }: { locale: string }) {
  const params = useParams<{ locale: string }>();
  const regex = RegExp(`^/${params.locale}`);
  const pathname = usePathname().replace(regex, '');

  const languageDisplayNames = new Intl.DisplayNames([locale], {
    type: 'language',
  });
  const displayName = capitalize(languageDisplayNames.of(locale) || 'unknown');

  return (
    <Link href={`/${locale}/${pathname}`}>
      <DropdownMenuItem className='cursor-pointer'>
        {displayName}
      </DropdownMenuItem>
    </Link>
  );
}

export function LanguagesDropdown() {
  const { t } = useTranslation();
  return (
    <DropdownMenu>
      <TooltipProvider>
        <Tooltip>
          <DropdownMenuTrigger asChild>
            <TooltipTrigger asChild>
              <Button variant='ghost'>
                <Languages />
              </Button>
            </TooltipTrigger>
          </DropdownMenuTrigger>
          <TooltipContent>{t('change-language')}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DropdownMenuContent>
        {i18nConfig.locales.map(locale => (
          <LanguageLink key={locale} locale={locale} />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
