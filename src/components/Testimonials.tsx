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
    <section id="depoimentos" className="section-space scroll-mt-24 bg-paper">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <SectionEyebrow>Depoimentos</SectionEyebrow>
          <h2 className="font-heading text-[1.75rem] leading-[1.2] text-brown md:text-[2.5rem]">
            O que dizem as pessoas que já passaram por aqui
          </h2>
          <span className="accent-rule" aria-hidden />
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.08}>
              <blockquote>
                <span
                  className="font-heading text-4xl leading-none text-rose-burnt"
                  aria-hidden
                >
                  “
                </span>
                <p className="-mt-2 font-body text-base font-light leading-relaxed text-brown/90">
                  {t.quote}
                </p>
                <footer className="mt-5 font-body text-sm text-brown">
                  — {t.author}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-3xl font-body text-caption font-light leading-relaxed text-clay-gray md:text-center">
          Depoimentos ilustrativos, baseados em temas recorrentes do atendimento
          — não representam casos reais ou pessoas identificáveis, em respeito
          ao sigilo profissional.
        </p>
      </div>
    </section>
  );
}
