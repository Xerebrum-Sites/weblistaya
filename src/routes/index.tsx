import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "../components/HeroSection";
import { QueHagoSection } from "../components/QueHagoSection";
import { ParaQuienSection } from "../components/ParaQuienSection";
import { QueIncluyeSection } from "../components/QueIncluyeSection";
import { ComoFuncionaSection } from "../components/ComoFuncionaSection";
import { PortfolioSection } from "../components/PortfolioSection";
import { TestimoniosSection } from "../components/TestimoniosSection";
import { GarantiaSection } from "../components/GarantiaSection";
import { FaqSection } from "../components/FaqSection";
import { CtaSection } from "../components/CtaSection";
import { ContactoSection } from "../components/ContactoSection";
import { Footer } from "../components/Footer";
import { WhatsAppButton } from "../components/WhatsAppButton";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main>
      <HeroSection />
      <QueHagoSection />
      <ParaQuienSection />
      <QueIncluyeSection />
      <ComoFuncionaSection />
      <div id="portfolio">
        <PortfolioSection />
      </div>
      <TestimoniosSection />
      <GarantiaSection />
      <FaqSection />
      <CtaSection />
      <ContactoSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
