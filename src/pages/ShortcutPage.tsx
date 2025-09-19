// src/pages/ShortcutPage.tsx
import { useParams, Navigate } from "react-router-dom"
import { useEffect } from "react"
import { shortcuts } from "@/data/shortcuts"
import { useShortcutModal } from "@/contexts/ShortcutModalContext"
import Index from "./Index"

export default function ShortcutPage() {
  const { id } = useParams()
  const { openModal } = useShortcutModal()
  const s = shortcuts.find(x => x.id === id)

  useEffect(() => {
    if (s) {
      // Pequeno delay para garantir que a página carregou
      setTimeout(() => {
        openModal(s);
      }, 100);
    }
  }, [s, openModal]);

  if (!s) {
    return <Navigate to="/404" replace />
  }

  // Renderiza a página principal com o modal aberto
  return <Index />
}