import Image from "next/image";
import { site } from "@/lib/site";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden border-b border-clay-gray/15"
    >
      <div className="absolute inset-0">
        <Image
          src="/brand/texture-hero.webp"
          alt=""
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-paper/55" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:gap-12 md:px-8 md:py-24 lg:py-28">
        <div className="rounded-3xl bg-paper/85 p-6 backdrop-blur-[2px] md:p-8">
          <span className="mb-5 inline-flex rounded-full border border-brown/25 bg-paper px-4 py-1.5 font-body text-caption font-semibold text-brown">
            Psicóloga Clínica · {site.crp}
          </span>

          <h1 className="font-heading text-[2.125rem] leading-[1.25] text-brown md:text-[3.625rem] md:leading-[1.2]">
            Colocar em palavras o que você sente, mas nunca conseguiu{" "}
            <span className="text-bordo">traduzir</span>.
          </h1>

          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-brown/85 md:text-lg">
            Psicoterapia para mulheres jovens e adolescentes que aprenderam cedo
            a dar conta de tudo sozinhas. Atendimento presencial em Novo
            Hamburgo/RS e online para todo o Brasil.
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <WhatsAppButton label="Falar no WhatsApp" />
            <a
              href="#sobre"
              className="font-body text-base font-semibold text-brown underline decoration-green-medium decoration-2 underline-offset-4 transition-colors hover:text-bordo"
            >
              Conhecer meu trabalho ↓
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-md flex-col items-center">
          <div className="relative">
            <Image
              src="/brand/logo-seal.webp"
              alt="Marca Carolina Borba — duas figuras em abraço com flor"
              width={340}
              height={340}
              priority
              className="h-auto w-[260px] md:w-[320px] lg:w-[340px]"
            />
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-2 right-0 rounded-full border border-brown/20 bg-paper px-3.5 py-1.5 font-body text-caption font-semibold text-brown shadow-sm transition-colors hover:border-bordo hover:text-bordo md:right-4"
            >
              {site.instagramHandle}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
