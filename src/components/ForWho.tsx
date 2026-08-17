import { Reveal } from "@/components/ui/Reveal";
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
    <section id="para-quem" className="section-space scroll-mt-24 bg-paper">
      <div className="mx-auto max-w-[1320px] px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <h2 className="font-heading text-[2.25rem] font-medium leading-[0.98] tracking-tight text-brown md:text-[3.75rem]">
            Talvez isso faça sentido pra ti
          </h2>
          <span className="accent-rule" aria-hidden />
        </Reveal>

        <div className="mt-14 grid gap-14 md:grid-cols-2 md:gap-16">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.08}>
              <article>
                <h3 className="font-heading text-[1.65rem] text-brown md:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-4 font-body text-base font-light leading-relaxed text-brown/90">
                  {card.body}
                </p>

                <ul className="mt-7 space-y-3">
                  {card.benefits.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-body text-[0.95rem] font-light text-brown"
                    >
                      <span
                        className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-green-medium"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                {"caption" in card && card.caption ? (
                  <p className="mt-5 font-body text-caption font-light text-brown/85">
                    {card.caption}
                  </p>
                ) : null}

                <div className="mt-8">
                  <WhatsAppButton
                    label="Agendar conversa"
                    message={card.message}
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
