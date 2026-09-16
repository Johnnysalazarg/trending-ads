import { whatsappLink } from "@/lib/site-config";
import { WhatsAppIcon } from "./icons";

export default function FinalCTA() {
  return (
    <section id="contacto" className="border-t border-border-subtle bg-brand-800 py-16 text-center md:py-20">
      <div className="mx-auto max-w-xl px-5 md:px-8">
        <h2 className="font-display text-3xl font-extrabold md:text-4xl">
          ¿Lista tu marca para ser{" "}
          <span className="bg-gradient-to-r from-brand-300 to-brand-500 bg-clip-text text-transparent">
            tendencia
          </span>
          ?
        </h2>
        <p className="mt-4 text-ink-secondary">
          Escríbenos por WhatsApp y recibe una cotización personalizada sin
          compromiso. Respondemos en menos de 24 horas.
        </p>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-[#25d366] px-8 py-4 text-base font-semibold text-[#0b1f16] transition-transform hover:-translate-y-0.5"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Escríbenos por WhatsApp
        </a>
      </div>
    </section>
  );
}
