import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

const topics = [
  "estilos de apego",
  "modo criança vulnerável",
  "autocrítica e valor pessoal",
] as const;

export function InstagramTeaser() {
  return (
    <section className="bg-paper py-16 md:py-24">
      <Reveal className="mx-auto max-w-2xl px-5 text-center md:px-8">
        <p className="font-script -rotate-1 text-xl text-shadow-green md:text-2xl">
          antes de marcar
        </p>
        <h2 className="mt-2 font-heading text-[2.25rem] font-medium leading-[0.98] tracking-tight text-brown md:text-[3.75rem]">
          Dá uma olhada em como eu penso
        </h2>
        <span className="accent-rule mx-auto" aria-hidden />
        <p className="mt-6 font-body text-base font-light leading-relaxed text-brown/85 md:text-lg">
          Boa parte de quem chega até mim já se reconheceu em algum vídeo ou
          legenda antes de marcar um horário. No {site.instagramHandle} eu
          falo sobre {topics.join(", ")} — sempre traduzindo teoria pra
          linguagem de verdade.
        </p>
        <a
          href={site.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center rounded-full border border-bordo/70 px-7 py-3.5 font-body text-base font-semibold text-bordo transition-colors hover:bg-bordo hover:text-paper"
        >
          Ver o Instagram
        </a>
      </Reveal>
    </section>
  );
}
