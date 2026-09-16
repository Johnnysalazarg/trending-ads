import { siteConfig } from "@/lib/site-config";

export default function About() {
  return (
    <section id="nosotros" className="border-y border-border-subtle bg-brand-800 py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-2 md:px-8">
        <div className="order-2 md:order-1">
          <h2 className="font-display text-3xl font-extrabold md:text-4xl">
            No solo publicamos contenido
          </h2>
          <p className="mt-5 text-ink-secondary">
            Construimos marcas que conectan, posicionan y venden. Trending ADS
            nace con una visión clara: ayudar a negocios y marcas personales a
            destacar en un entorno digital saturado, utilizando estrategia,
            identidad y contenido con intención.
          </p>
          <p className="mt-4 text-ink-secondary">
            Combinamos producción audiovisual, diseño y gestión de redes
            sociales bajo un mismo equipo, para que no tengas que coordinar
            proveedores distintos ni perder coherencia entre lo que publicas y
            lo que tu marca realmente representa.
          </p>
        </div>

        <div className="order-1 md:order-2">
          <div className="mx-auto aspect-[4/5] w-full max-w-sm rounded-[2rem] bg-gradient-to-br from-brand-800 via-brand-700 to-brand-500" />
        </div>
      </div>
    </section>
  );
}
