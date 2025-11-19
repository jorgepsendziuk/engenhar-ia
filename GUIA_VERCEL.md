# Guia para Publicar na Vercel

## Opções de Deploy

### Opção 1: Via Vercel CLI (Recomendado para primeira vez)

```bash
# 1. Fazer login na Vercel
vercel login

# 2. Deploy do projeto
vercel

# 3. Para produção
vercel --prod
```

### Opção 2: Via Interface Web (Recomendado para CI/CD)

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com GitHub
3. Clique em "Add New Project"
4. Importe o repositório `jorgepsendziuk/engenhar-ia`
5. Configure:
   - Framework Preset: Next.js (detectado automaticamente)
   - Root Directory: `./` (raiz)
   - Build Command: `npm run build` (padrão)
   - Output Directory: `.next` (padrão)
6. Clique em "Deploy"

## Configurações Importantes

### Variáveis de Ambiente (se necessário)

Se precisar de variáveis de ambiente no futuro:
- Vercel Dashboard → Project → Settings → Environment Variables

### Domínio Customizado (opcional)

- Vercel Dashboard → Project → Settings → Domains
- Adicione seu domínio personalizado

## Comandos Úteis

```bash
# Ver status do deploy
vercel ls

# Ver logs
vercel logs

# Remover deploy
vercel remove

# Ver informações do projeto
vercel inspect
```

## Após o Deploy

- URL de produção será fornecida (ex: `engenhar-ia.vercel.app`)
- Cada push para `main` faz deploy automático (se configurado)
- Preview deployments para cada PR

