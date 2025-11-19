# Sistema Online do Curso - Engenharia de Software em IA Aplicada

Sistema web para visualizar e gerenciar a estrutura do curso de Engenharia de Software em IA Aplicada.

## Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **JSON** - Armazenamento de dados (sem banco de dados)

## Estrutura do Projeto

```
/
├── app/                    # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx           # Página inicial
│   ├── module/[id]/       # Páginas de módulos
│   └── topic/[id]/        # Páginas de tópicos
├── components/            # Componentes React
│   ├── ModuleCard.tsx
│   ├── ModuleTree.tsx
│   ├── TopicView.tsx
│   └── Navigation.tsx
├── lib/                   # Utilitários
│   ├── course-data.ts     # Funções para dados do curso
│   └── types.ts           # Tipos TypeScript
├── data/
│   ├── course-structure.json  # Estrutura do curso
│   └── content/               # Conteúdo dos tópicos (JSON)
└── public/                # Arquivos estáticos
```

## Como Usar

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build

```bash
npm run build
npm start
```

## Adicionando Conteúdo

Para adicionar conteúdo a um tópico, crie um arquivo JSON em `data/content/` com o nome do ID do tópico:

**Exemplo:** `data/content/module-1-topic-1.json`

```json
{
  "id": "module-1-topic-1",
  "title": "Título do Tópico",
  "content": "Conteúdo em texto ou markdown...",
  "resources": [
    {
      "type": "link",
      "title": "Recurso",
      "url": "https://exemplo.com",
      "description": "Descrição opcional"
    }
  ]
}
```

## Estrutura de Dados

A estrutura do curso está em `data/course-structure.json` e segue a hierarquia:

- **Módulos** (12 módulos principais)
  - **Unidades** (quando aplicável)
    - **Tópicos**
      - **Subtópicos**

## Funcionalidades

- ✅ Visualização de todos os módulos
- ✅ Navegação hierárquica (módulos → unidades → tópicos)
- ✅ Visualização de conteúdo dos tópicos
- ✅ Suporte a recursos (links, vídeos, documentos)
- ✅ Design responsivo
- ✅ Modo escuro (via Tailwind dark mode)

## Próximos Passos

- [ ] Sistema de edição de conteúdo
- [ ] Upload de arquivos (PDFs, vídeos)
- [ ] Autenticação (quando necessário)
- [ ] Busca e filtros
- [ ] Progresso do aluno

