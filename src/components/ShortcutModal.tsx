import React from 'react';
import { X, Share, Download } from 'lucide-react';
import { Shortcut } from '../data/shortcuts';
import { Badge } from './ui/badge';

interface ShortcutModalProps {
  shortcut: Shortcut;
  isOpen: boolean;
  onClose: () => void;
  clickCount: number;
  onInstall: () => void;
}

const ShortcutModal: React.FC<ShortcutModalProps> = ({
  shortcut,
  isOpen,
  onClose,
  clickCount,
  onInstall,
}) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Função para determinar a versão baseada nas propriedades do shortcut
  const getVersion = () => {
    // Exceção específica: "Adicionar Despesa de Cartão (Automático)" = versão 2.0
    if (shortcut.title === "Adicionar Despesa de Cartão (Automático)") {
      return "2.0";
    }
    // Cards com badge AI = versão 3.0 (prioridade máxima)
    if (shortcut.isAI) {
      return "3.0";
    }
    // Chama no Zap = versão 2.0
    if (shortcut.title === "Chama no Zap") {
      return "2.0";
    }
    // Cards com badge Automação (sem AI) = versão 2.0
    if (shortcut.isAutomacao) {
      return "2.0";
    }
    // Padrão
    return "1.0";
  };

  // Função para compartilhar no WhatsApp
  const handleShare = () => {
    const shortcutUrl = `https://atalhos.fercarvalho.com/atalho/${shortcut.id}`;
    
    // Monta a mensagem conforme especificado
    let message = `Olha que legal que eu encontrei no site do Fer Carvalho sobre IA...\n\n`;
    message += `Ele tem um atalho chamado\n\n`;
    message += `*${shortcut.title}*\n\n`;
    message += `que\n\n`;
    message += `${shortcut.tagline || 'facilita suas tarefas no iOS'}\n\n`;
    message += `Baixe aqui: ${shortcutUrl}`;
    
    // Codifica a mensagem para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Cria o link do WhatsApp
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    
    // Abre o WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl max-w-md w-full mx-4 relative overflow-y-auto max-h-[90vh] shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 sm:top-4 right-2 sm:right-4 z-10 p-1.5 sm:p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </button>
        
        {/* Badges no canto superior esquerdo */}
        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 right-12 sm:right-16 z-10 flex flex-col gap-1 sm:gap-2">
          {/* Badge AI */}
          {shortcut.isAI && (
            <div className="flex items-center gap-2 flex-wrap">
              <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0 text-xs font-bold shadow-lg flex-shrink-0">
                AI
              </Badge>
              <span className="text-white text-xs font-medium bg-black/20 px-2 py-1 rounded-full backdrop-blur-sm whitespace-nowrap">
                Este Atalho usa IA
              </span>
            </div>
          )}
          
          {/* Badge Poupa.ai */}
          {shortcut.isPoupaAi && (
            <div className="flex items-center gap-2 flex-wrap">
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 text-xs font-bold shadow-lg flex-shrink-0">
                Poupa.ai
              </Badge>
              <span className="text-white text-xs font-medium bg-black/20 px-2 py-1 rounded-full backdrop-blur-sm whitespace-nowrap">
                Requer assinatura do Poupa.ai
              </span>
            </div>
          )}
          
          {/* Badge Automação */}
          {shortcut.isAutomacao && (
            <div className="flex items-center gap-2 flex-wrap">
              <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 text-xs font-bold shadow-lg flex-shrink-0">
                Automação
              </Badge>
              <span className="text-white text-xs font-medium bg-black/20 px-2 py-1 rounded-full backdrop-blur-sm whitespace-nowrap">
                Requer automação no iOS
              </span>
            </div>
          )}
        </div>

        {/* Header with gradient and icon */}
        <div className={`pb-8 px-4 sm:px-8 text-white relative ${
          // Calcular padding-top baseado na quantidade de badges
          (() => {
            const badgeCount = [shortcut.isAI, shortcut.isPoupaAi, shortcut.isAutomacao].filter(Boolean).length;
            if (badgeCount === 0) return "pt-16 sm:pt-20"; // Sem badges - espaçamento menor
            if (badgeCount === 1) return "pt-20 sm:pt-24"; // 1 badge
            if (badgeCount === 2) return "pt-24 sm:pt-28"; // 2 badges
            return "pt-28 sm:pt-32"; // 3 badges - espaçamento maior
          })()
        }`}>
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm mb-4 shadow-lg">
              <span className="text-4xl">{shortcut.icon || '⚡'}</span>
            </div>
            <h2 className="text-2xl font-bold mb-2">{shortcut.title}</h2>
            {shortcut.tagline && (
              <p className="text-white/90 text-base">{shortcut.tagline}</p>
            )}
          </div>
        </div>

        {/* Content with transparent overlay */}
        <div className="bg-white/30 dark:bg-gray-900/30 backdrop-blur-sm p-4 sm:p-6 space-y-3 sm:space-y-4">
          {/* Install button */}
          <button
            onClick={onInstall}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <Download className="w-5 h-5" />
            INSTALAR
          </button>

          {/* About section */}
          <div className="bg-white/10 rounded-xl p-4">
            <h3 className="font-medium text-white mb-3">
              Sobre este Atalho
            </h3>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                <img 
                  src="/appleintelligencelogo.png" 
                  alt="Apple Intelligence" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <p className="text-white/90 text-sm">
                Diga "E aí Siri, {shortcut.title}" para executar
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-3">
            <button 
              onClick={handleShare}
              className="w-full bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-3"
            >
              <Share className="w-5 h-5" />
              Compartilhar
            </button>
            
            <div className="w-full bg-white/10 text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-3">
              <Download className="w-5 h-5" />
              <span>{clickCount.toLocaleString()} Downloads</span>
            </div>
          </div>

          {/* Additional info */}
          {(shortcut.minIOS || shortcut.category) && (
            <div className="pt-4 border-t border-white/20">
              <div className="flex justify-between text-sm text-white/80">
                {shortcut.category && (
                  <span>Categoria: {shortcut.category}</span>
                )}
                <span>Versão {getVersion()}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShortcutModal;
