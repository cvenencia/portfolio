'use client';

import { Languages, Moon, Pin, Settings, Sun } from 'lucide-react';
import { useParams, usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useMounted } from '@/hooks/useMounted';
import { useLocalStorage } from '@/hooks/useStorage';
import { i18nConfig } from '@/i18n';
import { cn } from '@/lib/utils';
import { capitalize } from '@/utils/strings';

import { LocaleLink } from './LocaleLink';
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
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

function LanguageLink({ locale }: { locale: string }) {
  const params = useParams<{ locale: string }>();
  const regex = RegExp(`^/${params.locale}`);
  const pathname = usePathname().replace(regex, '');
  const isCurrentLocale = params.locale === locale;

  const languageDisplayNames = new Intl.DisplayNames([locale], {
    type: 'language',
  });
  const displayName = capitalize(languageDisplayNames.of(locale) || 'unknown');

  return (
    <LocaleLink hard locale={locale} href={pathname}>
      <DropdownMenuItem className='cursor-pointer'>
        <Pin className={cn(!isCurrentLocale && 'opacity-0')} />
        {displayName}
      </DropdownMenuItem>
    </LocaleLink>
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
  const { t } = useTranslation();

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
  const [hasSeenTooltip, setHasSeenTooltip] = useLocalStorage(
    'has-seen-tooltip',
    false
  );
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const ThemeIcon = theme === 'light' ? Sun : Moon;

  const iconClasses = 'opacity-0 absolute group-hocus-visible:opacity-100';

  useEffect(() => {
    if (hasSeenTooltip) return setTooltipOpen(false);
    else setTimeout(() => setTooltipOpen(true), 5000);
  }, [hasSeenTooltip]);

  return (
    <DropdownMenu onOpenChange={() => setHasSeenTooltip(true)}>
      <Tooltip>
        <HoverCard open={tooltipOpen}>
          <DropdownMenuTrigger asChild>
            <TooltipTrigger asChild>
              <HoverCardTrigger asChild>
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
              </HoverCardTrigger>
            </TooltipTrigger>
          </DropdownMenuTrigger>
          <HoverCardContent className='flex flex-col gap-2 items-center w-fit relative'>
            <div className='absolute left-1/2 -translate-x-1/2 -top-2'>👆</div>
            <div>{t('other-language')}</div>
          </HoverCardContent>
        </HoverCard>
        <TooltipContent>{t('options')}</TooltipContent>
      </Tooltip>
      <DropdownMenuContent>
        <ThemeButton />
        <LanguagesDropdown />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
