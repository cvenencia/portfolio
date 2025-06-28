import type { MetadataRoute } from 'next';

const BASE_URL = 'https://cvenencia.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/en`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: { languages: { es: `${BASE_URL}/es` } },
    },
    {
      url: `${BASE_URL}/en/autogas-app`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      alternates: { languages: { es: `${BASE_URL}/es/autogas-app` } },
    },
  ];
}
