import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { lightTheme, darkTheme } from '../utils/ThemeUtil';

const ThemeContext = createContext<any>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(lightTheme);
  const [currentThemeMode, setCurrentThemeMode] = useState('light');

  useEffect(() => {
    const loadTheme = async () => {
      const storedTheme = await AsyncStorage.getItem('theme');
      setCurrentThemeMode(storedTheme || 'light');
      setTheme(storedTheme === 'dark' ? darkTheme : lightTheme);
    };
    loadTheme();
  }, []);

  const toggleTheme = async () => {
    const newTheme = theme.dark ? lightTheme : darkTheme;
    setTheme(newTheme);
    await AsyncStorage.setItem('theme', newTheme.dark ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, currentThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
