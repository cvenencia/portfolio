import { createInstance, i18n, Namespace, Resource } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { Config } from 'next-i18n-router/dist/types';
import { initReactI18next } from 'react-i18next/initReactI18next';

export const i18nConfig: Config = {
  locales: ['en', 'es'],
  defaultLocale: 'en',
  prefixDefault: true,
};

export async function initTranslations(
  locale: string,
  namespaces: Namespace,
  i18nInstance?: i18n,
  resources?: Resource
) {
  i18nInstance = i18nInstance || createInstance();

  i18nInstance.use(initReactI18next);

  if (!resources) {
    i18nInstance.use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`@/locales/${language}/${namespace}.json`)
      )
    );
  }

  await i18nInstance.init({
    lng: locale,
    resources,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    defaultNS: namespaces,
    fallbackNS: namespaces,
    ns: namespaces,
    preload: resources ? [] : i18nConfig.locales,
  });

  return {
    resources: { [locale]: i18nInstance.services.resourceStore.data[locale] },
    t: i18nInstance.t,
    namespaces,
  };
}
