import { motion } from "framer-motion";
import { Zap, Check, DollarSign, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Rápido",
    text: "Tu web online en pocos días, no en meses. Sin demoras ni esperas eternas.",
    highlight: "5 días",
  },
  {
    icon: Check,
    title: "Simple",
    text: "Nos encargamos de todo. Vos sumás tu contenido y nosotros hacemos el resto.",
    highlight: "Sin fricción",
  },
  {
    icon: DollarSign,
    title: "Económico",
    text: "Precio cerrado desde el día uno. Pago en cuotas, sin sorpresas ni costos ocultos.",
    highlight: "Sin sorpresas",
  },
];

export function BeneficiosSection() {
  return (
    <section id="beneficios" className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.2em] uppercase text-[#6EEB00] font-bold mb-4"
          >
            Por qué elegirnos
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-[#0B0F14] text-3xl sm:text-4xl md:text-5xl leading-[1.1]"
          >
            Tres razones simples para empezar hoy.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl p-7 bg-[#F5F7FA] border border-black/5 hover:border-[#6EEB00]/40 hover:shadow-[0_20px_50px_-20px_rgba(110,235,0,0.35)] hover:-translate-y-1 transition-all"
            >
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl text-[#0B0F14] mb-5"
                style={{ background: "linear-gradient(135deg, #A3FF12 0%, #6EEB00 100%)" }}
              >
                <b.icon className="w-6 h-6" strokeWidth={2.25} />
              </div>
              <span className="inline-block text-[10px] font-bold tracking-wider uppercase text-[#6EEB00] mt-4 mb-2">
                {b.highlight}
              </span>
              <h3 className="font-display font-bold text-2xl text-[#0B0F14] mb-2">{b.title}</h3>
              <p className="text-[#1F2937]/70 leading-relaxed">{b.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 rounded-full px-7 h-13 py-4 text-base font-semibold text-[#0B0F14] shadow-[0_12px_30px_-8px_rgba(110,235,0,0.55)] hover:-translate-y-0.5 transition-all"
            style={{ background: "linear-gradient(135deg, #A3FF12 0%, #6EEB00 100%)" }}
          >
            Quiero mi web lista <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
