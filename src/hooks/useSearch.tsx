import { useMemo, useCallback } from 'react';
import { useSearchContext } from '@/contexts/SearchContext';
import { shortcuts, tutorials } from '@/data/shortcuts';

export const useSearch = () => {
  const { searchTerm, setSearchTerm } = useSearchContext();

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

  const handleSearch = useCallback((query: string) => {
    setSearchTerm(query);
  }, [setSearchTerm]);

  const totalResults = filteredData.length + filteredTutorials.length;
  const hasResults = totalResults > 0;

  return {
    searchTerm,
    filteredData,
    filteredTutorials,
    handleSearch,
    hasResults,
    totalResults,
    isSearching: searchTerm.trim().length > 0
  };
};