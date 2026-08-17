"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { wordItem, wordStagger } from "@/lib/motion";

type WordRevealProps = {
  text: string;
  className?: string;
  /** Palavra(s) a destacar em cor/estilo diferente — precisa bater exatamente com um trecho do `text`. */
  highlight?: string;
  highlightClassName?: string;
};

/** Revela o título palavra a palavra na entrada — usar só no H1 do hero, nunca em corpo de texto. */
export function WordReveal({
  text,
  className,
  highlight,
  highlightClassName = "text-bordo",
}: WordRevealProps) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return (
      <span className={className}>
        {highlight ? renderWithHighlight(text, highlight, highlightClassName) : text}
      </span>
    );
  }

  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="visible"
      variants={wordStagger}
    >
      {words.map((word, i) => {
        const isHighlighted = highlight?.split(" ").includes(word.replace(/[.,]/g, ""));
        return (
          <motion.span
            key={`${word}-${i}`}
            variants={wordItem}
            className={`inline-block ${isHighlighted ? highlightClassName : ""}`}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        );
      })}
    </motion.span>
  );
}

function renderWithHighlight(
  text: string,
  highlight: string,
  highlightClassName: string,
): ReactNode {
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
