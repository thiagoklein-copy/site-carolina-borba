import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="sobre" className="scroll-mt-24 bg-paper py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 md:grid-cols-[1fr_1.15fr] md:gap-16 md:px-8">
        <Reveal className="relative mx-auto w-full max-w-sm md:mx-0">
          <div className="relative aspect-square overflow-hidden rounded-full bg-olive/15">
            <Image
              src="/brand/logo-seal.webp"
              alt={`${site.legalName}, psicóloga`}
              fill
              className="object-cover p-6"
              sizes="(max-width: 768px) 80vw, 360px"
            />
          </div>
          <p className="mt-4 text-center font-body text-caption text-clay-gray md:text-left">
            Psicóloga {site.legalName} · {site.crp}
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <SectionEyebrow icon="flowers">Quem sou eu</SectionEyebrow>
          <h2 className="font-heading text-[1.75rem] leading-tight text-brown md:text-[2.5rem]">
            Olá, eu sou a Carolina
          </h2>

          <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-brown/90 md:text-lg">
            <p>
              Sou Carolina Borba, psicóloga com abordagem em Terapia do Esquema
              Contextual, CRP 07/46868, atendendo em Novo Hamburgo e online.
            </p>
            <p>
              Acredito que ser humano é, acima de tudo, sentir. Viver é,
              inevitavelmente, sentir vulnerabilidades, afetos e emoções que
              muitas vezes escondemos, porque fomos culturalmente ensinados a
              fazê-lo. Acredito que todos nós carregamos uma criança interior
              que precisa ser acolhida, ouvida e protegida, e vejo nas relações
              um poder genuinamente reparador nesse sentido.
            </p>
            <p>
              Escolhi a Terapia do Esquema Contextual pelo olhar integrativo:
              ela une teoria do apego, elementos da psicanálise, da gestalt e
              das terapias contextuais pra entender como padrões emocionais se
              formam na infância e continuam moldando a forma como nos
              relacionamos hoje, com nós mesmas e com os outros.
            </p>
            <p>
              No consultório, meu trabalho não é eliminar sintoma como fim em
              si. É te ajudar a entender os próprios padrões, no teu contexto,
              sem reduzir tua dor a diagnóstico — pra que possas escolher, com
              mais liberdade, como quer se relacionar consigo e com o mundo.
            </p>
          </div>

          <aside className="relative mt-8 max-w-lg rounded-2xl border border-dashed border-olive/50 bg-yellow-morning/20 px-5 py-5 md:px-6">
            <span
              className="absolute -top-2 left-5 font-heading text-3xl leading-none text-rose-burnt"
              aria-hidden
            >
              “
            </span>
            <div className="flex gap-3">
              <Image
                src="/brand/icon-flowers.png"
                alt=""
                width={28}
                height={28}
                className="mt-1 h-7 w-7 shrink-0 object-contain"
                aria-hidden
              />
              <p className="font-heading text-lg italic leading-relaxed text-brown md:text-xl">
                Quando muito precisei, uma psicóloga me lembrou que eu não
                estava sozinha. É isso que desejo proporcionar às pessoas que
                atendo.
              </p>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
