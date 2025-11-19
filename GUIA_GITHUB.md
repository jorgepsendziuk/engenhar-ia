# Guia para Publicar no GitHub

## Status Atual

✅ Repositório Git inicializado
✅ Arquivos adicionados ao staging
✅ Commit inicial criado

## Próximos Passos

### 1. Criar Repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique no botão **"+"** no canto superior direito
3. Selecione **"New repository"**
4. Preencha:
   - **Repository name**: `engenhar-ia` (ou outro nome de sua escolha)
   - **Description**: "Sistema online do curso de Engenharia de Software em IA Aplicada"
   - **Visibility**: Escolha **Public** ou **Private**
   - **NÃO** marque "Initialize with README" (já temos um)
   - **NÃO** adicione .gitignore ou license (já temos)
5. Clique em **"Create repository"**

### 2. Conectar Repositório Local ao GitHub

Após criar o repositório no GitHub, você verá uma página com instruções. Execute os comandos:

```bash
# Adicionar remote (substitua SEU_USUARIO pelo seu username do GitHub)
git remote add origin https://github.com/SEU_USUARIO/engenhar-ia.git

# Ou se preferir SSH:
# git remote add origin git@github.com:SEU_USUARIO/engenhar-ia.git

# Verificar se foi adicionado corretamente
git remote -v
```

### 3. Fazer Push para o GitHub

```bash
# Renomear branch para main (se necessário)
git branch -M main

# Fazer push do código
git push -u origin main
```

### 4. Verificar no GitHub

Acesse seu repositório no GitHub e verifique se todos os arquivos foram enviados corretamente.

## Comandos Resumidos

```bash
# 1. Adicionar remote (substitua SEU_USUARIO)
git remote add origin https://github.com/SEU_USUARIO/engenhar-ia.git

# 2. Renomear branch para main
git branch -M main

# 3. Fazer push
git push -u origin main
```

## Próximos Commits

Para futuras atualizações:

```bash
# Ver mudanças
git status

# Adicionar arquivos modificados
git add .

# Fazer commit
git commit -m "Descrição das mudanças"

# Enviar para GitHub
git push
```

## Configurações Recomendadas

### Adicionar Informações do Usuário (se ainda não configurado)

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@exemplo.com"
```

### Verificar Configuração

```bash
git config --list
```

## Troubleshooting

### Se der erro de autenticação:

**Opção 1: Usar Personal Access Token**
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token
3. Use o token como senha ao fazer push

**Opção 2: Usar SSH**
1. Gerar chave SSH: `ssh-keygen -t ed25519 -C "seu.email@exemplo.com"`
2. Adicionar chave ao GitHub: Settings → SSH and GPG keys
3. Usar URL SSH: `git@github.com:SEU_USUARIO/engenhar-ia.git`

### Se der erro "remote origin already exists":

```bash
# Remover remote existente
git remote remove origin

# Adicionar novamente
git remote add origin https://github.com/SEU_USUARIO/engenhar-ia.git
```

## Estrutura do Repositório

O repositório contém:

- `/app` - Aplicação Next.js
- `/components` - Componentes React
- `/lib` - Utilitários e tipos TypeScript
- `/data` - Estrutura do curso e conteúdo
- Documentação de metodologia
- Templates e checklists

## Próximos Passos Após Publicar

1. Adicionar descrição no README do GitHub
2. Adicionar topics/tags relevantes
3. Configurar GitHub Pages (se quiser hospedar)
4. Adicionar LICENSE (se quiser)
5. Configurar GitHub Actions para CI/CD (opcional)

