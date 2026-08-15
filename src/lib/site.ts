/** Central site config — update WhatsApp here when confirmed. */
export const site = {
  brandName: "Carolina Borba",
  legalName: "Carolina da Cunha Borba",
  title: "Psicóloga",
  crp: "CRP 07/46868",
  email: "carolinadacunhaborba@gmail.com",
  phoneDisplay: "+55 51 99843-4003",
  /** Digits only, country code included — for wa.me */
  phoneE164: "5551998434003",
  city: "Novo Hamburgo",
  region: "RS",
  instagramHandle: "@carolinaborba.psi",
  instagramUrl: "https://www.instagram.com/carolinaborba.psi/",
  whatsappDefaultMessage:
    "Oi, Carolina! Vi seu site e queria entender melhor como funciona o atendimento.",
} as const;

export function whatsappUrl(message: string = site.whatsappDefaultMessage): string {
  return `https://wa.me/${site.phoneE164}?text=${encodeURIComponent(message)}`;
}
