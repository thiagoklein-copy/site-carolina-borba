import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

const testimonials = [
  {
    quote:
      "Cheguei achando que o problema era só eu, que eu era difícil de lidar. Com a Carolina, entendi que era um padrão, não um defeito — e isso mudou a forma como eu me trato.",
    author: "Bianca T.",
  },
  {
    quote:
      "Eu tinha muito medo de ser deixada e nem sabia nomear isso. Hoje consigo perceber o padrão se repetindo e escolher agir diferente.",
    author: "Larissa M.",
  },
  {
    quote:
      "Ela nunca me tratou como caso, sempre como pessoa. Isso fez toda diferença pra eu conseguir falar de coisas que eu nunca tinha contado pra ninguém.",
    author: "Gabriela S.",
  },
] as const;

export function Testimonials() {
  return (
    <section id="depoimentos" className="scroll-mt-24 bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Depoimentos</SectionEyebrow>
          <h2 className="font-heading text-[1.75rem] leading-tight text-brown md:text-[2.5rem]">
            O que dizem as pessoas que já passaram por aqui
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.08}>
              <blockquote className="relative h-full border-t border-clay-gray/35 pt-6">
                <span
                  className="absolute -top-3 left-0 font-heading text-4xl leading-none text-rose-burnt"
                  aria-hidden
                >
                  “
                </span>
                <p className="font-body text-base leading-relaxed text-brown/90">
                  {t.quote}
                </p>
                <footer className="mt-5 font-body text-sm font-semibold text-brown">
                  — {t.author}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center font-body text-caption leading-relaxed text-clay-gray">
          Depoimentos ilustrativos, baseados em temas recorrentes do atendimento
          — não representam casos reais ou pessoas identificáveis, em respeito
          ao sigilo profissional.
        </p>
      </div>
    </section>
  );
}
