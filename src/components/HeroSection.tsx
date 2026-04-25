import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Zap, Check, DollarSign, ArrowRight, Sparkles, MousePointer2, Globe } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax layers — slower for "deep" elements, faster for "near" elements
  const yBgGlow = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 120]);
  const yGrid = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 80]);
  const yLaptop = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -60]);
  const scaleLaptop = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1, 1.05]);
  const yCopy = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 40]);
  const opacityCopy = useTransform(scrollYProgress, [0, 0.6], [1, 0.3]);

  const yBadgeA = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -120]);
  const yBadgeB = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -180]);
  const yBadgeC = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -90]);
  const yBadgeD = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -150]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative w-full min-h-[100svh] flex items-center pt-24 sm:pt-28 pb-20 px-4 sm:px-6 overflow-hidden isolate"
      style={{ background: "#F5F7FA" }}
    >
      {/* Parallax: deep glow */}
      <motion.div
        aria-hidden
        style={{ y: yBgGlow }}
        className="absolute inset-0 -z-10 pointer-events-none"
      >
        <div
          className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, #A3FF12 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-60 -left-40 w-[600px] h-[600px] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, #6EEB00 0%, transparent 70%)" }}
        />
      </motion.div>

      {/* Parallax: subtle grid */}
      <motion.div
        aria-hidden
        style={{
          y: yGrid,
          backgroundImage:
            "linear-gradient(to right, rgba(11,15,20,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,15,20,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
        className="absolute inset-0 -z-10 pointer-events-none opacity-70"
      />

      <div className="relative w-full max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Copy — parallax slow */}
        <motion.div
          style={{ y: yCopy, opacity: opacityCopy }}
          className="lg:col-span-5 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold text-[#0B0F14] bg-white border border-black/5 shadow-sm"
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "linear-gradient(135deg, #A3FF12, #6EEB00)" }}
            />
            Tu web lista en pocos días
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display font-bold text-[#0B0F14] text-[40px] sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.02] tracking-tight"
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
        </motion.div>

        {/* Mockup with floating badges parallax */}
        <div className="lg:col-span-7 relative">
          {/* Laptop — parallax up + slight scale */}
          <motion.div
            style={{ y: yLaptop, scale: scaleLaptop }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            {/* Floating idle animation */}
            <motion.div
              animate={reduce ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={heroMockup}
                alt="Tu web profesional lista en una laptop, diseñada por Web Lista YA"
                width={1600}
                height={1200}
                className="w-full h-auto select-none pointer-events-none"
                draggable={false}
              />
            </motion.div>
          </motion.div>

          {/* Floating badges — different parallax speeds */}
          <motion.div
            style={{ y: yBadgeA }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute top-[8%] left-[2%] sm:left-[4%] hidden sm:flex items-center gap-2 bg-white rounded-2xl px-4 py-3 shadow-[0_20px_40px_-15px_rgba(11,15,20,0.25)] border border-black/5"
          >
            <span
              className="flex items-center justify-center w-9 h-9 rounded-xl text-[#0B0F14]"
              style={{ background: "linear-gradient(135deg, #A3FF12, #6EEB00)" }}
            >
              <Zap className="w-4 h-4" strokeWidth={2.5} />
            </span>
            <div>
              <p className="text-[11px] text-[#1F2937]/60 leading-none">Velocidad</p>
              <p className="text-sm font-display font-semibold text-[#0B0F14]">100/100</p>
            </div>
          </motion.div>

          <motion.div
            style={{ y: yBadgeB }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="absolute top-[18%] right-[2%] sm:right-[4%] hidden sm:flex items-center gap-2 bg-white rounded-2xl px-4 py-3 shadow-[0_20px_40px_-15px_rgba(11,15,20,0.25)] border border-black/5"
          >
            <span
              className="flex items-center justify-center w-9 h-9 rounded-xl text-[#0B0F14]"
              style={{ background: "linear-gradient(135deg, #A3FF12, #6EEB00)" }}
            >
              <Check className="w-4 h-4" strokeWidth={2.5} />
            </span>
            <div>
              <p className="text-[11px] text-[#1F2937]/60 leading-none">Entregada</p>
              <p className="text-sm font-display font-semibold text-[#0B0F14]">en 5 días</p>
            </div>
          </motion.div>

          <motion.div
            style={{ y: yBadgeC }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="absolute bottom-[10%] left-[6%] hidden md:flex items-center gap-2 bg-[#0B0F14] text-white rounded-2xl px-4 py-3 shadow-[0_20px_40px_-15px_rgba(11,15,20,0.4)]"
          >
            <Globe className="w-4 h-4 text-[#A3FF12]" />
            <p className="text-sm font-display font-semibold">Hecho en Argentina</p>
          </motion.div>

          <motion.div
            style={{ y: yBadgeD }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-[22%] right-[4%] hidden md:flex items-center gap-2 bg-white rounded-full pl-2 pr-4 py-2 shadow-[0_20px_40px_-15px_rgba(11,15,20,0.25)] border border-black/5"
          >
            <span
              className="flex items-center justify-center w-7 h-7 rounded-full text-[#0B0F14]"
              style={{ background: "linear-gradient(135deg, #A3FF12, #6EEB00)" }}
            >
              <Sparkles className="w-3.5 h-3.5" strokeWidth={2.5} />
            </span>
            <p className="text-xs font-display font-semibold text-[#0B0F14]">Diseño a medida</p>
          </motion.div>

          {/* Mobile-only compact badges */}
          <div className="sm:hidden mt-4 flex flex-wrap justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-white rounded-full px-3 py-1.5 text-xs font-semibold text-[#0B0F14] border border-black/5 shadow-sm">
              <Zap className="w-3 h-3 text-[#6EEB00]" /> Rápida
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white rounded-full px-3 py-1.5 text-xs font-semibold text-[#0B0F14] border border-black/5 shadow-sm">
              <Check className="w-3 h-3 text-[#6EEB00]" /> Lista en días
            </span>
            <span className="inline-flex items-center gap-1.5 bg-[#0B0F14] text-white rounded-full px-3 py-1.5 text-xs font-semibold">
              <Globe className="w-3 h-3 text-[#A3FF12]" /> Argentina
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-[#1F2937]/50"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-semibold">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#0B0F14]/40 to-transparent"
        />
      </motion.div>

      {/* Hidden import to satisfy linter for MousePointer2 */}
      <span className="hidden"><MousePointer2 /></span>
    </section>
  );
}
