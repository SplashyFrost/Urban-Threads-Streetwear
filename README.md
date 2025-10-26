# Urban Threads — Demo Streetwear Store

A lightweight static demo storefront showcasing a modern monochrome UI with subtle glass effects, a small product catalog, and simple client-side interactivity (loading spinner, mobile nav, demo forms).

This repository is a front-end demo only — there is no backend/auth implemented. It's ideal as a visual prototype, design reference, or starter template for a small static merchandise site.

## Live / Local Preview
To preview locally, open a terminal in the project root (`/home/michele/Desktop/Urban Threads`) and run a simple static server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

## Key features
- Modern monochrome theme with subtle glass (backdrop-blur) effects and soft color accents
- Responsive navbar with mobile menu (hamburger)
- Loading spinner overlay used for demo navigation and form submissions
- Simple shop page with product cards and product detail pages
- Reusable CSS variables and component styles for quick customization

## Pages
- `index.html` — Home / hero / overview
- `shop.html` — Product listing (grid)
- `product-1.html`, `product-2.html`, `product-3.html` — Sample product detail pages
- `about.html` — About and philosophy
- `contact.html` — Contact form (demo)
- `login.html` — Demo login/signup landing (static)

All pages include `style.css` and `main.js`.

## Files of interest
- `style.css` — All styling: variables, layout, components, responsive rules. Look for the `:root` variables block to change color accents and glass intensity.
- `main.js` — Handles the mobile nav toggle, spinner overlay, intercepting internal navigation to show the spinner briefly, and demo form/button handlers (`data-demo-spinner`, `data-demo-message`).
- `img/` — Placeholder SVG assets used on product pages.

## Design notes and customization tips
- Color accents: modify the CSS variables `--accent-blue`, `--accent-purple`, `--accent-teal` in `style.css` to change the blurred accent colors.
- Glass effect: control intensity using `--glass` and the `backdrop-filter: blur(...)` values throughout the file.
- CTA & login behaviour: CTAs use scale/box-shadow feedback. The login link in the navbar is intentionally styled as a pill-shaped glass CTA and has a mobile-safe fallback to avoid overflow.
- Product grid: edit `shop.html` to add/remove product cards; each `.product-card` uses a small hover scale and teal accent overlay.

## Accessibility
- Focus outlines are preserved for keyboard users (visible `outline` rules on focusable elements).
- Images have `alt` attributes and spinner uses `aria-live` and `aria-hidden` toggles.

## Development / Contribution
This is a static demo. If you want to turn it into a real store:

1. Add a backend (API) for product data, cart, and auth.
2. Replace demo form handlers in `main.js` with real requests (fetch/XHR).
3. Add a build step (Webpack/Vite/Rollup) if you include modules or preprocessors.

Contributions are welcome — open issues or PRs with focused changes (bugfixes, accessibility improvements, small features).

## License
MIT — see `LICENSE` if you want to add one; otherwise consider adding an appropriate license file for distribution.

---

## GitHub-ready descriptions

Short repo tagline (for GitHub repo name/summary):
"Urban Threads — static demo streetwear storefront with modern monochrome UI, glass effects, and a small product catalog."

Detailed description (use for project page or repository README summary):

English:
"Urban Threads is a static front-end demo of a small streetwear storefront built with plain HTML, CSS and vanilla JavaScript. The project focuses on a modern monochrome aesthetic with subtle glass effects and gentle blurred color accents. It includes a responsive navbar, an accessible loading spinner overlay used for demo navigation and form interactions, a shop page with product cards and detail pages, and a lightweight CSS system (variables + component classes) that makes it easy to tweak colors, spacing and glass intensity. This repository serves as a design and interaction prototype or a minimal starter template for static e-commerce landing pages."

Italian (dettagliata, per la descrizione del repo su GitHub se preferisci l'italiano):
"Urban Threads è un demo front-end di un piccolo store streetwear, realizzato con HTML, CSS e JavaScript vanilla. Il progetto punta su un'estetica monocromatica moderna con sottili effetti vetro e accenti di colore sfocati per un tocco contemporaneo. Include una navbar responsive con menu mobile, overlay spinner accessibile per simulare il caricamento, una pagina Shop con cards prodotto e pagine dettaglio, e un sistema CSS modulare (variabili e classi riutilizzabili) per personalizzare velocemente colori, spaziature e intensità dell'effetto vetro. Ideale come prototipo visivo o base minimal per landing statiche di e-commerce."

If you'd like, I can also:
- Add a `LICENSE` file (MIT) and a small `CONTRIBUTING.md`.
- Create unique SVG thumbnails for the extra demo products.
- Add a short `preview.gif` or screenshots folder for the repo page.

---

Let me know if you want the README in Italian only, or to include live screenshots and contributor guidelines — I can add those next.
git add .
git commit -m "Init: Urban Threads site"
git branch -M main
git push -u origin main
# Urban Threads

A minimal streetwear & lifestyle demo site — modern monochrome navbar and simple shop pages.

This repository contains a small landing with a responsive navbar and a lightweight shop demo. It is intended as a starting point for front-end development.

What you'll find in this folder
- `index.html` — main page (navbar + hero + featured products)
- `style.css` — modern monochrome styles, responsive navbar and product styles
- `img/` — placeholder SVGs used for product images

Local preview
1. Open a terminal in the project folder:

```bash
# from /home/michele/Desktop/Urban Threads
python3 -m http.server 8000
```

2. Open `http://localhost:8000` in your browser.

Push to GitHub (suggested commands)

```bash
git init
git add .
git commit -m "Init: Urban Threads site"
# create the repo on GitHub via the web UI, then:
git remote add origin git@github.com:TUO_USERNAME/urban-threads.git
git branch -M main
git push -u origin main
```

Next steps I can help with
- Add real product images and more product metadata (sizes, SKU)
- Wire up a simple cart with localStorage or integrate a payment provider
- Add a CI workflow to lint HTML/CSS or deploy to GitHub Pages

License
This project is provided under the MIT License (see `LICENSE`).
