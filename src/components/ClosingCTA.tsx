import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function ClosingCTA() {
  return (
    <section className="relative overflow-hidden bg-shadow-green py-20 md:py-28">
      <Image
        src="/brand/texture-dense.webp"
        alt=""
        fill
        className="object-cover opacity-25 mix-blend-soft-light"
        sizes="100vw"
      />

      <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center px-5 text-center md:px-8">
        <Image
          src="/brand/logo-seal-dark.webp"
          alt=""
          width={140}
          height={140}
          className="mb-8 h-[120px] w-[120px] md:h-[140px] md:w-[140px]"
        />

        <div className="rounded-3xl bg-shadow-green/70 px-6 py-2 backdrop-blur-[1px]">
          <h2 className="font-heading text-[1.75rem] leading-tight text-paper md:text-[2.5rem]">
            Vamos conversar?
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-base leading-relaxed text-paper/85 md:text-lg">
            Se alguma coisa aqui te fez sentido, esse pode ser o momento de dar
            o primeiro passo. Sem pressão.
          </p>
        </div>

        <div className="mt-8">
          <WhatsAppButton
            label="Fale comigo no WhatsApp"
            variant="dark"
          />
        </div>
      </Reveal>
    </section>
  );
}
