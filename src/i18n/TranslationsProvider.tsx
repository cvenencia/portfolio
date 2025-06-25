'use client';

import { createInstance, Namespace, Resource } from 'i18next';
import { useParams } from 'next/navigation';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';

import { initTranslations } from '@/i18n/i18n';

type TranslationsProviderProps = {
  children: ReactNode;
  namespaces: Namespace;
  resources?: Resource;
};

export default function TranslationsProvider({
  children,
  namespaces,
  resources,
}: TranslationsProviderProps) {
  const i18n = createInstance();
  const { locale } = useParams<{ locale: string }>();

  initTranslations(locale, namespaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
