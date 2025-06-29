import { useCurrentLocale as _useCurrentLocale } from 'next-i18n-router/client';

import { i18nConfig } from '@/i18n';

export function useCurrentLocale() {
  return _useCurrentLocale(i18nConfig);
}
