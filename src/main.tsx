import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './contexts/ThemeContext'
import { SearchProvider } from './contexts/SearchContext'

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <SearchProvider>
      <App />
    </SearchProvider>
  </ThemeProvider>
);
