import { fr } from '../locales/fr.js';
import { en } from '../locales/en.js';

const translations = {
  fr,
  en
};

/**
 * Hook personnalisé pour les traductions
 * @param {string} language
 * @returns {Object}
 */
export const useTranslation = (language = 'fr') => {
  const currentLanguage = translations[language] ? language : 'fr';
  
  return translations[currentLanguage];
};

/**

 * @param {string} key
 * @param {string} language
 * @returns {string}
 */
export const getTranslationText = (key, language = 'fr') => {

  const currentLanguage = translations[language] ? language : 'fr';
  const t = translations[currentLanguage];
  
  const keys = key.split('.');
  let value = t;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key;
    }
  }
  
  return typeof value === 'string' ? value : key;
};

export const availableLanguages = [
  {
    code: 'fr',
    name: 'Français',
    flag: '🇫🇷',
    nativeName: 'Français'
  },
  {
    code: 'en', 
    name: 'English',
    flag: '🇬🇧',
    nativeName: 'English'
  }
];

/**
 * @param {string} template
 * @param {Object} variables
 * @returns {string}
 */
export const formatTranslation = (template, variables = {}) => {
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    return variables[key] !== undefined ? variables[key] : match;
  });
};

const translationSystem = {
  useTranslation,
  getTranslationText,
  availableLanguages,
  formatTranslation,
  translations
};

export default translationSystem;