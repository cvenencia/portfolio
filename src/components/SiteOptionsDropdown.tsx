'use client';

import { Languages, Moon, Settings, Sun } from 'lucide-react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useTranslation } from 'react-i18next';

import { useMounted } from '@/hooks/useMounted';
import { i18nConfig } from '@/i18n';
import { cn } from '@/lib/utils';
import { capitalize } from '@/utils/strings';

import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
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

function LanguagesDropdown() {
  const { t } = useTranslation();
  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <Languages />
        {t('change-language')}
      </DropdownMenuSubTrigger>
      <DropdownMenuSubContent>
        {i18nConfig.locales.map(locale => (
          <LanguageLink key={locale} locale={locale} />
        ))}
      </DropdownMenuSubContent>
    </DropdownMenuSub>
  );
}

function ThemeButton() {
  const { resolvedTheme: theme, setTheme } = useTheme();
  const isDark = theme === 'dark';
  const mounted = useMounted();
  const { t } = useTranslation('root');

  if (!mounted) return;
  return (
    <DropdownMenuItem onClick={() => setTheme(isDark ? 'light' : 'dark')}>
      {isDark ? <Sun /> : <Moon />}{' '}
      {isDark ? t('switch-light') : t('switch-dark')}
    </DropdownMenuItem>
  );
}

export function SiteOptionsDropdown() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const ThemeIcon = theme === 'light' ? Sun : Moon;

  const iconClasses = 'opacity-0 absolute group-hocus-visible:opacity-100';
  return (
    <DropdownMenu>
      <TooltipProvider>
        <Tooltip>
          <DropdownMenuTrigger asChild>
            <TooltipTrigger asChild>
              <Button
                variant='ghost'
                className='relative group [&_svg]:transition-[opacity,transform] [&_svg]:duration-500'
              >
                <Settings className='group-hocus-visible:opacity-0' />
                <Languages
                  className={cn(
                    iconClasses,
                    'group-hocus-visible:translate-x-2 group-hocus-visible:translate-y-1 group-hocus-visible:rotate-12'
                  )}
                />
                <ThemeIcon
                  className={cn(
                    iconClasses,
                    'group-hocus-visible:-translate-x-2 group-hocus-visible:-translate-y-1 group-hocus-visible:rotate-12'
                  )}
                />
              </Button>
            </TooltipTrigger>
          </DropdownMenuTrigger>
          <TooltipContent>{t('options')}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DropdownMenuContent>
        <ThemeButton />
        <LanguagesDropdown />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
