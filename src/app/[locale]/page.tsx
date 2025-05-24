import { i18nConfig, initTranslations } from '@/i18n';
import { LanguageLink } from '@/components/LanguageButton';

export default async function Index({
  params: paramsPromise,
}: {
  params: Promise<{ locale: string }>;
}) {
  const locale = (await paramsPromise).locale;
  const { t } = await initTranslations(locale, ['home']);
  return (
    <>
      <h1>{t('title')}</h1>
      {i18nConfig.locales
        .map(locale => [<LanguageLink key={locale} locale={locale} />, ' '])
        .flat()}
    </>
  );
}
