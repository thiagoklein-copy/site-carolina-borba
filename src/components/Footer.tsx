import Image from "next/image";
import { site, whatsappUrl } from "@/lib/site";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#abordagem", label: "Abordagem" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
] as const;

export function Footer() {
  return (
    <footer className="bg-shadow-green text-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.5fr_1fr_1fr] md:gap-14 md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/brand/logo-seal.png"
              alt=""
              width={64}
              height={64}
              className="h-16 w-16"
            />
            <div>
              <p className="font-heading text-xl text-paper">{site.brandName}</p>
              <p className="mt-1 font-body text-[0.7rem] tracking-wide text-paper/60">
                Psicóloga {site.legalName} · {site.crp}
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-sm font-body text-sm font-light leading-relaxed text-paper/65">
            Psicologia clínica com abordagem em Terapia do Esquema Contextual —
            tradução, contexto e amparo, em Novo Hamburgo e online.
          </p>
        </div>

        <div>
          <p className="mb-4 font-body text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-olive">
            Navegação
          </p>
          <ul className="space-y-2.5 font-body text-sm font-light text-paper/75">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-paper">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 font-body text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-olive">
            Contato
          </p>
          <ul className="space-y-2.5 font-body text-sm font-light text-paper/75">
            <li>
              Novo Hamburgo — {site.region}
            </li>
            <li>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-paper"
              >
                Instagram {site.instagramHandle}
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-paper"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <p className="mx-auto max-w-6xl px-5 py-5 font-body text-caption font-light text-paper/45 md:px-8">
          © 2026 Carolina da Cunha Borba Psicologia · {site.crp}
        </p>
      </div>
    </footer>
  );
}
