import React from 'react';
import { X } from 'lucide-react';

interface WebsiteModalProps {
  isOpen: boolean;
  onClose: () => void;
  websiteUrl: string;
  title: string;
}

const WebsiteModal: React.FC<WebsiteModalProps> = ({ isOpen, onClose, websiteUrl, title }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl max-w-5xl w-full mx-4 relative overflow-hidden shadow-2xl" style={{ height: '80vh' }}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>
        
        {/* Website container */}
        <iframe
          src={websiteUrl}
          title={title}
          className="w-full h-full rounded-2xl"
          frameBorder="0"
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </div>
  );
};

export default WebsiteModal;
