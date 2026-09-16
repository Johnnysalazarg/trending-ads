import { services } from "@/lib/site-config";
import { serviceIcons } from "./icons";

export default function Services() {
  return (
    <section id="servicios" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold md:text-4xl">
            Nuestros servicios
          </h2>
          <p className="mt-4 text-ink-secondary">
            Soluciones integrales de marketing digital para llevar tu marca al
            siguiente nivel, todas coordinadas por un mismo equipo.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon];
            return (
              <div
                key={service.title}
                className="rounded-2xl border border-border-subtle bg-brand-900/50 p-7"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-300/20 to-brand-700/20 text-brand-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-secondary">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
