export const DEFAULT_LANGUAGE = 'en';
export const AVAILABLE_LANGUAGE = require('app/translations/available.json');

const en = require('app/translations/en.json');
const ru = require('app/translations/ru.json');

const localeData: { en: any; ru: any } = { en: en, ru: ru };

const getLangCode = (language: string) => {
  return language.toLocaleLowerCase().split(/[_-]+/)[0];
};

const isAvailableLanguage = (language: string) => {
  if (language) {
    const languageWithoutRegionCode = getLangCode(language);
    return AVAILABLE_LANGUAGE.indexOf(languageWithoutRegionCode) >= 0;
  }
  return false;
};

const getNavigatorLanguage = () => {
  let locale = DEFAULT_LANGUAGE;
  if (isAvailableLanguage(navigator.language)) {
    locale = getLangCode(navigator.language);
  } else if (navigator.languages) {
    const language = navigator.languages.find((lang) => isAvailableLanguage(lang));
    if (language) {
      locale = getLangCode(language);
    }
  }
  return locale;
};

export const getLanguage = () => {
  try {
    let locale = localStorage.getItem('locale');
    if (!locale || !isAvailableLanguage(locale)) {
      locale = getNavigatorLanguage();
    }
    return locale;
  } catch (e) {
    return DEFAULT_LANGUAGE;
  }
};

export const getLocales = () => {
  return localeData;
};

export const set = (data: any) => {
  try {
    localStorage.setItem('locale', data);
    return { response: data.locale };
  } catch (e) {
    return { error: e.message };
  }
};
