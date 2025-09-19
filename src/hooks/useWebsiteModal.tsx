import { useState } from 'react';

export const useWebsiteModal = () => {
  const [isWebsiteModalOpen, setIsWebsiteModalOpen] = useState(false);
  const [selectedWebsite, setSelectedWebsite] = useState<{ url: string; title: string } | null>(null);

  const openWebsiteModal = (url: string, title: string) => {
    setSelectedWebsite({ url, title });
    setIsWebsiteModalOpen(true);
  };

  const closeWebsiteModal = () => {
    setIsWebsiteModalOpen(false);
    setSelectedWebsite(null);
  };

  return {
    isWebsiteModalOpen,
    selectedWebsite,
    openWebsiteModal,
    closeWebsiteModal,
  };
};
