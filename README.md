# Landing de Consultoria de Crédito

## Instalação
npm install
cp .env.example .env.local
npm run dev

## Supabase
1. Crie um projeto Supabase.
2. Execute `supabase.sql` no SQL Editor.
3. Configure no `.env.local` a URL, a service role key e o número do WhatsApp em formato internacional, somente dígitos.

Exemplo: `351912345678`

## Imagem de fundo
Coloque o print em:
`public/images/bcc-iccrea-site.jpg`

## Produção
Nunca exponha `SUPABASE_SERVICE_ROLE_KEY` no browser nem a versione no Git.
