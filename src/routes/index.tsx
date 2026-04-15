import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "../components/HeroSection";
import { QueHagoSection } from "../components/QueHagoSection";
import { ParaQuienSection } from "../components/ParaQuienSection";
import { QueIncluyeSection } from "../components/QueIncluyeSection";
import { ComoFuncionaSection } from "../components/ComoFuncionaSection";
import { CtaSection } from "../components/CtaSection";
import { ContactoSection } from "../components/ContactoSection";
import { Footer } from "../components/Footer";

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
      <CtaSection />
      <ContactoSection />
      <Footer />
    </main>
  );
}
