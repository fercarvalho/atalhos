import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './contexts/ThemeContext'
import { SearchProvider } from './contexts/SearchContext'
import { ShortcutModalProvider } from './contexts/ShortcutModalContext'

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <SearchProvider>
      <ShortcutModalProvider>
        <App />
      </ShortcutModalProvider>
    </SearchProvider>
  </ThemeProvider>
);
