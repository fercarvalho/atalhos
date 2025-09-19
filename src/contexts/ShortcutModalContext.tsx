import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Shortcut } from '../data/shortcuts';

interface ShortcutModalContextType {
  selectedShortcut: Shortcut | null;
  isModalOpen: boolean;
  clickCounts: Record<string, number>;
  initialCounts: Record<string, number>;
  openModal: (shortcut: Shortcut) => void;
  closeModal: () => void;
  incrementClickCount: (shortcutId: string) => void;
  getClickCount: (shortcutId: string) => number;
}

const ShortcutModalContext = createContext<ShortcutModalContextType | undefined>(undefined);

interface ShortcutModalProviderProps {
  children: ReactNode;
}

export const ShortcutModalProvider: React.FC<ShortcutModalProviderProps> = ({ children }) => {
  const [selectedShortcut, setSelectedShortcut] = useState<Shortcut | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickCounts, setClickCounts] = useState<Record<string, number>>({});
  const [initialCounts, setInitialCounts] = useState<Record<string, number>>({});

  // Função para gerar número aleatório inicial
  const generateInitialCount = useCallback((shortcutId: string) => {
    if (initialCounts[shortcutId] !== undefined) {
      return initialCounts[shortcutId];
    }
    
    // Gera um número aleatório entre 1000 e 10000
    const randomCount = Math.floor(Math.random() * 9000) + 1000;
    
    setInitialCounts(prev => ({
      ...prev,
      [shortcutId]: randomCount
    }));
    
    return randomCount;
  }, [initialCounts]);

  const openModal = useCallback((shortcut: Shortcut) => {
    setSelectedShortcut(shortcut);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    // Delay clearing the shortcut to allow for exit animations
    setTimeout(() => setSelectedShortcut(null), 200);
  }, []);

  const incrementClickCount = useCallback((shortcutId: string) => {
    setClickCounts(prev => ({
      ...prev,
      [shortcutId]: (prev[shortcutId] || 0) + 1
    }));
  }, []);

  const getClickCount = useCallback((shortcutId: string) => {
    const initialCount = generateInitialCount(shortcutId);
    const additionalClicks = clickCounts[shortcutId] || 0;
    return initialCount + additionalClicks;
  }, [clickCounts, generateInitialCount]);

  const value: ShortcutModalContextType = {
    selectedShortcut,
    isModalOpen,
    clickCounts,
    initialCounts,
    openModal,
    closeModal,
    incrementClickCount,
    getClickCount,
  };

  return (
    <ShortcutModalContext.Provider value={value}>
      {children}
    </ShortcutModalContext.Provider>
  );
};

export const useShortcutModal = (): ShortcutModalContextType => {
  const context = useContext(ShortcutModalContext);
  if (!context) {
    throw new Error('useShortcutModal must be used within a ShortcutModalProvider');
  }
  return context;
};
