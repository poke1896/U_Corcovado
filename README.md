# Ulises — Guía en Corcovado

Sitio web profesional (Next.js + Tailwind) para un guía turístico local independiente especializado en el Parque Nacional Corcovado.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- next/image para optimización de imágenes
- framer-motion (animaciones suaves, opcional)

## Paleta de colores (obligatoria)
- Forest Green #2E4608 → principal (botones/títulos)
- Verdant Accent #5A734A → acentos/hover
- Tierra Suave #ECE7D5 → fondo general
- Neutro Claro #F5F0E6 → secciones/cards
- Verde Oscuro #3D550C → navbar/footer

## Estructura
- app/ layout y páginas
- components/ UI reutilizable (Hero, About, Tours, Gallery, FAQ, ContactCTA)
- lib/ datos (tours)
- public/images/ imágenes (agregar archivos reales)

## Ejecutar
1. Instalar dependencias:
```bash
npm install
```
2. Desarrollo:
```bash
npm run dev
```
3. Abrir:
```bash
$BROWSER http://localhost:3000
```

## SEO y LLM
- Metadatos en app/layout.tsx
- app/sitemap.ts y app/robots.ts
- JSON-LD en components/StructuredData.tsx (LocalBusiness + TouristTrip)

## Contenido pendiente
- Reemplazar dominio https://example.com
- Añadir imágenes reales en public/images/
- Configurar número real de WhatsApp y email

## Licencia
Uso interno para el guía Ulises; no se incluye una licencia pública.