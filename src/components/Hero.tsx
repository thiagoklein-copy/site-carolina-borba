"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { site } from "@/lib/site";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { WordReveal } from "@/components/ui/WordReveal";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textureScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const textureY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="topo"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-paper"
    >
      {/* Textura sobe de leve com o scroll — respiro cinematográfico, nunca decorativo puro */}
      <motion.div
        className="absolute inset-0"
        style={reduce ? undefined : { scale: textureScale, y: textureY }}
      >
        <Image
          src="/brand/texture-hero-wide.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-paper/55 via-paper/70 to-paper" />
      </motion.div>

      <motion.div
        style={reduce ? undefined : { opacity: contentOpacity }}
        className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-5 pb-16 pt-32 md:px-8 md:pt-40"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-body text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-brown/60"
        >
          Psicóloga Clínica · {site.crp}
        </motion.p>

        <h1 className="mt-5 max-w-4xl font-heading text-[2.4rem] font-medium leading-[1.12] text-brown md:text-[4rem] lg:text-[4.6rem]">
          <WordReveal
            text="Colocar em palavras o que você sente, mas nunca conseguiu traduzir."
            highlight="traduzir."
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="-rotate-1 font-script text-2xl text-bordo md:text-3xl"
        >
          um espaço pra quem aprendeu a dar conta de tudo sozinha :)
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          className="mt-6 max-w-xl font-body text-base font-light leading-relaxed text-brown/85 md:text-lg"
        >
          Psicoterapia para mulheres jovens e adolescentes, com abordagem em
          Terapia do Esquema Contextual. Presencial em Novo Hamburgo/RS e
          online para todo o Brasil.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center"
        >
          <WhatsAppButton label="Falar no WhatsApp" />
          <a
            href="#espelho"
            className="font-body text-base text-brown/75 underline decoration-brown/25 underline-offset-4 transition-colors hover:text-bordo hover:decoration-bordo"
          >
            Conhecer meu trabalho ↓
          </a>
        </motion.div>
      </motion.div>

      {/* Selo como carimbo — apoio, nunca protagonista */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -6 }}
        animate={{ opacity: 1, scale: 1, rotate: -8 }}
        transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="pointer-events-none absolute bottom-6 right-4 hidden md:block lg:right-10"
      >
        <div className="relative">
          <Image
            src="/brand/logo-seal.png"
            alt=""
            width={132}
            height={132}
            aria-hidden
            className="h-[110px] w-[110px] opacity-90 lg:h-[132px] lg:w-[132px]"
          />
        </div>
      </motion.div>
    </section>
  );
}
