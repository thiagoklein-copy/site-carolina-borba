import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export function InstagramTeaser() {
  return (
    <section className="bg-paper py-16 md:py-24">
      <Reveal className="mx-auto max-w-2xl px-5 text-center md:px-8">
        <h2 className="font-heading text-[1.75rem] leading-[1.2] text-brown md:text-[2.5rem]">
          Antes da primeira conversa
        </h2>
        <span className="accent-rule mx-auto" aria-hidden />
        <p className="mt-6 font-body text-base font-light leading-relaxed text-brown/85 md:text-lg">
          Boa parte de quem chega até mim já se reconheceu em algum vídeo ou
          legenda antes de marcar um horário. Se quiser sentir se faz sentido
          pra ti, dá uma olhada no {site.instagramHandle} antes de decidir.
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
