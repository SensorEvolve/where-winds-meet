import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import AsyncStorage from '@react-native-async-storage/async-storage';

import en from '../locales/en.json';
import zhTW from '../locales/zh-TW.json';
import ja from '../locales/ja.json';
import ko from '../locales/ko.json';

const LANGUAGE_KEY = '@wwm_helper:language';

const resources = {
  en: { translation: en },
  'zh-TW': { translation: zhTW },
  ja: { translation: ja },
  ko: { translation: ko },
};

// Get device language
const getDeviceLanguage = (): string => {
  const deviceLocale = Localization.getLocales()[0]?.languageTag || 'en';

  // Map device locale to supported languages
  if (deviceLocale.startsWith('zh')) {
    return 'zh-TW';
  } else if (deviceLocale.startsWith('ja')) {
    return 'ja';
  } else if (deviceLocale.startsWith('ko')) {
    return 'ko';
  }
  return 'en';
};

// Get saved language or device language
const getInitialLanguage = async (): Promise<string> => {
  try {
    const savedLanguage = await AsyncStorage.getItem(LANGUAGE_KEY);
    return savedLanguage || getDeviceLanguage();
  } catch {
    return getDeviceLanguage();
  }
};

// Save language preference
export const saveLanguage = async (language: string): Promise<void> => {
  try {
    await AsyncStorage.setItem(LANGUAGE_KEY, language);
  } catch (error) {
    console.error('Failed to save language:', error);
  }
};

// Initialize i18n
export const initI18n = async (): Promise<void> => {
  const initialLanguage = await getInitialLanguage();

  await i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: initialLanguage,
      fallbackLng: 'en',
      compatibilityJSON: 'v4',
      interpolation: {
        escapeValue: false,
      },
    });
};

export const changeLanguage = async (language: string): Promise<void> => {
  await i18n.changeLanguage(language);
  await saveLanguage(language);
};

export const supportedLanguages = [
  { code: 'en', name: 'English' },
  { code: 'zh-TW', name: '繁體中文' },
  { code: 'ja', name: '日本語' },
  { code: 'ko', name: '한국어' },
];

export default i18n;
