# Phoenix Imports & Imports - Site

Projeto Next.js + TypeScript + Tailwind para site institucional.

## Como rodar

```bash
npm install
npm run dev
```

## Google Reviews real

O site busca avaliações reais pelo Google Places API quando as credenciais abaixo estão configuradas em `.env.local`:

```bash
GOOGLE_PLACES_API_KEY=sua_chave_google_maps
GOOGLE_PLACE_ID=place_id_da_empresa
NEXT_PUBLIC_GOOGLE_PLACE_ID=place_id_da_empresa
USE_MOCK_PLACES=false
```

Passos no Google Cloud:

1. Ative billing no projeto Google Cloud.
2. Ative a API `Places API`.
3. Crie uma API key e restrinja a chave para o domínio/servidor do site.
4. Obtenha o Place ID da Phoenix no Google Maps/Place ID Finder.
5. Reinicie `npm run dev` após criar ou alterar `.env.local`.

Observações:

- `GOOGLE_PLACES_API_KEY` fica somente no backend.
- `GOOGLE_PLACE_ID` é usado no backend para buscar nota, total e reviews.
- `NEXT_PUBLIC_GOOGLE_PLACE_ID` é usado no frontend apenas para montar o link "Avaliar no Google".
- A API oficial do Google retorna um conjunto limitado de reviews do Place Details.
- Se as variáveis não estiverem configuradas, o site usa avaliações demonstrativas.

Teste:

```bash
curl http://localhost:3000/api/reviews
```

## YouTube Videos real

A seção de vídeos busca os últimos vídeos automaticamente pela YouTube Data API v3 quando estas variáveis existem em `.env.local`:

```bash
YOUTUBE_API_KEY=sua_chave_youtube_data_api
YOUTUBE_CHANNEL_ID=UCqhpJ8IcqKOrbmPqtn7R3bg
```

Sem essas variáveis, o site usa os três vídeos cadastrados manualmente em `data/youtubeVideos.ts`.

Teste:

```bash
curl http://localhost:3000/api/youtube-videos
```

Referência oficial: a YouTube Data API usa `search.list` para localizar vídeos por canal e `videos.list` para buscar detalhes como estatísticas.
