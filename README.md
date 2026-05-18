# Carpintería Los Artesanos

Sitio web corporativo de alto rendimiento construido con Next.js, App Router, TypeScript, Tailwind CSS y Shadcn UI.

## Características principales
- Arquitectura híbrida: Server Components, rutas dinámicas, ISR, Server Actions.
- Galería de proyectos con imágenes optimizadas y metadatos SEO dinámicos.
- Formulario de contacto funcional con validación y feedback.
- Middleware de seguridad y página de error personalizada.
- Suspense y esqueletos de carga para mejor UX.
- Paleta y tipografía personalizadas para reflejar la identidad artesanal.

## Estructura de rutas
- `/` — Home (Hero, servicios, proyectos recientes)
- `/sobre-nosotros` — Historia y proceso artesanal
- `/proyectos` — Galería dinámica (ISR)
- `/proyectos/[slug]` — Detalle de proyecto
- `/contacto` — Formulario de contacto

## Optimización y auditoría
- Metadata API y next/font para SEO y rendimiento.
- Lighthouse > 90 en todas las áreas.
- Middleware para cabeceras de seguridad.

## Despliegue
Preparado para Vercel.

---

> Sustituye las imágenes de `/public` por las reales del taller para producción.
