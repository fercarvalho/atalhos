import { useMemo, useCallback } from 'react';
import { useSearchContext } from '@/contexts/SearchContext';
import { shortcuts, tutorials } from '@/data/shortcuts';

// Helper function to extract text from featured shortcuts
const extractTextFromTitle = (title: any): string => {
  if (typeof title === 'string') {
    return title;
  }
  if (title && title.props && title.props.children) {
    if (Array.isArray(title.props.children)) {
      return title.props.children
        .map((child: any) => typeof child === 'string' ? child : '')
        .join(' ');
    }
    return typeof title.props.children === 'string' ? title.props.children : '';
  }
  return '';
};

export const useSearch = () => {
  const { searchTerm, setSearchTerm } = useSearchContext();

  // Featured shortcuts data
  const featuredShortcuts = [
    { title: "Assista as aulas mais completas sobre IA no Youtube", category: "social" },
    { title: "Obtenha dicas rápidas e poderosas sobre IA no TikTok", category: "social" },
    { title: "Acesse o Instagram para dicas diárias de IA", category: "social" },
    { title: "Automatize suas finanças com o Poupa.ai", category: "financeiro" },
    { title: "ESPECIAL Poupa.ai", category: "financeiro" },
    { title: "Atalhos de IA", category: "ia" },
    { title: "Automações", category: "automacao" },
    { title: "Atalhos para WhatsApp", category: "whatsapp" },
    { title: "Tutoriais", category: "tutorial" }
  ];

  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) {
      return shortcuts;
    }

    const lowercaseQuery = searchTerm.toLowerCase();
    
    return shortcuts.filter(shortcut => 
      shortcut.title.toLowerCase().includes(lowercaseQuery) ||
      (shortcut.tagline && shortcut.tagline.toLowerCase().includes(lowercaseQuery)) ||
      shortcut.category.toLowerCase().includes(lowercaseQuery)
    );
  }, [searchTerm]);

  const filteredTutorials = useMemo(() => {
    if (!searchTerm.trim()) {
      return tutorials;
    }

    const lowercaseQuery = searchTerm.toLowerCase();
    
    return tutorials.filter(tutorial => 
      tutorial.title.toLowerCase().includes(lowercaseQuery) ||
      (tutorial.description && tutorial.description.toLowerCase().includes(lowercaseQuery)) ||
      tutorial.category.toLowerCase().includes(lowercaseQuery)
    );
  }, [searchTerm]);

  const filteredFeatured = useMemo(() => {
    if (!searchTerm.trim()) {
      return [];
    }

    const lowercaseQuery = searchTerm.toLowerCase();
    
    return featuredShortcuts.filter(featured => 
      extractTextFromTitle(featured.title).toLowerCase().includes(lowercaseQuery) ||
      featured.category.toLowerCase().includes(lowercaseQuery)
    );
  }, [searchTerm]);

  const handleSearch = useCallback((query: string) => {
    setSearchTerm(query);
  }, [setSearchTerm]);

  const totalResults = filteredData.length + filteredTutorials.length + filteredFeatured.length;
  const hasResults = totalResults > 0;

  return {
    searchTerm,
    filteredData,
    filteredTutorials,
    filteredFeatured,
    handleSearch,
    hasResults,
    totalResults,
    isSearching: searchTerm.trim().length > 0
  };
};