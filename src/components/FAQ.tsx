import { faqs } from "@/lib/site-config";

export default function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-extrabold md:text-4xl">
            Preguntas frecuentes
          </h2>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-border-subtle bg-brand-900/50 px-6 py-4 open:pb-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold marker:content-none">
                {item.question}
                <span
                  aria-hidden
                  className="shrink-0 text-lg text-brand-300 transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-ink-secondary">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
