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
    <section id="abordagem" className="scroll-mt-24 bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <SectionEyebrow icon="book">Minha abordagem</SectionEyebrow>
          <h2 className="font-heading text-[1.75rem] leading-tight text-brown md:text-[2.5rem]">
            Contexto, não diagnóstico
          </h2>
          <p className="mt-5 font-body text-base leading-relaxed text-brown/85 md:text-lg">
            Na Terapia do Esquema Contextual, a gente entende como a história e
            o contexto formaram os padrões de hoje — pra, a partir disso,
            construir uma versão mais assertiva e compassiva de ti. Não se trata
            de eliminar sintoma, e sim de compreender o sistema em que tu vive,
            com mais consciência e liberdade.
          </p>
        </Reveal>

        <ol className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08} className="relative">
              <li className="h-full border-l-2 border-olive pl-5 md:border-l-0 md:border-t-2 md:pl-0 md:pt-5">
                <span className="font-heading text-sm font-bold tracking-widest text-green-medium">
                  {step.n}
                </span>
                <h3 className="mt-2 font-heading text-2xl text-brown">
                  {step.title}
                </h3>
                <p className="mt-3 font-body text-base leading-relaxed text-brown/85">
                  {step.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
