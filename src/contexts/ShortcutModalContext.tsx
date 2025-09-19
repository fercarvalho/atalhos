import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Shortcut } from '../data/shortcuts';

interface ShortcutModalContextType {
  selectedShortcut: Shortcut | null;
  isModalOpen: boolean;
  clickCounts: Record<string, number>;
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
    return clickCounts[shortcutId] || 0;
  }, [clickCounts]);

  const value: ShortcutModalContextType = {
    selectedShortcut,
    isModalOpen,
    clickCounts,
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
