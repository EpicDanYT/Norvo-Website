# Voltion — website

Multi-page Next.js site: Home, About, Services, Projects, Contact, with a shared nav/footer.

## Edit content
- `content/site.ts` — all text, contact details, nav links, the NORVO promises, process steps, about content
- `components/Nav.tsx` / `Footer.tsx` — shared header/footer, shown on every page automatically via `app/layout.tsx`

## Projects page
Currently an honest "coming soon" placeholder — no real projects exist yet. Once a demo or client
site is ready, replace `app/projects/page.tsx` with a real list (same pattern as Itek Itek's work
section from the earlier version, adapted for the black palette).

## Contact form
Opens the visitor's email app until a Web3Forms key is added — see `formAccessKey` in `content/site.ts`.

## Run locally
    npm install
    npm run dev

## Deploy
Push to GitHub; Vercel redeploys on every push automatically.
