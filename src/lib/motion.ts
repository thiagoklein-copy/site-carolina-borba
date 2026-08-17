/** Curva-assinatura do site inteiro — desaceleração confiante, não elástica. */
export const ease = [0.21, 0.47, 0.32, 0.98] as const;

export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInUpTransition = {
  duration: 0.55,
  ease,
};

export const viewportOnce = {
  once: true,
  amount: 0.2,
} as const;
