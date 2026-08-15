import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const cards = [
  {
    title: "Mulheres jovens adultas",
    body: "Pra quem aprendeu cedo a se virar sozinha, e hoje sente o peso de nunca poder soltar as rédeas. Pra quem se entrega demais ou simplesmente fecha — e cansou de tentar adivinhar qual dos dois vai ser dessa vez.",
    benefits: [
      "Autocrítica intensa",
      "Medo de rejeição ou abandono",
      "Dificuldade de pedir ajuda",
      "Padrões que se repetem nos relacionamentos",
    ],
    message:
      "Oi, Carolina! Vi seu site e me identifiquei com o atendimento para mulheres jovens adultas. Queria entender melhor como funciona.",
  },
  {
    title: "Adolescentes",
    body: "Pra quem tá vivendo a pressão da escola, da família e da própria identidade ao mesmo tempo — com um espaço de escuta que fala a língua dela, sem infantilizar e sem julgar.",
    benefits: [
      "Acolhimento sem julgamento",
      "Linguagem próxima da realidade dela",
      "Espaço pra nomear o que ainda não tem nome",
      "Presencial ou online, com a família por perto quando fizer sentido",
    ],
    caption:
      "Atendimento também aberto, pontualmente, a adolescentes do sexo masculino.",
    message:
      "Oi, Carolina! Vi seu site e queria saber mais sobre o atendimento para adolescentes.",
  },
] as const;

export function ForWho() {
  return (
    <section id="para-quem" className="scroll-mt-24 bg-paper py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionEyebrow icon="sunflower" tone="green">
            Pra quem é esse espaço
          </SectionEyebrow>
          <h2 className="font-heading text-[1.75rem] leading-tight text-brown md:text-[2.5rem]">
            Talvez isso faça sentido pra ti
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.08}>
              <article className="flex h-full flex-col border-t-2 border-green-medium bg-paper pt-6">
                <h3 className="font-heading text-2xl text-brown md:text-[1.75rem]">
                  {card.title}
                </h3>
                <p className="mt-4 flex-1 font-body text-base leading-relaxed text-brown/85">
                  {card.body}
                </p>

                <ul className="mt-6 space-y-2.5">
                  {card.benefits.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 font-body text-sm text-brown md:text-base"
                    >
                      <span
                        className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-green-medium"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                {"caption" in card && card.caption ? (
                  <p className="mt-4 font-body text-caption text-clay-gray">
                    {card.caption}
                  </p>
                ) : null}

                <div className="mt-7">
                  <WhatsAppButton
                    label="Agendar conversa"
                    message={card.message}
                    className="w-full sm:w-auto"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
