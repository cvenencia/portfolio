'use client';

import { ComponentProps } from 'react';

import { useCurrentLocale } from '@/hooks/useCurrentLocale';

type LocaleLinkProps = {
  locale?: string;
} & ComponentProps<'a'>;
export function LocaleLink({ locale: _locale, ...props }: LocaleLinkProps) {
  const currentLocale = useCurrentLocale();
  const locale = _locale ?? currentLocale;
  const href = `/${locale}${props.href}`;
  return <a {...props} href={href} hrefLang={locale} />;
}
