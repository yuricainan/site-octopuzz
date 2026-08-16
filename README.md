# Octopuzz — Site institucional

Site institucional da Octopuzz (automação, IA, ERP/CRM/PDV e consultoria tecnológica),
com blog e portfólio de cases editáveis via Supabase Studio.

## Stack

- React + Vite + Tailwind (shadcn/ui)
- Supabase self-hosted (Postgres + PostgREST) na própria VPS, rodando isolado de
  outros projetos na mesma máquina
- Deploy automático via GitHub Actions a cada push na branch principal

## Rodando localmente

1. `npm install`
2. Crie um `.env.local` com base no `.env.example`:
   ```
   VITE_SUPABASE_URL=https://supabase.octopuzz.com.br
   VITE_SUPABASE_ANON_KEY=<chave anon da stack>
   ```
3. `npm run dev`

## Conteúdo (blog, cases, contatos)

Não existe painel de administração no próprio site — posts de blog e cases são
gerenciados diretamente pelo Supabase Studio (`https://supabase.octopuzz.com.br`),
nas tabelas `blog_post` e `case_study`. Mensagens de contato caem na tabela `contact`.
