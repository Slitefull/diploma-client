import { localeFlags } from '../assets/flags';

export const getAllLocales = [
  'en', 'ru', 'es', 'pl', 'he',
  'ar', 'de', 'vi', 'pt', 'ko',
];

export const getReversedLocales = ['ar', 'he'];

const localeNames = {
  en: 'English',
  ru: 'Русский',
  es: 'Español',
  pl: 'Polskie',
  he: 'עִברִית',
  ar: 'عربي',
  de: 'Deutsche',
  vi: 'Tiếng Việt',
  pt: 'Português',
  ko: '한국어',
};

export const getLocaleName = (lang) => localeNames[lang];
export const getLocaleFlag = (lang) => localeFlags[lang];
