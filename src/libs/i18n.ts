import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { AppConfig } from '@/utils/AppConfig';

// TODO: confirm localization is working as expected form multiple locales

// Using internationalization in Server Components
export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!AppConfig.locales.includes(locale)) {
    notFound();
  }

  return {
    messages: (await import(`../locales/${locale}.json`)).default,
  };
});
