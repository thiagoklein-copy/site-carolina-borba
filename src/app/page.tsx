import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Mirror } from "@/components/Mirror";
import { TrustBar } from "@/components/TrustBar";
import { About } from "@/components/About";
import { ForWho } from "@/components/ForWho";
import { Approach } from "@/components/Approach";
import { InstagramTeaser } from "@/components/InstagramTeaser";
import { PatternMirror } from "@/components/PatternMirror";
import { ContactSection } from "@/components/ContactSection";
import { FAQ } from "@/components/FAQ";
import { ClosingCTA } from "@/components/ClosingCTA";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Mirror />
        <TrustBar />
        <About />
        <ForWho />
        <Approach />
        <InstagramTeaser />
        <PatternMirror />
        <ContactSection />
        <FAQ />
        <ClosingCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
