import React, { createContext, useState } from 'react';
import { ConfigProvider } from 'antd';
import enUS from 'antd/es/locale/en_US';
import esES from 'antd/es/locale/es_ES';

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

  const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);
  const toggleLanguage = () => setLanguage((prevLang) => (prevLang === 'en' ? 'es' : 'en'));

  return (
    <SettingsContext.Provider value={{ isDarkMode, language, toggleTheme, toggleLanguage }}>
      <ConfigProvider locale={language === 'en' ? enUS : esES} theme={isDarkMode ? 'dark' : 'light'}>
        {children}
      </ConfigProvider>
    </SettingsContext.Provider>
  );
};
