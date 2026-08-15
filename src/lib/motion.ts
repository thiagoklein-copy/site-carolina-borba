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
