'use client';

import Link from 'next/link';
import { ComponentProps } from 'react';

import { useCurrentLocale } from '@/hooks/useCurrentLocale';

type LocaleLinkProps = {
  locale?: string;
} & ComponentProps<typeof Link>;
export function LocaleLink({ locale: _locale, ...props }: LocaleLinkProps) {
  const currentLocale = useCurrentLocale();
  const locale = _locale ?? currentLocale;
  const href = `/${locale}${props.href}`;
  return <Link {...props} href={href} hrefLang={locale} />;
}
