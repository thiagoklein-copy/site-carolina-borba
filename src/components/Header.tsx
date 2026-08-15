"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site, whatsappUrl } from "@/lib/site";

const navItems = [
  { href: "#sobre", label: "Sobre" },
  { href: "#abordagem", label: "Abordagem" },
  { href: "#para-quem", label: "Para quem é" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems.map((item) => item.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(`#${id}`);
        },
        { rootMargin: "-40% 0px -50% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,box-shadow,border-color] ${
        scrolled
          ? "border-clay-gray/25 bg-paper/95 shadow-[0_1px_0_rgba(107,70,48,0.06)] backdrop-blur-sm"
          : "border-transparent bg-paper"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <a href="#topo" className="flex min-w-0 items-center gap-3">
          <Image
            src="/brand/logo-seal.png"
            alt=""
            width={56}
            height={56}
            className="h-14 w-14 shrink-0 rounded-full"
            priority
          />
          <span className="min-w-0">
            <span className="block font-heading text-lg font-medium leading-tight text-brown md:text-xl">
              {site.brandName}
            </span>
            <span className="block font-body text-[0.7rem] leading-snug text-clay-gray sm:text-caption">
              Psicóloga {site.legalName} · {site.crp}
            </span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label="Principal"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`font-body text-sm transition-colors ${
                active === item.href
                  ? "font-semibold text-bordo"
                  : "text-brown/80 hover:text-bordo"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-bordo px-5 py-2.5 font-body text-sm font-semibold text-paper transition-colors hover:bg-bordo/90 sm:inline-flex"
          >
            Falar no WhatsApp
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brown/20 text-brown lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5" aria-hidden>
              <span
                className={`block h-0.5 w-5 bg-brown transition ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-brown transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-5 bg-brown transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-clay-gray/20 bg-paper px-5 py-4 lg:hidden"
        >
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-body text-base text-brown"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-bordo px-5 py-3 font-body text-sm font-semibold text-paper"
              onClick={() => setOpen(false)}
            >
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
