# Trending ADS — Sitio web (Next.js)

## 1. Requisitos
- Node.js 18.18 o superior instalado en tu computadora.
- Una cuenta gratuita en [vercel.com](https://vercel.com) (recomendado usar el mismo login de GitHub).

## 2. Correr el sitio en tu computadora
```bash
npm install
npm run dev
```
Abre http://localhost:3000 en tu navegador. Los cambios que hagas se ven en vivo.

## 3. Editar el contenido (sin tocar código)
Todo el contenido está en **un solo archivo**:

```
src/lib/site-config.ts
```

Ahí puedes cambiar, sin riesgo de romper nada:
- Número de WhatsApp y mensaje predeterminado
- Correo (opcional)
- Redes sociales (Instagram, TikTok)
- Dominio (`url`) — actualízalo cuando compres el definitivo
- IDs de Google Analytics y Meta Pixel (están vacíos = desactivados)
- Servicios, equipo, testimonios y preguntas frecuentes

**Pendientes marcados con `TODO` dentro de ese archivo:**
- Testimonios: actualmente son de **prueba** (marcado también visible al pie de esa sección en el sitio). Reemplázalos por los reales antes de publicar.
- Equipo: falta nombre y apellido reales de cada persona, y las fotos. Mientras no agregues una foto, se muestran las iniciales automáticamente. Para agregar una foto: colócala en `public/team/nombre.jpg` y escribe esa ruta en el campo `photo` de esa persona.
- Dominio: `trendingads.com` está puesto como ejemplo. Verifica disponibilidad real en un registrador (Namecheap, GoDaddy, Google Domains, etc.) antes de comprarlo, y luego actualiza `url` en `site-config.ts`.

## 4. Publicar el sitio gratis (Vercel)
1. Crea un repositorio en GitHub y sube esta carpeta (o arrastra el proyecto directamente en Vercel, que también lo permite sin GitHub).
2. Entra a vercel.com → "Add New Project" → selecciona el repositorio.
3. Vercel detecta Next.js automáticamente. Dale a "Deploy" sin cambiar nada.
4. En 1-2 minutos tendrás una URL gratuita tipo `trending-ads.vercel.app`.
5. Cuando compres tu dominio real, en Vercel ve a Project → Settings → Domains y agrégalo ahí; Vercel te da los registros DNS que debes configurar en tu registrador.

## 5. Activar analítica (opcional, gratis)
- **Google Analytics 4**: crea una propiedad en https://analytics.google.com, copia el ID (formato `G-XXXXXXXXXX`) y pégalo en `googleAnalyticsId` dentro de `site-config.ts`.
- **Meta Pixel**: créalo en https://business.facebook.com/events_manager, copia el ID numérico y pégalo en `metaPixelId`.

## 6. Estructura del proyecto
```
src/
  app/            → layout, página principal, sitemap.xml, robots.txt
  components/     → Header, Hero, Services, About, Team, Testimonials, FAQ, Footer, etc.
  lib/
    site-config.ts → TODO el contenido editable del sitio
public/
  logo.png         → logo completo (header/footer)
  icon-*.png       → favicon / ícono recortado del logo
```
