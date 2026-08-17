export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInUpTransition = {
  duration: 0.55,
  ease: [0.25, 0.1, 0.25, 1] as const,
};

export const viewportOnce = {
  once: true,
  amount: 0.2,
} as const;

/** Stagger de palavras pro título do hero — sóbrio, só entra uma vez. */
export const wordStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

export const wordItem = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};
