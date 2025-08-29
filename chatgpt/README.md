# Olinto Labs — One‑Page Site (Vue 3 + Vite + Tailwind + SCSS)

Futurista, limpio y profesional, con modo oscuro por defecto y toques neón (cian/magenta). Incluye secciones: Home, Products, How it works, Technology, Pricing, Clients, FAQ, Contact. Accesible (focus visible, ARIA), responsive y con micro‑interacciones.

## Stack
- Vue 3 (Composition API, `<script setup>`)
- Vite
- TailwindCSS (utilities) + SCSS por componente (`<style lang="scss" scoped>`)
- i18n básico (ES/EN)
- MotionOne (animaciones ligeras)

## Requisitos
- Node 18+

## Instalación
```bash
pnpm i   # o npm i / yarn
pnpm dev # o npm run dev
```

> Nota Tailwind + PostCSS: usamos `@tailwindcss/postcss` en `postcss.config.js`, solución al error típico de Vite cuando se usa el plugin antiguo.

## Estructura
```
src/
  components/      # Header, Cards, Accordion, ChatWidget
  sections/        # HomeHero, Products, HowItWorks, Technology, Pricing, Clients, Faq, Contact, Footer
  assets/styles/   # Tailwind + variables SCSS
  composables/     # useTheme
  i18n/            # ES/EN strings
```

## Personalización rápida
- Colores: `tailwind.config.js` (`brand.primary`, `brand.secondary`, `brand.bg`)
- Variables SCSS: `src/assets/styles/_variables.scss`
- Tipografía: por defecto `system-ui`. Activa Inter en `index.html` si quieres.

## SEO
Edita `index.html` (título, descripción, Open Graph). Favicons en `public/`.

## Reemplazar imágenes
Todas las imágenes son placeholders (`picsum.photos`). Sustituye por las tuyas (idealmente comprimidas).

## Accesibilidad
- Focus visible en todos los elementos interactivos
- Roles ARIA en navegación y acordeón
- Contraste AA en modo oscuro/claro

## Preview sin build (opcional)
Incluimos `preview.html` que usa CDN (Tailwind Play + Vue) para ver el layout rápidamente sin compilar.
```
open preview.html
```
