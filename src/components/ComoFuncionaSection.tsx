import { motion } from "framer-motion";
import { MessageSquare, FileText, Palette, Rocket } from "lucide-react";

const steps = [
  { n: "01", icon: MessageSquare, title: "Nos contás tu idea", text: "Hablamos por WhatsApp y entendemos qué necesitás." },
  { n: "02", icon: FileText, title: "Ordenamos el contenido", text: "Te guiamos para que la información quede clara y vendedora." },
  { n: "03", icon: Palette, title: "Diseñamos tu web", text: "Creamos tu sitio a medida, profesional y mobile-first." },
  { n: "04", icon: Rocket, title: "La publicamos lista", text: "La subimos online y te la entregamos andando." },
];

export function ComoFuncionaSection() {
  return (
    <section id="proceso" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#0B0F14] text-white relative overflow-hidden">
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #A3FF12 0%, transparent 70%)" }}
      />
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs tracking-[0.2em] uppercase font-bold mb-4 text-[#A3FF12]">Cómo funciona</p>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-[1.1]">
            Cuatro pasos. Cero complicaciones.
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-5">
          {/* Connector line on desktop */}
          <div
            aria-hidden
            className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px"
            style={{ background: "linear-gradient(90deg, transparent, rgba(163,255,18,0.4), transparent)" }}
          />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-white/[0.04] border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-[#A3FF12]/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-5">
                <span
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl text-[#0B0F14] font-bold"
                  style={{ background: "linear-gradient(135deg, #A3FF12 0%, #6EEB00 100%)" }}
                >
                  <s.icon className="w-5 h-5" strokeWidth={2.25} />
                </span>
                <span className="text-xs font-bold tracking-widest text-[#A3FF12]/80">{s.n}</span>
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full px-7 py-4 text-base font-semibold text-[#0B0F14] hover:-translate-y-0.5 transition-all"
            style={{ background: "linear-gradient(135deg, #A3FF12 0%, #6EEB00 100%)" }}
          >
            Empezar hoy
          </a>
        </div>
      </div>
    </section>
  );
}
