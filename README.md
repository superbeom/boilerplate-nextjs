# Bolierplate for NextJs

- **Framework**: [NextJs](https://nextjs.org/)
- **Database**: [Supabase](https://supabase.com)
- **ORM**: [Prisma](https://prisma.io/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Deployment**: [Vercel](https://vercel.com)

## Ready for Start

First - To run your own server, copy '.env.example' file to '.env' and update environment

- .env > NEXT_PUBLIC_BASE_URL (Website url)
- .env > DATABASE_URL (DB url)
- .env > NEXT_PUBLIC_UPDATE_PAGE_DATE (Sitemap lastmod - whenever you add pages)

Second - Update url at 'robots.txt'

- public > robots.txt > Sitemap

Third - Update your 'sitemap.xml.tsx'

- pages > sitemap.xml.tsx > pageUrls

## Overview

- `lib/prisma.ts` - Get Prisma client.
- `pages/*` - All other static pages.
- `pages/api/*` - [API Routes](https://nextjs.org/docs/api-routes/introduction)
- `pages/sitemap.xml.tsx` - Automatically generated sitemap.
- `prisma/*` - Prisma schema, which uses a Supabase PostgreSQL database.
- `public/*` - Static assets including fonts and images.
- `styles/globals.css` - Global styles using TailwindCSS.
