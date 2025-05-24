'use client';

import { capitalize } from '@/utils/strings';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

export function LanguageLink({ locale }: { locale: string }) {
  const params = useParams<{ locale: string }>();
  const regex = RegExp(`^/${params.locale}`);
  const pathname = usePathname().replace(regex, '');

  const languageDisplayNames = new Intl.DisplayNames([locale], {
    type: 'language',
  });
  const displayName = capitalize(languageDisplayNames.of(locale) || 'unknown');

  return (
    <Link className='underline' href={`/${locale}/${pathname}`}>
      {displayName}
    </Link>
  );
}
