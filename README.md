# Awan Boys Hostel

Professional website for **Awan Boys Hostel** near Global Academy & College, Westridge 3, Rawalpindi.

## Features

- Call and WhatsApp booking CTAs (`0346 8414184`)
- Three-time meals, Wi‑Fi, in-house shop, campus-near location
- Photo gallery and embedded Google Map
- Mobile sticky Call / WhatsApp bar

## Run locally

```bash
npm install
npm run dev -- -p 43123
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

## Customize

Edit hostel details in `src/lib/hostel.ts` (name, address, phone, maps links, gallery).

## Deploy on Vercel

1. Push this repo to GitHub (`mubasharmanzoorawan759-collab`).
2. Import the project in [Vercel](https://vercel.com/new).
3. Enable automatic deployments on merge to `main`.

Optional AI Gateway (not required for this marketing site):

```bash
npx vercel ai-gateway setup
```

Set `AI_GATEWAY_API_KEY` in Vercel project env vars if you use it later.
