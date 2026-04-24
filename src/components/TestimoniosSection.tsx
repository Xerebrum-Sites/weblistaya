import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonios = [
  {
    text: "En menos de una semana tenía mi web online. Quedó hermosa y empecé a recibir consultas el mismo día.",
    name: "Lucía Martínez",
    role: "Nutricionista",
  },
  {
    text: "Súper claros y rápidos. Me sacaron el dolor de cabeza de tener que armarla yo. Recomendado 100%.",
    name: "Martín Pereyra",
    role: "Arquitecto",
  },
  {
    text: "Entendieron lo que necesitaba sin que tenga que explicar mil veces. La web refleja perfecto mi marca.",
    name: "Sofía Romero",
    role: "Coach",
  },
];

export function TestimoniosSection() {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-widest uppercase text-muted-foreground mb-4 font-semibold"
        >
          Lo que dicen
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-16 leading-tight max-w-2xl"
        >
          Clientes felices, webs que venden.
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonios.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-[#c8fb6a] text-[#c8fb6a]" />
                ))}
              </div>
              <p className="text-base leading-relaxed mb-6 flex-1">"{t.text}"</p>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}