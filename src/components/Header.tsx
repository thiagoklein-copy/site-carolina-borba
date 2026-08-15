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
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    navItems.forEach((item) => {
      const el = document.getElementById(item.href.slice(1));
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(item.href);
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
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? "bg-paper/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <a href="#topo" className="flex min-w-0 items-center gap-3">
          <Image
            src="/brand/logo-seal.png"
            alt=""
            width={52}
            height={52}
            className="h-[52px] w-[52px] shrink-0 rounded-full"
            priority
          />
          <span className="min-w-0">
            <span className="block font-heading text-[1.15rem] font-medium leading-none text-brown md:text-xl">
              {site.brandName}
            </span>
            <span className="mt-1 block font-body text-[0.68rem] leading-snug tracking-wide text-brown/55">
              Psicóloga {site.legalName} · {site.crp}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`font-body text-[0.92rem] tracking-wide transition-colors ${
                active === item.href
                  ? "text-bordo"
                  : "text-brown/70 hover:text-brown"
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
            className="hidden rounded-full bg-bordo px-5 py-2.5 font-body text-sm font-semibold text-paper transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Falar no WhatsApp
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center text-brown lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="flex flex-col gap-1.5" aria-hidden>
              <span
                className={`block h-px w-5 bg-brown transition ${open ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-5 bg-brown transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-px w-5 bg-brown transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-brown/10 bg-paper px-5 py-5 lg:hidden"
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile">
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
              className="mt-2 inline-flex justify-center rounded-full bg-bordo px-5 py-3 font-body text-sm font-semibold text-paper"
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
