import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

/**
 * Frases recorrentes de quem chega até a Carolina — documentadas no material de marca
 * e no próprio conteúdo dela, não depoimentos de pacientes. Optamos por não usar
 * "depoimentos" com nomes fictícios: mesmo com aviso de rodapé, soa como prova social
 * fabricada. Nomear o padrão em primeira pessoa faz o mesmo trabalho emocional com honestidade.
 */
const thoughts = [
  "Tem alguma coisa de errado comigo.",
  "As pessoas me abandonam. Eu sempre vou ficar sozinha.",
  "Não sei falar sobre o que eu sinto.",
] as const;

export function PatternMirror() {
  return (
    <section id="reconhecimento" className="section-space scroll-mt-24 bg-paper">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <SectionEyebrow>Talvez tu reconheça</SectionEyebrow>
          <h2 className="font-heading text-[1.75rem] leading-[1.2] text-brown md:text-[2.5rem]">
            Frases que voltam sempre nas primeiras conversas
          </h2>
          <span className="accent-rule" aria-hidden />
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {thoughts.map((thought, i) => (
            <Reveal key={thought} delay={i * 0.08}>
              <blockquote className="h-full rounded-[1.75rem] border border-brown/10 bg-paper px-7 py-8">
                <span className="font-heading text-4xl leading-none text-rose-burnt" aria-hidden>
                  &ldquo;
                </span>
                <p className="-mt-2 font-heading text-xl font-normal leading-snug text-brown md:text-[1.4rem]">
                  {thought}
                </p>
              </blockquote>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-2xl font-body text-base font-light leading-relaxed text-brown/75 md:text-center md:text-lg">
            Nenhuma dessas frases é defeito. São padrões que se formaram em
            algum vínculo — e é isso que a gente vai entender juntas.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
