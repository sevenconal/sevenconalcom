import React, { createContext, useContext, useEffect, useState } from 'react';
import { TRANSLATIONS, Language } from '../i18n/translations';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: typeof TRANSLATIONS['tr'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('app_lang') as Language | null;
      if (saved === 'tr' || saved === 'en') {
        return saved;
      }
    }
    return 'tr'; // Default to Turkish
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem('app_lang', lang);
  }, [lang]);

  const toggleLang = () => {
    setLangState((prev) => (prev === 'tr' ? 'en' : 'tr'));
  };

  const setLang = (l: Language) => {
    setLangState(l);
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        t: TRANSLATIONS[lang],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
