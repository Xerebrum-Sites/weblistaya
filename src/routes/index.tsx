import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSection";
import { BeneficiosSection } from "../components/BeneficiosSection";
import { ComoFuncionaSection } from "../components/ComoFuncionaSection";
import { PortfolioSection } from "../components/PortfolioSection";
import { TestimoniosSection } from "../components/TestimoniosSection";
import { GarantiaSection } from "../components/GarantiaSection";
import { FaqSection } from "../components/FaqSection";
import { CtaSection } from "../components/CtaSection";
import { ContactoSection } from "../components/ContactoSection";
import { Footer } from "../components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BeneficiosSection />
        <ComoFuncionaSection />
        <PortfolioSection />
        <TestimoniosSection />
        <GarantiaSection />
        <FaqSection />
        <CtaSection />
        <ContactoSection />
        <Footer />
      </main>
    </>
  );
}
