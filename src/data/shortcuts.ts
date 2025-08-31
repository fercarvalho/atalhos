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
}

export const shortcuts: Shortcut[] = [
  {
    id: "adicionar-banco",
    title: "Adicionar Banco",
    tagline: "Cadastre um novo banco em segundos.",
    category: "Financeiro",
    icon: "🏦",
    gradient: "bg-gradient-ai",
    icloudUrl: "https://www.icloud.com/shortcuts/def910d037934f2ab15be19a448ef1dc",
    minIOS: "16.0",
    updatedAt: "2025-08-31"
  },
  {
    id: "adicionar-categoria",
    title: "Adicionar Categoria",
    tagline: "Organize suas despesas por categoria.",
    category: "Financeiro",
    icon: "🏷️",
    gradient: "bg-gradient-premium",
    icloudUrl: "https://www.icloud.com/shortcuts/9c1508a048e14266b454c8830c952926",
    minIOS: "16.0",
    updatedAt: "2025-08-31"
  },
  {
    id: "adicionar-cartao",
    title: "Adicionar Cartão",
    tagline: "Registre um novo cartão rapidamente.",
    category: "Financeiro",
    icon: "💳",
    gradient: "bg-gradient-instagram",
    icloudUrl: "https://www.icloud.com/shortcuts/da294b5afa904afaa0ba0d8a376ffdad",
    minIOS: "16.0",
    updatedAt: "2025-08-31"
  },
  {
    id: "adicionar-transacao",
    title: "Adicionar Transação",
    tagline: "Lance uma transação em poucos toques.",
    category: "Financeiro",
    icon: "🧾",
    gradient: "bg-gradient-watch",
    icloudUrl: "https://www.icloud.com/shortcuts/640c55856bfb452585dc5695cfe62e07",
    minIOS: "16.0",
    updatedAt: "2025-08-31"
  },
  {
    id: "adicionar-despesa-cartao-automatico",
    title: "Adicionar Despesa de Cartão (Automático)",
    tagline: "Captura e registra despesas de cartão automaticamente.",
    category: "Financeiro",
    icon: "📩",
    gradient: "bg-gradient-whatsapp",
    icloudUrl: "https://www.icloud.com/shortcuts/ad68db3ee8d6444682fdb98080c98a2f",
    minIOS: "16.0",
    updatedAt: "2025-08-31"
  }
]