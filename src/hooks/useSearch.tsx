import { useMemo, useCallback } from 'react';
import { useSearchContext } from '@/contexts/SearchContext';
import { shortcuts } from '@/data/shortcuts';

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

  const handleSearch = useCallback((query: string) => {
    setSearchTerm(query);
  }, [setSearchTerm]);

  return {
    searchTerm,
    filteredData,
    handleSearch,
    hasResults: filteredData.length > 0,
    totalResults: filteredData.length,
    isSearching: searchTerm.trim().length > 0
  };
};