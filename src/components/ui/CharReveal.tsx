"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ease } from "@/lib/motion";

type CharRevealProps = {
  text: string;
  className?: string;
  delay?: number;
  /** Trecho a destacar em cor diferente — precisa bater exatamente com um pedaço do `text`. */
  highlight?: string;
  highlightClassName?: string;
};

/**
 * Revela o título caractere a caractere — só no H1 do hero, nunca em corpo de texto.
 * Cada palavra vira um inline-block (permite quebra de linha só entre palavras);
 * os caracteres dentro dela animam individualmente, sem virar unidade de quebra.
 */
export function CharReveal({
  text,
  className,
  delay = 0,
  highlight,
  highlightClassName = "text-bordo",
}: CharRevealProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return <span className={className}>{renderStatic(text, highlight, highlightClassName)}</span>;
  }

  const highlightStart = highlight ? text.indexOf(highlight) : -1;
  const highlightEnd = highlightStart >= 0 ? highlightStart + (highlight?.length ?? 0) : -1;

  // Índice absoluto do primeiro caractere de cada palavra em `text`, sem mutação durante o render.
  const wordStartIndexes = words.reduce<number[]>((acc, _word, i) => {
    acc.push(i === 0 ? 0 : acc[i - 1] + words[i - 1].length + 1);
    return acc;
  }, []);

  return (
    <span className={className}>
      {words.map((word, wordI) => (
        <span key={wordI} className="inline-block whitespace-nowrap">
          {word.split("").map((char, i) => {
            const absoluteIndex = wordStartIndexes[wordI] + i;
            const isHighlighted = absoluteIndex >= highlightStart && absoluteIndex < highlightEnd;
            return (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: delay + absoluteIndex * 0.022, ease }}
                className={`inline-block ${isHighlighted ? highlightClassName : ""}`}
              >
                {char}
              </motion.span>
            );
          })}
          {wordI < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}

function renderStatic(text: string, highlight?: string, highlightClassName?: string) {
  if (!highlight) return text;
  const parts = text.split(highlight);
  if (parts.length === 1) return text;
  return (
    <>
      {parts[0]}
      <span className={highlightClassName}>{highlight}</span>
      {parts[1]}
    </>
  );
}
