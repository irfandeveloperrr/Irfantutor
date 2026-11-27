# Project memory

## Product intent & audience

- Irfan Tutor: home-tuition tutoring business website for parents in Hyderabad, India.
- Tagline: "Personal Attention. Better Understanding. Brighter Futures."
- Primary audience: parents seeking reliable one-on-one home tuition for their children (classes 6–12).
- All contact via WhatsApp only (+91 8297406171); every enquiry button must pre-fill a WhatsApp message.
- Instagram testimonials linked to https://www.instagram.com/irfan__tutor/ (not invented reviews).

## Brand personality & voice

- Premium, trustworthy, calm, parent-focused.
- Copy is natural, concise, SEO-friendly for "home tuition in Hyderabad"; avoids hype.
- Honest: never invent ratings, awards, qualifications, exact fees, availability, or student results.

## Visual design & UX direction

- Theme: premium white + emerald green; emerald gradients, subtle shadows, generous spacing.
- Typography: elegant; readable on small Android screens.
- Mobile-first, fully responsive, no horizontal scroll.
- Hero: animated headline + WhatsApp CTA + interactive Three.js 3D "knowledge orb" (floating particles, orbiting rings, glowing core).
- Custom CSS/SVG decorative visuals instead of stock photos (e.g. SVG Hyderabad map illustration).
- Components: sticky navbar with mobile hamburger, floating WhatsApp button on scroll, premium cards, animated FAQ accordion, Instagram testimonials section, service-areas section, final WhatsApp enquiry CTA, professional footer.
- Motion via Framer Motion: smooth scroll animations + hover micro-interactions.
- Icons via lucide-react.
- SEO: title, meta description, Open Graph/Twitter tags, custom emerald favicon.

## Decisions, constraints & rationale

- Stack: Vite + React (TypeScript variant of starter) + Tailwind CSS + Framer Motion + Three.js + lucide-react.
- Path alias `@/` maps to `src/`; imports use it instead of deep relative paths (per `.bolt/prompt`).
- Shared constants file + WhatsApp helper centralized to keep enquiry links consistent.
- Three.js confined to hero visual for performance on low-end Android.
- Production build and typecheck both pass cleanly; `dist/` generated.
- Free permanent hosting recommended via Netlify Drop (drag `dist/`) or `npx vercel`.

## Open questions & assumptions

- Exact tutor bio/qualifications not provided; copy kept general and non-fabricated pending real details.
- No invented subjects beyond implied 6–12 range; specific subject lists assumed standard curriculum.
- Real service areas within Hyderabad not specified; section uses representative area names until confirmed.
- Fees and availability intentionally omitted; pending business owner input.