import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import {
  Zap,
  Check,
  ArrowRight,
  Sparkles,
  Globe,
  Rocket,
  Heart,
  ShoppingBag,
  Star,
  MessageCircle,
  TrendingUp,
  Smile,
} from "lucide-react";
import heroLaptop from "@/assets/hero-laptop.png";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBgGlow = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 140]);
  const yLines = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 60]);
  const yLaptop = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -70]);
  const scaleLaptop = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1, 1.04]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.7], [1, 0.4]);

  const yBlockTL = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -120]);
  const yBlockTR = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -180]);
  const yBlockBL = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -90]);
  const yBlockBR = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -150]);

  const speedLines = [
    { top: "10%", w: "22%", delay: 0, dur: 3.2, op: 0.35 },
    { top: "20%", w: "14%", delay: 1.1, dur: 2.6, op: 0.25 },
    { top: "34%", w: "30%", delay: 0.4, dur: 4, op: 0.3 },
    { top: "60%", w: "18%", delay: 1.8, dur: 3, op: 0.2 },
    { top: "76%", w: "26%", delay: 0.7, dur: 3.6, op: 0.28 },
    { top: "90%", w: "12%", delay: 2.2, dur: 2.4, op: 0.22 },
  ];

  // Puntos rápidos atravesando la pantalla
  const dots = [
    { top: "16%", size: 4, dur: 5, delay: 0, color: "#A3FF12" },
    { top: "28%", size: 3, dur: 4, delay: 1.5, color: "#6EEB00" },
    { top: "46%", size: 5, dur: 6, delay: 0.6, color: "#A3FF12" },
    { top: "56%", size: 3, dur: 3.5, delay: 2.1, color: "#6EEB00" },
    { top: "68%", size: 4, dur: 5.5, delay: 1, color: "#A3FF12" },
    { top: "82%", size: 3, dur: 4.2, delay: 0.3, color: "#6EEB00" },
    { top: "24%", size: 3, dur: 7, delay: 2.5, color: "#A3FF12" },
    { top: "52%", size: 4, dur: 4.8, delay: 3, color: "#6EEB00" },
    { top: "74%", size: 3, dur: 5.2, delay: 0.9, color: "#A3FF12" },
  ];

  // Puntos que frenan y se mueven con stagger (diferentes velocidades)
  const pulseDots = [
    { top: "14%", left: "8%", size: 6, dur: 3, delay: 0 },
    { top: "32%", left: "92%", size: 5, dur: 4, delay: 1 },
    { top: "50%", left: "5%", size: 7, dur: 3.5, delay: 0.5 },
    { top: "66%", left: "94%", size: 5, dur: 4.5, delay: 2 },
    { top: "82%", left: "10%", size: 6, dur: 3.2, delay: 1.5 },
  ];

  // Trios de puntos siguiéndose (efecto comet trail)
  const trails = [
    { top: "26%", delay: 0, dur: 6 },
    { top: "54%", delay: 2, dur: 7 },
    { top: "80%", delay: 4, dur: 5.5 },
  ];

  // Iconos flotantes alrededor del laptop — posiciones reorganizadas para no solaparse con bloques
  const floatingIcons = [
    { Icon: Heart, top: "30%", left: "-2%", dur: 5, delay: 0, rotate: -10, color: "#FF6B9D" },
    { Icon: ShoppingBag, top: "44%", right: "-2%", dur: 5.5, delay: 0.6, rotate: 8, color: "#6EEB00" },
    { Icon: Star, top: "62%", left: "-3%", dur: 4.8, delay: 0.3, rotate: -6, color: "#FFC107" },
    { Icon: Smile, top: "72%", right: "0%", dur: 6, delay: 1, rotate: 12, color: "#A3FF12" },
    { Icon: Sparkles, top: "82%", left: "20%", dur: 4.5, delay: 0.8, rotate: 6, color: "#6EEB00" },
    { Icon: Rocket, top: "85%", right: "20%", dur: 5.2, delay: 1.4, rotate: -8, color: "#0B0F14" },
  ];

  return (
    <section
      id="top"
      ref={ref}
      className="relative w-full min-h-[100svh] flex items-center justify-center pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 overflow-hidden isolate"
      style={{
        background:
          "radial-gradient(ellipse at top, #FFFFFF 0%, #F5F7FA 45%, #EAF0F5 100%)",
      }}
    >
      {/* DEEP LAYER — soft brand gradients */}
      <motion.div
        aria-hidden
        style={{ y: yBgGlow }}
        className="absolute inset-0 -z-10 pointer-events-none"
      >
        <div
          className="absolute -top-40 -right-40 w-[60vw] max-w-[800px] aspect-square rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, #A3FF12 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-60 -left-40 w-[55vw] max-w-[700px] aspect-square rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #6EEB00 0%, transparent 70%)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[900px] aspect-square rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #A3FF12 0%, transparent 60%)" }}
        />
      </motion.div>

      {/* MID LAYER — speed lines + dots */}
      <motion.div
        aria-hidden
        style={{ y: yLines }}
        className="absolute inset-0 -z-10 pointer-events-none overflow-hidden"
      >
        {speedLines.map((l, i) => (
          <motion.span
            key={`line-${i}`}
            initial={{ x: "-30vw", opacity: 0 }}
            animate={
              reduce
                ? { opacity: l.op }
                : { x: ["-30vw", "130vw"], opacity: [0, l.op, l.op, 0] }
            }
            transition={{
              duration: l.dur,
              repeat: Infinity,
              ease: "linear",
              delay: l.delay,
            }}
            className="absolute h-px"
            style={{
              top: l.top,
              width: l.w,
              background:
                "linear-gradient(90deg, transparent, #6EEB00 50%, transparent)",
            }}
          />
        ))}

        {dots.map((d, i) => (
          <motion.span
            key={`dot-${i}`}
            initial={{ x: "-10vw", opacity: 0 }}
            animate={
              reduce
                ? { opacity: 0.5 }
                : { x: ["-10vw", "110vw"], opacity: [0, 0.8, 0.8, 0] }
            }
            transition={{
              duration: d.dur,
              repeat: Infinity,
              ease: "linear",
              delay: d.delay,
            }}
            className="absolute rounded-full"
            style={{
              top: d.top,
              width: d.size,
              height: d.size,
              background: d.color,
              boxShadow: `0 0 12px ${d.color}`,
            }}
          />
        ))}

        {/* Puntos que frenan: se mueven, paran y siguen */}
        {pulseDots.map((p, i) => (
          <motion.span
            key={`pulse-${i}`}
            aria-hidden
            animate={
              reduce
                ? { opacity: 0.5 }
                : {
                    scale: [0.6, 1.4, 1.4, 0.6],
                    opacity: [0, 0.9, 0.9, 0],
                    y: [0, -18, -18, 0],
                  }
            }
            transition={{
              duration: p.dur,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
              times: [0, 0.4, 0.6, 1],
            }}
            className="absolute rounded-full"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              background: "#A3FF12",
              boxShadow: "0 0 16px #A3FF12",
            }}
          />
        ))}

        {/* Comet trails: 3 puntos siguiéndose */}
        {trails.map((t, i) => (
          <div key={`trail-${i}`} aria-hidden className="absolute inset-x-0" style={{ top: t.top }}>
            {[0, 0.15, 0.3].map((offset, j) => (
              <motion.span
                key={`trail-${i}-${j}`}
                initial={{ x: "-10vw", opacity: 0 }}
                animate={
                  reduce
                    ? { opacity: 0.4 }
                    : { x: ["-10vw", "110vw"], opacity: [0, 0.7 - j * 0.2, 0.7 - j * 0.2, 0] }
                }
                transition={{
                  duration: t.dur,
                  repeat: Infinity,
                  ease: "linear",
                  delay: t.delay + offset,
                }}
                className="absolute rounded-full"
                style={{
                  width: 4 - j,
                  height: 4 - j,
                  background: "#6EEB00",
                  boxShadow: `0 0 ${10 - j * 2}px #6EEB00`,
                }}
              />
            ))}
          </div>
        ))}

        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(rgba(11,15,20,0.10) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage:
              "radial-gradient(ellipse at center, black 20%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 20%, transparent 75%)",
          }}
        />
      </motion.div>

      {/* CONTENT — fully centered */}
      <motion.div
        style={{ opacity: opacityHero }}
        className="relative w-full max-w-5xl mx-auto flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold text-[#0B0F14] bg-white/90 backdrop-blur border border-black/5 shadow-sm"
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
          className="mt-6 font-display font-bold text-[#0B0F14] text-[34px] sm:text-5xl md:text-6xl lg:text-[72px] leading-[1.02] tracking-tight max-w-4xl"
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
          className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-[#1F2937]/70 max-w-2xl leading-relaxed px-2"
        >
          Diseñamos tu sitio rápido, simple y económico. Sin vueltas, nos encargamos de todo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-7 sm:mt-9 flex flex-col items-center gap-3 w-full max-w-2xl"
        >
          <a
            href="https://wa.me/5491100000000?text=Hola!%20Quiero%20info%20sobre%20mi%20web."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full px-7 sm:px-9 h-13 py-3.5 text-sm sm:text-base font-semibold text-[#0B0F14] shadow-[0_12px_30px_-8px_rgba(110,235,0,0.55)] hover:shadow-[0_16px_36px_-8px_rgba(110,235,0,0.7)] hover:-translate-y-0.5 transition-all"
            style={{ background: "linear-gradient(135deg, #A3FF12 0%, #6EEB00 100%)" }}
          >
            Escribinos por WhatsApp <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contacto"
            className="text-xs sm:text-sm font-medium text-[#1F2937]/60 hover:text-[#0B0F14] underline-offset-4 hover:underline transition-colors"
          >
            o dejanos tu mensaje en el formulario
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-7 flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-6 gap-y-2 text-xs sm:text-sm text-[#1F2937]/70"
        >
          <span className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#6EEB00]" /> Lista en 7 días
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#6EEB00]" /> +30 webs entregadas
          </span>
          <span className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-[#6EEB00]" /> Hecho en Argentina
          </span>
        </motion.div>

        {/* LAPTOP STAGE */}
        <div className="relative w-full mt-10 sm:mt-14 max-w-4xl">
          {/* Floating decorative icons around the laptop */}
          {floatingIcons.map(({ Icon, top, left, right, dur, delay, rotate }, i) => (
            <motion.div
              key={`float-${i}`}
              aria-hidden
              initial={{ opacity: 0, scale: 0.6 }}
              animate={
                reduce
                  ? { opacity: 0.8, scale: 1 }
                  : { opacity: 1, scale: 1, y: [0, -14, 0], rotate: [rotate, rotate + 6, rotate] }
              }
              transition={{
                opacity: { duration: 0.6, delay: 0.8 + i * 0.1 },
                scale: { duration: 0.6, delay: 0.8 + i * 0.1 },
                y: { duration: dur, repeat: Infinity, ease: "easeInOut", delay },
                rotate: { duration: dur, repeat: Infinity, ease: "easeInOut", delay },
              }}
              className="absolute z-10 hidden sm:flex items-center justify-center w-11 h-11 rounded-2xl bg-white border border-black/5 shadow-[0_15px_30px_-12px_rgba(11,15,20,0.25)]"
              style={{ top, left, right }}
            >
              <Icon className="w-5 h-5 text-[#0B0F14]" strokeWidth={2.2} />
            </motion.div>
          ))}

          <div
            aria-hidden
            className="absolute inset-x-[10%] bottom-[10%] h-24 blur-3xl opacity-60 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse, rgba(163,255,18,0.55) 0%, transparent 70%)",
            }}
          />

          {/* TOP LEFT */}
          <motion.div
            style={{ y: yBlockTL }}
            initial={{ opacity: 0, x: -30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute top-[2%] left-[-2%] sm:left-[2%] z-20 hidden sm:flex items-center gap-2 bg-white rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 shadow-[0_20px_40px_-15px_rgba(11,15,20,0.25)] border border-black/5"
          >
            <span
              className="flex items-center justify-center w-9 h-9 rounded-xl text-[#0B0F14]"
              style={{ background: "linear-gradient(135deg, #A3FF12, #6EEB00)" }}
            >
              <Zap className="w-4 h-4" strokeWidth={2.5} />
            </span>
            <div className="text-left">
              <p className="text-[11px] text-[#1F2937]/60 leading-none">Velocidad</p>
              <p className="text-sm font-display font-semibold text-[#0B0F14]">100/100</p>
            </div>
          </motion.div>

          {/* TOP RIGHT */}
          <motion.div
            style={{ y: yBlockTR }}
            initial={{ opacity: 0, x: 30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="absolute top-[8%] right-[-2%] sm:right-[2%] z-20 hidden sm:flex items-center gap-2 bg-white rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 shadow-[0_20px_40px_-15px_rgba(11,15,20,0.25)] border border-black/5"
          >
            <span
              className="flex items-center justify-center w-9 h-9 rounded-xl text-[#0B0F14]"
              style={{ background: "linear-gradient(135deg, #A3FF12, #6EEB00)" }}
            >
              <Check className="w-4 h-4" strokeWidth={2.5} />
            </span>
            <div className="text-left">
              <p className="text-[11px] text-[#1F2937]/60 leading-none">Entregada</p>
              <p className="text-sm font-display font-semibold text-[#0B0F14]">en 7 días</p>
            </div>
          </motion.div>

          {/* BOTTOM LEFT — dark accent block */}
          <motion.div
            style={{ y: yBlockBL }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="absolute bottom-[2%] left-[-2%] sm:left-[4%] z-20 hidden md:flex items-center gap-2 bg-[#0B0F14] text-white rounded-2xl px-4 py-3 shadow-[0_20px_40px_-15px_rgba(11,15,20,0.5)]"
          >
            <Globe className="w-4 h-4 text-[#A3FF12]" />
            <p className="text-sm font-display font-semibold">Hecho en Argentina</p>
          </motion.div>

          {/* BOTTOM RIGHT */}
          <motion.div
            style={{ y: yBlockBR }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-[20%] right-[-1%] sm:right-[3%] z-20 hidden md:flex items-center gap-2 bg-white rounded-full pl-2 pr-4 py-2 shadow-[0_20px_40px_-15px_rgba(11,15,20,0.25)] border border-black/5"
          >
            <span
              className="flex items-center justify-center w-7 h-7 rounded-full text-[#0B0F14]"
              style={{ background: "linear-gradient(135deg, #A3FF12, #6EEB00)" }}
            >
              <Sparkles className="w-3.5 h-3.5" strokeWidth={2.5} />
            </span>
            <p className="text-xs font-display font-semibold text-[#0B0F14]">Diseño a medida</p>
          </motion.div>

          {/* Laptop transparent */}
          <motion.div
            style={{ y: yLaptop, scale: scaleLaptop }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative z-10"
          >
            <motion.div
              animate={reduce ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={heroLaptop}
                alt="Laptop con la web Tu web lista YA en español"
                width={1264}
                height={848}
                className="w-full h-auto select-none pointer-events-none drop-shadow-[0_30px_40px_rgba(11,15,20,0.18)]"
                draggable={false}
              />
            </motion.div>
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
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-[#1F2937]/50 pointer-events-none"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase font-semibold">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#0B0F14]/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
