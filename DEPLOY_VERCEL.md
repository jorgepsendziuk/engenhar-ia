# Deploy na Vercel - Passo a Passo

## Método 1: Via Interface Web (Mais Fácil) ⭐ RECOMENDADO

### Passo 1: Acessar Vercel
1. Acesse: https://vercel.com
2. Clique em **"Sign Up"** ou **"Log In"**
3. Escolha **"Continue with GitHub"**
4. Autorize a Vercel a acessar seu GitHub

### Passo 2: Importar Projeto
1. No dashboard da Vercel, clique em **"Add New..."** → **"Project"**
2. Você verá seus repositórios do GitHub
3. Encontre **`jorgepsendziuk/engenhar-ia`**
4. Clique em **"Import"**

### Passo 3: Configurar Projeto
A Vercel detecta automaticamente que é um projeto Next.js. Verifique:

- **Framework Preset**: Next.js ✅
- **Root Directory**: `./` ✅
- **Build Command**: `npm run build` ✅
- **Output Directory**: `.next` ✅
- **Install Command**: `npm install` ✅

**Não precisa mudar nada!** Apenas clique em **"Deploy"**

### Passo 4: Aguardar Deploy
- O deploy leva 1-3 minutos
- Você verá o progresso em tempo real
- Ao final, receberá uma URL: `https://engenhar-ia-xxxxx.vercel.app`

### Passo 5: Configurar Domínio (Opcional)
1. Vercel Dashboard → Seu Projeto → Settings → Domains
2. Adicione um domínio customizado se quiser

---

## Método 2: Via CLI

### Passo 1: Login
```bash
vercel login
```
- Escolha "Continue with GitHub"
- Siga as instruções no navegador

### Passo 2: Deploy
```bash
# Deploy de preview (desenvolvimento)
vercel

# Deploy de produção
vercel --prod
```

### Passo 3: Seguir Prompts
- **Set up and deploy?** → `Y`
- **Which scope?** → Seu usuário/equipe
- **Link to existing project?** → `N` (primeira vez)
- **Project name?** → `engenhar-ia` (ou pressione Enter)
- **Directory?** → `./` (pressione Enter)
- **Override settings?** → `N` (pressione Enter)

---

## Após o Deploy

### URLs Geradas
- **Production**: `https://engenhar-ia.vercel.app` (ou similar)
- **Preview**: URLs únicas para cada branch/PR

### Deploy Automático
Após conectar com GitHub:
- ✅ Cada push para `main` → Deploy automático em produção
- ✅ Cada PR → Deploy de preview automático
- ✅ Cada branch → Deploy de preview

### Verificar Deploy
1. Acesse a URL fornecida
2. Teste a navegação
3. Verifique se todos os módulos carregam
4. Teste a visualização de tópicos

---

## Configurações Avançadas (Opcional)

### Arquivo `vercel.json` (se necessário)

Crie `vercel.json` na raiz se precisar de configurações especiais:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["gru1"]
}
```

### Variáveis de Ambiente

Se no futuro precisar de variáveis:
1. Vercel Dashboard → Project → Settings → Environment Variables
2. Adicione variáveis (ex: `API_KEY`, `DATABASE_URL`)

---

## Troubleshooting

### Erro de Build
- Verifique logs na Vercel Dashboard
- Teste build local: `npm run build`
- Verifique se todas as dependências estão no `package.json`

### Erro 404 em Rotas
- Next.js App Router deve funcionar automaticamente
- Verifique se arquivos estão em `app/` corretamente

### Assets não carregam
- Verifique caminhos relativos
- Use `/` para assets públicos em `public/`

---

## Próximos Passos

1. ✅ Deploy concluído
2. 🔗 Compartilhar URL com usuários
3. 📊 Monitorar analytics (se configurado)
4. 🔄 Deploys automáticos já configurados

---

## Links Úteis

- [Vercel Dashboard](https://vercel.com/dashboard)
- [Documentação Next.js na Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Vercel CLI Docs](https://vercel.com/docs/cli)

