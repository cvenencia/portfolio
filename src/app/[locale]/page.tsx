import { i18nConfig, initTranslations } from '@/i18n';
import { LanguageLink } from '@/components/LanguageLink';
import { ThemeButton } from '@/components/ThemeButton';

export default async function Index({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await paramsPromise).locale;
  const { t } = await initTranslations(locale, ['root']);
  return (
    <>
      <h1>{t('title')}</h1>
      <ThemeButton />
      {i18nConfig.locales
        .map(locale => [<LanguageLink key={locale} locale={locale} />, ' '])
        .flat()}
    </>
  );
}
