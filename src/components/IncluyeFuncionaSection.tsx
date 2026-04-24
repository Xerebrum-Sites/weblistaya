import { motion } from "framer-motion";
import { Palette, LayoutList, Sparkles, Smartphone, Zap, type LucideIcon } from "lucide-react";

const features: { label: string; icon: LucideIcon }[] = [
  { label: "Diseño personalizado", icon: Palette },
  { label: "Estructura clara", icon: LayoutList },
  { label: "Estética alineada a tu marca", icon: Sparkles },
  { label: "Versión mobile", icon: Smartphone },
  { label: "Entrega rápida", icon: Zap },
];

const steps = [
  { number: "01", text: "Nos contás tu idea" },
  { number: "02", text: "Ordenamos el contenido" },
  { number: "03", text: "Diseñamos tu web" },
  { number: "04", text: "Te la entregamos lista" },
];

export function IncluyeFuncionaSection() {
  return (
    <section className="py-32 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 md:divide-x divide-white/15">
        {/* Qué incluye */}
        <div className="md:pr-12 pb-16 md:pb-0 text-center flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-widest uppercase mb-12 text-[#c8fb6a] font-semibold"
          >
            Qué incluye
          </motion.p>
          <div className="space-y-6 w-full max-w-sm">
            {features.map(({ label, icon: Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center justify-center gap-4"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-[#c8fb6a] shrink-0 ring-1 ring-[#c8fb6a]/30">
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </span>
                <span className="text-lg font-medium">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Cómo funciona */}
        <div className="md:pl-12 pt-16 md:pt-0 border-t md:border-t-0 border-white/15 text-center flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-widest uppercase mb-12 font-semibold text-[#c8fb6a]"
          >
            Cómo funciona
          </motion.p>
          <div className="space-y-6 w-full max-w-sm">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center justify-center gap-4"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#c8fb6a] text-black text-sm tabular-nums font-semibold shrink-0">
                  {step.number}
                </span>
                <span className="text-lg font-medium">{step.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
