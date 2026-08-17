import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { site } from "@/lib/site";

export function About() {
  return (
    <section id="sobre" className="section-space relative scroll-mt-24 overflow-hidden bg-paper">
      {/* Soft texture wash in corner — seasoning, not full background */}
      <div className="pointer-events-none absolute -right-20 top-10 hidden h-72 w-72 opacity-40 md:block">
        <Image
          src="/brand/texture-soft.webp"
          alt=""
          fill
          className="object-cover"
          sizes="288px"
        />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-start gap-14 px-5 md:grid-cols-[0.85fr_1.15fr] md:gap-20 md:px-8">
        <Reveal className="mx-auto w-full max-w-[300px] md:mx-0">
          <Image
            src="/brand/logo-seal.png"
            alt={`${site.legalName}, psicóloga`}
            width={300}
            height={300}
            className="h-auto w-full"
          />
          <p className="mt-5 text-center font-body text-caption leading-relaxed text-brown/55 md:text-left">
            Psicóloga {site.legalName}
            <br />
            {site.crp}
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <SectionEyebrow icon="flowers">Quem sou eu</SectionEyebrow>
          <h2 className="font-heading text-[1.75rem] leading-[1.2] text-brown md:text-[2.5rem]">
            Olá, eu sou a Carolina{" "}
            <span className="font-script rotate-1 inline-block text-3xl text-green-medium md:text-4xl">
              :)
            </span>
          </h2>
          <span className="accent-rule" aria-hidden />

          <div className="mt-8 space-y-5 font-body text-base font-light leading-[1.75] text-brown/90 md:text-lg">
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

          <aside className="relative mt-10 max-w-lg pl-5">
            <span
              className="absolute left-0 top-0 font-heading text-4xl leading-none text-rose-burnt"
              aria-hidden
            >
              “
            </span>
            <div className="flex gap-3 border-l-2 border-yellow-morning pl-5">
              <Image
                src="/brand/icon-flowers.png"
                alt=""
                width={24}
                height={24}
                className="mt-1 h-6 w-6 shrink-0 object-contain"
                aria-hidden
              />
              <p className="font-heading text-lg font-normal italic leading-relaxed text-brown md:text-xl">
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
