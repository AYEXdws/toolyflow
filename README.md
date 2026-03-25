# Toolyflow

Toolyflow is a multilingual online tools website built with Next.js, TypeScript, and Tailwind CSS. The current MVP includes:

- Bio Generator
- Nickname Generator
- QR Code Generator
- Case Converter
- Decision Wheel

The site is responsive, SEO-focused, and designed to run mostly client-side for low complexity and fast delivery.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- React 19

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Checks

Run the full release check before deploying:

```bash
npm run check
```

This runs:

- ESLint
- TypeScript type-checking
- production build

## Environment Variables

Create an `.env.local` file if you want to override the production site URL locally.

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
SITE_URL=https://your-domain.com
```

Use your real production domain before launch so canonical URLs, sitemap entries, Open Graph metadata, and robots output all match the deployed site.

## Deployment

The project is deployment-ready for Vercel and other Node-compatible platforms.

### Recommended: Vercel

1. Import the repository into Vercel.
2. Set the production domain.
3. Add `NEXT_PUBLIC_SITE_URL` and `SITE_URL` with the final domain.
4. Deploy.

Build settings:

- Install command: `npm install`
- Build command: `npm run build`
- Output: default Next.js output

### Manual Node Deployment

```bash
npm install
npm run build
npm start
```

## Launch Checklist

- Set the final production domain in environment variables.
- Verify `robots.txt` and `sitemap.xml` on the deployed domain.
- Test `/en`, `/tr`, `/es`, `/de`, `/fr`, `/pt`.
- Check mobile and desktop layouts.
- Validate metadata previews with an Open Graph debugger.
- Connect analytics and Search Console after launch.

## Notes

- Multilingual SEO is enabled with locale routes and alternate language metadata.
- Open Graph and Twitter preview images are generated in-app.
- Most tools are client-side to keep hosting simple and fast.
