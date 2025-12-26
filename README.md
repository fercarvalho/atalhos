# ⚡ Galeria de Atalhos

Sistema completo de galeria e gerenciamento de atalhos para iOS. Plataforma web moderna para descobrir, explorar e baixar os melhores atalhos para iPhone, Apple Watch e Mac. Facilita a busca, organização e instalação de atalhos com suporte a categorias, filtros avançados e tutoriais em vídeo.

## 📖 Sobre o Projeto

Este projeto é uma galeria web completa para atalhos do iOS (Shortcuts), desenvolvida para facilitar a descoberta e instalação de automações poderosas para dispositivos Apple. A plataforma oferece uma experiência moderna e intuitiva para explorar atalhos organizados por categorias, com busca avançada, modais informativos e integração com tutoriais em vídeo.

**Feito com ❤️ por Fernando Carvalho**

- 📧 Email: contato@fercarvalho.com
- 📱 Instagram: [@cadeofer](https://instagram.com/cadeofer)
- 🎥 YouTube: [@ai.fercarvalho](https://www.youtube.com/@ai.fercarvalho)
- 🎵 TikTok: [@ai.fercarvalho](https://www.tiktok.com/@ai.fercarvalho)

## ✨ Funcionalidades Principais

### 🔍 Sistema de Busca Avançada
- Busca em tempo real em atalhos, tutoriais e destaques
- Destaque visual dos termos encontrados
- Filtros por categoria e tipo
- Contador de resultados
- Busca case-insensitive e com suporte a acentos

### 📱 Galeria de Atalhos
- Organização por categorias (Financeiro, WhatsApp, IA, etc.)
- Cards visuais com ícones e gradientes personalizados
- Badges para identificar atalhos Premium, AI, Automações e Poupa.ai
- Modal informativo com detalhes completos do atalho
- Links diretos para instalação via iCloud
- Contador de cliques por atalho

### 🎬 Sistema de Tutoriais
- Tutoriais em vídeo integrados
- Modal de vídeo com player YouTube
- Cards visuais com thumbnails
- Organização por categorias
- Duração e data de atualização

### 🎨 Interface Moderna
- Design responsivo com Tailwind CSS
- Tema claro/escuro automático
- Sidebar com navegação rápida
- Header com busca integrada
- Footer com informações e links
- Animações e transições suaves

### 🏷️ Sistema de Categorização
- Categorias personalizadas (Financeiro, WhatsApp, IA, etc.)
- Filtros por tipo (Premium, AI, Automações, Poupa.ai)
- Seções destacadas (ESPECIAL Poupa.ai, Atalhos de IA, etc.)
- Navegação por âncoras suaves

### 🔗 Integrações
- Links para redes sociais (YouTube, TikTok, Instagram)
- Integração com Poupa.ai (com cupom de desconto)
- Modais para websites externos
- Links para iCloud Shortcuts
- Links para RoutineHub (quando disponível)

### 📊 Funcionalidades Adicionais
- Sistema de modais contextuais
- Tracking de cliques por atalho
- URLs com hash para compartilhamento direto
- SEO otimizado com meta tags
- Suporte a múltiplas rotas

## 🛠️ Stack Tecnológica

### Frontend
- **React 18** com TypeScript
- **Vite** para build e desenvolvimento
- **React Router** para navegação
- **TanStack Query** para gerenciamento de estado
- **shadcn/ui** para componentes de UI
- **Tailwind CSS** para estilização
- **Lucide React** e **React Icons** para ícones
- **Sonner** para notificações toast

### Componentes UI
- Sistema completo de componentes baseados em Radix UI
- Modais, dialogs, tooltips, badges
- Cards, accordions, tabs
- Formulários com validação
- Sistema de temas

### Infraestrutura
- Build otimizado com Vite
- TypeScript para type safety
- ESLint para qualidade de código
- Suporte a deploy estático

## 📋 Pré-requisitos

- Node.js 18+
- npm ou yarn
- Git (opcional, para clonar o repositório)

## 🚀 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/fercarvalho/atalhos.git
cd atalhos
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o ambiente (opcional)

O projeto funciona sem configuração adicional, mas você pode personalizar:

- Edite `src/data/shortcuts.ts` para adicionar/remover atalhos
- Configure variáveis de ambiente se necessário
- Personalize cores e temas em `tailwind.config.ts`

### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

O servidor estará rodando em `http://localhost:5173`

### 5. Build para produção

```bash
npm run build
```

Os arquivos otimizados estarão em `dist/`

### 6. Preview da build de produção

```bash
npm run preview
```

## 🏗️ Estrutura do Projeto

```
atalhos/
├── public/                 # Arquivos estáticos
│   ├── Imagens/           # Imagens e assets
│   └── favicon.ico        # Favicon
├── src/
│   ├── components/        # Componentes React
│   │   ├── ui/           # Componentes shadcn/ui
│   │   ├── FeatureCard.tsx
│   │   ├── ShortcutCard.tsx
│   │   ├── ShortcutModal.tsx
│   │   ├── TutorialCard.tsx
│   │   ├── VideoModal.tsx
│   │   ├── WebsiteModal.tsx
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   └── Footer.tsx
│   ├── contexts/          # Contextos React
│   │   ├── SearchContext.tsx
│   │   ├── ShortcutModalContext.tsx
│   │   └── ThemeContext.tsx
│   ├── data/              # Dados estáticos
│   │   └── shortcuts.ts   # Lista de atalhos e tutoriais
│   ├── hooks/             # Custom hooks
│   │   ├── useSearch.tsx
│   │   ├── useVideoModal.tsx
│   │   └── useWebsiteModal.tsx
│   ├── lib/               # Utilitários
│   │   └── utils.ts
│   ├── pages/             # Páginas
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx            # Componente principal
│   ├── main.tsx           # Entry point
│   └── index.css          # Estilos globais
├── index.html             # HTML principal
├── package.json           # Dependências
├── tailwind.config.ts     # Configuração Tailwind
├── tsconfig.json          # Configuração TypeScript
└── vite.config.ts         # Configuração Vite
```

## 📝 Adicionando Novos Atalhos

Para adicionar um novo atalho, edite o arquivo `src/data/shortcuts.ts`:

```typescript
{
  id: "meu-atalho",
  title: "Meu Atalho",
  tagline: "Descrição do atalho",
  category: "Categoria",
  icon: "⚡",
  gradient: "bg-gradient-ai",
  icloudUrl: "https://www.icloud.com/shortcuts/...",
  minIOS: "16.0",
  updatedAt: "2025-01-01",
  isAI: true,
  isPremium: false
}
```

## 📝 Adicionando Novos Tutoriais

Para adicionar um novo tutorial, edite o arquivo `src/data/shortcuts.ts`:

```typescript
{
  id: "meu-tutorial",
  title: "Meu Tutorial",
  description: "Descrição do tutorial",
  category: "Tutorial",
  image: "tutorial01.jpg",
  videoUrl: "https://www.youtube.com/watch?v=...",
  duration: "10:30",
  updatedAt: "2025-01-01"
}
```

## 🎨 Personalização

### Cores e Temas

Edite `tailwind.config.ts` para personalizar cores, gradientes e temas.

### Componentes

Os componentes estão em `src/components/`. Use shadcn/ui para adicionar novos componentes:

```bash
npx shadcn-ui@latest add [component-name]
```

### Estilos

Os estilos globais estão em `src/index.css`. Os estilos específicos dos cards de atalhos estão definidos com classes CSS customizadas.

## 🔒 Segurança

- Validação de tipos com TypeScript
- Sanitização de inputs
- Links externos com `rel="noopener noreferrer"`
- Validação de URLs

## 📄 Licença

Este projeto está licenciado sob a **Licença MIT - Uso Educacional e Não Comercial**.

### ✅ O que você PODE fazer:
- ✅ Usar para fins educacionais e de aprendizado
- ✅ Estudar o código e arquitetura
- ✅ Usar como referência ou inspiração para criar projetos **novos e originais**
- ✅ Aplicar conceitos e padrões aprendidos em seus próprios projetos comerciais (desde que sejam criações originais)

### ❌ O que você NÃO PODE fazer:
- ❌ Reproduzir, copiar ou distribuir este software para fins comerciais
- ❌ Fazer modificações mínimas e usar comercialmente
- ❌ Vender ou licenciar este software ou partes dele
- ❌ Criar produtos comerciais que sejam substancialmente similares

**Para uso comercial deste código, entre em contato para licenciamento:**
📧 Email: contato@fercarvalho.com

Veja o arquivo [LICENSE](LICENSE) para os termos completos da licença.

## 🤝 Contribuindo

Este é um projeto pessoal, mas sugestões e feedback são sempre bem-vindos!

## 📝 Changelog

### Versão Atual
- ✅ Sistema completo de busca avançada
- ✅ Galeria de atalhos organizada por categorias
- ✅ Sistema de tutoriais em vídeo
- ✅ Modais informativos para atalhos, vídeos e websites
- ✅ Interface responsiva e moderna
- ✅ Suporte a temas claro/escuro
- ✅ Integração com redes sociais
- ✅ Tracking de cliques
- ✅ URLs compartilháveis com hash
- ✅ SEO otimizado
- ✅ E muito mais...

---

**Desenvolvido com ❤️ para facilitar a descoberta e uso de atalhos poderosos no iOS**
