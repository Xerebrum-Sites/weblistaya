import { motion } from "framer-motion";
import { Zap, Check, DollarSign, ArrowRight } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 overflow-hidden"
      style={{ background: "#F5F7FA" }}
    >
      {/* Soft glow */}
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #A3FF12 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Copy */}
        <div className="lg:col-span-6 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold text-[#0B0F14] bg-white border border-black/5 shadow-sm"
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: "linear-gradient(135deg, #A3FF12, #6EEB00)" }}
            />
            Tu web lista en pocos días
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display font-bold text-[#0B0F14] text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-[1.05] tracking-tight"
          >
            Tu web profesional,
            <br />
            <span className="relative inline-block">
              lista
              <span
                className="absolute -bottom-1 left-0 right-0 h-3 -z-0 rounded-full opacity-80"
                style={{ background: "linear-gradient(135deg, #A3FF12 0%, #6EEB00 100%)" }}
              />
              <span className="relative">.</span>
            </span>{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, #6EEB00 0%, #A3FF12 100%)" }}
            >
              YA.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-lg sm:text-xl text-[#1F2937]/70 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Diseñamos tu sitio rápido, simple y económico. Sin vueltas, nos encargamos de todo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
          >
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 h-14 text-base font-semibold text-[#0B0F14] shadow-[0_12px_30px_-8px_rgba(110,235,0,0.55)] hover:shadow-[0_16px_36px_-8px_rgba(110,235,0,0.7)] hover:-translate-y-0.5 transition-all"
              style={{ background: "linear-gradient(135deg, #A3FF12 0%, #6EEB00 100%)" }}
            >
              Crear mi web ahora <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/5491100000000?text=Hola!%20Quiero%20info%20sobre%20mi%20web."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full px-7 h-14 text-base font-semibold text-[#0B0F14] bg-white border border-black/10 hover:bg-[#0B0F14] hover:text-white hover:border-[#0B0F14] transition-all"
            >
              Hablar por WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-sm text-[#1F2937]/70"
          >
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#6EEB00]" /> Lista en 5 días
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#6EEB00]" /> +30 webs entregadas
            </span>
            <span className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-[#6EEB00]" /> Pago en cuotas
            </span>
          </motion.div>
        </div>

        {/* Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-6 relative"
        >
          <div className="relative">
            <img
              src={heroMockup}
              alt="Mockup de página web profesional lista en una laptop"
              width={1600}
              height={1200}
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
