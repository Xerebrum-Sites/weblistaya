import { motion } from "framer-motion";
import { ShieldCheck, Clock, BadgeCheck } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Garantía 100%",
    text: "Si no te gusta el primer diseño, te devolvemos la seña.",
  },
  {
    icon: Clock,
    title: "Cupos limitados",
    text: "Tomamos pocos proyectos por mes para cuidar la calidad.",
  },
  {
    icon: BadgeCheck,
    title: "Sin sorpresas",
    text: "Precio cerrado desde el día uno. Sin costos ocultos.",
  },
];

export function GarantiaSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center gap-4"
          >
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-black text-[#c8fb6a]">
              <item.icon className="w-6 h-6" strokeWidth={2} />
            </span>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-base text-muted-foreground leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}