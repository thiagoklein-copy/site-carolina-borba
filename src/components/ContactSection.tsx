"use client";

import { FormEvent, useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { site, whatsappUrl } from "@/lib/site";

const interestOptions = [
  "Terapia individual",
  "Terapia para adolescente",
  "Ainda não sei, quero entender melhor",
] as const;

const fieldClass =
  "w-full border-0 border-b border-brown/25 bg-transparent px-0 py-3 font-body text-base font-light text-brown outline-none transition-colors placeholder:text-clay-gray focus:border-bordo";

export function ContactSection() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [interesse, setInteresse] = useState<string>(interestOptions[0]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const message = [
      `Oi, Carolina! Me chamo ${nome.trim() || "—"}.`,
      `Meu WhatsApp: ${telefone.trim() || "—"}.`,
      `Interesse: ${interesse}.`,
      "Vi seu site e queria agendar uma conversa pra entender melhor o atendimento.",
    ].join("\n");
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contato" className="section-space scroll-mt-24 bg-paper">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-[1fr_1.05fr] md:gap-20 md:px-8">
        <Reveal>
          <SectionEyebrow icon="notebook">Vamos conversar</SectionEyebrow>
          <h2 className="font-heading text-[1.75rem] leading-[1.2] text-brown md:text-[2.5rem]">
            O primeiro passo pode ser mais leve do que parece
          </h2>
          <span className="accent-rule" aria-hidden />
          <p className="mt-6 font-body text-base font-light leading-relaxed text-brown/85 md:text-lg">
            Me conta um pouco do que te trouxe até aqui. Eu respondo pelo
            WhatsApp pra alinharmos formato (presencial ou online) e tirar
            dúvidas com calma.
          </p>

          <ul className="mt-10 space-y-4 font-body text-base font-light text-brown">
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-bordo transition-opacity hover:opacity-80"
              >
                <WhatsAppIcon />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-bordo"
              >
                Instagram {site.instagramHandle}
              </a>
            </li>
            <li>Novo Hamburgo — {site.region}</li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="transition-colors hover:text-bordo"
              >
                {site.email}
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.06}>
          <form onSubmit={handleSubmit} className="space-y-8" noValidate>
            <div>
              <label
                htmlFor="nome"
                className="mb-1 block font-body text-sm text-brown/70"
              >
                Nome
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                required
                placeholder="Como posso te chamar?"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className={fieldClass}
              />
            </div>

            <div>
              <label
                htmlFor="telefone"
                className="mb-1 block font-body text-sm text-brown/70"
              >
                Telefone/WhatsApp
              </label>
              <input
                id="telefone"
                name="telefone"
                type="tel"
                required
                placeholder="(51) 99999-9999"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                className={fieldClass}
              />
            </div>

            <div>
              <label
                htmlFor="interesse"
                className="mb-1 block font-body text-sm text-brown/70"
              >
                O que faz mais sentido pra ti agora?
              </label>
              <select
                id="interesse"
                name="interesse"
                value={interesse}
                onChange={(e) => setInteresse(e.target.value)}
                className={`${fieldClass} cursor-pointer`}
              >
                {interestOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="rounded-full bg-bordo px-7 py-3.5 font-body text-base font-semibold text-paper shadow-[0_10px_24px_-12px_rgba(107,70,48,0.55)] transition-all hover:-translate-y-0.5 hover:bg-brown focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bordo active:translate-y-0"
            >
              Quero agendar minha conversa
            </button>

            <p className="font-body text-caption font-light text-clay-gray">
              Ao enviar, você será redirecionada ao WhatsApp com sua mensagem
              pronta.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
