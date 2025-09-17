import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'system';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('system');
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Detectar tema do sistema
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      setSystemTheme(e.matches ? 'dark' : 'light');
    };

    // Definir tema inicial
    setSystemTheme(mediaQuery.matches ? 'dark' : 'light');
    
    // Escutar mudanças
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    
    if (theme === 'system') {
      // Usar tema do sistema - remover atributo para usar CSS media query
      root.removeAttribute('data-theme');
      root.classList.remove('light', 'dark');
    } else {
      // Usar tema manual
      root.setAttribute('data-theme', theme);
      root.classList.remove('light', 'dark');
      root.classList.add(theme);
    }
  }, [theme, systemTheme]);

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return {
    theme,
    setTheme,
    currentTheme,
    systemTheme
  };
};
