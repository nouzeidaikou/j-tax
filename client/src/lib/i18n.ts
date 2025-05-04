import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ko from '../locales/ko';
import ja from '../locales/ja';
import en from '../locales/en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      ko: {
        translation: ko
      },
      ja: {
        translation: ja
      },
      en: {
        translation: en
      }
    },
    lng: 'ko', // Default language
    fallbackLng: 'ko',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
