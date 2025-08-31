// src/pages/ShortcutPage.tsx
import { useParams, Link } from "react-router-dom"
import { shortcuts } from "@/data/shortcuts"

export default function ShortcutPage() {
  const { id } = useParams()
  const s = shortcuts.find(x => x.id === id)

  if (!s) {
    return (
      <main className="max-w-3xl mx-auto p-6 space-y-6">
        <h1 className="text-2xl font-bold">Atalho não encontrado</h1>
        <Link to="/" className="underline">Voltar para a galeria</Link>
      </main>
    )
  }

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <div className="flex items-center gap-3">
        <div className="text-4xl">{s.icon}</div>
        <h1 className="text-3xl font-bold">{s.title}</h1>
      </div>

      {s.tagline && <p className="text-muted-foreground">{s.tagline}</p>}

      <div className="flex flex-wrap gap-3">
        <a
          href={s.icloudUrl}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition"
        >
          Instalar pelo iCloud
        </a>
        {/* Caso no futuro use RoutineHub:
        {s.routinehubUrl && (
          <a
            href={s.routinehubUrl}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-lg border hover:bg-accent transition"
          >
            Ver no RoutineHub
          </a>
        )} */}
        <Link to="/" className="px-4 py-2 rounded-lg border hover:bg-accent transition">
          Voltar
        </Link>
      </div>

      <ul className="text-sm opacity-80 list-disc pl-5 space-y-1">
        {s.category && <li>Categoria: {s.category}</li>}
        {s.minIOS && <li>iOS mínimo: {s.minIOS}</li>}
        {s.updatedAt && <li>Atualizado em: {s.updatedAt}</li>}
      </ul>
    </main>
  )
}