import { motion } from "framer-motion";
import {
  Rocket,
  User,
  Briefcase,
  Sparkles,
  Palette,
  LayoutList,
  Smartphone,
  Zap,
  type LucideIcon,
} from "lucide-react";

const audiences: { label: string; icon: LucideIcon }[] = [
  { label: "Emprendedores", icon: Rocket },
  { label: "Profesionales independientes", icon: User },
  { label: "Servicios", icon: Briefcase },
  { label: "Marcas personales", icon: Sparkles },
];

const features: { label: string; icon: LucideIcon }[] = [
  { label: "Diseño personalizado", icon: Palette },
  { label: "Estructura clara", icon: LayoutList },
  { label: "Estética alineada a tu marca", icon: Sparkles },
  { label: "Versión mobile", icon: Smartphone },
  { label: "Entrega rápida", icon: Zap },
];

export function ParaQuienIncluyeSection() {
  return (
    <section className="py-32 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 sm:divide-x divide-white/15">
        {/* Para quién es */}
        <div className="sm:pr-8 md:pr-12 pb-16 sm:pb-0 text-left">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-widest uppercase mb-12 text-[#c8fb6a] font-semibold"
          >
            Para quién es
          </motion.p>
          <div className="space-y-6">
            {audiences.map(({ label, icon: Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center gap-4"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-[#c8fb6a] shrink-0 ring-1 ring-[#c8fb6a]/30">
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </span>
                <span className="text-lg font-medium">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Qué incluye */}
        <div className="sm:pl-8 md:pl-12 pt-16 sm:pt-0 border-t sm:border-t-0 border-white/15 text-left">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-widest uppercase mb-12 text-[#c8fb6a] font-semibold"
          >
            Qué incluye
          </motion.p>
          <div className="space-y-6">
            {features.map(({ label, icon: Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center gap-4"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-[#c8fb6a] shrink-0 ring-1 ring-[#c8fb6a]/30">
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </span>
                <span className="text-lg font-medium">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}