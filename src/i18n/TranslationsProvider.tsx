'use client';

import { createInstance, Namespace, Resource } from 'i18next';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';

import { useCurrentLocale } from '@/hooks/useCurrentLocale';
import { initTranslations } from '@/i18n';

type TranslationsProviderProps = {
  children: ReactNode;
  namespaces: Namespace | Namespace[];
  resources?: Resource;
};

export function TranslationsProvider({
  children,
  namespaces,
  resources,
}: TranslationsProviderProps) {
  const i18n = createInstance();
  const locale = useCurrentLocale();
  if (!locale) return children;
  if (typeof namespaces === 'string') {
    namespaces = [namespaces];
  }

  initTranslations(locale, namespaces as Namespace[], i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
