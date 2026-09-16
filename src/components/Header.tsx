"use client";

import Image from "next/image";
import { useState } from "react";
import { siteConfig, whatsappLink } from "@/lib/site-config";
import { WhatsAppIcon } from "./icons";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Quiénes somos" },
  { href: "#equipo", label: "Equipo" },
  { href: "#resenas", label: "Reseñas" },
  { href: "#faq", label: "Preguntas frecuentes" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border-subtle bg-brand-950/85 backdrop-blur-md">
      <nav className="mx-auto grid max-w-6xl grid-cols-2 items-center px-5 py-3 md:grid-cols-[1fr_auto_1fr] md:px-8">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 justify-self-start"
        >
          <Image src="/logo.png" alt="Trending ADS" width={140} height={112} className="h-11 w-auto" priority />
        </a>

        <ul className="col-start-2 row-start-1 hidden items-center gap-8 justify-self-center md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink-secondary transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="col-start-2 hidden items-center gap-2 justify-self-end rounded-full bg-gradient-to-r from-brand-300 to-brand-700 px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 md:col-start-3 md:inline-flex"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Escríbenos
        </a>

        <button
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="col-start-2 flex h-9 w-9 flex-col items-center justify-center justify-self-end gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-6 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <div className="border-t border-border-subtle bg-brand-950 px-5 pb-6 md:hidden">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-ink-secondary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-300 to-brand-700 px-5 py-3 text-sm font-semibold text-white"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Escríbenos por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}