import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { InstagramIcon, TikTokIcon } from "./icons";

const footerLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Quiénes somos" },
  { href: "#equipo", label: "Equipo" },
  { href: "#resenas", label: "Reseñas" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-7 px-5 text-center md:px-8">
        <Image src="/logo.png" alt="Trending ADS" width={120} height={96} className="h-10 w-auto" />

        <ul className="flex flex-wrap justify-center gap-6">
          {footerLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs text-ink-secondary transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Trending ADS"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle text-ink-secondary transition-colors hover:border-brand-300 hover:text-brand-300"
          >
            <InstagramIcon className="h-4 w-4" />
          </a>
          <a
            href={siteConfig.social.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok de Trending ADS"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle text-ink-secondary transition-colors hover:border-brand-300 hover:text-brand-300"
          >
            <TikTokIcon className="h-4 w-4" />
          </a>
        </div>

        <div className="h-px w-full max-w-xs bg-border-subtle" />

        <p className="text-xs text-ink-secondary/70">
          © {year} {siteConfig.name} · Agencia de Publicidad Digital
        </p>
      </div>
    </footer>
  );
}
