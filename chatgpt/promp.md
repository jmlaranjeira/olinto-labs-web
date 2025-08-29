Quiero que diseñes y entregues el sitio web de una sola página (one-page) para mi empresa Olinto Labs, matriz de varios bots (Mercabot, AgendaBot, GymBot…). Stack requerido: Vue 3 (Composition API, <script setup>), Vite, TailwindCSS, y SCSS (no CSS plano). Usa Tailwind con utilidades y SCSS para componentes (<style lang="scss">) y variables.

Objetivo y estilo
	•	Marca: Olinto Labs.
	•	Estética: futurista, limpia y profesional, con sutiles toques “neón” (cian/magenta) sobre fondo oscuro. Incluye también modo claro/oscuro (prefiere oscuro por defecto).
	•	Header/hero: imagen (o ilustración) de un bot trabajando en un entorno de laboratorio/estudio tecnológico. Debe sentirse aspiracional e innovador.

Arquitectura de la página (one-page con navegación por anclas)

Menú superior sticky con estos enlaces (scroll suave a secciones):
	1.	Home (#home)
	2.	Products (#products)
	3.	How it works (#how-it-works)
	4.	Technology (#technology)
	5.	Pricing (#pricing)
	6.	Clients (#clients)
	7.	FAQ (#faq)
	8.	Contact (#contact)

Contenido por sección
	•	Home/Hero (#home)
	•	Título: “Olinto Labs”
	•	Subtítulo: “We build specialized AI bots that actually ship and sell.”
	•	CTA primario: “Get a demo”
	•	CTA secundario: “Explore products”
	•	Imagen/ilustración del bot trabajando (usa un placeholder y un contenedor responsive).
	•	Micro-animaciones (Framer Motion o alternativas de Vue si lo prefieres) al cargar y en hover.
	•	Products (#products)
	•	Mercabot (ventas omnicanal para e-commerce: WhatsApp/Telegram + catálogo + cobros)
	•	AgendaBot (reservas y citas inteligentes)
	•	GymBot (captación, fidelización y recordatorios para gimnasios)
	•	Cards con icono, 3 bullets de valor, CTA “Learn more”.
	•	How it works (#how-it-works)
	•	Timeline en 4 pasos: Discover → Configure → Integrate → Measure.
	•	Pequeños diagramas o badges (API, Webhooks, Embeddings, Analytics).
	•	Technology (#technology)
	•	Stack badges: Vue 3, Vite, Tailwind, Node/TS, LangGraph/LangChain, OpenAI API, Datadog, Jira, Supabase, Telegram/WhatsApp Cloud.
	•	Píldoras de texto: seguridad, privacidad, aislado de estilos, performance.
	•	Pricing (#pricing)
	•	3 planes: Starter, Pro, Scale. Incluye precio orientativo/placeholder, features con checkmarks, CTA “Start trial”.
	•	Clients (#clients)
	•	Logos en grid (placeholders) y 1–2 testimonios cortos con foto/placeholder.
	•	FAQ (#faq)
	•	6–8 preguntas colapsables (acordeón).
	•	Contact (#contact)
	•	Formulario (nombre, email, empresa, mensaje). Validación básica.
	•	Datos rápidos: email de ventas, enlace a WhatsApp/Telegram, ubicación.
	•	Pie de página con © Olinto Labs, links legales y redes.

Requisitos técnicos
	•	Vue 3 + Vite. Estructura de componentes reutilizables (Header, Nav, Section, Card, PricingTable, Accordion, Footer).
	•	TailwindCSS instalado y configurado. Usa utilidades y @apply en SCSS para variantes de componentes.
	•	SCSS obligatorio: variables para spacing, radii y z-index; archivos por componente con <style lang="scss" scoped>.
	•	Navegación por anclas con scroll suave (intercepción de clicks del menú y scrollIntoView).
	•	Responsive completo (mobile-first). Rejillas fluidas y breakpoints de Tailwind.
	•	Modo oscuro/claro según prefers-color-scheme, con toggle manual en el header.
	•	Accesibilidad: contraste AA, roles ARIA en nav/accordion/modals, focus visible, etiquetas de formulario.
	•	Performance: imágenes lazy-loaded, fuentes del sistema o 1 webfont, bundle liviano.
	•	SEO básico: meta tags, título y descripción, Open Graph, favicons placeholders.
	•	Microinteracciones: hover states, parallax sutil en el hero, animaciones al entrar en viewport.
	•	Placeholders visuales: usa imágenes libres (o https://picsum.photos//SVGs) y deja claro dónde reemplazarlas.

Entregables
	1.	Proyecto Vite funcional con Vue 3.
	2.	Componentes en /src/components y secciones en /src/sections.
	3.	Estilos: Tailwind + archivos .scss por componente/section.
	4.	Anclas y menú funcionando con scroll suave.
	5.	README con instrucciones de instalación y build.
	6.	Paleta propuesta (ejemplo):
	•	Fondo oscuro: #0B0F14
	•	Primario: #05D5FF
	•	Secundario: #FF2E88
	•	Acentos y neutrales con escala en Tailwind.
(Permite override fácil).
	7.	Tipografía: sistema o una sola webfont (ej. Inter). Carga optimizada.

Extras (opcionales pero deseables)
	•	Pequeño widget de chat placeholder en la esquina (future-ready).
	•	i18n básico ES/EN con JSON de strings.
	•	Sección mini-casos de uso por bot (e-commerce, salud, fitness).
	•	Badge “Made with AI” discreto.

Entrega el resultado con código + preview y ejemplos de contenido realista (copies cortos) para que solo tenga que reemplazar textos e imágenes.
