'use client';

import Link from 'next/link';
import { ComponentProps } from 'react';

import { useCurrentLocale } from '@/hooks/useCurrentLocale';

type LocaleLinkProps = {
  locale?: string;
  hard?: boolean;
} & ComponentProps<'a'>;
export function LocaleLink({
  hard,
  locale: _locale,
  ...props
}: LocaleLinkProps) {
  const currentLocale = useCurrentLocale();
  const locale = _locale ?? currentLocale;
  const href = `/${locale}${props.href}`;
  const Element = hard ? 'a' : Link;
  return <Element {...props} href={href} hrefLang={locale} />;
}
