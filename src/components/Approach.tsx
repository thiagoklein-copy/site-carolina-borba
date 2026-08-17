import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

const steps = [
  {
    n: "01",
    title: "Contexto",
    body: "Olhamos a tua história e teus vínculos, sem reduzir a dor a defeito pessoal.",
  },
  {
    n: "02",
    title: "Nomeação",
    body: "Damos linguagem pro que só era sentido, nunca colocado em palavras.",
  },
  {
    n: "03",
    title: "Escolha",
    body: "Construímos, juntas, novos jeitos de se relacionar contigo e com o outro.",
  },
] as const;

export function Approach() {
  return (
    <>
      <section id="abordagem" className="section-space scroll-mt-24 bg-paper">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal className="max-w-3xl">
            <SectionEyebrow icon="book">Minha abordagem</SectionEyebrow>
            <h2 className="font-heading text-[1.75rem] leading-[1.2] text-brown md:text-[2.5rem]">
              Contexto, não diagnóstico
            </h2>
            <span className="accent-rule" aria-hidden />
            <p className="mt-6 font-body text-base font-light leading-relaxed text-brown/85 md:text-lg">
              Na Terapia do Esquema Contextual, a gente entende como a história e
              o contexto formaram os padrões de hoje — pra, a partir disso,
              construir uma versão mais assertiva e compassiva de ti. Não se trata
              de eliminar sintoma, e sim de compreender o sistema em que tu vive,
              com mais consciência e liberdade.
            </p>
          </Reveal>

          <ol className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.08}>
                <li>
                  <span className="font-heading text-sm tracking-[0.2em] text-green-medium">
                    {step.n}
                  </span>
                  <h3 className="mt-3 font-heading text-2xl text-brown">
                    {step.title}
                  </h3>
                  <p className="mt-3 font-body text-base font-light leading-relaxed text-brown/80">
                    {step.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Bloco de cor cheia — a única frase que resume por que a terapia dela não é "espelho frio" */}
      <section className="color-block relative bg-shadow-green py-20 md:py-28">
        <Image
          src="/brand/texture-dense.webp"
          alt=""
          fill
          className="grain-overlay object-cover"
          sizes="100vw"
        />
        <Reveal className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
          <p className="font-script -rotate-1 text-xl text-yellow-morning md:text-2xl">
            e não é só teoria
          </p>
          <h2 className="mt-4 font-heading text-[1.85rem] font-medium leading-[1.3] text-paper md:text-[2.75rem]">
            A terapia não é um espelho frio e neutro. É um encontro.
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-body text-base font-light leading-relaxed text-paper/75 md:text-lg">
            É na experiência de ser vista, ouvida e compreendida que a gente
            aprende a confiar em si, no outro e no mundo — de novo.
          </p>
        </Reveal>
      </section>
    </>
  );
}
