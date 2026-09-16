import { whatsappLink } from "@/lib/site-config";
import { WhatsAppIcon } from "./icons";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-12 md:pt-40 md:pb-16">
      {/* Decorative gradient shapes echoing the logo's diamond motif */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 right-[-10%] h-[420px] w-[420px] rotate-12 rounded-[3rem] bg-gradient-to-br from-brand-300/30 via-brand-700/20 to-transparent blur-3xl" />
        <div className="absolute bottom-[-15%] left-[-8%] h-[360px] w-[360px] -rotate-12 rounded-[3rem] bg-gradient-to-tr from-brand-700/25 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 md:grid-cols-[1.1fr_0.9fr] md:px-8">
        <div>
          <h1 className="font-display text-[2.5rem] font-extrabold leading-[1.08] tracking-tight md:text-6xl">
            Hacemos que tu marca sea{" "}
            <span className="bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-transparent">
              tendencia
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-ink-secondary">
            Producción audiovisual, gestión de redes sociales y diseño gráfico
            con una sola meta: que tu negocio se vea profesional y consiga más
            clientes. Trabajamos presencial en Isla de Margarita y de forma
            remota con marcas en cualquier país.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-brand-300 to-brand-700 px-7 py-4 text-base font-semibold text-white shadow-[0_10px_30px_-8px_rgba(194,100,155,0.6)] transition-transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Solicitar cotización por WhatsApp
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full border border-border-subtle px-7 py-4 text-base font-semibold text-foreground transition-colors hover:border-brand-300"
            >
              Ver servicios
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-sm">
          <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-brand-800 via-brand-700 to-brand-300 opacity-90" />
          <div className="absolute inset-0 flex items-center justify-center rounded-[2.5rem] bg-brand-950/20 backdrop-blur-[1px]">
            <svg
              viewBox="0 0 200 200"
              className="h-40 w-40 drop-shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
              aria-hidden
            >
              <path
                d="M100 10 L135 75 L190 95 L135 115 L100 190 L65 115 L10 95 L65 75 Z"
                fill="white"
                fillOpacity="0.92"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
