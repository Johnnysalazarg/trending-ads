import { testimonials } from "@/lib/site-config";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function Testimonials() {
  return (
    <section id="resenas" className="border-y border-border-subtle bg-brand-800 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold md:text-4xl">
            Clientes satisfechos
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name + t.role}
              className="flex flex-col justify-between rounded-2xl border border-border-subtle bg-brand-950/60 p-7"
            >
              <p className="text-sm leading-relaxed text-ink-secondary">
                “{t.quote}”
              </p>
              <footer className="mt-6 flex items-center gap-3 pt-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-900 text-xs font-bold text-white">
                  {initials(t.name)}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-ink-secondary">{t.role}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}