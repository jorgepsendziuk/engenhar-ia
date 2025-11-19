# Metodologia de Criação de Conteúdo - Engenharia de IA Aplicada

## 1. Documentação do Processo Atual

### 1.1 Como Foi Criado o Conteúdo Inicial

O conteúdo atual foi criado seguindo esta estrutura:

**Formato JSON:**
- Arquivo: `data/content/{module-id}-{topic-id}.json`
- Estrutura:
  - `id`: Identificador único do tópico
  - `title`: Título do tópico (deve corresponder ao course-structure.json)
  - `content`: Conteúdo em Markdown
  - `resources`: Array de recursos (links, vídeos, documentos, código)

**Características do Conteúdo:**
- Escrito em Markdown para formatação rica
- Estruturado com títulos (##, ###) para hierarquia
- Listas para organização de informações
- Negrito (**texto**) para ênfase
- Links e recursos externos para aprofundamento

**Exemplos Criados:**
- `module-1-topic-1.json`: História e contexto da IA
- `module-1-topic-2.json`: Introdução a LLMs
- `module-3-topic-1.json`: Visão geral de MCP

## 2. Metodologia de Criação de Conteúdo

### 2.1 Princípios Fundamentais

1. **Consistência**: Manter tom, estilo e profundidade uniformes
2. **Precisão**: Informações técnicas corretas e atualizadas
3. **Praticidade**: Foco em aplicações reais e exemplos práticos
4. **Progressão**: Conteúdo que constrói conhecimento incrementalmente
5. **Validação**: Verificar fontes e referências

### 2.2 Estrutura Padrão de Conteúdo

Cada tópico deve seguir esta estrutura:

```markdown
## Introdução
[Contexto e importância do tópico]

## Conceitos Fundamentais
[Definições claras e precisas]

## Como Funciona
[Explicação técnica quando aplicável]

## Exemplos Práticos
[Casos de uso reais]

## Aplicações
[Onde e como usar na prática]

## Recursos Adicionais
[Links, vídeos, documentação]
```

### 2.3 Fontes de Conteúdo

#### 2.3.1 Definições e Conceitos
- **Documentação Oficial**: Sites oficiais de tecnologias (OpenAI, Anthropic, Google)
- **Papers Acadêmicos**: arXiv, Google Scholar para fundamentos teóricos
- **Wikis Técnicas**: Wikipedia técnica, MDN Web Docs
- **Blogs Especializados**: Medium, Dev.to, artigos técnicos

#### 2.3.2 Vídeos
- **Canais Educacionais**: YouTube (3Blue1Brown, Fireship, etc.)
- **Tutoriais Oficiais**: Canais das empresas (OpenAI, Google AI)
- **Conferências**: GDC, PyData, AI conferences
- **Webinars**: Eventos online e gravações

#### 2.3.3 Exemplos de Código
- **Repositórios GitHub**: Projetos open-source relevantes
- **CodeSandbox/CodePen**: Exemplos interativos
- **Documentação com Exemplos**: Docs oficiais com snippets
- **Tutoriais Práticos**: Step-by-step guides

#### 2.3.4 Casos de Uso Reais
- **Case Studies**: Estudos de caso de empresas
- **Portfólios**: Projetos reais de desenvolvedores
- **Artigos Técnicos**: Medium, Dev.to, HackerNoon
- **Comunidades**: Reddit, Discord, Stack Overflow

### 2.4 Processo de Criação (Workflow)

#### Fase 1: Pesquisa e Coleta
1. Identificar o tópico no `course-structure.json`
2. Listar subtópicos que precisam ser cobertos
3. Pesquisar fontes confiáveis (mínimo 3-5 fontes)
4. Coletar recursos (vídeos, links, exemplos)
5. Validar informações cruzando fontes

#### Fase 2: Estruturação
1. Criar esqueleto do conteúdo (títulos principais)
2. Mapear subtópicos para seções
3. Definir ordem lógica de apresentação
4. Identificar pontos que precisam de exemplos

#### Fase 3: Redação
1. Escrever introdução contextualizando o tópico
2. Desenvolver cada seção com profundidade adequada
3. Incluir exemplos práticos e casos de uso
4. Adicionar definições técnicas precisas
5. Usar Markdown para formatação

#### Fase 4: Recursos
1. Selecionar 3-5 recursos relevantes por tópico
2. Incluir mix de tipos (link, video, document, code)
3. Validar URLs e acessibilidade
4. Adicionar descrições claras

#### Fase 5: Revisão
1. Verificar consistência com outros tópicos
2. Validar informações técnicas
3. Checar formatação Markdown
4. Garantir progressão lógica
5. Revisar recursos e links

### 2.5 Checklist de Qualidade

Antes de finalizar um tópico, verificar:

- [ ] Conteúdo cobre todos os subtópicos listados
- [ ] Definições são precisas e claras
- [ ] Exemplos são práticos e relevantes
- [ ] Recursos são atualizados e acessíveis
- [ ] Formatação Markdown está correta
- [ ] Tom e estilo consistentes com outros tópicos
- [ ] Informações técnicas validadas
- [ ] Links funcionam e são relevantes
- [ ] Vídeos são educativos e atualizados
- [ ] Código de exemplo está correto (se houver)

### 2.6 Estratégias para Conteúdo Fresco

#### 2.6.1 Atualização Contínua
- Revisar conteúdo a cada 3-6 meses
- Atualizar links quebrados
- Adicionar novas tecnologias e ferramentas
- Incluir tendências recentes

#### 2.6.2 Fontes em Tempo Real
- **Twitter/X**: Seguir especialistas e empresas
- **Newsletters**: AI newsletters (The Batch, AI Research)
- **Blogs Atualizados**: Verificar data de publicação
- **GitHub**: Stars e trending repositories

#### 2.6.3 Validação de Atualidade
- Verificar datas de publicação
- Comparar com documentação mais recente
- Validar versões de APIs e ferramentas
- Checar se práticas ainda são recomendadas

## 3. Template de Conteúdo

### 3.1 Template Base

Ver arquivo `TEMPLATE_CONTEUDO.md` para template detalhado com exemplos práticos.

## 4. Priorização de Criação

Ver arquivo `PRIORIZACAO_CONTEUDO.md` para detalhes sobre priorização por módulo.

## 5. Ferramentas e Recursos

### 5.1 Ferramentas Recomendadas
- **Editor Markdown**: VS Code com extensões
- **Validador JSON**: JSONLint, VS Code
- **Validador Links**: Broken Link Checker
- **Gerenciador de Referências**: Notion, Obsidian
- **Captura de Screenshots**: Para exemplos visuais

### 5.2 Repositórios de Referência
- GitHub Awesome Lists (awesome-ai, awesome-llm)
- Papers With Code
- Hugging Face Model Cards
- OpenAI Documentation
- Anthropic Documentation

## 6. Manutenção e Evolução

### 6.1 Processo de Atualização
1. Revisão trimestral de conteúdo
2. Atualização de links quebrados
3. Adição de novos recursos
4. Correção de informações desatualizadas
5. Expansão de tópicos conforme necessário

### 6.2 Versionamento
- Manter histórico de mudanças
- Documentar atualizações significativas
- Versionar estrutura JSON se necessário

