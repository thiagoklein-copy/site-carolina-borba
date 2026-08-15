import Image from "next/image";
import { site } from "@/lib/site";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function Hero() {
  return (
    <section id="topo" className="relative min-h-[92vh] overflow-hidden">
      {/* Full-bleed brushstroke — brand cover treatment */}
      <div className="absolute inset-0">
        <Image
          src="/brand/texture-cover.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-paper/35" />
      </div>

      <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-5 py-16 md:px-8 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* Copy sits on paper panel so it never fights the texture */}
          <div className="paper-panel max-w-xl px-6 py-8 md:px-9 md:py-10">
            <p className="mb-5 font-body text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-brown/70">
              Psicóloga Clínica · {site.crp}
            </p>

            <h1 className="font-heading text-[2.125rem] font-medium leading-[1.2] text-brown md:text-[3.4rem] md:leading-[1.15]">
              Colocar em palavras o que você sente, mas nunca conseguiu{" "}
              <span className="text-bordo">traduzir</span>.
            </h1>
            <span className="accent-rule" aria-hidden />

            <p className="mt-6 font-body text-base font-light leading-relaxed text-brown/85 md:text-lg">
              Psicoterapia para mulheres jovens e adolescentes que aprenderam
              cedo a dar conta de tudo sozinhas. Atendimento presencial em Novo
              Hamburgo/RS e online para todo o Brasil.
            </p>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <WhatsAppButton label="Falar no WhatsApp" />
              <a
                href="#sobre"
                className="font-body text-base text-brown/80 transition-colors hover:text-bordo"
              >
                Conhecer meu trabalho ↓
              </a>
            </div>
          </div>

          {/* Paper seal over texture — brand cover focal point */}
          <div className="relative mx-auto flex w-full max-w-[380px] flex-col items-center lg:max-w-none">
            <div className="relative">
              <Image
                src="/brand/logo-seal.png"
                alt="Marca Carolina Borba — duas figuras em abraço com flor"
                width={400}
                height={400}
                priority
                className="h-auto w-[280px] drop-shadow-none md:w-[360px] lg:w-[400px]"
              />
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-0 rounded-full bg-paper px-4 py-1.5 font-body text-caption font-semibold text-brown transition-colors hover:text-bordo md:bottom-8 md:right-2"
              >
                {site.instagramHandle}
              </a>
            </div>

            <p className="mt-6 rounded-full bg-paper/90 px-5 py-2 text-center font-heading text-lg text-brown md:text-xl">
              {site.brandName}
            </p>
            <p className="mt-1 font-body text-[0.7rem] uppercase tracking-[0.16em] text-brown/60">
              Psicologia Clínica · {site.crp}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
