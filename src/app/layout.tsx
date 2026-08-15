import type { Metadata } from "next";
import { Alegreya_Sans, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const alegreyaSans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-alegreya-sans",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-source-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Carolina Borba | Psicóloga em Novo Hamburgo/RS · CRP 07/46868",
  description:
    "Psicóloga Carolina da Cunha Borba (CRP 07/46868) — Terapia do Esquema Contextual para mulheres jovens e adolescentes. Atendimento presencial em Novo Hamburgo/RS e online para todo o Brasil.",
  keywords: [
    "psicóloga Novo Hamburgo",
    "Terapia do Esquema Contextual",
    "psicoterapia online",
    "Carolina Borba",
    "CRP 07/46868",
  ],
  authors: [{ name: site.legalName }],
  openGraph: {
    title: "Carolina Borba | Psicóloga em Novo Hamburgo/RS · CRP 07/46868",
    description:
      "Terapia do Esquema Contextual para mulheres jovens e adolescentes. Presencial em Novo Hamburgo/RS e online para todo o Brasil.",
    locale: "pt_BR",
    type: "website",
    siteName: site.brandName,
  },
  twitter: {
    card: "summary_large_image",
    title: "Carolina Borba | Psicóloga em Novo Hamburgo/RS",
    description:
      "Terapia do Esquema Contextual. Presencial em Novo Hamburgo/RS e online.",
  },
  icons: {
    icon: "/brand/favicon-32.png",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.legalName,
  alternateName: site.brandName,
  description:
    "Psicologia clínica com abordagem em Terapia do Esquema Contextual. Atendimento a mulheres jovens adultas e adolescentes, presencial em Novo Hamburgo/RS e online.",
  url: "https://carolinaborba.com.br",
  telephone: site.phoneDisplay,
  email: site.email,
  image: "/brand/logo-seal.webp",
  identifier: {
    "@type": "PropertyValue",
    name: "CRP",
    value: site.crp,
  },
  areaServed: {
    "@type": "Country",
    name: "Brazil",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: "BR",
  },
  sameAs: [site.instagramUrl],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${alegreyaSans.variable} ${sourceSans.variable} h-full`}
    >
      <body className="min-h-full bg-paper font-body text-brown antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
