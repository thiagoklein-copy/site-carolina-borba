import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function ClosingCTA() {
  return (
    <section className="relative overflow-hidden bg-shadow-green py-24 md:py-32">
      <Image
        src="/brand/texture-cover-v2.webp"
        alt=""
        fill
        className="object-cover opacity-30 mix-blend-soft-light"
        sizes="100vw"
      />

      <Reveal className="relative mx-auto flex max-w-2xl flex-col items-center px-5 text-center md:px-8">
        <Image
          src="/brand/logo-seal.png"
          alt=""
          width={160}
          height={160}
          className="mb-10 h-[130px] w-[130px] md:h-[160px] md:w-[160px]"
        />

        <div className="paper-panel px-8 py-8 md:px-12 md:py-10">
          <p className="font-script -rotate-1 text-xl text-bordo md:text-2xl">
            quando fizer sentido pra ti
          </p>
          <h2 className="mt-2 font-heading text-[2.25rem] font-medium leading-[0.98] tracking-tight text-brown md:text-[3.75rem]">
            Vamos conversar?
          </h2>
          <span className="accent-rule mx-auto" aria-hidden />
          <p className="mx-auto mt-5 max-w-md font-body text-base font-light leading-relaxed text-brown/85 md:text-lg">
            Se alguma coisa aqui te fez sentido, esse pode ser o momento de dar
            o primeiro passo. Sem pressão.
          </p>
          <div className="mt-8">
            <WhatsAppButton label="Fale comigo no WhatsApp" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
