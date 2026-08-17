"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { site } from "@/lib/site";
import { ease } from "@/lib/motion";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { CharReveal } from "@/components/ui/CharReveal";

const trustItems = [
  { label: "Presencial em Novo Hamburgo/RS", icon: "/brand/icon-sunflower.png" },
  { label: "Online para todo o Brasil", icon: "/brand/icon-book.png" },
  { label: "Terapia do Esquema Contextual", icon: "/brand/icon-notebook.png" },
] as const;

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textureScale = useTransform(scrollYProgress, [0, 1], [1.06, 0.97]);
  const textureY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="topo"
      className="relative flex h-screen min-h-[720px] flex-col overflow-hidden bg-paper"
    >
      {/* Textura rica, respirando — a marca não precisa de foto pra ter presença */}
      <motion.div
        className="absolute inset-0"
        style={reduce ? undefined : { scale: textureScale, y: textureY }}
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.3, ease }}
      >
        <Image
          src="/brand/texture-hero-wide-v2.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Papel opaco onde o texto vive, dissolvendo pra textura crua à direita */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(245,238,211,0.98) 0%, rgba(245,238,211,0.95) 40%, rgba(245,238,211,0.62) 62%, rgba(245,238,211,0.08) 88%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-paper/70 via-transparent to-transparent" />
      </motion.div>

      {/* Conteúdo */}
      <motion.div
        style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}
        className="relative mx-auto flex w-full max-w-[1320px] flex-1 flex-col justify-center px-5 pt-24 md:px-8 md:pt-28"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-body text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-brown/90"
        >
          Psicóloga Clínica · {site.crp}
        </motion.p>

        <h1 className="mt-5 max-w-4xl font-heading text-[2.75rem] font-bold leading-[0.98] tracking-tight text-brown sm:text-[3.5rem] md:text-[5rem] lg:text-[5.75rem]">
          <CharReveal
            text="Colocar em palavras o que você sente,"
            delay={0.3}
          />
          <br />
          <span className="italic font-medium text-bordo">
            <CharReveal text="mas nunca conseguiu traduzir." delay={1.05} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.1 }}
          className="-rotate-1 font-script text-2xl text-shadow-green md:text-3xl"
        >
          um espaço pra quem aprendeu a dar conta de tudo sozinha :)
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.25 }}
          className="mt-6 max-w-xl font-body text-base font-light leading-relaxed text-brown/90 md:text-lg"
        >
          Psicoterapia para mulheres jovens e adolescentes, com abordagem em
          Terapia do Esquema Contextual. Presencial em Novo Hamburgo/RS e
          online para todo o Brasil.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.4 }}
          className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center"
        >
          <WhatsAppButton label="Falar no WhatsApp" />
          <a
            href="#espelho"
            className="font-body text-base text-brown/85 underline decoration-brown/40 underline-offset-4 transition-colors hover:text-bordo hover:decoration-bordo"
          >
            Conhecer meu trabalho ↓
          </a>
        </motion.div>
      </motion.div>

      {/* Selo como carimbo sobre a textura crua — apoio, nunca protagonista */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
        animate={{ opacity: 1, scale: 1, rotate: -8 }}
        transition={{ duration: 0.7, delay: 0.5, ease }}
        className="pointer-events-none absolute right-6 top-24 hidden md:block lg:right-12 lg:top-28"
      >
        <Image
          src="/brand/logo-seal.png"
          alt=""
          width={132}
          height={132}
          aria-hidden
          className="h-[100px] w-[100px] drop-shadow-sm lg:h-[128px] lg:w-[128px]"
        />
      </motion.div>

      {/* Faixa de confiança — vidro fosco sobre a textura, mescla hero e credenciais num só gesto */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 2.6, ease }}
        className="relative z-10 mx-auto mb-6 w-full max-w-[1320px] px-5 md:mb-8 md:px-8"
      >
        <div className="flex flex-col gap-4 rounded-2xl border border-brown/10 bg-paper/70 px-6 py-4 backdrop-blur-md sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-8">
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2.5">
              <Image
                src={item.icon}
                alt=""
                width={22}
                height={22}
                className="h-[20px] w-[20px] shrink-0 object-contain"
                aria-hidden
              />
              <span className="font-body text-[0.9rem] text-brown/90">{item.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
