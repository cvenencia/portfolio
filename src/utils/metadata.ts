import { Metadata } from 'next';

import { BASE_URL } from '@/constants';
import { i18nConfig } from '@/i18n';

export function generateMetadataAlternates(
  locale: string,
  pathname: `/${string}`
): Metadata['alternates'] {
  return {
    canonical: `${BASE_URL}/${locale}${pathname}`,
    languages: generateAlternateLanguages(pathname),
  };
}

export function generateAlternateLanguages(pathname: `/${string}`) {
  return i18nConfig.locales.reduce(
    (languages, locale) => ({
      ...languages,
      [locale]: `${BASE_URL}/${locale}${pathname}`,
    }),
    {}
  );
}
