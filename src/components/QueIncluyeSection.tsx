import { motion } from "framer-motion";

const features = [
  "Diseño personalizado",
  "Estructura clara",
  "Estética alineada a tu marca",
  "Versión mobile",
  "Entrega rápida",
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
          {features.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center gap-4 font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-foreground shrink-0" />
              <span className="text-xl font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
