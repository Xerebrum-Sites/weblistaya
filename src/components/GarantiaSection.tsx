import { motion } from "framer-motion";
import { ShieldCheck, Clock, BadgeCheck } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Garantía 100%", text: "Si no te gusta el primer diseño, te devolvemos la seña." },
  { icon: Clock, title: "Cupos limitados", text: "Tomamos pocos proyectos por mes para cuidar la calidad." },
  { icon: BadgeCheck, title: "Sin sorpresas", text: "Precio cerrado desde el día uno. Sin costos ocultos." },
];

export function GarantiaSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#F5F7FA]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-black/5"
          >
            <span
              className="flex items-center justify-center w-12 h-12 rounded-xl text-[#0B0F14] shrink-0"
              style={{ background: "linear-gradient(135deg, #A3FF12 0%, #6EEB00 100%)" }}
            >
              <item.icon className="w-6 h-6" strokeWidth={2.25} />
            </span>
            <div>
              <h3 className="font-display font-semibold text-lg text-[#0B0F14]">{item.title}</h3>
              <p className="text-sm text-[#1F2937]/70 leading-relaxed mt-1">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
