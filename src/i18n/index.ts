import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import en from 'i18n/languages/en.json';

export const resources = {
  en: {
    translation: en,
  },
};

const keys = Object.keys(resources);

const lng = RNLocalize.findBestAvailableLanguage(keys)?.languageTag;

i18n.use(initReactI18next).init({
  resources,
  lng,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
