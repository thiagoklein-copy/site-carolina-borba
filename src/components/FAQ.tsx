"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

const faqs = [
  {
    q: "Como funciona a primeira sessão?",
    a: "É um espaço pra gente se conhecer: eu entendo o que te trouxe até aqui, e tu sente como é conversar comigo, sem compromisso além disso.",
  },
  {
    q: "O atendimento é só pra mulheres?",
    a: "Atendo majoritariamente mulheres jovens adultas e adolescentes. Pontualmente, também atendo adolescentes do sexo masculino.",
  },
  {
    q: "O atendimento é online ou presencial?",
    a: "Os dois. Presencial em Novo Hamburgo/RS, ou online pra qualquer lugar do Brasil — o formato é uma escolha tua.",
  },
  {
    q: "Quanto tempo dura o processo terapêutico?",
    a: "Não existe prazo único. Cada história pede um ritmo diferente, e isso a gente avalia junto, com transparência, ao longo do caminho.",
  },
  {
    q: "É sigiloso mesmo?",
    a: "Sim. Tudo o que é falado em sessão é protegido por sigilo profissional, conforme o Código de Ética do CFP.",
  },
] as const;

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="duvidas" className="scroll-mt-24 bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal className="text-center">
          <SectionEyebrow>Dúvidas frequentes</SectionEyebrow>
          <h2 className="font-heading text-[1.75rem] leading-tight text-brown md:text-[2.5rem]">
            Antes de começarmos
          </h2>
        </Reveal>

        <div className="mt-10 divide-y divide-clay-gray/30 border-y border-clay-gray/30">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.04}>
                <div>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="font-heading text-lg text-brown md:text-xl">
                      {item.q}
                    </span>
                    <span
                      className={`mt-1 shrink-0 font-body text-xl leading-none text-bordo transition-transform ${isOpen ? "rotate-45" : ""}`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  {isOpen ? (
                    <p className="pb-5 font-body text-base leading-relaxed text-brown/85">
                      {item.a}
                    </p>
                  ) : null}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
