import { motion } from "framer-motion";
import { Palette, LayoutList, Sparkles, Smartphone, Zap, type LucideIcon } from "lucide-react";

const features: { label: string; icon: LucideIcon }[] = [
  { label: "Diseño personalizado", icon: Palette },
  { label: "Estructura clara", icon: LayoutList },
  { label: "Estética alineada a tu marca", icon: Sparkles },
  { label: "Versión mobile", icon: Smartphone },
  { label: "Entrega rápida", icon: Zap },
];

export function QueIncluyeSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-widest uppercase text-muted-foreground mb-12 text-[#c8fb6a] font-semibold"
        >
          Qué incluye
        </motion.p>
        <div className="space-y-6 font-medium">
          {features.map(({ label, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center gap-4 font-medium"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-[#c8fb6a] shrink-0">
                <Icon className="w-5 h-5" strokeWidth={2} />
              </span>
              <span className="text-xl font-medium">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
