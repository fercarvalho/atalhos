// src/data/shortcuts.ts
export type Shortcut = {
  id: string
  title: string
  tagline?: string
  category: string
  icon?: string
  gradient?: string
  icloudUrl: string
  routinehubUrl?: string
  minIOS?: string
  permissions?: string[]
  cover?: string
  updatedAt?: string
  isPremium?: boolean
  isAI?: boolean
  isPoupaAi?: boolean
  isAutomacao?: boolean
}

export type Tutorial = {
  id: string
  title: string
  description?: string
  category: string
  image?: string
  videoUrl: string
  duration?: string
  updatedAt?: string
}

export const shortcuts: Shortcut[] = [
  {
    id: "adicionar-banco",
    title: "Adicionar Banco",
    tagline: "Cadastre um novo banco em segundos.",
    category: "Financeiro",
    icon: "🏦",
    gradient: "bg-gradient-ai",
    icloudUrl: "https://www.icloud.com/shortcuts/0569fcc709db47c4903bfb67c6f4860e",
    minIOS: "16.0",
    updatedAt: "2025-08-31",
    isAI: true,
    isPoupaAi: true
  },
  {
    id: "adicionar-categoria",
    title: "Adicionar Categoria",
    tagline: "Organize suas despesas por categoria.",
    category: "Financeiro",
    icon: "🏷️",
    gradient: "bg-gradient-premium",
    icloudUrl: "https://www.icloud.com/shortcuts/f6461e5c752e43918357b9c8f7385233",
    minIOS: "16.0",
    updatedAt: "2025-08-31",
    isPremium: true,
    isAI: true,
    isPoupaAi: true
  },
  {
    id: "adicionar-cartao",
    title: "Adicionar Cartão",
    tagline: "Registre um novo cartão rapidamente.",
    category: "Financeiro",
    icon: "💳",
    gradient: "bg-gradient-instagram",
    icloudUrl: "https://www.icloud.com/shortcuts/e9498e4a98ae45eda604a48014b25d39",
    minIOS: "16.0",
    updatedAt: "2025-08-31",
    isPremium: false,
    isAI: true,
    isPoupaAi: true
  },
  {
    id: "adicionar-transacao",
    title: "Adicionar Transação",
    tagline: "Lance uma transação em poucos toques.",
    category: "Financeiro",
    icon: "🧾",
    gradient: "bg-gradient-watch",
    icloudUrl: "https://www.icloud.com/shortcuts/10a8fcbbddda488786859a178b2fe22f",
    minIOS: "16.0",
    updatedAt: "2025-08-31",
    isPremium: false,
    isAI: true,
    isPoupaAi: true
  },
  {
    id: "adicionar-despesa-cartao-automatico",
    title: "Adicionar Despesa de Cartão (Automático)",
    tagline: "Captura e registra despesas de cartão automaticamente.",
    category: "Financeiro",
    icon: "📩",
    gradient: "bg-gradient-whatsapp",
    icloudUrl: "https://www.icloud.com/shortcuts/b25eee59ed2c419aab127e36425b665b",
    minIOS: "16.0",
    updatedAt: "2025-08-31",
    isPremium: false,
    isAI: true,
    isPoupaAi: true,
    isAutomacao: true
  },
  {
    id: "chama-no-zap",
    title: "Chama no Zap",
    tagline: "Fale com números no WhatsApp sem precisar salvar o contato",
    category: "WhatsApp",
    icon: "💬",
    gradient: "bg-gradient-to-br from-green-500 to-emerald-600",
    icloudUrl: "https://www.icloud.com/shortcuts/efcf18326dc84e33829b2c0cd6702831",
    minIOS: "14.0",
    updatedAt: "2025-09-18",
    isPremium: false,
    isAI: false
  }
]

export const tutorials: Tutorial[] = [
  {
    id: "especial-poupa-ai-despesas-recorrentes",
    title: "[ESPECIAL] [Poupa.ai] Registrando Despesas Recorrentes",
    description: "Aprenda a configurar e usar o sistema de despesas recorrentes do Poupa.ai para automatizar seu controle financeiro.",
    category: "Tutorial",
    image: "tutorial01.jpg",
    videoUrl: "https://www.youtube.com/watch?v=qmq_ICYZt20",
    duration: "15:30",
    updatedAt: "2025-09-18"
  }
]