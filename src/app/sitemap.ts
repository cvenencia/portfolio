import type { MetadataRoute } from 'next';

import { BASE_URL } from '@/constants';
import { i18nConfig } from '@/i18n';
import { generateAlternateLanguages } from '@/utils/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  return generateEntries(['/', '/autogas-app']);
}

function generateEntries(pathnames: `/${string}`[]): MetadataRoute.Sitemap {
  return pathnames
    .map<MetadataRoute.Sitemap>(pathname =>
      i18nConfig.locales.map(locale => ({
        url: `${BASE_URL}/${locale}${pathname}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
        alternates: { languages: generateAlternateLanguages(pathname) },
      }))
    )
    .flat();
}
