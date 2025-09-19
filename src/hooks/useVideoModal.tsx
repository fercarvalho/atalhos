import { useState } from 'react';
import { Tutorial } from '../data/shortcuts';

export const useVideoModal = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<Tutorial | null>(null);

  const openVideoModal = (tutorial: Tutorial) => {
    setSelectedVideo(tutorial);
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setSelectedVideo(null);
  };

  return {
    isVideoModalOpen,
    selectedVideo,
    openVideoModal,
    closeVideoModal,
  };
};
