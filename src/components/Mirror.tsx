import { Reveal } from "@/components/ui/Reveal";

export function Mirror() {
  return (
    <section id="espelho" className="section-space scroll-mt-24 bg-paper">
      <Reveal className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <p className="font-script -rotate-1 text-xl text-shadow-green md:text-2xl">
          antes de mais nada
        </p>

        <h2 className="mt-3 font-heading text-[2rem] font-medium leading-[1.15] tracking-tight text-brown md:text-[3.1rem]">
          Talvez tu tenha aprendido cedo que se virar sozinha era o único
          jeito. Que pedir ajuda parecia fraqueza, ou que tem alguma coisa de
          errado contigo — quando, na verdade, é um padrão que se formou em
          algum vínculo, em algum momento.
        </h2>

        <p className="mx-auto mt-8 max-w-xl font-body text-base font-light leading-relaxed text-brown/85 md:text-lg">
          Tu se entrega demais ou simplesmente fecha, e cansou de tentar
          adivinhar qual dos dois vai ser dessa vez. Um padrão aprendido
          também pode ser reaprendido — com contexto, não com culpa.
        </p>
      </Reveal>
    </section>
  );
}
