import { useShortcutModal } from '../contexts/ShortcutModalContext';
import { Shortcut } from '../data/shortcuts';
import { Badge } from './ui/badge';

interface ShortcutCardProps {
  shortcut: Shortcut;
}

/**
 * ShortcutCard - Componente de card de atalho
 * 
 * ⚠️  IMPORTANTE: O design visual está definido em classes CSS fixas (index.css)
 * ⚠️  NÃO alterar as classes: shortcut-card, shortcut-card-content, etc.
 * ⚠️  O design deve permanecer idêntico à imagem de referência fornecida
 * 
 * Classes utilizadas:
 * - shortcut-card: Container principal com gradiente verde fixo
 * - shortcut-card-content: Layout interno centralizado
 * - shortcut-card-icon: Círculo do ícone com fundo transparente
 * - shortcut-card-icon-emoji: Emoji do atalho
 * - shortcut-card-title: Título com máximo 2 linhas
 */
const ShortcutCard = ({ shortcut }: ShortcutCardProps) => {
  const { openModal } = useShortcutModal();

  const handleClick = () => {
    openModal(shortcut);
  };

  return (
    <div onClick={handleClick} className="shortcut-card group">
      {/* Badge AI no canto superior direito */}
      {shortcut.isAI && (
        <div className="absolute top-2 right-2 z-10">
          <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0 text-xs font-bold shadow-lg">
            AI
          </Badge>
        </div>
      )}
      
      {/* Badge Poupa.ai no canto superior esquerdo */}
      {shortcut.isPoupaAi && (
        <div className="absolute top-2 left-2 z-10">
          <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 text-xs font-bold shadow-lg">
            Poupa.ai
          </Badge>
        </div>
      )}
      
      {/* Badge Automação no canto inferior esquerdo */}
      {shortcut.isAutomacao && (
        <div className="absolute bottom-2 left-2 z-10">
          <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 text-xs font-bold shadow-lg">
            Automação
          </Badge>
        </div>
      )}
      
      <div className="shortcut-card-content">
        <div className="shortcut-card-icon">
          <span className="shortcut-card-icon-emoji">{shortcut.icon || '⚡'}</span>
        </div>
        
        <h4 className="shortcut-card-title">
          {shortcut.title}
        </h4>
      </div>
    </div>
  );
};

export default ShortcutCard;